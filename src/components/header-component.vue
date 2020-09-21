<template>
  <b-navbar variant="light" type="light">
    <b-navbar-nav class="ml-auto mr-5">
      <b-form-input v-model="searchValue" placeholder="Поиск"></b-form-input>
      <add-order-component/>
      <b-nav-item-dropdown class="ml-5" text="text">
        <template v-slot:button-content class="position-absolute dropdown-menu-right">
            <span>
               John Doe
              </span>
          <b-icon class="arrow-left ml-2" icon="person" scale="1"></b-icon>
        </template>
        <b-dropdown-item href="#" exact>Войти</b-dropdown-item>
        <b-dropdown-item href="#">Выйти</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>
<script>
  import addOrderComponent from './add-order-component'

  export default {
    name: 'headerComponent',
    components: { addOrderComponent },
    data() {
      return {
        searchValue: '',
      }
    },
    watch: {
      searchValue(value) {
        this.$store.commit('setSearchValue', value)
      },
    },
  }
</script>
<style lang="scss">
  .dropdown-toggle::after {
    position: absolute;
    left: -10px;
    right: 200px;
    top: 22px;
    bottom: 15px;
  }

  .arrow-left {
    width: 25px;
    height: 25px;
    padding: 2px;
    border-color: #afcbf6;
    border-radius: 50%;
    background-color: #afcbf6
  }
</style>
