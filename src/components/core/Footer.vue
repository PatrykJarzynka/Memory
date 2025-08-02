<script setup lang="ts">
  import { useI18n } from "vue-i18n"

  const { t } = useI18n()
</script>

<template>
  <v-footer class="footer-container">
    <v-row
      no-gutters
      class="ga-11 justify-center reveal"
    >
      <v-col
        cols="12"
        class="footer-info-column"
      >
        <h2 class="footer-main-label">{{ t('footer.title') }}</h2>
        <p class="footer-text"> {{ t('footer.subtitle') }}</p>
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
          >+48 501 525 624</a>
        </div>

        <div class="contact-person">
          <p class="contact-name">Aleksandra Libera</p>
          <a
            href="tel:+48507602660"
            class="contact-number"
          >+48 507 602 660</a>
        </div>

      </v-col>

      <v-col
        cols="12"
        class="socials-column"
      >
        <div class="social-item-container">
          <v-icon
            class="email-icon"
            icon="mdi-email-outline"
          />

          <a
            href="mailto:pamietnikalzheimerowca@gmail.com"
            class="social-item"
          >
            pamietnikalzheimerowca@gmail.com
          </a>
        </div>

        <div class="social-item-container">
          <img
            src="/assets/instagram-colored.svg"
            alt="Instagram logo"
            class="instagram-image"
          />

          <a
            href="https://www.instagram.com/pamietnikalzheimerowca/"
            class="social-item"
          >
            instagram.com/pamietnikalzheimerowca/
          </a>
        </div>

      </v-col>



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

.socials-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.social-item-container {
  display: flex;
  column-gap: 10px;
}

.social-item {
  align-self: center;
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

.email-icon {
  font-size: 33px;
  color: rgb(var(--v-theme-primaryContrast));
}

.instagram-image {
  height: 40px;
}




</style>
