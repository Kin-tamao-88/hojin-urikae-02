import { Plus } from "lucide-react"
import { SectionHeading } from "../ui/SectionHeading"

const faqs = [
  {
    q: "赤字法人でも大丈夫ですか？",
    a: "はい、赤字法人や債務のある法人も数多く対応しております。他社で断られたケースもまずはお気軽にご相談ください。",
  },
  {
    q: "税金や借入があっても相談できますか？",
    a: "もちろん可能です。状況を丁寧にお伺いしたうえで、最適な方法をご提案いたします。",
  },
  {
    q: "地方の法人でも対応可能ですか？",
    a: "全国47都道府県に対応しております。遠方の法人もオンラインで完結できますのでご安心ください。",
  },
  {
    q: "売却後に責任を問われることはありますか？",
    a: "適切な手続きのもとで譲渡を行うため、原則として売却後に責任を問われることはありません。詳細はご相談時にご説明いたします。",
  },
  {
    q: "相談だけでも可能ですか？",
    a: "はい、査定・ご相談は無料です。しつこい営業は一切いたしませんので、お気軽にご利用ください。",
  },
]

export function Faq() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-lp flex flex-col gap-12">
        <SectionHeading eyebrow="よくあるご質問" title="FAQ" />

        <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-xl border border-navy/10 bg-cream/60 transition-colors open:bg-white open:shadow-card"
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 p-5 md:p-6">
                <span className="text-xl font-bold text-gold">Q.</span>
                <span className="flex-1 text-base font-bold text-navy md:text-lg">
                  {faq.q}
                </span>
                <Plus
                  className="h-5 w-5 shrink-0 text-ink-light transition-transform duration-200 group-open:rotate-45"
                  strokeWidth={2.5}
                />
              </summary>
              <div className="flex gap-4 px-5 pb-6 md:px-6">
                <span className="text-xl font-bold text-ink-muted">A.</span>
                <p className="flex-1 pt-0.5 text-base leading-relaxed text-ink-light">
                  {faq.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
