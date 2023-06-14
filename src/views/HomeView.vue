
<template>
    <div id="app">
        <GetRequest></GetRequest>
        <HeroVue></HeroVue>
        <WhatSection></WhatSection>
        <PostRequest></PostRequest>
        <Why></Why>
    </div>
</template>

<script>

import GetRequest from '../components/GetRequest.vue';
import PostRequest from '../components/POST.vue';
import WhatSection from '../components/WhatSection.vue';
import Why from '../components/Why.vue';
import HeroVue from '../components/Hero_image.vue';

export default {
    components: { HeroVue, WhatSection, GetRequest, PostRequest, Why }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';
</style>
