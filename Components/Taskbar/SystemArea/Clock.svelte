<script lang="ts">
  import { UserDataStore } from "$ts/stores/user";
  import dayjs from "dayjs";
  import { onMount } from "svelte";

  let text = "";

  onMount(() => {
    setInterval(() => {
      const tb = $UserDataStore.sh.taskbar;
      const secs = tb.clockSecs && !tb.pos.includes("vertical") ? ":ss" : "";
      const date = tb.clockDate && !tb.pos.includes("vertical") ? "MMM D, " : "";
      const time = tb.clock12hr && !tb.pos.includes("vertical") ? `hh:mm${secs} A` : `HH:mm${secs}`;

      text = dayjs().format(`${date}${time}`);
    });
  });
</script>

<div class="clock" data-contextmenu="clockcontext">{text}</div>
