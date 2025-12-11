"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { MagneticButton } from "@/components/magnetic-button";
import { Card3D } from "@/components/3d-card";
import { AnimatedGradientText } from "@/components/animated-gradient";
import { SplitText } from "@/components/split-text";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/data";

// Custom Video Component
function InteractiveVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-card group">
      {!isPlaying ? (
        <div
          className="relative aspect-video cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
          <img
            src="/professional-business-person-presenting-ai-softwar.jpg"
            alt="Demo Preview"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
          />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

          <div className="absolute inset-0 flex items-center justify-center z-20">
            <MagneticButton strength={50}>
              <div className="relative group/btn">
                <div className="absolute inset-0 rounded-full border border-accent/40 animate-[ping_2s_ease-in-out_infinite]" />
                <div className="absolute inset-0 rounded-full border border-accent/20 animate-[pulse_2s_ease-in-out_infinite] scale-125" />

                <button className="relative w-24 h-24 rounded-full bg-gradient-to-br from-accent via-orange-500 to-amber-500 flex items-center justify-center shadow-[0_0_40px_-5px_rgba(249,115,22,0.5)] transition-transform duration-300 group-hover/btn:scale-110">
                  <Play className="w-10 h-10 text-white ml-1 fill-current" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out" />
                </button>
              </div>
            </MagneticButton>
          </div>

          <div className="absolute bottom-6 left-6 z-20">
            <p className="text-sm font-bold text-white uppercase tracking-widest mb-1">
              Live Demo
            </p>
            <p className="text-2xl font-black text-white">
              Watch us build in real-time
            </p>
          </div>
        </div>
      ) : (
        <div
          style={{ position: "relative", paddingBottom: "62.5%", height: 0 }}
        >
          <iframe
            src="https://www.loom.com/embed/7dcd9028f4be42028af06033e2d95f37?sid=9b602677-4402-4299-8802-998844890209&autoplay=1"
            frameBorder="0"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: typeof projects[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card3D intensity={15} glareEnabled>
      {/* LINK CHANGE: 
         The main card links to the INTERNAL project page (/work/[id])
         The small button inside links to the EXTERNAL live site.
      */}
      <Link href={`/work/${project.id}`} className="block h-full">
        <div
          className="group relative h-full rounded-3xl bg-card border border-border/50 overflow-hidden transition-all duration-500 hover:border-accent/50 hover:shadow-[0_0_30px_-10px_rgba(var(--accent-rgb),0.3)]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative aspect-video overflow-hidden">
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-30 transition-opacity duration-500 group-hover:opacity-40",
                project.gradient
              )}
            />
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-90" />

            <div className="absolute top-4 right-4 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-xs font-bold border border-white/10 text-white">
                {project.stats.status || "Live"}
              </div>
            </div>
          </div>

          <div className="p-6 relative z-10 -mt-12">
            <div className="flex justify-between items-end mb-4">
              <div>
                <div
                  className={cn(
                    "text-xs font-black uppercase tracking-wider mb-2 bg-clip-text text-transparent bg-gradient-to-r",
                    project.gradient
                  )}
                >
                  {project.category}
                </div>
                <h3 className="text-3xl font-black text-white leading-none mb-1 group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
              </div>

              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-accent group-hover:border-accent group-hover:text-black transition-all">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            <p className="text-muted-foreground text-sm mb-6 line-clamp-3 group-hover:text-foreground/80 transition-colors">
              {project.fullDescription}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 rounded-md bg-secondary/50 text-[10px] font-mono text-muted-foreground border border-border/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.founder && (
              <div className="pt-4 border-t border-border/30 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-xs font-bold border border-border">
                  {project.founder.charAt(0)}
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block">
                    Built for
                  </span>
                  <span className="text-xs font-bold text-foreground">
                    {project.founder}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </Link>
    </Card3D>
  );
}

export function WorkShowcaseSection() {
  return (
    <section id="work" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <RevealOnScroll direction="down">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full border border-border/50 text-sm text-muted-foreground mb-6 backdrop-blur-sm bg-card/50">
              PROOF OF COMPETENCE
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8">
              <SplitText text="Watch us build & ship" className="block" />
              <span className="text-accent">
                <SplitText
                  text="in real-time."
                  animation="elastic"
                  delay={300}
                />
              </span>
            </h2>

            <div className="max-w-4xl mx-auto">
              <InteractiveVideo />
            </div>
          </div>
        </RevealOnScroll>

        <div className="text-center mb-12 mt-32">
          <RevealOnScroll direction="up">
            <h3 className="text-3xl md:text-5xl font-black mb-4">
              The Wall of Results
            </h3>
            <p className="text-xl text-muted-foreground">
              2 Founder Exits | 39 Software Builds
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.id} delay={index * 100} direction="up">
              <ProjectCard project={project} index={index} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
