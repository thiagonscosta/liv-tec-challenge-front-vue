import { keyBy, orderBy } from "lodash";
import listService from "../../services/list";
import taskService from "../../services/task";

const state = () => ({
  lists: [],
  listsLength: null,
  overlay: null,
});

const getters = {
  allById: (s) => keyBy(s.lists, "id"),
  allLists: (s) => orderBy(s.lists, ["order"], ["asc"]),
};

const actions = {
  getLists({ commit }) {
    commit("setOverlay", true);
    listService
      .fetchLists()
      .then((resp) => {
        commit("setLists", resp);
        commit("setOverlay", false);
      })
      .catch(() => {
        commit("setOverlay", false);
      });
  },
  createList({ commit, dispatch }, data) {
    commit("setOverlay", true);
    listService
      .createList(data)
      .then(() => {
        dispatch("getLists");
      })
      .catch(() => {
        dispatch("getLists");
      });
  },
  deleteList({ commit, dispatch }, id) {
    commit("setOverlay", true);
    listService
      .deleteList(id)
      .then(() => dispatch("getLists"))
      .catch(() => {
        commit("setOverlay", false);
      });
  },
  createTask({ commit, dispatch }, data) {
    commit("setOverlay", true);
    taskService.createTask(data).then(() => {
      dispatch("getLists");
    });
  },
  deleteTask({ dispatch }, id) {
    taskService.deleteTask(id).then(() => dispatch("getLists"));
  },
  moveTask({ commit, dispatch }, { id, list_id }) {
    commit("setOverlay", true);
    taskService
      .moveTask(id, list_id)
      .then(() => dispatch("getLists"))
      .catch(() => dispatch("getLists"));
  },
};

const mutations = {
  setLists(s, lists) {
    s.lists = lists;
    s.listsLength = s.lists.length;
  },
  setOverlay(s, value) {
    s.overlay = value;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
