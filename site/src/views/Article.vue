<template>
  <div class="pb-4">
    <img :src="item.data.path" style="height: 100vh; width: 100%"></img>
    <p class="name text-xs-center mt-4">{{ item.data.name }}</p>
    <v-card-text class="int-text" v-for="line in item.data.text">
      {{ line }}
    </v-card-text>
</div>
</template>

<script>
export default {
  computed: {
    item() {
      let id = this.$route.params.id;
      return this.$store.getters.article(id);
    }
  }
};
</script>

<style>
  .int-text:nth-of-type(odd) {
    font-size: 1.3em;
    font-weight: 500;
  }
</style>