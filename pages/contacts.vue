<template>
  <div class="post">
    <div class="title">
      <h2>Contacts</h2>
    </div>
    <div class="entry">
      <div class="contacts">
          <div class="contact-title">Address</div>
          <div class="contact-details">
            17 rue Antoine Lumière <br/>
            69008 Lyon <br/>
            France
          </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.contacts {
  display: flex;
  flex-direction: row;

  .contact-title {
    width: 200px;
    font-weight: bold;
  }

  .contact-details {
    width: 100%;
  }
}
</style>
