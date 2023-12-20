<script lang="ts">
  import { maxZIndex } from "$ts/stores/apps";
  import { UserDataStore as uds } from "$ts/stores/user";
  import ActionCenter from "./Components/ActionCenter.svelte";
  import Shade from "./Components/Shade.svelte";
  import StartMenu from "./Components/StartMenu.svelte";
  import Taskbar from "./Components/Taskbar.svelte";
  import "./css/main.css";

  //export let app: App;
</script>

{#if $uds}
  <Shade />
  <div
    class="shell taskbar-bounds tb-{$uds.sh.taskbar.pos} fullscreen"
    class:vertical={$uds.sh.taskbar.pos.includes("vertical")}
    class:docked={$uds.sh.taskbar.docked}
  >
    <div class="primary">
      <StartMenu />
      <ActionCenter />
    </div>
    <div class="secondary">
      <Taskbar vertical={$uds.sh.taskbar.pos.includes("vertical")} />
    </div>
  </div>
{/if}
