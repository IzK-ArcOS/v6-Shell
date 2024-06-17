export interface TrayIcon {
  onOpen?: (tray: TrayIcon) => void;
  image: string;
  identifier: string;
  title?: string;
  popup?: {
    component: any;
    width: number;
    height: number;
    className?: string;
    runtime?: any;
  };
}
