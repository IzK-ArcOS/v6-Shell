<script lang="ts">
  import { SystemFolder } from "$apps/FileManager/ts/types";
  import { spawnApp } from "$ts/apps";

  export let folder: SystemFolder;

  function goHere() {
    spawnApp("FileManager", 0, [folder.path]);
  }
</script>

<button class="folder" on:click={goHere}>
  <img src={folder.icon} alt="" class="icon" />
  <span>{folder.name}</span>
</button>
