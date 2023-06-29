<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'

export default {
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Footer, Header },
  setup() {
    const siteData = reactive({
      title: `Mazoutprijzen in Bilzen, België |Informatie over Mazout in Bilzen`,
      description: ` Ontvang dagelijks bijgewerkte mazoutprijzen in Bilzen. Vind de beste prijzen voor mazout vandaag. Blijf op de hoogte van de actuele mazoutprijzen en profiteer van onze voordelige tarieven. Bespaar op uw energiekosten met onze betrouwbare mazoutlevering.`,
    })
    useHead({
      // Can be static or computed
      title: computed(() => siteData.title),
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description),
        },
      ],

    })
  },

}
</script>

<style lang="scss" scoped>
@import './assets/sass/main.scss';
</style>
