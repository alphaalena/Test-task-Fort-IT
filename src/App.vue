<template>
  <div id="app">
    <div class="page" v-if="getSpinner">
      <b-spinner class="spinner" :variant="'primary'" :key="'primary'"></b-spinner>
    </div>
    <div v-else>
      <div id="nav">
        <header-component/>
        <navigation-component/>
      </div>
      <router-view/>
    </div>
  </div>
</template>
<script>
  import HeaderComponent from './components/header-component'
  import NavigationComponent from './components/navigation-component'

  export default {
    components: { NavigationComponent, HeaderComponent },
    data () {
      return {
        getSpinner: true
      }
    },
    mounted() {
      this.getSpinner = false
    }

  }
</script>
<style lang="scss">
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
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
</style>
