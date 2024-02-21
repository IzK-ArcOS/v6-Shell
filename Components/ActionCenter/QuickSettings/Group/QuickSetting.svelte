<script lang="ts">
  import { QuickSetting } from "$apps/Shell/types/quicksettings";
  import { UserDataStore } from "$ts/stores/user";
  import { onMount } from "svelte";

  let active = false;

  export let setting: QuickSetting;

  function click() {
    setting.setter($UserDataStore);

    active = setting.getter($UserDataStore);
  }

  onMount(() => {
    active = setting.getter($UserDataStore);
  });

  UserDataStore.subscribe((v) => {
    active = setting.getter(v);
  });
</script>

<button class="setting material-icons-round" class:active on:click={click} title={setting.caption}>
  {active ? setting.icon : setting.iconOff}
</button>
