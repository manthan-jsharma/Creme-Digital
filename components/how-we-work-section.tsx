"use client";

import { Rocket, Repeat, DollarSign } from "lucide-react";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { TiltCard } from "@/components/tilt-card";
import { AnimatedGradientText } from "@/components/animated-gradient";
import { SplitText } from "@/components/split-text";
import { cn } from "@/lib/utils";
import { processSteps } from "@/lib/data";

const icons = [Rocket, Repeat, DollarSign];

export function HowWeWorkSection() {
  return (
    <section className="py-32 bg-card border-y border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <RevealOnScroll direction="down">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 rounded-full border border-border/50 text-sm text-muted-foreground mb-6 backdrop-blur-sm bg-background/50">
              THE PROCESS
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-6">
              <SplitText
                text="Most agencies take months."
                className="block text-muted-foreground"
                animation="fadeUp"
              />
              <div className="mt-2">
                We take{" "}
                <AnimatedGradientText className="text-5xl md:text-7xl">
                  336 Hours.
                </AnimatedGradientText>
              </div>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We simplify complex AI builds into a savage 14-day sprint.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {processSteps.map((step, index) => {
            const Icon = icons[index];
            return (
              <RevealOnScroll key={step.id} delay={index * 150} direction="up">
                <TiltCard maxTilt={8}>
                  <div className="h-full p-8 md:p-10 rounded-3xl bg-background border border-border/50 relative overflow-hidden group hover:border-accent/40 transition-all duration-500">
                    {/* Background number */}
                    <div className="absolute -right-4 -top-4 text-9xl font-black text-foreground/5 group-hover:text-accent/10 transition-colors duration-500 select-none">
                      {index + 1}
                    </div>

                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500",
                        step.gradient
                      )}
                    />

                    <div className="relative z-10 flex flex-col h-full">
                      <div
                        className={cn(
                          "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500",
                          step.gradient
                        )}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <div className="text-sm font-bold text-accent mb-2 uppercase tracking-wider">
                        {step.subtitle}
                      </div>
                      <h3 className="text-3xl font-black mb-4 group-hover:translate-x-1 transition-transform duration-300">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
