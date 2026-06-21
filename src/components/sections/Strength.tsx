import { ShieldCheck, Clock, Handshake, Lightbulb } from "lucide-react"
import { SectionHeading } from "../ui/SectionHeading"
import { IllustrationPlaceholder } from "../ui/IllustrationPlaceholder"

export function Strength() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-lp flex flex-col gap-12">
        <SectionHeading
          eyebrow="諦める前に、まずはご相談ください"
          title="当社が選ばれる確固たる強み"
          description="法人売却を成功へ導く、3つの強みがあります"
        />

        {/* 中央人物 + 左右の強み */}
        <div className="relative mx-auto grid w-full max-w-4xl grid-cols-1 items-center gap-6 md:grid-cols-[1fr_1.1fr_1fr]">
          <div className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-card md:translate-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold italic text-gold">01</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/5 text-navy">
                <ShieldCheck className="h-5 w-5" strokeWidth={1.75} />
              </span>
            </div>
            <h3 className="text-base font-bold leading-snug text-navy">
              他社で断られた法人も対応
            </h3>
            <p className="text-sm leading-relaxed text-ink-light">
              他社で諦めかけたケースも、独自のネットワークと専門知識で柔軟に対応します。
            </p>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute -top-3 right-4 z-10 rounded-2xl rounded-br-sm border border-navy/10 bg-white px-4 py-2 text-xs font-bold text-navy shadow-card">
              私たちがしっかりサポートいたします！
            </div>
            <IllustrationPlaceholder
              ratio="aspect-[3/4]"
              label="人物イラスト（漫画調・ヒーローと同一人物）差し替え予定"
              className="w-full max-w-xs"
            />
          </div>

          <div className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-card md:translate-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold italic text-gold">02</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/5 text-navy">
                <Clock className="h-5 w-5" strokeWidth={1.75} />
              </span>
            </div>
            <h3 className="text-base font-bold leading-snug text-navy">
              最短即日対応
            </h3>
            <p className="text-sm leading-relaxed text-ink-light">
              スピーディーな審査と査定で、最短即日での資金化をサポートします。
            </p>
          </div>
        </div>

        {/* 03 */}
        <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-3 rounded-2xl border border-gold/30 bg-cream p-7 text-center">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold italic text-gold">03</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
              <Handshake className="h-5 w-5" strokeWidth={1.75} />
            </span>
          </div>
          <h3 className="text-lg font-bold leading-snug text-gold-dark">
            赤字法人・休眠法人の対応実績多数
          </h3>
          <p className="text-sm leading-relaxed text-ink-light">
            赤字法人や休眠法人、債務超過法人といった対応実績が多数あります。
          </p>
        </div>

        {/* 下部バナー */}
        <div className="flex items-center justify-center gap-4 rounded-2xl bg-navy px-8 py-6 text-center">
          <Lightbulb className="h-6 w-6 shrink-0 text-gold" strokeWidth={1.75} />
          <div className="flex flex-col items-start gap-0.5 text-left">
            <p className="text-lg font-bold text-white">
              まずはお客様の状況をお聞かせください
            </p>
            <p className="text-sm text-gold">
              最適なご提案をさせていただきます
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
