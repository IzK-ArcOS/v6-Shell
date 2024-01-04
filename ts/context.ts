import { OpenSettingsPage } from "$apps/Settings/ts/main";
import { SEP_ITEM } from "$state/Desktop/ts/store";
import { AppsIcon } from "$ts/images/general";
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
    /* SEP_ITEM,
    {
      image: AppManIcon,
      caption: "Application Manager",
      action: () => {
        openWindow("AppMan");
      },
    }, */
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
    /* {
      image: AppManIcon,
      caption: "Application Manager",
      action: () => {
        openWindow("AppMan");
      },
    }, */
    SEP_ITEM,
    {
      icon: "settings",
      caption: "Shell settings",
      action: () => {
        OpenSettingsPage("shell");
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
}