<template>
    <div class="fullwidthconatiner">
        <figure class="tank"></figure>
    </div>
</template>
<script>
export default {
    mounted() {
        let isAnimating = false;

        function disableScroll() {
            isAnimating = true;
            document.body.classList.add('no-scroll');
        }

        function enableScroll() {
            isAnimating = false;
            document.body.classList.remove('no-scroll');
        }

        window.addEventListener('scroll', () => {
            if (isAnimating) {
                window.scrollTo(0, 0);
            }
        });

        disableScroll();

        setTimeout(() => {
            enableScroll();
        }, 100); // Add a slight delay before enabling scrolling
    },
}
</script>

<style lang="scss" scoped>
@import "../assets/sass/mediaqueries.scss";
@import "../assets/sass/mixin.scss";

.fullwidthconatiner {

    border: 1px solid red;
    margin: 0;
    padding: 0;
    background-image: url('../assets/Bilzen_mazoet_prijzen_vandag.jpg');
    height: 50vh;
    background-position: 100% 100%; //* arrenge the imagethe way i want //
    position: relative;
    background-repeat: no-repeat;

    .tank {
        position: absolute;
        background-image: url('../assets/mazoetHub_Bilzen.png');
        bottom: 20px;
        left: -10%;
        width: 100%;
        height: 10vh;
        background-size: contain;
        background-repeat: no-repeat;
        animation: moving 10s linear forwards;

        @media screen and (min-width:map-get($breakpoints, desktop)) {
            animation: moving 10s linear infinite;
        }

        // filter: invert(0.5) sepia(1) saturate(5) hue-rotate(175deg);
        // filter: invert(16%) sepia(99%) saturkate(7404%) hue-rotate(4deg) brightness(95%) contrast(118%);

        @keyframes moving {
            0% {
                left: 100%;
            }

            100% {
                right: -20%;
            }
        }
    }
}

body.no-scroll {
    overflow: hidden;
}
</style>