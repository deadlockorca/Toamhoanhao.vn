import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Binoculars,
  Factory,
  Gem,
  MessageSquareQuote,
  Ruler,
  Target,
  UsersRound,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getPublicProjects } from "@/lib/public-content";

export const metadata: Metadata = {
  title: "Về Tổ Ấm Hoàn Hảo | Tổ Ấm Hoàn Hảo",
  description:
    "Tìm hiểu câu chuyện, năng lực thiết kế và thi công nội thất của Tổ Ấm Hoàn Hảo.",
};

const aboutValues = [
  {
    icon: Binoculars,
    title: "Tầm nhìn",
    content:
      "Trở thành đơn vị được khách hàng tin tưởng khi tìm kiếm một không gian sống chỉn chu, bền vững và phù hợp với nhịp sống riêng.",
  },
  {
    icon: Target,
    title: "Sứ mệnh",
    content:
      "Lắng nghe kỹ nhu cầu, biến những ý tưởng thành phương án có thể triển khai và đồng hành đến khi không gian hoàn thiện.",
  },
  {
    icon: Gem,
    title: "Giá trị cốt lõi",
    content:
      "Tận tâm trong từng chi tiết, minh bạch trong từng hạng mục và tôn trọng trải nghiệm sống dài lâu của gia chủ.",
  },
];

const operatingPrinciples = [
  { icon: Ruler, value: "15+", label: "Năm kinh nghiệm" },
  { icon: Factory, value: "500+", label: "Công trình hoàn thiện" },
  { icon: UsersRound, value: "1000+", label: "Khách hàng đồng hành" },
  { icon: Gem, value: "98%", label: "Khách hàng hài lòng" },
];

function createVisualSet(images: string[]) {
  const fallbacks = [
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  ];

  return [...new Set([...images, ...fallbacks])].slice(0, 7);
}

export default async function AboutPage() {
  const projects = await getPublicProjects();
  const visuals = createVisualSet(
    projects.flatMap((project) => [
      project.detail?.heroImage,
      project.thumbnail,
      ...(project.detail?.spaces.map((space) => space.image) ?? []),
    ]).filter((image): image is string => Boolean(image)),
  );

  const heroImage = "/images/gioi-thieu/banner.png";
  const storyImage = "/images/gioi-thieu/thuong-hieu.png";
  const workshopImage = "/images/gioi-thieu/xuong-san-xuat.png";
  const workshopGallery = visuals;

  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#262119]">
      <section className="relative min-h-[560px] overflow-hidden bg-[#f8f3ec]">
        <SiteHeader />
        <Image
          src={heroImage}
          alt="Không gian nội thất do Tổ Ấm Hoàn Hảo thực hiện"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center]"
        />
        <div className="absolute inset-y-0 left-0 w-full bg-[#f8f3ec]/90 sm:w-[66%] lg:w-[52%]" />

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1320px] items-end px-6 pb-16 pt-32 sm:px-10 lg:items-center lg:px-8">
          <div className="max-w-[610px]">
            <nav aria-label="Điều hướng trang" className="text-xs text-[#766d60]">
              <Link href="/" className="transition hover:text-[#9a733e]">
                Trang chủ
              </Link>
              <span className="mx-3">/</span>
              <span>Giới thiệu</span>
            </nav>
            <p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">
              Về chúng tôi
            </p>
            <h1 className="mt-4 font-sans text-5xl leading-[1.04] text-[#1d1913] sm:text-6xl lg:text-7xl">
              Về Tổ Ấm Hoàn Hảo
            </h1>
            <p className="mt-7 max-w-[470px] text-base leading-8 text-[#524a3e]">
              Kiến tạo không gian sống hạnh phúc, bền vững và đầy cảm hứng cho mỗi gia đình Việt.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1320px] px-5 py-12 sm:px-8 lg:py-16">
        <section className="border border-[#e2d8ca] bg-[#fdfaf6]">
          <div className="flex gap-6 p-7 sm:p-10 lg:p-12">
            <MessageSquareQuote
              aria-hidden="true"
              className="h-12 w-12 shrink-0 text-[#74785f]"
              strokeWidth={1.4}
            />
            <div>
              <h2 className="font-serif text-3xl text-[#312b22]">
                Thông điệp của ban lãnh đạo
              </h2>
              <p className="mt-4 max-w-[650px] text-sm leading-7 text-[#62594d] sm:text-base">
                Trong suốt nhiều năm qua, chúng tôi đã mang đến cho khách hàng những sản phẩm nội thất, xây mới, sửa chữa cải tạo ngôi nhà của họ với đầy đủ sự tử tế. Chúng tôi sẽ cố gắng duy trì điều này trong suốt quá trình làm nghề của mình.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-10 py-16 lg:grid-cols-[1.05fr_0.82fr] lg:items-center lg:py-24">
          <div className="max-w-[700px] text-[15px] leading-8 text-[#51493d] sm:text-base">
            <p>
              <strong className="font-semibold text-[#2d281f]">Tổ Ấm Hoàn Hảo</strong> là đơn vị thiết kế và thi công nội thất hướng đến những không gian sống có chiều sâu, phù hợp với thói quen sinh hoạt và cá tính của từng gia chủ. Chúng tôi tin một ngôi nhà đẹp cần bắt đầu từ việc thấu hiểu người sẽ sống trong đó.
            </p>
            <p className="mt-6">
              Mỗi công trình được triển khai bằng một quy trình rõ ràng: lắng nghe nhu cầu, khảo sát hiện trạng, phát triển phương án thiết kế, tổ chức thi công và đồng hành sau bàn giao. Sự phối hợp giữa đội ngũ thiết kế, kỹ thuật và sản xuất giúp mọi quyết định được kiểm soát nhất quán từ đầu đến cuối.
            </p>
            <p className="mt-6">
              Với tinh thần làm nghề chỉn chu, chúng tôi luôn tìm kiếm giải pháp cân bằng giữa thẩm mỹ, công năng, ngân sách và độ bền trong quá trình sử dụng. Mục tiêu cuối cùng vẫn là một tổ ấm khiến gia chủ muốn trở về mỗi ngày.
            </p>
          </div>

          <div className="relative min-h-[430px] overflow-hidden border border-[#e2d8ca] sm:min-h-[500px]">
            <Image
              src={storyImage}
              alt="Một công trình biệt thự do Tổ Ấm Hoàn Hảo triển khai"
              fill
              sizes="(min-width: 1024px) 500px, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 max-w-[210px] bg-[#70745d] p-6 text-white sm:p-7">
              <span className="font-serif text-4xl">15+</span>
              <p className="mt-1 text-sm font-semibold">Năm kinh nghiệm</p>
              <p className="mt-2 text-xs leading-5 text-white/80">
                Kiến tạo không gian sống cho từng gia đình.
              </p>
            </div>
          </div>
        </section>

        <section className="border border-[#e2d8ca] bg-[#fdfaf6] p-7 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.9fr] lg:items-center">
            <div>
              <Factory aria-hidden="true" className="h-10 w-10 text-[#9b7640]" strokeWidth={1.35} />
              <h2 className="mt-5 font-serif text-3xl leading-tight text-[#312b22]">
                Xưởng sản xuất nội thất
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#62594d]">
                Khu vực sản xuất, hoàn thiện và kiểm tra chất lượng giúp các hạng mục nội thất được triển khai đồng bộ với phương án thiết kế.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {workshopGallery.slice(0, 3).map((image, index) => (
                <div key={image} className="relative aspect-[1.1] overflow-hidden border border-[#e2d8ca]">
                  <Image
                    src={image}
                    alt={`Không gian triển khai nội thất ${index + 1}`}
                    fill
                    sizes="(min-width: 1024px) 260px, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-10 py-16 lg:grid-cols-3 lg:py-24">
          {aboutValues.map((value) => {
            const Icon = value.icon;

            return (
              <article key={value.title} className="border-t border-[#d8cbb9] pt-7">
                <Icon aria-hidden="true" className="h-9 w-9 text-[#9a733e]" strokeWidth={1.35} />
                <h2 className="mt-5 font-serif text-3xl text-[#312b22]">{value.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#62594d]">{value.content}</p>
              </article>
            );
          })}
        </section>

        <section className="grid overflow-hidden border border-[#e2d8ca] bg-[#fdfaf6] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[360px]">
            <Image
              src={workshopImage}
              alt="Quy trình triển khai nội thất của Tổ Ấm Hoàn Hảo"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="p-7 sm:p-10 lg:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">
              Năng lực triển khai
            </p>
            <h2 className="mt-4 max-w-[550px] font-serif text-3xl leading-tight text-[#312b22] sm:text-4xl">
              Chỉn chu từ bản vẽ đến không gian hoàn thiện
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#62594d]">
              Chúng tôi kết nối đội ngũ thiết kế, kỹ thuật và sản xuất trong một quy trình làm việc thống nhất để kiểm soát tiến độ, chất lượng và trải nghiệm của khách hàng.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4">
              {operatingPrinciples.map((principle) => {
                const Icon = principle.icon;

                return (
                  <div key={principle.label}>
                    <Icon aria-hidden="true" className="h-6 w-6 text-[#9a733e]" strokeWidth={1.35} />
                    <p className="mt-3 font-serif text-3xl text-[#302a21]">{principle.value}</p>
                    <p className="mt-1 text-xs leading-5 text-[#70675a]">{principle.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mt-12 grid overflow-hidden bg-[#68705b] text-white lg:grid-cols-[1.15fr_0.85fr]">
          <div className="p-8 sm:p-12">
            <MessageSquareQuote aria-hidden="true" className="h-10 w-10 text-white/80" strokeWidth={1.4} />
            <p className="mt-7 max-w-[650px] font-serif text-3xl leading-tight sm:text-4xl">
              Kiên định trên con đường đã chọn. Kiên cường vượt qua mọi khó khăn và giữ trọn niềm tin vào giá trị của một tổ ấm tử tế.
            </p>
          </div>
          <div className="relative min-h-[280px]">
            <Image
              src={heroImage}
              alt="Không gian sống ấm áp"
              fill
              sizes="(min-width: 1024px) 500px, 100vw"
              className="object-cover"
            />
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
