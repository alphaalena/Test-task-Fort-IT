<template>
  <b-col>
    <b-row class="m-1" align-v="center">
      <b-table hover no-border-collapse
               head-variant="dark"
               :fields="fields"
               :items="orders">
        <template v-slot:cell(status)="row">
          <div class="row align-items-center">
            <div class="dot text-center" :style="{'background-color': statusColors[row.item.status]}"></div>
            {{statusVariants[row.item.status]}}
          </div>
        </template>
        <template v-slot:cell(delete)="row">
          <b-button variant="light" size="sm" @click="deleteOrder(row.item.id)"
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
        statusVariants: {
          a: 'Предстоящие',
          b: 'В процессе',
          c: 'Завершенные'
        },
        statusColors: { a: '#6672FB', b: '#D88E45', c: '#cccccc' },
        fields: [
          {
            key: 'title',
            label: 'Заказ',
          },
          {
            key: 'clientName',
            label: 'Клиент',
          },
          {
            key: 'managerName',
            label: 'Менеджер',
          },
          {
            key: 'status',
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
      deleteOrder(id) {
        this.$store.commit('deleteOrder', id)
      },
    },
    computed: {
      orders() {
        return this.$store.getters.filteredOrders
      },
    },
  }
</script>
<style scoped lang="scss">
  .dot {
    vertical-align: center;
    border-radius: 50%;
    margin-right: 8px;
    height: 16px;
    width: 16px;
  }
</style>
