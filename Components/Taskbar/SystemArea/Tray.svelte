<script>
  import { trayIcons } from "$apps/Shell/ts/tray/store";

  let opened = false;

  function toggle() {
    opened = !opened;
  }
</script>

<div class="tray" class:opened={$trayIcons.length > 3 ? opened : true}>
  {#if $trayIcons.length > 4}
    <button class="toggle material-icons-round" on:click={toggle}> chevron_left </button>
  {/if}
  {#each $trayIcons as icon}
    <button class="icon" on:click={() => icon.onOpen(icon)} title={icon.title || ""}>
      {#if icon.icon}
        <span class="material-icons-round">{icon.icon}</span>
      {:else}
        <img src={icon.image} alt={icon.identifier} />
      {/if}
    </button>
  {/each}
</div>
