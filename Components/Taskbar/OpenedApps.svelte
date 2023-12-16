<script lang="ts">
  import { isPopulatable } from "$ts/apps/utils";
  import { ProcessStack } from "$ts/stores/process";
  import { ProcessMap } from "$types/process";
  import OpenedApp from "./OpenedApps/OpenedApp.svelte";

  let processes: ProcessMap = new Map([]);

  ProcessStack.processes.subscribe((v) => (processes = v));
</script>

<div class="opened-apps">
  {#each [...processes] as [pid, proc]}
    {#if !proc._disposed && proc.app && isPopulatable(proc.app)}
      <OpenedApp {pid} app={proc.app} />
    {/if}
  {/each}
</div>
