<template>
    <div id="container">
        <div class="title" v-if="dataReady">
            <h1 class="main-text">De Huidige Mazoutprijs</h1>
            <h1 class="main-text">in Bilzen</h1>
            <h2 class="date">{{ formatDate() }}</h2>
            <h3>1000 L - {{ prices.price1000 }} <span>+vat</span> </h3>
            <h3>2000 L - {{ prices.price2000 }}<span>+vat</span></h3>
        </div>
        <div v-else class="loading">
            <p>Waiting</p>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script>
export default {

    name: 'GetRequest',

    data() {
        return {
            dataReady: false,
            errorMessage: '',
            prices: {},
        }
    },
    async mounted() {
        try {
            const responce = await fetch(import.meta.env.VITE_GET_REQUEST);
            const jsonResponce = await responce.json();
            this.prices = jsonResponce.price;
            this.dataReady = true;
        } catch (error) {
            console.log(error);
            this.dataReady = false;
            this.errorMessage = 'probeer het later nog eens'
            // "We can not connect to the server right now";
        }

    },
    methods: {
        formatDate() {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const current = new Date();
            let beforeRegEX = current.toLocaleDateString('nl-NL', options);
            const finalDate = beforeRegEX.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
            return finalDate;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/mixin.scss';
@import '../assets/sass/mediaqueries.scss';

#container {
    @include mobile_container;

    @media screen and (min-width: map-get($breakpoints, desktop)) {
        @include desktop_container;
    }

    .title {
        border-radius: $card-radius;
        text-align: center;
        padding: $padding-mobile;
        background-color: #14143C;

        .main-text {
            // font-size: clamp(1rem, 2.7vw + 1.3rem, 3rem);
            --bg-size: 500%;
            // font-size: clamp(3rem, 25vmin, 12rem);
            font-size: clamp(3rem, 2.7vw + 1.3rem, 8rem);
            font-weight: 700px;
            @include main_text_gradient;
        }

        @media (prefers-reduced-motion: no-preference) {
            .main-text {
                animation: move-bg 8s linear infinite;
            }

            @keyframes move-bg {
                to {
                    background-position: var(--bg-size) 0;
                }
            }
        }

        h3,
        h2 {
            color: #ffff;
            font-weight: 400;

            span {
                margin: 0 5px;
                font-size: clamp(.7rem, 2.7vw - 0.7rem, 1rem);
            }

        }

    }

    .loading {
        text-align: center;
        // background-color: #F8F6FF;
        background-color: #EEEEFF;
    }

    .loading span {
        display: inline-block;
        vertical-align: middle;
        width: .6em;
        height: .6em;
        margin: .19em;
        background: #007DB6;
        border-radius: .6em;
        animation: loading 1s infinite alternate;
    }

    .loading span:nth-of-type(2) {
        background: #008FB2;
        animation-delay: 0.2s;
    }

    .loading span:nth-of-type(3) {
        background: #009B9E;
        animation-delay: 0.4s;
    }

    .loading span:nth-of-type(4) {
        background: #00A77D;
        animation-delay: 0.6s;
    }

    .loading span:nth-of-type(5) {
        background: #00B247;
        animation-delay: 0.8s;
    }

    .loading span:nth-of-type(6) {
        background: #5AB027;
        animation-delay: 1.0s;
    }

    .loading span:nth-of-type(7) {
        background: #A0B61E;
        animation-delay: 1.2s;
    }

    @keyframes loading {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

}
</style>