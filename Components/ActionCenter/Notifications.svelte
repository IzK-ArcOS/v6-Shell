<script lang="ts">
  import { WarningIcon } from "$ts/images/dialog";
  import { getNotificationStore, isNotificationServiceActive } from "$ts/notif";
  import { ProcessStack } from "$ts/stores/process";
  import { sleep } from "$ts/util";
  import { Notification } from "$types/notif";
  import { onMount } from "svelte";
  import NotificationSvelte from "./Notifications/Notification.svelte";

  let errored = false;
  let store: Map<string, Notification> = new Map([]);

  onMount(() => {
    const notifStore = getNotificationStore();

    if (!notifStore) return;

    notifStore.subscribe(async (v) => {
      store = null;

      if (!v) return;

      await sleep();

      store = v;
    });
  });

  ProcessStack.processes.subscribe(() => {
    errored = !isNotificationServiceActive();

    if (!errored) {
      const notifStore = getNotificationStore();

      store = notifStore.get();
    }
  });
</script>

<div class="notifications">
  {#if store}
    {#each [...store] as [id, data]}
      <NotificationSvelte {id} {data} />
    {/each}
    {#if !store.size}
      <p class="none">You have no notifications</p>
    {/if}
  {/if}
  {#if errored}
    <div class="service-error">
      <img src={WarningIcon} alt="" />
      <span>Missing Notification Service!</span>
    </div>
  {/if}
</div>
