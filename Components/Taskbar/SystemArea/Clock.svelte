<script lang="ts">
  import { UserDataStore } from "$ts/stores/user";
  import dayjs from "dayjs";
  import { onMount } from "svelte";

  let text = "";

  onMount(() => {
    setInterval(() => {
      const tb = $UserDataStore.sh.taskbar;
      const secs = tb.clockSecs && !tb.pos ? ":ss" : "";
      const date = tb.clockDate && !tb.pos ? "MMM D, " : "";
      const time = tb.clock12hr && !tb.pos ? `hh:mm${secs} A` : `HH:mm${secs}`;

      text = dayjs().format(`${date}${time}`);
    }, 500);
  });
</script>

<div class="clock" data-contextmenu="clockcontext">{text}</div>
