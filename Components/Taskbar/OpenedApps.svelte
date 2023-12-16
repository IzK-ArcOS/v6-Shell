<script lang="ts">
  import { isPopulatable } from "$ts/apps/utils";
  import { ProcessStack } from "$ts/stores/process";
  import { Process } from "$types/process";
  import OpenedApp from "./OpenedApps/OpenedApp.svelte";

  let processes: Map<number, Process | "disposed"> = new Map([]);

  ProcessStack.processes.subscribe((v) => (processes = v));
</script>

<div class="opened-apps">
  {#each [...processes] as [pid, proc]}
    {#if proc != "disposed" && proc.app && isPopulatable(proc.app)}
      <OpenedApp {pid} app={proc.app} />
    {/if}
  {/each}
</div>
