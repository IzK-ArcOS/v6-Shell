import { getAppById, spawnOverlay } from "$ts/apps";
import { AppRuntime } from "$ts/apps/runtime";
import { Process } from "$ts/process";
import { focusedPid } from "$ts/stores/apps";
import type { App, AppMutator } from "$types/app";
import { ShellAccelerators } from "./accelerators";

export class ShellRuntime extends AppRuntime {
  constructor(app: App, mutator: AppMutator, process: Process) {
    super(app, mutator, process);

    process.accelerator.store.push(...ShellAccelerators(process))
  }
}