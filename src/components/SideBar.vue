<template>
  <div class="w-56 bg-gray-900 border-r-2 border-black text-white fixed min-h-screen pt-8 sidebar">
    <div class="sidebar-profile text-center">
      <div class="sidebar-profile_avatar">
        <font-awesome-icon icon="user-circle" size="4x" />
      </div>
      <div class="sidebar-profile_username mt-1">
        Mike Bel
        <span class="sidebar-profile_edit-icon ml-1">
          <font-awesome-icon icon="pen" size="xs"></font-awesome-icon>
        </span>
      </div>
    </div> <!-- end user profile section -->

    <div class="my-8 mx-4 bg-gray-400 ruler"></div>

    <div class="sidebar-routes mx-4 flex flex-col">
      <div class="folder font-bold font-sans">
        <font-awesome-icon icon="folder" size="lg"></font-awesome-icon>
        <span class="mx-3.5">Folders</span>
      </div>

      <div class="sidebar-routes_links ml-5 flex flex-col">
        <router-link to="/" class="text-white my-2">
          <span class="mx-4">All Mails</span>
        </router-link>

<!--        <router-link to="/" class="text-white my-2">-->
<!--          <span class="mx-4">Drafts</span>-->
<!--        </router-link>-->

<!--        <router-link to="/" class="text-white my-2">-->
<!--          <span class="mx-4">Sent</span>-->
<!--        </router-link>-->
      </div>



    </div> <!-- end sidebar routes section -->

    <div class="sidebar-settings mx-4 flex-1">
      <font-awesome-icon icon="cog"></font-awesome-icon>
      <span class="mx-4">Settings</span>
    </div> <!-- end sidebar settings section -->

  </div>
</template>

<script>

export default {
  name: "SideBar"
}
</script>

<style scoped>
  .sidebar {
    display: flex;
    flex-direction: column;
  }

  .sidebar-settings {
    position: absolute;
    bottom: 20px;
  }

  .ruler {
    height: 1px;
  }
</style>