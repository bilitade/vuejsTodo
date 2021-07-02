<template >
  <div>
    <h3>Todos</h3>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span> <span class="incomplete-box"></span>=Incomplete</span>
      <span><span class="complete-box"></span>=Complete</span>
    </div>
    <div class="todos">
      <div
        @dblclick="ondbclick(todo)"
        v-bind:class="{ 'is-complete': todo.completed }"
        :key="todo.id"
        v-for="todo in Todos"
        class="todo"
      >
        {{ todo.title }}
        <br />
        <div v-on:click="deleteTodo(todo.id)">
          <em class="fas fa-trash-alt"></em>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  computed: mapGetters(["Todos"]),
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "UpdateTodo"]),
    ondbclick(todo) {
      const todoup = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };
      this.UpdateTodo(todoup);
    },
  },

  created() {
    this.fetchTodos();
  },
};
</script>
<style scoped >
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  color: rgb(197, 55, 55);
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: lrem;
}
.is-complete {
  background: #35495e;
  color: white;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
</style>