<script lang="ts">
  import { closeNotification, deleteNotification } from "$ts/notif";
  import { RelativeTimeMod } from "$ts/stores/dayjs";
  import { sleep } from "$ts/util";
  import { Notification } from "$types/notif";
  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";
  import updateLocale from "dayjs/plugin/updateLocale";
  import { onMount } from "svelte";
  import Button from "./Notification/Button.svelte";

  export let id: string;
  export let data: Notification;
  export let pushed = false;

  let time = "";
  let shortTime = "";
  let collapsed = false;
  let deleting = false;

  dayjs.extend(relativeTime);
  dayjs.extend(updateLocale);
  dayjs.updateLocale("en", RelativeTimeMod);

  onMount(() =>
    setInterval(() => {
      const dj = dayjs(data.timestamp || null);
      time = dj.fromNow();
      shortTime = dj.format("HH:mm");
    }),
  );

  function toggleCollapse() {
    collapsed = !collapsed;
  }

  async function deleteNotif() {
    deleting = true;

    await sleep(500);

    deleteNotification(id);
  }
</script>

<div
  class="notification"
  class:collapsed
  class:no-image={!data.image}
  class:deleting={deleting && !pushed}
>
  {#if data.image}
    <div class="left">
      <img src={data.image} alt="" class="icon" />
    </div>
  {/if}
  <div class="content">
    <div class="header">
      <h3 class="title" title={data.title}>{data.title}</h3>
      <div class="right">
        {#if !pushed}
          <span class="timestamp" title={collapsed ? shortTime : time}>
            {collapsed ? shortTime : time}
          </span>

          <button class="delete material-icons-round" on:click={deleteNotif} class:collapsed>
            delete
          </button>
          <button class="collapse material-icons-round" class:collapsed on:click={toggleCollapse}>
            expand_more
          </button>
        {:else}
          <button class="close material-icons-round" on:click={closeNotification}
            >arrow_forward</button
          >
        {/if}
      </div>
    </div>
    <p class="message">{@html data.message}</p>
    {#if data.buttons}
      <div class="buttons">
        {#each data.buttons as button}
          <Button {pushed} bind:deleting {button} {id} />
        {/each}
      </div>
    {/if}
  </div>
</div>
