<script lang="ts">
  import { getNotificationStore } from "$ts/notif";
  import { Notification } from "$types/notif";
  import { onMount } from "svelte";
  import NotificationSvelte from "./Notifications/Notification.svelte";
  import { WarningIcon } from "$ts/images/general";

  let errored = false;
  let store: Map<string, Notification> = new Map([]);

  onMount(() => {
    const notifStore = getNotificationStore();

    if (!notifStore) return (errored = true);

    notifStore.subscribe((v) => (store = v));
  });
</script>

<div class="notifications">
  {#each [...store] as [id, data]}
    <NotificationSvelte {id} {data} />
  {/each}
  {#if errored}
    <div class="service-error">
      <img src={WarningIcon} alt="" />
      <span>Missing Notification Service!</span>
    </div>
  {/if}
</div>
