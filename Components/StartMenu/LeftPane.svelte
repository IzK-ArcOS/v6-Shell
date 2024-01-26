<script lang="ts">
  import { getAppGroups } from "$ts/apps/groups";
  import { getAppById } from "$ts/apps/utils";
  import { appLibrary } from "$ts/stores/apps";
  import { UserDataStore } from "$ts/stores/user";
  import { sleep } from "$ts/util";
  import { Store } from "$ts/writable";
  import { CompiledAppGroupStore } from "$types/groups";
  import AppListItem from "./LeftPane/AppListItem.svelte";
  import Group from "./LeftPane/Group.svelte";

  let groups = Store<CompiledAppGroupStore>({});
  let rest: string[] = [];

  async function update() {
    $groups = {};

    await sleep();

    const getter = getAppGroups();

    $groups = getter.groups;
    rest = getter.rest;
  }

  appLibrary.subscribe(update);
  UserDataStore.subscribe(update);
</script>

<div class="leftpane" data-contextmenu="startmenu-applist">
  <span>
    {#if !$UserDataStore.sh.start.noGroups}
      {#each Object.values($groups) as entry}
        <Group group={entry} />
      {/each}
      {#each rest as id}
        <AppListItem app={getAppById(id)} />
      {/each}
    {:else}
      {#each [...$appLibrary] as [_, window]}
        <AppListItem app={window} />
      {/each}
    {/if}
  </span>
</div>
