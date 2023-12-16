<script lang="ts">
  import { spawnApp } from "$ts/apps/spawn";
  import { isPopulatable } from "$ts/apps/utils";
  import { ProcessStack } from "$ts/stores/process";
  import { App } from "$types/app";

  export let app: App;

  function open() {
    spawnApp(app.id);
  }
</script>

{#if isPopulatable(app)}
  <button class="item" on:click={open}>
    <img src={app.metadata.icon} class="icon" alt={app.id} />
    {app.metadata.name}
  </button>
{/if}
