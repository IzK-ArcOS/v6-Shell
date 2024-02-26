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
  import { onDestroy, onMount } from "svelte";
  import { Unsubscriber } from "svelte/store";
  import { ActionCenterOpened } from "../ts/stores";
  import Notification from "./ActionCenter/Notifications/Notification.svelte";

  let show = false;
  let id = "";
  let data = null;
  let current = getNotifCurrentStore();
  let store = getNotificationStore();
  let unsubscribe: Unsubscriber;

  onMount(subscribe);

  function subscribe() {
    if (!current) return;

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

  let procSub = ProcessStack.processes.subscribe(() => {
    const errored = !isNotificationServiceActive();

    if (!errored && unsubscribe) {
      current = getNotifCurrentStore();
      store = getNotificationStore();

      if (unsubscribe) unsubscribe();
      unsubscribe = null;
      subscribe();
    }
  });

  onDestroy(() => {
    procSub();
    if (unsubscribe) unsubscribe();
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
