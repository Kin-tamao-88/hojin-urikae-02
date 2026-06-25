import { Building2, Timer, Shield, CheckCircle, FileText } from 'lucide-react';
import syoudanImg from '../../assets/people/syoudan-lp2.png';
import personIt from '../../assets/people/person-it.png';
import jcaoIcon from '../../assets/hero/jcao-icon-trimmed.png';
import iconStrength01 from '../../assets/strength/icon-strength-01.png';
import iconStrength02 from '../../assets/strength/icon-strength-02.png';
import iconStrength03 from '../../assets/strength/icon-strength-03.png';

const ORANGE = '#e8550a'
const NAVY = '#1a2744'

const reasons = [
  {
    num: '01',
    icon: <img src={iconStrength01} alt="" style={{ width: '84px', height: '64px', objectFit: 'contain' }} />,
    title: '業界最高水準の査定',
    desc: '多数の独自ネットワークとノウハウで、\n業界最高水準の買取価格をご提示します。',
  },
  {
    num: '02',
   icon: <img src={iconStrength02} alt="" style={{ width: '84px', height: '64px', objectFit: 'contain' }} />,
    title: '最速で現金化が可能',
    desc: '迅速な査定とスピーディーな手続きで、\n最短１日での現金化を実現します。',
  },
  {
    num: '03',
   icon: <img src={iconStrength03} alt="" style={{ width: '84px', height: '64px', objectFit: 'contain' }} />,
    title: 'コンプライアンスの徹底',
    desc: '企業情報や取引内容は厳重に管理し、\n後々のトラブル、情報流出防止を徹底。',
  },
];

const checks = [
  '全国対応 47都道府県',
  '初回相談 完全無料',
  'オンライン相談 対応可能',
];

export function Strength() {
  return (
    <section style={{ background: '#fff8f5' }}>
      {/* 上ブロック：3つの理由 */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px 56px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: 48 }}>
 <img src={jcaoIcon} alt="JCAO" style={{ height: '102px', width: 'auto' }} />
  <h2 style={{
    color: '#1a1a1a',
    fontWeight: 900,
    fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
    textAlign: 'center',
    margin: 0,
    letterSpacing: '-0.01em',
  }}>
    ＼ JCAOが選ばれる{' '}
    <span style={{ color: ORANGE }}>3つの理由</span> ／
  </h2>
</div>

        {/* 3カラムカード */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }} className="strength-cards">
          {reasons.map((r) => (
            <div key={r.num} style={{
              background: '#ffffff',
              border: `1px solid rgba(26,39,68,0.12)`,
              padding: '28px 24px 32px',
              position: 'relative',
            }}>
              <span style={{
                position: 'absolute',
                top: 20,
                left: 20,
                background: ORANGE,
                color: '#ffffff',
                fontWeight: 900,
                fontSize: '0.75rem',
                borderRadius: '50%',
                width: 36,
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                letterSpacing: '0.02em',
              }}>
                {r.num}
              </span>
              <div style={{ marginTop: 36, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
                {r.icon}
                <div>
                  <p style={{
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    color: NAVY,
                    marginBottom: 6,
                  }}>
                    {r.title}
                  </p>
                  <div style={{ width: 32, height: 2, background: ORANGE }} />
                </div>
              </div>
              <p style={{
                fontWeight: 400,
                fontSize: '0.9rem',
                color: '#444',
                lineHeight: 1.8,
                whiteSpace: 'pre-line',
              }}>
                {r.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* 下ブロック：専門チームセクション */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 80px' }} className="strength-team">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '55% 45%',
          gap: 48,
          alignItems: 'center',
        }} className="strength-team-inner">

          {/* 左エリア */}
          <div>
            <h3 style={{
              fontWeight: 900,
              fontSize: 'clamp(1.4rem, 3vw, 2.0rem)',
              color: '#1a1a1a',
              lineHeight: 1.6,
              marginBottom: 24,
            }}>
              法人売却・事業承継に<br /><span style={{ color: ORANGE }}>特化した専門チーム</span>が
              <br />経営者様のご要望に最大限応えます。
            </h3>
            <p style={{
              fontWeight: 500,
              fontSize: '1rem',
              color: '#555',
              lineHeight: 2.0,
              marginBottom: 28,
            }}>
              専任スタッフ制となり、<br />ご相談から売却完了まで１人のスタッフが対応します。<br /><br />
              お客様１人１人、状況や悩みが違いますので、<br />
              柔軟で最適な解決策をご提案いたします。<br /><br />
              まずはお気軽にご相談ください。
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {checks.map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <CheckCircle size={20} color={ORANGE} strokeWidth={2} />
                  <span style={{ fontWeight: 400, fontSize: '0.95rem', color: '#1a1a1a' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 右エリア：画像 */}
          <div style={{ height: '100%', minHeight: 360 }}>
            <img
              src={syoudanImg}
              alt="専門チームによる商談シーン"
              style={{
                width: '100%',
                height: '100%',
                minHeight: 360,
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>

      {/* 下部CTA */}
        <div style={{
          marginTop: 20,
          background: '#fff8f5',
          border: '1px solid #f0e8e0',
          padding: '28px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 32,
          flexWrap: 'wrap',
        }} className="case-cta-banner">
          <div style={{ minWidth: 240, display: 'flex', alignItems: 'center', gap: 20 }}>
            <img src={jcaoIcon} alt="JCAO" style={{ height: 56, width: 'auto', flexShrink: 0 }} />
            <div>
              <p style={{ fontWeight: 900, fontSize: '1rem', color: '#1a1a1a', marginBottom: 8 }}>
                あなたの法人にも、<span style={{ color: ORANGE }}>思わぬ価値が残っている</span>かもしれません。
              </p>
              <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                {['最短即日で査定完了', '情報は完全に秘密厳守', '相談・査定はすべて無料'].map((item) => (
                  <span key={item} style={{ fontSize: '0.8rem', color: '#666', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span style={{ color: ORANGE, fontWeight: 700 }}>✓</span> {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <a href="#contact" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            background: ORANGE, color: '#fff', fontWeight: 900, fontSize: '1rem',
            padding: '16px 28px', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0,
          }}
            onMouseOver={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = '#c94208')}
            onMouseOut={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = ORANGE)}
          >
            <FileText size={18} strokeWidth={2} />
            今すぐ無料で査定してみる
            <span style={{ fontSize: '1.2em' }}>›</span>
          </a>
        </div>

      {/* レスポンシブ調整 */}
      <style>{`
        @media (max-width: 768px) {
          .strength-cards { grid-template-columns: 1fr !important; }
          .strength-team-inner { grid-template-columns: 1fr !important; }
          .strength-team-inner > div:last-child { order: 2; min-height: 260px !important; }
          .strength-team-inner > div:first-child { order: 1; }
        }
      `}</style>
    </section>
  );
}