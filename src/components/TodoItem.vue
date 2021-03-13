<template>
  <div :class="{ isFiltered }" class="todoItemContainer">
    <div class="row itemRow">
      <span
        class="toggleContainerView"
        v-bind:class="{ accordionClicked }"
        @click="toggleDescription"
      >
        >
      </span>

      <li
        class="lineStyle"
        :class="{ isCompleted }"
        @click="$emit('on-toggle')"
      >
        <div class="titleItem">{{ title }}</div>

        <span> Assigned By: {{ assignee }} </span>
      </li>
      <span class="deleteItem" @click="$emit('on-delete')"> X </span>
    </div>

    <div class="descriptionContainer col" v-bind:class="{ toggled }">
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      newTodoDescription: "",
      toggled: false,
      accordionClicked: false,
    };
  },

  props: ["assignee", "title", "description", "isCompleted", "isFiltered"],

  methods: {
    toggleDescription() {
      this.toggled = !this.toggled;
      this.accordionClicked = !this.accordionClicked;
    },
  },
};
</script>

<style scoped>
.todoItemContainer {
  border-bottom: 2px solid rgb(230, 230, 230);
  text-align: left;

  margin-bottom: 1em;

  padding-bottom: 1em;

  cursor: pointer; /* Pointer cursor for all elms */

  user-select: none; /* Prevents awkward text-dragging for all elms */
}

.itemRow {
  align-items: center;
}

.lineStyle {
  list-style: none; /* Remove list bullets */
  height: fit-content;
  width: 100%;

  /* lets us fade out text-decoration, by transitionign the text-decoration-color property */
  text-decoration: line-through;
  text-decoration-color: transparent;
  transition: text-decoration-color 0.3s;
}

.titleItem {
  font-weight: 700;
  font-size: 1.3em;
  width: fit-content;
  margin-bottom: 0.2em;
}

.deleteItem {
  width: fit-content;
  height: fit-content;

  display: flex;
  color: red;

  cursor: pointer;

  font-size: 1.2em;
  font-weight: 700;

  margin-right: 1em;
  margin-top: auto;
  margin-bottom: auto;

  transition: filter 0.2s; /* Simple feedback when you hover over delete */
}

.deleteItem:hover {
  filter: brightness(0.5);
}

.isCompleted {
  text-decoration-color: black;
}

.toggleContainerView {
  margin-left: 1em;
  margin-right: 1em;

  padding: 0.2em 0.2em 0.2em 0.2em; /* Makes our chevron a bit easier to click */
  font-size: 2em;
  font-weight: 700;
  height: fit-content;
  transition: transform 1s;
}

.descriptionContainer {
  height: fit-content;
  max-height: 0em;
  overflow-y: hidden;
  transition: max-height 0.7s;
  margin-left: 6em;
  font-weight: 700;
}

.toggled {
  max-height: 5em;
}

.accordionClicked {
  transform: rotate(90deg); /* Rotates the accordion toggler */
}

.isFiltered {
  display: none;
}
</style>
