<script lang="ts">
  import { UserDataStore as uds } from "$ts/stores/user";
  import { onMount } from "svelte";
  import ActionCenter from "./Components/ActionCenter.svelte";
  import PushNotification from "./Components/PushNotification.svelte";
  import Shade from "./Components/Shade.svelte";
  import StartMenu from "./Components/StartMenu.svelte";
  import Taskbar from "./Components/Taskbar.svelte";
  import "./css/main.css";
  import { ShellRuntime } from "./ts/runtime";
  import { StartCoreProcesses } from "$ts/process/startup";

  export let runtime: ShellRuntime;

  let render = false;

  onMount(async () => {
    const args = runtime.process.args;

    if (args.length > 0 && args[0] === true) await StartCoreProcesses(true);

    render = true;
  });
</script>

{#if $uds && render}
  <Shade />
  <div
    class="shell taskbar-bounds tb-{$uds.sh.taskbar.pos} fullscreen"
    class:vertical={$uds.sh.taskbar.pos.includes("vertical")}
    class:docked={$uds.sh.taskbar.docked}
  >
    <div class="primary">
      <StartMenu />
      <PushNotification />
      <ActionCenter />
    </div>
    <div class="secondary">
      <Taskbar vertical={$uds.sh.taskbar.pos.includes("vertical")} />
    </div>
  </div>
{/if}
