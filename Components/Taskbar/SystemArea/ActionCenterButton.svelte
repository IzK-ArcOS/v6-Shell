<script lang="ts">
  import { ActionCenterOpened } from "$apps/Shell/ts/stores";
  import { getNotificationStore } from "$ts/notif";
  import { ProcessStack } from "$ts/stores/process";
  import { Unsubscriber } from "svelte/store";

  let unsubscribe: Unsubscriber;
  let count = 0;

  function toggle() {
    $ActionCenterOpened = !$ActionCenterOpened;
  }

  ProcessStack.processes.subscribe(() => {
    if (unsubscribe) unsubscribe();

    const notifStore = getNotificationStore();

    if (!notifStore) return;

    unsubscribe = notifStore.subscribe((v) => v && (count = v.size));
  });
</script>

<button
  class="action-center material-icons-round"
  class:activated={$ActionCenterOpened}
  on:click={toggle}
>
  {count ? "notifications" : "notifications_none"}
</button>
