<script setup lang="ts">

</script>

<template>
  <v-footer class="footer-container">
    <v-row
      no-gutters
      class="ga-5 justify-center"
    >
      <v-col
        cols="12"
        class="footer-info-column"
      >
        <h2 class="footer-main-label">Jeżeli masz pomysł, lub wiesz jak nam pomóc odezwij się</h2>
        <p class="footer-text"> Ze względu na duże obciążenie emocjonalne prosimy o ograniczenie kontaktu z Jagodą i Kacprem w tym temacie</p>
      </v-col>

      <v-col
        cols="12"
        class="footer-contact-column"
      >
        <div class="contact-person">
          <p class="contact-name">Gwidon Libera</p>
          <a
            href="tel:+48501525624"
            class="contact-number"
          >+48501525624</a>
        </div>

        <div class="contact-person">
          <p class="contact-name">Aleksandra Libera</p>
          <a
            href="tel:+48507602660"
            class="contact-number"
          >+48507602660</a>
        </div>

      </v-col>

      <a
        href="mailto:pamietnikalzheimerowca@gmail.com"
        class="contact-email"
      >
        pamietnikalzheimerowca@gmail.com
      </a>

    </v-row>

  </v-footer>
</template>

<style scoped lang="scss">

.footer-container {
  flex-direction: column;
  padding-block: var(--v-gap-elements-outside--xs);
  justify-content: center;
  background-color: rgb(var(--v-theme-primary));

  @media only screen and (width >= 1280px) {
    padding-block: var(--v-gap-elements-outside--sm);
  }
}

.footer-info-column {
  display: flex;
  flex-direction: column;
}

.footer-main-label {
  font-size: 20px;
  text-align: center;
  color: rgb(var(--v-theme-primaryContrast));
  font-family: var(--v-primary-font);
  padding-bottom: var(--v-gap-elements-outside--xs);

  @media only screen and (width >= 600px) {
    font-size: 22px;
  }

  @media only screen and (width >= 1280px) {
    font-size: 27px;
    padding-bottom: var(--v-gap-elements-outside--sm);
  }

  @media only screen and (width >= 1920px) {
    font-size: 35px;
  }
}

.footer-text {
  text-align: center;
  color: rgb(var(--v-theme-primaryContrast));

  @media only screen and (width >= 600px) {
    font-size: 17px;
  }

  @media only screen and (width >= 1280px) {
    font-size: 19px;
  }

  @media only screen and (width >= 1920px) {
    font-size: 20px;
  }
}

.footer-contact-column {
  display: flex;
  justify-content: center;
  column-gap: 20px;
  background-color: transparent;
  color: rgb(var(--v-theme-primaryContrast));
  font-weight: 500;

  @media only screen and (width >= 1920px) {
    column-gap: 50px;
  }
}

.contact-person {
  text-align: center;
}

.contact-name {
  font-size: 20px;

  @media only screen and (width >= 1280px) {
    font-size: 22px;
  }

  @media only screen and (width >= 1920px) {
    font-size: 24px;
  }
}

.contact-number {
  color: rgb(var(--v-theme-highlight));
  font-size: 17px;
  text-decoration: none;

  @media only screen and (width >= 1280px) {
    font-size: 19px;
  }

  @media only screen and (width >= 1920px) {
    font-size: 20px;
  }
}

.contact-email {
  color: rgb(var(--v-theme-primaryContrast));
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;

  @media only screen and (width >= 960px) {
    font-size: 16px;
  }

  @media only screen and (width >= 1280px) {
    font-size: 18px;
  }

  @media only screen and (width >= 1920px) {
    font-size: 20px;
  }
}

</style>
