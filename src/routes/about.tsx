import { AnimatedSection } from '../components/AnimatedSection'
import { SEO } from '../components/SEO'
import { createFileRoute, Link } from '@tanstack/react-router'


export const Route = createFileRoute('/about')({
  component: AboutUsHolisticConceptConsulting,
})

function AboutUsHolisticConceptConsulting() {
  return (
    <>
      <main className="w-full pt-20 bg-background">
      <SEO title="About Us | Holistic Concept Consulting" description="Meet our team of experts dedicated to ethical governance, investigative rigor, and strategic advisory." />
<div className="flex flex-col w-full">
{/*  Subtle Ambient Glow Orbs  */}
<div className="relative w-full overflow-hidden">
<div className="absolute top-12 left-1/4 w-96 h-96 rounded-full bg-secondary-fixed/15 blur-3xl pointer-events-none -z-10"></div>
<div className="absolute top-48 right-1/4 w-[32rem] h-[32rem] rounded-full bg-primary-fixed/20 blur-3xl pointer-events-none -z-10"></div>
{/*  Section 1: Hero Editorial Header & Breadcrumb  */}
<AnimatedSection direction="up" delay={0.1} className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-16">
<div className="flex flex-col gap-space-lg">
{/*  Breadcrumb & Badge Bar  */}
<div className="flex flex-wrap items-center justify-between gap-4">
<nav className="flex items-center gap-2 font-caption text-caption text-on-surface-variant uppercase tracking-wider">
<a className="hover:text-primary transition-colors" data-path="home" href="#">Home</a>
<span className="material-symbols-outlined text-[12px]">chevron_right</span>
<span className="text-primary font-bold">About Us</span>
<span className="material-symbols-outlined text-[12px]">chevron_right</span>
<span className="text-on-surface">Institutional Charter</span>
</nav>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/30 text-on-secondary-fixed-variant font-label-sm text-label-sm shadow-sm">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>Ethical Governance Architecture • Est. 2011</span>
</div>
</div>
{/*  Hero Headline & Asymmetric Column  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
<div className="lg:col-span-8 flex flex-col gap-4">
<span className="font-label-md text-label-md text-secondary font-semibold uppercase tracking-widest">About Holistic Concept Consulting</span>
<h1 className="font-display-hero text-display-hero text-on-surface leading-tight font-bold tracking-tight">
              Guiding Organizations Toward Integrity, Compliance, and <span className="italic font-headline-xl text-primary font-semibold">Sustainable Excellence</span>
</h1>
</div>
<div className="lg:col-span-4 flex flex-col gap-4 pb-2">
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We bridge statutory compliance, cultural integrity, and high-stakes negotiation into unified strategic momentum for corporate boardrooms and public institutions.
            </p>
<div className="flex items-center gap-4 pt-1">
<a className="inline-flex items-center gap-1 font-label-md text-label-md text-primary font-bold hover:gap-2 transition-all" href="#vision-mission">
<span>Explore Core Mandate</span>
<span className="material-symbols-outlined text-[18px]">south</span>
</a>
<span className="text-outline-variant">/</span>
<a className="inline-flex items-center gap-1 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" href="#leadership">
<span>Advisory Council</span>
</a>
</div>
</div>
</div>
{/*  Hero Visual Showcase  */}
<div className="w-full relative h-[360px] sm:h-[420px] rounded-2xl overflow-hidden shadow-xl group mt-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Refined, sunlit architectural executive boardroom with glass walls, natural timber acoustics, polished surfaces, and contemporary biophilic plants, bathed in tranquil morning light symbolizing ethical governance and institutional transparency." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBImkjuQuI0KwcfR52cfwBxVGu6YFZUfN4crpktLdmlkCtx5fA0Kwy4Vnv2tu5xlDqGlk2HFxwhqC2GpyQ5oPcemsoS0IpzgwcRz2LK0z4D60gXuUZ-ytlgkC9ZptJepswrpkvVaIQBb4kGwcIIs_RmA4uyo6hSfZus9PPP6T2HnRrFvy9UpG5yLKQVn5dLW7pqnDE2n1lvyqR-cLsK1puS1XsOG8fPXicFGeTZxCMlg5H4MV1BjPjBnw"/>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/40 to-transparent flex flex-col justify-end p-8 sm:p-12 text-inverse-on-surface">
<div className="flex items-center gap-2 mb-3">
<span className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-on-primary font-caption text-caption font-semibold">Boardroom Trust</span>
<span className="font-caption text-caption text-inverse-on-surface/80">Independent Counsel Retainer</span>
</div>
<h2 className="font-headline-lg text-headline-lg font-bold text-white max-w-2xl leading-tight">
Synthesizing law, organizational psychology, and procedural justice.
</h2>
</div>
</div>
</div>
</AnimatedSection>
{/*  Section 2: The HCC Story & Founding Philosophy  */}
<AnimatedSection direction="up" delay={0.1} className="w-full bg-surface-container-low py-20">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-5 flex flex-col gap-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high w-fit font-label-sm text-label-sm text-primary font-bold">
<span className="material-symbols-outlined text-[16px]">psychology_alt</span>
<span>Foundational Thesis</span>
</div>
<h2 className="font-headline-xl text-headline-xl text-on-surface font-semibold leading-tight">
              Why <span className="text-primary italic font-display-hero">‘Holistic’?</span> Organizational risk is never isolated.
            </h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Founded under the principle that procedural misconduct, compliance infractions, and boardroom deadlocks are rarely siloed anomalies. They are symptoms of misaligned operational ecosystems.
            </p>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              When a policy fails, it strains workplace culture; when workplace culture fractures, legal risk escalates; when disputes are handled without emotional intelligence, executive credibility deteriorates. Our interventions treat the whole organism, instilling resilient frameworks that endure external scrutiny.
            </p>
<div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-4">
<span className="material-symbols-outlined text-secondary text-[28px] mt-0.5">verified_user</span>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface font-semibold">Integrative Safeguard Matrix</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Harmonizing statutory duty of care with agile business performance metrics.</span>
</div>
</div>
</div>
{/*  Conceptual Interactive SVG Diagram  */}
<div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-8 shadow-md relative">
<div className="flex items-center justify-between pb-6">
<div className="flex flex-col">
<span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider font-bold">Systemic Diagnostic Flow</span>
<span className="font-headline-sm text-headline-sm text-on-surface">The Triad of Institutional Durability</span>
</div>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span> Continuous Loop
              </span>
</div>
{/*  Interconnected Matrix Visualization  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
<div className="bg-surface-container-low p-5 rounded-lg flex flex-col justify-between gap-4 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">gavel</span>
</div>
<div>
<h3 className="font-title-md text-title-md text-on-surface mb-1">1. Statutory Rigor</h3>
<p className="font-caption text-caption text-on-surface-variant">Exhaustive forensic reviews, workplace safety codes, statutory accessibility compliance, and regulatory alignment.</p>
</div>
<div className="w-full bg-surface-container h-1 rounded-full overflow-hidden">
<div className="bg-primary h-full w-full"></div>
</div>
</div>
<div className="bg-surface-container-low p-5 rounded-lg flex flex-col justify-between gap-4 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-secondary-container/50 flex items-center justify-center text-on-secondary-fixed-variant">
<span className="material-symbols-outlined text-[20px]">diversity_3</span>
</div>
<div>
<h3 className="font-title-md text-title-md text-on-surface mb-1">2. Human Equity</h3>
<p className="font-caption text-caption text-on-surface-variant">Neutral workplace inquiries, non-adversarial mediation, psychologically safe escalation corridors.</p>
</div>
<div className="w-full bg-surface-container h-1 rounded-full overflow-hidden">
<div className="bg-secondary h-full w-full"></div>
</div>
</div>
<div className="bg-surface-container-low p-5 rounded-lg flex flex-col justify-between gap-4 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-[20px]">architecture</span>
</div>
<div>
<h3 className="font-title-md text-title-md text-on-surface mb-1">3. Executive Architecture</h3>
<p className="font-caption text-caption text-on-surface-variant">Boardroom governance policies, continuous oversight, whistleblower safeguards, and proactive training.</p>
</div>
<div className="w-full bg-surface-container h-1 rounded-full overflow-hidden">
<div className="bg-primary-container h-full w-full"></div>
</div>
</div>
</div>
{/*  Interconnectivity Bar  */}
<div className="mt-6 p-4 rounded-lg bg-surface-container-high/40 flex items-center justify-between text-on-surface-variant font-caption text-caption">
<span className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary">sync_alt</span>
                Cross-domain feedback prevents systemic repeat infractions.
              </span>
<span className="font-semibold text-primary">ISO 37000 Governance Aligned</span>
</div>
</div>
</div>
</div>
</AnimatedSection>
{/*  Section 3: Official Vision & Mission (Asymmetric Executive Cards)  */}
<AnimatedSection direction="up" delay={0.1} className="max-w-7xl mx-auto px-6 lg:px-12 py-24" id="vision-mission">
<div className="flex flex-col gap-12">
<div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-3">
<span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-wider">Mandate & Institutional Purpose</span>
<h2 className="font-headline-xl text-headline-xl text-on-surface font-semibold">Vision & Strategic Mission</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Defining how we act as an authoritative steward for executive leadership and community trust.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
{/*  Vision Card (Primary Azure Luminous)  */}
<div className="relative rounded-2xl bg-gradient-to-br from-primary to-primary-container text-on-primary p-10 flex flex-col justify-between shadow-xl overflow-hidden group">
<div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10 blur-xl pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
<div className="flex flex-col gap-6 relative z-10">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white font-label-sm text-label-sm font-semibold tracking-wide uppercase">
<span className="material-symbols-outlined text-[16px]">visibility</span>
                  Official Vision
                </span>
<span className="font-caption text-caption text-white/70">Strategic Horizon</span>
</div>
<blockquote className="font-headline-lg text-headline-lg leading-snug font-serif italic text-white pt-2">
                “Trusted and recognized for delivering ethical, strategic, and practical solutions that strengthen governance, workplace integrity, and organizational effectiveness across private and public sectors.”
              </blockquote>
</div>
<div className="pt-8 border-t border-white/20 mt-8 flex items-center justify-between text-white/90 font-body-sm text-body-sm relative z-10">
<span>Benchmark of Integrity</span>
<span className="flex items-center gap-1 font-semibold">Public & Private Sectors <span className="material-symbols-outlined text-[18px]">verified</span></span>
</div>
</div>
{/*  Mission Card (High-Contrast Slate Deep Anchor)  */}
<div className="relative rounded-2xl bg-inverse-surface text-inverse-on-surface p-10 flex flex-col justify-between shadow-xl overflow-hidden group">
<div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-secondary-fixed-dim/20 blur-2xl pointer-events-none"></div>
<div className="flex flex-col gap-6 relative z-10">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold tracking-wide uppercase">
<span className="material-symbols-outlined text-[16px]">track_changes</span>
                  Mission Mandate
                </span>
<span className="font-caption text-caption text-inverse-on-surface/60">Execution Framework</span>
</div>
<p className="font-headline-md text-headline-md text-white font-normal leading-relaxed pt-2">
                We partner with private and public organizations to resolve complex issues, enhance compliance, manage risk, and promote fair, transparent, and sustainable workplace practices through professional expertise, integrity, and a holistic approach.
              </p>
</div>
<div className="pt-8 border-t border-white/10 mt-8 flex flex-wrap items-center justify-between gap-4 text-inverse-on-surface/80 font-body-sm text-body-sm relative z-10">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
<span>Conflict Neutralization</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary-fixed"></span>
<span>Regulatory Defense</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary-fixed-dim"></span>
<span>Equity Safeguard</span>
</div>
</div>
</div>
</div>
</div>
</AnimatedSection>
{/*  Section 4: Guiding Core Values (Four Gradient Rim Cards)  */}
<AnimatedSection direction="up" delay={0.1} className="w-full bg-surface-container-low py-20">
<div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="flex flex-col gap-2 max-w-xl">
<span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-wider">Uncompromising Principles</span>
<h2 className="font-headline-xl text-headline-xl text-on-surface font-semibold">Our Guiding Core Values</h2>
<p className="font-body-md text-body-md text-on-surface-variant">The ethical anchors that dictate every client investigation, policy revision, and strategic dialogue.</p>
</div>
<div className="shrink-0">
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] text-primary">verified</span>
              Codified in Partner Charter
            </span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{/*  Value 1  */}
<div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
<div className="flex flex-col gap-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary to-primary-container flex items-center justify-center text-on-primary shadow-sm group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[24px]">balance</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-bold">Uncompromising Integrity & Ethics</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Objective, evidence-based recommendations unswayed by organizational hierarchy, internal politics, or external pressures.
              </p>
</div>
<div className="pt-6 mt-4 flex items-center justify-between text-primary font-caption text-caption font-bold">
<span>Standard of Proof</span>
<span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
</div>
</div>
{/*  Value 2  */}
<div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
<div className="flex flex-col gap-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-secondary to-on-secondary-container flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[24px]">lock</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-bold">Absolute Confidentiality & Discretion</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Military-grade escrow for sensitive disclosures, privileged legal documentation, and reputational risk mitigation.
              </p>
</div>
<div className="pt-6 mt-4 flex items-center justify-between text-secondary font-caption text-caption font-bold">
<span>Encrypted Custody</span>
<span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
</div>
</div>
{/*  Value 3  */}
<div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
<div className="flex flex-col gap-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary-container to-secondary-fixed flex items-center justify-center text-on-primary-fixed shadow-sm group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[24px]">trending_up</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-bold">Practical & Measurable Strategic Impact</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Real solutions over boilerplate theory. Every roadmap includes clear KPI benchmarks and verifiable workplace sentiment metrics.
              </p>
</div>
<div className="pt-6 mt-4 flex items-center justify-between text-primary font-caption text-caption font-bold">
<span>Target Metrics</span>
<span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
</div>
</div>
{/*  Value 4  */}
<div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
<div className="flex flex-col gap-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-secondary-fixed-dim to-primary flex items-center justify-center text-on-primary-fixed shadow-sm group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[24px]">accessibility_new</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-bold">Inclusivity, Accessibility & Equity</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Pioneering neurodiverse accommodations, bilingual statutory compliance, and universal access protocols across every touchpoint.
              </p>
</div>
<div className="pt-6 mt-4 flex items-center justify-between text-secondary font-caption text-caption font-bold">
<span>Universal Access</span>
<span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
</div>
</div>
</div>
</div>
</AnimatedSection>
{/*  Section 5: Overview of HCC Founder  */}
<AnimatedSection direction="up" delay={0.1} className="max-w-7xl mx-auto px-6 lg:px-12 py-24" id="founder">
<div className="flex flex-col gap-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-surface-container pb-6">
<div className="flex flex-col gap-2 max-w-2xl">
<span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
Executive Leadership & Visionary Stewardship
</span>
<h2 className="font-headline-xl text-headline-xl text-on-surface font-semibold tracking-tight">Overview of HCC Founder</h2>
<p className="font-body-md text-body-md text-on-surface-variant">The strategic vision, legal excellence, and licensed investigative rigor behind Holistic Concept Consulting.</p>
</div>
<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm shrink-0">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
<span>Alberta Justice Licensed & Board Neutral</span>
</div>
</div>

{/*  Founder Feature Showcase Container  */}
<div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-10 lg:p-12 shadow-lg border border-surface-container flex flex-col lg:flex-row gap-10 lg:gap-14 items-center lg:items-stretch">
{/*  Left: Portrait & Fast Credentials  */}
<div className="w-full sm:w-80 lg:w-96 shrink-0 flex flex-col gap-5">
<div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] bg-surface-container group">
<img 
src="/nosa-ebhomielen.jpg?v=3" 
alt="Nosa Ebhomielen, Founder of Holistic Concept Consulting" 
className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
<span className="px-3 py-1 rounded-full bg-primary/95 backdrop-blur-md font-label-sm text-label-sm font-semibold flex items-center gap-1.5 shadow-md">
<span className="material-symbols-outlined text-[16px] text-secondary-fixed">verified</span>
Founder & Principal Consultant
</span>
</div>
</div>

{/* Quick Highlights Under Portrait */}
<div className="bg-surface-container-low rounded-2xl p-4 flex flex-col gap-3 font-body-sm text-body-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-bold">Licensed Investigator</span>
<span className="font-caption text-caption text-on-surface-variant">SSIA • Alberta Justice & Solicitor General</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-secondary-container text-on-secondary-fixed-variant flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">school</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-bold">MBA with Distinction</span>
<span className="font-caption text-caption text-on-surface-variant">Univ. of Gloucestershire, United Kingdom</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">location_on</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-bold">Office Address</span>
<span className="font-caption text-caption text-on-surface-variant font-medium">1520 2 Avenue South Lethbridge, Alberta, T1J 0G1</span>
</div>
</div>
</div>
</div>

{/*  Right: Detailed Bio Narrative & Structured Pillars  */}
<div className="flex-1 flex flex-col justify-between gap-8">
<div className="flex flex-col gap-6">
<div className="flex flex-col gap-2">
<div className="flex flex-wrap items-center gap-2">
<span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed-variant font-label-sm text-label-sm font-bold">
15+ Years Industry Experience
</span>
<span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
Alberta Justice & Solicitor General Licensed
</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight mt-1">
Nosa Ebhomielen
</h3>
</div>

{/* Core Biography - Highlighted Presentation */}
<div className="relative pl-6 border-l-4 border-primary py-1">
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
<strong>Nosa Ebhomielen</strong> is a multifaceted business and legal specialist with over 15 years of experience. She has a Master of Business Administration (MBA) with distinction from the University of Gloucestershire in the United Kingdom and formidable legal expertise.
</p>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed mt-4">
She is a licensed investigator under the Security Services and Investigators Act by Alberta Justice and the Solicitor General. She is a board member for several non-profit organizations in the city of Alberta. She has lived in Nigeria and the United Kingdom and is currently residing in Lethbridge, Alberta.
</p>
</div>

{/* Key Executive Competencies / 4-Grid Breakdown */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
<div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-2 hover:bg-surface-container transition-colors">
<div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">gavel</span>
</div>
<span className="font-label-md text-label-md font-bold text-on-surface">Legal Acumen</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
Formidable legal expertise, guiding policy drafting, statutory compliance, and rigorous evidence gathering.
</p>
</div>

<div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-2 hover:bg-surface-container transition-colors">
<div className="w-10 h-10 rounded-xl bg-secondary text-on-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">shield_person</span>
</div>
<span className="font-label-md text-label-md font-bold text-on-surface">Licensed Investigation</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
Officially credentialed under the Security Services and Investigators Act by Alberta Justice and the Solicitor General.
</p>
</div>

<div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-2 hover:bg-surface-container transition-colors">
<div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">workspace_premium</span>
</div>
<span className="font-label-md text-label-md font-bold text-on-surface">Business & Strategy Master</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
Master of Business Administration (MBA) earned with distinction from the University of Gloucestershire, United Kingdom.
</p>
</div>

<div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-2 hover:bg-surface-container transition-colors">
<div className="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-fixed-variant flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">diversity_3</span>
</div>
<span className="font-label-md text-label-md font-bold text-on-surface">Governance & Community</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
Active board member for multiple non-profit organizations in Alberta, bringing international perspective from Nigeria, the UK, and Canada.
</p>
</div>
</div>
</div>

{/* Bottom CTA bar */}
<div className="pt-6 border-t border-surface-container flex flex-wrap items-center justify-between gap-4">
<div className="flex items-center gap-3 text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[20px] text-primary">mail</span>
<span>Direct Advisory Inquiries:</span>
<a href="mailto:info@holisticconceptconsulting.com" className="font-semibold text-primary hover:underline">
info@holisticconceptconsulting.com
</a>
</div>
<Link to="/contact" className="px-6 py-3 rounded-full font-label-md text-label-md bg-primary hover:bg-primary-container text-on-primary shadow-md hover:shadow-lg transition-all flex items-center gap-2">
<span>Retain HCC Advisory</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</Link>
</div>
</div>
</div>
</div>
</AnimatedSection>
{/*  Section 6: Accreditations, Industry Affiliations & Ethical Code of Practice  */}
<AnimatedSection direction="up" delay={0.1} className="w-full bg-surface-container-low py-16">
<div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-10">
<div className="flex flex-col items-center text-center gap-2 max-w-xl mx-auto">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Institutional Validation</span>
<h2 className="font-headline-md text-headline-md text-on-surface font-bold">Accreditations & Code of Practice</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Our advisory practices conform strictly to international compliance and confidentiality charters.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
<div className="bg-surface-container-lowest p-5 rounded-xl flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow">
<span className="material-symbols-outlined text-primary text-[32px]">security</span>
<span className="font-label-sm text-label-sm font-bold text-on-surface">ISO 27001</span>
<span className="font-caption text-caption text-on-surface-variant">Information Security</span>
</div>
<div className="bg-surface-container-lowest p-5 rounded-xl flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow">
<span className="material-symbols-outlined text-secondary text-[32px]">corporate_fare</span>
<span className="font-label-sm text-label-sm font-bold text-on-surface">ISO 37000</span>
<span className="font-caption text-caption text-on-surface-variant">Good Governance</span>
</div>
<div className="bg-surface-container-lowest p-5 rounded-xl flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow">
<span className="material-symbols-outlined text-primary text-[32px]">balance</span>
<span className="font-label-sm text-label-sm font-bold text-on-surface">ADR Institute</span>
<span className="font-caption text-caption text-on-surface-variant">Chartered Neutrality</span>
</div>
<div className="bg-surface-container-lowest p-5 rounded-xl flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow">
<span className="material-symbols-outlined text-secondary text-[32px]">accessible_forward</span>
<span className="font-label-sm text-label-sm font-bold text-on-surface">Universal Design</span>
<span className="font-caption text-caption text-on-surface-variant">Universal Design Certified</span>
</div>
<div className="bg-surface-container-lowest p-5 rounded-xl flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow">
<span className="material-symbols-outlined text-primary text-[32px]">policy</span>
<span className="font-label-sm text-label-sm font-bold text-on-surface">Law Society Retainer</span>
<span className="font-caption text-caption text-on-surface-variant">Privileged Inquiry Unit</span>
</div>
<div className="bg-surface-container-lowest p-5 rounded-xl flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow">
<span className="material-symbols-outlined text-secondary text-[32px]">eco</span>
<span className="font-label-sm text-label-sm font-bold text-on-surface">ESG Assurance</span>
<span className="font-caption text-caption text-on-surface-variant">Workplace Ethics Index</span>
</div>
</div>
{/*  Code of Practice Callout  */}
<div className="p-6 rounded-xl bg-surface-container-highest flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0">
<span className="material-symbols-outlined text-[20px]">fact_check</span>
</div>
<div>
<span className="font-title-md text-title-md text-on-surface font-bold block">Strict Non-Advocacy Neutrality Charter</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">HCC does not represent opposing litigants. We conduct independent, fact-based adjudications preserving stakeholder confidence.</p>
</div>
</div>
<a className="px-5 py-2.5 rounded-full bg-surface-container-lowest text-on-surface hover:text-primary font-label-sm text-label-sm font-bold shadow-sm whitespace-nowrap transition-colors" data-path="contact" href="#">
            Request Audit Dossier
          </a>
</div>
</div>
</AnimatedSection>

{/*  Section 8: Consultation Invitation Banner (Dual Gradient CTA Card)  */}
<AnimatedSection direction="up" delay={0.1} className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
<div className="relative rounded-2xl bg-gradient-to-r from-primary to-primary-container p-10 md:p-14 overflow-hidden shadow-2xl text-on-primary flex flex-col lg:flex-row items-center justify-between gap-10">
{/*  Background Soft Shapes  */}
<div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
<div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-secondary-fixed/20 blur-3xl pointer-events-none"></div>
<div className="flex flex-col gap-4 max-w-2xl relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md w-fit font-label-sm text-label-sm text-white">
<span className="material-symbols-outlined text-[16px]">verified</span>
            Strictly Confidential Initial Consultation
          </div>
<h2 className="font-headline-xl text-headline-xl text-white font-bold tracking-tight">
            Ready to Protect Your Organization with Independent Expertise?
          </h2>
<p className="font-body-md text-body-md text-white/90 leading-relaxed">
            Whether you require an urgent third-party workplace investigation, a complete governance overhaul, or executive mediation, our senior partners are ready to assist under strict non-disclosure.
          </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 shrink-0">
<a className="px-8 py-4 rounded-full bg-secondary-container text-on-secondary-fixed-variant font-label-md text-label-md font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2" data-path="request-consultation" href="#">
<span>Initiate Confidential Retainer</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
<a className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-label-md text-label-md font-semibold backdrop-blur-md transition-all" data-path="contact" href="#">
            Direct Counsel Hotline
          </a>
</div>
</div>
</AnimatedSection>
</div>
</div>
      </main>
    </>
  )
}
