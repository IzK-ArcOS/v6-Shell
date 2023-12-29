<script lang="ts">
  import { QuickSetting } from "$apps/Shell/types/quicksettings";
  import QuickSettingSvelte from "./Group/QuickSetting.svelte";

  export let group: QuickSetting[];
</script>

<div class="group">
  {#each group as setting}
    <QuickSettingSvelte {setting} />
  {/each}
</div>
