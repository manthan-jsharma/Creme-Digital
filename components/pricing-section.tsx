"use client";

import Link from "next/link";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { TiltCard } from "@/components/tilt-card";
import { MagneticButton } from "@/components/magnetic-button";
import { AnimatedGradientText } from "@/components/animated-gradient";
import { SplitText } from "@/components/split-text";
import { cn } from "@/lib/utils";
import { pricingPlans } from "@/lib/data";

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-32 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <RevealOnScroll direction="down">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6">
              <SplitText
                text="THE TIERED SELECTION"
                animation="elastic"
                stagger={50}
              />
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Anchor high, deliver higher. Choose the asset class that fits your
              ambition.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
          {pricingPlans.map((plan, index) => (
            <RevealOnScroll
              key={plan.id}
              delay={index * 150}
              direction="up"
              className={cn(plan.popular && "md:-mt-8 md:-mb-8 z-10")}
            >
              <TiltCard maxTilt={3}>
                <div
                  className={cn(
                    "group relative h-full p-8 md:p-10 rounded-3xl border transition-all duration-500",
                    plan.popular
                      ? "bg-card border-accent/50 shadow-[0_0_50px_-15px_rgba(249,115,22,0.2)] scale-105"
                      : "bg-card/30 border-border/50 hover:bg-card/50"
                  )}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="px-6 py-2 rounded-full bg-gradient-to-r from-accent to-orange-500 text-white text-sm font-bold flex items-center gap-2 shadow-lg shadow-accent/20">
                        <Sparkles className="w-4 h-4 animate-pulse" /> MOST
                        POPULAR
                      </div>
                    </div>
                  )}

                  <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
                  <div
                    className={cn(
                      "text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r w-fit mb-6 uppercase tracking-wider",
                      plan.gradient
                    )}
                  >
                    {plan.subtitle}
                  </div>
                  <p className="text-sm text-muted-foreground mb-8 min-h-[40px]">
                    {plan.description}
                  </p>

                  <div className="mb-8 p-4 rounded-xl bg-background/50 border border-border/50">
                    <span className="text-4xl md:text-5xl font-black tracking-tighter block">
                      {plan.price}
                    </span>
                    <span className="text-xs text-muted-foreground uppercase font-bold tracking-wide">
                      {plan.period}
                    </span>
                  </div>

                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-muted-foreground group/li"
                      >
                        <div
                          className={cn(
                            "p-1 rounded-full bg-background border border-border/50 group-hover/li:border-accent/50 transition-colors",
                            plan.popular && "border-accent/30"
                          )}
                        >
                          <Check
                            className={cn(
                              "w-3 h-3",
                              plan.popular ? "text-accent" : "text-foreground"
                            )}
                          />
                        </div>
                        <span className="group-hover/li:text-foreground transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <MagneticButton strength={20} className="w-full">
                    <Button
                      asChild
                      className={cn(
                        "w-full rounded-xl py-7 font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300",
                        plan.popular
                          ? "bg-gradient-to-r from-accent to-orange-600 text-white hover:scale-[1.02]"
                          : "bg-background border-2 border-border/50 hover:border-accent/50 text-foreground hover:bg-accent/5"
                      )}
                    >
                      <Link
                        href="https://cal.com/aiapps.dev/30min"
                        target="_blank"
                      >
                        {plan.cta} <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </Button>
                  </MagneticButton>
                </div>
              </TiltCard>
            </RevealOnScroll>
          ))}
        </div>

        {/* Bonus Section */}
        <RevealOnScroll delay={400} direction="up">
          <div className="mt-24 max-w-4xl mx-auto p-1 rounded-3xl bg-gradient-to-r from-accent/20 via-orange-500/20 to-accent/20">
            <div className="bg-background rounded-[22px] p-8 md:p-12 text-center">
              <h3 className="text-3xl font-black mb-6">⚡ Efficiency Reward</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Sign up the same day you receive your proposal to unlock:
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { title: "$1,000 Discount", desc: "Instant saving" },
                  { title: "+30 Posts", desc: "Done-for-you content" },
                  { title: "2 Landing Pages", desc: "For A/B testing" },
                ].map((bonus, i) => (
                  <div
                    key={i}
                    className="bg-secondary/20 p-6 rounded-2xl border border-border/50 hover:border-accent/30 transition-colors"
                  >
                    <div className="text-xl font-bold text-foreground mb-1">
                      {bonus.title}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {bonus.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
