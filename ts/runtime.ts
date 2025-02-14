import { SafeMode } from "$state/Desktop/ts/store";
import { AppRuntime } from "$ts/apps/runtime";
import { GlowingLogo } from "$ts/images/branding";
import { sendNotification } from "$ts/notif";
import { Process } from "$ts/process";
import { createErrorDialog } from "$ts/process/error";
import { UserDataStore } from "$ts/stores/user";
import { Store } from "$ts/writable";
import type { App, AppMutator } from "$types/app";
import { UserData } from "$types/user";
import { ReadableStore } from "$types/writable";
import { ShellAccelerators } from "./accelerators";

export class ShellRuntime extends AppRuntime {
  defaultUserStyle = "";
  UserStyle: ReadableStore<string> = Store(this.defaultUserStyle);

  constructor(app: App, mutator: AppMutator, process: Process) {
    super(app, mutator, process);

    process.accelerator.store.push(...ShellAccelerators(process));

    UserDataStore.subscribe((v) => this._loadUserStyle(v));

    setTimeout(() => {
      sendNotification({
        title: "ArcOS v6",
        message:
          "Thank you for checking out v6! Unfortunately we've stopped actively working on it. We're still making bug fixes now and then, but no major features will be added anymore.",
        buttons: [
          {
            caption: "Learn More",
            action: () => {
              createErrorDialog(
                {
                  title: "ArcOS v7",
                  message:
                    "I've continued ArcOS development solo on January 1st 2025, and I expect to release ArcOS v7 sometime in mid- to late 2025. It's a completely reimagined version of the operating system, from the apps you interact with to the fundamental way your data is stored, everything is redone.",
                  buttons: [
                    {
                      caption: "Join the Discord",
                      action: () => {
                        window.open("https://discord.gg/t5PaNP9dvg", "_blank");
                      },
                    },
                    { caption: "Okay", action: () => {}, suggested: true },
                  ],
                  image: GlowingLogo,
                },
                this.pid,
                true
              );
            },
          },
        ],
        image: GlowingLogo,
        timeout: 3000,
      });
    }, 1000);
  }

  _loadUserStyle(v: UserData) {
    if (SafeMode.get()) return;

    if (!v.sh.enableUserStyle) {
      this.UserStyle.set("<style></style>");

      return;
    }

    this.UserStyle.set(`<style>${v.sh.userStyle || this.defaultUserStyle}</style>`);
  }
}
