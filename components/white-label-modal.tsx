"use client";

import { useState, useRef } from "react";
import {
  X,
  Palette,
  Globe,
  Upload,
  Check,
  Eye,
  FileImage,
  LayoutDashboard,
  Users,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function WhiteLabelModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [settings, setSettings] = useState({
    brandName: "Your Brand",
    primaryColor: "#D4AF37",
    logo: null as string | null,
    favicon: null as string | null,
    customDomain: "",
    hideNexusBranding: false,
  });
  const [saved, setSaved] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);

  // Refs for hidden file inputs
  const logoInputRef = useRef<HTMLInputElement>(null);
  const faviconInputRef = useRef<HTMLInputElement>(null);

  const handleSave = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "logo" | "favicon"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setSettings((prev) => ({ ...prev, [type]: file.name }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col glass-card rounded-2xl border border-border/50 overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 bg-background/95">
        {/* Header */}
        <div className="p-5 border-b border-border/50 flex items-center justify-between bg-accent/5 flex-none">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center border border-accent/10">
              <Palette className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-foreground">
                White Label Settings
              </h3>
              <p className="text-sm text-muted-foreground">
                Customize the dashboard for your clients
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-secondary/50 hover:bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body - Scrollable */}
        <div className="p-6 space-y-8 overflow-y-auto custom-scrollbar">
          {/* Section 1: Brand Identity */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Brand Identity
            </h4>

            <div className="grid gap-6">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Brand Name
                </label>
                <Input
                  value={settings.brandName}
                  onChange={(e) =>
                    setSettings({ ...settings, brandName: e.target.value })
                  }
                  placeholder="Your company name"
                  className="bg-secondary/30 border-border/50 focus:border-accent/50"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  This will replace "AI App Labs" in the dashboard header and
                  emails.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Logo
                  </label>
                  <input
                    type="file"
                    ref={logoInputRef}
                    className="hidden"
                    accept="image/png, image/jpeg, image/svg+xml"
                    onChange={(e) => handleFileChange(e, "logo")}
                  />
                  <div
                    onClick={() => logoInputRef.current?.click()}
                    className={cn(
                      "group relative h-32 border-2 border-dashed rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300",
                      settings.logo
                        ? "border-accent bg-accent/5"
                        : "border-border hover:border-accent/50 hover:bg-secondary/30"
                    )}
                  >
                    {settings.logo ? (
                      <>
                        <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center shadow-sm mb-2">
                          <FileImage className="w-5 h-5 text-accent" />
                        </div>
                        <p className="text-sm font-medium text-foreground truncate w-full px-4 text-center">
                          {settings.logo}
                        </p>
                        <p className="text-xs text-muted-foreground group-hover:text-accent transition-colors">
                          Click to replace
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                          <Upload className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
                        </div>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground">
                          Upload Logo
                        </p>
                        <p className="text-[10px] text-muted-foreground/70">
                          SVG, PNG, JPG
                        </p>
                      </>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Favicon
                  </label>
                  <input
                    type="file"
                    ref={faviconInputRef}
                    className="hidden"
                    accept="image/x-icon, image/png"
                    onChange={(e) => handleFileChange(e, "favicon")}
                  />
                  <div
                    onClick={() => faviconInputRef.current?.click()}
                    className={cn(
                      "group relative h-32 border-2 border-dashed rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300",
                      settings.favicon
                        ? "border-accent bg-accent/5"
                        : "border-border hover:border-accent/50 hover:bg-secondary/30"
                    )}
                  >
                    {settings.favicon ? (
                      <>
                        <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center shadow-sm mb-2">
                          <FileImage className="w-5 h-5 text-accent" />
                        </div>
                        <p className="text-sm font-medium text-foreground truncate w-full px-4 text-center">
                          {settings.favicon}
                        </p>
                        <p className="text-xs text-muted-foreground group-hover:text-accent transition-colors">
                          Click to replace
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                          <Upload className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
                        </div>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground">
                          Upload Favicon
                        </p>
                        <p className="text-[10px] text-muted-foreground/70">
                          ICO, PNG
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-border/50" />

          {/* Section 2: Theming */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Theming & Domain
            </h4>

            <div>
              <label className="text-sm font-medium text-foreground mb-3 block">
                Primary Color
              </label>
              <div className="flex flex-wrap items-center gap-4">
                <input
                  type="color"
                  value={settings.primaryColor}
                  onChange={(e) =>
                    setSettings({ ...settings, primaryColor: e.target.value })
                  }
                  className="w-12 h-12 rounded-xl cursor-pointer border-0 p-0 bg-transparent shadow-sm"
                />
                <Input
                  value={settings.primaryColor}
                  onChange={(e) =>
                    setSettings({ ...settings, primaryColor: e.target.value })
                  }
                  className="bg-secondary/30 border-border/50 flex-1 min-w-[120px] font-mono"
                />
                <div className="flex gap-2">
                  {[
                    "#D4AF37",
                    "#3B82F6",
                    "#10B981",
                    "#F59E0B",
                    "#8B5CF6",
                    "#EC4899",
                  ].map((color) => (
                    <button
                      key={color}
                      onClick={() =>
                        setSettings({ ...settings, primaryColor: color })
                      }
                      className={cn(
                        "w-8 h-8 rounded-full transition-transform hover:scale-110",
                        settings.primaryColor === color &&
                          "ring-2 ring-white ring-offset-2 ring-offset-background scale-110"
                      )}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Custom Domain
              </label>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center border border-border/50">
                  <Globe className="w-5 h-5 text-muted-foreground" />
                </div>
                <Input
                  value={settings.customDomain}
                  onChange={(e) =>
                    setSettings({ ...settings, customDomain: e.target.value })
                  }
                  placeholder="dashboard.yourbrand.com"
                  className="bg-secondary/30 border-border/50 flex-1"
                />
              </div>
              <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground bg-secondary/20 p-2 rounded-lg border border-border/30 w-fit">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Point CNAME record to{" "}
                <span className="font-mono text-foreground">
                  app.nebulaai.com
                </span>
              </div>
            </div>
          </div>

          <div className="h-px bg-border/50" />

          {/* Section 3: Live Preview */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Live Preview
              </h4>
              <button
                onClick={() => setPreviewMode(!previewMode)}
                className="text-xs text-accent flex items-center gap-1 hover:text-accent/80 transition-colors"
              >
                <Eye className="w-3 h-3" />{" "}
                {previewMode ? "Hide Preview" : "Show Preview"}
              </button>
            </div>

            <div className="rounded-xl border border-border bg-background overflow-hidden relative shadow-inner">
              {/* Mock Dashboard Header */}
              <div className="h-12 border-b border-border flex items-center justify-between px-4 bg-card/50">
                <div className="flex items-center gap-2">
                  {/* Logo Preview */}
                  <div
                    className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold text-white shadow-sm transition-colors duration-300"
                    style={{ backgroundColor: settings.primaryColor }}
                  >
                    {settings.brandName.slice(0, 1).toUpperCase()}
                  </div>
                  <span className="font-bold text-sm">
                    {settings.brandName}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-secondary" />
                </div>
              </div>

              {/* Mock Dashboard Body */}
              <div className="flex h-32">
                {/* Sidebar */}
                <div className="w-32 border-r border-border bg-secondary/10 p-3 space-y-2 hidden sm:block">
                  <div className="h-2 w-16 bg-secondary/50 rounded" />
                  {/* Active Nav Item showing Brand Color */}
                  <div
                    className="h-6 w-full bg-accent/10 rounded border border-accent/20 flex items-center px-2 gap-2"
                    style={{
                      backgroundColor: `${settings.primaryColor}15`,
                      borderColor: `${settings.primaryColor}30`,
                    }}
                  >
                    <LayoutDashboard
                      className="w-3 h-3"
                      style={{ color: settings.primaryColor }}
                    />
                    <div className="h-1.5 w-12 bg-foreground/10 rounded" />
                  </div>
                  <div className="h-6 w-full rounded flex items-center px-2 gap-2 opacity-50">
                    <Users className="w-3 h-3" />
                    <div className="h-1.5 w-10 bg-foreground/10 rounded" />
                  </div>
                  <div className="h-6 w-full rounded flex items-center px-2 gap-2 opacity-50">
                    <Settings className="w-3 h-3" />
                    <div className="h-1.5 w-14 bg-foreground/10 rounded" />
                  </div>
                </div>
                {/* Main Content Area */}
                <div className="flex-1 p-4">
                  <div className="h-4 w-32 bg-secondary/50 rounded mb-4" />
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-20 rounded-lg border border-border bg-card p-3">
                      <div
                        className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-2"
                        style={{
                          backgroundColor: `${settings.primaryColor}15`,
                        }}
                      >
                        <div
                          className="w-4 h-4 rounded bg-current opacity-50"
                          style={{ color: settings.primaryColor }}
                        />
                      </div>
                      <div className="h-2 w-16 bg-secondary rounded" />
                    </div>
                    <div className="h-20 rounded-lg border border-border bg-card p-3">
                      <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center mb-2" />
                      <div className="h-2 w-16 bg-secondary rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-border/50 flex justify-between bg-background flex-none z-10">
          <Button
            variant="outline"
            onClick={onClose}
            className="bg-transparent border-border hover:bg-secondary"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            className="bg-accent text-accent-foreground hover:bg-accent/90 min-w-[140px] transition-all duration-300"
          >
            {saved ? (
              <span className="flex items-center gap-2 animate-in fade-in zoom-in">
                <Check className="w-4 h-4" /> Changes Saved
              </span>
            ) : (
              "Save Settings"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
