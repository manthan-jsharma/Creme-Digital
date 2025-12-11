"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Lock, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MagneticButton } from "@/components/magnetic-button";
import { Card3D } from "@/components/3d-card";
import { GradientBlob } from "@/components/gradient-blob";
import { RevealOnScroll } from "@/components/reveal-on-scroll";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    // Add actual auth logic here later
  };

  return (
    <main className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center p-4">
      {/* Background Ambience */}
      <GradientBlob
        className="top-0 left-0 w-[800px] h-[800px] opacity-30"
        colors={["rgba(249,115,22,0.15)", "transparent"]}
      />
      <GradientBlob
        className="bottom-0 right-0 w-[600px] h-[600px] opacity-20"
        colors={["rgba(59,130,246,0.15)", "transparent"]}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="w-full max-w-md relative z-10">
        <RevealOnScroll direction="up">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <Card3D intensity={10}>
            <div className="bg-card/50 backdrop-blur-xl border border-border/50 p-8 md:p-10 rounded-3xl relative overflow-hidden">
              {/* Top Glow */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />

              <div className="text-center mb-8">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 border border-accent/20">
                  <Lock className="w-6 h-6 text-accent" />
                </div>
                <h1 className="text-2xl font-black text-foreground mb-2">
                  Client Portal
                </h1>
                <p className="text-sm text-muted-foreground">
                  Enter your credentials to access your project dashboard.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="founder@company.com"
                    className="bg-secondary/50 border-border/50 focus:border-accent/50 h-12"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="bg-secondary/50 border-border/50 focus:border-accent/50 h-12"
                    required
                  />
                </div>

                <MagneticButton strength={20} className="w-full pt-2">
                  <Button
                    type="submit"
                    className="w-full h-12 rounded-xl bg-accent text-accent-foreground font-bold hover:bg-accent/90 transition-all shadow-[0_0_20px_-5px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.5)]"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Authenticating...
                      </>
                    ) : (
                      "Enter Dashboard"
                    )}
                  </Button>
                </MagneticButton>
              </form>

              <div className="mt-6 text-center">
                <p className="text-xs text-muted-foreground">
                  Forgot your credentials?{" "}
                  <a href="#" className="text-accent hover:underline">
                    Contact Support
                  </a>
                </p>
              </div>

              {/* Decorative Background Icon */}
              <Sparkles className="absolute -bottom-8 -right-8 w-32 h-32 text-accent/5 pointer-events-none" />
            </div>
          </Card3D>
        </RevealOnScroll>
      </div>
    </main>
  );
}
