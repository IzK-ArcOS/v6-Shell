import { QuickSettings } from "$apps/Shell/types/quicksettings";
import { spawnApp } from "$ts/apps";
import { ProcessStack } from "$ts/stores/process";
import { UserDataStore } from "$ts/stores/user";
import { ActionCenterOpened } from "../stores";
import { ShellArcFind } from "../triggers";

export const QuickSettingsStore: QuickSettings = [
  [
    {
      icon: "settings",
      iconOff: "settings",
      getter() {
        return false;
      },
      setter() {
        ActionCenterOpened.set(false); // in case settings is already opened
        spawnApp("SettingsApp");
        return false;
      },
      caption: "Open Settings",
    },
  ],
  [
    {
      icon: "motion_photos_on",
      iconOff: "motion_photos_off",
      getter(udata) {
        return udata.sh.anim;
      },
      setter(udata) {
        udata.sh.anim = !udata.sh.anim;

        UserDataStore.set(udata);

        return udata.sh.anim;
      },
      caption: "Animations",
    },
    {
      icon: "blur_on",
      iconOff: "blur_off",
      getter(udata) {
        return !udata.sh.noGlass;
      },
      setter(udata) {
        udata.sh.noGlass = !udata.sh.noGlass;

        UserDataStore.set(udata);

        return !udata.sh.noGlass;
      },
      caption: "Transparency",
    },
    {
      icon: "call_to_action",
      iconOff: "call_to_action",
      getter(udata) {
        return udata.sh.taskbar.docked;
      },
      setter(udata) {
        udata.sh.taskbar.docked = !udata.sh.taskbar.docked;

        UserDataStore.set(udata);

        return udata.sh.taskbar.docked;
      },
      caption: "Dock Taskbar",
    },
    {
      icon: "dark_mode",
      iconOff: "light_mode",
      getter(udata) {
        return udata.sh.desktop.theme == "dark";
      },
      setter(udata) {
        const current = udata.sh.desktop.theme;

        udata.sh.desktop.theme = current == "dark" ? "light" : "dark";

        UserDataStore.set(udata);

        return udata.sh.desktop.theme == "dark";
      },
      caption: "Dark mode",
    },
    {
      icon: "invert_colors",
      iconOff: "invert_colors_off",
      getter(udata) {
        return udata.sh.taskbar.colored;
      },
      setter(udata) {
        udata.sh.taskbar.colored = !udata.sh.taskbar.colored;

        UserDataStore.set(udata);

        return udata.sh.taskbar.colored;
      },
      caption: "Colored Shell",
    },
  ],
  [
    {
      icon: "search",
      iconOff: "search",
      getter() {
        return false;
      },
      setter() {
        const pid = ProcessStack.getAppPids("ArcShell")[0];
        const proc = ProcessStack.getProcess(pid);

        if (!proc) return;

        ShellArcFind(proc);

        return false;
      },
      caption: "Search",
    },
    {
      icon: "logout",
      iconOff: "logout",
      getter() {
        return false;
      },
      setter() {
        spawnApp("ExitApp");
        return false;
      },
      caption: "Exit",
    },
  ],
];
