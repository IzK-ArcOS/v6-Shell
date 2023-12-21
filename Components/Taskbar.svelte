<script lang="ts">
  import OpenedApps from "./Taskbar/OpenedApps.svelte";
  import StartButton from "./Taskbar/StartButton.svelte";
  import SystemArea from "./Taskbar/SystemArea.svelte";

  export let vertical = false;
</script>

<div class="taskbar" class:vertical>
  <StartButton />
  <OpenedApps />
  <SystemArea />
</div>
