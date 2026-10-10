import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sectors')({
  component: Sectors,
})

function Sectors() {
  return (
    <>
      <main className="w-full pt-20 bg-background">
<div className="flex flex-col w-full">
{/*  Subtle Ambient Glow  */}
<div className="relative w-full overflow-hidden">
<div className="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-secondary-container/15 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute top-20 -left-20 w-[420px] h-[420px] bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
{/*  Section 1: Editorial Header & Breadcrumb  */}
<div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-12">
{/*  Breadcrumb  */}
<nav aria-label="Breadcrumb" className="flex items-center gap-space-xs font-caption text-caption text-on-surface-variant mb-6">
<a className="hover:text-primary transition-colors" href="#">Home</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary font-semibold">Sectors & Practice Verticals</span>
</nav>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
<div className="lg:col-span-8 flex flex-col gap-4">
<div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-secondary-container/30 text-on-secondary-fixed-variant font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>Multijurisdictional Advisory & Regulatory Defense</span>
</div>
<h1 className="font-display-hero text-display-hero text-on-surface tracking-tight">
            Institutional Expertise Across Regulated, High-Stakes Sectors
          </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            HCC engineers bespoke compliance architectures, independent statutory investigations, and multi-stakeholder dispute interventions where fiduciary liability, public trust, and systemic stability converge.
          </p>
</div>
{/*  Metric Accent Pill  */}
<div className="lg:col-span-4 flex flex-col gap-3 p-6 rounded-2xl bg-surface-container shadow-md">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Practice Capacity</span>
<span className="material-symbols-outlined text-primary text-[20px]">verified_user</span>
</div>
<div className="font-headline-lg text-headline-lg text-primary font-bold">140+ Mandates</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Successfully concluded across municipal, provincial, Crown, and tier-1 commercial boards without adverse regulatory sanction.
          </p>
</div>
</div>
</div>
</div>
{/*  Section 2 & 3: Interactive Sector Switcher & Comprehensive Vertical Dossiers  */}
<section className="max-w-7xl mx-auto px-6 lg:px-12 py-8 w-full" id="sector-explorer">
{/*  Horizontal Tab Ribbon  */}
<div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar border-b border-surface-container-high" role="tablist">
<button aria-selected="true" className="vertical-tab px-5 py-3 rounded-xl font-label-md text-label-md flex items-center gap-2 whitespace-nowrap transition-all duration-200 bg-primary text-on-primary shadow-sm" id="tab-public-sector" onClick={() => { /* switchVertical('public-sector') */ }} role="tab">
<span className="material-symbols-outlined text-[18px]">account_balance</span>
<span>Public Sector & Crown Corps</span>
</button>
<button aria-selected="false" className="vertical-tab px-5 py-3 rounded-xl font-label-md text-label-md flex items-center gap-2 whitespace-nowrap transition-all duration-200 bg-surface-container text-on-surface-variant hover:bg-surface-container-high" id="tab-healthcare" onClick={() => { /* switchVertical('healthcare') */ }} role="tab">
<span className="material-symbols-outlined text-[18px]">local_hospital</span>
<span>Healthcare Authorities</span>
</button>
<button aria-selected="false" className="vertical-tab px-5 py-3 rounded-xl font-label-md text-label-md flex items-center gap-2 whitespace-nowrap transition-all duration-200 bg-surface-container text-on-surface-variant hover:bg-surface-container-high" id="tab-higher-ed" onClick={() => { /* switchVertical('higher-ed') */ }} role="tab">
<span className="material-symbols-outlined text-[18px]">school</span>
<span>Higher Education</span>
</button>
<button aria-selected="false" className="vertical-tab px-5 py-3 rounded-xl font-label-md text-label-md flex items-center gap-2 whitespace-nowrap transition-all duration-200 bg-surface-container text-on-surface-variant hover:bg-surface-container-high" id="tab-tech-enterprise" onClick={() => { /* switchVertical('tech-enterprise') */ }} role="tab">
<span className="material-symbols-outlined text-[18px]">rocket_launch</span>
<span>Tech & Private Enterprise</span>
</button>
<button aria-selected="false" className="vertical-tab px-5 py-3 rounded-xl font-label-md text-label-md flex items-center gap-2 whitespace-nowrap transition-all duration-200 bg-surface-container text-on-surface-variant hover:bg-surface-container-high" id="tab-utilities" onClick={() => { /* switchVertical('utilities') */ }} role="tab">
<span className="material-symbols-outlined text-[18px]">bolt</span>
<span>Utilities & Energy</span>
</button>
</div>
{/*  PANELS CONTAINER  */}
<div className="mt-8">
{/*  PANEL 1: Public Sector & Crown Corporations  */}
<div className="vertical-panel block space-y-8" id="panel-public-sector">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
<div className="lg:col-span-7 flex flex-col justify-between p-8 rounded-3xl bg-surface-container-lowest shadow-sm">
<div>
<div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm mb-3">
<span className="material-symbols-outlined text-[16px]">gavel</span>
<span>Statutory Accountability & Integrity Inquiries</span>
</div>
<h2 className="font-headline-xl text-headline-xl text-on-surface font-bold mb-4">
                Public Sector & Crown Corporations
              </h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                Navigating the intersecting mandates of elected councils, deputy ministers, and arms-length boards requires absolute defensibility. HCC provides trusted third-party investigation and mediation during ministerial audits, Integrity Commissioner scrutiny, and sensitive whistleblower complaints.
              </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1">
<span className="font-title-md text-title-md text-primary font-bold">Ombudsman Compliance</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Proactive structural remediation aligning with systemic administrative fairness standards.</span>
</div>
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1">
<span className="font-title-md text-title-md text-primary font-bold">FOIP / PIPEDA Protocol</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Confidential investigation escrows shielding privileged municipal advisory materials.</span>
</div>
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1">
<span className="font-title-md text-title-md text-primary font-bold">Intergovernmental Mediation</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Neutral facilitation of inter-agency jurisdictional deadlocks and funding pacts.</span>
</div>
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1">
<span className="font-title-md text-title-md text-primary font-bold">Ethics Commissioner Filings</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Defensible evidentiary fact-finding preserving executive integrity reputations.</span>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-surface-container flex flex-wrap items-center gap-4">
<span className="font-label-sm text-label-sm text-on-surface-variant">Statutory Mandates:</span>
<span className="px-3 py-1 rounded-full bg-surface-container font-caption text-caption text-on-surface font-semibold">Municipal Act</span>
<span className="px-3 py-1 rounded-full bg-surface-container font-caption text-caption text-on-surface font-semibold">Crown Agency Governance Act</span>
<span className="px-3 py-1 rounded-full bg-surface-container font-caption text-caption text-on-surface font-semibold">Public Sector Integrity Act</span>
</div>
</div>
{/*  Highlight Box & Visual  */}
<div className="lg:col-span-5 flex flex-col gap-6">
<div className="relative rounded-3xl overflow-hidden shadow-sm h-64">
<img className="w-full h-full object-cover" data-alt="An expansive, sunlit brutalist government executive hall featuring geometric glass ceilings, warm polished stone columns, and crisp architectural shadows, shot on an architectural medium format camera." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnbwSbk_8M4GrD51YRildkzxhFWrHCp-8WeX3E3DXI2YzQLySn47JAwNyp8DFv5sSKs2jeUQQ8PQYQyUvyEOxkd8_s7irhQPdFvKiFoTxwbf1b4g3GBDJyqeJomvz0c0xbIWlXQSjXa5sh98VD8k_C7-zZ55_Uto9J0TCEsS4h27nM85InAi9u1b6OGNd6r92v9IqMbq5i5p2wZbGJgDuUPm43bE0o9WFPaPt4KaO-ud20HhjNDfF4RQ"/>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/30 to-transparent flex items-end p-6">
<span className="text-inverse-on-surface font-headline-sm text-headline-sm font-semibold">Crown Entity Governance Modernization</span>
</div>
</div>
{/*  Anonymized Case Study  */}
<div className="p-6 rounded-3xl bg-inverse-surface text-inverse-on-surface shadow-md flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="px-2.5 py-0.5 rounded-full bg-secondary text-on-secondary font-caption text-caption uppercase tracking-wider font-bold">Case Study Dossier #PS-409</span>
<span className="font-caption text-caption text-inverse-primary">Resolved in 42 Days</span>
</div>
<h3 className="font-title-md text-title-md font-bold text-inverse-on-surface">Regional Transportation Authority Governance Audit</h3>
<p className="font-body-sm text-body-sm text-surface-variant leading-relaxed">
                Following parallel complaints to the Provincial Auditor General regarding executive procurement biases, HCC executed an emergency 30-day independent forensic fact-finding inquiry, reconstructing 12,000+ internal communications and establishing an uncontested integrity reform framework.
              </p>
<div className="flex items-center justify-between pt-2 border-t border-inverse-primary/20 text-inverse-primary font-label-sm text-label-sm">
<span>Outcome: Total Ombudsman Cleansing</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</div>
</div>
</div>
</div>
</div>
{/*  PANEL 2: Healthcare Authorities & Hospital Systems  */}
<div className="vertical-panel hidden space-y-8" id="panel-healthcare">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
<div className="lg:col-span-7 flex flex-col justify-between p-8 rounded-3xl bg-surface-container-lowest shadow-sm">
<div>
<div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm mb-3">
<span className="material-symbols-outlined text-[16px]">health_and_safety</span>
<span>Clinical Integrity & Critical Incident Protocols</span>
</div>
<h2 className="font-headline-xl text-headline-xl text-on-surface font-bold mb-4">
                Healthcare Authorities & Hospital Systems
              </h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                Acute healthcare delivery environments require immediate balance between patient harm prevention, professional college guidelines, and unionized nursing/physician structures. HCC de-escalates deep-seated departmental ruptures and investigates confidential clinical misconduct allegations.
              </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1">
<span className="font-title-md text-title-md text-primary font-bold">Medical Advisory Mediation</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Resolving peer-to-peer physician credentialing disputes and Chiefs of Service conflicts.</span>
</div>
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1">
<span className="font-title-md text-title-md text-primary font-bold">Whistleblower Governance</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Establishing secure, non-retaliatory reporting pipelines for patient safety alerts.</span>
</div>
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1">
<span className="font-title-md text-title-md text-primary font-bold">Bioethics Tribunal Advisory</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Strategic legal-ethical consensus building during high-liability treatment mandates.</span>
</div>
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1">
<span className="font-title-md text-title-md text-primary font-bold">Bargaining Stabilization</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Multi-union healthcare bargaining table alignment without operational disruption.</span>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-surface-container flex flex-wrap items-center gap-4">
<span className="font-label-sm text-label-sm text-on-surface-variant">Statutory Mandates:</span>
<span className="px-3 py-1 rounded-full bg-surface-container font-caption text-caption text-on-surface font-semibold">Public Hospitals Act</span>
<span className="px-3 py-1 rounded-full bg-surface-container font-caption text-caption text-on-surface font-semibold">Quality of Care Information Act (QCIPA)</span>
<span className="px-3 py-1 rounded-full bg-surface-container font-caption text-caption text-on-surface font-semibold">Health Disciplines Code</span>
</div>
</div>
<div className="lg:col-span-5 flex flex-col gap-6">
<div className="relative rounded-3xl overflow-hidden shadow-sm h-64">
<img className="w-full h-full object-cover" data-alt="A modern architectural medical science pavilion with double-height glass atriums, clean white minimalist bridges, and warm natural sunlight, reflecting precision and compassionate governance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEFtJOpytZijMzmToYG2uST5RTadlbejuSRwsLp4kP4ItTJwJN7AOlp_4h6456N6v-kFm4gvNY6OuPMjzzB-cd43n4VrOHsixq2Qrww9YYFwiqSAfQo3ViCmiUMUQgoxtkatmpMM-noRS-jGnGicl8fPMRsUqwQmK0d86eKafjRYngyUYOo6fiELNBJcNvjUmpSbzfH-yU77lea3B74le0e-G5_xxqLmBXvZgbRhnJE3vULvkJJT5CwQ"/>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/30 to-transparent flex items-end p-6">
<span className="text-inverse-on-surface font-headline-sm text-headline-sm font-semibold">Multi-Site Hospital System Reorganization</span>
</div>
</div>
<div className="p-6 rounded-3xl bg-inverse-surface text-inverse-on-surface shadow-md flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed-variant font-caption text-caption uppercase tracking-wider font-bold">Case Study Dossier #HC-812</span>
<span className="font-caption text-caption text-inverse-primary">Resolved in 60 Days</span>
</div>
<h3 className="font-title-md text-title-md font-bold text-inverse-on-surface">Cardiothoracic Surgery Division Breakdown Mediation</h3>
<p className="font-body-sm text-body-sm text-surface-variant leading-relaxed">
                A toxic deadlock between clinical department heads threatened tertiary surgical accreditation. HCC conducted 28 in-depth evidentiary interviews, restructured clinical rotation governance, and re-established operative harmony with zero patient impact.
              </p>
<div className="flex items-center justify-between pt-2 border-t border-inverse-primary/20 text-inverse-primary font-label-sm text-label-sm">
<span>Accreditation Preserved: 100%</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</div>
</div>
</div>
</div>
</div>
{/*  PANEL 3: Higher Education & Academic Institutions  */}
<div className="vertical-panel hidden space-y-8" id="panel-higher-ed">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
<div className="lg:col-span-7 flex flex-col justify-between p-8 rounded-3xl bg-surface-container-lowest shadow-sm">
<div>
<div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm mb-3">
<span className="material-symbols-outlined text-[16px]">menu_book</span>
<span>Academic Freedom & Human Rights Standards</span>
</div>
<h2 className="font-headline-xl text-headline-xl text-on-surface font-bold mb-4">
                Higher Education & Academic Institutions
              </h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                Universities and polytechnics operate under complex dual-governance models (Board of Governors and Academic Senate), requiring sophisticated mediation across collective faculty agreements, student charter obligations, and donor relationships.
              </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1">
<span className="font-title-md text-title-md text-primary font-bold">Tenure & Promotion Appeals</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Neutral adjudications ensuring academic impartiality and procedural fairness.</span>
</div>
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1">
<span className="font-title-md text-title-md text-primary font-bold">Human Rights Tribunals</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Expert resolution of accommodation disputes and systemic campus climate audits.</span>
</div>
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1">
<span className="font-title-md text-title-md text-primary font-bold">Research Misconduct Inquiry</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Tri-Council compliant investigations guarding federal grant eligibility.</span>
</div>
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1">
<span className="font-title-md text-title-md text-primary font-bold">Senate-Board Alignment</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Facilitating structural policy renewals without campus labor disruption.</span>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-surface-container flex flex-wrap items-center gap-4">
<span className="font-label-sm text-label-sm text-on-surface-variant">Statutory Mandates:</span>
<span className="px-3 py-1 rounded-full bg-surface-container font-caption text-caption text-on-surface font-semibold">Post-secondary Education Statutes</span>
<span className="px-3 py-1 rounded-full bg-surface-container font-caption text-caption text-on-surface font-semibold">Human Rights Code</span>
<span className="px-3 py-1 rounded-full bg-surface-container font-caption text-caption text-on-surface font-semibold">AODA / Accessibility Laws</span>
</div>
</div>
<div className="lg:col-span-5 flex flex-col gap-6">
<div className="relative rounded-3xl overflow-hidden shadow-sm h-64">
<img className="w-full h-full object-cover" data-alt="A dignified university library rotunda with contemporary Scandinavian timber acoustics, expansive floor-to-ceiling windows showing green campus courtyards, and deep slate reading desks." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeesiwryHIqGaVFiHUjQQdK3Riv6mw1CKKsgplkAvkvwk6sLpaaOioatO2r5QmgdlaM33NJJroTNzPw9qxHRM997uUvGF7p9GLsQuQW7Ccvy96afNAfo8-BHM4-g2JySAbDMgK8np0nn797LmXeiHMc4s47_aXUkx3pcFd8XDv6bAlD9DMPSZ3fPSugRIpB9y6eZ8V6h-_hnnj0ZsKqCHZAwqsrp4sOvrZmwYHHMwpHd0jjE1zP5dOow"/>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/30 to-transparent flex items-end p-6">
<span className="text-inverse-on-surface font-headline-sm text-headline-sm font-semibold">Academic Senate Dispute Arbitration</span>
</div>
</div>
<div className="p-6 rounded-3xl bg-inverse-surface text-inverse-on-surface shadow-md flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed-variant font-caption text-caption uppercase tracking-wider font-bold">Case Study Dossier #ED-331</span>
<span className="font-caption text-caption text-inverse-primary">Resolved in 90 Days</span>
</div>
<h3 className="font-title-md text-title-md font-bold text-inverse-on-surface">Faculty Association Collective Tenure Gridlock</h3>
<p className="font-body-sm text-body-sm text-surface-variant leading-relaxed">
                Following 18 months of stalled bargaining and threatened strike sanction over EDI evaluation metrics, HCC was appointed as independent neutral mediator, securing a ratified 4-year protocol without loss of academic days.
              </p>
<div className="flex items-center justify-between pt-2 border-t border-inverse-primary/20 text-inverse-primary font-label-sm text-label-sm">
<span>Ratification Rate: 94.2%</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</div>
</div>
</div>
</div>
</div>
{/*  PANEL 4: Tech & Private Enterprise  */}
<div className="vertical-panel hidden space-y-8" id="panel-tech-enterprise">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
<div className="lg:col-span-7 flex flex-col justify-between p-8 rounded-3xl bg-surface-container-lowest shadow-sm">
<div>
<div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm mb-3">
<span className="material-symbols-outlined text-[16px]">psychology</span>
<span>Fiduciary Stewardship & Pre-IPO Cleanliness</span>
</div>
<h2 className="font-headline-xl text-headline-xl text-on-surface font-bold mb-4">
                High-Growth Tech & Private Enterprise
              </h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                Hyper-growth environments face acute executive risks: cap-table founder infighting, non-compete/IP exfiltration, and culture breaches that threaten institutional funding rounds. HCC deploys covert, rapid-turnaround strategic advisory for venture-backed and public tech enterprises.
              </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1">
<span className="font-title-md text-title-md text-primary font-bold">C-Suite Founder Separation</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Reputationally protected equity and governance restructuring.</span>
</div>
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1">
<span className="font-title-md text-title-md text-primary font-bold">IP & Exfiltration Audits</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Digital forensic evidence preservation following senior engineer poaching.</span>
</div>
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1">
<span className="font-title-md text-title-md text-primary font-bold">Pre-IPO Governance Audits</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Comprehensive board oversight hardening prior to S-1 / prospectus filing.</span>
</div>
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1">
<span className="font-title-md text-title-md text-primary font-bold">Hostile Takeover Readiness</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Board room fiduciary guidance under activist shareholder offensive campaigns.</span>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-surface-container flex flex-wrap items-center gap-4">
<span className="font-label-sm text-label-sm text-on-surface-variant">Statutory Mandates:</span>
<span className="px-3 py-1 rounded-full bg-surface-container font-caption text-caption text-on-surface font-semibold">Canada Business Corporations Act (CBCA)</span>
<span className="px-3 py-1 rounded-full bg-surface-container font-caption text-caption text-on-surface font-semibold">SOX & OSC Regulatory Rules</span>
<span className="px-3 py-1 rounded-full bg-surface-container font-caption text-caption text-on-surface font-semibold">Uniform Trade Secrets Act</span>
</div>
</div>
<div className="lg:col-span-5 flex flex-col gap-6">
<div className="relative rounded-3xl overflow-hidden shadow-sm h-64">
<img className="w-full h-full object-cover" data-alt="A sophisticated executive glass boardroom overlooking a misty metropolitan skyline at twilight, sleek dark slate meeting tables with minimalist laptops and confidential dossier folders." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8kLRLRsqF8qlLRRC_-SfLh92L7Vcb5UpgTbWwxbCzYY_T0Mt-yJcf1Y89jAVTCnyckaJLqhYAWu4SwXrNC4_dwERFFqRkmLBJdVj22akezRT68xrpnoQMhA-agnDW3bgmxZUUZIm4feGdhsZMrs2balqd8MLkJ8m1_UW0Kw1LqOiQLgu4c9j1-dA0MAxPG5GZWwHe7-2hwg0Uj0fSK94mSFvwPdWhrmOfwEDid8xrrx_UHpDZ87qJdw"/>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/30 to-transparent flex items-end p-6">
<span className="text-inverse-on-surface font-headline-sm text-headline-sm font-semibold">Series C Enterprise Board Mediation</span>
</div>
</div>
<div className="p-6 rounded-3xl bg-inverse-surface text-inverse-on-surface shadow-md flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed-variant font-caption text-caption uppercase tracking-wider font-bold">Case Study Dossier #TC-994</span>
<span className="font-caption text-caption text-inverse-primary">Resolved in 18 Days</span>
</div>
<h3 className="font-title-md text-title-md font-bold text-inverse-on-surface">Co-Founder Equity Dispute & IP Protection</h3>
<p className="font-body-sm text-body-sm text-surface-variant leading-relaxed">
                During a $60M financing round, sudden founder dispute over patented algorithm ownership threatened immediate syndicate withdrawal. HCC mediated an iron-clad buyout and release agreement within 18 days, securing the round without public leakage.
              </p>
<div className="flex items-center justify-between pt-2 border-t border-inverse-primary/20 text-inverse-primary font-label-sm text-label-sm">
<span>Capital Preserved: $60M</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</div>
</div>
</div>
</div>
</div>
{/*  PANEL 5: Utilities & Energy Infrastructure  */}
<div className="vertical-panel hidden space-y-8" id="panel-utilities">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
<div className="lg:col-span-7 flex flex-col justify-between p-8 rounded-3xl bg-surface-container-lowest shadow-sm">
<div>
<div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm mb-3">
<span className="material-symbols-outlined text-[16px]">power</span>
<span>Critical Infrastructure & Commission Hearings</span>
</div>
<h2 className="font-headline-xl text-headline-xl text-on-surface font-bold mb-4">
                Regulated Utilities & Energy Infrastructure
              </h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                Energy transition, transmission infrastructure, and municipal rate hearings operate in highly scrutinized tri-partite dynamics involving unions, indigenous stakeholders, and provincial energy boards. HCC maintains the calm, defensible equilibrium essential for continuous operations.
              </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1">
<span className="font-title-md text-title-md text-primary font-bold">Tripartite Bargaining</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Preventing disruption across essential grid operations and field trades.</span>
</div>
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1">
<span className="font-title-md text-title-md text-primary font-bold">Safety Culture Inquiries</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Uncovering systemic root causes following near-miss critical plant events.</span>
</div>
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1">
<span className="font-title-md text-title-md text-primary font-bold">Energy Board Testimonies</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Independent strategic reporting prepared for formal evidentiary hearings.</span>
</div>
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1">
<span className="font-title-md text-title-md text-primary font-bold">Indigenous Rights Consultation</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Facilitating duty-to-consult frameworks based on verifiable mutual benefit.</span>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-surface-container flex flex-wrap items-center gap-4">
<span className="font-label-sm text-label-sm text-on-surface-variant">Statutory Mandates:</span>
<span className="px-3 py-1 rounded-full bg-surface-container font-caption text-caption text-on-surface font-semibold">Ontario Energy Board Act</span>
<span className="px-3 py-1 rounded-full bg-surface-container font-caption text-caption text-on-surface font-semibold">Canada Energy Regulator (CER)</span>
<span className="px-3 py-1 rounded-full bg-surface-container font-caption text-caption text-on-surface font-semibold">Occupational Health & Safety Act</span>
</div>
</div>
<div className="lg:col-span-5 flex flex-col gap-6">
<div className="relative rounded-3xl overflow-hidden shadow-sm h-64">
<img className="w-full h-full object-cover" data-alt="A clean, modern clean-energy transmission station set against dramatic rolling hills, featuring pristine high-voltage infrastructure and azure blue sky with bright eco-green accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY4x6ciIXoXS0UTRGtx7FPoSeOJIzMWWANOmE4ee5AwMlyQP8aRJ8j5ywcTE0KR8gMlKCBNr_W3IMkmSoZMvwXZ_bXrCKLvO2zpPDiPJObJssYB4YDzcSu41nGSmZ8N_ucoOaq20ZX0GdfBovyNwOXdtsL24nBe5EOI0-KxZQn77o9nRjpmJrTJ2bHhYM5eJdITH4knTJqRLfBAdRNF9KZ3gvPnNOVOIS4rbFaR0cBeyCa8CDIuT835Q"/>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/30 to-transparent flex items-end p-6">
<span className="text-inverse-on-surface font-headline-sm text-headline-sm font-semibold">Regional Power Grid Labor Accord</span>
</div>
</div>
<div className="p-6 rounded-3xl bg-inverse-surface text-inverse-on-surface shadow-md flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed-variant font-caption text-caption uppercase tracking-wider font-bold">Case Study Dossier #UT-104</span>
<span className="font-caption text-caption text-inverse-primary">Resolved in 45 Days</span>
</div>
<h3 className="font-title-md text-title-md font-bold text-inverse-on-surface">Transmission Corridor Environmental Mediation</h3>
<p className="font-body-sm text-body-sm text-surface-variant leading-relaxed">
                A contentious $340M substation modernization stalled under competing municipal and first-nation environmental objections. HCC structured a multi-lateral roundtable with independent monitoring covenants, releasing the project to full regulatory consent.
              </p>
<div className="flex items-center justify-between pt-2 border-t border-inverse-primary/20 text-inverse-primary font-label-sm text-label-sm">
<span>Infrastructure Unlocked: $340M</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Section 4: Cross-Sector Multi-Stakeholder Liaison (Pillar 8 Focus)  */}
<section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 w-full">
<div className="p-8 lg:p-12 rounded-3xl bg-surface-container-high/60 shadow-lg relative overflow-hidden">
{/*  Background Graphic Accents  */}
<div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute bottom-0 left-10 w-64 h-64 bg-secondary-container/20 rounded-full blur-2xl pointer-events-none"></div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-6 flex flex-col gap-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm self-start">
<span className="material-symbols-outlined text-[16px]">hub</span>
<span>HCC Pillar VIII: Advisory & Liaison Mandates</span>
</div>
<h2 className="font-headline-xl text-headline-xl text-on-surface font-bold">
            The Interface of Public Mandate and Private Enterprise
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            When government regulations impact commercial investments, neither traditional corporate lobbying nor rigid litigation yields sustainable outcomes. HCC serves as an accredited, trusted liaison intermediary, providing confidential escrow, policy translation, and bi-lateral pact development.
          </p>
<div className="space-y-3 pt-2">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">check_circle</span>
<div>
<span className="font-title-md text-title-md text-on-surface font-semibold block">Independent Fiduciary Escrow</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Allowing parties to disclose sensitive operational data to HCC without disclosing proprietary IP to competitors or regulators.</span>
</div>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">check_circle</span>
<div>
<span className="font-title-md text-title-md text-on-surface font-semibold block">Public Interest Risk Modeling</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Translating corporate compliance KPIs into measurable public good metrics vetted against provincial auditor frameworks.</span>
</div>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">check_circle</span>
<div>
<span className="font-title-md text-title-md text-on-surface font-semibold block">Tripartite Accord Architecture</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Constructing legally resilient memorandums of understanding (MOUs) that withstand political leadership turnover.</span>
</div>
</div>
</div>
</div>
{/*  Interactive Diagram Box  */}
<div className="lg:col-span-6 flex flex-col gap-4 p-6 rounded-2xl bg-surface-container-lowest shadow-md">
<div className="flex items-center justify-between pb-3 border-b border-surface-container">
<span className="font-title-md text-title-md text-primary font-bold">Liaison Neutral Protocol</span>
<span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed-variant font-caption text-caption font-bold">ISO 31022 Certified</span>
</div>
{/*  Process Flow Visualization  */}
<div className="flex flex-col gap-4 py-2">
<div className="flex items-center gap-4 p-3 rounded-xl bg-surface-container-low">
<div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold">01</div>
<div className="flex-1">
<span className="font-label-md text-label-md text-on-surface font-semibold block">Bilateral Confidential Scoping</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Unilateral confidential interviews mapping undisclosed bottom-lines and statutory red lines.</span>
</div>
</div>
<div className="flex items-center gap-4 p-3 rounded-xl bg-surface-container-low">
<div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold">02</div>
<div className="flex-1">
<span className="font-label-md text-label-md text-on-surface font-semibold block">Joint Evidence Harmonization</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Creation of an undisputed, neutral factual dossier reviewed under strict joint escrow.</span>
</div>
</div>
<div className="flex items-center gap-4 p-3 rounded-xl bg-surface-container-low">
<div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold">03</div>
<div className="flex-1">
<span className="font-label-md text-label-md text-on-surface font-semibold block">Sanction-Proof Settlement Pact</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Execution of ratified policy and governance covenants aligned with oversight entities.</span>
</div>
</div>
</div>
<div className="p-3 rounded-xl bg-surface-container flex items-center gap-3 text-on-surface-variant font-caption text-caption">
<span className="material-symbols-outlined text-primary text-[18px]">lock</span>
<span>All liaison records remain strictly inadmissible in subsequent litigation under our Master Neutral Retainer.</span>
</div>
</div>
</div>
</div>
</section>
{/*  Section 5: Interactive Sector Comparison / Mandate Matrix Table  */}
<section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 w-full">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
<div>
<span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider font-semibold">Strategic Governance Matrix</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">Sector Mandate & Resolution Framework</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
        Comparative institutional breakdown detailing engagement structures, primary regulatory bodies, and mean intervention resolution cycles.
      </p>
</div>
{/*  Responsive Matrix Card  */}
<div className="overflow-x-auto rounded-3xl bg-surface-container-lowest shadow-md">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container text-on-surface font-label-md text-label-md">
<th className="p-5">Vertical Practice</th>
<th className="p-5">Engagement Model</th>
<th className="p-5">Primary Stakeholders</th>
<th className="p-5">Regulatory Oversight Bodies</th>
<th className="p-5 text-right">Avg. Resolution</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container font-body-sm text-body-sm text-on-surface-variant">
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="p-5 font-bold text-on-surface flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
              Public Sector & Crown
            </td>
<td className="p-5">Independent Third-Party Fact-Finder</td>
<td className="p-5">Deputy Ministers, Councilors, Integrity Office</td>
<td className="p-5">Provincial Ombudsman, Auditor General, IPC</td>
<td className="p-5 text-right font-semibold text-primary">30 – 60 Days</td>
</tr>
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="p-5 font-bold text-on-surface flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
              Healthcare Authorities
            </td>
<td className="p-5">Medical Advisory Neutral Mediator</td>
<td className="p-5">Chief Medical Officers, Nursing Unions, Boards</td>
<td className="p-5">Ministry of Health, CPSO, Health Quality Ontario</td>
<td className="p-5 text-right font-semibold text-primary">45 – 90 Days</td>
</tr>
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="p-5 font-bold text-on-surface flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
              Higher Education
            </td>
<td className="p-5">Independent Adjudicator & Inquirer</td>
<td className="p-5">Faculty Associations, Deans, Student Ombuds</td>
<td className="p-5">Human Rights Tribunal (HRTO), Tri-Agency Council</td>
<td className="p-5 text-right font-semibold text-primary">60 – 120 Days</td>
</tr>
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="p-5 font-bold text-on-surface flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
              Tech & Private Enterprise
            </td>
<td className="p-5">Executive Counsel & Forensic Escrow</td>
<td className="p-5">Founders, VC Lead Directors, General Counsel</td>
<td className="p-5">Securities Commissions, Commercial Courts</td>
<td className="p-5 text-right font-semibold text-primary">14 – 30 Days</td>
</tr>
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="p-5 font-bold text-on-surface flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
              Utilities & Infrastructure
            </td>
<td className="p-5">Tripartite Roundtable Facilitator</td>
<td className="p-5">System Operators, Bargaining Units, First Nations</td>
<td className="p-5">Energy Boards, Environmental Review Tribunals</td>
<td className="p-5 text-right font-semibold text-primary">60 – 180 Days</td>
</tr>
</tbody>
</table>
</div>
</section>
{/*  Section 6: High-Trust CTA Banner  */}
<section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 w-full">
<div className="relative rounded-3xl bg-inverse-surface text-inverse-on-surface p-8 lg:p-14 shadow-2xl overflow-hidden">
{/*  Decorative radial gradient glow  */}
<div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-container/30 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute top-0 right-1/3 w-64 h-64 bg-secondary-container/10 rounded-full blur-2xl pointer-events-none"></div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-8 flex flex-col gap-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest/20 text-inverse-primary font-label-sm text-label-sm self-start">
<span className="w-2 h-2 rounded-full bg-secondary-fixed-dim"></span>
<span>Immediate Response Advisory Protocol</span>
</div>
<h2 className="font-headline-xl text-headline-xl text-inverse-on-surface font-bold tracking-tight">
            Request a Confidential Sector Assessment
          </h2>
<p className="font-body-lg text-body-lg text-surface-variant max-w-2xl leading-relaxed">
            All initial inquiries are held under privileged advisory confidentiality. Speak directly with a practice lead experienced in your governing statutory frameworks.
          </p>
<div className="flex flex-wrap items-center gap-6 pt-4 font-body-sm text-body-sm">
<div className="flex items-center gap-2 text-inverse-on-surface">
<span className="material-symbols-outlined text-secondary-fixed text-[20px]">phone_in_talk</span>
<span className="font-bold">Confidential Hotline:</span>
<span className="text-inverse-primary">+1 (403) 359-4972</span>
</div>
<div className="flex items-center gap-2 text-inverse-on-surface">
<span className="material-symbols-outlined text-secondary-fixed text-[20px]">mark_email_read</span>
<span className="font-bold">Secure Desk:</span>
<span className="text-inverse-primary">advisory@holisticconcept.com</span>
</div>
</div>
</div>
<div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
<a className="w-full px-6 py-4 rounded-full font-label-md text-label-md bg-primary hover:bg-primary-container text-on-primary flex items-center justify-center gap-3 transition-all duration-200 shadow-md" data-path="request-consultation" href="#">
<span>Initiate Confidential Assessment</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
<a className="w-full px-6 py-4 rounded-full font-label-md text-label-md bg-inverse-on-surface/10 hover:bg-inverse-on-surface/20 text-inverse-on-surface flex items-center justify-center gap-2 transition-all duration-200" data-path="contact" href="#">
<span className="material-symbols-outlined text-[18px]">download</span>
<span>Download Sector Dossier (PDF)</span>
</a>
</div>
</div>
</div>
</section>
</div>

      </main>
    </>
  )
}
