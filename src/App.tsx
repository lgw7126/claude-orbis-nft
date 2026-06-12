import { Mail, X, GitFork } from 'lucide-react'

const HERO_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4'
const ABOUT_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4'
const CTA_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4'

// ─────────────────────────────────────────────
// 🎬 내 작업물 영상 링크를 여기에 넣으세요!
// video: 영상 URL (mp4 직링크)
// title: 작품 제목
// engine: 사용한 툴 (UE5 / BLENDER / AI 등)
// ─────────────────────────────────────────────
const WORKS = [
  {
    video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4',
    // 👇 내 영상으로 교체: video: 'https://your-video-url.mp4',
    title: 'WORK 01',
    engine: 'UE5',
  },
  {
    video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4',
    // 👇 내 영상으로 교체: video: 'https://your-video-url.mp4',
    title: 'WORK 02',
    engine: 'BLENDER',
  },
  {
    video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4',
    // 👇 내 영상으로 교체: video: 'https://your-video-url.mp4',
    title: 'WORK 03',
    engine: 'AI',
  },
]

const ABOUT_DESC = "BLENDER. UNREAL ENGINE. AI. THIRTY SECONDS AT A TIME — CRAFTING MOTION, SPACE, AND THINGS THAT SHOULDN'T EXIST."

function SocialIcons({ vertical = false }: { vertical?: boolean }) {
  const icons = [
    { Icon: Mail, label: 'Mail' },
    { Icon: X, label: 'Twitter' },
    { Icon: GitFork, label: 'Github' },
  ]

  if (vertical) {
    return (
      <div className="liquid-glass flex flex-col rounded-[0.5rem] sm:rounded-[1rem] lg:rounded-[1.25rem] overflow-hidden">
        {icons.map(({ Icon, label }, i) => (
          <button
            key={label}
            aria-label={label}
            className={`flex items-center justify-center cursor-pointer bg-transparent hover:bg-white/10 transition-colors
              w-[14vw] sm:w-[14.375rem] md:w-[10.78125rem] lg:w-[16.77rem]
              h-[14vw] sm:h-[4.375rem] md:h-[3.78125rem] lg:h-[5.77rem]
              ${i < icons.length - 1 ? 'border-b border-white/10' : ''}`}
          >
            <Icon size={20} color="#EFF4FF" />
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-row gap-3">
      {icons.map(({ Icon, label }) => (
        <button
          key={label}
          aria-label={label}
          className="liquid-glass w-14 h-14 flex items-center justify-center rounded-[1rem] hover:bg-white/10 transition-colors cursor-pointer bg-transparent"
        >
          <Icon size={20} color="#EFF4FF" />
        </button>
      ))}
    </div>
  )
}

export default function App() {
  return (
    <div style={{ background: '#010828', color: '#EFF4FF' }}>
      {/* Texture overlay */}
      <div
        className="fixed inset-0 z-50 pointer-events-none"
        style={{
          backgroundImage: 'url(/texture.png)',
          backgroundSize: 'cover',
          mixBlendMode: 'lighten',
          opacity: 0.6,
        }}
      />

      {/* ── SECTION 1: HERO ── */}
      <section
        className="relative w-full min-h-screen overflow-hidden rounded-b-[32px]"
        style={{ background: '#010828' }}
      >
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={HERO_VIDEO}
        />

        <div className="relative z-10 w-full max-w-[1831px] mx-auto px-5 sm:px-8 lg:px-14 flex flex-col min-h-screen">
          {/* Header */}
          <div className="flex items-center justify-between pt-6 lg:pt-8">
            {/* Logo */}
            <span
              className="text-[28px] lg:text-[32px] uppercase tracking-wider"
              style={{ fontFamily: 'Anton, sans-serif', color: '#EFF4FF' }}
            >
              GO.
            </span>

            {/* Nav */}
            <nav className="hidden lg:block liquid-glass rounded-[28px] px-[52px] py-[20px]">
              <ul className="flex gap-10 list-none">
                {['Works', 'About', 'Process', 'Archive', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[17px] uppercase no-underline transition-colors hover:text-[#6FFF00]"
                      style={{ fontFamily: 'Anton, sans-serif', color: '#EFF4FF' }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop social icons */}
            <div className="hidden lg:flex flex-col gap-3">
              {[Mail, X, GitFork].map((Icon, i) => (
                <button
                  key={i}
                  className="liquid-glass w-14 h-14 flex items-center justify-center rounded-[1rem] hover:bg-white/10 transition-colors cursor-pointer bg-transparent border-0"
                >
                  <Icon size={20} color="#EFF4FF" />
                </button>
              ))}
            </div>
          </div>

          {/* Hero text */}
          <div className="flex-1 flex flex-col justify-center lg:justify-end pb-16 lg:pb-24">
            <div className="relative lg:ml-32 max-w-full lg:max-w-[780px]">
              <h1
                className="uppercase text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] leading-[1.05] sm:leading-[1] text-[#EFF4FF]"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Rendered in<br />
                silence. Built<br />
                in ( real ) time.
              </h1>
              {/* Cursive accent */}
              <span
                className="absolute -top-6 right-0 lg:-right-8 text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] -rotate-1 opacity-90 text-[#6FFF00] pointer-events-none"
                style={{ fontFamily: 'Condiment, cursive', mixBlendMode: 'exclusion' }}
              >
                3D & motion works
              </span>
            </div>

            {/* Mobile social icons */}
            <div className="flex lg:hidden justify-center mt-8">
              <SocialIcons />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: ABOUT ── */}
      <section
        className="relative w-full min-h-screen overflow-hidden"
        style={{ background: '#010828' }}
      >
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={ABOUT_VIDEO}
        />

        <div className="relative z-10 w-full max-w-[1831px] mx-auto px-5 sm:px-8 lg:px-14 py-16 sm:py-20 lg:py-24 flex flex-col justify-between min-h-screen">
          {/* Top row */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-0">
            {/* Left: Heading */}
            <div className="relative flex-1">
              <h2
                className="uppercase text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] leading-tight text-[#EFF4FF]"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Hello.<br />
                I make worlds.
              </h2>
              <span
                className="absolute bottom-0 right-0 lg:right-8 text-[36px] sm:text-[48px] md:text-[58px] lg:text-[68px] -rotate-2 opacity-90 text-[#6FFF00] pointer-events-none"
                style={{ fontFamily: 'Condiment, cursive', mixBlendMode: 'exclusion' }}
              >
                real & rendered
              </span>
            </div>

            {/* Right: Description */}
            <div className="lg:max-w-[266px]">
              <p
                className="text-[14px] lg:text-[16px] uppercase text-[#EFF4FF]"
                style={{ fontFamily: 'ui-monospace, Consolas, monospace' }}
              >
                {ABOUT_DESC}
              </p>
            </div>
          </div>

          {/* Bottom row: decorative text columns */}
          <div className="flex flex-row justify-between mt-12 lg:mt-0">
            <div className="flex flex-col gap-6 max-w-[40%]">
              <p
                className="text-[12px] lg:text-[14px] uppercase opacity-10 text-[#010828] lg:text-[#EFF4FF]"
                style={{ fontFamily: 'ui-monospace, Consolas, monospace' }}
              >
                {ABOUT_DESC}
              </p>
              <p
                className="text-[12px] lg:text-[14px] uppercase opacity-10 text-[#010828] lg:text-[#EFF4FF]"
                style={{ fontFamily: 'ui-monospace, Consolas, monospace' }}
              >
                {ABOUT_DESC}
              </p>
            </div>

            <div className="hidden lg:flex flex-col gap-6 max-w-[40%] text-right">
              <p
                className="text-[14px] uppercase opacity-10 text-[#EFF4FF]"
                style={{ fontFamily: 'ui-monospace, Consolas, monospace' }}
              >
                {ABOUT_DESC}
              </p>
              <p
                className="text-[14px] uppercase opacity-10 text-[#EFF4FF]"
                style={{ fontFamily: 'ui-monospace, Consolas, monospace' }}
              >
                {ABOUT_DESC}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: WORKS GRID ── */}
      <section
        className="w-full py-16 sm:py-20 lg:py-24"
        style={{ background: '#010828' }}
      >
        <div className="w-full max-w-[1831px] mx-auto px-5 sm:px-8 lg:px-14">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-12">
            {/* Left: Heading */}
            <div>
              <h2
                className="uppercase text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] leading-tight text-[#EFF4FF]"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Archive of
              </h2>
              <div className="ml-12 sm:ml-24 lg:ml-32">
                <span
                  className="text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] text-[#6FFF00]"
                  style={{ fontFamily: 'Condiment, cursive' }}
                >
                  moving
                </span>
                <span
                  className="uppercase text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] text-[#EFF4FF]"
                  style={{ fontFamily: 'Anton, sans-serif' }}
                >
                  {' '}frames
                </span>
              </div>
            </div>

            {/* Right: SEE ALL WORKS button */}
            <div className="flex flex-col items-start sm:items-end">
              <div className="flex items-end gap-2">
                <span
                  className="uppercase text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] text-[#EFF4FF] leading-none"
                  style={{ fontFamily: 'Anton, sans-serif' }}
                >
                  SEE
                </span>
                <div className="flex flex-col leading-tight pb-1">
                  <span
                    className="uppercase text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] text-[#EFF4FF]"
                    style={{ fontFamily: 'Anton, sans-serif' }}
                  >
                    ALL
                  </span>
                  <span
                    className="uppercase text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] text-[#EFF4FF]"
                    style={{ fontFamily: 'Anton, sans-serif' }}
                  >
                    WORKS
                  </span>
                </div>
              </div>
              {/* Neon underline bar */}
              <div
                className="w-full h-[6px] sm:h-[8px] lg:h-[10px] mt-2 rounded-full"
                style={{ background: '#6FFF00' }}
              />
            </div>
          </div>

          {/* Works Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORKS.map(({ video, title, engine }, idx) => (
              <div
                key={idx}
                className="liquid-glass rounded-[32px] p-[18px] hover:bg-white/10 transition-colors"
              >
                {/* Square video container */}
                <div className="w-full aspect-square rounded-[24px] overflow-hidden">
                  <video
                    autoPlay loop muted playsInline
                    className="w-full h-full object-cover"
                    src={video}
                  />
                </div>

                {/* Info bar */}
                <div className="liquid-glass rounded-[20px] px-6 py-4 mt-3 flex items-center justify-between">
                  <div className="flex flex-col flex-1">
                    <p
                      className="text-[13px] uppercase text-[#EFF4FF] tracking-widest"
                      style={{ fontFamily: 'Anton, sans-serif' }}
                    >
                      {title}
                    </p>
                    <p
                      className="text-[11px] uppercase text-[#6FFF00]/80 tracking-wide"
                      style={{ fontFamily: 'Anton, sans-serif' }}
                    >
                      {engine}
                    </p>
                  </div>
                  {/* Purple arrow button */}
                  <button
                    className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer border-0 shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #b724ff, #7c3aed)',
                      boxShadow: '0 10px 25px rgba(168, 85, 247, 0.5)',
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CTA ── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ background: '#010828' }}
      >
        <video
          autoPlay loop muted playsInline
          className="w-full h-auto block"
          src={CTA_VIDEO}
        />

        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center justify-end lg:pr-[20%] lg:pl-[15%] pr-6 pl-6">
          <div className="relative text-right">
            {/* accent cursive */}
            <span
              className="absolute -top-6 sm:-top-8 lg:-top-12 left-0 text-[17px] sm:text-[28px] md:text-[44px] lg:text-[68px] -rotate-1 opacity-90 text-[#6FFF00] pointer-events-none whitespace-nowrap"
              style={{ fontFamily: 'Condiment, cursive', mixBlendMode: 'exclusion' }}
            >
              available now
            </span>

            {/* Main heading */}
            <div
              className="uppercase text-[16px] sm:text-[24px] md:text-[40px] lg:text-[60px] leading-tight text-[#EFF4FF]"
              style={{ fontFamily: 'Anton, sans-serif' }}
            >
              <p className="mb-4 sm:mb-6 lg:mb-12">LET'S BUILD</p>
              <p>SOMETHING THAT</p>
              <p>DOESN'T EXIST</p>
              <p>YET.</p>
            </div>
          </div>
        </div>

        {/* Social icons: bottom-left */}
        <div className="absolute left-[8%] bottom-[12%] sm:bottom-[14%] lg:bottom-[20%]">
          <SocialIcons vertical />
        </div>
      </section>
    </div>
  )
}
