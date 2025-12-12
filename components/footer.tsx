"use client";

import Link from "next/link";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { MagneticButton } from "@/components/magnetic-button";
import { LogoIcon } from "@/components/logo-icon";
import { ArrowUpRight, Mail, Twitter, Linkedin, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const footerLinks = {
  company: [
    { label: "Work", href: "#work" },
    { label: "Whitelabel", href: "#" },
    {
      label: "Contact",
      href: "https://cal.com/aiapps.dev/30min",
      external: true,
    },
  ],
  resources: [
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQs", href: "#faq" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    setTimeout(() => {
      window.location.href = "https://cal.com/aiapps.dev/30min";
    }, 500);
  };

  return (
    <footer className="relative bg-card border-t border-border/50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-accent/5 blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Brand section */}
          <RevealOnScroll direction="left">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-black border border-white/10 flex items-center justify-center">
                  <LogoIcon className="w-6 h-6" />
                </div>
                {/* UPDATED FULL NAME */}
                <span className="text-lg font-black text-foreground tracking-tight">
                  AI App Labs by cgramm.org
                </span>
              </Link>

              <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
                The partner for founders building products with AI. Design,
                build, and launch products that scale — fast.
              </p>

              {/* Newsletter signup with Redirect */}
              <div className="mb-8">
                <p className="text-sm text-muted-foreground mb-3">
                  Subscribe to stay updated.
                </p>
                <form onSubmit={handleSignUp} className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-4 py-3 rounded-xl bg-background border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors"
                  />
                  <MagneticButton strength={15}>
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="rounded-xl bg-gradient-to-r from-accent to-orange-500 px-6 font-semibold"
                    >
                      {isLoading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        "Sign Up"
                      )}
                    </Button>
                  </MagneticButton>
                </form>
              </div>

              {/* Social links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <MagneticButton key={index} strength={15}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      className="group p-3 rounded-xl bg-background border border-border/50 text-muted-foreground hover:text-accent hover:border-accent/30 transition-all duration-300"
                    >
                      <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                    </a>
                  </MagneticButton>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Links sections */}
          <RevealOnScroll direction="right">
            <div className="grid grid-cols-2 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="group inline-flex items-center gap-1 text-muted-foreground hover:text-accent transition-colors"
                        >
                          {link.label}
                          <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>

        {/* Bottom bar */}
        <RevealOnScroll direction="up">
          <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 AI App Labs by cgramm.org. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </footer>
  );
}
