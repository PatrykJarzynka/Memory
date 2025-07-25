<script setup lang="ts">

  import AppButton from "@/components/core/AppButton.vue"
</script>

<template>
  <div class="goal-container">
    <div class="goal-content">
      <p class="goal-text">Udało nam się zebrać już: <br> <span class="goal-number">3%</span> celu!</p>

      <AppButton
        type="normal"
        text="Wesprzyj zbiorkę"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.goal-container {
  width: 60%;
  position: relative;
  aspect-ratio: 1;
  padding: 30px;
  background: rgb(var(--v-theme-primary));
  border-radius: 50%;

  @media only screen and (width >= 600px) {
    width: 50%;
  }

  @media only screen and (width >= 1280px) {
    width: 35%;
  }
}

.goal-container::after {
  content: '';
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background: inherit;
  border-radius: inherit;
  animation: pulseAnimate 2s ease-out infinite;
}

@keyframes pulseAnimate {
  100% {
    opacity: 0;
    transform: scale(1.3);
  }
}

.goal-content {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  position: absolute;
  left:0;
  top: 50%;
  transform: translate(0, -50%);
  width: 100%;
  text-align: center;
  z-index: 2;

  @media only screen and (width >= 600px) {
    row-gap: 10px;
  }
}

.goal-text {
  color: white;
  font-size: 18px;
  width: 60%;
  font-weight: 500;

  @media only screen and (width >= 600px) {
    font-size: 23px;
  }

  @media only screen and (width >= 1280px) {
    font-size: 40px;
  }
}

.goal-number {
  color: rgb(var(--v-theme-highlight));
  font-size: 28px;

  @media only screen and (width >= 600px) {
    font-size: 40px;
  }

  @media only screen and (width >= 1280px) {
    font-size: 55px;
  }
}
</style>
