<script lang="ts">
  import { getNotificationStore } from "$ts/notif";
  import { Notification } from "$types/notif";
  import { onMount } from "svelte";
  import NotificationSvelte from "./Notifications/Notification.svelte";

  let store: Map<string, Notification> = new Map([]);

  onMount(() => {
    const notifStore = getNotificationStore();

    if (!notifStore) return;

    notifStore.subscribe((v) => (store = v));
  });
</script>

<div class="notifications">
  {#each [...store] as [id, data]}
    <NotificationSvelte {id} {data} />
  {/each}
</div>
