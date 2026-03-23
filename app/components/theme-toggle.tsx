"use client";

import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const { resolvedTheme, setTheme, theme } = useTheme();

  if (!mounted) {
    return (
      <div className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-1 rounded-full border border-border bg-card/90 p-1 shadow-lg backdrop-blur-md">
        <button
          type="button"
          aria-label="Light mode"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted"
        >
          <SunIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="System mode"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted"
        >
          <ComputerDesktopIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Dark mode"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted"
        >
          <MoonIcon className="h-5 w-5" />
        </button>
      </div>
    );
  }

  const baseButton =
    "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors";
  const activeButton = "bg-foreground text-background";
  const inactiveButton = "text-muted hover:text-foreground";

  return (
    <div className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-1 rounded-full border border-border bg-card/90 p-1 shadow-lg backdrop-blur-md">
      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-label="Switch to light mode"
        className={`${baseButton} ${theme === "light" ? activeButton : inactiveButton}`}
      >
        <SunIcon className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => setTheme("system")}
        aria-label={`Use system theme (currently ${resolvedTheme})`}
        className={`${baseButton} ${theme === "system" ? activeButton : inactiveButton}`}
      >
        <ComputerDesktopIcon className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-label="Switch to dark mode"
        className={`${baseButton} ${theme === "dark" ? activeButton : inactiveButton}`}
      >
        <MoonIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
