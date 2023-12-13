<script>
  import AccentedLogo from "../AccentedLogo.svelte";
  import { StartMenuOpened } from "$state/Shell/ts/stores";
  import { Logo } from "$ts/branding";
  import { UserDataStore } from "$ts/stores/user";

  function toggle() {
    $StartMenuOpened = !$StartMenuOpened;
  }
</script>

<button
  class="start-button"
  class:activated={$StartMenuOpened}
  on:click={toggle}
>
  {#if $UserDataStore.sh.taskbar.accentedStart}
    <AccentedLogo width={30} height={30} />
  {:else}
    <img src={Logo()} alt="ArcOS Logo" />
  {/if}
</button>
