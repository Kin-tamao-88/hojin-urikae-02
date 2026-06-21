import {
  Building2,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react"
import heroVisual from "../../assets/hero/01-hero-visual.png"
import iconRedCompany from "../../assets/icons/01-icon-red-company.png"
import iconDebt from "../../assets/icons/01-icon-debt.png"
import iconNationwide from "../../assets/icons/01-icon-nationwide.png"
import iconProfessionalSupport from "../../assets/icons/01-icon-professional-support.png"
import laurelLeft from "../../assets/results/01-results-laurel-left.png"

/* 実績バー月桂樹：左右で同一サイズ・余白を厳密統一（右は左素材をミラー） */
const LAUREL_CLS = "h-[68px] w-[50px] shrink-0 object-contain"

/**
 * 実績バーの「月桂樹＋数字」共通コンポーネント。
 * 月桂樹は「ブロック中央から左右110px」の固定座標に absolute 配置（top共通・サイズ共通）。
 * 中央基準のため、ブロック幅・数字の文字幅が変わっても位置は不変＝4ブロックで横位置が完全一致し、
 * 最大幅「47都道府県」でも数字と重ならない（中央から左右に必ず一定の隙間が空く）。
 * 数字は中央揃え。左右の月桂樹は中央を軸に完全対称。
 */
function StatValue({ value, size = 40 }: { value: string; size?: number }) {
  return (
    <div className="relative flex h-[60px] w-full items-center justify-center">
      {/* 左月桂樹：右端が中央-110pxに来るよう left = 50% - 160px に固定（w=50対応） */}
      <img
        src={laurelLeft}
        alt=""
        aria-hidden
        className={`${LAUREL_CLS} absolute left-[calc(50%-160px)] top-1/2 -translate-y-1/2`}
      />
      {/* 文言が長いブロックは月桂樹内側(約220px)に収まるよう size を下げて1行を維持 */}
      <span
        className="whitespace-nowrap font-bold leading-none"
        style={{ color: GOLD, fontSize: `${size}px` }}
      >
        {value}
      </span>
      {/* 右月桂樹：左端が中央+110pxに来るよう left = 50% + 110px に固定（ミラー） */}
      <img
        src={laurelLeft}
        alt=""
        aria-hidden
        className={`${LAUREL_CLS} absolute left-[calc(50%+110px)] top-1/2 -translate-y-1/2 -scale-x-100`}
      />
    </div>
  )
}

/* 完成図カラー */
const NAVY = "#0B2348"
const NAVY2 = "#1A2744"
const GOLD = "#C9A84C"
const RED = "#C0392B"
const PAGE_BG = "#F8F7F4"

const cards = [
  { icon: iconRedCompany, label: "赤字法人", ok: true },
  { icon: iconDebt, label: "債務あり", ok: true },
  { icon: iconNationwide, label: "全国対応\n47都道府県", ok: false },
  { icon: iconProfessionalSupport, label: "士業連携で\n安心サポート", ok: false },
]

const stats: { value: string; label: string; note: string; vSize?: number }[] = [
  { value: "300件以上", label: "法人売却相談", note: "※2025年度実績" },
  { value: "85万円以上", label: "平均買取実績", note: "赤字・負債ありでも" },
  { value: "最低10万円以上", label: "買取保証アリ", note: "過去買取実績", vSize: 28 },
  { value: "即日対応", label: "最短査定", note: "当日現金化OK" },
]

/**
 * 01 Hero（PC専用・完成図 design/01-hero.png を基準に新規実装）。
 * ヘッダー / メインビジュアル / 実績バーを一体のセクションとして実装。
 * 内部コンテンツは max-width で中央配置（100vw 不使用）。
 */
export function Hero() {
  return (
    <section id="hero" style={{ background: PAGE_BG }}>
      {/* ───────── ヘッダー（3カラム） ───────── */}
      <header className="w-full bg-white" style={{ borderBottom: `1px solid ${NAVY}1a` }}>
        <div className="mx-auto flex h-[96px] w-full max-w-[1536px] items-center justify-between gap-8 px-10">
          {/* 左：ロゴ */}
          <a href="#hero" className="flex items-center gap-3.5">
            <span
              className="flex h-12 w-12 items-center justify-center rounded-md"
              style={{ background: NAVY, color: GOLD }}
            >
              <Building2 className="h-7 w-7" strokeWidth={1.75} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[22px] font-bold tracking-tight" style={{ color: NAVY }}>
                法人売却センター
              </span>
              <span className="text-[12px]" style={{ color: "#8A93A0" }}>
                法人の売却・譲渡を専門サポート
              </span>
            </span>
          </a>

          {/* 右エリア：電話番号 → CTA の順で横並び */}
          <div className="flex items-center gap-10">
            {/* 電話番号 */}
            <div className="flex flex-col items-end leading-tight">
              <span className="text-[12px]" style={{ color: "#8A93A0" }}>
                お急ぎの方はお電話でご相談ください
              </span>
              <a
                href="tel:03-0000-0000"
                className="flex items-center gap-2 text-[30px] font-black"
                style={{ color: NAVY }}
              >
                <Phone className="h-6 w-6" strokeWidth={2.5} style={{ color: GOLD }} />
                03-XXXX-XXXX
              </a>
              <span className="text-[11px]" style={{ color: "#8A93A0" }}>
                受付時間 9:00-18:00（土日祝日を除く）
              </span>
            </div>

            {/* CTA（セカンダリ・少し大きめ） */}
            <div className="flex flex-col items-center gap-1">
              <a
                href="#contact"
                className="flex items-center gap-2 rounded-md border-2 bg-white px-8 py-3.5 text-[18px] font-bold"
                style={{ color: NAVY, borderColor: NAVY }}
              >
                <Mail className="h-[22px] w-[22px]" strokeWidth={2} />
                無料で査定してみる
              </a>
              <span className="text-[11px] font-bold" style={{ color: GOLD }}>
                24時間受付中
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* ───────── 濃紺フレーム（ビジュアル＋実績バー） ───────── */}
      <div className="w-full px-[10px] py-[10px]">
        <div className="mx-auto w-full max-w-[1516px]">
          {/* メインビジュアル（白カード／左右2カラム） */}
          <div className="relative flex overflow-hidden bg-white">
            {/* 左：約58% */}
            <div
              className="relative flex flex-col py-[40px] pl-[60px] pr-[16px]"
              style={{ flexBasis: "58%", flexShrink: 0 }}
            >
              {/* 1. 濃紺帯バッジ */}
              <span
                className="inline-flex w-fit items-center rounded-[6px] px-[26px] py-[14px] text-[18px] font-bold"
                style={{ background: NAVY, color: GOLD }}
              >
                赤字・債務・休眠法人もご相談可能
              </span>

              {/* 2-4. 見出し3行（完全に独立した要素・共通サイズ制御なし） */}
              <p className="hero-heading-lead">放置している法人を</p>
              <p className="hero-heading-main">
                {/* 「高額で売却」の背面にだけゴールド帯（文字幅より左右に広く・少し背高・帯として認識できる濃さ／角丸なし・文字色は不変） */}
                <span style={{ position: "relative", display: "inline-block" }}>
                  <span
                    aria-hidden
                    style={{
                      position: "absolute",
                      left: "-26px",
                      right: "-26px",
                      top: "2px",
                      bottom: "2px",
                      background: "rgba(201,168,76,0.24)",
                      zIndex: 0,
                    }}
                  />
                  <span style={{ position: "relative", zIndex: 1 }}>
                    <span className="hero-main-gold">高額</span>
                    <span className="hero-main-de">で</span>
                    <span className="hero-main-gold">売却</span>
                  </span>
                </span>
              </p>
              <p className="hero-heading-close">しませんか？</p>

              {/* 5. サブコピー */}
              <p
                style={{
                  fontSize: "22px",
                  fontWeight: 600,
                  lineHeight: 1.5,
                  color: "#33425C",
                  margin: 0,
                  marginTop: "16px",
                }}
              >
                法人売却・事業承継の専門チームが
                <br />
                全国対応・秘密厳守でサポートいたします
              </p>

              {/* 6. 4つの特徴カード */}
              <div className="mt-[18px] flex gap-[10px]">
                {cards.map((card) => (
                  <div
                    key={card.label}
                    className="flex h-[110px] flex-1 flex-row items-center justify-center gap-[12px] rounded-[10px] bg-white text-left"
                    style={{ border: `1px solid ${NAVY}22` }}
                  >
                    <img
                      src={card.icon}
                      alt=""
                      aria-hidden
                      className="h-[40px] w-[40px] shrink-0 object-contain"
                    />
                    <span
                      className="whitespace-pre-line text-[16px] font-bold leading-tight"
                      style={{ color: NAVY }}
                    >
                      {card.label}
                      {card.ok && <span style={{ color: GOLD }}>OK</span>}
                    </span>
                  </div>
                ))}
              </div>

              {/* 7. CTA */}
              <div className="relative mt-[16px] w-full">
                <a
                  href="#contact"
                  className="hero-cta-pulse relative flex h-[84px] w-full items-center justify-center rounded-full px-[32px] text-[28px] font-extrabold text-white"
                  style={{ background: RED, boxShadow: "0 8px 20px rgba(192,57,43,0.28)" }}
                >
                  {/* 60秒バッジはボタンの子要素＝パルスと一体で拡縮 */}
                  <span
                    className="absolute -left-[4px] top-1/2 flex h-[72px] w-[72px] -translate-y-1/2 flex-col items-center justify-center rounded-full text-center text-[11px] font-bold leading-tight"
                    style={{ background: GOLD, color: NAVY, boxShadow: "0 4px 10px rgba(0,0,0,0.15)" }}
                  >
                    簡単60秒
                    <br />
                    入力
                  </span>
                  <span className="flex items-center gap-[14px]">
                    <Mail className="h-[28px] w-[28px] shrink-0" strokeWidth={2.25} />
                    <span>無料で査定してみる</span>
                  </span>
                  <ChevronRight
                    className="absolute right-[28px] top-1/2 h-[26px] w-[26px] -translate-y-1/2"
                    strokeWidth={2.5}
                  />
                </a>
              </div>

              {/* 8. CTA下補足文 */}
              <p className="mt-[10px] text-center text-[14px]" style={{ color: "#8A93A0" }}>
                査定だけでもOK｜しつこい営業は一切いたしません
              </p>
            </div>

            {/* 右：約42%（完成ビジュアル1枚／人物＋ビル群背景込み） */}
            <div
              className="relative overflow-hidden"
              style={{ flexBasis: "42%", flexShrink: 0 }}
            >
              {/* 背景込みの完成素材を1枚で配置（別背景を重ねない・右下寄せ／頭を切らない） */}
              <img
                src={heroVisual}
                alt="法人売却センター 担当者とオフィスビル群"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: "22% 18%" }}
              />
              {/* 左端のみ細く白へ溶かして境界を消す（中央に白い帯を作らない・人物には及ばない） */}
              <div
                className="pointer-events-none absolute inset-0"
                aria-hidden
                style={{
                  background:
                    "linear-gradient(to right, #fff 0%, rgba(255,255,255,0.7) 5%, rgba(255,255,255,0) 16%)",
                  backdropFilter: "blur(1.5px)",
                  WebkitBackdropFilter: "blur(1.5px)",
                  maskImage:
                    "linear-gradient(to right, black 0%, black 8%, transparent 18%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, black 0%, black 8%, transparent 18%)",
                }}
              />
            </div>

            {/* 実績訴求テキスト（完成図準拠：ビジュアル全体に重ねて人物左の空へ配置・横幅約40.5%・右肩上がり／仮実装） */}
            <div
              className="pointer-events-none absolute left-[41%] top-[124px] z-30 flex flex-col items-start"
              style={{ transform: "rotate(-6deg)", transformOrigin: "left center" }}
              aria-hidden
            >
              {/* 査定最高額（赤・中／余白を埋めるためサイズアップ） */}
              <span
                className="whitespace-nowrap leading-none"
                style={{ fontSize: "37px", fontWeight: 800, color: RED }}
              >
                査定最高額
              </span>

              {/* 1,100万円！（「1,100」だけ突出）＋金筆ストローク */}
              <div className="relative mt-[12px]">
                <svg
                  className="absolute -left-[10px] -bottom-[12px] -z-10 h-[48px] w-[420px]"
                  viewBox="0 0 420 50"
                  fill="none"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="heroBrush" x1="0" y1="1" x2="1" y2="0">
                      <stop offset="0%" stopColor="#E8901E" />
                      <stop offset="45%" stopColor="#F9A825" />
                      <stop offset="100%" stopColor="#FFC24D" />
                    </linearGradient>
                  </defs>
                  {/* 筆の本体：太さ不均一・両端テーパー・右肩上がり */}
                  <path
                    d="M8 40 C 80 33, 150 33, 232 24 C 308 16, 360 14, 412 6
                       C 372 24, 312 26, 246 31 C 162 37, 84 39, 14 45 Z"
                    fill="url(#heroBrush)"
                  />
                  {/* かすれ筋（明） */}
                  <path
                    d="M30 37 C 140 30, 260 23, 380 12"
                    stroke="#ffffff"
                    strokeOpacity="0.4"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  {/* かすれ筋（暗） */}
                  <path
                    d="M22 42 C 150 34, 270 28, 392 16"
                    stroke="#C9760F"
                    strokeOpacity="0.5"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                  {/* 末尾のドライブラシ（かすれの飛び） */}
                  <path
                    d="M318 19 l 16 -2 M348 16 l 20 -3 M384 11 l 18 -3"
                    stroke="#F9A825"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.85"
                  />
                </svg>
                <span className="relative whitespace-nowrap leading-none" style={{ color: RED }}>
                  <span style={{ fontSize: "84px", fontWeight: 900 }}>1,100</span>
                  <span style={{ fontSize: "52px", fontWeight: 700, marginLeft: "2px" }}>万円</span>
                  <span style={{ fontSize: "52px", fontWeight: 700, marginLeft: "4px" }}>！</span>
                </span>
              </div>

              {/* 当日払いの実績アリ（紺・中） */}
              <span
                className="mt-[16px] whitespace-nowrap leading-none"
                style={{ fontSize: "24px", fontWeight: 700, color: NAVY }}
              >
                当日払いの実績アリ
              </span>

              {/* 注釈（グレー・小・通常フォント／視認性のため濃いめ） */}
              <span
                className="mt-[8px] self-center whitespace-nowrap"
                style={{ fontSize: "13px", fontWeight: 600, color: "#5B6776" }}
              >
                （負債有り法人の実績）
              </span>
            </div>
          </div>

          {/* ───────── 実績バー ───────── */}
          <div className="flex h-[150px] w-full" style={{ background: NAVY }}>
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-1 flex-col items-center justify-center gap-[6px] text-center"
                style={i > 0 ? { borderLeft: `1px solid ${NAVY2}` } : undefined}
              >
                <span className="text-[16px] font-semibold text-white/90">{stat.label}</span>
                <StatValue value={stat.value} size={stat.vSize} />
                {/* 注釈は空でも行を確保し、全ブロックを3行構成に統一（数字行の縦位置を揃える） */}
                <span className="text-[13px] text-white/70">{stat.note || " "}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
