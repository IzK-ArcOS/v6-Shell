<script lang="ts">
  import { getNotifCurrentStore, getNotificationStore } from "$ts/notif";
  import { UserDataStore } from "$ts/stores/user";
  import { onMount } from "svelte";
  import Notification from "./ActionCenter/Notifications/Notification.svelte";
  import { sleep } from "$ts/util";
  import { ArcSoundBus } from "$ts/soundbus";

  let show = false;
  let id = "";
  let data = null;

  const current = getNotifCurrentStore();
  const store = getNotificationStore();

  onMount(() => {
    current.subscribe(async (v) => {
      id = v;
      show = false;

      if (!v) return;
      await sleep(100);

      show = true;

      ArcSoundBus.playSound("arcos.notification");

      data = $store.get(id);
    });
  });
</script>

<div
  class="push-notification shell-colored"
  class:colored={$UserDataStore.sh.taskbar.colored}
  class:show
>
  {#if data}
    <Notification {id} {data} pushed />
  {/if}
</div>
