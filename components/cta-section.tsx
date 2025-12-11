"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { MagneticButton } from "@/components/magnetic-button";
import { AnimatedGradientText } from "@/components/animated-gradient";
import { SplitText } from "@/components/split-text";

export function CTASection() {
  return (
    <section className="py-40 bg-background relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <RevealOnScroll direction="up">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-12 leading-[0.9] tracking-tighter">
            If you want a website, <br />
            <span className="text-muted-foreground text-4xl md:text-6xl lg:text-7xl">
              hire an agency.
            </span>{" "}
            <br /> <br />
            If you want a{" "}
            <AnimatedGradientText>$3M Asset,</AnimatedGradientText> <br />
            <SplitText text="hire Founders." animation="elastic" delay={500} />
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={200} direction="up">
          <div className="flex justify-center mt-16">
            <MagneticButton strength={50}>
              <Button
                asChild
                size="lg"
                className="h-auto py-8 px-12 text-2xl md:text-3xl font-black rounded-full bg-foreground text-background hover:bg-accent hover:text-white hover:scale-105 transition-all shadow-[0_0_60px_-15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_80px_-10px_rgba(249,115,22,0.5)]"
              >
                <Link href="https://cal.com/aiapps.dev/30min" target="_blank">
                  <span className="flex items-center gap-4">
                    REPLY "BUILD" TO BOOK
                    <ArrowRight className="w-8 h-8" />
                  </span>
                </Link>
              </Button>
            </MagneticButton>
          </div>
          <p className="mt-12 text-sm text-muted-foreground tracking-widest uppercase font-semibold opacity-60">
            Copyright 2025. Standard Build Agreement. Confidentiality Assured.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
