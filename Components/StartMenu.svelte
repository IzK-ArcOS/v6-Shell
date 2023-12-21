<script lang="ts">
  import { focusedPid } from "$ts/stores/apps";
  import { ProcessStack } from "$ts/stores/process";
  import { UserDataStore } from "$ts/stores/user";
  import { ActionCenterOpened, StartMenuOpened } from "../ts/stores";
  import Bottom from "./StartMenu/Bottom.svelte";
  import LeftPane from "./StartMenu/LeftPane.svelte";
  import RightPane from "./StartMenu/RightPane.svelte";

  function close() {
    $StartMenuOpened = false;
  }

  focusedPid.subscribe(close);
  ProcessStack.processes.subscribe(close);
  ActionCenterOpened.subscribe((v) => v && close());
</script>

{#if $UserDataStore}
  <div
    class="startmenu"
    class:small={$UserDataStore.sh.start.small}
    class:opened={$StartMenuOpened}
  >
    <div class="top">
      <LeftPane />
      <RightPane />
    </div>
    <Bottom />
  </div>
{/if}
