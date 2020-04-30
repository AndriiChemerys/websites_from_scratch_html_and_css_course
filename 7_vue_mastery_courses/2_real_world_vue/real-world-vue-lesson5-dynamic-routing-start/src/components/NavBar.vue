<template>
    <div id="nav" class="nav">
      <router-link to="/" class="brand">Real World Events</router-link>
      <nav>
        <router-link :to="{ name: 'event-list' }">List</router-link> |
        <router-link :to="{ name: 'event-create' }">Create</router-link>
      </nav>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}
.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
