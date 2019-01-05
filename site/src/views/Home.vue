<template>
<v-container>
  <v-layout>
    <v-flex xs12 sm6 lg4 class="text-xs-center" v-for="item in items" :key="item.id">
      <v-card>
   
        <v-card-text class="name">
          {{ item.data.name }}
        </v-card-text>
        <v-card-text class="card-text" v-for="line in item.data.text.slice(0, 2)">
          {{ line }}
        </v-card-text>
        <v-card-text>
          ...
        </v-card-text>
        <v-card-actions>
          <v-btn flat color="orange" :to="`/article/${item.id}`">Jetzt lesen</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.state.articles;
    }
  }
};
</script>

<style>
  img {
    object-fit: cover;
  }

  .name {
    font-size: 3em;
    font-family: 'Charm', cursive;
  }

  .card-text:nth-of-type(even) {
    font-size: 1.3em;
    font-weight: 500;
  }
</style>