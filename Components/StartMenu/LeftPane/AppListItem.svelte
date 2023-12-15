<script lang="ts">
  import { spawnProcess } from "$ts/apps/process";
  import { isPopulatable } from "$ts/apps/utils";
  import { App } from "$types/app";

  export let app: App;

  function open() {
    spawnProcess(app.id);
  }
</script>

{#if isPopulatable(app)}
  <button class="item" on:click={open}>
    <img src={app.metadata.icon} class="icon" alt={app.id} />
    {app.metadata.name}
  </button>
{/if}
