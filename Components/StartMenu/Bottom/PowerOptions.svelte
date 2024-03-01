<script lang="ts">
  import { ShellArcFind, ShellPid } from "$apps/Shell/ts/triggers";
  import { spawnApp } from "$ts/apps/spawn";
  import { GetHelp } from "$ts/help";
  import { HelpArticles } from "$ts/stores/articles";
  import { ProcessStack } from "$ts/stores/process";

  function search() {
    const pid = ShellPid();
    const proc = ProcessStack.getProcess(pid);

    if (!proc) return;

    ShellArcFind(proc);
  }

  function settings() {
    spawnApp("SettingsApp");
  }

  function exit() {
    spawnApp("ExitApp");
  }
</script>

<div class="options">
  <button class="material-icons-round" title="Get Help" on:click={() => GetHelp(HelpArticles.home)}
    >question_mark</button
  >
  <button class="material-icons-round" on:click={search} title="Search (Alt+Shift+S)">search</button
  >
  <button class="material-icons-round" on:click={settings}>settings</button>
  <div class="sep" />
  <button class="material-icons-round" on:click={exit}> power_settings_new </button>
</div>
