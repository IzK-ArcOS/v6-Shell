<script lang="ts">
  import { deleteNotification, getNotifCurrentStore } from "$ts/notif";
  import { ErrorButton } from "$types/error";

  export let button: ErrorButton;
  export let id: string;

  async function trigger() {
    await button.action();

    deleteNotification(id);
  }
</script>

<button on:click={trigger}>{button.caption}</button>
