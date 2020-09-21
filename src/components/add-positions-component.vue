<template>
  <div>
    <b-button pill class="mx-3" variant="info" v-b-modal.modal-prevent-closing>
      <b-icon icon="plus"></b-icon>
    </b-button>
    <b-modal
            id="modal-prevent-closing"
            ref="modal"
            title="Добавление заказа"
            v-model="visible"
    >
      <b-form ref="form">
        <b-form-group
                label="Наименование позиций заказа"
                label-for="name-input"
        >
          <b-form-input
                  id="name-input"
                  v-model="name"
                  required
          ></b-form-input>
        </b-form-group>
        <b-form-group
                label="Данные клиента"
                label-for="client-input"
        >
          <b-form-input
                  id="client-input"
                  v-model="client"
          ></b-form-input>
        </b-form-group>
        <b-form-group
                label-for="manager-input"
                label="ФИО менеджера"
        >
          <b-form-input
                  id="manager-input"
                  v-model="manager"
                  required
          ></b-form-input>
        </b-form-group>
        <b-form-group
                label="Статус заказа"
                label-for="status-input"
        >
          <b-form-select v-model="status" :options="options"></b-form-select>
        </b-form-group>
      </b-form>
      <template v-slot:modal-footer>
        <div class="w-100">
          <b-button
                  variant="primary"
                  size="sm"
                  class="float-right"
                  @click="submitHandler"
                  :disabled="!valid"
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
    name: 'addPositionsComponent',
    data() {
      return {
        visible: false,
        status: 'a',
        name: '',
        manager: '',
        client: '',
        options: [
          { value: 'a', text: 'Предстоящие' },
          { value: 'b', text: 'В процессе' },
          { value: 'c', text: 'Завершенные' },
        ],
      }
    },
    methods: {
      submitHandler() {
        const formData = {
          name: this.name.trim(),
          manager: this.manager.trim(),
          client: this.client.trim(),
          selected: this.status,
          id: Date.now().toString(),
        }
        console.log(formData)
        this.$store.commit('changeListOfPosition', formData)
        this.visible = false
        this.name = ''
        this.manager = ''
        this.client = ''
        this.status = 'a'
      },
    },
    computed: {
      valid() {
        return this.name.trim() && this.manager.trim() && this.client.trim()
      },
    },
  }
</script>
<style>
</style>
