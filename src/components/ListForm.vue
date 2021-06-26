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
import { mapState } from "vuex";

export default {
  name: "ListForm",
  data() {
    return {
      title: null,
    };
  },
  computed: {
    ...mapState("boardModule", ["listsLength"]),
  },
  methods: {
    save() {
      if (this.title) {
        const title = this.title;
        const order = this.listsLength + 1;

        this.$emit("save", { title, order });
        this.clear();
      }
    },
    clear() {
      this.title = null;
    },
  },
};
</script>
