import { Logo } from "$ts/branding";
import { ArcOSVersion } from "$ts/env";
import { App } from "$types/app";
import AppSvelte from "../App.svelte";
import { ShellRuntime } from "./runtime";

export const ArcShell: App = {
  metadata: {
    name: "ArcShell",
    description: "The ArcOS Shell",
    author: "The ArcOS Team",
    version: ArcOSVersion,
    icon: Logo(),
    core: true
  },
  runtime: ShellRuntime,
  content: AppSvelte,
  id: "ArcShell",
  size: { w: 0, h: 0 },
  minSize: { w: 0, h: 0 },
  maxSize: { w: 0, h: 0 },
  pos: { x: 0, y: 0 },
  state: {
    minimized: false,
    maximized: false,
    headless: false,
    fullscreen: false,
    resizable: false
  },
  controls: {
    minimize: false,
    maximize: false,
    close: false
  }
}