import { UserData } from "$types/user";

export interface QuickSetting {
  icon: string;
  iconOff: string;
  caption: string;
  setter: (userdata: UserData) => boolean;
  getter: (userdata: UserData) => boolean;
}

export type QuickSettings = QuickSetting[][]; // group[quicksetting[]]
