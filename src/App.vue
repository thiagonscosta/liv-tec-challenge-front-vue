<template>
  <div id="app">
    <b-overlay id="overlay" :show="overlay" rounded="sm">
      <AppBar />
      <Board />
    </b-overlay>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Board from "./components/Board.vue";
import AppBar from "./components/AppBar.vue";

export default {
  name: "App",
  components: {
    Board,
    AppBar,
  },
  computed: {
    ...mapState("boardModule", ["overlay"]),
  },
};
</script>
