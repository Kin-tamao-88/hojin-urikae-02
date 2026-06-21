import { ArrowDown } from "lucide-react"
import { SectionHeading } from "../ui/SectionHeading"
import { IllustrationPlaceholder } from "../ui/IllustrationPlaceholder"

const cases = [
  {
    no: "CASE 01",
    industry: "IT企業（システム開発業）",
    situation: ["負債総額", "1,500万円"],
    situationNote: "維持費が負担に。今後の事業も厳しい状況",
    result: "200万円を確保",
    quote: "想像以上の金額で買い取っていただき、非常に助かりました。",
    person: "40代・男性／IT企業 経営者",
  },
  {
    no: "CASE 02",
    industry: "建設業（一般建設業）",
    situation: ["大型案件の", "キャンセルが発生"],
    situationNote: "売上が計画から大幅に下落し、資金繰りが悪化",
    result: "700万円で譲渡成立",
    quote: "早く決断できたことで、次の一手を踏み出すことができました。",
    person: "50代・男性／建設業 経営者",
  },
]

export function CaseStudy() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-lp flex flex-col gap-12">
        <SectionHeading
          eyebrow="活用事例"
          title="活用事例"
          description="実際にご相談いただいた法人売却の事例をご紹介します。"
        />

        <div className="flex flex-col gap-8">
          {cases.map((c) => (
            <div
              key={c.no}
              className="grid grid-cols-1 gap-8 rounded-2xl bg-cream p-7 md:grid-cols-[1.3fr_1fr] md:p-10"
            >
              {/* 左：状況→結果 */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="rounded-md bg-navy px-3 py-1 text-xs font-bold tracking-wider text-gold">
                    {c.no}
                  </span>
                  <span className="text-lg font-bold text-navy">{c.industry}</span>
                </div>

                <div>
                  <p className="mb-2 text-sm font-bold text-navy">ご相談時の状況</p>
                  <div className="rounded-xl bg-white px-5 py-4">
                    {c.situation.map((s) => (
                      <p key={s} className="text-xl font-bold leading-snug text-ink">
                        {s}
                      </p>
                    ))}
                    <p className="mt-1 text-xs text-ink-muted">{c.situationNote}</p>
                  </div>
                </div>

                <ArrowDown className="mx-auto h-5 w-5 text-gold" strokeWidth={2.5} />

                <div>
                  <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-gold-dark">
                    法人売却の結果
                  </span>
                  <p className="mt-2 text-3xl font-bold leading-tight text-gold-dark md:text-4xl">
                    {c.result}
                  </p>
                </div>
              </div>

              {/* 右：人物 + 一言 */}
              <div className="flex flex-col items-center justify-center gap-3 text-center">
                <IllustrationPlaceholder
                  ratio="aspect-square"
                  rounded="rounded-full"
                  className="w-24"
                  label="仮素材"
                />
                <p className="text-sm leading-relaxed text-ink-light">{c.quote}</p>
                <p className="text-xs text-ink-muted">{c.person}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
