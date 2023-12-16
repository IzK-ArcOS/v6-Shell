<script lang="ts">
  import { focusedPid } from "$ts/stores/apps";
  import { UserDataStore } from "$ts/stores/user";
  import { App } from "$types/app";

  export let pid: number;
  export let app: App;

  function show() {
    $focusedPid = pid;
  }
</script>

<button
  class="opened-app"
  on:click={show}
  class:activated={$focusedPid == pid}
  class:labels={$UserDataStore.sh.taskbar.labels}
>
  <img src={app.metadata.icon} alt={app.id} />
  {#if $UserDataStore.sh.taskbar.labels}
    <span>{app.metadata.name}</span>
  {/if}
</button>
