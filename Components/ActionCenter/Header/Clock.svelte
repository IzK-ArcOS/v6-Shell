<script lang="ts">
  import { UserDataStore } from "$ts/stores/user";
  import dayjs from "dayjs";
  import { onMount } from "svelte";

  let timeStr = "";
  let dateStr = "";

  onMount(() => {
    setInterval(() => {
      const tb = $UserDataStore.sh.taskbar;
      const secs = tb.clockSecs && !tb.pos ? ":ss" : "";
      const time = tb.clock12hr && !tb.pos ? `hh:mm${secs} A` : `HH:mm${secs}`;

      timeStr = dayjs().format(time);
      dateStr = dayjs().format(`dddd, D MMMM`);
    }, 500);
  });
</script>

<div class="clock">
  <h3 class="time">{timeStr}</h3>
  <p class="date">{dateStr}</p>
</div>
