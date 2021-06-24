<template>
  <div class="card p-2 my-2 shadow-sm border-0">
    <div
      class="
        d-flex
        flex-directions-row
        justify-content-between
        align-items-center
      "
    >
      <span>{{ task.title }}</span>
      <button class="menu-button" :id="`${task.id}`" variant="primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-three-dots-vertical"
          viewBox="0 0 16 16"
        >
          <path
            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
          />
        </svg>
      </button>

      <b-popover :target="`${task.id}`" triggers="focus">
        <ul class="menu">
          <li class="p-2 cursor-pointer">Editar</li>
          <li
            class="p-2 cursor-pointer"
            role="button"
            @click="deleteTask(task.id)"
          >
            Deletar
          </li>
        </ul>
      </b-popover>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskCard",
  props: {
    task: {
      type: Object,
      require: true,
    },
  },
  methods: {
    deleteTask(id) {
      this.$emit("deleteTask", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-button {
  border-radius: 50%;
  border: 0;

  padding: 2px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  background-color: transparent;
}

.menu-button:hover {
  background: rgba(0, 0, 0, 0.1);
  transition: 0.2s ease;
}

.b-popover {
  padding: 0;
  margin: 0;
}

.menu {
  list-style-type: none;
  width: 100px;

  li {
    cursor: pointer;
  }

  li:hover {
    background: rgba(0, 0, 0, 0.1);
    transition: 0.2s ease;
  }
}
</style>
