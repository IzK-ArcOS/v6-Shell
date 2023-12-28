<script lang="ts">
  import { isPopulatable } from "$ts/apps";
  import { focusedPid } from "$ts/stores/apps";
  import { ProcessStack } from "$ts/stores/process";
  import { UserDataStore } from "$ts/stores/user";
  import { sleep } from "$ts/util";
  import { App } from "$types/app";

  export let pid: number;
  export let app: App;

  let closing = false;
  let render = true;

  ProcessStack.closedPids.subscribe(update);

  async function update(v: number[]) {
    closing = v.includes(pid);

    if (closing) {
      await sleep(300);

      render = false;
    }
  }

  UserDataStore.subscribe(() => {
    if (closing) return;

    render = isPopulatable(app);
  });

  function show() {
    $focusedPid = pid;
  }
</script>

{#if render}
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
{/if}
