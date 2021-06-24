<template>
  <b-modal v-model="showModal" hide-footer hide-header>
    <div class="d-flex flex-directions-row justify-content-end">
      <button
        type="button"
        class="close"
        data-dismiss="modal"
        aria-label="Close"
        @click="close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <form class="p-4" @submit.prevent="save">
      <input type="text" class="form-control" v-model="title" />
      <div class="d-flex flex-directions-row justify-content-between mt-4">
        <button
          type="button"
          class="
            btn btn-secondary
            d-flex
            justify-content-center
            align-items-center
          "
          @click="close"
        >
          Cancelar
        </button>
        <button type="submit" class="btn btn-success">Adicionar cartão</button>
      </div>
    </form>
  </b-modal>
</template>

<script>
export default {
  name: "TaskForm",
  props: {
    show: {
      type: Boolean,
      require: true,
    },
    list_id: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      title: null,
    };
  },
  computed: {
    showModal: {
      get: function () {
        return this.show;
      },
      set(newValue) {
        !newValue && this.$emit("close");
      },
    },
  },
  methods: {
    close() {
      this.title = null;
      this.$emit("close");
    },
    save() {
      const title = this.title;
      const list_id = this.list_id;

      this.$emit("save", { title, list_id });

      this.close();
    },
  },
};
</script>
