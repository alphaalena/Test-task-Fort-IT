<template>
  <b-col>
    <b-row class="m-1" align-v="center">
      <b-table hover no-border-collapse
               head-variant="dark"
               :fields="fields"
               :items="items">
        <template v-slot:cell(selected)="row">
          <div class="row align-items-center">
            <div class="dot text-center" :style="{'background-color': colors[row.item.selected]}"></div>
            {{statusVariants[row.item.selected]}}
          </div>
        </template>
        <template v-slot:cell(delete)="data">
          <b-button variant="light" size="sm" @click="deletePosition(data.item.id)"
                    class="ml-auto">
            <b-icon icon="trash"></b-icon>
          </b-button>
        </template>
      </b-table>
    </b-row>
  </b-col>
</template>
<script>
  export default {
    name: 'tableComponent',
    data() {
      return {
        options:
          { a: 'Предстоящие', b: 'В процессе', c: 'Завершенные' },
        colors: { a: '#6672FB', b: '#D88E45', c: '#cccccc' },
        fields: [
          {
            key: 'name',
            label: 'Заказ',
          },
          {
            key: 'client',
            label: 'Клиент',
          },
          {
            key: 'manager',
            label: 'Менеджер',
          },
          {
            key: 'selected',
            label: 'Статус',
          },
          {
            key: 'delete',
            label: '',
          },
        ],
      }
    },
    methods: {
      deletePosition(id) {
        this.$store.commit('deleteOrder', id)
      }
    },
    computed: {
      items() {
        return this.$store.getters.filteredOrders
      }
    },
  }
</script>
<style scoped lang="scss">
  .dot {
    vertical-align: center;
    border-radius: 50%;
    margin-right: 8px;
    height: 20px;
    width: 20px;
  }
</style>
