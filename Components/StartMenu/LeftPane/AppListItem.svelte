<script lang="ts">
  import { spawnProcess } from "$ts/apps/process";
  import { App } from "$types/app";

  export let app: App;

  function open() {
    spawnProcess(app.id);
  }
</script>

<button class="item" on:click={open}>
  <img src={app.metadata.icon} class="icon" alt={app.id} />
  {app.metadata.name}
</button>
