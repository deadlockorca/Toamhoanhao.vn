import { ArrowRight, HandHeart, ShieldCheck, TimerReset, Wallet } from "lucide-react";
import Link from "next/link";
import { ConsultationButton } from "@/components/consultation-popup";

const commitments = [
  {
    icon: HandHeart,
    title: "Chân thành từ đầu",
    description: "Lắng nghe kỹ nhu cầu và tư vấn giải pháp phù hợp với không gian sống của bạn.",
  },
  {
    icon: Wallet,
    title: "Tối ưu chi phí",
    description: "Lựa chọn vật liệu và phương án hợp lý để ngân sách luôn được sử dụng hiệu quả.",
  },
  {
    icon: TimerReset,
    title: "Theo sát tiến độ",
    description: "Phối hợp rõ ràng, cập nhật đều đặn để công trình đi đúng kế hoạch đã thống nhất.",
  },
  {
    icon: ShieldCheck,
    title: "Bền vững sau bàn giao",
    description: "Thi công đúng tiêu chuẩn và đồng hành khi bạn cần hỗ trợ trong quá trình sử dụng.",
  },
];

export function AspirationBeliefSection() {
  return (
    <section className="bg-[#3b3326] px-5 py-16 text-[#faf5ed] sm:px-8 lg:py-20">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-8 border-b border-white/20 pb-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#d9b777]">
              Giá trị theo đuổi
            </p>
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
              Khát vọng và niềm tin
            </h2>
          </div>
          <div className="max-w-3xl lg:justify-self-end">
            <p className="font-serif text-xl leading-relaxed text-[#f7efe3] sm:text-2xl">
              Hơn một không gian đẹp, chúng tôi muốn trao cho mỗi gia đình sự
              an tâm trong suốt hành trình kiến tạo tổ ấm.
            </p>
          </div>
        </div>

        <div className="grid divide-y divide-white/15 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {commitments.map((commitment) => {
            const Icon = commitment.icon;

            return (
              <div key={commitment.title} className="px-1 py-7 sm:px-6 lg:px-7">
                <Icon aria-hidden="true" size={27} strokeWidth={1.4} className="text-[#d9b777]" />
                <h3 className="mt-5 font-serif text-xl text-white">{commitment.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#dfd5c7]">
                  {commitment.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-9 flex flex-col justify-between gap-5 border-t border-white/20 pt-7 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-sm leading-6 text-[#dfd5c7]">
            Từ bản vẽ đầu tiên đến khi không gian đi vào sử dụng, từng quyết
            định đều hướng tới trải nghiệm sống lâu dài của gia đình bạn.
          </p>
          <ConsultationButton
            className="inline-flex w-fit items-center gap-3 bg-[#d9b777] px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-[#31291e] transition hover:bg-[#ebca8a]"
          >
            Nhận tư vấn
            <ArrowRight aria-hidden="true" size={16} strokeWidth={1.8} />
          </ConsultationButton>
        </div>
      </div>
    </section>
  );
}
