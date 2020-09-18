<template>
  <b-sidebar v-model="isSidebarOpened" title="Sidebar" no-close-on-backdrop no-close-on-esc no-close-on-route-change no-header text-variant="light" bg-variant="secondary">
    <logo-component/>
<!--   <b-tabs card vertical nav-wrapper-class="w-50">-->
<!--     <b-tab>1</b-tab>-->
<!--     <b-tab>2</b-tab>-->
<!--     <b-tab>3</b-tab>-->
<!--     <b-tab>4</b-tab>-->
<!--     <b-tab>65</b-tab>-->
<!--     <b-tab>6</b-tab>-->
<!--     <b-tab>7</b-tab>-->
<!--   </b-tabs>-->
  </b-sidebar>
</template>
<script>
import LogoComponent from "@/components/logo-component";
export default {
  name: 'navigationComponent',
  components: {LogoComponent},
  data () {
    return {
      isSidebarOpened: true
    }
  }
}
</script>
<style lang="scss" scoped></style>
