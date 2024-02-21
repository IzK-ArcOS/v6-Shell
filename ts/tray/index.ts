import { TrayIcon } from "$apps/Shell/types/tray";
import { trayIcons } from "./store";

/**
 * Creates a tray icon based on the provided data
 * @param data The tray icon data to use
 */
export function createTrayIcon(data: TrayIcon) {
  if (trayExists(data.identifier)) return false;

  const icons = trayIcons.get();

  icons.push(data);

  trayIcons.set(icons);
}

/**
 * Removes a tray icon from the system tray
 * @param identifier the ID to delete
 */
export function disposeTrayIcon(identifier: string) {
  const icons = trayIcons.get();

  for (let i = 0; i < icons.length; i++) {
    if (icons[i].identifier == identifier) icons.splice(i, 1);
  }

  trayIcons.set(icons);
}

/**
 * Checks if the specified ID is a valid tray icon.
 * @param identifier the ID to verify
 * @returns
 */
export function trayExists(identifier: string): boolean {
  const icons = trayIcons.get();

  for (const icon of icons) {
    if (icon.identifier == identifier) return true;
  }

  return false;
}
