<script lang="ts">
  import { SystemFolders } from "$apps/FileManager/ts/store";
  import Folder from "./RightPane/Folder.svelte";
</script>

<div class="rightpane">
  {#each SystemFolders as folder}
    <Folder {folder} />
  {/each}
</div>
