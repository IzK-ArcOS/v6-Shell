<script lang="ts">
  import { ProcessStack } from "$ts/stores/process";
  import { ProcessMap } from "$types/process";
  import OpenedApp from "./OpenedApps/OpenedApp.svelte";

  let processes: ProcessMap = new Map([]);

  ProcessStack.processes.subscribe((v) => (processes = v));
</script>

<div class="opened-apps">
  {#each [...processes] as [pid, proc]}
    <OpenedApp {pid} {proc} />
  {/each}
</div>
