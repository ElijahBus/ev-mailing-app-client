<template>
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
</template>

<script>
export default {
  name: "MailContent"
}
</script>

<style scoped>
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
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07),
  0 2px 4px rgba(0, 0, 0, 0.07),
  0 4px 8px rgba(0, 0, 0, 0.07),
  0 8px 16px rgba(0, 0, 0, 0.07),
  0 16px 32px rgba(0, 0, 0, 0.07),
  0 32px 64px rgba(0, 0, 0, 0.07);
}
</style>