<template>
  <div class="container">
    <h1> {{ title }} </h1>

    <TodoSearch v-on:sendSearchValToParent="toggleFilter($event)" />

    <TodoAddItem @new-todo-item="addTodo($event)" />

    <div class="col item-container">
      <TodoItem
        v-for="(todo, index) in todos"
        :key="index"
        :assignee="todo.assignee"
        :title="todo.title"
        :description="todo.description"
        :isCompleted="todo.isCompleted"
        :isFiltered="todo.isFiltered"
        @on-toggle="toggleTodo(todo)"
        @on-delete="deleteTodo(todo)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { todosData } from "./data/todos";

import TodoItem from "./TodoItem.vue";
import TodoAddItem from "./TodoAddItem.vue";
import TodoSearch from "./TodoSearch.vue";

import { Todos } from "./data/interfaces/Todos";

@Component({
  components: {
    TodoItem,
    TodoAddItem,
    TodoSearch,
  },
})
export default class TodoList extends Vue {
  title = "TODO LIST";
  todos = todosData;

  addTodo(newTodo: Record<string, string>) {
    this.todos.push({
      assignee: newTodo.assignee,
      title: newTodo.title,
      description: newTodo.description,
      isCompleted: false,
      isFiltered: false,
    });
  }

  toggleTodo(todo: Todos) {
    todo.isCompleted = !todo.isCompleted;
  }

  deleteTodo(deletedTodo: Todos) {
    this.todos = this.todos.filter((todo) => todo !== deletedTodo);
  }

  toggleFilter(data: string) {
    this.todos.forEach((key) => {
      // case insensitive
      if (key.assignee.toLowerCase().indexOf(data.toLowerCase()) !== -1) {
        key.isFiltered = false;
      } else {
        key.isFiltered = true;
      }
    });
  }

  data() {
    return {};
  }
}
</script>

<style scoped>
@import "../assets/css/main.css";

.item-container div:nth-of-type(1) {
  padding-top: 1em;
  border-top: 2px solid rgb(230, 230, 230);
}
</style>
