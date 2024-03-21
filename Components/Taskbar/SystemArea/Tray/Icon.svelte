<script lang="ts">
  import { TrayIcon } from "$apps/Shell/types/tray";
  import { ReadableStore } from "$types/writable";
  import Popup from "./Icon/Popup.svelte";
  import Trigger from "./Icon/Trigger.svelte";

  export let trayIcon: TrayIcon;
  export let openedTray: ReadableStore<string>;
</script>

<div class="icon">
  <Trigger {trayIcon} {openedTray} />
  <Popup {trayIcon} {openedTray} />
</div>
