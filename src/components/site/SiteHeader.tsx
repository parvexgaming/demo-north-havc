import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business } from "@/config/business";
import logo from "@/assets/northwest-logo.png.asset.json";

export const navItems = [
  { label: "Home", hash: "top" },
  { label: "HVAC Services", hash: "hvac" },
  { label: "Indoor Air Quality", hash: "air-quality" },
  { label: "Excavation", hash: "excavation" },
  { label: "About Us", hash: "about" },
  { label: "Contact", hash: "contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-ink text-ink-foreground text-xs">
        <div className="container-site flex h-9 items-center justify-between gap-4">
          <span className="truncate">Serving North Austin &amp; the Texas Hill Country</span>
          <a href={business.phoneHref} className="flex shrink-0 items-center gap-1.5 font-semibold hover:text-accent">
            <Phone className="size-3.5" aria-hidden /> {business.phone}
          </a>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur-sm">
        <div className="container-site flex h-20 items-center justify-between gap-6">
          <Link to="/" hash="top" aria-label={`${business.name} home`} className="shrink-0">
            <img src={logo.url} alt={`${business.name} logo`} width={504} height={188} className="h-14 w-auto" />
          </Link>
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-6 text-sm font-semibold">
              {navItems.map((n) => (
                <li key={n.hash}>
                  <Link to="/" hash={n.hash} className="text-foreground/80 hover:text-primary">{n.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <Button asChild variant="navy" size="lg">
              <Link to="/" hash="contact">Request an Estimate</Link>
            </Button>
          </div>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-sm border border-border lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {open && (
          <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-card lg:hidden">
            <ul className="container-site flex flex-col py-3">
              {navItems.map((n) => (
                <li key={n.hash}>
                  <Link to="/" hash={n.hash} onClick={() => setOpen(false)} className="block py-3 font-semibold">{n.label}</Link>
                </li>
              ))}
              <li className="flex flex-col gap-2 pt-3">
                <Button asChild variant="navy" size="lg"><Link to="/" hash="contact" onClick={() => setOpen(false)}>Request an Estimate</Link></Button>
                <Button asChild variant="outlineDark" size="lg"><a href={business.phoneHref}>Call {business.phone}</a></Button>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
