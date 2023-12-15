<script lang="ts">
  import { ActionCenterOpened } from "$apps/Shell/ts/stores";

  function toggle() {
    $ActionCenterOpened = !$ActionCenterOpened;
  }
</script>

<button
  class="action-center material-icons-round"
  class:activated={$ActionCenterOpened}
  on:click={toggle}
>
  notifications
</button>
