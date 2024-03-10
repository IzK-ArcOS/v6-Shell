<script lang="ts">
  import { closeNotification } from "$ts/notif";
  import { ProcessStack } from "$ts/stores/process";
  import { UserDataStore } from "$ts/stores/user";
  import { ActionCenterOpened, StartMenuOpened, TrayIconOpened } from "../ts/stores";
  import Header from "./ActionCenter/Header.svelte";
  import Notifications from "./ActionCenter/Notifications.svelte";
  import QuickSettings from "./ActionCenter/QuickSettings.svelte";

  function close() {
    $ActionCenterOpened = false;
  }

  ActionCenterOpened.subscribe(closeNotification);
  ProcessStack.processes.subscribe(close);
  TrayIconOpened.subscribe(close);
  StartMenuOpened.subscribe((v) => v && close());
</script>

<div
  class="actioncenter shell-colored"
  class:opened={$ActionCenterOpened}
  class:colored={$UserDataStore.sh.taskbar.colored}
>
  <Header />
  <Notifications />
  <QuickSettings />
</div>
