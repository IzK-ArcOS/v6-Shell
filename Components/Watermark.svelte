<script lang="ts">
  import { SafeMode } from "$state/Desktop/ts/store";
  import { ArcOSVersion } from "$ts/env";
  import { ARCOS_BUILD, ARCOS_MODE } from "$ts/metadata";
  import { ConnectedServer } from "$ts/stores/server";
  import { UserName } from "$ts/stores/user";
</script>

{#if ARCOS_MODE !== "release" || $SafeMode}
  <div class="desktop-watermark">
    ArcOS v{ArcOSVersion}-{ARCOS_MODE}
    {ARCOS_BUILD}<br />
    {$UserName}@{$ConnectedServer.host}:{$ConnectedServer.port} ({$ConnectedServer.secure
      ? "Secure"
      : "Open"})
    {#if $SafeMode}<br />Safe Mode Enabled{/if}
  </div>
{/if}
