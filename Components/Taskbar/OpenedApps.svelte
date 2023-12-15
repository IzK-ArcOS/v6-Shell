<script lang="ts">
  import { isPopulatable } from "$ts/apps/utils";
  import { processes } from "$ts/stores/apps";
  import OpenedApp from "./OpenedApps/OpenedApp.svelte";
</script>

<div class="opened-apps">
  {#each [...$processes] as [pid, proc]}
    {#if proc != "disposed" && isPopulatable(proc)}
      <OpenedApp {pid} {proc} />
    {/if}
  {/each}
</div>
