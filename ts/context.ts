import { OpenSettingsPage } from "$apps/Settings/ts/main";
import { SEP_ITEM } from "$state/Desktop/ts/store";
import { spawnApp } from "$ts/apps";
import { ProcessManagerIcon } from "$ts/images/apps";
import { AppsIcon } from "$ts/images/general";
import { ShutdownIcon } from "$ts/images/power";
import { ProcessStack } from "$ts/stores/process";
import { UserDataStore } from "$ts/stores/user";
import { AppContextMenu } from "$types/app";

export const ShellContext: AppContextMenu = {
  clockcontext: [
    {
      caption: "Show Seconds",
      action: () => {
        UserDataStore.update((udata) => {
          udata.sh.taskbar.clockSecs = !udata.sh.taskbar.clockSecs;

          return udata;
        });
      },
      isActive: () => UserDataStore.get().sh.taskbar.clockSecs,
      icon: "av_timer",
    },
    {
      caption: "Show Date",
      action: () => {
        UserDataStore.update((udata) => {
          udata.sh.taskbar.clockDate = !udata.sh.taskbar.clockDate;

          return udata;
        });
      },
      isActive: () => UserDataStore.get().sh.taskbar.clockDate,
      icon: "calendar_month",
    },
    {
      caption: "12-hour clock",
      action: () => {
        UserDataStore.update((udata) => {
          udata.sh.taskbar.clock12hr = !udata.sh.taskbar.clock12hr;

          return udata;
        });
      },
      isActive: () => UserDataStore.get().sh.taskbar.clock12hr,
    },
    SEP_ITEM,
    {
      image: ProcessManagerIcon,
      caption: "Processes",
      action: () => {
        spawnApp("ProcessManager");
      },
    },
    SEP_ITEM,
    {
      icon: "settings",
      caption: "Shell settings",
      action: () => {
        OpenSettingsPage("shell");
      },
    },
  ],
  "shell-taskbar": [
    {
      icon: "shelf_position",
      caption: "Taskbar position",
      subItems: [
        {
          caption: "Top",
          icon: "arrow_upward",
          isActive: () => UserDataStore.get().sh.taskbar.pos == "top",
          action: () =>
            UserDataStore.update((v) => {
              v.sh.taskbar.pos = "top";

              return v;
            }),
        },
        {
          caption: "Left",
          icon: "arrow_backward",
          isActive: () => UserDataStore.get().sh.taskbar.pos == "vertical",
          action: () =>
            UserDataStore.update((v) => {
              v.sh.taskbar.pos = "vertical";

              return v;
            }),
        },
        {
          caption: "Right",
          icon: "arrow_forward",
          isActive: () => UserDataStore.get().sh.taskbar.pos == "vertical-right",
          action: () =>
            UserDataStore.update((v) => {
              v.sh.taskbar.pos = "vertical-right";

              return v;
            }),
        },
        {
          caption: "Bottom",
          icon: "arrow_downward",
          isActive: () => UserDataStore.get().sh.taskbar.pos == "",
          action: () =>
            UserDataStore.update((v) => {
              v.sh.taskbar.pos = "";

              return v;
            }),
        },
      ],
    },

    {
      icon: "settings",
      caption: "Shell settings",
      action: () => {
        OpenSettingsPage("shell");
      },
    },
    SEP_ITEM,
    {
      image: ProcessManagerIcon,
      caption: "Processes",
      action: () => {
        spawnApp("ProcessManager");
      },
    },
  ],
  "startmenu-applist": [
    {
      image: AppsIcon,
      caption: "Group apps",
      isActive: () => !UserDataStore.get().sh.start.noGroups,
      action() {
        UserDataStore.update((udata) => {
          udata.sh.start.noGroups = !udata.sh.start.noGroups;

          return udata;
        });
      },
    },
  ],
  "opened-app": [
    {
      caption: "Launch Another",
      icon: "launch",
      action(_, data) {
        spawnApp(data.id);
      },
    },
    SEP_ITEM,
    {
      caption: "App Info",
      icon: "info_outline",
      action(_, data) {
        spawnApp("AppInfo", 0, [data.id]);
      },
    },
    {
      caption: "Close",
      image: ShutdownIcon,
      action(_, data) {
        ProcessStack.kill(+data.pid, true);
      },
    },
  ],
};
