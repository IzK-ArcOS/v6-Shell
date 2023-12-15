<script>
  import { maxZIndex, processes } from "$ts/stores/apps";
  import { ActionCenterOpened, StartMenuOpened } from "../ts/stores";

  function close() {
    $ActionCenterOpened = false;
  }

  processes.subscribe(close);
  StartMenuOpened.subscribe((v) => v && close());
</script>

<div
  class="actioncenter"
  style="z-index: {$maxZIndex + 6};"
  class:opened={$ActionCenterOpened}
></div>
