<script>
  import { maxZIndex } from "$ts/stores/apps";
  import { ProcessStack } from "$ts/stores/process";
  import { ActionCenterOpened, StartMenuOpened } from "../ts/stores";

  function close() {
    $ActionCenterOpened = false;
  }

  ProcessStack.processes.subscribe(close);
  StartMenuOpened.subscribe((v) => v && close());
</script>

<div class="actioncenter" class:opened={$ActionCenterOpened}></div>
