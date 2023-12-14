<script lang="ts">
  import { spawnProcess } from "$ts/apps/process";

  function search() {
    return;
  }

  function settings() {
    spawnProcess("SettingsApp");
  }

  function exit() {
    spawnProcess("ExitApp");
  }
</script>

<div class="options">
  <button
    class="material-icons-round"
    on:click={search}
    title="Search (Alt+Shift+S)">search</button
  >
  <button class="material-icons-round" on:click={settings}>settings</button>
  <div class="sep" />
  <button class="material-icons-round" on:click={exit}>
    power_settings_new
  </button>
</div>
