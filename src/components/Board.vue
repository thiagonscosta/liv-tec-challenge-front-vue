<template>
  <div class="d-flex flex-directions-row mx-3 mt-5">
    <div v-for="list in lists" :key="list.id" class="column">
      <div class="card p-3 bg-light border-0 shadow-sm" :id="list.id">
        <div
          class="
            mb-2
            d-flex
            flex-directions-row
            justify-content-between
            align-items-center
          "
        >
          <h3>{{ list.title }}</h3>
          <button class="menu-button" :id="`list-${list.id}`">
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

          <b-popover :target="`list-${list.id}`" triggers="focus">
            <ul class="menu">
              <li class="p-2 cursor-pointer">Editar</li>
              <li
                class="p-2 cursor-pointer"
                role="button"
                @click="deleteList(list.id)"
              >
                Deletar
              </li>
            </ul>
          </b-popover>
        </div>
        <draggable
          :list="list.tasks"
          group="tasks"
          :animation="200"
          ghost-class="ghost-card"
          @end="moveTask"
        >
          <TaskCard
            v-for="task in list.tasks"
            :key="task.id"
            :task="task"
            @deleteTask="deleteTask"
            :id="task.id"
          />
        </draggable>
        <button class="btn btn-primary mt-2" @click="openTaskForm(list.id)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-plus-lg"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"
            />
          </svg>
          <span> Adicionar um cartão </span>
        </button>
      </div>
    </div>
    <div class="column">
      <div class="card p-2 bg-light border-0 shadow-sm">
        <ListForm @save="saveList" />
      </div>
    </div>
    <TaskForm
      :show="showTaskForm"
      :list_id="list_id"
      @close="closeTaskForm"
      @save="saveTask"
    />
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { mapGetters } from "vuex";
import TaskCard from "./TaskCard.vue";
import TaskForm from "./TaskForm.vue";
import ListForm from "./ListForm.vue";

export default {
  name: "Board",
  components: {
    draggable,
    TaskCard,
    TaskForm,
    ListForm,
  },
  data() {
    return {
      showTaskForm: false,
      list_id: null,
    };
  },
  computed: {
    ...mapGetters("boardModule", { lists: "allLists" }),
  },
  created() {
    this.loadLists();
  },
  methods: {
    loadLists() {
      this.$store.dispatch("boardModule/getLists");
    },
    openTaskForm(id) {
      this.showTaskForm = true;
      this.list_id = id;
    },
    closeTaskForm() {
      this.showTaskForm = false;
    },
    saveTask(data) {
      this.$store.dispatch("boardModule/createTask", data);
    },
    deleteTask(id) {
      this.$store.dispatch("boardModule/deleteTask", id);
    },
    saveList(data) {
      this.$store.dispatch("boardModule/createList", data);
    },
    moveTask(e) {
      const id = e.item.id;
      const from_id = e.from.parentNode.id;
      const list_id = e.to.parentNode.id;

      if (from_id === list_id) {
        return;
      }

      this.$store.dispatch("boardModule/moveTask", { id, list_id });
    },
    deleteList(id) {
      this.$store.dispatch("boardModule/deleteList", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.column {
  display: flex;
  flex-direction: column;
  width: 290px;

  margin: 6px;
  border-radius: 0;

  button {
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: center;

    span {
      margin-left: 10px;
    }
  }
}
</style>
