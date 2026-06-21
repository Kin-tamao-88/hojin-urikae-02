import { Check, Shield } from "lucide-react"
import painCost from "../../assets/icons/pain/icon-pain-cost.png"
import painDecline from "../../assets/icons/pain/icon-pain-decline.png"
import painRestricted from "../../assets/icons/pain/icon-pain-restricted.png"
import painProcedure from "../../assets/icons/pain/icon-pain-procedure.png"

type Seg = { t: string; hi?: boolean }

/* 悩みアイコンは PNG 画像（assets/icons/pain）へ置換済み */
const pains: { img: string; line1: string; line2: Seg[]; desc: string }[] = [
  {
    img: painCost,
    line1: "会社を使っていないのに",
    line2: [{ t: "毎年" }, { t: "維持費", hi: true }, { t: "だけが掛かる" }],
    desc: "法人住民税や決算費用など、使っていなくても赤字続きになる",
  },
  {
    img: painDecline,
    line1: "赤字続きで",
    line2: [{ t: "事業継続", hi: true }, { t: "が難しい" }],
    desc: "赤字続きで、資金や借入の見通しが立たない",
  },
  {
    img: painRestricted,
    line1: "税金や借入金の問題で",
    line2: [{ t: "身動き", hi: true }, { t: "が取れない" }],
    desc: "税金の滞納や借入金の問題で、事業の身動きが取れない",
  },
  {
    img: painProcedure,
    line1: "解散・清算の手続きが",
    line2: [{ t: "面倒", hi: true }, { t: "で進められない" }],
    desc: "解散・清算の手続きが面倒で、やるべきことが進められない",
  },
]

const CARD_SHADOW = "0 4px 20px rgba(0,0,0,0.06)"

export function Pain() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-lp flex flex-col gap-14">
        {/* ───────── セクション見出し ───────── */}
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 rounded-full bg-cta" aria-hidden />
            <span className="rounded-full bg-navy px-6 py-2 text-sm font-bold tracking-wide text-white">
              こんなお悩みありませんか？
            </span>
            <span className="h-[2px] w-8 rounded-full bg-cta" aria-hidden />
          </div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-navy md:text-[40px]">
            会社を運営していて、こんな
            <span className="text-cta">お悩み</span>はありませんか？
          </h2>
        </div>

        {/* ───────── 悩みカード（PC 2×2グリッド） ───────── */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {pains.map((pain) => (
            <div
              key={pain.line1}
              className="flex items-center gap-6 rounded-[20px] border border-navy/10 bg-white p-7"
              style={{ boxShadow: CARD_SHADOW }}
            >
              {/* 悩みアイコン（PNG）：カード横幅の約35%・縦中央・既存レイアウト維持／比率維持 */}
              <div className="flex aspect-[5/6] w-[35%] shrink-0 items-center justify-center rounded-2xl bg-skyblue">
                <img
                  src={pain.img}
                  alt=""
                  aria-hidden
                  className="h-[64px] w-auto object-contain md:h-[88px]"
                />
              </div>

              <div className="flex flex-1 flex-col">
                <h3>
                  <span className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cta">
                      <Check className="h-4 w-4 text-white" strokeWidth={3} />
                    </span>
                    <span className="text-[17px] font-bold text-navy">{pain.line1}</span>
                  </span>
                  <span className="mt-2 block whitespace-nowrap text-[22px] font-black leading-tight text-navy">
                    {pain.line2.map((seg, i) =>
                      seg.hi ? (
                        <span key={i} className="text-[27px] text-cta">
                          {seg.t}
                        </span>
                      ) : (
                        <span key={i}>{seg.t}</span>
                      )
                    )}
                  </span>
                </h3>

                <span className="my-4 h-px w-full bg-navy/10" aria-hidden />

                <p className="text-[16px] leading-[1.8] text-ink">{pain.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ───────── 下部CTA ───────── */}
        <div
          className="mx-auto flex max-w-3xl items-center gap-5 rounded-2xl border border-navy/25 bg-white px-8 py-6"
          style={{ boxShadow: CARD_SHADOW }}
        >
          <span className="relative flex h-12 w-12 shrink-0 items-center justify-center">
            <Shield className="h-12 w-12 text-navy" strokeWidth={1.75} />
            <Check className="absolute h-[18px] w-[18px] text-cta" strokeWidth={3.5} style={{ marginTop: "-3px" }} />
          </span>
          <div className="text-left">
            <p className="text-[15px] text-ink">ひとつでも当てはまる方は、解散する前に</p>
            <p className="text-[20px] font-bold leading-snug text-navy">
              <span className="text-cta">「法人売却」という選択肢</span>
              をご検討ください。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
