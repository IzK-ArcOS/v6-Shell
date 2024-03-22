<script lang="ts">
  import ProfilePicture from "$lib/Components/ProfilePicture.svelte";
  import { getProfilePicture } from "$ts/stores/pfp";
  import { UserDataStore, UserName } from "$ts/stores/user";
  import PowerOptions from "./Bottom/PowerOptions.svelte";

  let pfp = "";

  UserDataStore.subscribe((v) => {
    if (!v) return;
    pfp = getProfilePicture(v.acc.profilePicture);
  });
</script>

<div class="bottompane">
  <ProfilePicture src={pfp} height={20} />
  <span>{$UserName}</span>
  <PowerOptions />
</div>
