<script lang="ts">
  import { deleteNotification } from "$ts/notif";
  import { Notification } from "$types/notif";
  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";
  import { onMount } from "svelte";

  export let id: string;
  export let data: Notification;

  let time = "";
  let collapsed = true;

  dayjs.extend(relativeTime);

  onMount(() => {
    setInterval(() => {
      time = dayjs(data.timestamp || null).fromNow();
    }, 500);
  });

  function toggleCollapse() {
    collapsed = !collapsed;
  }

  function deleteNotif() {
    deleteNotification(id);
  }
</script>

<div class="notification" class:collapsed class:no-image={!data.image}>
  {#if data.image}
    <div class="left">
      <img src={data.image} alt="" class="icon" />
    </div>
  {/if}
  <div class="content">
    <div class="header">
      <h3 class="title">{data.title}</h3>
      <div class="right">
        <span class="timestamp">{time}</span>

        <button
          class="delete material-icons-round"
          on:click={deleteNotif}
          class:collapsed
        >
          delete
        </button>
        <button
          class="collapse material-icons-round"
          class:collapsed
          on:click={toggleCollapse}
        >
          expand_more
        </button>
      </div>
    </div>
    <p class="message">{data.message}</p>
  </div>
</div>
