import { keyBy, orderBy } from "lodash";
import listService from "../../services/list";
import taskService from "../../services/task";

const state = () => ({
  lists: [],
  listsLength: null,
});

const getters = {
  allById: (s) => keyBy(s.lists, "id"),
  allLists: (s) => orderBy(s.lists, ["order"], ["asc"]),
};

const actions = {
  getLists({ commit }) {
    listService.fetchLists().then((resp) => {
      commit("setLists", resp);
    });
  },
  createList({ dispatch }, data) {
    console.log(data);
    listService.createList(data).then(() => {
      dispatch("getLists");
    });
  },
  deleteList({ dispatch }, id) {
    listService.deleteList(id).then(() => dispatch("getLists"));
  },
  createTask({ dispatch }, data) {
    taskService.createTask(data).then(() => {
      dispatch("getLists");
    });
  },
  deleteTask({ dispatch }, id) {
    taskService.deleteTask(id).then(() => dispatch("getLists"));
  },
  moveTask({ dispatch }, { id, list_id }) {
    taskService.moveTask(id, list_id).then(() => dispatch("getLists"));
  },
};

const mutations = {
  setLists(s, lists) {
    s.lists = lists;
    s.listsLength = s.lists.length;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
