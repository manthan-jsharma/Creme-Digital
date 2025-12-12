"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useCounter } from "@/hooks/use-counter";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { TiltCard } from "@/components/tilt-card";
import { AnimatedGradientText } from "@/components/animated-gradient";
import { SplitText } from "@/components/split-text";
import { GradientBlob } from "@/components/gradient-blob";
import { Card3D } from "@/components/3d-card";
import { FloatingElement } from "@/components/floating-elements";
import { useRef, useState, useEffect } from "react";
import {
  CheckCircle,
  Crown,
  ArrowRight,
  LayoutDashboard,
  Settings2,
  MousePointerClick,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { WhiteLabelModal } from "@/components/white-label-modal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const stats = [
  {
    value: 200,
    prefix: "",
    suffix: "+",
    label: "Products Built",
    subtext: "And Counting",
  },
  {
    value: 25,
    prefix: "$",
    suffix: "M+",
    label: "Client Funding",
    subtext: "Raised by Clients",
  },
  {
    value: 80,
    prefix: "",
    suffix: "+",
    label: "VC-Backed Clients",
    subtext: "Trusted Partners",
  },
];

const logos = [
  "Knimble",
  "HighPath",
  "Porta",
  "Loadtrends",
  "GetLannyAI",
  "MorpheusAI",
  "CloseWorks",
  "Fund2Grow",
];

const dashboardScreenshots = [
  {
    src: "/AI-Saas-Dashboard1.png",
    title: "Main Command Center",
    desc: "Real-time AI metrics",
  },
  {
    src: "/AI-Saas-Dashboard4.png",
    title: "Analytics Suite",
    desc: "Deep-dive data",
  },
  {
    src: "/AI-Saas-Dashboard3.png",
    title: "Revenue Engine",
    desc: "MRR forecasting",
  },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
  });
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    if (isVisible && !hasPlayed) {
      setHasPlayed(true);
    }
  }, [isVisible, hasPlayed]);

  const count = useCounter(stat.value, 2000, 0, hasPlayed);

  return (
    <div
      ref={ref}
      // FIX: Removed 'flex-1'.
      // Added 'sm:w-auto' to prevent stretching.
      // 'min-w-[240px]' ensures they are uniform in size but centered.
      className={cn(
        "w-full sm:w-auto min-w-[240px] transition-all duration-1000 ease-out transform",
        hasPlayed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <TiltCard className="group h-full" maxTilt={8}>
        <div className="relative h-full px-6 py-8 rounded-2xl bg-gradient-to-br from-card to-background border border-border/50 overflow-hidden transition-all duration-500 hover:border-accent/30 hover:shadow-[0_0_30px_-10px_rgba(249,115,22,0.3)]">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative text-center md:text-left">
            <div className="text-4xl md:text-5xl font-black mb-2">
              <AnimatedGradientText>
                {stat.prefix}
                {count}
                {stat.suffix}
              </AnimatedGradientText>
            </div>
            <div className="text-base font-semibold text-foreground mb-1">
              {stat.label}
            </div>
            <div className="text-sm text-muted-foreground">{stat.subtext}</div>
          </div>
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-3xl" />
        </div>
      </TiltCard>
    </div>
  );
}

function InfiniteLogoMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative overflow-hidden py-8 group">
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-card to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-card to-transparent z-10" />

      <div
        ref={marqueeRef}
        className="flex animate-marquee group-hover:[animation-play-state:paused]"
      >
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-4 md:mx-8 px-4 md:px-6 py-3 rounded-full border border-border/30 bg-background/50 backdrop-blur-sm hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 cursor-pointer group/logo"
          >
            <span className="text-xs md:text-sm font-semibold text-muted-foreground group-hover/logo:text-accent transition-colors whitespace-nowrap uppercase tracking-wider">
              {logo}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardShowcase() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isWhiteLabelOpen, setIsWhiteLabelOpen] = useState(false);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative w-full">
      <div className="relative md:absolute md:-top-12 md:-right-12 z-20 w-full md:w-auto mb-6 md:mb-0 flex justify-center md:block">
        <FloatingElement
          delay={500}
          amplitude={10}
          frequency={1.5}
          className="w-full max-w-xs"
        >
          <div
            onClick={() => setIsWhiteLabelOpen(true)}
            className="bg-card border border-accent/30 p-5 rounded-2xl shadow-2xl w-full backdrop-blur-xl cursor-pointer hover:scale-105 hover:border-accent transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Crown className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-bold text-foreground text-sm group-hover:text-accent transition-colors">
                  Resell As Your Own
                </h4>
              </div>
              <Settings2 className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors opacity-0 group-hover:opacity-100" />
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed mb-3 group-hover:text-foreground/80 transition-colors">
              Resell our development under your brand. You charge clients{" "}
              <span className="text-foreground font-bold">$20k–$100k</span>, and
              we build it.
            </p>

            <div className="flex items-center justify-between text-xs font-bold text-accent pt-2 border-t border-border/30">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3" /> License: $10k/yr
              </div>
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] uppercase tracking-wide">
                <MousePointerClick className="w-3 h-3" /> Try Demo
              </div>
            </div>
          </div>
        </FloatingElement>
      </div>

      <Card3D intensity={15} className="w-full">
        <div className="rounded-2xl md:rounded-3xl border border-border/50 bg-card/50 backdrop-blur-xl overflow-hidden shadow-2xl relative group/card">
          <div className="h-10 md:h-12 border-b border-border/50 flex items-center px-4 gap-2 bg-background/50">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-zinc-600/50" />
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-zinc-600/50" />
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-zinc-600/50" />
            </div>
            <div className="ml-2 md:ml-4 px-2 md:px-3 py-1 rounded-md bg-secondary/50 text-[8px] md:text-[10px] font-mono text-muted-foreground flex items-center gap-2 truncate max-w-[150px] md:max-w-none">
              <LayoutDashboard className="w-3 h-3 hidden md:block" />
              app.your-saas.com/dashboard
            </div>
          </div>

          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {dashboardScreenshots.map((shot, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-[16/10] overflow-hidden group/image cursor-crosshair">
                    <img
                      src={shot.src}
                      alt={shot.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/image:scale-110 md:group-hover/image:scale-150 group-hover/image:rotate-1"
                      style={{ transformOrigin: "center center" }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-100 group-hover/image:opacity-0 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-8">
                      <h3 className="text-lg md:text-2xl font-bold text-white mb-1">
                        {shot.title}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        {shot.desc}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4 bg-background/20 backdrop-blur-md border-white/10 hover:bg-accent hover:text-white hidden sm:flex" />
            <CarouselNext className="right-2 md:right-4 bg-background/20 backdrop-blur-md border-white/10 hover:bg-accent hover:text-white hidden sm:flex" />
          </Carousel>
        </div>
      </Card3D>

      <div className="flex justify-center gap-2 mt-4 md:mt-6">
        {dashboardScreenshots.map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-1 rounded-full transition-all duration-300",
              current === i + 1 ? "w-6 md:w-8 bg-accent" : "w-2 bg-border"
            )}
          />
        ))}
      </div>

      <WhiteLabelModal
        isOpen={isWhiteLabelOpen}
        onClose={() => setIsWhiteLabelOpen(false)}
      />
    </div>
  );
}

export function StatsSection() {
  const { ref } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-card border-y border-border/50 relative overflow-hidden"
    >
      <GradientBlob
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] opacity-20"
        colors={["rgba(249,115,22,0.1)", "transparent"]}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <RevealOnScroll delay={100} direction="up">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-center mb-6 tracking-tighter leading-[0.9]">
            <span className="block md:inline-block">
              <SplitText
                text="TRUSTED BY"
                className="inline-block"
                animation="fadeUp"
                stagger={30}
              />
            </span>
            <br className="hidden md:block" />
            <span className="text-accent block md:inline-block mt-2 md:mt-0">
              <SplitText
                text="INDUSTRY LEADERS"
                animation="elastic"
                delay={300}
                stagger={40}
              />
            </span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={200} direction="up">
          <p className="text-center text-base md:text-xl text-muted-foreground mb-16 md:mb-20 max-w-2xl mx-auto px-2">
            We don't just build software. We engineer{" "}
            <span className="text-foreground font-bold">
              market-ready assets
            </span>{" "}
            for the world's most ambitious founders.
          </p>
        </RevealOnScroll>

        {/* Stats cards */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16 md:mb-24">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>

        <div id="white-label" className="scroll-mt-32">
          <RevealOnScroll delay={500} direction="scale">
            <div className="max-w-5xl mx-auto mb-16 md:mb-24">
              <div className="text-center mb-8 md:mb-12 px-4">
                <h3 className="text-2xl md:text-4xl font-black mb-4">
                  Launch Your Own AI Agency Instantly
                </h3>
                <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  We build the tech. You White-Label and brand it as your own,
                  resell access to your clients.
                  <span className="block mt-2 text-foreground font-bold">
                    Reseller License:{" "}
                    <span className="text-accent">$10,000 / year.</span>
                  </span>
                </p>
              </div>
              <DashboardShowcase />
            </div>
          </RevealOnScroll>
        </div>

        {/* Logo marquee */}
        <RevealOnScroll delay={700} direction="fade">
          <div className="text-center mb-6 md:mb-8">
            <span className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-bold">
              Our Clients & Partners
            </span>
          </div>
          <InfiniteLogoMarquee />
        </RevealOnScroll>
      </div>
    </section>
  );
}
