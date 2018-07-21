<template>
  <div>
    <div class="banner contact-banner d-flex">
        <h1 class="display-4">Contact</h1>
    </div>

    <main id="app">
        <section class="contact container">
          <div class="row">
            <h3 class="col-12">Let me know how I can help you. Send me an email and I’ll answer you as soon as possible. <span style="color: #ffe500;">😉</span></h3>
          </div>

          <div class="row d-flex content-form">
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
                    <input class="btn btn-primary" type="submit" value="Send" />
                  </div>
                </form>
              </div>

              <figure class="asset-container col col-12 col-md-6">
                <CodingAsset />
              </figure>
          </div>
        </section>
    </main>

  </div>
</template>

<script>
  import Nav from '../Nav';
  import CodingAsset from '../../assets/coding.svg';

  export default {
    name: 'Contact',
    components: {
      Nav,
      CodingAsset
    }
  };

</script>
