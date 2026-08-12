import Image from "next/image";
import Link from "next/link";
import {
  ArrowUp,
  BadgeCheck,
  CircleCheck,
  ClipboardList,
  DraftingCompass,
  Factory,
  Globe2,
  Hammer,
  Headphones,
  Mail,
  MapPin,
  MessageSquareText,
  PackageCheck,
  PenLine,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const navigation = [
  "Trang chủ",
  "Giới thiệu",
  "Dịch vụ",
  "Dự án",
  "Mẫu thiết kế",
  "Báo giá",
  "Kiến thức",
  "Liên hệ",
];

const projectCategories = ["Căn hộ", "Biệt thự", "Nhà phố", "Văn phòng"];

const featuredProjects = [
  {
    category: "Căn hộ chung cư",
    title: "The Matrix One",
    meta: "Hà Nội · 120m²",
    image:
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "Căn hộ chung cư",
    title: "Vinhomes Ocean Park",
    meta: "Hà Nội · 90m²",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "Biệt thự",
    title: "Vinhomes Riverside",
    meta: "Hà Nội · 250m²",
    image:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=85",
  },
];

const services = [
  {
    icon: DraftingCompass,
    title: "Thiết kế nội thất",
    lines: ["Sáng tạo · Tối ưu công năng", "Thể hiện phong cách riêng"],
  },
  {
    icon: Hammer,
    title: "Thi công nội thất",
    lines: ["Đội ngũ chuyên nghiệp", "Thi công chuẩn kỹ thuật"],
  },
  {
    icon: Factory,
    title: "Sản xuất nội thất",
    lines: ["Xưởng sản xuất hiện đại", "Chất lượng kiểm soát chặt chẽ"],
  },
  {
    icon: PackageCheck,
    title: "Nội thất trọn gói",
    lines: ["Giải pháp toàn diện", "Tiết kiệm thời gian, chi phí"],
  },
  {
    icon: Sparkles,
    title: "Tư vấn phong thủy",
    lines: ["Cân bằng năng lượng", "Mang lại tài lộc, bình an"],
  },
  {
    icon: ShieldCheck,
    title: "Bảo hành & hậu mãi",
    lines: ["Bảo hành dài hạn", "Hỗ trợ nhanh chóng, tận tâm"],
  },
];

const workSteps = [
  {
    icon: MessageSquareText,
    title: "Tiếp nhận & tư vấn",
    description: "Lắng nghe nhu cầu và khảo sát thực tế",
  },
  {
    icon: PenLine,
    title: "Thiết kế & báo giá",
    description: "Lên ý tưởng thiết kế và báo giá chi tiết",
  },
  {
    icon: ClipboardList,
    title: "Ký hợp đồng & triển khai",
    description: "Thống nhất hợp đồng và triển khai thi công",
  },
  {
    icon: Hammer,
    title: "Thi công & giám sát",
    description: "Thi công đúng tiến độ, giám sát chặt chẽ",
  },
  {
    icon: CircleCheck,
    title: "Nghiệm thu & bàn giao",
    description: "Nghiệm thu chất lượng, bàn giao công trình",
  },
  {
    icon: Headphones,
    title: "Bảo hành & hậu mãi",
    description: "Đồng hành và hỗ trợ sau khi bàn giao",
  },
];

const testimonials = [
  {
    quote:
      "Đội ngũ thiết kế rất sáng tạo, luôn lắng nghe và đưa ra những giải pháp tối ưu nhất. Chúng tôi rất hài lòng với không gian sống hiện tại.",
    name: "Anh Tuấn",
    project: "Vinhomes Ocean Park",
    initials: "AT",
  },
  {
    quote:
      "Thi công đúng tiến độ, chất lượng hoàn thiện rất tốt. Tổ Ấm Hoàn Hảo là đơn vị uy tín, chúng tôi sẽ tiếp tục hợp tác trong các dự án sau.",
    name: "Chị Hương",
    project: "The Matrix One",
    initials: "CH",
  },
  {
    quote:
      "Minh bạch trong báo giá, không phát sinh chi phí. Đội ngũ làm việc chuyên nghiệp, tận tâm từ đầu đến cuối.",
    name: "Anh Nam",
    project: "Royal City",
    initials: "AN",
  },
];

const footerColumns = [
  {
    title: "Về chúng tôi",
    links: ["Giới thiệu", "Tầm nhìn · Sứ mệnh", "Đội ngũ nhân sự", "Quy trình làm việc"],
  },
  {
    title: "Dịch vụ",
    links: [
      "Thiết kế nội thất",
      "Thi công nội thất",
      "Sản xuất nội thất",
      "Nội thất trọn gói",
      "Tư vấn phong thủy",
    ],
  },
  {
    title: "Hỗ trợ",
    links: [
      "Câu hỏi thường gặp",
      "Chính sách bảo hành",
      "Chính sách bảo mật",
      "Điều khoản sử dụng",
    ],
  },
];

const contactInfo = [
  {
    icon: MapPin,
    text: "Tầng 6, 48 Tố Hữu, Nam Từ Liêm, Hà Nội",
  },
  {
    icon: Phone,
    text: "0903.897.555",
  },
  {
    icon: Mail,
    text: "hotro.toamhoanhao@gmail.com",
  },
  {
    icon: Globe2,
    text: "toamhoanhao.vn",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f0e8] text-[#17140f]">
      <section className="relative min-h-screen overflow-hidden bg-[#f7f1e9]">
        <header className="absolute inset-x-0 top-0 z-20">
          <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between px-5 sm:px-8">
            <Link
              href="/"
              className="group flex min-w-[178px] items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-[#b98938]"
            >
              <Image
                src="/logo-to-am-hoan-hao-old.png"
                alt="Logo Tổ Ấm Hoàn Hảo"
                width={54}
                height={54}
                priority
                className="h-[46px] w-[46px] shrink-0 object-contain"
              />
              <span className="leading-tight">
                <span className="block whitespace-nowrap text-[13px] font-bold uppercase tracking-[0.1em] text-[#28231c]">
                  Tổ Ấm Hoàn Hảo
                </span>
                <span className="mt-1 block whitespace-nowrap text-[10px] text-[#8b7e69]">
                  Thiết kế - Thi công - Sản xuất nội thất
                </span>
              </span>
            </Link>

            <nav
              aria-label="Menu chính"
              className="hidden flex-1 items-center justify-end gap-6 pl-10 xl:flex"
            >
              {navigation.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="whitespace-nowrap text-[12px] font-bold uppercase tracking-[0.02em] text-[#2f2a22] outline-none transition hover:text-[#9a732f] focus-visible:ring-2 focus-visible:ring-[#b98938]"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <div className="grid min-h-screen lg:grid-cols-[44%_56%]">
          <div className="relative z-10 flex items-center px-6 pb-16 pt-36 sm:px-10 lg:px-0 lg:pb-0 lg:pl-[max(2rem,calc((100vw-1180px)/2))] lg:pr-12">
            <div className="max-w-[560px]">
              <p className="mb-7 text-xs font-semibold uppercase tracking-[0.32em] text-[#a27b3c]">
                Tổ Ấm Hoàn Hảo
              </p>
              <h1 className="font-serif text-[56px] leading-[0.98] tracking-normal text-[#15120e] sm:text-[76px] lg:text-[86px]">
                Một không gian
                <span className="mt-3 block italic text-[#7e8268]">
                  để trở về.
                </span>
              </h1>
              <p className="mt-9 max-w-[430px] text-base leading-8 text-[#3d382f]">
                Tổ Ấm Hoàn Hảo kiến tạo những không gian sống hài hòa giữa
                thẩm mỹ, công năng và cảm xúc.
              </p>

              <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
                <a
                  href="#"
                  className="inline-flex h-14 items-center justify-center border border-[#6e735e] bg-[#6e735e] px-8 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#5d624f]"
                >
                  Khám phá dự án
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.04em] text-[#5a5144]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#b7aa92] bg-[#fbf7f0]/80 text-[#8c6f3e]">
                    ▶
                  </span>
                  Xem video giới thiệu
                </a>
              </div>

              <div className="mt-20 flex items-center gap-5 text-sm font-semibold text-[#8a7658]">
                <span>01</span>
                <span>/</span>
                <span>04</span>
                <span className="h-px w-20 bg-[#9c8d74]" />
              </div>
            </div>
          </div>

          <div className="relative min-h-[46vh] lg:min-h-screen">
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
              alt="Phòng khách sáng với sofa màu kem và cửa kính nhìn ra vườn"
              fill
              priority
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f7f1e9] via-[#f7f1e9]/10 to-transparent lg:hidden" />
            <div className="absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-[#f7f1e9] to-transparent lg:block" />
          </div>
        </div>
      </section>

      <section className="bg-[#f7f1e9] px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[220px_1fr] xl:grid-cols-[240px_1fr]">
          <aside className="flex flex-col justify-between gap-10">
            <div>
              <h2 className="mb-10 text-sm font-bold uppercase tracking-[0.12em] text-[#211d17]">
                Dự án nổi bật
              </h2>

              <div className="space-y-7">
                {projectCategories.map((category, index) => {
                  const isActive = index === 0;

                  return (
                    <a
                      key={category}
                      href="#"
                      className="group grid grid-cols-[32px_1fr] items-center gap-5"
                    >
                      <span
                        className={`text-lg font-semibold ${
                          isActive ? "text-[#7c5f2c]" : "text-[#b8ad9e]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`whitespace-nowrap text-sm font-bold uppercase tracking-[0.04em] transition group-hover:text-[#7c5f2c] ${
                          isActive ? "text-[#5a4c36]" : "text-[#b1a79a]"
                        }`}
                      >
                        {category}
                      </span>
                      {isActive ? (
                        <span className="col-start-2 h-px w-full bg-[#c8bca9]" />
                      ) : null}
                    </a>
                  );
                })}
              </div>
            </div>

            <a
              href="#"
              className="inline-flex w-fit items-center gap-4 border-b border-[#b7a98f] pb-2 text-xs font-bold uppercase tracking-[0.06em] text-[#6a5533] transition hover:text-[#9a732f]"
            >
              Xem tất cả dự án
              <span aria-hidden="true">→</span>
            </a>
          </aside>

          <div className="grid gap-3 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.title}
                className="group border border-[#ded4c4] bg-[#fbf7f1]/72"
              >
                <div className="relative aspect-[1.32] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.category} ${project.title}`}
                    fill
                    sizes="(min-width: 1024px) 28vw, (min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex min-h-[132px] flex-col justify-between px-6 py-5">
                  <div>
                    <p className="text-base font-semibold leading-7 text-[#27231c]">
                      {project.category}
                    </p>
                    <h3 className="text-base font-semibold leading-7 text-[#27231c]">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex items-end justify-between gap-4">
                    <p className="text-xs font-semibold text-[#96784c]">
                      {project.meta}
                    </p>
                    <a
                      href="#"
                      aria-label={`Xem dự án ${project.title}`}
                      className="text-2xl leading-none text-[#b19060] transition group-hover:translate-x-1 group-hover:text-[#7c5f2c]"
                    >
                      →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4eee6]">
        <div className="grid min-h-[360px] lg:grid-cols-[36%_64%]">
          <div className="flex items-center px-6 py-14 sm:px-10 lg:px-0 lg:py-16 lg:pl-[max(2rem,calc((100vw-1320px)/2))] lg:pr-14">
            <div className="max-w-[390px]">
              <h2 className="font-serif text-[38px] leading-[1.12] tracking-normal text-[#252019] sm:text-[46px]">
                Tổ ấm không chỉ
                <span className="block">là nơi để ở.</span>
                <span className="block">Mà là nơi để yêu thương.</span>
              </h2>
              <p className="mt-6 max-w-[320px] text-sm leading-7 text-[#5f574a]">
                Chúng tôi lắng nghe câu chuyện của bạn, để mỗi thiết kế đều
                mang dấu ấn riêng và chạm đến cảm xúc.
              </p>
              <a
                href="#"
                className="mt-9 inline-flex items-center gap-4 border-b border-[#b7a98f] pb-2 text-xs font-bold uppercase tracking-[0.08em] text-[#5c4b30] transition hover:text-[#9a732f]"
              >
                Về chúng tôi
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden lg:min-h-[360px]">
            <Image
              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1500&q=85"
              alt="Gia đình cùng đọc sách trong không gian phòng khách ấm áp"
              fill
              sizes="(min-width: 1024px) 64vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-y-0 left-0 hidden w-20 bg-gradient-to-r from-[#f4eee6] to-transparent lg:block" />
          </div>
        </div>
      </section>

      <section className="bg-[#f7f1e9] px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1320px]">
          <h2 className="text-center font-serif text-2xl uppercase tracking-[0.08em] text-[#211d17] sm:text-3xl">
            Dịch vụ của chúng tôi
          </h2>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="flex min-h-[178px] flex-col items-center justify-center border border-[#ded4c4] bg-[#fbf7f1]/68 px-5 py-7 text-center transition hover:border-[#c8b28d] hover:bg-[#fffaf4]"
                >
                  <Icon
                    aria-hidden="true"
                    strokeWidth={1.35}
                    className="h-10 w-10 text-[#9f7d4d]"
                  />
                  <h3 className="mt-5 text-[13px] font-bold uppercase tracking-[0.03em] text-[#2a251e]">
                    {service.title}
                  </h3>
                  <div className="mt-4 space-y-1.5 text-[12px] leading-5 text-[#6a6257]">
                    {service.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-16">
            <h2 className="text-center font-serif text-2xl uppercase tracking-[0.08em] text-[#211d17] sm:text-3xl">
              Quy trình làm việc
            </h2>

            <div className="relative mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-6 lg:gap-5">
              <div className="absolute left-8 right-8 top-[38px] hidden border-t border-dashed border-[#c8bca9] lg:block" />

              {workSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.title}
                    className="relative z-10 flex flex-col items-center text-center"
                  >
                    <div className="mb-5 flex w-full items-center justify-center gap-4 lg:gap-3">
                      <span className="text-lg font-semibold text-[#8b6733]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex h-[76px] w-[76px] items-center justify-center rounded-full border border-[#d8cdbb] bg-[#f9f3eb] shadow-[0_0_0_8px_rgba(251,247,241,0.75)]">
                        <Icon
                          aria-hidden="true"
                          strokeWidth={1.35}
                          className="h-8 w-8 text-[#a27b49]"
                        />
                      </span>
                    </div>
                    <h3 className="max-w-[150px] text-sm font-bold uppercase leading-6 tracking-[0.03em] text-[#2a251e]">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-[170px] text-xs leading-6 text-[#6e6558]">
                      {step.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-center font-serif text-2xl uppercase tracking-[0.08em] text-[#211d17] sm:text-3xl">
              Khách hàng nói gì về chúng tôi
            </h2>

            <div className="relative mt-8">
              <button
                type="button"
                aria-label="Xem nhận xét trước"
                className="absolute -left-2 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#ded4c4] bg-[#fbf7f1] text-2xl text-[#b19060] lg:flex"
              >
                ‹
              </button>

              <div className="grid gap-6 lg:grid-cols-3 lg:px-8">
                {testimonials.map((testimonial) => (
                  <article
                    key={testimonial.name}
                    className="min-h-[220px] border border-[#ded4c4] bg-[#fbf7f1]/70 px-8 py-7"
                  >
                    <BadgeCheck
                      aria-hidden="true"
                      strokeWidth={1.25}
                      className="h-7 w-7 text-[#b19060]"
                    />
                    <p className="mt-4 text-sm leading-7 text-[#4c453a]">
                      {testimonial.quote}
                    </p>

                    <div className="mt-6 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d7c5ab] text-sm font-bold text-[#5b4324]">
                        {testimonial.initials}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#2b261f]">
                          {testimonial.name}
                        </p>
                        <p className="mt-0.5 text-xs text-[#7c7266]">
                          {testimonial.project}
                        </p>
                        <p className="mt-1 text-sm tracking-[0.18em] text-[#b4843d]">
                          ★★★★★
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <button
                type="button"
                aria-label="Xem nhận xét tiếp theo"
                className="absolute -right-2 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#ded4c4] bg-[#fbf7f1] text-2xl text-[#b19060] lg:flex"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[180px] overflow-hidden px-5 py-9 sm:px-8">
        <Image
          src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85"
          alt="Không gian bếp và bàn ăn ấm áp"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#3d2c1d]/45" />

        <div className="relative z-10 mx-auto flex max-w-[1320px] flex-col items-center justify-center text-center">
          <h2 className="max-w-[620px] font-serif text-[34px] leading-[1.08] text-white sm:text-[48px]">
            Hãy kể chúng tôi nghe
            <span className="block">về ngôi nhà của bạn.</span>
          </h2>
          <a
            href="#"
            className="mt-7 inline-flex h-12 items-center justify-center bg-[#7a7f63] px-8 text-sm font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#686d55]"
          >
            Đặt lịch tư vấn ngay
          </a>
        </div>
      </section>

      <footer className="bg-[#f7f1e9] px-5 py-12 text-[#3a3329] sm:px-8">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[1.35fr_1fr_1fr_1fr_1.45fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo-to-am-hoan-hao-old.png"
                alt="Logo Tổ Ấm Hoàn Hảo"
                width={58}
                height={58}
                className="h-12 w-12 object-contain"
              />
              <span className="leading-tight">
                <span className="block text-sm font-bold uppercase tracking-[0.08em]">
                  Tổ Ấm
                </span>
                <span className="block text-sm font-bold uppercase tracking-[0.08em]">
                  Hoàn Hảo
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-[220px] text-xs leading-6 text-[#756b5d]">
              Thiết kế · Thi công · Sản xuất nội thất trọn gói
            </p>

            <div className="mt-6 flex items-center gap-4">
              {["f", "◎", "▶", "in"].map((item) => (
                <a
                  key={item}
                  href="#"
                  aria-label={`Kênh mạng xã hội ${item}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c9baa1] text-xs font-bold text-[#8b6b3d] transition hover:border-[#9b7743] hover:text-[#6f522b]"
                >
                  {item}
                </a>
              ))}
            </div>

            <p className="mt-8 text-xs text-[#756b5d]">
              © 2024 Tổ Ấm Hoàn Hảo. All rights reserved.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-bold uppercase tracking-[0.05em] text-[#2d281f]">
                {column.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#6a6257] transition hover:text-[#9a732f]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.05em] text-[#2d281f]">
              Liên hệ
            </h2>
            <ul className="mt-5 space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.text} className="flex gap-3">
                    <Icon
                      aria-hidden="true"
                      strokeWidth={1.5}
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#9a733e]"
                    />
                    <span className="text-sm leading-6 text-[#6a6257]">
                      {item.text}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-[1320px] justify-end">
          <a
            href="#"
            aria-label="Lên đầu trang"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#b99767] text-[#9a733e] transition hover:bg-[#efe4d5]"
          >
            <ArrowUp aria-hidden="true" strokeWidth={1.5} className="h-5 w-5" />
          </a>
        </div>
      </footer>
    </main>
  );
}
