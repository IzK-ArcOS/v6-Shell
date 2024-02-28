<script lang="ts">
  import { ActionCenterOpened, TrayIconOpened } from "$apps/Shell/ts/stores";
  import { trayIcons } from "$apps/Shell/ts/tray/store";
  import { TrayIcon } from "$apps/Shell/types/tray";
  import { sleep } from "$ts/util";
  import { Store } from "$ts/writable";
  import Icon from "./Tray/Icon.svelte";

  let opened = false;
  let icons: TrayIcon[] = [];
  let openedTray = Store<string>("");

  ActionCenterOpened.subscribe((v) => v && ($TrayIconOpened = false));

  openedTray.subscribe((v) => {
    if (!v) return;

    TrayIconOpened.set(true);
  });

  TrayIconOpened.subscribe((v) => {
    if (!v) openedTray.set(null);
  });

  trayIcons.subscribe(async (v) => {
    if (!v) return;

    icons = [];
    await sleep(0);
    icons = v;
  });

  function toggle() {
    opened = !opened;
  }
</script>

<div class="tray" class:opened={icons.length > 3 ? opened : true}>
  {#if icons.length > 4}
    <button class="toggle material-icons-round" on:click={toggle}> chevron_left </button>
  {/if}
  {#each icons as trayIcon}
    <Icon {trayIcon} {openedTray} />
  {/each}
</div>
