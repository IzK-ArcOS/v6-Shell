<script lang="ts">
  import { StartCoreProcesses } from "$ts/process/startup";
  import { UserDataStore as uds } from "$ts/stores/user";
  import { onMount } from "svelte";
  import ActionCenter from "./Components/ActionCenter.svelte";
  import PushNotification from "./Components/PushNotification.svelte";
  import Shade from "./Components/Shade.svelte";
  import StartMenu from "./Components/StartMenu.svelte";
  import Taskbar from "./Components/Taskbar.svelte";
  import Watermark from "./Components/Watermark.svelte";
  import "./css/main.css";
  import { ShellRuntime } from "./ts/runtime";

  export let runtime: ShellRuntime;

  const { UserStyle } = runtime;

  let render = false;

  onMount(async () => {
    const args = runtime.process.args;

    if (args.length > 0 && args[0] === true) await StartCoreProcesses(true);

    render = true;
  });
</script>

{#if $uds && render}
  {@html $UserStyle}
  <Shade />
  <div
    class="shell taskbar-bounds tb-{$uds.sh.taskbar.pos} fullscreen"
    class:vertical={$uds.sh.taskbar.pos.includes("vertical")}
    class:docked={$uds.sh.taskbar.docked}
  >
    <div class="primary">
      <StartMenu />
      <Watermark />
      <PushNotification />
      <ActionCenter />
    </div>
    <div class="secondary">
      <Taskbar vertical={$uds.sh.taskbar.pos.includes("vertical")} />
    </div>
  </div>
{/if}
