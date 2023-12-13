<script lang="ts">
  import { maxZIndex } from "$ts/stores/apps";
  import StartButton from "./Taskbar/StartButton.svelte";

  export let vertical = false;
</script>

<div class="taskbar" style="z-index: {$maxZIndex + 6};">
  <StartButton />
</div>
