"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Layers,
  Zap,
  Code2,
  Users,
  TrendingUp,
  Check,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/magnetic-button";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { SplitText } from "@/components/split-text";
import { Card3D } from "@/components/3d-card";
import { AnimatedCounter } from "@/components/animated-counter";
import { GradientBlob } from "@/components/gradient-blob";
import { TextScramble } from "@/components/text-scramble";
import { ParallaxLayer } from "@/components/floating-elements";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ProjectPageClientProps {
  project: typeof projects[0];
}

export function ProjectPageClient({ project }: ProjectPageClientProps) {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    if (window.innerWidth > 768) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];

  const parseStatValue = (value: string | number) => {
    if (typeof value === "number") return value;
    if (!value) return 0;
    const num = Number.parseFloat(value.toString().replace(/[^0-9.]/g, ""));
    return isNaN(num) ? 0 : num;
  };

  const getStatSuffix = (value: string | number) => {
    const valStr = value.toString();
    if (valStr.includes("K") || valStr.includes("k")) return "K+";
    if (valStr.includes("M") || valStr.includes("m")) return "M+";
    if (valStr.includes("%")) return "%";
    if (valStr.includes("/m")) return "/mo";
    if (valStr.includes("x")) return "x";
    return "";
  };

  const getStatPrefix = (value: string | number) => {
    const valStr = value.toString();
    if (valStr.includes("$")) return "$";
    return "";
  };

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for performance with sub-second load times",
    },
    {
      icon: Layers,
      title: "Scalable Architecture",
      description: "Built to handle millions of users effortlessly",
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Intuitive interfaces backed by extensive research",
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Features designed to drive engagement and retention",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div ref={heroRef} className="relative min-h-screen overflow-hidden">
        <GradientBlob
          className="top-0 left-[10%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] opacity-50"
          colors={[
            "rgba(249,115,22,0.2)",
            "rgba(251,146,60,0.1)",
            "transparent",
          ]}
        />
        <GradientBlob
          className="bottom-0 right-[5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] opacity-30"
          colors={["rgba(251,146,60,0.15)", "transparent"]}
        />

        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] md:bg-[size:100px_100px]"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            maskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 70%)",
          }}
        />

        <div className="relative z-20 px-4 md:px-6 py-6 md:py-8">
          <div className="container mx-auto flex items-center justify-between">
            <Link href="/#work">
              <MagneticButton strength={20}>
                <Button
                  variant="ghost"
                  className="group gap-2 text-muted-foreground hover:text-foreground pl-0 md:pl-4"
                >
                  <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                  Back
                </Button>
              </MagneticButton>
            </Link>

            <div className="flex items-center gap-2 md:gap-4">
              <Link href={`/work/${prevProject.id}`}>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-border/50 hover:border-accent/50 bg-transparent"
                >
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              </Link>
              <Link href={`/work/${nextProject.id}`}>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-border/50 hover:border-accent/50 bg-transparent"
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 pt-8 md:pt-12 pb-20 md:pb-32">
          <div className="max-w-6xl mx-auto">
            <RevealOnScroll delay={0} direction="down">
              <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <div
                  className={cn(
                    "px-4 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold text-white bg-gradient-to-r",
                    project.gradient
                  )}
                >
                  {project.category}
                </div>
                <div className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm">
                  <Calendar className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground" />
                  <span className="text-xs md:text-sm font-mono text-muted-foreground">
                    {project.year}
                  </span>
                </div>
                {project.link && (
                  <Link href={project.link} target="_blank">
                    <div className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-accent/30 bg-accent/10 hover:bg-accent hover:text-black transition-all cursor-pointer">
                      <span className="text-xs md:text-sm font-bold">
                        Live Site
                      </span>
                      <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                    </div>
                  </Link>
                )}
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100} direction="up">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[8rem] font-black tracking-tighter mb-6 md:mb-8 leading-[1.1] md:leading-[0.9] break-words">
                <SplitText
                  text={project.name}
                  animation="elastic"
                  stagger={50}
                  duration={800}
                />
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={200} direction="up">
              <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mb-8 md:mb-12 leading-relaxed">
                {project.fullDescription}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={300} direction="up">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-2xl mb-12 md:mb-16">
                {Object.entries(project.stats).map(([key, value], i) => (
                  <Card3D key={key} intensity={8}>
                    <div className="p-4 md:p-6 rounded-2xl bg-card/50 border border-border/30 backdrop-blur-sm text-center">
                      <div className="text-2xl md:text-4xl font-black text-accent mb-1 md:mb-2">
                        {typeof value === "string" && !parseStatValue(value) ? (
                          <span>{value}</span>
                        ) : (
                          <AnimatedCounter
                            value={parseStatValue(value)}
                            prefix={getStatPrefix(value)}
                            suffix={getStatSuffix(value)}
                            duration={2500}
                          />
                        )}
                      </div>
                      <div className="text-xs md:text-sm text-muted-foreground capitalize font-medium">
                        {key}
                      </div>
                    </div>
                  </Card3D>
                ))}
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={400} direction="scale">
              <Card3D
                intensity={6}
                containerClassName="max-w-5xl mx-auto w-full"
              >
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-border/30 shadow-2xl">
                  <div className="aspect-video relative bg-card overflow-hidden">
                    <div className="hidden md:block absolute inset-0">
                      <ParallaxLayer speed={-0.05}>
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.name}
                          className="w-full h-full object-cover scale-110"
                          style={{
                            transform: `translate(${
                              mousePosition.x * 0.02
                            }px, ${mousePosition.y * 0.02}px)`,
                            transition: "transform 0.3s ease-out",
                          }}
                        />
                      </ParallaxLayer>
                    </div>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      className="w-full h-full object-cover md:hidden"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20" />
                  </div>
                </div>
              </Card3D>
            </RevealOnScroll>
          </div>
        </div>
      </div>

      <section className="py-20 md:py-32 bg-card/30 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <RevealOnScroll direction="down">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6">
                <TextScramble text="Key Features" speed={40} />
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Built with cutting-edge technology and best practices
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {features.map((feature, i) => (
              <RevealOnScroll key={i} delay={i * 100} direction="up">
                <Card3D intensity={12}>
                  <div className="p-6 md:p-8 rounded-2xl bg-card border border-border/30 h-full group hover:border-accent/30 transition-colors">
                    <div
                      className={cn(
                        "w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-4 md:mb-6 transition-transform group-hover:scale-110",
                        project.gradient
                      )}
                    >
                      <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:text-accent transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card3D>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <RevealOnScroll direction="left">
              <div>
                <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-accent/30 bg-accent/5 text-xs md:text-sm text-accent mb-6 md:mb-8">
                  <Code2 className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="font-semibold">TECH STACK</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 leading-tight">
                  <span className="block">Built with</span>
                  <span className="text-accent">Modern Tech</span>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                  We carefully selected the best technologies to ensure{" "}
                  {project.name} is fast, scalable, and maintainable for years
                  to come.
                </p>

                <div className="flex flex-wrap gap-2 md:gap-3">
                  {project.technologies.map((tech, i) => (
                    <RevealOnScroll
                      key={tech}
                      delay={300 + i * 50}
                      direction="up"
                    >
                      <div className="group px-4 md:px-5 py-2 md:py-3 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/50 hover:bg-accent/5 transition-all cursor-default">
                        <span className="text-xs md:text-sm font-medium text-muted-foreground group-hover:text-accent transition-colors">
                          {tech}
                        </span>
                      </div>
                    </RevealOnScroll>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right" delay={200}>
              <Card3D intensity={10}>
                <div className="p-6 md:p-8 rounded-3xl bg-card border border-border/30">
                  <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">
                    Project Highlights
                  </h3>
                  <div className="space-y-3 md:space-y-4">
                    {[
                      "Custom design system with 50+ components",
                      "Real-time data synchronization",
                      "End-to-end type safety",
                      "Automated testing pipeline",
                      "99.9% uptime SLA",
                      "Mobile-first responsive design",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <div
                          className={cn(
                            "w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br flex items-center justify-center flex-shrink-0 mt-0.5",
                            project.gradient
                          )}
                        >
                          <Check className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" />
                        </div>
                        <span className="text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card3D>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 relative overflow-hidden">
        <GradientBlob className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] opacity-30" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <RevealOnScroll direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-tight">
                <span className="block">Ready to build</span>
                <span className="text-accent">something amazing?</span>
              </h2>
              <p className="text-base md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto">
                Let's create a product that your users will love. Book a call
                with our team today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center">
                <MagneticButton strength={30}>
                  <Button
                    asChild
                    size="lg"
                    className="group relative overflow-hidden rounded-full bg-gradient-to-r from-accent via-orange-500 to-amber-500 px-10 py-6 md:px-12 md:py-8 text-lg md:text-xl font-black text-accent-foreground shadow-2xl shadow-accent/30 hover:shadow-accent/50 transition-all"
                  >
                    <Link
                      href="https://cal.com/aiapps.dev/30min"
                      target="_blank"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        Start Your Project
                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-2" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </Link>
                  </Button>
                </MagneticButton>

                <Link href="/#work" className="w-full sm:w-auto">
                  <MagneticButton strength={25}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full rounded-full border-2 border-border/50 bg-transparent px-10 py-6 md:px-12 md:py-8 text-lg md:text-xl font-bold hover:border-accent/50 hover:bg-accent/10 transition-all"
                    >
                      View More Work
                    </Button>
                  </MagneticButton>
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-12 md:py-16 border-t border-border/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <Link href={`/work/${prevProject.id}`} className="group">
              <RevealOnScroll direction="left">
                <Card3D intensity={8}>
                  <div className="p-4 md:p-6 rounded-2xl bg-card/50 border border-border/30 hover:border-accent/30 transition-all">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2 md:mb-3">
                      <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                      <span className="text-xs md:text-sm font-medium">
                        Previous Project
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-accent transition-colors">
                      {prevProject.name}
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm mt-1">
                      {prevProject.category}
                    </p>
                  </div>
                </Card3D>
              </RevealOnScroll>
            </Link>

            <Link
              href={`/work/${nextProject.id}`}
              className="group text-left md:text-right"
            >
              <RevealOnScroll direction="right">
                <Card3D intensity={8}>
                  <div className="p-4 md:p-6 rounded-2xl bg-card/50 border border-border/30 hover:border-accent/30 transition-all">
                    <div className="flex items-center justify-start md:justify-end gap-2 text-muted-foreground mb-2 md:mb-3">
                      <span className="text-xs md:text-sm font-medium">
                        Next Project
                      </span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-accent transition-colors">
                      {nextProject.name}
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm mt-1">
                      {nextProject.category}
                    </p>
                  </div>
                </Card3D>
              </RevealOnScroll>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
