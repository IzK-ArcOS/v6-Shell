<script lang="ts">
  import { spawnApp } from "$ts/apps/spawn";
  import { isPopulatable } from "$ts/apps/utils";
  import { UserDataStore } from "$ts/stores/user";
  import { App } from "$types/app";

  export let app: App;

  let render = true;

  UserDataStore.subscribe(() => {
    render = isPopulatable(app);
  });

  function open() {
    spawnApp(app.id);
  }
</script>

{#if render}
  <button class="item" on:click={open}>
    <img src={app.metadata.icon} class="icon" alt={app.id} />
    {app.metadata.name}
  </button>
{/if}
