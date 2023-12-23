<script lang="ts">
  import { UserDataStore } from "$ts/stores/user";
  import OpenedApps from "./Taskbar/OpenedApps.svelte";
  import StartButton from "./Taskbar/StartButton.svelte";
  import SystemArea from "./Taskbar/SystemArea.svelte";

  export let vertical = false;
</script>

<div
  class="taskbar shell-colored"
  class:vertical
  class:colored={$UserDataStore.sh.taskbar.colored}
>
  <StartButton />
  <OpenedApps />
  <SystemArea />
</div>
