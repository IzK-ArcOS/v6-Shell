import { Logo } from "$ts/branding";
import { ArcOSVersion } from "$ts/env";
import { UserDataStore } from "$ts/stores/user";
import { App } from "$types/app";
import AppSvelte from "../App.svelte";
import { ShellContext } from "./context";
import { ShellRuntime } from "./runtime";

export const ArcShell: App = {
  metadata: {
    name: "ArcShell",
    description: "The ArcOS Shell",
    author: "The ArcOS Team",
    version: ArcOSVersion,
    appGroup: "internal",
    icon: Logo(),
    core: true,
    hidden: true
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
    resizable: false,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: false,
  },
  singleInstance: true,
  contextMenu: ShellContext,
  loadCondition: () => !!UserDataStore.get()
};
