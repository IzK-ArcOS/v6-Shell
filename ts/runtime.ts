import { AppRuntime } from "$ts/apps/runtime";
import { Process } from "$ts/process";
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
  }

  _loadUserStyle(v: UserData) {
    this.UserStyle.set(`<style>${v.sh.userStyle || this.defaultUserStyle}</style>`);
  }
}
