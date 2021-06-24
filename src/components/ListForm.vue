<template>
  <form @submit.prevent="save">
    <input type="text" class="form-control" v-model="title" />
    <div class="d-flex flex-directions-row justify-content-between my-3">
      <button type="submit" class="btn btn-success btn-sm" :disabled="!title">
        Adicionar Lista
      </button>
      <button
        type="button"
        class="btn btn-secondary btn-sm"
        @click="clear"
        :disabled="!title"
      >
        Cancelar
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "ListForm",
  data() {
    return {
      title: null,
    };
  },
  methods: {
    save() {
      if (this.title) {
        const title = this.title;

        this.$emit("save", { title });
        this.clear();
      }
    },
    clear() {
      this.title = null;
    },
  },
};
</script>
