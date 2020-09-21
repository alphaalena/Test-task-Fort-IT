<template>
  <div id="app">
    <div class="page" v-if="isLoading">
      <b-spinner class="spinner" :variant="'primary'" :key="'primary'"></b-spinner>
    </div>
    <div v-else>
      <header-component/>
      <div class="flex">
        <sidebar-component/>
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
  import HeaderComponent from './components/header-component'
  import SidebarComponent from './components/sidebar-component'

  export default {
    components: { SidebarComponent, HeaderComponent },
    data() {
      return {
        isLoading: true,
      }
    },
    async mounted() {
      await new Promise(resolve => setTimeout(resolve, 2000))
      this.isLoading = false
    },
  }
</script>
<style lang="scss">
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #d5d7d9;

  }

  #nav {
    padding: 0;
  }

  .page {
    position: absolute;
    background: rgba(0, 0, 0, 0.3);
    z-index: 25;
    width: 100%;
    height: 100%;
  }

  .spinner {
    z-index: 26;
    position: relative;
    top: 50%;
  }
  .flex {
    display: flex;
    margin-left: 320px;
  }
</style>
