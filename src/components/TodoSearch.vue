<template>
  <div>
    <form @submit.prevent="sendSearchValToParent()">
      <input
        v-model="searchValue"
        class="searchInput"
        placeholder="Search"
      />
    </form>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      searchValue: "",
    };
  },

  methods: {
    sendSearchValToParent() {
     this.$emit("sendSearchValToParent", this.searchValue);
    },
  },
};
</script>

<style scoped>
.searchInput {
  margin-bottom: 1em;

  padding: 0.5em 0.5em 0.5em 0.5em;
}
</style>
