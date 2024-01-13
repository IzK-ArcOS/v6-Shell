<script lang="ts">
  import {
    getNotifCurrentStore,
    getNotificationStore,
    isNotificationServiceActive,
  } from "$ts/notif";
  import { ArcSoundBus } from "$ts/soundbus";
  import { ProcessStack } from "$ts/stores/process";
  import { UserDataStore } from "$ts/stores/user";
  import { sleep } from "$ts/util";
  import { onMount } from "svelte";
  import { Unsubscriber } from "svelte/store";
  import Notification from "./ActionCenter/Notifications/Notification.svelte";
  import { ActionCenterOpened } from "../ts/stores";

  let show = false;
  let id = "";
  let data = null;
  let current = getNotifCurrentStore();
  let store = getNotificationStore();
  let unsubscribe: Unsubscriber;

  onMount(subscribe);

  function subscribe() {
    unsubscribe = current.subscribe(async (v) => {
      if (id == v) return;
      id = v;
      show = false;

      if (!v) return;
      await sleep(data ? 500 : 0);

      show = !$ActionCenterOpened;

      ArcSoundBus.playSound("arcos.notification");

      data = $store.get(id);
    });
  }

  ProcessStack.processes.subscribe(() => {
    const errored = !isNotificationServiceActive();

    if (!errored && unsubscribe) {
      current = getNotifCurrentStore();
      store = getNotificationStore();

      unsubscribe();
      unsubscribe = null;
      subscribe();
    }
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
