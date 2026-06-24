import { Mail, ChevronRight } from 'lucide-react'
import heroConsultation from '../../assets/hero/hero-consultation.png'
import saruLogo from '../../assets/hero/saru-logo.png'

const BG = '#F5F2EC'
const NAVY = '#1E2A4A'
const ORANGE = '#C2440F'

export default function Hero() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <header style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e8e8e8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 32px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src={saruLogo} alt="法人サルベージ協会" style={{ height: '80px', width: 'auto' }} />
          <span style={{ color: NAVY, fontWeight: 900, fontSize: '2.3rem', letterSpacing: '0.04em' }}>
            法人サルベージ協会
          </span>
        </div>
        <a href="#contact" style={{
          display: 'flex', alignItems: 'center', gap: '12px',
          backgroundColor: ORANGE, color: '#ffffff',
          padding: '12px 20px', textDecoration: 'none',
        }}>
          <Mail style={{ width: '16px', height: '16px', flexShrink: 0 }} />
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', lineHeight: 1.3 }}>法人価値を無料で診断する</div>
            <div style={{ fontSize: '0.68rem', opacity: 0.9, lineHeight: 1.3 }}>24時間受付中</div>
          </div>
          <ChevronRight style={{ width: '16px', height: '16px', flexShrink: 0 }} />
        </a>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section style={{
        width: '100vw',
        backgroundColor: BG,
        position: 'relative',
        overflow: 'hidden',
        height: '560px',
      }}>

        {/* 画像エリア */}
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '56%',
          height: '100%',
        }}>
          <div style={{
            position: 'absolute',
            top: 0, bottom: 0, left: 0,
            width: '20%',
            zIndex: 1,
            pointerEvents: 'none',
            background: `linear-gradient(to right, ${BG} 0%, transparent 100%)`,
          }} />
          <img
            src={heroConsultation}
            alt="法人の無料相談の様子"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
            }}
          />
        </div>

        {/* テキストエリア */}
        <div style={{
          position: 'relative',
          maxWidth: '1280px',
          margin: '0 auto',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '64px',
        }}>
          <div style={{ width: '44%' }}>

            <p style={{ fontSize: '20px', color: NAVY, fontWeight: 500, margin: '0 0 8px 0' }}>
              不要な法人が
            </p>

            <span style={{ display: 'inline-block', position: 'relative', margin: '0 0 18px 0' }}>
              <h1 style={{
                fontSize: '64px',
                color: ORANGE,
                fontWeight: 900,
                lineHeight: 1,
                margin: 0,
              }}>
                高額資金に変わる。
              </h1>
              <svg
                style={{ position: 'absolute', left: 0, bottom: '-6px', width: '100%', overflow: 'visible' }}
                height="10"
                viewBox="0 0 400 10"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 8 Q80 3 160 7 Q240 11 320 6 Q370 3 398 7"
                  stroke={ORANGE}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>

            <p style={{ fontSize: '20px', color: NAVY, fontWeight: 500, margin: '0 0 24px 0' }}>
              それが、<span style={{ color: ORANGE, fontWeight: 700 }}>法人サルベージ</span>です。
            </p>

            <p style={{ fontSize: '17px', color: '#374151', lineHeight: 1.8, margin: 0 }}>
              休眠法人・赤字法人・債務超過法人も<br />
              <span style={{ color: ORANGE, fontWeight: 600 }}>価値が残っている</span>可能性があります。
            </p>

          </div>
        </div>
      </section>

      {/* ===== 3カラム特徴エリア ===== */}
      <section style={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid #E5E7EB',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
        }}>

          {/* 01 */}
          <div style={{ padding: '40px 48px', borderRight: '1px solid #E5E7EB' }}>
            <div style={{
              width: '40px', height: '40px', borderRadius: '50%',
              backgroundColor: ORANGE, color: '#ffffff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 700, fontSize: '14px',
              marginBottom: '16px',
            }}>01</div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: NAVY, margin: '0 0 12px 0' }}>
              価値が残る可能性
            </h3>
            <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.7, margin: 0 }}>
              解散前に査定することで、思わぬ価値が見つかる場合があります。
            </p>
          </div>

          {/* 02 */}
          <div style={{ padding: '40px 48px', borderRight: '1px solid #E5E7EB' }}>
            <div style={{
              width: '40px', height: '40px', borderRadius: '50%',
              backgroundColor: ORANGE, color: '#ffffff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 700, fontSize: '14px',
              marginBottom: '16px',
            }}>02</div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: NAVY, margin: '0 0 12px 0' }}>
              最短即日査定
            </h3>
            <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.7, margin: 0 }}>
              売却可能性をスピーディーに確認できます。
            </p>
          </div>

          {/* 03 */}
          <div style={{ padding: '40px 48px' }}>
            <div style={{
              width: '40px', height: '40px', borderRadius: '50%',
              backgroundColor: ORANGE, color: '#ffffff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 700, fontSize: '14px',
              marginBottom: '16px',
            }}>03</div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: NAVY, margin: '0 0 12px 0' }}>
              来店不要で完結
            </h3>
            <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.7, margin: 0 }}>
              全国どこからでもオンラインで手続き可能です。
            </p>
          </div>
        </div>

        <p style={{
          fontSize: '12px',
          color: '#9CA3AF',
          textAlign: 'center',
          padding: '12px 0',
          margin: 0,
        }}>
          ※法令・定款・契約内容等により、買取できない場合があります。
        </p>
      </section>
    </>
  )
}
