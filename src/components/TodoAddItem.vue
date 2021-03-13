<template>
  <div class="addItemContainer">
    <form @submit.prevent="addTodoItem()">

      <input
        class="inputItem"
        v-model="newTodo.assignee"
        type="text"
        placeholder="Assignee"
      />

      <input
        class="inputItem"
        v-model="newTodo.title"
        type="text"
        placeholder="Title"
      />

      <input
        class="inputItem"
        v-model="newTodo.description"
        type="text"
        placeholder="Description"
      />

      <button type="submit"> ADD </button>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  data(): { newTodo: Record<string, string> } {
    return {
      newTodo: {
        assignee: "",
        title: "",
        description: "",
      },
    };
  },

  methods: {
    unbindTodos() {
      Object.keys(this.newTodo).forEach((key: string) => {
        this.newTodo[key] = "";
      });
    },

    addTodoItem() {
      // guard clause to check validate input
      if (Object.keys(this.newTodo).every( (key) => this.newTodo[key].trim().length > 0 ) === false ) return;

      this.$emit("new-todo-item", this.newTodo);
      this.unbindTodos();
    },
  },
};
</script>

<style scoped>
.addItemContainer {
  margin-bottom: 2em;
}

.inputItem {
  margin-right: 1em;

  padding: 0.7em 0.5em 0.7em 0.5em;
}
</style>
