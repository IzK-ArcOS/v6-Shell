import { TrayIcon } from "$apps/Shell/types/tray";
import { Store } from "$ts/writable";

export const trayIcons = Store<TrayIcon[]>([]);
