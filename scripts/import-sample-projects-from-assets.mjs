import "dotenv/config";

import { copyFile, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../src/generated/prisma/client.js";

const rootDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const importRoot = path.join(rootDir, "content-import", "to-am-hoan-hao");
const publicUploadRoot = path.join(rootDir, "public", "uploads", "du-an");
const inventoryPath = path.join(
  importRoot,
  "inventory",
  "old-site-content-inventory.json",
);
const reportPath = path.join(
  importRoot,
  "inventory",
  "sample-project-import-report.md",
);
const parseOnlySlug = process.argv
  .find((argument) => argument.startsWith("--parse-only="))
  ?.split("=")
  .at(1);
const importSlug = process.argv
  .find((argument) => argument.startsWith("--slug="))
  ?.split("=")
  .at(1);
const importStatus = process.argv.includes("--draft") ? "draft" : "published";

const sampleSlugs = [
  "thiet-ke-noi-that-chung-cu-vinhomes-grandpark-17",
  "thiet-ke-can-ho-studio-30m2-tone-xanh-trang-01",
  "thiet-ke-noi-that-can-ho-72m2-tone-den-ca-tinh-18",
  "thiet-ke-noi-that-chung-cu-5",
  "thiet-ke-thi-cong-noi-that-chung-cu-85-m2",
];

const businessSpaceProjectSlugs = new Set([
  "bali-coffee-thiet-ke-quan-ca-phe-diatrunghai-04",
  "thiet-ke-quan-ca-phe-phong-cachtropical-shoha-02",
  "thiet-ke-cua-hang-cat-toc-va-xam-hinh-120m2-tai-thanh-pho-ho-chi-minh",
  "dream-bean-coffee-320m2-mau-thiet-ke-quan-ca-phe-2",
  "ocean-coffee-thiet-ke-quan-ca-phe-170m2-tone-06",
  "break-coffee-thiet-ke-quan-ca-phe-148m2-doc-la-05",
  "jungle-coffee-thiet-ke-quan-ca-phe-90m2-03",
  "thiet-ke-quan-ca-phe-chau-au-daily-dose-240m2-02",
  "kaba-coffee-thiet-ke-quan-ca-phe-260m2-04",
]);

const projectOverrides = {
  "thiet-ke-noi-that-chung-cu-vinhomes-grandpark-17": {
    title: "Căn hộ Vinhomes Grandpark 82m2",
    italicTitle: "Vinhomes Grandpark",
    area: "82m²",
    bedrooms: "3 phòng ngủ",
    style: "Modern Luxury",
    location: "TP. Hồ Chí Minh",
  },
  "thiet-ke-can-ho-studio-30m2-tone-xanh-trang-01": {
    title: "Căn hộ Studio 30m2 tone xanh trắng",
    italicTitle: "Studio xanh trắng",
    area: "30m²",
    bedrooms: "Studio",
    style: "Modern Compact",
    location: "TP. Hồ Chí Minh",
  },
  "thiet-ke-noi-that-can-ho-72m2-tone-den-ca-tinh-18": {
    title: "Căn hộ 72m2 tone đen cá tính",
    italicTitle: "Tone đen cá tính",
    area: "72m²",
    bedrooms: "2 phòng ngủ",
    style: "Modern Luxury",
    location: "TP. Hồ Chí Minh",
  },
  "thiet-ke-noi-that-chung-cu-5": {
    title: "Chung cư 2PN hiện đại 78m2",
    italicTitle: "2PN hiện đại",
    area: "78m²",
    bedrooms: "2 phòng ngủ",
    style: "Modern",
    location: "TP. Hồ Chí Minh",
  },
  "thiet-ke-thi-cong-noi-that-chung-cu-85-m2": {
    title: "Chung cư 85m2 phong cách Nhật Bản",
    italicTitle: "Phong cách Nhật Bản",
    area: "85m²",
    bedrooms: "2 phòng ngủ",
    style: "Japandi",
    location: "TP. Hồ Chí Minh",
  },
  "thiet-ke-va-thi-cong-biet-thu-800-m2": {
    title: "Biệt thự 800m2 tại Bình Dương",
    italicTitle: "800m2 Bình Dương",
    area: "800m²",
    bedrooms: "Đang cập nhật",
    style: "Hiện đại",
    location: "Bình Dương",
  },
  "cong-trinh-biet-thu-vinhomes-riverside-tieu-khu-phong-lan": {
    title: "Biệt thự Vinhomes Riverside - Tiểu khu Phong Lan",
    italicTitle: "Vinhomes Riverside",
    area: "150m²",
    bedrooms: "Đang cập nhật",
    style: "Tân cổ điển",
    location: "Vinhomes Riverside, Hà Nội",
  },
  "thiet-ke-cua-hang-cat-toc-va-xam-hinh-120m2-tai-thanh-pho-ho-chi-minh": {
    title: "Cửa hàng cắt tóc và xăm hình 120m2",
    italicTitle: "Cắt tóc & xăm hình",
    area: "120m²",
    bedrooms: "Không áp dụng",
    style: "Hiện đại",
    location: "TP. Hồ Chí Minh",
  },
  "noi-that-nha-pho": {
    title: "Nội thất nhà phố anh Hoan 210m2",
    italicTitle: "Nhà phố anh Hoan",
    area: "210m²",
    bedrooms: "Đang cập nhật",
    style: "Hiện đại",
    location: "TP. Hồ Chí Minh",
  },
};

const storyTitles = [
  "Tối ưu công năng",
  "Cân bằng ánh sáng",
  "Vật liệu ấm áp",
];

const customProjectStories = {
  "thiet-ke-noi-that-chung-cu-vinhomes-grandpark-17": [
    {
      title: "Thông tin dự án",
      description:
        "Dự Án: Thiết kế nội thất chung cư tại Vinhomes GrandPark\n\nĐơn vị phụ trách: Tổ ấm hoàn hảo\n\nDiện tích: 82m2\n\nPhong cách: Hiện đại, sang trọng",
      imageIndex: 0,
    },
    {
      title: "Phong cách thiết kế nội thất chung cư",
      description:
        "Phong cách hiện đại, sang trọng được lựa chọn trong hầu hết các thiết kế nội thất chung cư, đây là nét đẹp của sự tinh tế kết hợp với sự xa hoa. Ngay từ ánh nhìn đầu tiên, có thể thấy căn hộ này được thiết kế không có bất kỳ chi tiết nào quá dư thừa và rườm rà. Sử dụng gam màu trắng cho toàn bộ không gian, nội thất tuy đơn giản, tổng thể vẫn đem lại sự đẳng cấp cho cả căn nhà.",
      imageIndex: 1,
    },
    {
      title: "Mặt bằng công năng",
      description:
        "Với ưu điểm về diện tích 82m2, đây là sự lựa chọn thích hợp lâu dài cho một không gian sống thoải mái, đầy đủ mọi công năng gia đình bạn.",
      imageIndex: 2,
    },
    {
      title: "Phòng khách trong thiết kế nội thất chung cư",
      description:
        "Phòng khách với thiết kế không gian mở, liên thông với khu vực bàn ăn và phòng bếp, điều này đã đem lại cảm giác không gian của căn hộ trở nên thông thoáng, và được “nới rộng” ra hơn nhất nhiều.\n\nMàu trắng được sử dụng làm màu chủ đạo, kết hợp một chút màu xanh, tạo sự tươi mát, sáng bừng cho bất kỳ ai khi bước từ cửa chính vào. Điểm nhấn bằng các đường viền chỉ màu vàng ánh kim làm toát lên vẻ kiêu sa trong từng chi tiết.",
      imageIndex: 4,
    },
    {
      title: "Phòng khách trong thiết kế nội thất chung cư",
      description:
        "Chiếc sofa màu kem nhã nhặn, với đường nét thiết kế bo tròn và một chút cổ điển lạ mắt được đặt tại phòng khách, bên cạnh tính thẩm mỹ, lựa chọn chất liệu cũng rất quan trọng, sofa với chất liệu Canvas cao cấp, có độ bền cao, cảm giác mềm mịn, thoáng mát khi ngồi.\n\nBàn trà có hình dáng tròn đơn giản, tinh tế cùng tone màu chủ đạo, mặt đá hoa cương sáng bóng.\n\nĐể tạo điểm nhấn, chúng tôi lắp đặt một chiếc đèn thả trần có kết cấu các vòng tròn không đối xứng độc lạ, mang lại sự sáng tạo trong thiết kế.Thảm lông màu nâu sáng được đặt dưới bộ sofa càng khiến cho không gian phòng khách trở nên ấm cúng hơn.",
      imageIndex: 5,
    },
    {
      title: "Phòng khách trong thiết kế nội thất chung cư",
      description:
        "Tivi treo trên vách ốp pvc giả vân đá, vừa tối ưu diện tích không gian, vừa đem lại sự thanh nhã. Tủ tivi với chất liệu gỗ công nghiệp, được thiết kế bo tròn các cạnh, an toàn cho gia đình có trẻ nhỏ.",
      imageIndex: 6,
    },
    {
      title: "Phòng bếp với thiết kế cao cấp",
      description:
        "Phòng bếp được coi là “trái tim” của căn nhà, do đó, chúng tôi đã rất chú trọng thiết kế trong từng chi tiết đảm bảo đem lại những trải nghiệm tuyệt vời cho gia đình khách hàng.\n\nĐầu tiên, chúng tôi lắp đặt hệ tủ bếp hình chữ L, sản xuất hoàn toàn bằng gổ công nghiệp và phủ sơn cao cấp, chống mốt mọt qua thời gian dài sử dụng. Tủ bếp được chia thành nhiều ngăn mở ngang, dọc có sức lưu trữ cực lớn. Đặc biệt, trong thiết kế nội thất chung cư khác với thiết kế truyền thống, ngày nay tủ bếp được lắp đặt thêm các dạng kệ kéo thông minh, giúp công việc bếp núc trở nên dễ dàng hơn rất nhiều.\n\nMặt bếp và vách tường làm bằng đá hoa cương có độ bền cao, dễ dàng vệ sinh lớp dầu mỡ tồn động, kết hợp dàn đèn led âm tủ tạo hiệu ứng bắt mắt, hiện đại.Ngay tại một bên khu vực bếp, chúng tôi thi công lắp đặt thêm tủ trưng bày, nơi đây là một góc nghệ thuật trong nhà, gia chủ có thể sưu tầm những chai rượu yêu thích, tạo nên sự đẳng cấp, thời thượng cho không gian.",
      imageIndex: 7,
    },
    {
      title: "Khu vực bàn ăn",
      description:
        "Từ cửa chính bước vào, là khu vực tủ giầy được thiết kế thông minh kết hợp hệ thống led chiếu sáng càng làm nổi bật tính thẩm mĩ. Đây là nơi gia chủ có thể thay đổi giày, dép để những đồ cần thiết để nhắc nhở bản thân cần đem theo trước khi ra khỏi nhà. Một hệ tủ vô cùng đơn giản, nhưng lại là một trong những phần nội thất không thể thiếu trong thiết kế nội thất chung cư để đem đến không gian ngăn nắp\n\nKhu vực bàn ăn là vị trí kết nối bếp và phòng khách, chúng tôi sử dụng bộ bàn ăn với kiểu dáng sang trọng, và một chút hơi hướng phương Tây mang đến sự đẳng cấp.Lựa chọn bàn ăn với chât liệu gỗ cao cấp, để mang đến sự cổ điển chúng tôi kết hợp bàn ăn với 4 chiếc ghế làm bằng chất liệu bọc da, khung ghế cũng từ chất liệu gỗ đồng nhất với bàn ăn, màu sắc trang nhã, hoàn thiện nên một không gian ấm áp, lãng mạn nơi cả gia đình sẽ cùng nhau trò chuyện trong mỗi bữa ăn.",
      imageIndex: 8,
    },
    {
      title: "Phòng ngủ master",
      description:
        "Trong thiết kế nội thất chung cư, phòng ngủ master luôn được đầu tư kỉ càng, vì đây là nơi nghỉ ngơi và làm việc của chủ nhà.\n\nTone màu chủ đạo trắng, ghi, nâu tinh tế. Vách tường tạo dựng các hốc tủ dùng làm kệ sách hoặc trưng bày một vài bức tượng nghệ thuật.\n\nGiữa phòng được đặt một chiếc giường cỡ lớn với chất liệu bọc nỉ cao cấp, khung giường làm bằng gỗ cực kì chắc chắn.\n\nTab đầu giường được đặt đối xứng, vừa tiện lợi, vừa bắt mắt.",
      imageIndex: 9,
    },
    {
      title: "Phòng ngủ master",
      description:
        "Tận dụng ánh sáng tự nhiên từ cửa kính lớn kết hợp bộ rèm vải 2 lớp cùng màu sắc nhã nhặn, đem lại nguồn sáng dịu nhẹ cho toàn không gian phòng ngủ.",
      imageIndex: 10,
    },
    {
      title: "Phòng ngủ master",
      description:
        "Tủ quần áo áp trần cực lớn, hệ cửa lùa, được đặt sát tường tối ưu được phần lớn diện tích. Đối diện giường ngủ là hệ tủ tivi thiết kế đơn giản cùng tích hợp làm bàn trang điểm cho nữ gia chủ. Và cũng đừng quên đặt một vài chậu hoa đem lại sự tươi mới cho căn phòng của mình nhé!",
      imageIndex: 11,
    },
    {
      title: "Phòng ngủ thứ hai",
      description:
        "Phòng ngủ 2 khác biệt hoàn toàn so với tone màu trắng của thiết kế nội thất chung cư này. Ở đây, chúng tôi sơn toàn bộ căn phòng với màu xanh rất bắt mắt. Tiêu chí chúng tôi muốn tạo nên một không gian nghỉ ngơi thứ 2 với đầy đủ tiện nghi, nhưng không cầu kỳ. Giường ngủ chất liệu bọc nỉ caao cấp, màu trung tính. Vách tường thay vì trang trí rườm rà, chúng tôi sử dụng họa tiết phào chỉ nhẹ nhàng nhưng vẫn sang trọng.",
      imageIndex: 12,
    },
    {
      title: "Phòng ngủ thứ hai",
      description:
        "Tủ áo quần cao sát trần đang là xu hướng trong thiết kế nội thất chung cư, hệ tủ chia thành nhiều ngăn khác nhau càng có thêm nhiều không gian lưu trữ, tủ được che đậy bằng các tấm cửa kính thiết kế kiểu lùa, tối màu sang trọng.",
      imageIndex: 13,
    },
    {
      title: "Phòng ngủ thứ ba",
      description:
        "Không vì giới hạn về diện tích, phòng ngủ thứ 3 vẫn đầy đủ tiện nghi nhưng không hề bị “ngộp”.\n\nGiường ngủ nhỏ gọn, chất liệu vải nỉ êm ái, đem lại giấc ngủ trọn vẹn cho chủ nhân căn phòng, một chiếc đèn rọi treo tường là nguồn sáng lý tưởng để bạn có thể đọc sách vào mỗi đêm.",
      imageIndex: 14,
    },
    {
      title: "Phòng ngủ thứ ba",
      description:
        "Điều đặc biệt trong thiết kế nội thất chung cư tại căn phòng này là hệ tủ quần áo, kệ sách, bàn làm việc được tích hợp thành 1 bộ hoàn chỉnh vô cùng gọn gàng và sáng tạo với tone màu trắng tinh giản.\n\nChúng tôi lắp đặt hệ rèm kéo, tận dụng tối đa nguồn sáng tự nhiên vào toàn bộ căn phòng.",
      imageIndex: 15,
    },
    {
      title: "Ban công thư giãn",
      description:
        "Trong thiết kế nội thất chung cư, mỗi căn hộ do đội ngũ Tổ Ấm Hoàn Hảo đều sở hữu ban công rộng cùng với thiết kế chắc chắn, an toàn tạo nên không gian mở hòa quyện với thiên nhiên.",
      imageIndex: 16,
    },
    {
      title: "Ban công thư giãn",
      description:
        "Tại đây, gia chủ có thể trồng một số loại cây yêu thích, đặt một bộ bàn ghế nhỏ làm riêng cho mình một khu vườn thật chill để tận hưởng sau những ngày làm việc mệt mỏi.",
      imageIndex: 17,
    },
  ],
};

const customProjectOverviewParagraphs = {
  "thiet-ke-noi-that-chung-cu-vinhomes-grandpark-17": [
    "Qua nhiều lần trao đổi và tìm hiểu, đội ngũ Tổ Ấm Hoàn Hảo triển khai dự án trên tiêu chí thấu hiểu nhu cầu sinh hoạt thật của khách hàng trước khi đưa ra phương án thiết kế.",
    "Căn hộ Vinhomes Grandpark 82m² được xử lý theo tinh thần hiện đại, sang trọng, ưu tiên sự sáng thoáng, công năng rõ ràng và cảm giác tiện nghi trong từng khu vực sử dụng.",
  ],
};

const customProjectFloorPlanImageIndexes = {
  "thiet-ke-noi-that-chung-cu-vinhomes-grandpark-17": 2,
};

const prisma = new PrismaClient({
  adapter: new PrismaMariaDb(process.env.DATABASE_URL ?? ""),
});

async function main() {
  const inventory = JSON.parse(await readFile(inventoryPath, "utf8"));

  if (parseOnlySlug) {
    const item = inventory.find((candidate) => candidate.slug === parseOnlySlug);

    if (!item) {
      throw new Error(`Không tìm thấy asset để test parser: ${parseOnlySlug}`);
    }

    const oldPost = await fetchOldPost(item.slug);
    const sourceStories = oldPost
      ? parseStorySources(oldPost.content?.rendered ?? "")
      : [];
    const facts = parseProjectFacts(item, oldPost);

    console.log(
      JSON.stringify(
        {
          slug: item.slug,
          title: facts.title,
          area: facts.area,
          areaSource: facts.areaSource,
          bedrooms: facts.bedrooms,
          style: facts.style,
          location: facts.location,
          storyCount: sourceStories.length,
          oldImageCount: item.webp?.readyCount ?? item.imageCount ?? 0,
        },
        null,
        2,
      ),
    );

    return;
  }

  const slugsToImport = importSlug ? [importSlug] : sampleSlugs;
  const items = slugsToImport.map((slug) => {
    const item = inventory.find(
      (candidate) => candidate.slug === slug && candidate.folder.startsWith("du-an/"),
    );

    if (!item) {
      throw new Error(`Không tìm thấy asset dự án: ${slug}`);
    }

    return item;
  });
  const oldPostsBySlug = new Map(
    await Promise.all(
      items.map(async (item) => [item.slug, await fetchOldPost(item.slug)]),
    ),
  );

  const imported = [];

  await prisma.$transaction(async (tx) => {
    for (const [index, item] of items.entries()) {
      const override = projectOverrides[item.slug] ?? {};
      const oldPost = oldPostsBySlug.get(item.slug);
      const projectMeta = getProjectMeta(item);
      const parsedFacts = parseProjectFacts(item, oldPost);
      const sourceStories = oldPost
        ? parseStorySources(oldPost.content?.rendered ?? "")
        : [];
      const importImages = selectImagesForImport(item, oldPost);
      const images = await prepareImages(item, importImages);
      const storyBlocks = buildStoryBlocks(item.slug, images, sourceStories);
      const floorPlanImage = getFloorPlanImage(item.slug, images, sourceStories);
      const overviewParagraphs =
        customProjectOverviewParagraphs[item.slug] ?? [
          "Dữ liệu dự án được import từ website cũ để kiểm tra giao diện mới với ảnh thật và nội dung thật.",
          "Các trường chi tiết như mô tả, mặt bằng, ngân sách và thông số kỹ thuật sẽ tiếp tục được biên tập trong admin trước khi xuất bản chính thức.",
        ];
      const title = override.title ?? parsedFacts.title;
      const area = override.area ?? parsedFacts.area;
      const bedrooms = override.bedrooms ?? parsedFacts.bedrooms;
      const style = truncateText(override.style ?? parsedFacts.style, 191);
      const location = truncateText(override.location ?? parsedFacts.location, 191);
      const summary = cleanImportedText(
        item.excerpt ||
          "Không gian căn hộ được thiết kế lại theo hướng ấm áp, tiện nghi và phù hợp thói quen sinh hoạt của gia đình.",
      );
      const relatedSlugs = sampleSlugs
        .filter((slug) => slug !== item.slug)
        .slice(0, 3);

      await tx.project.deleteMany({ where: { slug: item.slug } });

      const project = await tx.project.create({
        data: {
          title,
          slug: item.slug,
          category: projectMeta.category,
          location,
          area,
          year: yearFromDate(item.date),
          style,
          thumbnail: images[0],
          summary,
          featured: item.slug === sampleSlugs[0],
          sortOrder: sampleSlugs.includes(item.slug)
            ? -100 + sampleSlugs.indexOf(item.slug)
            : -50 + index,
          status: importStatus,
          publishedAt: importStatus === "published" ? new Date() : null,
          detail: {
            create: {
              eyebrow: projectMeta.eyebrow,
              displayTitle: projectMeta.displayTitle,
              italicTitle: override.italicTitle ?? parsedFacts.italicTitle,
              heroImage: images[0],
              description: summary,
              bedrooms,
              bathrooms: "Đang cập nhật",
              duration: "Đang cập nhật",
              scope: "Thiết kế & thi công nội thất",
              overviewTitle: "Không gian sống được tối ưu từ nhu cầu thật",
              overviewParagraphs,
              floorPlanImage,
              seoTitle: `${title} | Tổ Ấm Hoàn Hảo`,
              seoDescription: summary,
            },
          },
          metrics: {
            create: [
              metric("Diện tích", area, 0),
              metric("Hạng mục", "Thiết kế & thi công nội thất", 1),
              metric("Thời gian", "Đang cập nhật", 2),
              metric("Phong cách", style, 3),
            ],
          },
          infoRows: {
            create: [
              infoRow("Vị trí", location, 0),
              infoRow("Diện tích", area, 1),
              infoRow("Hạng mục", "Thiết kế & thi công nội thất", 2),
              infoRow("Phòng ngủ", bedrooms, 3),
              infoRow("Phong cách", style, 4),
            ],
          },
          spaces: {
            create: images.map((image, imageIndex) => ({
              title: `Ảnh dự án ${String(imageIndex + 1).padStart(2, "0")}`,
              image,
              sortOrder: imageIndex,
            })),
          },
          storyBlocks: {
            create: storyBlocks,
          },
          floorPlanNotes: {
            create: [
              infoRow("Tối ưu giao thông", "Bố trí lối di chuyển thông thoáng giữa các khu vực.", 0),
              infoRow("Tăng sáng tự nhiên", "Ưu tiên mảng sáng và vật liệu giúp không gian rộng hơn.", 1),
              infoRow("Lưu trữ hợp lý", "Tận dụng hệ tủ để căn hộ gọn gàng trong sử dụng hằng ngày.", 2),
              infoRow("Đồng nhất vật liệu", "Giữ bảng màu và vật liệu xuyên suốt để tổng thể hài hòa.", 3),
            ],
          },
        },
      });

      imported.push({
        id: project.id,
        slug: item.slug,
        title,
        imageCount: images.length,
        oldImageCount: item.webp?.readyCount ?? item.imageCount ?? 0,
        storyCount: storyBlocks.length,
        area,
        areaSource: override.area ? "override" : parsedFacts.areaSource,
        category: projectMeta.label,
        oldUrl: item.oldUrl,
      });

      const relatedProjects = await tx.project.findMany({
        where: { slug: { in: relatedSlugs } },
        select: { id: true, slug: true },
      });

      if (relatedProjects.length > 0) {
        await tx.projectRelated.createMany({
          data: relatedProjects.map((relatedProject, relatedIndex) => ({
            projectId: project.id,
            relatedProjectId: relatedProject.id,
            sortOrder: relatedIndex,
          })),
          skipDuplicates: true,
        });
      }
    }
  });

  await writeFile(reportPath, buildReport(imported));
  console.table(imported);
  console.log(`Report: ${reportPath}`);
}

async function prepareImages(item, selectedImages) {
  if (selectedImages.length === 0) {
    throw new Error(`Dự án không có ảnh để import: ${item.slug}`);
  }

  const itemDir = path.join(importRoot, item.folder, item.slug);
  const targetDir = path.join(publicUploadRoot, item.slug);
  await rm(targetDir, { recursive: true, force: true });
  await mkdir(targetDir, { recursive: true });

  const publicPaths = [];

  for (const [index, image] of selectedImages.entries()) {
    const sourcePath = path.join(itemDir, image);
    const targetName = `${String(index + 1).padStart(2, "0")}-${path.basename(
      image,
    )}`;
    const targetPath = path.join(targetDir, targetName);

    await copyFile(sourcePath, targetPath);
    publicPaths.push(`/uploads/du-an/${item.slug}/${targetName}`);
  }

  return publicPaths;
}

async function fetchOldPost(slug) {
  const url = `https://toamhoanhao.vn/wp-json/wp/v2/posts?slug=${encodeURIComponent(
    slug,
  )}&_fields=slug,title,excerpt,content,link`;
  const response = await fetch(url);

  if (!response.ok) {
    console.warn(`Không lấy được nội dung cũ cho ${slug}: ${response.status}`);
    return undefined;
  }

  const posts = await response.json();

  return Array.isArray(posts) ? posts[0] : undefined;
}

function parseStorySources(html) {
  const blocks = [
    ...html.matchAll(
      /(<h[23][^>]*>[\s\S]*?<\/h[23]>|<p[^>]*>[\s\S]*?<\/p>|<[ou]l[^>]*>[\s\S]*?<\/[ou]l>|<figure[\s\S]*?<\/figure>)/gi,
    ),
  ].map((match) => match[0]);
  const stories = [];
  let currentTitle = "Câu chuyện thiết kế";
  let pendingParagraphs = [];
  let imageIndex = 0;

  for (const block of blocks) {
    if (/^<h[23]/i.test(block)) {
      currentTitle = normalizeImportedTitle(cleanImportedText(stripHtml(block)));
      pendingParagraphs = [];
      continue;
    }

    if (/^<p/i.test(block)) {
      const text = cleanImportedText(stripHtml(block));

      if (isUsableStoryText(text)) {
        pendingParagraphs.push(text);
      }

      continue;
    }

    if (/^<[ou]l/i.test(block)) {
      const items = [...block.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)]
        .map((match) => cleanImportedText(stripHtml(match[1])))
        .filter(isUsableStoryText);

      pendingParagraphs.push(...items);
      continue;
    }

    if (/^<figure/i.test(block)) {
      const imageSrc = block.match(/\ssrc=["']([^"']+)/i)?.[1];

      if (imageSrc) {
        stories.push({
          title: currentTitle,
          description: pendingParagraphs.join("\n\n"),
          imageIndex,
          imageKey: imageKeyFromUrl(imageSrc),
        });
      }

      pendingParagraphs = [];
      imageIndex += 1;
    }
  }

  return stories;
}

function buildStoryBlocks(slug, images, sourceStories) {
  if (sourceStories.length > 0) {
    return sourceStories
      .map((story) => ({
        ...story,
        image: imageForStory(images, story),
      }))
      .filter((story) => story.image)
      .map((story, index) => ({
        index: String(index + 1).padStart(2, "0"),
        title: story.title,
        description: story.description,
        image: story.image,
        imageSide: index % 2 === 0 ? "right" : "left",
        sortOrder: index,
      }));
  }

  const customStories = customProjectStories[slug];

  if (customStories) {
    return customStories
      .filter((story) => images[story.imageIndex])
      .map((story, index) => ({
        index: String(index + 1).padStart(2, "0"),
        title: story.title,
        description: story.description,
        image: images[story.imageIndex],
        imageSide: index % 2 === 0 ? "right" : "left",
        sortOrder: index,
      }));
  }

  return images.slice(5, 8).map((image, imageIndex) => ({
    index: String(imageIndex + 1).padStart(2, "0"),
    title: storyTitles[imageIndex] ?? `Điểm nhấn ${imageIndex + 1}`,
    description:
      "Ảnh thật từ dự án cũ được đưa vào layout mới để kiểm tra nhịp hiển thị, tỷ lệ khung hình và cách kể câu chuyện thiết kế.",
    image,
    imageSide: imageIndex % 2 === 0 ? "right" : "left",
    sortOrder: imageIndex,
  }));
}

function getFloorPlanImage(slug, images, sourceStories) {
  const floorPlanStory = sourceStories.find((story) =>
    /mặt bằng|mat bang|công năng|cong nang/i.test(story.title),
  );

  if (floorPlanStory) {
    return imageForStory(images, floorPlanStory);
  }

  const filenameMatch = images.find((image) =>
    /mat-bang|matbang|bo-tri|bo_tri|mb|topview/i.test(image),
  );

  if (filenameMatch) {
    return filenameMatch;
  }

  const imageIndex = customProjectFloorPlanImageIndexes[slug];

  return typeof imageIndex === "number" ? images[imageIndex] ?? null : null;
}

function selectImagesForImport(item, oldPost) {
  const images = item.webp?.readyImages?.length
    ? item.webp.readyImages
    : item.images?.map((image) => image.rawPath).filter(Boolean) ?? [];
  const localImages = dedupeImagesByKey(images, item.images ?? []);

  const contentImageKeys = oldPost
    ? uniqueImageKeysFromContent(oldPost.content?.rendered ?? "")
    : [];

  if (contentImageKeys.length === 0) {
    return localImages;
  }

  const imagesByKey = new Map();

  for (const image of images) {
    const key = imageKeyFromImportedPath(image);

    if (!imagesByKey.has(key)) {
      imagesByKey.set(key, image);
    }
  }

  const matchedImages = contentImageKeys
    .map((key) => imagesByKey.get(key))
    .filter(Boolean);

  // Some older posts expose only part of their gallery, or use filenames that
  // no longer match the local WebP files. Put matched images first, then keep
  // every remaining local image so bulk imports never discard a gallery.
  return dedupeImagesByKey([...matchedImages, ...localImages], item.images ?? []);
}

function uniqueImageKeysFromContent(html) {
  return [
    ...new Set(
      [...html.matchAll(/<img\b[^>]*\ssrc=["']([^"']+)["'][^>]*>/gi)]
        .map((match) => imageKeyFromUrl(match[1]))
        .filter(Boolean),
    ),
  ];
}

function dedupeImagesByKey(images, sourceImages = []) {
  const seen = new Set();
  const sourceUrlByFilename = new Map(
    sourceImages
      .filter((image) => image.rawPath && image.sourceUrl)
      .map((image) => [
        path.basename(image.rawPath, path.extname(image.rawPath)),
        image.sourceUrl,
      ]),
  );

  return images.filter((image) => {
    const filename = path.basename(image, path.extname(image));
    const sourceUrl = sourceUrlByFilename.get(filename);
    const key = sourceUrl
      ? imageKeyFromSourceUrl(sourceUrl)
      : imageKeyFromImportedPath(image);

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

function imageKeyFromSourceUrl(value) {
  try {
    return decodeURIComponent(path.basename(new URL(value).pathname))
      .replace(/\.[a-z0-9]+$/i, "")
      .replace(/-\d+x\d+$/i, "")
      .toLowerCase();
  } catch {
    return imageKeyFromImportedPath(value);
  }
}

function imageForStory(images, story) {
  if (story.imageKey) {
    const image = images.find((candidate) =>
      imageKeyFromPublicPath(candidate) === story.imageKey,
    );

    if (image) {
      return image;
    }
  }

  return images[story.imageIndex] ?? null;
}

function imageKeyFromUrl(value) {
  try {
    return normalizeImageKey(path.basename(new URL(value).pathname), 0);
  } catch {
    return normalizeImageKey(path.basename(value), 0);
  }
}

function imageKeyFromImportedPath(value) {
  return normalizeImageKey(path.basename(value), 1);
}

function imageKeyFromPublicPath(value) {
  return normalizeImageKey(path.basename(value), 2);
}

function normalizeImageKey(value, stripPrefixCount) {
  let normalized = decodeURIComponent(value)
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/-[a-f0-9]{8}$/i, "")
    .replace(/-\d+x\d+$/i, "")
    .toLowerCase();

  for (let index = 0; index < stripPrefixCount; index += 1) {
    normalized = normalized.replace(/^\d+-/, "");
  }

  return normalized;
}

function cleanImportedText(value) {
  return String(value ?? "")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([a-f0-9]+);/gi, (_, code) =>
      String.fromCharCode(Number.parseInt(code, 16)),
    )
    .replace(/\[&hellip;\]/g, "...")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8220;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&hellip;/g, "...")
    .replace(/\s*\.\.\.\s*$/g, "...")
    .replace(/\s+/g, " ")
    .trim();
}

function stripHtml(value) {
  return String(value ?? "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]*>/g, " ");
}

function normalizeImportedTitle(title) {
  return (
    title.replace(/^\d+(?:\.\d+)*\s*[\-.]?\s*/, "").trim() ||
    "Câu chuyện thiết kế"
  );
}

function isUsableStoryText(text) {
  if (!text) {
    return false;
  }

  return ![
    /^click để xem thêm/i,
    /^\*/,
    /^TỔ ẤM HOÀN HẢO luôn sẵn lòng/i,
    /^Giữa rất nhiều sự lựa chọn/i,
  ].some((pattern) => pattern.test(text));
}

function parseProjectFacts(item, oldPost) {
  const oldTitle = cleanImportedText(
    stripHtml(oldPost?.title?.rendered ?? item.title ?? item.slug),
  );
  const excerpt = cleanImportedText(stripHtml(oldPost?.excerpt?.rendered ?? item.excerpt));
  const contentText = cleanImportedText(stripHtml(oldPost?.content?.rendered ?? ""));
  const combinedText = [oldTitle, excerpt, contentText].filter(Boolean).join("\n");
  const areaResult = parseArea(oldTitle, combinedText);

  return {
    title: titleFromOldTitle(oldTitle),
    italicTitle: italicTitleFromOldTitle(oldTitle),
    area: areaResult.value ?? "Đang cập nhật",
    areaSource: areaResult.source,
    bedrooms: parseBedrooms(combinedText),
    style: parseStyle(combinedText),
    location: parseLocation(combinedText),
  };
}

function getProjectMeta(item) {
  const categories = {
    "Biệt thự": {
      category: "villa",
      label: "Biệt thự",
      eyebrow: "Dự án biệt thự",
      displayTitle: "Biệt thự",
    },
    "Nhà phố": {
      category: "townhouse",
      label: "Nhà phố",
      eyebrow: "Dự án nhà phố",
      displayTitle: "Nhà phố",
    },
    "Văn phòng": {
      category: "office",
      label: "Văn phòng",
      eyebrow: "Dự án văn phòng",
      displayTitle: "Văn phòng",
    },
    "Không gian kinh doanh": {
      category: "businessSpace",
      label: "Không gian kinh doanh",
      eyebrow: "Dự án không gian kinh doanh",
      displayTitle: "Không gian kinh doanh",
    },
    "Nội thất trọn gói": {
      category: "turnkeyInterior",
      label: "Nội thất trọn gói",
      eyebrow: "Dự án nội thất trọn gói",
      displayTitle: "Nội thất trọn gói",
    },
    "Căn hộ": {
      category: "apartment",
      label: "Căn hộ",
      eyebrow: "Dự án căn hộ",
      displayTitle: "Căn hộ",
    },
  };

  if (businessSpaceProjectSlugs.has(item.slug)) {
    return categories["Không gian kinh doanh"];
  }

  return categories[item.newCategory] ?? categories["Căn hộ"];
}

function parseArea(title, text) {
  const labeledMatch = text.match(
    /(?:diện\s*tích(?:\s*mặt\s*bằng)?|dien\s*tich(?:\s*mat\s*bang)?)[^\d]{0,40}(\d+(?:[,.]\d+)?)\s*m\s*(?:2|²)?/i,
  );

  if (labeledMatch) {
    return { value: formatArea(labeledMatch[1]), source: "content" };
  }

  const titleMatch = title.match(/(\d+(?:[,.]\d+)?)\s*m\s*(?:2|²)\b/i);

  if (titleMatch) {
    return { value: formatArea(titleMatch[1]), source: "title" };
  }

  const bodyMatch = text.match(/(\d+(?:[,.]\d+)?)\s*m\s*(?:2|²)\b/i);

  if (bodyMatch) {
    return { value: formatArea(bodyMatch[1]), source: "content" };
  }

  return { value: undefined, source: "fallback" };
}

function formatArea(value) {
  const normalized = value.replace(",", ".");
  const number = Number(normalized);
  const displayValue = Number.isFinite(number)
    ? Number.isInteger(number)
      ? String(number)
      : String(number).replace(".", ",")
    : value;

  return `${displayValue}m²`;
}

function parseBedrooms(text) {
  if (/studio/i.test(text)) {
    return "Studio";
  }

  const match = text.match(/(\d+)\s*(?:phòng\s*ngủ|pn)\b/i);

  return match ? `${match[1]} phòng ngủ` : "Đang cập nhật";
}

function parseStyle(text) {
  const match = text.match(/phong\s*cách\s*:?\s*([^;\n.]+)/i);

  if (!match) {
    return "Đang cập nhật";
  }

  return cleanImportedText(match[1])
    .replace(/\s+Căn hộ.*$/i, "")
    .replace(/\s+Qua nhiều.*$/i, "")
    .trim();
}

function truncateText(value, maxLength) {
  const text = String(value ?? "").trim();

  if (text.length <= maxLength) {
    return text;
  }

  const shortened = text.slice(0, maxLength - 3);
  const lastSpace = shortened.lastIndexOf(" ");
  const safeText =
    lastSpace > maxLength / 2 ? shortened.slice(0, lastSpace) : shortened;

  return `${safeText.trim()}...`;
}

function parseLocation(text) {
  const addressMatch = text.match(/(?:địa\s*chỉ|dia\s*chi)\s*:?\s*([^\n.]+)/i);

  if (addressMatch) {
    return cleanImportedText(addressMatch[1])
      .replace(/\s+Diện tích.*$/i, "")
      .replace(/[;,.]\s*$/, "");
  }

  if (/hồ\s*chí\s*minh|tp\.?\s*hcm/i.test(text)) {
    return "TP. Hồ Chí Minh";
  }

  if (/hà\s*nội/i.test(text)) {
    return "Hà Nội";
  }

  return "Đang cập nhật";
}

function titleFromOldTitle(title) {
  return capitalizeFirstLetter(
    title
      .replace(/^thiết kế\s+/i, "")
      .replace(/^thi công\s+/i, "")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

function capitalizeFirstLetter(value) {
  return value
    ? `${value[0].toLocaleUpperCase("vi-VN")}${value.slice(1)}`
    : value;
}

function italicTitleFromOldTitle(title) {
  const cleaned = titleFromOldTitle(title);
  const afterDash = cleaned.split(/\s+[–-]\s+/).at(-1)?.trim();

  return afterDash && afterDash !== cleaned ? afterDash : cleaned;
}

function metric(label, value, sortOrder) {
  return { label, value, sortOrder };
}

function infoRow(label, value, sortOrder) {
  return { label, value, sortOrder };
}

function yearFromDate(date) {
  const year = new Date(date).getFullYear();
  return Number.isFinite(year) ? String(year) : "Đang cập nhật";
}

function buildReport(items) {
  const lines = [
    "# Báo cáo import dự án",
    "",
    `- Đã import: ${items.length} dự án`,
    `- Trạng thái: \`${importStatus}\``,
    "- Nguồn ảnh public: `public/uploads/du-an/[slug]`",
    "",
    "| Slug | Tiêu đề mới | Loại dự án | Diện tích | Nguồn diện tích | Ảnh dùng trên web | Story | Ảnh gốc WebP | URL cũ |",
    "|---|---|---|---:|---|---:|---:|---:|---|",
  ];

  for (const item of items) {
    lines.push(
      `| ${item.slug} | ${item.title} | ${item.category} | ${item.area} | ${item.areaSource} | ${item.imageCount} | ${item.storyCount} | ${item.oldImageCount} | ${item.oldUrl} |`,
    );
  }

  return `${lines.join("\n")}\n`;
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
