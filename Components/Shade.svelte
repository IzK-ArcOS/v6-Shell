<script lang="ts">
  import { ActionCenterOpened, StartMenuOpened, TrayIconOpened } from "../ts/stores";

  function closeAll() {
    ActionCenterOpened.set(false);
    StartMenuOpened.set(false);
    TrayIconOpened.set(false);
  }
</script>

<button
  class="shade fullscreen"
  class:present={$ActionCenterOpened || $StartMenuOpened || $TrayIconOpened}
  on:click={closeAll}
>
</button>
