<template>
  <div class="logo-wrapper">
    <img
      alt="logo"
      class="logo"
      src="../assets/images/logo.jpg"
    >
  </div>
</template>
<script>
export default {
  name: 'LogoComponent',
}
</script>

<style lang="scss" scoped>
  .logo {
    padding-bottom: 10px;

    &-wrapper {
      height: 150px;
      width: 100%;
      border-bottom: 1px solid #2B3641;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
