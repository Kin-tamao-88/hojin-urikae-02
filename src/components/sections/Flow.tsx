import { ChevronRight, Laptop, ClipboardCheck, Handshake, ShieldCheck } from "lucide-react"

const steps = [
  {
    no: "01",
    icon: Laptop,
    title: "無料査定",
    desc: "フォームから法人情報を入力。30秒で完了します。",
  },
  {
    no: "02",
    icon: ClipboardCheck,
    title: "ご提案",
    desc: "最短即日で査定結果と売却条件をご提案。",
  },
  {
    no: "03",
    icon: Handshake,
    title: "ご契約・完了",
    desc: "ご契約手続き後、売却代金をお支払いします。",
  },
]

export function Flow() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-lp flex flex-col gap-12">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-3xl font-bold leading-tight text-navy md:text-4xl">
            売却まで、
            <br className="md:hidden" />
            <span className="relative inline-block">
              驚くほど簡単です
              <svg
                className="absolute -bottom-1 left-0 w-full text-gold"
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M0,5 Q50,0 100,5 T200,5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>
            </span>
          </h2>
          <p className="text-base text-ink-light">
            面倒な手続きはすべてサポートいたします
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.no} className="contents">
                <div className="relative flex flex-col items-center gap-3 rounded-2xl bg-white p-7 text-center shadow-card">
                  <span className="absolute -top-4 left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-gold text-sm font-bold text-white">
                    {step.no}
                  </span>
                  <Icon className="mt-3 h-9 w-9 text-navy" strokeWidth={1.5} />
                  <h3 className="text-lg font-bold text-navy">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-light">
                    {step.desc}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex items-center justify-center">
                    <ChevronRight
                      className="h-6 w-6 rotate-90 text-gold md:rotate-0"
                      strokeWidth={2}
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mx-auto flex items-center gap-3 rounded-full bg-mint px-7 py-4 text-center">
          <ShieldCheck className="h-5 w-5 shrink-0 text-navy" strokeWidth={2} />
          <p className="text-sm text-ink md:text-base">
            ご相談からお支払いまで、専門スタッフが丁寧にサポート。
            <span className="font-bold text-navy">安心してお任せください</span>
          </p>
        </div>
      </div>
    </section>
  )
}
