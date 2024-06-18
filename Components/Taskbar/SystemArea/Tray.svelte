<script lang="ts">
  import { ActionCenterOpened, TrayIconOpened } from "$apps/Shell/ts/stores";
  import { trayIcons } from "$apps/Shell/ts/tray/store";
  import { TrayIcon } from "$apps/Shell/types/tray";
  import { Store } from "$ts/writable";
  import { onMount } from "svelte";
  import Icon from "./Tray/Icon.svelte";
  import { GlobalDispatch } from "$ts/process/dispatch/global";
  import { IconLibrary } from "$apps/IconLibrary/ts/app";
  import { getAllImages } from "$ts/images";
  import { QuestionIcon } from "$ts/images/dialog";
  import { changeTrayIconImage } from "$apps/Shell/ts/tray";
  import { createErrorDialog } from "$ts/process/error";
  import { ComponentIcon } from "$ts/images/general";

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

  function toggle() {
    opened = !opened;
  }

  onMount(() => {
    GlobalDispatch.subscribe("change-tray-image", (data: [string, string]) => {
      console.log(data);
      if (!Array.isArray(data)) return;
      if (data.length !== 2) return;

      const identifier = data[0];
      const imageId = data[1];
      const image = getAllImages()[imageId] || QuestionIcon;

      console.log(identifier, imageId, image);

      changeTrayIconImage(identifier, image);
    });
    GlobalDispatch.subscribe("notify-tray-icons", () => {
      const icons = $trayIcons.map((i) => i.identifier).join("<br/>");
      let text = `<code>${icons}</code>`;
      createErrorDialog(
        {
          title: "notify-tray-icons",
          message: text,
          image: ComponentIcon,
          buttons: [{ caption: "Okay", action() {} }],
        },
        0,
      );
    });
  });
</script>

<div class="tray" class:opened={icons.length > 3 ? opened : true}>
  {#if $trayIcons.length > 4}
    <button class="toggle material-icons-round" on:click={toggle}> chevron_left </button>
  {/if}
  {#each $trayIcons as trayIcon}
    <Icon {trayIcon} {openedTray} />
  {/each}
</div>
