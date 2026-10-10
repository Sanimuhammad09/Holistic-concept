import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  return (
    <>
      <main className="w-full pt-20 bg-background">
<div className="flex flex-col w-full">
{/*  Subtle Ambient Glow Orbs  */}
<div className="relative w-full overflow-hidden">
<div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
<div className="absolute top-96 left-10 w-80 h-80 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
{/*  Top Breadcrumb & Executive Header Header  */}
<section className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-12 w-full relative z-10">
{/*  Breadcrumb Bar  */}
<nav aria-label="Breadcrumb" className="flex items-center gap-space-xs font-caption text-caption text-on-surface-variant uppercase tracking-wider mb-6">
<a className="hover:text-primary transition-colors flex items-center gap-1" data-path="home" href="#">
<span className="material-symbols-outlined text-[14px]">home</span>
<span>Home</span>
</a>
<span className="material-symbols-outlined text-[14px] text-outline-variant">chevron_right</span>
<span className="text-primary font-semibold">Contact & Retainer Intake</span>
<span className="ml-4 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-container/30 text-secondary font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
          Direct Solicitor-Client Privilege Protocol Active
        </span>
</nav>
{/*  Main Title Block  */}
<div className="max-w-4xl flex flex-col gap-space-sm">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high w-fit font-label-sm text-label-sm text-primary font-bold">
<span className="material-symbols-outlined text-[16px] text-secondary">verified_user</span>
          Tier-1 Strategic Counsel & Corporate Escrow
        </div>
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
          Initiate a Strictly Confidential <span className="text-primary italic">Strategic Consultation</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          Engage our senior managing partners and certified investigators under strict preliminary solicitor-client privilege protocols and mutual non-disclosure. All transmissions are routed through an encrypted sovereign vault.
        </p>
</div>
{/*  Quick Trust Indicators  */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 bg-surface-container-low rounded-xl p-5 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm shrink-0">
<span className="material-symbols-outlined text-[20px]">shield_lock</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">256-Bit SSL Escrow</span>
<span className="font-caption text-caption text-on-surface-variant">Zero metadata persistence</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm shrink-0">
<span className="material-symbols-outlined text-[20px]">timer</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Guaranteed Response</span>
<span className="font-caption text-caption text-on-surface-variant">Priority review within 2-4 hrs</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm shrink-0">
<span className="material-symbols-outlined text-[20px]">policy</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Conflict Check Active</span>
<span className="font-caption text-caption text-on-surface-variant">Independent gatekeeper triage</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm shrink-0">
<span className="material-symbols-outlined text-[20px]">gavel</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Privileged Channel</span>
<span className="font-caption text-caption text-on-surface-variant">In-house legal oversight</span>
</div>
</div>
</div>
</section>
{/*  Two-Column Architecture: Intake Form & Crisis Dispatch  */}
<section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 w-full relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
{/*  Left Column: Confidential Intake Form (7 cols)  */}
<div className="lg:col-span-7 bg-surface-container-lowest rounded-2xl p-6 sm:p-10 shadow-md">
<div className="flex items-center justify-between pb-6 mb-6 bg-surface-container-low -mx-6 sm:-mx-10 -mt-6 sm:-mt-10 p-6 sm:p-10 rounded-t-2xl">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md">
<span className="material-symbols-outlined text-[22px]">assignment_turned_in</span>
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Confidential Case Intake & Retainer Brief</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Formal preliminary record for prospective client counsel</p>
</div>
</div>
<span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed-variant font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
              Secure Form v4.8
            </span>
</div>
<form className="flex flex-col gap-6" id="retainerIntakeForm" onSubmit={(e) => { e.preventDefault(); /* event.preventDefault(); document.getElementById('successBanner').classList.remove('hidden'); document.getElementById('retainerIntakeForm').reset(); */ }}>
{/*  Executive Identity  */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface" htmlFor="fullName">Honorific & Full Legal Name *</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3.5 text-outline text-[18px]">person</span>
<input className="w-full h-12 pl-10 pr-4 bg-surface-bright rounded-lg font-body-sm text-body-sm text-on-surface outline-none focus:bg-surface-container-lowest focus:shadow-md transition-all" id="fullName" placeholder="e.g. Dr. Arthur M. Vance, K.C." required type="text"/>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface" htmlFor="executiveRole">Executive Position / Role *</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3.5 text-outline text-[18px]">badge</span>
<input className="w-full h-12 pl-10 pr-4 bg-surface-bright rounded-lg font-body-sm text-body-sm text-on-surface outline-none focus:bg-surface-container-lowest focus:shadow-md transition-all" id="executiveRole" placeholder="e.g. General Counsel / VP Risk" required type="text"/>
</div>
</div>
</div>
{/*  Organization & Entity  */}
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface" htmlFor="orgName">Organization / Government Agency / Entity *</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3.5 text-outline text-[18px]">domain</span>
<input className="w-full h-12 pl-10 pr-4 bg-surface-bright rounded-lg font-body-sm text-body-sm text-on-surface outline-none focus:bg-surface-container-lowest focus:shadow-md transition-all" id="orgName" placeholder="e.g. Apex Global Financial Group or Ministry of Transportation" required type="text"/>
</div>
</div>
{/*  Contact Channels  */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface" htmlFor="secureEmail">Secure Corporate / Legal Email *</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3.5 text-outline text-[18px]">alternate_email</span>
<input className="w-full h-12 pl-10 pr-4 bg-surface-bright rounded-lg font-body-sm text-body-sm text-on-surface outline-none focus:bg-surface-container-lowest focus:shadow-md transition-all" id="secureEmail" placeholder="counsel@corporation.com" required type="email"/>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface" htmlFor="phone">Direct Confidential Phone *</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3.5 text-outline text-[18px]">call</span>
<input className="w-full h-12 pl-10 pr-4 bg-surface-bright rounded-lg font-body-sm text-body-sm text-on-surface outline-none focus:bg-surface-container-lowest focus:shadow-md transition-all" id="phone" placeholder="+1 (416) 000-0000" required type="tel"/>
</div>
</div>
</div>
{/*  Practice Stream Dropdown  */}
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface" htmlFor="practiceStream">Primary Practice Stream Required *</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3.5 text-outline text-[18px]">category</span>
<select className="w-full h-12 pl-10 pr-10 bg-surface-bright rounded-lg font-body-sm text-body-sm text-on-surface outline-none focus:bg-surface-container-lowest focus:shadow-md appearance-none cursor-pointer transition-all" id="practiceStream" required>
<option disabled value="">Select Strategic Practice Domain...</option>
<option value="investigations">Corporate Investigations & Forensic Fact-Finding</option>
<option value="negotiation">High-Stakes Negotiation & Institutional Mediation</option>
<option value="policies">Regulatory Policy Architecture & Compliance Audit</option>
<option value="accessibility">Institutional Accessibility & Human Rights Frameworks</option>
<option value="process_serving">Expedited Process Serving & Litigation Logistics</option>
<option value="hr_consulting">Executive HR Consulting & Sensitive Workplace Reviews</option>
<option value="business_training">Boardroom Governance & Ethics Training</option>
<option value="advisory">Strategic Advisory & Public Sector Liaison</option>
</select>
<span className="material-symbols-outlined absolute right-3.5 text-outline pointer-events-none text-[18px]">unfold_more</span>
</div>
</div>
{/*  Mobilization Urgency Selector  */}
<div className="flex flex-col gap-2">
<span className="font-label-md text-label-md text-on-surface">Mobilization Urgency SLA *</span>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<label className="cursor-pointer">
<input className="peer sr-only" name="urgency" type="radio" value="routine"/>
<div className="p-3.5 rounded-lg bg-surface-bright peer-checked:bg-surface-container-high peer-checked:shadow-sm transition-all flex flex-col gap-1">
<span className="font-label-sm text-label-sm font-bold text-on-surface">Routine Advisory</span>
<span className="font-caption text-caption text-on-surface-variant">Standard 24h intake response</span>
</div>
</label>
<label className="cursor-pointer">
<input defaultChecked className="peer sr-only" name="urgency" type="radio" value="priority"/>
<div className="p-3.5 rounded-lg bg-surface-bright peer-checked:bg-primary-container peer-checked:text-on-primary-container peer-checked:shadow-sm transition-all flex flex-col gap-1">
<span className="font-label-sm text-label-sm font-bold">Priority Triage</span>
<span className="font-caption text-caption opacity-90">Mobilization within 4-8 hours</span>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="urgency" type="radio" value="crisis"/>
<div className="p-3.5 rounded-lg bg-surface-bright peer-checked:bg-secondary-container peer-checked:text-on-secondary-fixed-variant peer-checked:shadow-sm transition-all flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm font-bold">Immediate Crisis</span>
<span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
</div>
<span className="font-caption text-caption">Emergency dispatch &lt; 2 hours</span>
</div>
</label>
</div>
</div>
{/*  Overview of Matter  */}
<div className="flex flex-col gap-1.5">
<div className="flex justify-between items-center">
<label className="font-label-md text-label-md text-on-surface" htmlFor="mandateOverview">Preliminary Matter / Mandate Overview *</label>
<span className="font-caption text-caption text-on-surface-variant">Confidential Brief</span>
</div>
<textarea className="w-full p-4 bg-surface-bright rounded-lg font-body-sm text-body-sm text-on-surface outline-none focus:bg-surface-container-lowest focus:shadow-md transition-all" id="mandateOverview" placeholder="Describe the factual background, key dates, implicated parties (for conflict verification), and desired resolution outcomes. Refrain from revealing unencrypted access credentials." required rows={4}></textarea>
</div>
{/*  Secure File Upload Zone  */}
<div className="flex flex-col gap-1.5">
<span className="font-label-md text-label-md text-on-surface">Encrypted Briefing Materials (Optional)</span>
<div className="p-6 rounded-xl bg-surface-bright hover:bg-surface-container flex flex-col items-center justify-center text-center cursor-pointer transition-colors group" id="dropzoneContainer">
<div className="w-12 h-12 rounded-full bg-surface-container-high group-hover:bg-primary-container group-hover:text-on-primary flex items-center justify-center text-primary mb-2 transition-all">
<span className="material-symbols-outlined text-[24px]">cloud_upload</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface font-semibold group-hover:text-primary transition-colors">
                  Drag and drop privileged files or browse
                </span>
<span className="font-caption text-caption text-on-surface-variant mt-1">
                  Supported: Encrypted PDF, DOCX, ZIP (Up to 50MB). Automatically purged post-triage.
                </span>
<input accept=".pdf,.doc,.docx,.zip" className="hidden" id="fileAttachment" type="file"/>
</div>
</div>
{/*  Mutual NDA Toggle & Escrow Certification  */}
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-3">
<label className="flex items-start gap-3 cursor-pointer">
<input className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary accent-primary" id="mNdaToggle" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Execute Mutual Non-Disclosure Agreement (M-NDA)</span>
<span className="font-caption text-caption text-on-surface-variant">HCC legal desk will immediately countersign your standard or HCC bespoke M-NDA template prior to exploratory telephone conference.</span>
</div>
</label>
<label className="flex items-start gap-3 cursor-pointer">
<input defaultChecked className="mt-1 w-4 h-4 rounded text-secondary focus:ring-secondary accent-secondary" required type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Attestation of Preliminary Counsel Privilege</span>
<span className="font-caption text-caption text-on-surface-variant">I certify that this submission constitutes a bona fide inquiry for professional advisory and litigation logistics.</span>
</div>
</label>
</div>
{/*  Success State Toast (Hidden initially)  */}
<div className="hidden p-4 rounded-xl bg-secondary-container text-on-secondary-fixed-variant flex items-center gap-3" id="successBanner">
<span className="material-symbols-outlined text-[24px] text-secondary">check_circle</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold">Brief Transmitted to Sovereign Vault</span>
<span className="font-body-sm text-body-sm">Lead Partner Arthur Vance assigned. Case Ref: HCC-2025-9812. Encrypted confirmation sent to your corporate email.</span>
</div>
</div>
{/*  Submit CTA Button  */}
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
<button className="w-full sm:w-auto px-8 py-3.5 rounded-full font-label-md text-label-md bg-primary hover:bg-primary-container text-on-primary shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2" type="submit">
<span>Submit Strictly Confidential Inquiry</span>
<span className="material-symbols-outlined text-[18px]">lock</span>
</button>
<div className="flex items-center gap-2 text-on-surface-variant font-caption text-caption">
<span className="material-symbols-outlined text-[16px] text-secondary">lock</span>
<span>FIPS 140-2 Level 3 Hardware Vault</span>
</div>
</div>
</form>
</div>
{/*  Right Column: Dispatch Hotline, Practice Hubs & SLAs (5 cols)  */}
<div className="lg:col-span-5 flex flex-col gap-6">
{/*  24/7 Crisis Hotline Card  */}
<div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary-fixed to-primary"></div>
<div className="flex items-center justify-between mb-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container/40 text-secondary font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
                Active 24/7 Dispatch Control
              </span>
<span className="font-caption text-caption text-on-surface-variant">Immediate Crisis Queue</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Immediate Retainer & Emergency Hotline</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
              For active injunctions, immediate witness protection, workplace emergencies, or time-sensitive court filings:
            </p>
{/*  Phone Hero Display  */}
<a className="p-4 rounded-xl bg-primary text-on-primary flex items-center justify-between hover:bg-primary-container transition-all shadow-md group" href="tel:+14033594972">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-on-primary/10 flex items-center justify-center">
<span className="material-symbols-outlined text-[22px] text-secondary-container">phone_in_talk</span>
</div>
<div className="flex flex-col">
<span className="font-caption text-caption text-secondary-container font-semibold uppercase tracking-wider">Toll-Free Priority Line</span>
<span className="font-title-md text-title-md font-bold text-on-primary">+1 (403) 359-4972</span>
</div>
</div>
<span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
{/*  Extension Directory  */}
<div className="mt-6 flex flex-col gap-2.5">
<span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-bold">Emergency Extension Directory</span>
<div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-2.5">
<span className="w-6 h-6 rounded bg-surface-container-high flex items-center justify-center font-label-sm text-label-sm text-primary font-bold">1</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium">Investigations & Forensic Fact-Finding</span>
</div>
<span className="font-caption text-caption text-secondary font-bold">Duty Partner On-Call</span>
</div>
<div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-2.5">
<span className="w-6 h-6 rounded bg-surface-container-high flex items-center justify-center font-label-sm text-label-sm text-primary font-bold">2</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium">Process Serving & Court Logistics</span>
</div>
<span className="font-caption text-caption text-on-surface-variant">Same-Day Courier</span>
</div>
<div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-2.5">
<span className="w-6 h-6 rounded bg-surface-container-high flex items-center justify-center font-label-sm text-label-sm text-primary font-bold">3</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium">Executive Liaison & Board Inquiries</span>
</div>
<span className="font-caption text-caption text-on-surface-variant">Senior Counsel</span>
</div>
</div>
{/*  SLA Bullet Box  */}
<div className="mt-6 p-4 rounded-xl bg-surface-container flex flex-col gap-2">
<div className="flex items-center gap-2 font-label-sm text-label-sm text-primary font-bold">
<span className="material-symbols-outlined text-[18px]">verified</span>
                Service Level Agreements (SLAs)
              </div>
<ul className="font-body-sm text-body-sm text-on-surface-variant flex flex-col gap-1.5 pl-5 list-disc">
<li>Immediate Crisis Hotline answer time: under 90 seconds.</li>
<li>Digital conflict check clearance: completed within 2 business hours.</li>
<li>Same-day urgent process serving dispatch across GTA, Ottawa, Vancouver, and NYC.</li>
</ul>
</div>
</div>
{/*  Regional Practice Hubs  */}
<div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-md">
<div className="flex items-center justify-between mb-4">
<h3 className="font-title-md text-title-md text-on-surface">Regional Practice Hubs</h3>
<span className="font-caption text-caption text-on-surface-variant">4 Locations</span>
</div>
<div className="flex flex-col gap-4">
{/*  Toronto HQ  */}
<div className="p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors flex gap-3.5">
<div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">corporate_fare</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-bold">Toronto HQ (Bay Street)</span>
<span className="px-2 py-0.5 rounded bg-primary text-on-primary font-caption text-caption">HQ</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">100 King Street West, Suite 5600, Toronto, ON M5X 1C9</span>
<span className="font-caption text-caption text-primary font-semibold mt-1">Specialty: Corporate Injunctions & Board Governance</span>
</div>
</div>
{/*  Ottawa  */}
<div className="p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors flex gap-3.5">
<div className="w-8 h-8 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">account_balance</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-bold">Ottawa (Parliament Hill)</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">150 Metcalfe Street, 14th Floor, Ottawa, ON K2P 1P1</span>
<span className="font-caption text-caption text-primary font-semibold mt-1">Specialty: Crown Agency Audits & Public Policy</span>
</div>
</div>
{/*  Vancouver  */}
<div className="p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors flex gap-3.5">
<div className="w-8 h-8 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">domain_add</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-bold">Vancouver (Burrard Street)</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">666 Burrard Street, Suite 2200, Vancouver, BC V6C 2X8</span>
<span className="font-caption text-caption text-primary font-semibold mt-1">Specialty: Pacific Cross-Border & Resource Sectors</span>
</div>
</div>
{/*  New York  */}
<div className="p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors flex gap-3.5">
<div className="w-8 h-8 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">public</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-bold">New York (Rockefeller Center)</span>
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-primary font-caption text-caption">US Liaison</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">45 Rockefeller Plaza, 20th Floor, New York, NY 10111</span>
<span className="font-caption text-caption text-primary font-semibold mt-1">Specialty: Cross-Border Arbitration & Escrow</span>
</div>
</div>
</div>
{/*  Virtual Security Note  */}
<div className="mt-4 pt-4 flex items-center justify-between text-on-surface-variant font-caption text-caption">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-secondary">encrypted</span>
                Encrypted Video Portals (Signal / PGP available)
              </span>
<a className="text-primary hover:underline font-semibold" href="#">Security Spec →</a>
</div>
</div>
</div>
</div>
</section>
{/*  Client Discretion & Legal Safeguards 4-Card Grid  */}
<section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 w-full relative z-10">
<div className="flex flex-col items-center text-center mb-12">
<span className="font-caption text-caption text-secondary font-bold uppercase tracking-wider mb-2">Institutional Confidence</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Client Discretion & Legal Safeguards</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-2">
          Every consultation is backed by multi-layered legal, procedural, and cryptographic safeguards designed to withstand adversarial subpoenas and regulatory scrutiny.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{/*  Safeguard 1  */}
<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary mb-4">
<span className="material-symbols-outlined text-[24px]">gavel</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-semibold mb-2">Solicitor-Client Privilege Protocol</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Inquiries initiated through this portal are insulated by HCC's in-house counsel, preserving common-interest privilege from the inception of exploratory discussions.
            </p>
</div>
<div className="mt-6 pt-4 flex items-center gap-1.5 font-label-sm text-label-sm text-primary">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span>Pre-Retainer Shield</span>
</div>
</div>
{/*  Safeguard 2  */}
<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary mb-4">
<span className="material-symbols-outlined text-[24px]">balance</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-semibold mb-2">Neutrality & Arm's Length Guarantee</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              We execute an independent, automated conflict verification matrix across all institutional clients to guarantee complete impartiality and zero conflicting retainers.
            </p>
</div>
<div className="mt-6 pt-4 flex items-center gap-1.5 font-label-sm text-label-sm text-secondary font-bold">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
<span>Conflict-Free Certification</span>
</div>
</div>
{/*  Safeguard 3  */}
<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary mb-4">
<span className="material-symbols-outlined text-[24px]">cloud_sync</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-semibold mb-2">ISO 27001 Sovereign Data Vault</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              All briefing briefs, audio depositions, and documentary exhibits are stored in SOC 2 Type II sovereign servers physically domiciled within North America.
            </p>
</div>
<div className="mt-6 pt-4 flex items-center gap-1.5 font-label-sm text-label-sm text-primary">
<span className="material-symbols-outlined text-[16px]">security</span>
<span>Encrypted At Rest & Transit</span>
</div>
</div>
{/*  Safeguard 4  */}
<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary mb-4">
<span className="material-symbols-outlined text-[24px]">verified_user</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-semibold mb-2">Whistleblower Shield & Escrow</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Anonymous intake protocols provide cryptographic whistleblower protections, secure drop repositories, and zero-knowledge evidence preservation guarantees.
            </p>
</div>
<div className="mt-6 pt-4 flex items-center gap-1.5 font-label-sm text-label-sm text-secondary font-bold">
<span className="material-symbols-outlined text-[16px]">vpn_key</span>
<span>Zero Knowledge Vault</span>
</div>
</div>
</div>
</section>
{/*  Visual Anchor: Senior Partner Advisory Team & Operations Center  */}
<section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 w-full relative z-10">
<div className="bg-surface-container-low rounded-3xl p-8 lg:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-7 flex flex-col gap-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest text-primary font-label-sm text-label-sm w-fit font-bold">
<span className="material-symbols-outlined text-[16px]">groups</span>
            Direct Executive Triage
          </div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Behind Your Consultation Brief</h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Your intake submission does not land in an administrative inbox. It is routed directly to the Managing Partner Desk, where certified investigative leaders and dispute resolution specialists convene in secure triage chambers to evaluate mandate viability.
          </p>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm font-bold text-primary">100%</span>
<span className="font-caption text-caption text-on-surface-variant">Confidentiality Guarantee</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm font-bold text-primary">&lt; 120m</span>
<span className="font-caption text-caption text-on-surface-variant">Priority Response SLA</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm font-bold text-primary">1,400+</span>
<span className="font-caption text-caption text-on-surface-variant">High-Stakes Matters Resolved</span>
</div>
</div>
</div>
<div className="lg:col-span-5 relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
<img className="w-full h-full object-cover" data-alt="A sophisticated corporate boardroom advisory meeting in an executive high-rise overlooking the Toronto skyline at dusk. Senior legal partners in formal tailored suits review confidential case dossiers on a frosted glass boardroom table with soft blue ambient interior lighting, warm mahogany accents, and sleek minimalist architectural lines." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC--gyJkrG1VNEWcbpInG3xGQCuMuLHLrEfUarErgBlxCaiyqnuNsF8LeZOkgH-nDzmDU5h0lYrXje8d4YCwZ4O0t3RJ5L9HAjKEh5qvJoH_b6UkFCMPERuGLgTnJoZrkltFDa24zASRaA8fMfWbSO9RkODOP_favvLcBX1_ycJVV_rDCtLsR6JPBpO8NNbxPqgj0dNDcb3mIYUZBzZEtcN9skxVKADXeQbns5kQZl7RE88bXJPL_kRtw"/>
</div>
{/*  Overlapping Mini-badge  */}
<div className="absolute -bottom-4 -left-4 bg-surface-container-lowest p-4 rounded-xl shadow-lg flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-fixed-variant">
<span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-bold">Toronto • Ottawa • Vancouver • NYC</span>
<span className="font-caption text-caption text-on-surface-variant">Cross-jurisdictional license verified</span>
</div>
</div>
</div>
</div>
</section>
{/*  Retainer Operations FAQ Accordion  */}
<section className="max-w-4xl mx-auto px-6 lg:px-12 py-16 w-full relative z-10">
<div className="text-center mb-10">
<span className="font-caption text-caption text-secondary font-bold uppercase tracking-wider">Protocol Clarity</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Consultation & Retainer FAQ</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Key operational insights regarding engagement criteria, privilege, and logistics.</p>
</div>
<div className="flex flex-col gap-4">
{/*  Accordion Item 1  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
<button className="w-full p-5 text-left flex items-center justify-between gap-4 font-title-md text-title-md text-on-surface hover:text-primary transition-colors" onClick={() => { /* const a = document.getElementById('faq-ans-1'); const i = document.getElementById('faq-icon-1'); a.classList.toggle('hidden'); i.classList.toggle('rotate-180'); */ }} type="button">
<span>How does HCC protect information prior to the formal execution of a retainer?</span>
<span className="material-symbols-outlined text-[20px] text-outline transition-transform duration-200" id="faq-icon-1">expand_more</span>
</button>
<div className="px-5 pb-5 pt-1 text-on-surface-variant font-body-sm text-body-sm leading-relaxed" id="faq-ans-1">
            All initial disclosures made through our secure intake protocol are governed under prospective client confidentiality and legal work-product standards. HCC legal counsel serves as intake gatekeeper, meaning all communications are insulated under preliminary solicitor-client privilege protections until a formal mandate agreement or referral is established.
          </div>
</div>
{/*  Accordion Item 2  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
<button className="w-full p-5 text-left flex items-center justify-between gap-4 font-title-md text-title-md text-on-surface hover:text-primary transition-colors" onClick={() => { /* const a = document.getElementById('faq-ans-2'); const i = document.getElementById('faq-icon-2'); a.classList.toggle('hidden'); i.classList.toggle('rotate-180'); */ }} type="button">
<span>What is the standard conflict check turnaround time?</span>
<span className="material-symbols-outlined text-[20px] text-outline transition-transform duration-200" id="faq-icon-2">expand_more</span>
</button>
<div className="hidden px-5 pb-5 pt-1 text-on-surface-variant font-body-sm text-body-sm leading-relaxed" id="faq-ans-2">
            Our autonomous conflict check engine indexes prospective adverse parties, affiliated entities, and witnesses against our active and historical docket in real time. Standard clearance takes between 1 to 3 hours. For emergency retainers requiring immediate injunction support, clearance is expedited by our Compliance Director within 30 minutes.
          </div>
</div>
{/*  Accordion Item 3  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
<button className="w-full p-5 text-left flex items-center justify-between gap-4 font-title-md text-title-md text-on-surface hover:text-primary transition-colors" onClick={() => { /* const a = document.getElementById('faq-ans-3'); const i = document.getElementById('faq-icon-3'); a.classList.toggle('hidden'); i.classList.toggle('rotate-180'); */ }} type="button">
<span>How are professional retainer fees and forensic disbursements structured?</span>
<span className="material-symbols-outlined text-[20px] text-outline transition-transform duration-200" id="faq-icon-3">expand_more</span>
</button>
<div className="hidden px-5 pb-5 pt-1 text-on-surface-variant font-body-sm text-body-sm leading-relaxed" id="faq-ans-3">
            Engagements are structured based on scope: fixed-fee phased retainers for workplace investigations and regulatory policy drafts; blended senior counsel hourly rates for dispute mediation; or standby emergency retainers for rapid response process serving and crisis containment. All funds are deposited into segregated institutional trust accounts in accordance with Canadian Law Society and provincial statutory requirements.
          </div>
</div>
{/*  Accordion Item 4  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
<button className="w-full p-5 text-left flex items-center justify-between gap-4 font-title-md text-title-md text-on-surface hover:text-primary transition-colors" onClick={() => { /* const a = document.getElementById('faq-ans-4'); const i = document.getElementById('faq-icon-4'); a.classList.toggle('hidden'); i.classList.toggle('rotate-180'); */ }} type="button">
<span>Can HCC mobilize cross-border investigations across Canada and the United States?</span>
<span className="material-symbols-outlined text-[20px] text-outline transition-transform duration-200" id="faq-icon-4">expand_more</span>
</button>
<div className="hidden px-5 pb-5 pt-1 text-on-surface-variant font-body-sm text-body-sm leading-relaxed" id="faq-ans-4">
            Yes. Through our Toronto headquarters and New York City liaison hub, our licensed investigative teams regularly execute multi-jurisdictional mandates involving extraterritorial subpoena compliance, asset tracking, cross-border employee mobility reviews, and international commercial arbitration support.
          </div>
</div>
</div>
</section>
{/*  Bottom Persistent Call-to-Action Bar  */}
<section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 w-full relative z-10">
<div className="p-8 sm:p-12 rounded-3xl bg-surface-container-low shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
<div className="flex flex-col gap-2 max-w-xl text-center lg:text-left">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">Direct Access Escalation</span>
<h3 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Need Immediate Partner Intervention?</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
            Skip intake triage if you have an active court order deadline or urgent whistleblower report. Speak directly with on-duty counsel.
          </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all" href="tel:+14033594972">
<span className="material-symbols-outlined text-[18px]">call</span>
<span>Call +1 (403) 359-4972</span>
</a>
<a className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-surface-container-lowest hover:bg-surface text-on-surface font-label-md text-label-md flex items-center justify-center gap-2 shadow-sm hover:shadow transition-all" href="#" onClick={() => { /* alert('Instant encrypted scheduling portal launched. A calendar invitation has been generated.'); */ }}>
<span className="material-symbols-outlined text-[18px] text-secondary">calendar_today</span>
<span>Book 30-Min Scoping Call</span>
</a>
</div>
</div>
</section>
</div>
</div>

      </main>
    </>
  )
}
