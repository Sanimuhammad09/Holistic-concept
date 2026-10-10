import { createFileRoute } from '@tanstack/react-router'
import { AnimatedSection } from '../components/AnimatedSection'
import { SEO } from '../components/SEO'

export const Route = createFileRoute('/insights')({
  component: Insights,
})

function Insights() {
  return (
    <>
      <main className="w-full pt-20 bg-background">
      <SEO title="Insights & Research | Holistic Concept Consulting" description="Read our latest insights, case studies, and regulatory updates on governance and compliance." />
<div className="flex flex-col w-full">
{/*  Top Breadcrumb & Executive Intelligence Header  */}
<AnimatedSection direction="up" delay={0.1} className="relative w-full bg-surface-container-low overflow-hidden py-space-xl">
<div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
<div className="absolute left-1/3 bottom-0 w-80 h-80 rounded-full bg-primary-fixed/30 blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
{/*  Breadcrumbs  */}
<nav className="flex items-center gap-space-xs font-caption text-caption text-on-surface-variant uppercase tracking-wider mb-space-md">
<a className="hover:text-primary transition-colors" href="#">Home</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary font-bold">Insights & Research</span>
</nav>
{/*  Editorial Title Block  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
<div className="lg:col-span-8 space-y-space-sm">
<div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-surface-container-highest text-primary font-label-sm text-label-sm shadow-sm">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
            Quarterly Governance & Ethics Journal
          </div>
<h1 className="font-display-hero text-display-hero text-on-surface tracking-tight">
            Institutional Intelligence & Governance Benchmarks
          </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl pt-2">
            Authoritative research, legal defensibility blueprints, and empirical insights from HCC senior investigators and governance counsel. Curated for board members, general counsel, and executive teams navigating complex systemic mandates.
          </p>
</div>
{/*  Quick Access Meta Panel  */}
<div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between">
<div>
<span className="font-caption text-caption text-on-surface-variant uppercase">Current Archive Index</span>
<p className="font-headline-sm text-headline-sm text-primary font-bold">140+ Dossiers</p>
</div>
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined">library_books</span>
</div>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between">
<div>
<span className="font-caption text-caption text-on-surface-variant uppercase">Peer Review Standard</span>
<p className="font-headline-sm text-headline-sm text-secondary font-bold">ISO 27001 & Bar Aligned</p>
</div>
<div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-fixed">
<span className="material-symbols-outlined">verified</span>
</div>
</div>
</div>
</div>
</div>
</AnimatedSection>
{/*  Featured Annual Benchmark Dossier (Asymmetric Hero Card)  */}
<AnimatedSection direction="up" delay={0.1} className="max-w-7xl mx-auto px-6 lg:px-12 -mt-6 relative z-20 w-full mb-space-xl">
<div className="bg-surface-container-lowest rounded-2xl shadow-xl overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-12">
{/*  Left: Imagery & Dossier Tag  */}
<div className="lg:col-span-5 relative min-h-[380px] bg-inverse-surface overflow-hidden flex flex-col justify-between p-space-lg text-inverse-on-surface">
<div className="absolute inset-0 opacity-40 mix-blend-overlay">
<img className="w-full h-full object-cover" data-alt="An expansive minimalist corporate boardroom overlooking a misty skyline with polished marble table reflecting soft natural morning daylight. Professional legal documents and modern executive tablets rest cleanly on the surface. Moody azure, slate, and subtle hints of vibrant botanical greenery infuse the corporate architectural interior." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7HokEornk3_5uZlwuki7k_s25TF75OaE05ml-PE2xSCDf2C3NnuZb6cN20FlGuhU70SGoZnPh9iuFM8oqBwCRw1kuwFSlCZUoOoPJjGK_anKEsVkaBxh9PThdtn2TL1m_cVcjG9KSnCvC577Apbut0AuxEb5sBIOo2uxknIgb4vGY4nu71g12UKvt5SDagf4asfuRI57ZeauJFRyuc_y_2FzRO0X9TLxu4Kgr2RKbrQi71fHY_om0TQ"/>
</div>
<div className="relative z-10 flex items-center justify-between">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">stars</span>
              Flagship Benchmark Dossier
            </span>
<span className="font-caption text-caption text-surface-container-highest tracking-widest uppercase">HCC-RP-2025-V1</span>
</div>
<div className="relative z-10 space-y-space-xs mt-16">
<p className="font-caption text-caption uppercase tracking-wider text-secondary-fixed">48-Page Boardroom Briefing</p>
<h2 className="font-headline-lg text-headline-lg text-inverse-on-surface">2025 North American Workplace Integrity & Culture Benchmark</h2>
<p className="font-body-sm text-body-sm text-surface-dim">Empirical analysis across 142 cross-jurisdictional audits, public-sector mediation filings, and whistleblower disclosures.</p>
</div>
<div className="relative z-10 pt-4 flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="A distinguished senior female governance counsel in sharp navy tailored blazer with warm analytical gaze, standing inside an executive library setting with natural soft rim lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvh7USFugNwGMT99OOskS_GeY_l9bjFURB8e0xBrmVdg5mhvCU5ZekC1mQI3Qs2pi821geC1aiNibSRfi1b1624CyTYwb87vNzGYqEgk_5m91aQgmlMGvFVmm4yp0zO66K6ScuyBZXmw2QG2pf-1bZxvg3j5E3mrYwGF1E8bze4iD142z0N6Qpk19BNGp1_ADs7Uaw-vEV9NyElAY3Ob15IoHo6s6jd2H8NUcZwfMVuesFm7i9yoGgAg"/>
</div>
<div>
<p className="font-label-md text-label-md text-inverse-on-surface">Dr. Evelyn Vance, LL.M.</p>
<p className="font-caption text-caption text-surface-dim">Senior Partner & Lead Investigations Counsel</p>
</div>
</div>
</div>
{/*  Right: Empirical Metrics & Download Hub  */}
<div className="lg:col-span-7 p-space-lg lg:p-space-xl flex flex-col justify-between bg-surface-container-lowest">
<div>
<div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-md">
<span className="font-caption text-caption uppercase tracking-wider text-on-surface-variant font-semibold">Executive Summary Findings</span>
<span className="text-secondary font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">verified_user</span> Privileged Legal Defensibility Data
              </span>
</div>
{/*  Stats Cluster  */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md mb-space-lg">
<div className="bg-surface-container-low p-space-md rounded-xl space-y-1">
<div className="flex items-baseline gap-1">
<span className="font-display-hero text-headline-xl text-primary font-bold">74%</span>
<span className="font-label-sm text-label-sm text-secondary font-semibold">reduction</span>
</div>
<p className="font-label-md text-label-md text-on-surface">Systemic Grievances</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Realized when neutral third-party triage is deployed within the initial 14-day statutory notice envelope.</p>
</div>
<div className="bg-surface-container-low p-space-md rounded-xl space-y-1">
<div className="flex items-baseline gap-1">
<span className="font-display-hero text-headline-xl text-secondary font-bold">88%</span>
<span className="font-label-sm text-label-sm text-primary font-semibold">acceleration</span>
</div>
<p className="font-label-md text-label-md text-on-surface">Faster Resolution Velocity</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Through blind confidential escrow depositories versus adversarial litigation or traditional HR routing.</p>
</div>
</div>
{/*  Interactive Vector Graph: Incident Outcomes  */}
<div className="bg-surface-container rounded-xl p-space-md mb-space-lg">
<div className="flex items-center justify-between mb-2">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Resolution Retention & Risk Mitigation Trend</span>
<span className="font-caption text-caption text-on-surface-variant">3-Year Cross-Cohort Empirical Curve</span>
</div>
<div className="w-full h-16 flex items-end gap-2 pt-2">
<div className="h-[45%] flex-1 bg-surface-variant rounded-t hover:bg-primary transition-colors flex items-center justify-center font-caption text-caption text-on-surface">2022</div>
<div className="h-[62%] flex-1 bg-surface-variant rounded-t hover:bg-primary transition-colors flex items-center justify-center font-caption text-caption text-on-surface">2023</div>
<div className="h-[79%] flex-1 bg-surface-variant rounded-t hover:bg-primary transition-colors flex items-center justify-center font-caption text-caption text-on-surface">2024</div>
<div className="h-[96%] flex-1 bg-secondary rounded-t flex items-center justify-center font-caption text-caption text-on-secondary font-bold">2025 HCC Index</div>
</div>
</div>
</div>
{/*  Download Action Bar  */}
<div className="pt-space-md flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-md">
<div className="flex items-center gap-2 text-on-surface-variant font-caption text-caption">
<span className="material-symbols-outlined text-[18px] text-primary">lock</span>
<span>Encrypted PDF format (8.4 MB) • Includes Executive Slide Summary</span>
</div>
<div className="flex items-center gap-space-sm">
<button className="px-5 py-2.5 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-all shadow-md flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]">download</span>
<span>Download Report (PDF)</span>
</button>
<button className="w-10 h-10 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors" title="Bookmark Document">
<span className="material-symbols-outlined text-[20px]">bookmark_border</span>
</button>
</div>
</div>
</div>
</div>
</div>
</AnimatedSection>
{/*  Filter & Editorial Publications Grid Section  */}
<AnimatedSection direction="up" delay={0.1} className="max-w-7xl mx-auto px-6 lg:px-12 w-full mb-space-xl">
{/*  Section Header & Filter Tabs  */}
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md mb-space-lg">
<div className="space-y-1">
<span className="font-caption text-caption text-secondary uppercase tracking-widest font-bold">Peer-Reviewed Publications</span>
<h2 className="font-headline-xl text-headline-xl text-on-surface">White Papers & Legal Defensibility Briefs</h2>
</div>
{/*  Category Filter Pills  */}
<div className="flex flex-wrap items-center gap-2" id="filter-bar">
<button className="px-4 py-2 rounded-full font-label-sm text-label-sm bg-primary text-on-primary shadow-sm hover:shadow transition-all filter-btn" data-category="all">
          All Research
        </button>
<button className="px-4 py-2 rounded-full font-label-sm text-label-sm bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all filter-btn" data-category="investigations">
          Defensible Investigations
        </button>
<button className="px-4 py-2 rounded-full font-label-sm text-label-sm bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all filter-btn" data-category="policy">
          Statutory Policy & AODA
        </button>
<button className="px-4 py-2 rounded-full font-label-sm text-label-sm bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all filter-btn" data-category="dispute">
          Mediation & Labor
        </button>
<button className="px-4 py-2 rounded-full font-label-sm text-label-sm bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all filter-btn" data-category="governance">
          Executive Governance
        </button>
</div>
</div>
{/*  6 Editorial Publications Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg" id="articles-grid">
{/*  Card 1: Legal Defensibility  */}
<article className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-xl transition-all flex flex-col justify-between article-item" data-category="investigations">
<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container text-primary font-caption text-caption font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              Legal Defensibility
            </span>
<span className="font-caption text-caption text-on-surface-variant">16 Min Read</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface leading-snug hover:text-primary transition-colors cursor-pointer">
            The Anatomy of a Defensible Workplace Investigation under Appellate Scrutiny
          </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            A surgical walkthrough of procedural fairness criteria, dual-role bias disqualification, and evidence weighting doctrines established in recent landmark provincial court decisions.
          </p>
</div>
<div className="pt-space-md mt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg p-space-md rounded-b-2xl flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold text-[12px]">
              MK
            </div>
<div className="leading-tight">
<span className="font-label-sm text-label-sm text-on-surface block">Marcus Kane</span>
<span className="font-caption text-caption text-on-surface-variant">Lead Arbitrator</span>
</div>
</div>
<a className="text-primary hover:text-primary-container font-label-sm text-label-sm font-semibold flex items-center gap-1" href="#">
<span>Read Brief</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</article>
{/*  Card 2: Accessibility & Policy  */}
<article className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-xl transition-all flex flex-col justify-between article-item" data-category="policy">
<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-caption text-caption font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              Accessibility & Policy
            </span>
<span className="font-caption text-caption text-on-surface-variant">12 Min Read</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface leading-snug hover:text-primary transition-colors cursor-pointer">
            Navigating the AODA/ACA Horizon: Converting Compliance Mandates into Institutional Asset
          </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            How forward-looking organizations are transforming mandatory statutory accessibility deadlines into defensible human-capital resilience and procurement advantages.
          </p>
</div>
<div className="pt-space-md mt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg p-space-md rounded-b-2xl flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary font-bold text-[12px]">
              SL
            </div>
<div className="leading-tight">
<span className="font-label-sm text-label-sm text-on-surface block">Sariha Lin, CPHR</span>
<span className="font-caption text-caption text-on-surface-variant">Senior Policy Strategist</span>
</div>
</div>
<a className="text-primary hover:text-primary-container font-label-sm text-label-sm font-semibold flex items-center gap-1" href="#">
<span>Read Brief</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</article>
{/*  Card 3: Dispute Resolution  */}
<article className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-xl transition-all flex flex-col justify-between article-item" data-category="dispute">
<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container text-primary font-caption text-caption font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              Mediation & Labor
            </span>
<span className="font-caption text-caption text-on-surface-variant">19 Min Read</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface leading-snug hover:text-primary transition-colors cursor-pointer">
            Interest-Based Bargaining in Public Sector Impasses: Neutral Mediation Frameworks
          </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Overcoming rigid positional deadlock in municipal and healthcare collective agreements using privileged single-text negotiations and neutral cost modeling.
          </p>
</div>
<div className="pt-space-md mt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg p-space-md rounded-b-2xl flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary font-bold text-[12px]">
              JR
            </div>
<div className="leading-tight">
<span className="font-label-sm text-label-sm text-on-surface block">Julian Ross, Q.Med</span>
<span className="font-caption text-caption text-on-surface-variant">Labor Relations Lead</span>
</div>
</div>
<a className="text-primary hover:text-primary-container font-label-sm text-label-sm font-semibold flex items-center gap-1" href="#">
<span>Read Brief</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</article>
{/*  Card 4: Whistleblower Escrow  */}
<article className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-xl transition-all flex flex-col justify-between article-item" data-category="governance">
<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container-high text-primary font-caption text-caption font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
              Risk & Whistleblower
            </span>
<span className="font-caption text-caption text-on-surface-variant">14 Min Read</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface leading-snug hover:text-primary transition-colors cursor-pointer">
            Designing Airtight Whistleblower Escrows: Protection Beyond Nominal Compliance
          </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Examining why third-party neutral intake channels out-perform internal compliance hotlines by 300% in discovering critical systemic enterprise risks before regulatory intervention.
          </p>
</div>
<div className="pt-space-md mt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg p-space-md rounded-b-2xl flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold text-[12px]">
              EV
            </div>
<div className="leading-tight">
<span className="font-label-sm text-label-sm text-on-surface block">Dr. Evelyn Vance</span>
<span className="font-caption text-caption text-on-surface-variant">Governance Counsel</span>
</div>
</div>
<a className="text-primary hover:text-primary-container font-label-sm text-label-sm font-semibold flex items-center gap-1" href="#">
<span>Read Brief</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</article>
{/*  Card 5: Boardroom De-escalation  */}
<article className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-xl transition-all flex flex-col justify-between article-item" data-category="governance">
<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-caption text-caption font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              Executive Advisory
            </span>
<span className="font-caption text-caption text-on-surface-variant">22 Min Read</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface leading-snug hover:text-primary transition-colors cursor-pointer">
            De-escalating Boardroom Fissures: Managing C-Suite Exits Without Reputational Bleed
          </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            A comprehensive protocol for Special Committees when founder departures, activist shareholder disputes, or chief executive breaches threaten brand equity.
          </p>
</div>
<div className="pt-space-md mt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg p-space-md rounded-b-2xl flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-fixed font-bold text-[12px]">
              AB
            </div>
<div className="leading-tight">
<span className="font-label-sm text-label-sm text-on-surface block">Arthur Bell, KC</span>
<span className="font-caption text-caption text-on-surface-variant">Special Counsel</span>
</div>
</div>
<a className="text-primary hover:text-primary-container font-label-sm text-label-sm font-semibold flex items-center gap-1" href="#">
<span>Read Brief</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</article>
{/*  Card 6: AI Governance  */}
<article className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-xl transition-all flex flex-col justify-between article-item" data-category="policy">
<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container-high text-primary font-caption text-caption font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              Emerging Tech & AI
            </span>
<span className="font-caption text-caption text-on-surface-variant">11 Min Read</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface leading-snug hover:text-primary transition-colors cursor-pointer">
            AI Governance in Human Resources: Mitigating Algorithmic Bias & Regulatory Liabilities
          </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Audit matrices for automated resume parsing, AI-based productivity surveillance, and defensible compliance with evolving EU AI Act and North American labor guidelines.
          </p>
</div>
<div className="pt-space-md mt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg p-space-md rounded-b-2xl flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold text-[12px]">
              DK
            </div>
<div className="leading-tight">
<span className="font-label-sm text-label-sm text-on-surface block">Daniela Kravitz</span>
<span className="font-caption text-caption text-on-surface-variant">Digital Ethics Advisor</span>
</div>
</div>
<a className="text-primary hover:text-primary-container font-label-sm text-label-sm font-semibold flex items-center gap-1" href="#">
<span>Read Brief</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</article>
</div>
</AnimatedSection>
{/*  Downloadable Executive Toolkits & Practice Checklists  */}
<AnimatedSection direction="up" delay={0.1} className="w-full bg-surface-container-low py-space-xl">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
<div>
<span className="font-caption text-caption text-secondary uppercase tracking-wider font-bold">Institutional Field Kits</span>
<h2 className="font-headline-xl text-headline-xl text-on-surface">General Counsel & Executive Toolkits</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Ready-to-deploy governance matrices, terms of reference, and statutory triage models.</p>
</div>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm self-start md:self-auto">
<span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
          Updated Q1 2025 Edition
        </span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
{/*  Toolkit 1  */}
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div className="space-y-space-sm">
<div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-fixed">
<span className="material-symbols-outlined text-[24px]">fact_check</span>
</div>
<span className="font-caption text-caption text-on-surface-variant uppercase font-semibold">Self-Assessment Instrument</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">32-Point Institutional Policy & AODA Audit Checklist</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              A structured operational audit protocol covering physical facility accommodations, digital accessibility standards, and statutory policy renewal cycles.
            </p>
</div>
<div className="mt-space-lg pt-space-md flex items-center justify-between">
<span className="font-caption text-caption text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">description</span> XLSX & PDF Bundle
            </span>
<button className="px-4 py-2 rounded-full bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-sm text-label-sm transition-all flex items-center gap-1">
<span>Get Checklist</span>
<span className="material-symbols-outlined text-[16px]">download</span>
</button>
</div>
</div>
{/*  Toolkit 2  */}
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div className="space-y-space-sm">
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">gavel</span>
</div>
<span className="font-caption text-caption text-on-surface-variant uppercase font-semibold">Legal Blueprint Template</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Investigative Terms of Reference (ToR) Drafting Template</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Comprehensive mandate definition document engineered specifically for General Counsel and Board Audit Committees to prevent mission creep.
            </p>
</div>
<div className="mt-space-lg pt-space-md flex items-center justify-between">
<span className="font-caption text-caption text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">article</span> DOCX Template (Annotated)
            </span>
<button className="px-4 py-2 rounded-full bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-sm text-label-sm transition-all flex items-center gap-1">
<span>Get Template</span>
<span className="material-symbols-outlined text-[16px]">download</span>
</button>
</div>
</div>
{/*  Toolkit 3  */}
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div className="space-y-space-sm">
<div className="w-12 h-12 rounded-xl bg-surface-variant flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">schema</span>
</div>
<span className="font-caption text-caption text-on-surface-variant uppercase font-semibold">Executive Decision Tree</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Executive Dispute Escalation Matrix & Triage Guide</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Visual risk triage tree to determine whether internal mediation, external neutral fact-finding, or regulatory escrow is warranted for reported disputes.
            </p>
</div>
<div className="mt-space-lg pt-space-md flex items-center justify-between">
<span className="font-caption text-caption text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">insert_drive_file</span> High-Res Vector PDF
            </span>
<button className="px-4 py-2 rounded-full bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-sm text-label-sm transition-all flex items-center gap-1">
<span>Get Guide</span>
<span className="material-symbols-outlined text-[16px]">download</span>
</button>
</div>
</div>
</div>
</div>
</AnimatedSection>
{/*  Thought Leadership Perspective / Editorial Split Showcase  */}
<AnimatedSection direction="up" delay={0.1} className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl w-full">
<div className="bg-surface-container rounded-2xl p-space-lg lg:p-space-xl flex flex-col lg:flex-row items-center gap-space-xl">
<div className="lg:w-1/2 space-y-space-md">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">psychology</span>
          Senior Governance Perspective
        </span>
<h2 className="font-headline-xl text-headline-xl text-on-surface">
          "Defensibility is not built at trial; it is constructed during the first 72 hours of an allegation."
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant">
          In our latest executive podcast dialogue, HCC Senior Partners discuss the shifting judicial landscape regarding unconscious investigator bias, digital evidentiary forensics, and how boards can insulate against cross-examination vulnerabilities.
        </p>
<div className="flex items-center gap-space-md pt-2">
<button className="px-5 py-2.5 rounded-full bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container shadow-md transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">play_circle</span>
<span>Listen to Briefing (28 Min)</span>
</button>
<a className="font-label-md text-label-md text-primary hover:underline flex items-center gap-1" href="#">
<span>Read Transcript</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
<div className="lg:w-1/2 w-full">
<div className="relative rounded-xl overflow-hidden shadow-lg aspect-video bg-inverse-surface">
<img className="w-full h-full object-cover" data-alt="Two senior executive advisors, one man with graying temples and one woman in tailored modern slate professional wear, engaged in a focused, high-level strategic legal dialogue in a contemporary sunlit executive conference lounge with ambient architectural lighting and minimalist interior accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr_tureDm_4gYFn3y2JbOM693DAtTfxTgUy6nwEOMeEGBG-UhGIb9sMxq2G0gAFG1EABnx9caBqwO2PY26IGDqYdr7yrc0arT0n87mRd7LKmovfa2rEUaN_uOcrkW1zE7pxn5IumBcFfUGXw7pGSLol0GAetfM8GCPd37Elyr-FQWVuCjEtsJCThOE_ASFIknsf_HxrB0WTzlVVfMU6cL4USVLku_lkVi444RzpzT478brWEP08OdtSw"/>
<div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
<div className="absolute bottom-4 left-4 right-4 bg-surface/90 backdrop-blur-md p-space-sm rounded-lg flex items-center justify-between">
<div>
<p className="font-label-sm text-label-sm text-on-surface font-semibold">HCC Executive Briefing Series #44</p>
<p className="font-caption text-caption text-on-surface-variant">Host: Dr. Evelyn Vance & Marcus Kane</p>
</div>
<span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-on-secondary">
<span className="material-symbols-outlined text-[18px]">graphic_eq</span>
</span>
</div>
</div>
</div>
</div>
</AnimatedSection>
{/*  Quarterly Privileged Subscription Callout  */}
<AnimatedSection direction="up" delay={0.1} className="max-w-7xl mx-auto px-6 lg:px-12 pb-space-xl w-full">
<div className="relative rounded-2xl bg-inverse-surface text-inverse-on-surface overflow-hidden p-space-lg lg:p-space-xl shadow-xl">
{/*  Glow ambient accent  */}
<div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-secondary/20 blur-3xl pointer-events-none"></div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
<div className="lg:col-span-7 space-y-space-sm">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high/20 text-secondary-fixed font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-secondary-fixed-dim"></span>
            Strictly Privileged Distribution
          </div>
<h2 className="font-headline-xl text-headline-xl text-inverse-on-surface">
            Subscribe to HCC Executive Briefings
          </h2>
<p className="font-body-md text-body-md text-surface-dim max-w-xl">
            Receive our quarterly legal and governance intelligence memoranda directly in your inbox. Strictly zero commercial spam; restricted to C-suite, Board Directors, General Counsel, and senior HR leaders.
          </p>
<div className="flex flex-wrap items-center gap-space-md pt-2 text-surface-dim font-caption text-caption">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-secondary-fixed">check_circle</span>
              Quarterly Arbitral Case Digest
            </span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-secondary-fixed">check_circle</span>
              Statutory Compliance Alerts
            </span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-secondary-fixed">check_circle</span>
              Confidential Escrow Insights
            </span>
</div>
</div>
{/*  Form Panel  */}
<div className="lg:col-span-5 bg-surface-container-lowest text-on-surface p-space-md lg:p-space-lg rounded-xl shadow-md">
<form className="space-y-3" onSubmit={(e) => { e.preventDefault(); /* event.preventDefault(); alert('Thank you. Your privileged subscription request has been received.'); */ }}>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Corporate / Institutional Email</label>
<input className="w-full h-12 px-4 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-outline" placeholder="counsel@institution.org" required type="email"/>
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Primary Mandate / Role</label>
<select className="w-full h-12 px-4 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all">
<option>General Counsel / In-House Legal</option>
<option>Board Director / Audit Committee</option>
<option>Chief Human Resources Officer</option>
<option>Executive Leadership / C-Suite</option>
<option>Public Sector Administrator</option>
</select>
</div>
<div className="pt-2">
<button className="w-full py-3 rounded-full bg-secondary hover:bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-bold transition-all shadow-md flex items-center justify-center gap-2" type="submit">
<span>Request Privileged Access</span>
<span className="material-symbols-outlined text-[18px]">lock_open</span>
</button>
</div>
<p className="font-caption text-caption text-on-surface-variant text-center pt-1">
              Governed under Canadian PIPEDA & strict client confidentiality policies.
            </p>
</form>
</div>
</div>
</div>
</AnimatedSection>
{/*  Client-side Interactive Filter Script  */}

</div>
      </main>
    </>
  )
}
