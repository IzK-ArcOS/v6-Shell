import type { App } from "$types/app";
import { AppRuntime } from "$ts/apps";

export class ShellRuntime extends AppRuntime { // Predictably might go unused, we'll have to see.
  constructor(app: App) {
    super(app);
  }
}