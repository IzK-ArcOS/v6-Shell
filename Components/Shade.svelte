<script lang="ts">
  import { maxZIndex } from "$ts/stores/apps";
  import { ActionCenterOpened, StartMenuOpened } from "../ts/stores";

  function closeAll() {
    ActionCenterOpened.set(false);
    StartMenuOpened.set(false);
  }
</script>

<button
  class="shade fullscreen"
  class:present={$ActionCenterOpened || $StartMenuOpened}
  style="z-index: {$maxZIndex * 3};"
  on:click={closeAll}
>
</button>
