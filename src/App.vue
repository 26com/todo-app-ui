<template>
  <div id="app">
    <v-app>
      <Tabs />
      <router-view/>
    </v-app>
  </div>
</template>

<script>
import Tabs from './components/Tabs/Tabs.vue'
export default {
  components: {
    Tabs
  }
}
</script>



