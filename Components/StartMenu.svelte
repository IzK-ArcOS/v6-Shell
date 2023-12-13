<script lang="ts">
  import { maxZIndex } from "$ts/stores/apps";
  import { UserDataStore } from "$ts/stores/user";
  import { StartMenuOpened } from "../ts/stores";
  import Bottom from "./StartMenu/Bottom.svelte";
  import LeftPane from "./StartMenu/LeftPane.svelte";
  import RightPane from "./StartMenu/RightPane.svelte";
</script>

{#if $UserDataStore}
  <div
    class="startmenu"
    class:small={$UserDataStore.sh.start.small}
    class:opened={$StartMenuOpened}
    style="z-index: {$maxZIndex + 4};"
  >
    <div class="top">
      <LeftPane />
      <RightPane />
    </div>
    <Bottom />
  </div>
{/if}
