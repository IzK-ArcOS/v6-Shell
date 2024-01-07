import { closeContextMenu } from "$state/Desktop/ts/context";
import { getAppById, spawnOverlay } from "$ts/apps";
import { Process } from "$ts/process";
import { focusedPid } from "$ts/stores/apps";
import { AppKeyCombinations } from "$types/accelerator";
import { ActionCenterOpened, StartMenuOpened } from "./stores";

export const ShellAccelerators: (process: Process) => AppKeyCombinations = (process) => [
  {
    action(proc) {
      const opened = process.hasIdAsSubprocess("ProcessManager");

      if (opened) return;

      spawnOverlay(getAppById("ProcessManager"), proc.pid, [], true);
    },
    shift: false,
    alt: true,
    key: "x",
    global: true
  },
  {
    alt: true,
    key: "q",
    global: true,
    action() {
      const pid = focusedPid.get();

      if (!pid) return;

      const proc = process.handler.getProcess(pid)

      if (proc.app && proc.app.metadata.core) return;

      process.handler.kill(pid)
    },
  },
  {
    alt: true,
    key: "n",
    global: true,
    action() {
      ActionCenterOpened.set(!ActionCenterOpened.get())
    }
  },
  {
    alt: true,
    shift: false,
    key: "z",
    global: true,
    action() {
      StartMenuOpened.set(true)
    }
  },
  {
    key: "escape",
    global: true,
    action() {
      closeContextMenu();
    }
  }
]