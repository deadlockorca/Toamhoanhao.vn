import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  Check,
  Compass,
  FileText,
  HardHat,
  House,
  Ruler,
  Sun,
  WalletCards,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Kinh nghiệm xây nhà trọn gói | Tổ Ấm Hoàn Hảo",
  description:
    "Những kinh nghiệm xây nhà thực tế về định hướng thiết kế, ngân sách, thi công và lựa chọn vật liệu.",
};

const readingTopics = [
  {
    slug: "kinh-nghiem-chon-huong-nha-15",
    title: "Kinh nghiệm chọn hướng nhà",
    image: "/images/kien-thuc/kinh-nghiem-xay-nha/huong-nha.webp",
    description:
      "Chọn hướng nhà theo tuổi của gia chủ và điều kiện khí hậu để tạo nên không gian sống thuận tiện, hài hòa.",
  },
  {
    slug: "kinh-nghiem-do-be-tong-28",
    title: "Kinh nghiệm đổ bê tông cột, dầm, sàn",
    image: "/images/kien-thuc/kinh-nghiem-xay-nha/do-be-tong.webp",
    description:
      "Những yêu cầu kỹ thuật cần nắm rõ khi triển khai các hạng mục kết cấu quan trọng của công trình.",
  },
  {
    slug: "chien-luoc-thiet-ke-nha-co-dien-tich-nho",
    title: "Chiến lược thiết kế nhà có diện tích nhỏ",
    image: "/images/kien-thuc/kinh-nghiem-xay-nha/nha-nho.webp",
    description:
      "Gợi ý để một ngôi nhà diện tích nhỏ vẫn có đủ tiện ích và đáp ứng nhu cầu sử dụng của gia đình.",
  },
  {
    slug: "nhung-luu-y-khi-thi-cong-to-trat-tuong-nha",
    title: "Những lưu ý khi thi công tô trát tường nhà",
    image: "/images/kien-thuc/kinh-nghiem-xay-nha/to-trat.webp",
    description:
      "Các điểm cần kiểm tra trong công tác tô trát và nghiệm thu để tường phẳng, bền, hạn chế nứt hoặc bong tróc.",
  },
  {
    slug: "phong-thuy-xay-nha-14",
    title: "Phong thủy xây nhà: 5 điều cần lưu ý khi xây nhà cho hợp phong thủy",
    image: "/images/kien-thuc/kinh-nghiem-xay-nha/phong-thuy.webp",
    description:
      "Những nguyên tắc phong thủy cơ bản giúp gia chủ cân nhắc hướng, bố cục và không gian sống hài hòa.",
  },
  {
    slug: "5-dieu-can-luu-y-khi-thiet-ke-cua-cong-ra-vao",
    title: "5 điều cần lưu ý khi thiết kế cửa cổng ra vào",
    image: "/images/kien-thuc/kinh-nghiem-xay-nha/cua-cong.webp",
    description:
      "Cân đối phong thủy, an toàn, riêng tư, thông thoáng và thẩm mỹ cho lối vào của công trình.",
  },
  {
    slug: "kinh-nghiem-thiet-ke-nha-co-anh-sang-tu-nhien-14-2",
    title: "4 kinh nghiệm thiết kế nhà để tận dụng được ánh sáng tự nhiên nhất",
    image: "/images/kien-thuc/kinh-nghiem-xay-nha/anh-sang.webp",
    description:
      "Gợi ý thiết kế để các không gian trong nhà đón được ánh sáng tự nhiên một cách hiệu quả.",
  },
  {
    slug: "kinh-nghiem-thi-cong-nha-mai-thai-1-tang-14",
    title:
      "Kinh nghiệm thi công nhà mái Thái 1 tầng siêu chất lượng khiến bạn không còn đắn đo",
    image: "/images/kien-thuc/kinh-nghiem-xay-nha/nha-mai-thai.webp",
    description:
      "Những kinh nghiệm thực tế về giải pháp mái, tiến độ và chất lượng khi triển khai nhà mái Thái một tầng.",
  },
  {
    slug: "kinh-nghiem-xay-nha-10",
    title:
      "6 kinh nghiệm xây nhà - chọn vật liệu xây dựng trong thi công nhà ở",
    image: "/images/kien-thuc/kinh-nghiem-xay-nha/vat-lieu.webp",
    description:
      "Kinh nghiệm lựa chọn vật liệu xây dựng hợp lý, tiết kiệm và phù hợp với nhu cầu sử dụng lâu dài.",
  },
];

const focusItems = [
  "Phù hợp với diện tích đất và nếp sinh hoạt của gia đình.",
  "Đạt cân bằng giữa thẩm mỹ, kỹ thuật thi công và không gian xanh.",
  "Bám sát ngân sách, công năng sử dụng và phong cách sống của gia chủ.",
];

function ArticleHeading({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-bold tracking-[0.12em] text-[#a0783e]">{number}</p>
      <h2 className="mt-3 font-serif text-3xl leading-tight text-[#30291f] sm:text-4xl">
        {children}
      </h2>
    </div>
  );
}

export default function BuildingExperiencePage() {
  return (
    <main className="min-h-screen bg-[#f8f3ec] text-[#2d271f]">
      <section className="relative overflow-hidden border-b border-[#e1d6c7]">
        <SiteHeader />

        <div className="mx-auto grid min-h-[600px] max-w-[1320px] pt-20 lg:grid-cols-[0.92fr_1.08fr] xl:pt-[120px]">
          <div className="relative z-10 flex items-center px-6 py-16 sm:px-10 lg:px-8 lg:py-12">
            <div className="max-w-[590px]">
              <nav
                aria-label="Điều hướng trang"
                className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-[#766d60]"
              >
                <Link href="/" className="transition hover:text-[#9a733e]">
                  Trang chủ
                </Link>
                <span>/</span>
                <span>Kinh nghiệm xây nhà</span>
              </nav>

              <p className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">
                Kiến thức xây dựng
              </p>
              <h1 className="mt-4 font-serif text-4xl leading-[1.08] text-[#1f1a13] sm:text-5xl lg:text-[3.5rem]">
                Kinh nghiệm xây nhà trọn gói
              </h1>
              <p className="mt-6 max-w-[550px] text-base leading-8 text-[#584f43]">
                Những kinh nghiệm thực tế về định hướng thiết kế, tổ chức thi công và
                lựa chọn giải pháp phù hợp cho một ngôi nhà bền vững.
              </p>
            </div>
          </div>

          <div className="relative min-h-[340px] lg:min-h-full">
            <Image
              src="/images/kien-thuc/kinh-nghiem-xay-nha/hero.webp"
              alt="Mẫu thiết kế nhà phố của Tổ Ấm Hoàn Hảo"
              fill
              priority
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-y-0 left-0 hidden w-28 bg-gradient-to-r from-[#f8f3ec] to-transparent lg:block" />
          </div>
        </div>
      </section>

      <section className="border-b border-[#e1d6c7] bg-[#fdfaf6]">
        <div className="mx-auto grid max-w-[1320px] sm:grid-cols-3">
          <article className="border-b border-[#e1d6c7] px-6 py-7 sm:border-b-0 sm:border-r lg:px-8">
            <House aria-hidden="true" className="h-7 w-7 text-[#a0783e]" strokeWidth={1.2} />
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-[#8c795f]">
              Chủ đề
            </p>
            <p className="mt-2 text-sm font-semibold leading-6 text-[#3e352a]">
              Thiết kế và xây dựng nhà ở
            </p>
          </article>
          <article className="border-b border-[#e1d6c7] px-6 py-7 sm:border-b-0 sm:border-r lg:px-8">
            <Ruler aria-hidden="true" className="h-7 w-7 text-[#a0783e]" strokeWidth={1.2} />
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-[#8c795f]">
              Trọng tâm
            </p>
            <p className="mt-2 text-sm font-semibold leading-6 text-[#3e352a]">
              Công năng, kỹ thuật và bài toán chi phí
            </p>
          </article>
          <article className="px-6 py-7 lg:px-8">
            <BookOpenCheck aria-hidden="true" className="h-7 w-7 text-[#a0783e]" strokeWidth={1.2} />
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-[#8c795f]">
              Nội dung
            </p>
            <p className="mt-2 text-sm font-semibold leading-6 text-[#3e352a]">
              9 chủ đề kinh nghiệm triển khai thực tế
            </p>
          </article>
        </div>
      </section>

      <div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_330px] lg:py-24">
        <article className="min-w-0">
          <section className="border-b border-[#ded2c1] pb-12">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">
              Nội dung chính
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#30291f] sm:text-5xl">
              Bắt đầu từ một phương án phù hợp với gia đình
            </h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-[#62594d]">
              <p>
                Mẫu nhà phố đẹp phù hợp với diện tích đất, đáp ứng nhu cầu sinh hoạt
                của gia đình với chi phí hợp lý là những tiêu chuẩn quan trọng khi gia
                chủ bắt đầu trao đổi cùng Tổ Ấm Hoàn Hảo.
              </p>
              <p>
                Vì vậy, mỗi phương án thiết kế cần được đầu tư kỹ để tạo nên sản phẩm
                đạt chuẩn thẩm mỹ, bảo đảm kỹ thuật thi công an toàn và mang lại không
                gian sống xanh. Quan trọng hơn cả là sự phù hợp với bài toán tài chính
                và phong cách sống riêng của gia chủ.
              </p>
              <p>
                Những nội dung dưới đây tổng hợp các chủ đề từ bộ sưu tập kinh nghiệm
                xây nhà của Tổ Ấm Hoàn Hảo, từ định hướng thiết kế đến tổ chức thi công
                và lựa chọn vật liệu.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {focusItems.map((item) => (
                <p
                  key={item}
                  className="flex gap-3 border border-[#ded2c1] bg-[#fdfaf6] p-4 text-sm leading-6 text-[#62594d]"
                >
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#8a7650]"
                    strokeWidth={2.4}
                  />
                  {item}
                </p>
              ))}
            </div>
          </section>

          <div className="divide-y divide-[#ded2c1]">
            <section className="py-12">
              <ArticleHeading number="01">Định hướng trước khi xây nhà</ArticleHeading>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <p className="text-base leading-8 text-[#62594d]">
                  Trước khi triển khai, gia chủ nên xác định rõ diện tích đất, số lượng
                  thành viên, nếp sinh hoạt, phong cách mong muốn và những không gian
                  ưu tiên. Đây là cơ sở để mặt bằng và ngân sách được tính đúng ngay từ
                  đầu.
                </p>
                <div className="border border-[#ded2c1] bg-[#fdfaf6] p-6">
                  <Compass aria-hidden="true" className="h-9 w-9 text-[#a0783e]" strokeWidth={1.15} />
                  <p className="mt-5 font-serif text-2xl leading-tight text-[#3b3024]">
                    Đúng nhu cầu trước, rồi mới đến hình thức.
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#74695c]">
                    Một phương án tốt cần giải quyết đồng thời công năng, chi phí và
                    cảm xúc sống lâu dài của gia đình.
                  </p>
                </div>
              </div>
            </section>

            <section className="py-12">
              <ArticleHeading number="02">Thiết kế và thi công cần đi cùng nhau</ArticleHeading>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="border border-[#ded2c1] bg-[#fdfaf6] p-6">
                  <HardHat aria-hidden="true" className="h-9 w-9 text-[#a0783e]" strokeWidth={1.15} />
                  <h3 className="mt-5 font-serif text-2xl text-[#3b3024]">Kỹ thuật thi công</h3>
                  <p className="mt-3 text-sm leading-7 text-[#74695c]">
                    Hồ sơ rõ ràng, vật liệu phù hợp và giám sát theo từng công đoạn là
                    nền tảng để công trình an toàn, bền vững và đúng tiến độ.
                  </p>
                </div>
                <div className="border border-[#ded2c1] bg-[#fdfaf6] p-6">
                  <WalletCards aria-hidden="true" className="h-9 w-9 text-[#a0783e]" strokeWidth={1.15} />
                  <h3 className="mt-5 font-serif text-2xl text-[#3b3024]">Kiểm soát ngân sách</h3>
                  <p className="mt-3 text-sm leading-7 text-[#74695c]">
                    Mỗi lựa chọn về quy mô, vật liệu và mức độ hoàn thiện cần được cân
                    đối từ sớm để hạn chế phát sinh ngoài kế hoạch.
                  </p>
                </div>
              </div>
            </section>

            <section className="py-12">
              <ArticleHeading number="03">Không gian sống có ánh sáng và chiều sâu</ArticleHeading>
              <div className="mt-7 overflow-hidden border border-[#ded2c1] bg-[#fdfaf6] sm:grid sm:grid-cols-[1.1fr_0.9fr]">
                <div className="relative aspect-[1.25] sm:aspect-auto">
                  <Image
                    src="/images/kien-thuc/kinh-nghiem-xay-nha/anh-sang.webp"
                    alt="Không gian nhà ở tận dụng ánh sáng tự nhiên"
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-7">
                  <Sun aria-hidden="true" className="h-9 w-9 text-[#a0783e]" strokeWidth={1.15} />
                  <p className="mt-5 font-serif text-2xl leading-tight text-[#3b3024]">
                    Ưu tiên ánh sáng tự nhiên và sự thông thoáng.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#74695c]">
                    Cách bố trí cửa, khoảng mở và các không gian đệm giúp ngôi nhà sử
                    dụng năng lượng hiệu quả hơn, đồng thời tạo cảm giác dễ chịu mỗi
                    ngày.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </article>

        <aside className="h-fit space-y-5 lg:sticky lg:top-8">
          <section className="border border-[#ded2c1] bg-[#fdfaf6] p-6 lg:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9a733e]">Mục lục</p>
            <ol className="mt-5 space-y-3 text-sm leading-6 text-[#6b6154]">
              {[
                "Bắt đầu từ một phương án phù hợp",
                "Định hướng trước khi xây nhà",
                "Thiết kế và thi công cần đi cùng nhau",
                "Không gian sống có ánh sáng và chiều sâu",
                "Các chủ đề kinh nghiệm xây nhà",
              ].map((item, index) => (
                <li key={item} className="flex gap-3">
                  <span className="font-bold text-[#a0783e]">{String(index + 1).padStart(2, "0")}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="border border-[#ded2c1] bg-[#f3eade] p-6 lg:p-7">
            <FileText aria-hidden="true" className="h-9 w-9 text-[#a0783e]" strokeWidth={1.15} />
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-[#9a733e]">Ghi chú</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-[#3b3024]">Kiến thức để chuẩn bị kỹ hơn</h2>
            <p className="mt-4 text-sm leading-7 text-[#74695c]">
              Các nội dung là tài liệu tham khảo để gia chủ hình dung quy trình. Phương
              án thực tế cần được điều chỉnh theo hiện trạng khu đất và nhu cầu sử dụng.
            </p>
          </section>
        </aside>
      </div>

      <section className="border-y border-[#e1d6c7] bg-[#eee5d8] px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1320px]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a733e]">Đọc thêm</p>
            <h2 className="mt-3 font-serif text-4xl text-[#30291f]">Chủ đề kinh nghiệm xây nhà</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#6b6154]">
              9 bài viết được giữ lại từ chuyên mục kinh nghiệm xây nhà trên website cũ
              của Tổ Ấm Hoàn Hảo.
            </p>
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {readingTopics.map((topic, index) => (
              <Link
                key={topic.slug}
                href={`/kien-thuc/kinh-nghiem-xay-nha/${topic.slug}`}
                className="group overflow-hidden border border-[#d7c9b6] bg-[#f9f4ed] transition hover:-translate-y-1"
              >
                <div className="relative aspect-[1.65] overflow-hidden">
                  <Image
                    src={topic.image}
                    alt={topic.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#9a733e]">
                    Bài viết {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-serif text-xl leading-snug text-[#332b21]">{topic.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#6b6154]">{topic.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#70532b]">
                    Xem bài viết
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
