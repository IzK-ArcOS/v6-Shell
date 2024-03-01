import { getAppById, isOpened, spawnOverlay } from "$ts/apps";
import { Process } from "$ts/process";
import { ProcessStack } from "$ts/stores/process";

export function ShellArcFind(process: Process) {
  const opened = process.hasIdAsSubprocess("ArcFind");
  const elevating = isOpened("SecureContext");

  if (opened || elevating) return;

  spawnOverlay(getAppById("ArcFind"), process.pid, [], true);
}

export function ShellProcessManager(process: Process) {
  const opened = process.hasIdAsSubprocess("ProcessManager");
  const elevating = isOpened("SecureContext");

  if (opened || elevating) return;

  spawnOverlay(getAppById("ProcessManager"), process.pid, [], true);
}

export function ShellKeyboardShortcuts(process: Process) {
  const opened = process.hasIdAsSubprocess("KeyboardShortcuts");
  const elevating = isOpened("SecureContext");

  if (opened || elevating) return;

  spawnOverlay(getAppById("KeyboardShortcuts"), process.pid, [], true);
}

export const ShellPid = () => ProcessStack.getAppPids("ArcShell")[0] || 0;
