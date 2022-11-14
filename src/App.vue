<template>
  <div id="app">
    <Header></Header>
    <GetRequest></GetRequest>
    <PostRequest></PostRequest>
    <WhySection></WhySection>
    <Footer></Footer>
  </div>
</template>

<script>
import GetRequest from './components/GetRequest.vue';
import Header from './components/Header.vue';
import PostRequest from './components/POST.vue';
import WhySection from './components/WhySection.vue';
import Footer from './components/Footer.vue';
// import GetRequest from './components/GetRequest.vue';

export default {

  components: { GetRequest, Header, PostRequest, WhySection, Footer }
}
</script>

<style lang="scss" scoped>
@import './assets/sass/main.scss';
</style>
