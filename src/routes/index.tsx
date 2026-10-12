import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect, useCallback } from 'react'
import { AnimatedSection } from '../components/AnimatedSection'
import { TypewriterText } from '../components/TypewriterText'
import { SEO } from '../components/SEO'

export const Route = createFileRoute('/')({
  component: IndexComponent,
})

function IndexComponent() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const totalSlides = 4

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    if (isPlaying) {
      interval = setInterval(nextSlide, 5500)
    }
    return () => clearInterval(interval)
  }, [isPlaying, nextSlide])

  return (
    <main className="w-full pt-20 bg-background">
      <SEO 
        title="Holistic Concept Consulting | Strategic & Ethical Solutions" 
        description="Strengthening governance and organizational effectiveness across private enterprise and public sector mandates through objective counsel and institutional stewardship." 
      />
      <div className="flex flex-col w-full">
        {/* HERO SLIDER SECTION */}
        <section className="relative w-full overflow-hidden bg-on-primary-fixed text-on-primary">
          {/* Ambient Luminous Gradient Mesh */}
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-secondary-fixed/15 blur-[120px] pointer-events-none"></div>
          <div className="absolute top-1/2 -right-24 w-[32rem] h-[32rem] rounded-full bg-primary-container/20 blur-[140px] pointer-events-none"></div>
          
          {/* Slides Container */}
          <div className="relative min-h-[580px] lg:min-h-[640px] flex items-stretch" id="hero-slider">
            
            {/* Slide 1: Ethical Governance */}
            <div className={`slide-item absolute inset-0 flex items-center transition-all duration-700 ${currentSlide === 0 ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-8 pointer-events-none z-0'}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-on-primary-fixed via-on-primary-fixed/90 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-25 scale-105 transition-transform duration-1000" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCpKap4pnlVfDabG1SZMDRbQo2mF5a1I20pUDzXNnVyPQ2XnxWEOwNRBLoied9EKO-xdCjDMuaEmMYxCcPm9cT7qZsEVY8ticAabV1HM9EoTZl8WCvSzCnG1ZZmpPgPC-g6ZAYhl1taALh48dUeCYs3AvyVMw6ZHSU0AsqgnLZeRl3S76cTsnPiu8BxH4_Exv22mNv_aCIiam1GeNcAMl9A7UfgIqYNA3VWXmRdVw1OayTxrzcGxmHuxg')" }}></div>
              <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full py-16">
                <div className="max-w-3xl flex flex-col gap-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container-highest/20 backdrop-blur-md w-fit">
                    <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
                    <span className="font-label-sm text-label-sm tracking-wide text-secondary-fixed uppercase">Governance Architecture</span>
                  </div>
                  <h1 className="font-headline-xl text-headline-xl lg:text-[48px] lg:leading-[56px] text-on-primary font-bold tracking-tight">
                    {currentSlide === 0 ? <TypewriterText text="Ethical Governance & Workplace Integrity" speed={40} /> : "Ethical Governance & Workplace Integrity"}
                  </h1>
                  <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl leading-relaxed">
                    Strengthening governance and organizational effectiveness across private enterprise and public sector mandates through objective counsel and institutional stewardship.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <a className="px-6 py-3.5 rounded-full font-label-md text-label-md bg-secondary text-on-secondary hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all shadow-lg flex items-center gap-2" href="#">
                      <span>Explore Governance Solutions</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </a>
                    <a className="px-6 py-3.5 rounded-full font-label-md text-label-md bg-surface-container-lowest/10 backdrop-blur-md text-on-primary hover:bg-surface-container-lowest/20 transition-all flex items-center gap-2" href="/about">
                      <span>Meet Our Advisors</span>
                      <span className="material-symbols-outlined text-[18px]">people</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2: Independent Workplace Investigations */}
            <div className={`slide-item absolute inset-0 flex items-center transition-all duration-700 ${currentSlide === 1 ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-8 pointer-events-none z-0'}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-on-primary-fixed via-on-primary-fixed/90 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-25 scale-105 transition-transform duration-1000" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCokigl1VRmznExdEO3-OVcB7-CGVR-6AgPy4wnY9Kg7kbeBH7kssxlHspchioz7afUYPBRJsJrZpYVDBc0ECjDTJnFvt-QZzpmRjuGoFuiqnuPPS0rhQG2NGlCHCKCeNiISmnFLAivefOOeYivMKvqTdYa-KQKz95QP4PepFhl2_68ikAcwcuClah-VP-prTIeQ4XEacIWOkQgaAou-lpa0HlXEC1IJVb-b0_Nz_--J1atfuiHobK2ww')" }}></div>
              <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full py-16">
                <div className="max-w-3xl flex flex-col gap-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container-highest/20 backdrop-blur-md w-fit">
                    <span className="w-2 h-2 rounded-full bg-primary-fixed"></span>
                    <span className="font-label-sm text-label-sm tracking-wide text-primary-fixed uppercase">Forensic Rigor & Discretion</span>
                  </div>
                  <h2 className="font-headline-xl text-headline-xl lg:text-[48px] lg:leading-[56px] text-on-primary font-bold tracking-tight">
                    {currentSlide === 1 ? <TypewriterText text="Independent Workplace Investigations" speed={40} /> : "Independent Workplace Investigations"}
                  </h2>
                  <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl leading-relaxed">
                    Objective, thorough, and confidential fact-finding conducted with strict evidentiary standards, impartiality, and boardroom-level executive reporting.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <a className="px-6 py-3.5 rounded-full font-label-md text-label-md bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary transition-all shadow-lg flex items-center gap-2" href="/services/investigations">
                      <span>Investigation Services</span>
                      <span className="material-symbols-outlined text-[18px]">gavel</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3: Policy Drafting & Accessibility */}
            <div className={`slide-item absolute inset-0 flex items-center transition-all duration-700 ${currentSlide === 2 ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-8 pointer-events-none z-0'}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-on-primary-fixed via-on-primary-fixed/90 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-25 scale-105 transition-transform duration-1000" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDHszYH9SNJzF9AdoxVSw4ebd67Bj5lwzmGVNuM-9-96UekKYsHvO38uKpIumT-JU97QODqYcvpPhyJXUV_02NgmC-K6PsiW44EIuv2HyY0kdKjwglMNir-wojHyBCGTNBO3JXEaCEurC5x2wHJDS2L8J12F3SGywRfGU_-Jl0v_iEQVdOuO2k9vWmlzH0Qfju4ZpTumvd9bk9PRfhtJwPTsRklbBz4Zk-aDznxr59AbrcKsBC7bh7lhA')" }}></div>
              <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full py-16">
                <div className="max-w-3xl flex flex-col gap-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container-highest/20 backdrop-blur-md w-fit">
                    <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
                    <span className="font-label-sm text-label-sm tracking-wide text-secondary-fixed uppercase">Regulatory Compliance & Accessibility</span>
                  </div>
                  <h2 className="font-headline-xl text-headline-xl lg:text-[48px] lg:leading-[56px] text-on-primary font-bold tracking-tight">
                    {currentSlide === 2 ? <TypewriterText text="Policy Architecture & Accessibility Frameworks" speed={40} /> : "Policy Architecture & Accessibility Frameworks"}
                  </h2>
                  <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl leading-relaxed">
                    Building compliant, inclusive, and actionable corporate policies and mandated accessibility plans that insulate organizations while advancing workplace equity.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <a className="px-6 py-3.5 rounded-full font-label-md text-label-md bg-secondary text-on-secondary hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all shadow-lg flex items-center gap-2" href="/services/policies-accessibility">
                      <span>View Policy Capabilities</span>
                      <span className="material-symbols-outlined text-[18px]">article</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 4: Strategic Advisory & High-Stakes Negotiation */}
            <div className={`slide-item absolute inset-0 flex items-center transition-all duration-700 ${currentSlide === 3 ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-8 pointer-events-none z-0'}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-on-primary-fixed via-on-primary-fixed/90 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-25 scale-105 transition-transform duration-1000" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAd_ZihCObcAXSFMA4m523UXjv7gjjTUmJkak6k37aXt5TX8Ttxau_TO6SMe7UMNT1QOYLy5qdinXOWWZEQy1DT5wodI59fGErRleBuB-SV4PtyUlyi57qc6ozwikeCt5yq5yH7t-dD6rSLcAWqiIEvIpZXFcSahW2_bQtZEU-3u6FESJZrkmCDtEA7Vp7e4oTZ7sOxr17iFbZM7VJHiRLlJwN9xtuhleWjDaovfMWqh_encbH4PTXSVw')" }}></div>
              <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full py-16">
                <div className="max-w-3xl flex flex-col gap-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container-highest/20 backdrop-blur-md w-fit">
                    <span className="w-2 h-2 rounded-full bg-primary-fixed"></span>
                    <span className="font-label-sm text-label-sm tracking-wide text-primary-fixed uppercase">Dispute Resolution & Strategy</span>
                  </div>
                  <h2 className="font-headline-xl text-headline-xl lg:text-[48px] lg:leading-[56px] text-on-primary font-bold tracking-tight">
                    {currentSlide === 3 ? <TypewriterText text="Strategic Advisory & High-Stakes Negotiation" speed={40} /> : "Strategic Advisory & High-Stakes Negotiation"}
                  </h2>
                  <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl leading-relaxed">
                    Partnering with executive leadership to resolve complex disputes, mitigate existential risk, and facilitate sustainable agreements that preserve institutional continuity.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <a className="px-6 py-3.5 rounded-full font-label-md text-label-md bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary transition-all shadow-lg flex items-center gap-2" href="/services/negotiation-process-serving">
                      <span>Consult Our Negotiators</span>
                      <span className="material-symbols-outlined text-[18px]">handshake</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Slider Navigation Controls Bar */}
          <div className="relative z-30 max-w-7xl mx-auto px-6 lg:px-12 pb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="font-title-md text-title-md text-secondary-fixed font-bold tracking-widest">
                0{currentSlide + 1} <span className="text-surface-variant font-normal">/ 04</span>
              </span>
              <div className="flex items-center gap-2">
                {[0, 1, 2, 3].map((idx) => (
                  <button 
                    key={idx}
                    aria-label={`Go to slide ${idx + 1}`} 
                    className={`slider-dot h-1.5 rounded-full transition-all ${currentSlide === idx ? 'w-8 bg-secondary-fixed' : 'w-3 bg-surface-variant/40 hover:bg-surface-variant'}`}
                    onClick={() => goToSlide(idx)}
                    type="button"
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button 
                className="px-3 py-1.5 rounded-full bg-surface-container-highest/20 hover:bg-surface-container-highest/30 backdrop-blur-md text-on-primary font-caption text-caption flex items-center gap-1.5 transition-all" 
                onClick={togglePlayPause} 
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">{isPlaying ? 'pause' : 'play_arrow'}</span>
                <span>{isPlaying ? 'Auto-playing' : 'Paused'}</span>
              </button>
              <button aria-label="Previous slide" className="w-10 h-10 rounded-full bg-surface-container-highest/20 hover:bg-surface-container-highest/40 backdrop-blur-md text-on-primary flex items-center justify-center transition-all shadow" onClick={prevSlide} type="button">
                <span className="material-symbols-outlined text-[20px]">chevron_left</span>
              </button>
              <button aria-label="Next slide" className="w-10 h-10 rounded-full bg-surface-container-highest/20 hover:bg-surface-container-highest/40 backdrop-blur-md text-on-primary flex items-center justify-center transition-all shadow" onClick={nextSlide} type="button">
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
              </button>
            </div>
          </div>
        </section>

        {/* VISION STATEMENT BANNER */}
        <AnimatedSection direction="up" className="relative w-full bg-surface-container-low py-16 lg:py-20 overflow-hidden shadow-sm">
          <div className="absolute right-8 -bottom-16 w-80 h-80 opacity-5 pointer-events-none text-primary">
            <svg fill="currentColor" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="12"></circle>
              <path d="M50 10 C55 25, 65 35, 50 42 C35 35, 45 25, 50 10 Z"></path>
              <path d="M90 50 C75 55, 65 65, 58 50 C65 35, 75 45, 90 50 Z"></path>
              <path d="M50 90 C45 75, 35 65, 50 58 C65 65, 55 75, 50 90 Z"></path>
              <path d="M10 50 C25 45, 35 35, 42 50 C35 65, 25 55, 10 50 Z"></path>
            </svg>
          </div>
          <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm mb-6">
              <span className="material-symbols-outlined text-[16px] text-primary">spa</span>
              <span>The HCC Institutional Mandate</span>
            </div>
            <blockquote className="font-headline-lg text-headline-lg lg:text-[36px] lg:leading-[46px] text-on-surface italic font-semibold max-w-4xl tracking-tight leading-snug">
              “Trusted and recognized for delivering ethical, strategic, and practical solutions that strengthen governance, workplace integrity, and organizational effectiveness across private and public sectors.”
            </blockquote>
            <div className="w-16 h-1 rounded-full bg-secondary mt-8 mb-4"></div>
            <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-bold">
              Holistic Concept Consulting • Operational Credo
            </span>
          </div>
        </AnimatedSection>

        {/* IMPACT METRICS & CREDIBILITY BAR */}
        <AnimatedSection direction="up" delay={0.1} className="w-full bg-surface-container-lowest py-12 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col gap-1 p-6 rounded-xl bg-surface-container-low transition-transform hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-headline-xl text-headline-xl text-primary font-bold">98%</span>
                  <span className="material-symbols-outlined text-secondary text-[28px]">verified</span>
                </div>
                <span className="font-title-md text-title-md text-on-surface font-semibold">Resolution Success</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Validated outcomes across workplace disputes and complex negotiated settlements.</p>
              </div>
              <div className="flex flex-col gap-1 p-6 rounded-xl bg-surface-container-low transition-transform hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-headline-xl text-headline-xl text-primary font-bold">150+</span>
                  <span className="material-symbols-outlined text-secondary text-[28px]">policy</span>
                </div>
                <span className="font-title-md text-title-md text-on-surface font-semibold">Policies Formulated</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Statutory compliant handbooks, codes of conduct, and accessibility structures.</p>
              </div>
              <div className="flex flex-col gap-1 p-6 rounded-xl bg-surface-container-low transition-transform hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-headline-xl text-headline-xl text-primary font-bold">24/7</span>
                  <span className="material-symbols-outlined text-secondary text-[28px]">bolt</span>
                </div>
                <span className="font-title-md text-title-md text-on-surface font-semibold">Rapid Response</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Immediate legal dispatch and confidential crisis advisory deployable nationwide.</p>
              </div>
              <div className="flex flex-col gap-1 p-6 rounded-xl bg-surface-container-low transition-transform hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-headline-xl text-headline-xl text-primary font-bold">100%</span>
                  <span className="material-symbols-outlined text-secondary text-[28px]">lock</span>
                </div>
                <span className="font-title-md text-title-md text-on-surface font-semibold">Confidential Guarantee</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Legal escrow, whistle-protection protocols, and strict non-disclosure safeguards.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CORE SERVICES PILLARS (8 SERVICES) */}
        <AnimatedSection direction="up" delay={0.2} className="w-full bg-surface py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex flex-col gap-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm w-fit font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  Comprehensive Advisory Suite
                </div>
                <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
                  Our Core Practice Pillars
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Nine synchronized disciplines engineered to protect enterprise stability, uphold legal compliance, and elevate institutional culture.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: 'policy', title: 'Investigations', desc: 'Impartial workplace misconduct reviews, forensic audits, harassment probes, and confidential whistleblower disclosures.', link: '/services/investigations', tag: 'Evidentiary Rigor', bg: 'bg-primary-fixed text-primary' },
                { icon: 'handshake', title: 'Negotiation', desc: 'High-stakes contract resolution, executive severance facilitation, collective bargaining dialogue, and cross-party consensus.', link: '/services/negotiation-process-serving#negotiation', tag: 'Consensus Built', bg: 'bg-secondary-fixed text-on-secondary-fixed-variant' },
                { icon: 'edit_document', title: 'Draft and review policies', desc: 'Comprehensive statutory compliance updates, employee handbooks, workplace harassment guidelines, and regulatory alignment.', link: '/services/policies-accessibility#draft-review-policies', tag: 'Statutory Compliance', bg: 'bg-surface-container-high text-primary' },
                { icon: 'verified_user', title: 'Compliance Management', desc: 'Continuous regulatory audits, risk matrix evaluations, ministry inspection readiness, and corporate governance adherence.', link: '/services/policies-accessibility#compliance-management', tag: 'Regulatory Assurance', bg: 'bg-secondary-container text-on-secondary-container' },
                { icon: 'accessibility_new', title: 'Accessibility plan', desc: 'Comprehensive multi-year statutory accessibility plans (MYAP) for digital spaces, facilities, and organizational policy.', link: '/services/policies-accessibility#accessibility-plan', tag: 'Universal Inclusivity', bg: 'bg-primary-fixed-dim text-primary-container' },
                { icon: 'mark_email_read', title: 'Process server', desc: 'Prompt, legally watertight delivery of subpoenas, formal tribunal notices, and sensitive summonses with verifiable affidavits.', link: '/services/negotiation-process-serving#process-server', tag: 'Judicial Verification', bg: 'bg-surface-container-high text-primary' },
                { icon: 'groups_3', title: 'Human resources', desc: 'Navigating employee friction, organizational restructures, high-risk terminations, and psychological health initiatives.', link: '/services/hr-strategy-training#human-resources', tag: 'Culture & Risk', bg: 'bg-secondary-fixed text-secondary' },
                { icon: 'school', title: 'Business strategy training', desc: 'Boardroom seminars, ethics coaching, middle-management conflict de-escalation labs, and operational drill modules.', link: '/services/hr-strategy-training#business-strategy-training', tag: 'Executive Workshops', bg: 'bg-primary-fixed text-primary' },
                { icon: 'hub', title: 'Advisory and liaison services', desc: 'Intermediary counsel for public-private joint ventures, multi-stakeholder governance boards, and government agency liaison tasks.', link: '/services/hr-strategy-training#advisory-liaison', tag: 'Institutional Liaison', bg: 'bg-secondary-container text-on-secondary-container' }
              ].map((service, idx) => (
                <div key={idx} className="group flex flex-col justify-between p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex flex-col gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${service.bg}`}>
                      <span className="material-symbols-outlined text-[26px]">{service.icon}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-title-md text-title-md text-on-surface font-bold group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                  <div className="pt-6 mt-6 bg-surface-container-low -mx-6 -mb-6 p-6 rounded-b-2xl flex items-center justify-between">
                    <span className="font-caption text-caption uppercase tracking-wider text-on-surface-variant font-semibold">{service.tag}</span>
                    <a className="w-8 h-8 rounded-full bg-surface-container-lowest text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors" href={service.link}>
                      <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* METHODOLOGY: OUR HOLISTIC APPROACH */}
        <AnimatedSection direction="up" delay={0.2} className="w-full bg-surface-container-low py-20 lg:py-28 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-16 relative z-10">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container-highest text-primary font-label-sm text-label-sm font-bold">
                <span className="material-symbols-outlined text-[16px]">account_tree</span>
                <span>Structured Framework</span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
                Our Holistic Approach
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                We integrate legal awareness, human dynamics, and operational strategy to solve core root causes rather than surface symptoms.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { num: '01', title: 'Assessment & Fact-Finding', desc: 'Thorough situational audits, document analysis, confidential interviews, and environmental scans to uncover underlying systemic liabilities.', icon: 'search_check', bg: 'bg-primary-fixed text-primary', tag: 'Objective Diagnostic', tagColor: 'text-primary' },
                { num: '02', title: 'Strategic Formulation', desc: 'Architecting tailored policy frameworks, dispute negotiation scripts, and compliant governance protocols tailored to organizational culture.', icon: 'architecture', bg: 'bg-secondary-fixed text-on-secondary-fixed-variant', tag: 'Bespoke Roadmapping', tagColor: 'text-secondary' },
                { num: '03', title: 'Implementation & Facilitation', desc: 'Active facilitation through mediated sessions, leadership training rollout, and immediate operational integration of new behavioral standards.', icon: 'tune', bg: 'bg-primary-fixed-dim text-primary-container', tag: 'Controlled Deployment', tagColor: 'text-primary' },
                { num: '04', title: 'Sustainable Governance', desc: 'Quarterly risk check-ins, policy maintenance updates, compliance certification, and sustained executive advisory to ensure endurance.', icon: 'format_image_left', bg: 'bg-secondary-container text-on-secondary-container', tag: 'Long-Term Resilience', tagColor: 'text-secondary' },
              ].map((step, idx) => (
                <div key={idx} className="relative flex flex-col p-8 rounded-2xl bg-surface-container-lowest shadow-sm">
                  <div className="flex items-center justify-between pb-6">
                    <span className="font-display-hero text-display-hero text-surface-container-highest font-bold leading-none">{step.num}</span>
                    <span className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step.bg}`}>
                      <span className="material-symbols-outlined text-[20px]">{step.icon}</span>
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold pb-2">{step.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{step.desc}</p>
                  <div className="mt-6 pt-4 bg-surface-container-low -mx-8 -mb-8 p-6 rounded-b-2xl">
                    <div className={`flex items-center gap-2 font-label-sm text-label-sm font-semibold ${step.tagColor}`}>
                      <span className="material-symbols-outlined text-[16px]">check_circle</span>
                      <span>{step.tag}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA CONSULTATION */}
        <AnimatedSection direction="up" delay={0.2} className="w-full bg-gradient-to-br from-on-primary-fixed via-inverse-surface to-on-primary-fixed text-on-primary py-20 lg:py-24 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-secondary-fixed/20 blur-[100px] pointer-events-none"></div>
          <div className="absolute -left-20 top-0 w-80 h-80 rounded-full bg-primary-container/20 blur-[100px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest/10 backdrop-blur-md text-secondary-fixed font-label-sm text-label-sm w-fit font-bold">
                  <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
                  Strict Attorney-Client & Retainer Protection
                </div>
                <h2 className="font-headline-xl text-headline-xl lg:text-[44px] lg:leading-[52px] text-on-primary font-bold tracking-tight">
                  Initiate a Confidential Strategic Consultation
                </h2>
                <p className="font-body-lg text-body-lg text-surface-variant max-w-xl">
                  Whether addressing urgent workplace misconduct, preparing complex accessibility filings, or seeking boardroom dispute counsel, our senior team is ready.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-lowest/10 backdrop-blur-md">
                    <div className="w-12 h-12 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[24px]">phone_in_talk</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-caption text-caption uppercase tracking-wider text-surface-variant font-semibold">Priority Direct Line</span>
                      <span className="font-title-md text-title-md font-bold text-on-primary">+1 (403) 359-4972</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-lowest/10 backdrop-blur-md">
                    <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[24px]">encrypted</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-caption text-caption uppercase tracking-wider text-surface-variant font-semibold">Secure Intake Escrow</span>
                      <a href="mailto:info@holisticconceptconsulting.com" className="font-title-md text-title-md font-bold text-on-primary hover:underline">info@holisticconceptconsulting.com</a>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-3 p-3.5 rounded-2xl bg-surface-container-lowest/10 backdrop-blur-md text-on-primary max-w-lg">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-high/30 text-secondary-fixed flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">location_on</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-caption text-caption uppercase tracking-wider text-surface-variant font-semibold">Office Address</span>
                    <span className="font-body-sm text-body-sm font-medium">1520 2 Avenue South Lethbridge, Alberta, T1J 0G1</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-5 bg-surface-container-lowest rounded-3xl p-8 shadow-2xl text-on-surface">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Direct Case Intake
                    </h3>
                    <span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed-variant font-caption text-caption font-bold">
                      Encrypted
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Submit your preliminary inquiry. All transmissions are subject to strict legal confidentiality.
                  </p>
                  <form 
                    className="flex flex-col gap-4 pt-2"
                    onSubmit={(e) => {
                      e.preventDefault();
                      document.getElementById('intake-success')?.classList.remove('hidden');
                      document.getElementById('intake-success')?.classList.add('flex');
                      document.getElementById('intake-form')?.classList.add('hidden');
                    }}
                    id="intake-form"
                  >
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm text-on-surface-variant font-medium">Full Name & Title</label>
                      <input className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="e.g. Dr. Eleanor Vance, General Counsel" required type="text"/>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex flex-col gap-1">
                        <label className="font-label-sm text-label-sm text-on-surface-variant font-medium">Work Email</label>
                        <input className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="e.vance@agency.gov" required type="email"/>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="font-label-sm text-label-sm text-on-surface-variant font-medium">Phone</label>
                        <input className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="+1 (555) 000-0000" required type="tel"/>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm text-on-surface-variant font-medium">Pillar of Interest</label>
                      <select className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary">
                        <option>Investigations</option>
                        <option>Negotiation</option>
                        <option>Draft and review policies</option>
                        <option>Compliance Management</option>
                        <option>Accessibility plan</option>
                        <option>Process server</option>
                        <option>Human resources</option>
                        <option>Business strategy training</option>
                        <option>Advisory and liaison services</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm text-on-surface-variant font-medium">Matter Briefing (High-level)</label>
                      <textarea className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="Provide general mandate scope (avoid sensitive proprietary facts if unencrypted)..." rows={3}></textarea>
                    </div>
                    <button className="w-full py-3.5 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-label-md text-label-md font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mt-2" type="submit">
                      <span>Dispatch Intake Request</span>
                      <span className="material-symbols-outlined text-[18px]">send</span>
                    </button>
                  </form>
                  <div className="hidden p-4 rounded-xl bg-secondary-container text-on-secondary-fixed-variant font-body-sm text-body-sm items-center gap-3" id="intake-success">
                    <span className="material-symbols-outlined text-secondary text-[24px]">verified</span>
                    <div>
                      <strong>Intake securely received.</strong> Our Senior Partner will initiate contact via verified escrow channels within 2 hours.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
}
