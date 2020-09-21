<template>
  <div>
    <b-button pill class="mx-3" variant="info" v-b-modal.modal-prevent-closing>
      <b-icon icon="plus"></b-icon>
    </b-button>
    <b-modal
            id="modal-prevent-closing"
            ref="modal"
            title="Добавление заказа"
            v-model="isModalVisible"
    >
      <b-form ref="form">
        <b-form-group
                label="Наименование позиций заказа"
                label-for="title-input"
        >
          <b-form-input
                  id="name-input"
                  v-model="title"
                  required
          ></b-form-input>
        </b-form-group>
        <b-form-group
                label="Данные клиента"
                label-for="clientName-input"
        >
          <b-form-input
                  id="client-input"
                  v-model="clientName"
          ></b-form-input>
        </b-form-group>
        <b-form-group
                label-for="managerName-input"
                label="ФИО менеджера"
        >
          <b-form-input
                  id="manager-input"
                  v-model="managerName"
                  required
          ></b-form-input>
        </b-form-group>
        <b-form-group
                label="Статус заказа"
                label-for="status-input"
        >
          <b-form-select v-model="status" :options="statusVariants"></b-form-select>
        </b-form-group>
      </b-form>
      <template v-slot:modal-footer>
        <div class="w-100">
          <b-button
                  variant="primary"
                  size="sm"
                  class="float-right"
                  @click="submitHandler"
                  :disabled="!isFormValid"
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
    name: 'addOrderComponent',
    data() {
      return {
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
    methods: {
      submitHandler() {
        const formData = {
          title: this.title.trim(),
          managerName: this.managerName.trim(),
          clientName: this.clientName.trim(),
          status: this.status,
          id: Date.now().toString(),
        }
        this.$store.commit('addOrder', formData)
        this.clearForm()
      },
      clearForm() {
        this.isModalVisible = false
        this.title = ''
        this.managerName = ''
        this.clientName = ''
        this.status = 'a'
      }
    },
    computed: {
      isFormValid() {
        return this.title.trim() && this.managerName.trim() && this.clientName.trim()
      },
    },
  }
</script>
<style>
</style>
