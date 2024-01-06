<script lang="ts">
  import { deleteNotification } from "$ts/notif";
  import { sleep } from "$ts/util";
  import { ErrorButton } from "$types/error";

  export let button: ErrorButton;
  export let id: string;
  export let deleting: boolean;
  export let pushed = false;

  async function trigger() {
    await button.action();

    deleting = true;

    await sleep(pushed ? 0 : 500);

    deleteNotification(id);
  }
</script>

<button on:click={trigger}>{button.caption}</button>
