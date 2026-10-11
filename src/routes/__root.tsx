import { createRootRoute, Outlet, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { WhatsAppWidget } from '../components/WhatsAppWidget'


export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="bg-background font-body-md text-on-surface antialiased min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 h-10 flex items-center justify-between font-label-sm text-label-sm">
            <div className="flex items-center gap-space-lg">
              <span className="flex items-center gap-space-xs text-secondary font-semibold">
                <span className="w-2 h-2 rounded-full bg-secondary-fixed-dim animate-pulse"></span>
                Confidential Advisory Hotline
              </span>
              <span className="hidden md:inline text-on-surface-variant">Phone: +1 (403) 359-4972</span>
              <span className="hidden sm:inline text-on-surface-variant">Email: consult@holisticconcept.com</span>
            </div>
            <div className="flex items-center gap-space-md">
              <span className="inline-flex items-center px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-caption text-caption">
                ISO 27001 & Ethics Compliant
              </span>
            </div>
          </div>
        </div>
        <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-space-lg">
          <Link className="flex items-center gap-space-sm shrink-0" to="/">
            <img alt="Holistic Logo" className="h-10 w-auto object-contain rounded-md" src="/logo.jpg" onError={(e) => e.currentTarget.style.display = 'none'} />
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-primary leading-tight font-bold tracking-tight">Holistic Concept Consulting</span>
              <span className="font-caption text-caption text-on-surface-variant tracking-wider uppercase">Strategic & Ethical Solutions</span>
            </div>
          </Link>
          <nav className="hidden xl:flex items-center gap-space-sm">
            <Link className="px-space-sm py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors [&.active]:bg-surface-container [&.active]:text-primary [&.active]:font-bold" to="/">Home</Link>
            <Link className="px-space-sm py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors [&.active]:bg-surface-container [&.active]:text-primary [&.active]:font-bold" to="/about">About Us</Link>
            <div className="relative group">
              <span className="px-space-sm py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface inline-flex items-center gap-1 transition-colors cursor-pointer">
                Services<span className="material-symbols-outlined text-[16px]">expand_more</span>
              </span>
              <div className="absolute top-full -left-12 w-[340px] pt-2 hidden group-hover:block transition-all z-50">
                <div className="bg-surface-container-lowest rounded-2xl shadow-[0_16px_36px_-8px_rgba(15,23,42,0.15)] border border-outline-variant/40 p-2.5 flex flex-col gap-0.5">
                  <Link className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors flex items-center gap-2.5" to="/services/investigations">
                    <span className="material-symbols-outlined text-[18px] text-primary">policy</span>
                    <span>Investigations</span>
                  </Link>
                  <Link className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors flex items-center gap-2.5" to="/services/negotiation-process-serving" hash="negotiation">
                    <span className="material-symbols-outlined text-[18px] text-secondary">handshake</span>
                    <span>Negotiation</span>
                  </Link>
                  <Link className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors flex items-center gap-2.5" to="/services/policies-accessibility" hash="draft-review-policies">
                    <span className="material-symbols-outlined text-[18px] text-primary">edit_document</span>
                    <span>Draft and review policies</span>
                  </Link>
                  <Link className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors flex items-center gap-2.5" to="/services/policies-accessibility" hash="compliance-management">
                    <span className="material-symbols-outlined text-[18px] text-secondary">verified_user</span>
                    <span>Compliance Management</span>
                  </Link>
                  <Link className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors flex items-center gap-2.5" to="/services/policies-accessibility" hash="accessibility-plan">
                    <span className="material-symbols-outlined text-[18px] text-primary">accessibility_new</span>
                    <span>Accessibility plan</span>
                  </Link>
                  <Link className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors flex items-center gap-2.5" to="/services/negotiation-process-serving" hash="process-server">
                    <span className="material-symbols-outlined text-[18px] text-secondary">mark_email_read</span>
                    <span>Process server</span>
                  </Link>
                  <Link className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors flex items-center gap-2.5" to="/services/hr-strategy-training" hash="human-resources">
                    <span className="material-symbols-outlined text-[18px] text-primary">groups_3</span>
                    <span>Human resources</span>
                  </Link>
                  <Link className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors flex items-center gap-2.5" to="/services/hr-strategy-training" hash="business-strategy-training">
                    <span className="material-symbols-outlined text-[18px] text-secondary">school</span>
                    <span>Business strategy training</span>
                  </Link>
                  <Link className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors flex items-center gap-2.5" to="/services/hr-strategy-training" hash="advisory-liaison">
                    <span className="material-symbols-outlined text-[18px] text-primary">hub</span>
                    <span>Advisory and liaison services</span>
                  </Link>
                </div>
              </div>
            </div>
            <Link className="px-space-sm py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" to="/sectors">Sectors</Link>
            <Link className="px-space-sm py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" to="/insights">Insights</Link>
            <Link className="px-space-sm py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" to="/contact">Contact</Link>
          </nav>
          <div className="flex items-center gap-space-md">
            <Link className="hidden sm:flex px-5 py-2.5 rounded-full font-label-md text-label-md bg-gradient-to-r from-primary to-primary-container text-on-primary shadow-[0_4px_14px_rgba(0,97,148,0.25)] hover:shadow-[0_4px_18px_rgba(65,105,0,0.35)] transition-all items-center gap-space-xs" to="/contact">
              <span>Request Consultation</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="xl:hidden p-2 text-on-surface hover:bg-surface-container rounded-lg">
              <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary hidden sm:flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-[120px] left-0 right-0 bg-surface border-t border-outline-variant shadow-lg max-h-[calc(100vh-120px)] overflow-y-auto">
            <nav className="flex flex-col p-4 gap-2">
              <Link onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container" to="/">Home</Link>
              <Link onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container" to="/about">About Us</Link>
              
              <div className="px-4 py-2 font-label-md text-label-md font-bold text-on-surface mt-2 flex items-center justify-between">
                <span>Services</span>
                <span className="font-caption text-caption text-secondary font-semibold">9 Disciplines</span>
              </div>
              <div className="flex flex-col pl-3 border-l-2 border-surface-container ml-4 gap-1">
                  <Link onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container flex items-center gap-2" to="/services/investigations">
                    <span className="material-symbols-outlined text-[16px] text-primary">policy</span>
                    <span>Investigations</span>
                  </Link>
                  <Link onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container flex items-center gap-2" to="/services/negotiation-process-serving" hash="negotiation">
                    <span className="material-symbols-outlined text-[16px] text-secondary">handshake</span>
                    <span>Negotiation</span>
                  </Link>
                  <Link onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container flex items-center gap-2" to="/services/policies-accessibility" hash="draft-review-policies">
                    <span className="material-symbols-outlined text-[16px] text-primary">edit_document</span>
                    <span>Draft and review policies</span>
                  </Link>
                  <Link onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container flex items-center gap-2" to="/services/policies-accessibility" hash="compliance-management">
                    <span className="material-symbols-outlined text-[16px] text-secondary">verified_user</span>
                    <span>Compliance Management</span>
                  </Link>
                  <Link onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container flex items-center gap-2" to="/services/policies-accessibility" hash="accessibility-plan">
                    <span className="material-symbols-outlined text-[16px] text-primary">accessibility_new</span>
                    <span>Accessibility plan</span>
                  </Link>
                  <Link onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container flex items-center gap-2" to="/services/negotiation-process-serving" hash="process-server">
                    <span className="material-symbols-outlined text-[16px] text-secondary">mark_email_read</span>
                    <span>Process server</span>
                  </Link>
                  <Link onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container flex items-center gap-2" to="/services/hr-strategy-training" hash="human-resources">
                    <span className="material-symbols-outlined text-[16px] text-primary">groups_3</span>
                    <span>Human resources</span>
                  </Link>
                  <Link onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container flex items-center gap-2" to="/services/hr-strategy-training" hash="business-strategy-training">
                    <span className="material-symbols-outlined text-[16px] text-secondary">school</span>
                    <span>Business strategy training</span>
                  </Link>
                  <Link onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container flex items-center gap-2" to="/services/hr-strategy-training" hash="advisory-liaison">
                    <span className="material-symbols-outlined text-[16px] text-primary">hub</span>
                    <span>Advisory and liaison services</span>
                  </Link>
              </div>

              <Link onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container mt-2" to="/sectors">Sectors</Link>
              <Link onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container" to="/insights">Insights</Link>
              <Link onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container" to="/contact">Contact</Link>
              
              <Link onClick={() => setMobileMenuOpen(false)} className="mt-4 px-5 py-3 rounded-full font-label-md text-label-md bg-primary text-on-primary flex items-center justify-center gap-space-xs" to="/contact">
                <span>Request Consultation</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1 w-full pt-32 bg-background flex flex-col">
        <Outlet />
      </main>

      <footer className="w-full bg-[#0f172a] text-slate-300 pt-space-xl pb-space-lg mt-auto border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl pb-space-xl border-b border-slate-800">
            <div className="lg:col-span-2 flex flex-col gap-space-md">
              <div className="flex items-center gap-space-sm">
                <img alt="Holistic Logo" className="h-12 w-auto object-contain rounded-md" src="/logo.jpg" onError={(e) => e.currentTarget.style.display = 'none'} />
                <span className="font-headline-sm text-headline-sm text-white font-bold">Holistic Concept Consulting</span>
              </div>
              <p className="font-body-sm text-body-sm text-slate-400 max-w-md">Trusted and recognized for delivering ethical, strategic, and practical solutions across complex corporate landscapes, public sector mandates, and executive transitions.</p>
              <div className="flex items-center gap-space-sm pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-label-sm text-label-sm"><span className="w-2 h-2 rounded-full bg-secondary"></span>Verified High-Trust Advisory</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-label-sm text-label-sm"><span className="material-symbols-outlined text-[14px]">verified</span>ISO 9001 Aligned</span>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-white font-bold">Services Provided</span>
              <div className="flex flex-col gap-2 font-body-sm text-body-sm text-slate-400">
                <Link className="hover:text-white transition-colors" to="/services/investigations">Investigations</Link>
                <Link className="hover:text-white transition-colors" to="/services/negotiation-process-serving" hash="negotiation">Negotiation</Link>
                <Link className="hover:text-white transition-colors" to="/services/policies-accessibility" hash="draft-review-policies">Draft and review policies</Link>
                <Link className="hover:text-white transition-colors" to="/services/policies-accessibility" hash="compliance-management">Compliance Management</Link>
                <Link className="hover:text-white transition-colors" to="/services/policies-accessibility" hash="accessibility-plan">Accessibility plan</Link>
                <Link className="hover:text-white transition-colors" to="/services/negotiation-process-serving" hash="process-server">Process server</Link>
                <Link className="hover:text-white transition-colors" to="/services/hr-strategy-training" hash="human-resources">Human resources</Link>
                <Link className="hover:text-white transition-colors" to="/services/hr-strategy-training" hash="business-strategy-training">Business strategy training</Link>
                <Link className="hover:text-white transition-colors" to="/services/hr-strategy-training" hash="advisory-liaison">Advisory and liaison services</Link>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-white">Governance & Sectors</span>
              <div className="flex flex-col gap-2 font-body-sm text-body-sm text-slate-400">
                <Link className="hover:text-white transition-colors" to="/sectors">Public Sector Agencies</Link>
                <Link className="hover:text-white transition-colors" to="/sectors">Private Enterprise</Link>
                <Link className="hover:text-white transition-colors" to="/services/hr-strategy-training">Governance Training</Link>
                <a className="hover:text-white transition-colors" href="/#">Executive Advisory</a>
                <Link className="hover:text-white transition-colors" to="/insights">ESG Strategic Insights</Link>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-white">Legal & Compliance</span>
              <div className="flex flex-col gap-2 font-body-sm text-body-sm text-slate-400">
                <Link className="hover:text-white transition-colors" to="/contact">Confidential Escrow</Link>
                <Link className="hover:text-white transition-colors" to="/contact">Privacy Framework</Link>
                <Link className="hover:text-white transition-colors" to="/contact">Whistleblower Protocol</Link>
                <Link className="hover:text-white transition-colors" to="/contact">Terms of Retainer</Link>
                <Link className="hover:text-white transition-colors" to="/contact">Security & Data Ethics</Link>
              </div>
            </div>
          </div>
          <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md text-slate-500 font-caption text-caption">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-[16px] text-primary">lock</span>
              <span>All strategic dialogues and disclosures are protected under strict client-advisory confidentiality agreements.</span>
            </div>
            <div className="flex items-center gap-space-lg">
              <span>© 2026 Holistic Concept Consulting. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
      <WhatsAppWidget />
    </div>
  )
}
