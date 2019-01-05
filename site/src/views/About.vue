<template>
<div>
  <v-parallax src="https://bit.ly/2F9DFMI" style="height:375px;">
  </v-parallax>
<v-container class="text-xs-center">
    <h1 class="my-5">Über uns</h1>
    <p class="text-xs-left">{{ text }}</p>

  </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`
      }
    }
  }
</script>