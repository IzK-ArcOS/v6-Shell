<script lang="ts">
  import { isPopulatable } from "$ts/apps";
  import { Process } from "$ts/process";
  import { focusedPid } from "$ts/stores/apps";
  import { ProcessStack } from "$ts/stores/process";
  import { UserDataStore } from "$ts/stores/user";
  import { sleep } from "$ts/util";

  export let pid: number;
  export let proc: Process;

  const { mutator } = proc;

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
    if (closing || !$mutator) return;

    render = isPopulatable($mutator);
  });

  function show() {
    $focusedPid = pid;
  }
</script>

{#if render && !proc._disposed && $mutator}
  <button
    class="opened-app"
    on:click={show}
    class:activated={$focusedPid == pid}
    class:labels={$UserDataStore.sh.taskbar.labels}
    class:closing
    title={$UserDataStore.sh.taskbar.labels
      ? proc.app.metadata.name
      : $mutator.metadata.name}
  >
    <img src={$mutator.metadata.icon} alt={$mutator.id} />
    {#if $UserDataStore.sh.taskbar.labels}
      <span>{$mutator.metadata.name}</span>
    {/if}
  </button>
{/if}
