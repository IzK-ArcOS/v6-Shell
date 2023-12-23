<script>
  import { ProcessStack } from "$ts/stores/process";
  import { UserDataStore } from "$ts/stores/user";
  import { ActionCenterOpened, StartMenuOpened } from "../ts/stores";

  function close() {
    $ActionCenterOpened = false;
  }

  ProcessStack.processes.subscribe(close);
  StartMenuOpened.subscribe((v) => v && close());
</script>

<div
  class="actioncenter shell-colored"
  class:opened={$ActionCenterOpened}
  class:colored={$UserDataStore.sh.taskbar.colored}
></div>
