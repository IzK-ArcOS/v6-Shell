import { AppRuntime } from "$ts/apps";
import { Process } from "$ts/process";
import type { App, AppMutator } from "$types/app";

export class ShellRuntime extends AppRuntime {
  constructor(app: App, mutator: AppMutator, process: Process) {
    super(app, mutator, process);
  }
}