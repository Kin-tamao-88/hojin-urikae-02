import { Check, Building2, FileText, Wallet, Moon, Banknote, Headset } from "lucide-react"
import { SectionHeading } from "../ui/SectionHeading"

const items = [
  { icon: Building2, text: "法人口座を持っている" },
  { icon: FileText, text: "現在も法人が存続している" },
  { icon: Wallet, text: "維持費が負担になっている" },
  { icon: Moon, text: "休眠状態になっている" },
  { icon: Banknote, text: "少しでも現金化したい" },
]

export function Checklist() {
  return (
    <section className="relative overflow-hidden bg-navy-dark py-20 text-white md:py-24">
      {/* 背景：ビル群のシルエット */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-10"
        aria-hidden
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #fff 0 14px, transparent 14px 46px)",
          maskImage: "linear-gradient(to top, #000 40%, transparent)",
        }}
      />

      <div className="container-lp relative flex flex-col items-center gap-10">
        <SectionHeading
          tone="light"
          eyebrow="セルフチェック"
          title="その法人、まだ価値が残っているかもしれません"
          description="以下の項目にチェックして、あなたの法人の状況を確認してみてください。"
        />

        <div className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-card-hover md:p-10">
          <ul className="flex flex-col divide-y divide-navy/10">
            {items.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.text} className="flex items-center gap-4 py-3.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-teal text-white">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <Icon className="h-5 w-5 shrink-0 text-ink-muted" strokeWidth={1.75} />
                  <span className="text-base font-medium text-navy">{item.text}</span>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="flex flex-col items-center gap-1 text-center">
          <p className="text-base text-white/70">1つでも当てはまる方は</p>
          <p className="text-3xl font-bold leading-tight md:text-4xl">
            <span className="text-gold">査定対象</span>になる
            <span className="text-gold">可能性があります</span>
          </p>
        </div>

        <div className="flex w-full max-w-xl items-stretch overflow-hidden rounded-full shadow-card-hover">
          <a
            href="#contact"
            className="flex flex-col items-center justify-center bg-navy px-7 py-4 text-center text-sm font-bold leading-tight text-white"
          >
            査定は
            <br />
            無料です
          </a>
          <a
            href="#contact"
            className="flex flex-1 items-center justify-center gap-2 bg-gold py-4 text-base font-bold text-white hover:bg-gold-dark"
          >
            <Headset className="h-5 w-5" strokeWidth={2} />
            まずはお気軽にご相談ください
          </a>
        </div>
      </div>
    </section>
  )
}
