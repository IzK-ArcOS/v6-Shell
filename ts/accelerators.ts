import { closeContextMenu } from "$state/Desktop/ts/context";
import { getAppById, isOpened, spawnApp, spawnOverlay } from "$ts/apps";
import { Process } from "$ts/process";
import { GlobalDispatch } from "$ts/process/dispatch/global";
import { focusedPid } from "$ts/stores/apps";
import { sleep } from "$ts/util";
import { AppKeyCombinations } from "$types/accelerator";
import { ActionCenterOpened, StartMenuOpened } from "./stores";

export const ShellAccelerators: (process: Process) => AppKeyCombinations = (process) => [
  {
    action(proc) {
      const opened = process.hasIdAsSubprocess("ProcessManager");
      const elevating = isOpened("SecureContext");

      if (opened || elevating) return;

      spawnOverlay(getAppById("ProcessManager"), proc.pid, [], true);
    },
    shift: false,
    alt: true,
    key: "x",
    global: true
  },
  {
    action(proc) {
      const opened = process.hasIdAsSubprocess("KeyboardShortcuts");
      const elevating = isOpened("SecureContext");

      if (opened || elevating) return;

      spawnOverlay(getAppById("KeyboardShortcuts"), proc.pid, [], true);
    },
    ctrl: true,
    key: "/",
    global: true
  },
  {
    alt: true,
    key: "q",
    global: true,
    async action() {
      const pid = focusedPid.get();

      if (!pid) return;

      const proc = process.handler.getProcess(pid)

      if (!proc) return;

      const parentPid = proc.parentPid

      if (proc.app && (proc.app.metadata.core || proc.app.metadata.noCloseAccelerator)) return;

      process.handler.kill(pid, true);

      await sleep()

      if (parentPid) focusedPid.set(parentPid)
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
  },
  {
    key: "d",
    global: true,
    alt: true,
    action() {
      GlobalDispatch.dispatch("minimize-all")
    }
  },
  {
    key: "t",
    alt: true,
    action() {
      spawnApp("ArcTerm");
    },
    global: true
  }
]