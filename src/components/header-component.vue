<template>
    <b-navbar variant="light" type="light">
      <b-navbar-nav class="ml-auto">
          <b-form-input v-model="text" class="" placeholder="Поиск"></b-form-input>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item-dropdown>
          <template v-slot:button-content>
            <em>
               Пользователь
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person" fill="currentColor"
                   xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
              </svg>
            </em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
</template>
<script>
  export default {
    name: 'headerComponent',
    data() {
      return {
        text: ''
      }
    },
  }
</script>
<style>
</style>
