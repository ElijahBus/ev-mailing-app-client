<template>
  <div class="home text-gray-900 flex-1 ml-56">
    <div class="home-container m-4">
      <div class="">
        <h2 class="text-gray-900 text-4xl mb-4">Inbox</h2>
      </div> <!-- end home title -->

      <div class="home-headers flex justify-between">
        <div class="p-4 text-center border-gray-900 font-bold border-b-2 flex-1">Personal</div>
        <div class="p-4 text-center border-gray-300 font-bold border-b-2 flex-1">Groups</div>
        <div class="p-4 text-center border-gray-300 font-bold border-b-2 flex-1">Archived</div>
      </div> <!-- end home headers -->

      <div class="home-messages my-4" >
        <div class="home-messages_message-card py-3 flex" v-for="(mail, index) in mails" :key="index">
          <div class="home-messages-message-actions w-16 flex justify-evenly items-center ">
            <input type="checkbox">
            <font-awesome-icon icon="star"></font-awesome-icon>
          </div>

          <div class="home-messages_message-content flex-1">
            <b>{{ mail.title }} </b>
            <span class="mx-4">-</span>
            <span class="badge text-sm">to: <i>elijahbus.ny@gmail.com</i></span>
          </div>
          
          <div class="home-messages_message-arrival-datetime mr-2">
            <span>{{ extractTime(mail.date) }}</span>
          </div>
        </div> <!-- end message card -->
      </div>
    </div>

  </div>
</template>

<script>


import http from "../services/http";

export default {
  name: "Home",
  data: () => {
    return {
      mails: []
    }
  },
  methods: {
    /**
     * Get the list of all saved mails
     *
     * @returns {Promise<void>}
     */
    async getMails() {
      await http.get('/mail')
        .then(res => this.mails = res.data)
        .catch(err => console.log(err))
    },
    extractTime(date) {
      date = new Date(date)

      const hours = date.getUTCHours()
      const minutes = date.getUTCMinutes()

      return `${hours}:${minutes}`
    }
  },
  async mounted() {
    // Fetch the list of all mails
    this.getMails();
  }
}
</script>

<style scoped>
.home-title {
  background-image: url('../assets/images/inbox_baner.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

/* .home-messages_message-card:nth-child(even) {
  background-color: #333;
} */

.home-messages_message-card:nth-child(odd) {
  background-color: rgba(192, 199, 211, 0.185)
}

</style>