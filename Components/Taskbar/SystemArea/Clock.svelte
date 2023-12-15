<script lang="ts">
  import { onMount } from "svelte";
  import dayjs from "dayjs";
  import { UserDataStore } from "$ts/stores/user";

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
