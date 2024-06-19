<script lang="ts">
  import { SafeMode } from "$state/Desktop/ts/store";
  import { LogStore } from "$ts/console";
  import { ArcOSVersion } from "$ts/env";
  import { ARCOS_BUILD, ARCOS_MODE } from "$ts/metadata";
  import { ConnectedServer } from "$ts/stores/server";
  import { UserName } from "$ts/stores/user";

  let log = "-<br>-";

  LogStore.subscribe(async (v) => {
    if (!v.length) return;

    log = `${v[v.length - 1].msg}`;
  });
</script>

{#if ARCOS_MODE !== "release" || $SafeMode}
  <div class="desktop-watermark">
    ArcOS v{ArcOSVersion}-{ARCOS_MODE}
    {ARCOS_BUILD}<br />
    {$UserName}@{$ConnectedServer.host}:{$ConnectedServer.port} ({$ConnectedServer.secure
      ? "Secure"
      : "Open"})
    {#if $SafeMode}<br />Safe Mode Enabled{/if}
    <hr />
    {log}
  </div>
{/if}
