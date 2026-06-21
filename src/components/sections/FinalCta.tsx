import { Phone } from "lucide-react"
import { CtaButton } from "../ui/CtaButton"

export function FinalCta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy py-20 text-white md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light"
        aria-hidden
      />
      <div className="container-lp relative flex flex-col items-center gap-7 text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
          その法人、まだ
          <span className="text-gold">価値</span>が
          <br className="md:hidden" />
          残っているかもしれません
        </h2>
        <p className="text-lg text-white/80">
          まずは無料査定をご利用ください
        </p>

        <CtaButton note="査定だけでもOK｜しつこい営業は一切いたしません" className="mt-2" />

        <div className="mt-4 flex flex-col items-center gap-1 border-t border-white/15 pt-6">
          <span className="text-sm text-white/60">お電話でのご相談はこちら</span>
          <a
            href="tel:03-0000-0000"
            className="flex items-center gap-2 text-2xl font-bold"
          >
            <Phone className="h-5 w-5 text-gold" strokeWidth={2.5} />
            03-XXXX-XXXX
          </a>
          <span className="text-sm text-white/60">
            受付 9:00–18:00（土日祝を除く）
          </span>
        </div>
      </div>
    </section>
  )
}
