<template>
  <div>
    <b-button
      v-b-modal.modal-prevent-closing
      class="mx-3"
      variant="info"
    >
      <b-icon icon="plus" />
    </b-button>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      v-model="isModalVisible"
      title="Добавление заказа"
    >
      <b-form ref="form">
        <b-form-group
          label="Наименование позиции заказа"
          label-for="title-input"
        >
          <b-form-input
            id="name-input"
            v-model="title"
            required
          />
        </b-form-group>
        <b-form-group
          label="ФИО Клиента"
          label-for="clientName-input"
        >
          <b-form-input
            id="client-input"
            v-model="clientName"
          />
        </b-form-group>
        <b-form-group
          label="ФИО Менеджера"
          label-for="managerName-input"
        >
          <b-form-input
            id="manager-input"
            v-model="managerName"
            required
          />
        </b-form-group>
        <b-form-group
          label="Статус заказа"
          label-for="status-input"
        >
          <b-form-select
            v-model="status"
            :options="statusVariants"
          />
        </b-form-group>
      </b-form>
      <template v-slot:modal-footer>
        <div class="w-100 d-flex justify-content-between">
          <b-checkbox v-model="addMore">
            Добавить еще
          </b-checkbox>
          <b-button
            :disabled="!isFormValid"
            class="float-right"
            size="sm"
            variant="primary"
            @click="submitHandler"
          >
            Сохранить
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'AddOrderComponent',
  data () {
    return {
      addMore: false,
      isModalVisible: false,
      status: 'a',
      title: '',
      managerName: '',
      clientName: '',
      statusVariants: [
        { value: 'a', text: 'Предстоящие' },
        { value: 'b', text: 'В процессе' },
        { value: 'c', text: 'Завершенные' },
      ],
    }
  },
  computed: {
    isFormValid () {
      return this.title.trim() && this.managerName.trim() && this.clientName.trim()
    },
  },
  methods: {
    submitHandler () {
      const formData = {
        title: this.title.trim(),
        managerName: this.managerName.trim(),
        clientName: this.clientName.trim(),
        status: this.status,
        id: Date.now().toString(),
      }
      this.$store.commit('addOrder', formData)
      this.clearForm()
      if (!this.addMore) {
        this.closeModal()
      }
    },
    clearForm () {
      this.title = ''
      this.managerName = ''
      this.clientName = ''
      this.status = 'a'
    },
    closeModal () {
      this.isModalVisible = false
    },
  },
}
</script>
<style>
</style>
