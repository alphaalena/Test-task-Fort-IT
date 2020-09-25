<template>
  <b-col>
    <b-row
      align-v="center"
      class="m-1"
    >
      <b-table
        :fields="fields"
        :items="orders"
        head-variant="dark"
        hover
        no-border-collapse
      >
        <template v-slot:cell(status)="row">
          <div class="row align-items-center">
            <div
              :style="{'background-color': statusColors[row.item.status]}"
              class="dot text-center"
            />
            {{ statusVariants[row.item.status] }}
          </div>
        </template>
        <template v-slot:cell(delete)="row">
          <b-button
            class="ml-auto"
            size="sm"
            variant="light"
            @click="deleteOrder(row.item.id)"
          >
            <b-icon icon="trash" />
          </b-button>
        </template>
      </b-table>
    </b-row>
  </b-col>
</template>

<script>
export default {
  name: 'TableComponent',
  data () {
    return {
      statusVariants: {
        a: 'Предстоящие',
        b: 'В процессе',
        c: 'Завершенные',
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
  computed: {
    orders () {
      return this.$store.getters.filteredOrders
    },
  },
  methods: {
    deleteOrder (id) {
      this.$store.commit('deleteOrder', id)
    },
  },
}
</script>
<style lang="scss" scoped>
  .dot {
    vertical-align: center;
    border-radius: 50%;
    margin-right: 8px;
    height: 16px;
    width: 16px;
  }
</style>
