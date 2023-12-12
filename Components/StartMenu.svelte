<script lang="ts">
  import { UserDataStore } from "$ts/stores/user";
  import { StartMenuOpened } from "../ts/stores";
  import Bottom from "./StartMenu/Bottom.svelte";
  import LeftPane from "./StartMenu/LeftPane.svelte";
  import RightPane from "./StartMenu/RightPane.svelte";
</script>

{#if $UserDataStore}
  <div
    class="start-menu"
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
