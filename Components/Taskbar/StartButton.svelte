<script>
  import { StartMenuOpened } from "$apps/Shell/ts/stores";
  import { Logo } from "$ts/branding";
  import { UserDataStore } from "$ts/stores/user";
  import AccentedLogo from "../AccentedLogo.svelte";

  function toggle() {
    $StartMenuOpened = !$StartMenuOpened;
  }
</script>

<button class="start-button" class:activated={$StartMenuOpened} on:click={toggle}>
  {#if $UserDataStore.sh.taskbar.accentedStart}
    <AccentedLogo width={30} height={30} />
  {:else}
    <img src={Logo()} alt="ArcOS Logo" />
  {/if}
</button>
