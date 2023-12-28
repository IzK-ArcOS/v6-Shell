<script lang="ts">
  import { clearNotifications } from "$ts/notif";
</script>

<button class="material-icons-round clear" on:click={clearNotifications}>
  clear_all
</button>
