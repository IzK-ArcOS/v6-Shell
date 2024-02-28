<script lang="ts">
  import { TrayIcon } from "$apps/Shell/types/tray";
  import { UserDataStore } from "$ts/stores/user";
  import { ReadableStore } from "$types/writable";

  export let openedTray: ReadableStore<string>;
  export let trayIcon: TrayIcon;
</script>

{#if trayIcon.popup}
  <div
    class="popup shell-colored {trayIcon.popup.className || ''}"
    class:colored={$UserDataStore.sh.taskbar.colored}
    class:visible={$openedTray == trayIcon.identifier}
    style="--w: {trayIcon.popup.width}px; --h: {trayIcon.popup.height}px;"
  >
    <svelte:component this={trayIcon.popup.component} icon={trayIcon} {openedTray} />
  </div>
{/if}
