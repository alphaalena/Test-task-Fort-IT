<template>
  <b-sidebar v-model="isSidebarOpened" no-close-on-backdrop no-close-on-esc no-close-on-route-change
             no-header bg-variant="secondary">
    <logo-component/>
    <b-nav class=" mt-2 ml-2" type="light" vertical justified fill>
      <b-container>
        <b-nav-text class="text-uppercase text-white-50 my-3 ml-3 ">Меню</b-nav-text>
        <b-nav-item class="py-1 px-2" v-for="item in items" :key="item.name" :to="item.to">
          <b-icon class="mr-3" :icon="item.icon"></b-icon>
          {{item.name}}
        </b-nav-item>
      </b-container>
      <b-container class="align-self-end" >
        <b-nav-text class=" text-uppercase text-white-50 mb-2 ml-3 ">Поддержка</b-nav-text>
        <b-nav-item exact class=" px-2" v-for="support in supports" :key="support.name" :to="support.to">
          <b-icon class="mr-3" :icon="support.icon"></b-icon>
          {{support.name}}
        </b-nav-item>
        <b-nav-text class="text-uppercase text-white-50 my-2 ml-3 ">Settings</b-nav-text>
        <b-nav-item class=" px-2" v-for="setting in settings" :key="setting.name" :to="setting.to">
          <b-icon class="mr-3" :icon="setting.icon"></b-icon>
          {{setting.name}}
        </b-nav-item>
      </b-container>
    </b-nav>
  </b-sidebar>
</template>
<script>
  import logoComponent from '../components/logo-component'

  export default {
    name: 'sidebarComponent',
    components: { logoComponent },
    data() {
      return {
        isSidebarOpened: true,
        items: [
          {
            name: 'Панель',
            to: '/',
            icon: 'file-ruled',
          },
          {
            name: 'Расширения',
            to: '/extension',
            icon: 'person-bounding-box',
          },
          {
            name: 'Дизайн',
            to: '/design',
            icon: 'pencil-square',
          },
          {
            name: 'Продажи',
            to: '/sales',
            icon: 'chat-text',
          },
          {
            name: 'Покупатели',
            to: '/shopper',
            icon: 'briefcase',
          },
          {
            name: 'Маркетинг',
            to: '/marketing',
            icon: 'calendar2',
          },
          {
            name: 'Система',
            to: '/system',
            icon: 'window',
          },
        ],
        supports: [
          {
            name: 'Нужна помощь?',
            to: '/helper',
            icon: 'question-circle',
          },
          {
            name: 'Контакты',
            to: '/contact',
            icon: 'envelope',
          },
        ],
        settings: [
          {
            name: 'Настройки',
            to: '/helper/settings',
            icon: 'gear',
          },
          {
            name: 'Темы',
            to: '/helper/theme',
            icon: 'moon',
          },
          {
            name: 'Выйти',
            to: '/register/output',
            icon: 'box-arrow-in-right',
          },
        ],
      }
    },
  }
</script>
<style lang="scss">
  .nav-item > a {
    color: #d5d7d9
  }

  #nav a.router-link-exact-active {
    background: 1px #576774;
    border-radius: 6px;
  }
</style>
