import { TrayIcon } from "$apps/Shell/types/tray";
import { trayIcons } from "./store";

export function createTrayIcon(data: TrayIcon) {
  if (trayExists(data.identifier)) return false;

  const icons = trayIcons.get();

  icons.push(data);

  trayIcons.set(icons);
}

export function disposeTrayIcon(identifier: string) {
  const icons = trayIcons.get();

  for (let i = 0; i < icons.length; i++) {
    if (icons[i].identifier == identifier) icons.splice(i, 1);
  }

  trayIcons.set(icons);
}

export function trayExists(identifier: string): boolean {
  const icons = trayIcons.get();

  for (let i = 0; i < icons.length; i++) {
    if (icons[i].identifier == identifier) return true;
  }

  return false;
}
