<script lang="ts">
  import { logout } from "$state/Desktop/ts/power";
  import { spawnApp } from "$ts/apps/spawn";

  function search() {
    return;
  }

  function settings() {
    spawnApp("SettingsApp");
  }

  function exit() {
    spawnApp("ExitApp");
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
