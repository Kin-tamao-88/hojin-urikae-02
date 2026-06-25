import { CheckCircle } from 'lucide-react';
import personIt from '../../assets/people/person-it.png';
import personConstruction from '../../assets/people/person-construction.png';
import personDormant from '../../assets/people/person-dormant.png';

const ORANGE = '#e8550a';

export function CaseStudy() {
  return (
    <section style={{ background: '#ffffff', padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        {/* セクションヘッダー */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
            <span style={{ width: 40, height: 1, background: ORANGE, display: 'block' }} />
            <span style={{ color: ORANGE, fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em' }}>実際のご成約事例</span>
            <span style={{ width: 40, height: 1, background: ORANGE, display: 'block' }} />
          </div>
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', color: '#1a1a1a', lineHeight: 1.4, margin: 0 }}>
            多くの法人様が、<span style={{ color: ORANGE }}>解決への一歩</span>を踏み出しています
          </h2>
        </div>

        {/* 上段：CASE 02 大カード */}
        <div style={{
          border: '1px solid #e8e0d8',
          padding: '36px 40px',
          marginBottom: 24,
          display: 'grid',
          gridTemplateColumns: '55% 45%',
          gap: 48,
          alignItems: 'start',
        }}>
          {/* 左：数字エリア */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <span style={{ background: ORANGE, color: '#fff', fontWeight: 900, fontSize: '0.75rem', padding: '4px 10px' }}>CASE 02</span>
              <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#1a1a1a' }}>建設業（内装工事業）</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 20 }}>
              <div style={{ flexShrink: 0 }}>
                <p style={{ fontSize: '0.8rem', color: '#333', marginBottom: 6, fontWeight: 500 }}>他社提示額</p>
                <p style={{ fontWeight: 900, fontSize: '2rem', color: '#333', lineHeight: 1, whiteSpace: 'nowrap' }}>140万円</p>
              </div>
              <span style={{ color: ORANGE, fontSize: '1.8rem', fontWeight: 900, flexShrink: 0 }}>→</span>
              <div style={{ flexShrink: 0 }}>
                <p style={{ fontSize: '0.8rem', color: ORANGE, marginBottom: 6, fontWeight: 600 }}>JCAO成約額</p>
                <p style={{ fontWeight: 900, fontSize: '3.8rem', color: ORANGE, lineHeight: 1, whiteSpace: 'nowrap' }}>700万円</p>
              </div>
              <div style={{
                width: 64, height: 64, borderRadius: '50%',
                background: ORANGE, color: '#fff',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                fontSize: '0.65rem', fontWeight: 900, lineHeight: 1.4,
                textAlign: 'center', flexShrink: 0,
              }}>
                約5倍に<br />アップ
              </div>
            </div>

            <div style={{ borderTop: '1px solid #e8e0d8', paddingTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <CheckCircle size={16} color={ORANGE} strokeWidth={2} style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  <p style={{ fontWeight: 750, fontSize: '1rem', color: ORANGE, margin: '0 0 7px' }}>法人の状況</p>
                  <p style={{ fontSize: '1rem', color: '#444', lineHeight: 1.6, margin: 0 }}>借入が多く、他社提示額はわずか140万円と低く評価されていた。</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <CheckCircle size={16} color={ORANGE} strokeWidth={2} style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  <p style={{ fontWeight: 750, fontSize: '1rem', color: ORANGE, margin: '0 0 7px' }}>売却できた理由</p>
                  <p style={{ fontSize: '1rem', color: '#444', lineHeight: 1.6, margin: 0 }}>取引先との契約関係やブランド価値を評価し、高額売却を実現。</p>
                </div>
              </div>
            </div>
          </div>

  {/* 右：体験談 */}
          <div style={{ paddingTop: '25px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <img src={personConstruction} alt="O様" style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', flexShrink: 0 }} />
              <div>
                <p style={{ fontWeight: 750, fontSize: '0.85rem', color: ORANGE, margin: '0 0 2px' }}>オーナー様の声　O様</p>
              </div>
            </div>
           <p style={{ fontSize: '1rem', color: '#333', lineHeight: 2, fontWeight: 500, margin: 0, borderLeft: '3px solid #e8550a', paddingLeft: '12px', backgroundImage: 'repeating-linear-gradient(transparent, transparent calc(2em - 1px), #f0e8e0 calc(2em - 1px), #f0e8e0 2em)', backgroundSize: '100% 2em' }}>
              知人の会社が引き取ってくれる話をくれたのですが、<br />
              JCAOを知って期待せずに相談してみました。<br />
              負債が多いのに高く売れると思っていませんでした。<br />本当に感謝しております。
            </p>
          </div>
        </div>

        {/* 下段：CASE 01 / CASE 03 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }} className="case-cards-bottom">

          {/* CASE 01 */}
          <div style={{ border: '1px solid #e8e0d8', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ background: ORANGE, color: '#fff', fontWeight: 900, fontSize: '0.75rem', padding: '4px 10px' }}>CASE 01</span>
              <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1a1a1a' }}>IT企業（システム開発業）</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '0.75rem', color: '#333', marginBottom: 4, fontWeight: 500 }}>他社査定</p>
                <p style={{ fontWeight: 900, fontSize: '1.6rem', color: '#333', lineHeight: 1, whiteSpace: 'nowrap' }}>買取不可</p>
              </div>
              <span style={{ color: ORANGE, fontSize: '2.4rem', fontWeight: 900, flexShrink: 0 }}>→</span>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '0.75rem', color: ORANGE, marginBottom: 4, fontWeight: 600 }}>JCAO成約額</p>
                <p style={{ fontWeight: 900, fontSize: '2.8rem', color: ORANGE, lineHeight: 1, whiteSpace: 'nowrap' }}>120万円</p>
              </div>
            </div>

            <div style={{ borderTop: '1px solid #e8e0d8', paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <CheckCircle size={14} color={ORANGE} strokeWidth={2} style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  <p style={{ fontWeight: 750, fontSize: '1rem', color: ORANGE, margin: '0 0 7px' }}>法人の状況</p>
                  <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.6, margin: 0 }}>赤字決算が続き借入の返済も滞っており、<br />誰に相談しても法人破産を推奨され困っていました。</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <CheckCircle size={14} color={ORANGE} strokeWidth={2} style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  <p style={{ fontWeight: 750, fontSize: '1rem', color: ORANGE, margin: '0 0 7px' }}>売却できた理由</p>
                  <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.8, margin: 0 }}>JCAO依頼後、3日後には買い手様を見つけていただきました。<br />資本投下で存続価値があるとのことで成立しました。</p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <img src={personIt} alt="S様" style={{ width: 58, height: 58, borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', flexShrink: 0 }} />
              <div>
                <p style={{ fontWeight: 750, fontSize: '1rem', color: ORANGE, margin: '0 0 7px' }}>オーナー様の声　S様</p>
                <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.7, margin: 0, borderLeft: '3px solid #e8550a', paddingLeft: '12px'}}>他社では「価値がない」と言われて諦めていましたが、<br />想定以上の金額で売却できて感謝しています。</p>
              </div>
            </div>
          </div>

          {/* CASE 03 */}
          <div style={{ border: '1px solid #e8e0d8', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ background: ORANGE, color: '#fff', fontWeight: 900, fontSize: '0.75rem', padding: '4px 10px' }}>CASE 03</span>
              <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1a1a1a' }}>休眠法人（不動産管理業）</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '0.75rem', color: '#333', marginBottom: 4, fontWeight: 500 }}>解散予定</p>
                <p style={{ fontWeight: 900, fontSize: '1.6rem', color: '#333', lineHeight: 1, whiteSpace: 'nowrap' }}>0円</p>
              </div>
              <span style={{ color: ORANGE, fontSize: '2.4rem', fontWeight: 900, flexShrink: 0 }}>→</span>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '0.75rem', color: ORANGE, marginBottom: 4, fontWeight: 600 }}>JCAO成約額</p>
                <p style={{ fontWeight: 900, fontSize: '2.8rem', color: ORANGE, lineHeight: 1, whiteSpace: 'nowrap' }}>285万円</p>
              </div>
            </div>

            <div style={{ borderTop: '1px solid #e8e0d8', paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <CheckCircle size={14} color={ORANGE} strokeWidth={2} style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  <p style={{ fontWeight: 750, fontSize: '1rem', color: ORANGE, margin: '0 0 7px' }}>法人の状況</p>
                  <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.4, margin: 0 }}>事業を撤退してから4年間放置していた休眠法人でした。</p>
                <br />

                </div>
              </div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <CheckCircle size={14} color={ORANGE} strokeWidth={2} style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  <p style={{ fontWeight: 750, fontSize: '1rem', color: ORANGE, margin: '0 0 7px' }}>売却できた理由</p>
                  <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.6, margin: 0 }}>会社としての実績や資産を評価し、<br />再利用価値を引き出していただきました。</p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <img src={personDormant} alt="Y様" style={{ width: 58, height: 58, borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', flexShrink: 0 }} />
              <div>
                <p style={{ fontWeight: 750, fontSize: '1rem', color: ORANGE, margin: '0 0 7px' }}>オーナー様の声　Y様</p>
                <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.7, margin: 0, borderLeft: '3px solid #e8550a', paddingLeft: '12px', backgroundImage: 'repeating-linear-gradient(transparent, transparent calc(2em - 1px), #f0e8e0 calc(2em - 1px), #f0e8e0 2em)', backgroundSize: '100% 2em'}}>解散費用もかかると思っていましたが、<br />思わぬ臨時収入になり、非常に助かりました。</p><br />
              </div>
            </div>
          </div>
        </div>

        <p style={{ textAlign: 'center', fontSize: '0.78rem', color: '#aaa', marginTop: 20 }}>
          ※上記は一例であり、すべての法人が同様の金額で売却できることを保証するものではありません。
        </p>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .case-cards-bottom { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}