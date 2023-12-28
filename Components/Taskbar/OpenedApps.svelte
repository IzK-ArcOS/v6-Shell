<script lang="ts">
  import { isPopulatable } from "$ts/apps/utils";
  import { ProcessStack } from "$ts/stores/process";
  import { UserDataStore } from "$ts/stores/user";
  import { ProcessMap, ProcessStoreValue } from "$types/process";
  import OpenedApp from "./OpenedApps/OpenedApp.svelte";

  let processes: ProcessStoreValue = [];

  ProcessStack.processes.subscribe((v) => (processes = v));
</script>

<div class="opened-apps" class:centered={$UserDataStore.sh.taskbar.centered}>
  {#each [...processes] as [pid, proc]}
    {#if !proc._disposed && proc.app}
      <OpenedApp {pid} app={proc.app} />
    {/if}
  {/each}
</div>
