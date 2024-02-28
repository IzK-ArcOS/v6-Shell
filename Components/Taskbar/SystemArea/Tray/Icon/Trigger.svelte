<script lang="ts">
  import { TrayIcon } from "$apps/Shell/types/tray";
  import { ReadableStore } from "$types/writable";

  export let trayIcon: TrayIcon;
  export let openedTray: ReadableStore<string>;

  function open() {
    if (trayIcon.onOpen) {
      trayIcon.onOpen(trayIcon);
    } else if (trayIcon.popup) {
      openedTray.set(trayIcon.identifier);
    }
  }
</script>

<button
  class="trigger"
  on:click={open}
  title={trayIcon.title || ""}
  disabled={trayIcon.identifier == $openedTray}
  class:active={trayIcon.identifier == $openedTray}
>
  {#if trayIcon.icon}
    <span class="material-icons-round">{trayIcon.icon}</span>
  {:else}
    <img src={trayIcon.image} alt={trayIcon.identifier} />
  {/if}
</button>
