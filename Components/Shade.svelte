<script lang="ts">
  import { ActionCenterOpened, StartMenuOpened } from "../ts/stores";

  function closeAll() {
    ActionCenterOpened.set(false);
    StartMenuOpened.set(false);
  }
</script>

<button
  class="shade fullscreen"
  class:present={$ActionCenterOpened || $StartMenuOpened}
  on:click={closeAll}
>
</button>
