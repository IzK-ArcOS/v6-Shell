import { TrayIcon } from "$apps/Shell/types/tray";
import { Log } from "$ts/console";
import { trayIcons } from "./store";

/**
 * Creates a tray icon based on the provided data
 * @param data The tray icon data to use
 */
export function createTrayIcon(data: TrayIcon) {
  if (trayExists(data.identifier)) return false;

  Log("Shell/ts/tray", `Creating tray icon with identifier "${data.identifier}"`);

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

/**
 * Changes the image of an existing tray icon
 * @param identifier The tray icon to modify
 * @param image The new image for the tray icon
 */

export function changeTrayIconImage(identifier: string, image: string) {
  const icons = trayIcons.get();

  for (let i = 0; i < icons.length; i++) {
    if (icons[i].identifier != identifier) continue;

    icons[i].image = image;

    console.log(icons[i]);
  }

  trayIcons.set(icons);
}
