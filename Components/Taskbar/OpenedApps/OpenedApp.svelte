<script lang="ts">
  import { focusedPid } from "$ts/stores/apps";
  import { ProcessStack } from "$ts/stores/process";
  import { UserDataStore } from "$ts/stores/user";
  import { App } from "$types/app";

  export let pid: number;
  export let app: App;

  let closing = false;

  ProcessStack.closedPids.subscribe((v) => (closing = v.includes(pid)));

  function show() {
    $focusedPid = pid;
  }
</script>

<button
  class="opened-app"
  on:click={show}
  class:activated={$focusedPid == pid}
  class:labels={$UserDataStore.sh.taskbar.labels}
  class:closing
>
  <img src={app.metadata.icon} alt={app.id} />
  {#if $UserDataStore.sh.taskbar.labels}
    <span>{app.metadata.name}</span>
  {/if}
</button>
