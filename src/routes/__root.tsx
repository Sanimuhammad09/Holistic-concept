import { createRootRoute, Outlet, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
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
              <span className="hidden md:inline text-on-surface-variant">Phone: 1-800-HCC-STRAT</span>
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
            <img alt="Holistic Logo" className="h-8 w-auto object-contain" src="/logo.png" onError={(e) => e.currentTarget.style.display = 'none'} />
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
              <div className="absolute top-full left-0 w-72 pt-2 hidden group-hover:block transition-all">
                <div className="bg-surface-container-lowest rounded-xl shadow-[0_12px_30px_-8px_rgba(15,23,42,0.1)] p-space-sm flex flex-col gap-1">
                  <Link className="px-space-sm py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" to="/services/investigations">Investigations & Forensic Review</Link>
                  <Link className="px-space-sm py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" to="/services/negotiation-process-serving">Strategic Negotiation</Link>
                  <Link className="px-space-sm py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" to="/services/policies-accessibility">Policies & Regulatory Compliance</Link>
                  <Link className="px-space-sm py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" to="/services/policies-accessibility">Accessibility Standards (AODA/ADA)</Link>
                  <Link className="px-space-sm py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" to="/services/negotiation-process-serving">Specialized Process Serving</Link>
                  <Link className="px-space-sm py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" to="/services/hr-strategy-training">Strategic HR & People Risk</Link>
                  <Link className="px-space-sm py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" to="/services/hr-strategy-training">Executive & Governance Training</Link>
                  <Link className="px-space-sm py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" to="/executive-zenith">Boardroom Strategic Advisory</Link>
                </div>
              </div>
            </div>
            <Link className="px-space-sm py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" to="/">Sectors</Link>
            <Link className="px-space-sm py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" to="/">Insights</Link>
            <Link className="px-space-sm py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" to="/">Contact</Link>
          </nav>
          <div className="flex items-center gap-space-md">
            <Link className="px-5 py-2.5 rounded-full font-label-md text-label-md bg-gradient-to-r from-primary to-primary-container text-on-primary shadow-[0_4px_14px_rgba(0,97,148,0.25)] hover:shadow-[0_4px_18px_rgba(65,105,0,0.35)] transition-all flex items-center gap-space-xs" to="/">
              <span>Request Consultation</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full pt-32 bg-background flex flex-col">
        <Outlet />
      </main>

      <footer className="w-full bg-surface-container-low pt-space-xl pb-space-lg shadow-[0_-1px_12px_rgba(0,0,0,0.03)] mt-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl pb-space-xl">
            <div className="lg:col-span-2 flex flex-col gap-space-md">
              <div className="flex items-center gap-space-sm">
                <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                  <span className="material-symbols-outlined text-[18px]">shield</span>
                </div>
                <span className="font-headline-sm text-headline-sm text-primary font-bold">Holistic Concept Consulting</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">Trusted and recognized for delivering ethical, strategic, and practical solutions across complex corporate landscapes, public sector mandates, and executive transitions.</p>
              <div className="flex items-center gap-space-sm pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed-variant font-label-sm text-label-sm"><span className="w-2 h-2 rounded-full bg-secondary"></span>Verified High-Trust Advisory</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm"><span className="material-symbols-outlined text-[14px]">verified</span>ISO 9001 Aligned</span>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-on-surface">Core Services</span>
              <div className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                <Link className="hover:text-primary transition-colors" to="/services/investigations">Investigations & Audit</Link>
                <Link className="hover:text-primary transition-colors" to="/services/negotiation-process-serving">Strategic Negotiation</Link>
                <Link className="hover:text-primary transition-colors" to="/services/policies-accessibility">Policy Architecture</Link>
                <Link className="hover:text-primary transition-colors" to="/services/policies-accessibility">Accessibility (AODA/ADA)</Link>
                <Link className="hover:text-primary transition-colors" to="/services/negotiation-process-serving">Process Serving Unit</Link>
                <Link className="hover:text-primary transition-colors" to="/services/hr-strategy-training">HR & People Risk</Link>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-on-surface">Governance & Sectors</span>
              <div className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                <Link className="hover:text-primary transition-colors" to="/">Public Sector Agencies</Link>
                <Link className="hover:text-primary transition-colors" to="/">Private Enterprise</Link>
                <Link className="hover:text-primary transition-colors" to="/services/hr-strategy-training">Governance Training</Link>
                <Link className="hover:text-primary transition-colors" to="/executive-zenith">Executive Advisory</Link>
                <Link className="hover:text-primary transition-colors" to="/">ESG Strategic Insights</Link>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-on-surface">Legal & Compliance</span>
              <div className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                <Link className="hover:text-primary transition-colors" to="/">Confidential Escrow</Link>
                <Link className="hover:text-primary transition-colors" to="/">Privacy Framework</Link>
                <Link className="hover:text-primary transition-colors" to="/">Whistleblower Protocol</Link>
                <Link className="hover:text-primary transition-colors" to="/">Terms of Retainer</Link>
                <Link className="hover:text-primary transition-colors" to="/">Security & Data Ethics</Link>
              </div>
            </div>
          </div>
          <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md text-on-surface-variant font-caption text-caption">
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
    </div>
  )
}
