<template>
  <div class="home text-gray-900 flex-1 ml-56">
    <div class="home-container m-4">
      <div class="">
        <h2 class="text-gray-900 text-4xl mb-4">Inbox</h2>
      </div> <!-- end home title -->

      <div class="home-headers flex justify-between">
        <div class="p-4 text-center border-gray-900 border-r-2 bg-gray-300 flex-1">Personal</div>
        <div class="p-4 text-center border-gray-900 border-r-2 bg-gray-100 flex-1">Groups</div>
        <div class="p-4 text-center border-gray-900 border-r-2 bg-gray-100 flex-1">Archived</div>
      </div> <!-- end home headers -->

      <div class="home-messages my-4">
        <div class="home-messages_message-card py-2 bg-gray-100  flex">
          <div class="home-messages-message-actions w-16 flex justify-evenly items-center ">
            <input type="checkbox">
            <font-awesome-icon icon="star"></font-awesome-icon>
          </div>
          <div class="home-messages_message-content flex-1">
            <b>Walking the ail with ... </b>
          </div>
          <div class="home-messages_message-arrival-datetime mr-2">
            <span>12:03 PM</span>
          </div>
        </div> <!-- end first message card -->

        <!--    message details component    -->

        <div>
          <div class="message-content shadow-2xl h-auto bg-gray-100">
            <div class="message-content_header p-3 flex justify-between">
              <div class="text-sm">
                <span>from: <i>elijahbus.ny@gmail.com</i></span>
              </div>

              <div class="message-content_header-actions flex w-12 justify-around">
                <font-awesome-icon icon="reply"></font-awesome-icon>
                <font-awesome-icon icon="ellipsis-h"></font-awesome-icon>
              </div>

            </div>

            <div class="message-reply">
              <!-- message reply editor -->
              <div class="w-full message-reply_editor bg-white" contenteditable="true"></div>

              <div class="message-reply_footer flex justify-between p-4 bg-white">
                <div></div>
                <div class="message-reply_footer-actions">
                  <button class="btn action-btn-outline">
                    Send <font-awesome-icon icon="share"></font-awesome-icon>
                  </button>
                </div>
              </div>
            </div>

            <hr class="mx-5">

            <div class="message-content_body p-4 pl-12">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
              some form, by injected humour, or randomised words which don't look even slightly believable. If you are going
              to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of
              text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem
              Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </div>

          </div>
        </div>


        <!--    end message details component    -->


        <div class="home-messages_message-card py-4 flex bg-gray-200">
          <div class="home-messages-message-actions w-16 flex justify-evenly items-center ">
            <input type="checkbox">
            <font-awesome-icon icon="star"></font-awesome-icon>
          </div>
          <div class="home-messages_message-content flex-1">
            <b>Walking the ail with ... </b>
            <span>Beautiful mountains, sweet valleys, some trees ...</span>
          </div>
          <div class="home-messages_message-arrival-datetime mr-2">
            <span>12:03 PM</span>
          </div>
        </div> <!-- end second message card -->

        <div class="home-messages_message-card bg-gray-100 py-4 flex">
          <div class="home-messages-message-actions w-16 flex justify-evenly items-center ">
            <input type="checkbox">
            <font-awesome-icon icon="star"></font-awesome-icon>
          </div>
          <div class="home-messages_message-content flex-1">
            <b>Walking the ail with ... </b>
            <span>Beautiful mountains, sweet valleys, some trees ...</span>
          </div>
          <div class="home-messages_message-arrival-datetime mr-2">
            <span>12:03 PM</span>
          </div>
        </div> <!-- end third message card -->

        <div class="home-messages_message-card bg-gray-200 py-4 flex">
          <div class="home-messages-message-actions w-16 flex justify-evenly items-center ">
            <input type="checkbox">
            <font-awesome-icon icon="star"></font-awesome-icon>
          </div>
          <div class="home-messages_message-content flex-1">
            <b>Walking the ail with ... </b>
            <span>Beautiful mountains, sweet valleys, some trees ...</span>
          </div>
          <div class="home-messages_message-arrival-datetime mr-2">
            <span>12:03 PM</span>
          </div>
        </div> <!-- end fourth message card -->


        <div class="home-messages_message-card bg-gray-100 py-4 flex">
          <div class="home-messages-message-actions w-16 flex justify-evenly items-center ">
            <input type="checkbox">
            <font-awesome-icon icon="star"></font-awesome-icon>
          </div>
          <div class="home-messages_message-content flex-1">
            <b>Walking the ail with ... </b>
            <span>Beautiful mountains, sweet valleys, some trees ...</span>
          </div>
          <div class="home-messages_message-arrival-datetime mr-2">
            <span>12:03 PM</span>
          </div>
        </div> <!-- end third message card -->

        <div class="home-messages_message-card bg-gray-200 py-4 flex">
          <div class="home-messages-message-actions w-16 flex justify-evenly items-center ">
            <input type="checkbox">
            <font-awesome-icon icon="star"></font-awesome-icon>
          </div>
          <div class="home-messages_message-content flex-1">
            <b>Walking the ail with ... </b>
            <span>Beautiful mountains, sweet valleys, some trees ...</span>
          </div>
          <div class="home-messages_message-arrival-datetime mr-2">
            <span>12:03 PM</span>
          </div>
        </div> <!-- end fourth message card -->

        <div class="home-messages_message-card bg-gray-100 py-4 flex">
          <div class="home-messages-message-actions w-16 flex justify-evenly items-center ">
            <input type="checkbox">
            <font-awesome-icon icon="star"></font-awesome-icon>
          </div>
          <div class="home-messages_message-content flex-1">
            <b>Walking the ail with ... </b>
            <span>Beautiful mountains, sweet valleys, some trees ...</span>
          </div>
          <div class="home-messages_message-arrival-datetime mr-2">
            <span>12:03 PM</span>
          </div>
        </div> <!-- end third message card -->

        <div class="home-messages_message-card bg-gray-200 py-4 flex">
          <div class="home-messages-message-actions w-16 flex justify-evenly items-center ">
            <input type="checkbox">
            <font-awesome-icon icon="star"></font-awesome-icon>
          </div>
          <div class="home-messages_message-content flex-1">
            <b>Walking the ail with ... </b>
            <span>Beautiful mountains, sweet valleys, some trees ...</span>
          </div>
          <div class="home-messages_message-arrival-datetime mr-2">
            <span>12:03 PM</span>
          </div>
        </div> <!-- end fourth message card -->

        <div class="home-messages_message-card bg-gray-100 py-4 flex">
          <div class="home-messages-message-actions w-16 flex justify-evenly items-center ">
            <input type="checkbox">
            <font-awesome-icon icon="star"></font-awesome-icon>
          </div>
          <div class="home-messages_message-content flex-1">
            <b>Walking the ail with ... </b>
            <span>Beautiful mountains, sweet valleys, some trees ...</span>
          </div>
          <div class="home-messages_message-arrival-datetime mr-2">
            <span>12:03 PM</span>
          </div>
        </div> <!-- end third message card -->

        <div class="home-messages_message-card bg-gray-200 py-4 flex">
          <div class="home-messages-message-actions w-16 flex justify-evenly items-center ">
            <input type="checkbox">
            <font-awesome-icon icon="star"></font-awesome-icon>
          </div>
          <div class="home-messages_message-content flex-1">
            <b>Walking the ail with ... </b>
            <span>Beautiful mountains, sweet valleys, some trees ...</span>
          </div>
          <div class="home-messages_message-arrival-datetime mr-2">
            <span>12:03 PM</span>
          </div>
        </div> <!-- end fourth message card -->
      </div>


    </div>

  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
.home-title {
  background-image: url('../assets/images/inbox_baner.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.message-reply_editor {
  height: auto;
  min-height: 200px;
}

.action-btn-outline {
  padding: 4px 8px;
  border: 1px solid black;
  border-radius: 20px;
}

.message-content {
  box-shadow: 0 1px 2px rgba(0,0,0,0.07),
              0 2px 4px rgba(0,0,0,0.07),
              0 4px 8px rgba(0,0,0,0.07),
              0 8px 16px rgba(0,0,0,0.07),
              0 16px 32px rgba(0,0,0,0.07),
              0 32px 64px rgba(0,0,0,0.07);

}

</style>