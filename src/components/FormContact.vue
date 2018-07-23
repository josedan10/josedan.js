<template>
  <div class="d-flex col col-12 col-md-6 form-container">
    <form class="col col-12" action="" method="post">
      <div class="form-group">
        <label for="name">Name</label>
        <input class="form-control" type="text" id="name" name="name" placeholder="José Daniel" required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input class="form-control" type="email" id="email" name="email" placeholder="your-email@mail.com" required />
      </div>

      <div class="form-group">
        <label for="phone">Phone</label>
        <input class="form-control" type="tel" id="phone" name="phone" placeholder="+584444444444" required />
      </div>

      <div class="form-group">
        <label for="msg">Message</label>
        <textarea class="form-control" name="msg" id="msg" placeholder="Text here..." required></textarea>
      </div>

      <div class="form-group">
        <input class="btn" type="submit" value="Send" />
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'FormContact'
  };
</script>
