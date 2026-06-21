import hopePerson from "../../assets/pain/03-pain-business-executive.png"

/**
 * Hope（Pain の下・Comparison のリード）。
 * 視線導線：① 人物 → ②「その悩み…」→ ③「現金化できる」→ ④「可能性があります！」→ ⑤ 補足カード → ⑥ 比較表。
 * 「現金化できる」をセクション最大の視覚要素にする。完成図 2026-06-20 準拠。
 */
export function Hope() {
  return (
    <section className="bg-white pt-10 pb-2 md:pt-14 md:pb-6">
      <div className="container-lp flex flex-col items-center">
        {/* 人物 ＋ 見出し（縦中央揃え・1つの塊／全体を少し左へ寄せ左余白を解消） */}
        <div className="flex items-center justify-center gap-5 md:gap-6 md:-translate-x-5">
          {/* ① 人物（視線起点・大きめ／肩から上） */}
          <img
            src={hopePerson}
            alt=""
            aria-hidden
            className="hidden h-[260px] w-[260px] shrink-0 object-cover md:block md:translate-y-[20px]"
            style={{ objectPosition: "center 3%" }}
          />

          {/* 見出し */}
          <div className="text-center md:text-left">
            {/* ② */}
            <p className="text-[22px] font-bold leading-snug text-navy md:text-[26px]">
              その悩み、
              <br className="md:hidden" />
              一人で抱え込まないでください。
            </p>

            {/* ③ 現金化できる（絶対的主役：特大・超太字・金筆下線） */}
            <div className="relative mt-3 inline-block">
              <svg
                className="pointer-events-none absolute -bottom-2 left-[-10px] -z-0 h-[28px] w-[calc(100%+20px)]"
                viewBox="0 0 420 44"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="hopeBrush" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0%" stopColor="#E8901E" />
                    <stop offset="50%" stopColor="#F9A825" />
                    <stop offset="100%" stopColor="#FFC24D" />
                  </linearGradient>
                </defs>
                <path
                  d="M6 32 C 96 24, 230 20, 412 7 C 300 26, 150 29, 10 37 Z"
                  fill="url(#hopeBrush)"
                />
                <path d="M26 30 C 140 23, 260 19, 384 10" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M20 34 C 150 27, 270 23, 396 13" stroke="#C9760F" strokeOpacity="0.5" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <span className="relative whitespace-nowrap text-[64px] font-black leading-none text-navy md:text-[86px]">
                現金化できる
              </span>
            </div>

            {/* ④ */}
            <p className="mt-3 text-[38px] font-bold leading-tight text-navy md:text-[52px]">
              可能性が<span className="text-cta">あります！</span>
            </p>
          </div>
        </div>

        {/* ⑤ 補足カード（④ 説明文ではなく「重要な気付き」として読ませる：拡大・高さ増・カード感強化） */}
        <div className="mx-auto mt-3 flex w-full max-w-md items-center justify-center gap-4 rounded-2xl border-[1.5px] border-gold/40 bg-white px-7 py-8 shadow-[0_8px_26px_rgba(27,42,74,0.09)]">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-white shadow-[0_4px_12px_rgba(168,132,47,0.30)]">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12.5 l4.5 4.5 L19 7.5" />
            </svg>
          </span>
          {/* ⑤ 2行構成 */}
          <p className="text-[17px] font-medium leading-relaxed text-ink md:text-[19px]">
            解散予定だった法人でも、
            <br />
            <span className="font-bold text-cta">売却できるケースがあります</span>
            。
          </p>
        </div>
      </div>
    </section>
  )
}
