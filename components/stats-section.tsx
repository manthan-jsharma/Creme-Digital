// "use client"

// import { useScrollAnimation } from "@/hooks/use-scroll-animation"
// import { useCounter } from "@/hooks/use-counter"
// import { RevealOnScroll } from "@/components/reveal-on-scroll"
// import { TiltCard } from "@/components/tilt-card"
// import { AnimatedGradientText } from "@/components/animated-gradient"
// import { useRef } from "react"
// import { Play } from "lucide-react"
// import { MagneticButton } from "@/components/magnetic-button"

// const stats = [
//   { value: 200, prefix: "", suffix: "+", label: "Products Built", subtext: "And Counting" },
//   { value: 25, prefix: "$", suffix: "M+", label: "Client Funding", subtext: "Raised by Clients" },
//   { value: 80, prefix: "", suffix: "+", label: "VC-Backed Clients", subtext: "Trusted Partners" },
// ]

// const logos = ["Knimble", "HighPath", "Porta", "Loadtrends", "GetLannyAI", "MorpheusAI", "CloseWorks", "Fund2Grow"]

// function StatCard({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
//   const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 })
//   const count = useCounter(stat.value, 2000, 0, isVisible)

//   return (
//     <div ref={ref}>
//       <TiltCard className="group" maxTilt={8}>
//         <div className="relative px-8 py-8 rounded-2xl bg-gradient-to-br from-card to-background border border-border/50 overflow-hidden transition-all duration-500 hover:border-accent/30">
//           {/* Glow effect */}
//           <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//           {/* Number with gradient */}
//           <div className="relative">
//             <div className="text-4xl md:text-5xl font-black mb-2">
//               <AnimatedGradientText>
//                 {stat.prefix}
//                 {count}
//                 {stat.suffix}
//               </AnimatedGradientText>
//             </div>
//             <div className="text-base font-semibold text-foreground mb-1">{stat.label}</div>
//             <div className="text-sm text-muted-foreground">{stat.subtext}</div>
//           </div>

//           {/* Decorative corner */}
//           <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-3xl" />
//         </div>
//       </TiltCard>
//     </div>
//   )
// }

// function InfiniteLogoMarquee() {
//   const marqueeRef = useRef<HTMLDivElement>(null)

//   return (
//     <div className="relative overflow-hidden py-8">
//       {/* Gradient masks */}
//       <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card to-transparent z-10" />
//       <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card to-transparent z-10" />

//       <div ref={marqueeRef} className="flex animate-marquee">
//         {[...logos, ...logos].map((logo, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 mx-8 px-6 py-3 rounded-full border border-border/30 bg-background/50 backdrop-blur-sm hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 cursor-pointer group"
//           >
//             <span className="text-sm font-semibold text-muted-foreground group-hover:text-accent transition-colors whitespace-nowrap">
//               {logo}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export function StatsSection() {
//   const { ref } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

//   return (
//     <section ref={ref} className="py-24 bg-card border-y border-border/50 relative overflow-hidden">
//       {/* Background elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[200px]" />
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         <RevealOnScroll delay={100} direction="up">
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-6 tracking-tight">
//             TRUSTED BY <AnimatedGradientText>INDUSTRY LEADERS</AnimatedGradientText>
//           </h2>
//         </RevealOnScroll>

//         <RevealOnScroll delay={200} direction="up">
//           <p className="text-center text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
//             Trusted by industry leaders worldwide
//           </p>
//         </RevealOnScroll>

//         {/* Stats cards */}
//         <div className="flex flex-wrap justify-center gap-6 mb-12">
//           {stats.map((stat, index) => (
//             <RevealOnScroll key={index} delay={300 + index * 100} direction="up">
//               <StatCard stat={stat} index={index} />
//             </RevealOnScroll>
//           ))}
//         </div>

//         {/* Video placeholder with animation */}
//         <RevealOnScroll delay={600} direction="scale">
//           <div className="max-w-4xl mx-auto mb-16">
//             <div className="relative rounded-3xl overflow-hidden border border-border/50 bg-gradient-to-br from-card to-background aspect-video">
//               <img
//                 src="/team-collaboration-product-development-office-mode.jpg"
//                 alt="Creme Digital Team"
//                 className="w-full h-full object-cover opacity-60"
//               />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <MagneticButton strength={30}>
//                   <button className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-orange-500 flex items-center justify-center shadow-lg shadow-accent/30 transition-transform duration-300 hover:scale-110">
//                     <Play className="w-8 h-8 text-accent-foreground ml-1" fill="currentColor" />
//                   </button>
//                 </MagneticButton>
//               </div>
//               <div className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50">
//                 <span className="text-sm font-medium text-foreground">See how we work</span>
//               </div>
//             </div>
//           </div>
//         </RevealOnScroll>

//         {/* Logo marquee */}
//         <RevealOnScroll delay={700} direction="fade">
//           <div className="text-center mb-6">
//             <span className="text-sm text-muted-foreground uppercase tracking-wider">Our Clients & Partners</span>
//           </div>
//           <InfiniteLogoMarquee />
//         </RevealOnScroll>
//       </div>
//     </section>
//   )
// }
// "use client";

// import { useScrollAnimation } from "@/hooks/use-scroll-animation";
// import { useCounter } from "@/hooks/use-counter";
// import { RevealOnScroll } from "@/components/reveal-on-scroll";
// import { TiltCard } from "@/components/tilt-card";
// import { AnimatedGradientText } from "@/components/animated-gradient";
// import { FloatingElement } from "@/components/floating-elements";
// import { SplitText } from "@/components/split-text";
// import { GradientBlob } from "@/components/gradient-blob";
// import { Card3D } from "@/components/3d-card";
// import { useRef, useState } from "react";
// import {
//   Rocket,
//   Zap,
//   TrendingUp,
//   CheckCircle,
//   Code2,
//   Cpu,
//   Globe,
// } from "lucide-react";
// import { cn } from "@/lib/utils";

// const stats = [
//   {
//     value: 200,
//     prefix: "",
//     suffix: "+",
//     label: "Products Built",
//     subtext: "And Counting",
//   },
//   {
//     value: 25,
//     prefix: "$",
//     suffix: "M+",
//     label: "Client Funding",
//     subtext: "Raised by Clients",
//   },
//   {
//     value: 80,
//     prefix: "",
//     suffix: "+",
//     label: "VC-Backed Clients",
//     subtext: "Trusted Partners",
//   },
// ];

// const logos = [
//   "Knimble",
//   "HighPath",
//   "Porta",
//   "Loadtrends",
//   "GetLannyAI",
//   "MorpheusAI",
//   "CloseWorks",
//   "Fund2Grow",
// ];

// function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
//   const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
//     threshold: 0.3,
//   });
//   const count = useCounter(stat.value, 2000, 0, isVisible);

//   return (
//     <div ref={ref}>
//       <TiltCard className="group" maxTilt={8}>
//         <div className="relative px-8 py-8 rounded-2xl bg-gradient-to-br from-card to-background border border-border/50 overflow-hidden transition-all duration-500 hover:border-accent/30 hover:shadow-[0_0_30px_-10px_rgba(249,115,22,0.3)]">
//           {/* Glow effect */}
//           <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//           {/* Number with gradient */}
//           <div className="relative">
//             <div className="text-4xl md:text-5xl font-black mb-2">
//               <AnimatedGradientText>
//                 {stat.prefix}
//                 {count}
//                 {stat.suffix}
//               </AnimatedGradientText>
//             </div>
//             <div className="text-base font-semibold text-foreground mb-1">
//               {stat.label}
//             </div>
//             <div className="text-sm text-muted-foreground">{stat.subtext}</div>
//           </div>

//           {/* Decorative corner */}
//           <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-3xl" />
//         </div>
//       </TiltCard>
//     </div>
//   );
// }

// function InfiniteLogoMarquee() {
//   const marqueeRef = useRef<HTMLDivElement>(null);

//   return (
//     <div className="relative overflow-hidden py-8 group">
//       {/* Gradient masks */}
//       <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card to-transparent z-10" />
//       <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card to-transparent z-10" />

//       <div
//         ref={marqueeRef}
//         className="flex animate-marquee group-hover:[animation-play-state:paused]"
//       >
//         {[...logos, ...logos, ...logos].map((logo, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 mx-8 px-6 py-3 rounded-full border border-border/30 bg-background/50 backdrop-blur-sm hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 cursor-pointer group/logo"
//           >
//             <span className="text-sm font-semibold text-muted-foreground group-hover/logo:text-accent transition-colors whitespace-nowrap uppercase tracking-wider">
//               {logo}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // THE VELOCITY CORE: Replaces the Video Placeholder
// function VelocityCore() {
//   return (
//     <Card3D intensity={10} className="w-full h-full">
//       <div className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-xl group">
//         {/* Background Grid */}
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

//         {/* Central Pulse */}
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//           <div className="relative">
//             <div className="absolute inset-0 bg-accent/20 blur-[60px] rounded-full animate-pulse" />
//             <div className="w-24 h-24 rounded-full border border-accent/30 bg-background/50 backdrop-blur-md flex items-center justify-center relative z-10 shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)]">
//               <Zap className="w-10 h-10 text-accent animate-[pulse_3s_ease-in-out_infinite]" />
//             </div>
//             {/* Orbital Rings */}
//             <div className="absolute inset-0 border border-accent/10 rounded-full w-[300px] h-[300px] -translate-x-[38%] -translate-y-[38%] animate-[spin_10s_linear_infinite]" />
//             <div className="absolute inset-0 border border-dashed border-accent/10 rounded-full w-[450px] h-[450px] -translate-x-[62%] -translate-y-[62%] animate-[spin_15s_linear_infinite_reverse]" />
//           </div>
//         </div>

//         {/* Floating Asset Badges */}
//         <div className="absolute inset-0">
//           <FloatingElement
//             delay={0}
//             amplitude={15}
//             frequency={2}
//             className="absolute top-[15%] left-[15%]"
//           >
//             <div className="px-4 py-2 rounded-xl bg-background/80 border border-border/50 backdrop-blur-md flex items-center gap-3 shadow-xl hover:border-accent/50 hover:scale-105 transition-all cursor-default">
//               <div className="p-2 rounded-lg bg-blue-500/10">
//                 <Code2 className="w-4 h-4 text-blue-500" />
//               </div>
//               <div>
//                 <div className="text-xs text-muted-foreground uppercase font-bold">
//                   Stack
//                 </div>
//                 <div className="text-sm font-bold">Next.js + Supabase</div>
//               </div>
//             </div>
//           </FloatingElement>

//           <FloatingElement
//             delay={1000}
//             amplitude={20}
//             frequency={1.5}
//             className="absolute top-[20%] right-[15%]"
//           >
//             <div className="px-4 py-2 rounded-xl bg-background/80 border border-border/50 backdrop-blur-md flex items-center gap-3 shadow-xl hover:border-accent/50 hover:scale-105 transition-all cursor-default">
//               <div className="p-2 rounded-lg bg-emerald-500/10">
//                 <TrendingUp className="w-4 h-4 text-emerald-500" />
//               </div>
//               <div>
//                 <div className="text-xs text-muted-foreground uppercase font-bold">
//                   Goal
//                 </div>
//                 <div className="text-sm font-bold text-emerald-500">
//                   $30k MRR
//                 </div>
//               </div>
//             </div>
//           </FloatingElement>

//           <FloatingElement
//             delay={500}
//             amplitude={10}
//             frequency={2.5}
//             className="absolute bottom-[20%] left-[20%]"
//           >
//             <div className="px-4 py-2 rounded-xl bg-background/80 border border-border/50 backdrop-blur-md flex items-center gap-3 shadow-xl hover:border-accent/50 hover:scale-105 transition-all cursor-default">
//               <div className="p-2 rounded-lg bg-orange-500/10">
//                 <Rocket className="w-4 h-4 text-orange-500" />
//               </div>
//               <div>
//                 <div className="text-xs text-muted-foreground uppercase font-bold">
//                   Velocity
//                 </div>
//                 <div className="text-sm font-bold text-accent">
//                   14 Days to Launch
//                 </div>
//               </div>
//             </div>
//           </FloatingElement>

//           <FloatingElement
//             delay={1500}
//             amplitude={12}
//             frequency={2}
//             className="absolute bottom-[15%] right-[20%]"
//           >
//             <div className="px-4 py-2 rounded-xl bg-background/80 border border-border/50 backdrop-blur-md flex items-center gap-3 shadow-xl hover:border-accent/50 hover:scale-105 transition-all cursor-default">
//               <div className="p-2 rounded-lg bg-purple-500/10">
//                 <CheckCircle className="w-4 h-4 text-purple-500" />
//               </div>
//               <div>
//                 <div className="text-xs text-muted-foreground uppercase font-bold">
//                   Status
//                 </div>
//                 <div className="text-sm font-bold">Exit Ready</div>
//               </div>
//             </div>
//           </FloatingElement>
//         </div>

//         {/* Bottom Overlay Text */}
//         <div className="absolute bottom-6 left-0 right-0 text-center">
//           <p className="text-sm font-mono text-accent/70 tracking-[0.3em] uppercase animate-pulse">
//             System Online • Asset Generation Active
//           </p>
//         </div>
//       </div>
//     </Card3D>
//   );
// }

// export function StatsSection() {
//   const { ref } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

//   return (
//     <section
//       ref={ref}
//       className="py-32 bg-card border-y border-border/50 relative overflow-hidden"
//     >
//       {/* Background elements */}
//       <GradientBlob
//         className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20"
//         colors={["rgba(249,115,22,0.1)", "transparent"]}
//       />

//       <div className="container mx-auto px-6 relative z-10">
//         <RevealOnScroll delay={100} direction="up">
//           <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-center mb-6 tracking-tighter leading-[0.9]">
//             <SplitText
//               text="TRUSTED BY"
//               className="inline-block"
//               animation="fadeUp"
//               stagger={30}
//             />
//             <br />
//             <span className="text-accent inline-block">
//               <SplitText
//                 text="INDUSTRY LEADERS"
//                 animation="elastic"
//                 delay={300}
//                 stagger={40}
//               />
//             </span>
//           </h2>
//         </RevealOnScroll>

//         <RevealOnScroll delay={200} direction="up">
//           <p className="text-center text-lg md:text-xl text-muted-foreground mb-20 max-w-2xl mx-auto">
//             We don't just build software. We engineer{" "}
//             <span className="text-foreground font-bold">
//               market-ready assets
//             </span>{" "}
//             for the world's most ambitious founders.
//           </p>
//         </RevealOnScroll>

//         {/* Stats cards */}
//         <div className="flex flex-wrap justify-center gap-6 mb-24">
//           {stats.map((stat, index) => (
//             <RevealOnScroll
//               key={index}
//               delay={300 + index * 100}
//               direction="up"
//             >
//               <StatCard stat={stat} index={index} />
//             </RevealOnScroll>
//           ))}
//         </div>

//         {/* REPLACED VIDEO WITH VELOCITY CORE ANIMATION */}
//         <RevealOnScroll delay={500} direction="scale">
//           <div className="max-w-5xl mx-auto mb-24">
//             <VelocityCore />
//           </div>
//         </RevealOnScroll>

//         {/* Logo marquee */}
//         <RevealOnScroll delay={700} direction="fade">
//           <div className="text-center mb-8">
//             <span className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-bold">
//               Our Clients & Partners
//             </span>
//           </div>
//           <InfiniteLogoMarquee />
//         </RevealOnScroll>
//       </div>
//     </section>
//   );
// }
"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useCounter } from "@/hooks/use-counter";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { TiltCard } from "@/components/tilt-card";
import { AnimatedGradientText } from "@/components/animated-gradient";
import { SplitText } from "@/components/split-text";
import { GradientBlob } from "@/components/gradient-blob";
import { Card3D } from "@/components/3d-card";
// FIX: Added FloatingElement import
import { FloatingElement } from "@/components/floating-elements";
import { useRef, useState, useEffect } from "react";
import { CheckCircle, Crown, ArrowRight, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";
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

// Dashboard Screenshots
const dashboardScreenshots = [
  {
    src: "/AI-Saas-Dashboard1.png",
    title: "Main Command Center",
    desc: "Real-time AI metrics & user tracking",
  },
  {
    src: "/AI-Saas-Dashboard4.png",
    title: "Analytics Suite",
    desc: "Deep-dive data visualization",
  },
  {
    src: "/AI-Saas-Dashboard3.png",
    title: "Revenue Engine",
    desc: "AIintegration & MRR forecasting",
  },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.3,
  });
  const count = useCounter(stat.value, 2000, 0, isVisible);

  return (
    <div ref={ref}>
      <TiltCard className="group" maxTilt={8}>
        <div className="relative px-8 py-8 rounded-2xl bg-gradient-to-br from-card to-background border border-border/50 overflow-hidden transition-all duration-500 hover:border-accent/30 hover:shadow-[0_0_30px_-10px_rgba(249,115,22,0.3)]">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative">
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
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card to-transparent z-10" />

      <div
        ref={marqueeRef}
        className="flex animate-marquee group-hover:[animation-play-state:paused]"
      >
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-8 px-6 py-3 rounded-full border border-border/30 bg-background/50 backdrop-blur-sm hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 cursor-pointer group/logo"
          >
            <span className="text-sm font-semibold text-muted-foreground group-hover/logo:text-accent transition-colors whitespace-nowrap uppercase tracking-wider">
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

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative w-full">
      {/* Floating "White Label" Card */}
      <div className="absolute -top-12 right-4 md:-right-12 z-20 hidden md:block">
        <FloatingElement delay={500} amplitude={10} frequency={1.5}>
          <div className="bg-card border border-accent/30 p-5 rounded-2xl shadow-2xl max-w-xs backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Crown className="w-5 h-5 text-accent" />
              </div>
              <h4 className="font-bold text-foreground text-sm">
                Resell As Your Own
              </h4>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">
              Launch your own agency. We build the tech, you white-label it and
              charge clients $5k-$10k monthly.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-accent">
              <CheckCircle className="w-3 h-3" /> 100% IP Ownership
            </div>
          </div>
        </FloatingElement>
      </div>

      <Card3D intensity={15} className="w-full">
        <div className="rounded-3xl border border-border/50 bg-card/50 backdrop-blur-xl overflow-hidden shadow-2xl relative group/card">
          {/* Browser Toolbar */}
          <div className="h-12 border-b border-border/50 flex items-center px-4 gap-2 bg-background/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="ml-4 px-3 py-1 rounded-md bg-secondary/50 text-[10px] font-mono text-muted-foreground flex items-center gap-2">
              <LayoutDashboard className="w-3 h-3" />
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
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/image:scale-150 group-hover/image:rotate-1"
                      style={{ transformOrigin: "center center" }}
                    />

                    {/* Overlay on non-hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-100 group-hover/image:opacity-0 transition-opacity duration-300 flex flex-col justify-end p-8">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {shot.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {shot.desc}
                      </p>
                    </div>

                    {/* Magnifying Glass Hint */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold border border-white/10">
                        Hover to Inspect
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-background/20 backdrop-blur-md border-white/10 hover:bg-accent hover:text-white" />
            <CarouselNext className="right-4 bg-background/20 backdrop-blur-md border-white/10 hover:bg-accent hover:text-white" />
          </Carousel>
        </div>
      </Card3D>

      {/* Carousel Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {dashboardScreenshots.map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-1 rounded-full transition-all duration-300",
              current === i + 1 ? "w-8 bg-accent" : "w-2 bg-border"
            )}
          />
        ))}
      </div>
    </div>
  );
}

export function StatsSection() {
  const { ref } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="py-32 bg-card border-y border-border/50 relative overflow-hidden"
    >
      <GradientBlob
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20"
        colors={["rgba(249,115,22,0.1)", "transparent"]}
      />

      <div className="container mx-auto px-6 relative z-10">
        <RevealOnScroll delay={100} direction="up">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-center mb-6 tracking-tighter leading-[0.9]">
            <SplitText
              text="TRUSTED BY"
              className="inline-block"
              animation="fadeUp"
              stagger={30}
            />
            <br />
            <span className="text-accent inline-block">
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
          <p className="text-center text-lg md:text-xl text-muted-foreground mb-20 max-w-2xl mx-auto">
            We don't just build software. We engineer{" "}
            <span className="text-foreground font-bold">
              market-ready assets
            </span>{" "}
            for the world's most ambitious founders.
          </p>
        </RevealOnScroll>

        {/* Stats cards */}
        <div className="flex flex-wrap justify-center gap-6 mb-24">
          {stats.map((stat, index) => (
            <RevealOnScroll
              key={index}
              delay={300 + index * 100}
              direction="up"
            >
              <StatCard stat={stat} index={index} />
            </RevealOnScroll>
          ))}
        </div>

        {/* DASHBOARD CAROUSEL + WHITE LABEL PITCH */}
        <RevealOnScroll delay={500} direction="scale">
          <div className="max-w-5xl mx-auto mb-24">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-black mb-3">
                Your Future Command Center
              </h3>
              <p className="text-muted-foreground">
                Get your own branded dashboard to manage your empire.
              </p>
            </div>
            <DashboardShowcase />
          </div>
        </RevealOnScroll>

        {/* Logo marquee */}
        <RevealOnScroll delay={700} direction="fade">
          <div className="text-center mb-8">
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
