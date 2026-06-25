import { ChevronDown } from 'lucide-react';
import icon01 from '../../assets/icons/flow-icon-01.png';
import icon02 from '../../assets/icons/step02_clipboard.png';
import icon03 from '../../assets/icons/flow-icon-03.png';
import icon04 from '../../assets/icons/flow-icon-04.png';
import icon05 from '../../assets/icons/flow-icon-05.png';

const ORANGE = '#e8550a';
const NAVY = '#1a2744';

const steps = [
  {
    num: '01',
    icon: icon01,
    title: '法人価値を診断',
    desc: '事業・信用・資産価値まで総合的に査定し、',
    highlight: '無料で法人価値を診断',
    descEnd: 'します。',
    time: '最短即日',
  },
  {
    num: '02',
    icon: icon02,
    title: '適正価格を算出',
    desc: '市場価値をもとに、',
    highlight: '売却可能価格',
    descEnd: 'をご提示します。',
    time: '数日以内',
  },
  {
    num: '03',
    icon: icon03,
    title: '最適な売却先をご紹介',
    desc: '独自ネットワークから',
    highlight: '最適な相手先を選定',
    descEnd: 'し、ご提案します。',
    time: '随　時',
  },
  {
    num: '04',
    icon: icon04,
    title: '条件交渉・契約',
    desc: '',
    highlight: '専門スタッフが交渉をサポート',
    descEnd: 'し、ご納得いただける条件で契約を締結します。',
    time: '随　時',
  },
  {
    num: '05',
    icon: icon05,
    title: '売却完了・代金のお受け取り',
    desc: '契約に基づき売却を完了し、',
    highlight: '売却代金を確実にお受け取り',
    descEnd: 'いただきます。',
    time: '随　時',
  },
];

export function Flow() {
  return (
    <section style={{ background: '#faf9f7', paddingTop: 80, paddingBottom: 80 }}>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>

        {/* ヘッダー */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: ORANGE, letterSpacing: '0.2em', marginBottom: 8 }}>FLOW</p>
          <div style={{ width: 32, height: 2, background: ORANGE, margin: '0 auto 24px' }} />
          <h2 style={{ fontSize: 40, fontWeight: 700, color: NAVY, marginBottom: 12 }}>法人売却までの流れ</h2>
          <p style={{ fontSize: 16, color: '#374151', margin: 0 }}>ご相談から売却完了まで、専門スタッフが丁寧にサポートします。</p>
        </div>

        {/* ステップリスト */}
        <div style={{ position: 'relative' }}>

          {/* 縦線: ドットの中心を通る1本線 */}
          <div style={{
            position: 'absolute',
            left: 31,
            top: 36,
            bottom: 36,
            width: 2,
            background: ORANGE,
            zIndex: 0,
          }} />

          {steps.map((step, index) => (
            <div key={step.num} style={{ position: 'relative', display: 'flex', alignItems: 'stretch', marginBottom: index < steps.length - 1 ? 24 : 0 }}>

              {/* 左タイムライン列 */}
              <div style={{ width: 64, flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: ORANGE, marginTop: 36, flexShrink: 0, zIndex: 1 }} />
              </div>

              {/* カード本体 */}
              <div style={{
                flex: 1,
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: 12,
                padding: '28px 32px',
                display: 'flex',
                alignItems: 'center',
                gap: 20,
              }}>

                {/* STEP番号列 */}
                <div style={{ width: 80, flexShrink: 0 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: ORANGE, letterSpacing: '0.15em' }}>STEP</div>
                  <div style={{ fontSize: 64, fontWeight: 700, color: ORANGE, lineHeight: 1 }}>{step.num}</div>
                </div>

                {/* アイコン円 */}
                <div style={{
                  width: 80, height: 80, borderRadius: '50%',
                  background: '#f0ede8',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <img src={step.icon} alt="" style={{ width: 48, height: 48, objectFit: 'contain' }} />
                </div>

                {/* テキスト */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 19, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{step.title}</div>
                  <div style={{ fontSize: 15, color: '#374151', lineHeight: 1.75 }}>
                    {step.desc}
                    <span style={{ color: ORANGE }}>{step.highlight}</span>
                    {step.descEnd}
                  </div>
                </div>
              </div>

              {/* カード間シェブロン（最後以外）*/}
              {index < steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  bottom: -18,
                  left: 128,
                  transform: 'translateX(-50%)',
                  zIndex: 1,
                }}>
                  <ChevronDown size={20} color={ORANGE} strokeWidth={2} />
                </div>
              )}
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
