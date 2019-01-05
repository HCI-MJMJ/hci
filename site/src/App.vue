<template>
  <v-app>
    <v-toolbar app dark color="primary">
      <v-toolbar-title class="white--text">Berührungspunkte</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn flat to="/">Startseite</v-btn>
        <v-btn flat to="/about">Über uns</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>

    <v-footer dark height="auto">
      <v-card class="flex" flat tile>
        <v-card-title class="primary">
          <p class="subheading">Made in Hannover with ❤️</p>
        </v-card-title>

        <v-card-actions class="grey darken-3 justify-center">&copy;2019 —
          <p>Berührungspunkte</p>
        </v-card-actions>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  beforeMount() {
    this.$store.dispatch("fetchArticles");
  }
};
</script>
