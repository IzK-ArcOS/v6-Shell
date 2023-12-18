import type { App, AppMutator } from "$types/app";
import { AppRuntime } from "$ts/apps";

export class ShellRuntime extends AppRuntime {
  constructor(app: App, mutator: AppMutator) {
    super(app, mutator);
  }
}