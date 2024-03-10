<script lang="ts">
  import { QuickSettingsStore } from "$apps/Shell/ts/quicksettings/store";
  import Group from "./QuickSettings/Group.svelte";
</script>

<div class="quick-settings">
  {#each QuickSettingsStore as group}
    <Group {group} />
  {/each}
</div>
