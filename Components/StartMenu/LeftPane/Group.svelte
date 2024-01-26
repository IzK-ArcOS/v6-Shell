<script lang="ts">
  import { getAppById, isPopulatable } from "$ts/apps/utils";
  import { FolderIcon } from "$ts/images/filesystem";
  import { CompiledAppGroup } from "$types/groups";
  import AppListItem from "./AppListItem.svelte";

  export let group: CompiledAppGroup;

  let expand = false;

  const toggle = () => (expand = !expand);
</script>

{#if group && group.apps}
  <div class="group" class:expand>
    <button class="expander" on:click={toggle}>
      <img src={FolderIcon} alt="" />
      <span class="capt">{group.name}</span>
    </button>
    <div class="apps">
      {#each group.apps as id}
        {#if isPopulatable(getAppById(id))}
          <AppListItem app={getAppById(id)} />
        {/if}
      {/each}
    </div>
  </div>
{/if}
