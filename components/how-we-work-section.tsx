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
    <section className="py-20 md:py-32 bg-card border-y border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <RevealOnScroll direction="down">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-block px-4 py-2 rounded-full border border-border/50 text-xs md:text-sm text-muted-foreground mb-6 backdrop-blur-sm bg-background/50">
              THE PROCESS
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-6">
              {/* Line 1 Group */}
              <span className="inline-block">
                <SplitText
                  text="Most agencies"
                  className="text-muted-foreground"
                  animation="fadeUp"
                />
              </span>

              {/* Force Break on Small Mobile */}
              <br className="block sm:hidden" />
              <span className="hidden sm:inline-block">&nbsp;</span>

              {/* Line 2 Group */}
              <span className="inline-block">
                <SplitText
                  text="take months."
                  className="text-muted-foreground"
                  animation="fadeUp"
                  delay={200}
                />
              </span>

              <div className="mt-2 md:mt-4">
                <span className="inline-block">We take</span>{" "}
                <AnimatedGradientText className="text-5xl md:text-7xl inline-block">
                  336
                </AnimatedGradientText>
                {/* Force Break on Small Mobile before "Hours" */}
                <br className="block sm:hidden" />
                <span className="hidden sm:inline-block">&nbsp;</span>
                <AnimatedGradientText className="text-5xl md:text-7xl inline-block">
                  Hours.
                </AnimatedGradientText>
              </div>
            </h2>

            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              We simplify complex AI builds into a savage 14-day sprint.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {processSteps.map((step, index) => {
            const Icon = icons[index];
            return (
              <RevealOnScroll key={step.id} delay={index * 150} direction="up">
                <TiltCard maxTilt={8}>
                  <div className="h-full p-6 md:p-10 rounded-3xl bg-background border border-border/50 relative overflow-hidden group hover:border-accent/40 transition-all duration-500">
                    <div className="absolute -right-4 -top-4 text-8xl md:text-9xl font-black text-foreground/5 group-hover:text-accent/10 transition-colors duration-500 select-none">
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
                          "w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6 md:mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500",
                          step.gradient
                        )}
                      >
                        <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>

                      <div className="text-xs md:text-sm font-bold text-accent mb-2 uppercase tracking-wider">
                        {step.subtitle}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black mb-4 group-hover:translate-x-1 transition-transform duration-300">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
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
