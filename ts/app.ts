import { Logo } from "$ts/branding";
import { ArcOSVersion } from "$ts/env";
import { UserDataStore } from "$ts/stores/user";
import { App } from "$types/app";
import AppSvelte from "../App.svelte";
import { ShellContext } from "./context";
import { ShellRuntime } from "./runtime";

export const ArcShell: App = {
  metadata: {
    name: "ArcOS",
    description: "The ArcOS Shell",
    author: "The ArcOS Team",
    version: ArcOSVersion,
    appGroup: "coreApps",
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
  loadCondition: () => !!UserDataStore.get(),
  acceleratorDescriptions: {
    "ctrl+/": "Display the shortcuts overview",
    "alt+x": "Open the Process Manager overlay",
    "alt+q": "Close the focused application",
    "alt+n": "Toggle the notification center",
    "alt+z": "Toggle the Start menu",
    "alt+d": "Show the desktop",
    "alt+t": "Open a new ArcTerm window",
  }
};
