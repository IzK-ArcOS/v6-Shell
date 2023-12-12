<script lang="ts">
  import Shade from "./Components/Shade.svelte";
  import StartMenu from "./Components/StartMenu.svelte";
  import "./css/main.css";

  //export let app: App;
</script>

<Shade />
<div class="shell">
  <div class="primary">
    <StartMenu />
    <!-- <ActionCenter/> -->
  </div>
  <div class="secondary">
    <!-- <Taskbar/> -->
  </div>
</div>
