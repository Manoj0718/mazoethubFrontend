<template>
    <div class="container">
        <div class="whySection">
            <h3 style="font-weight:900">Wat</h3>
            <p style="text-align:center">Indien jij een bewoner van Bilzen of een deelgemeente hiervan bent en jij
                mazout als brandstof gebruikt dan is deze gratis service zeker voor jou. <br>
                Deze app controleert voor jou iedere dag de mazoutprijs die geldt voor Bilzen. <br>
                Iedere dag, van maandag tot zaterdag, om 10.00u krijg jij deze informatie als jij dat
                wil doorgestuurd naar jouw emailadres.</p>
        </div>
    </div>
</template>
<script>
export default {


}
</script>

<style lang="scss" scoped>
@import '../assets/sass/mixin.scss';
@import '../assets/sass/mediaqueries.scss';

.container {
    @include mobile_container;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media screen and (min-width: map-get($breakpoints, desktop)) {
        @include desktop_container;
    }

    .whySection {
        border-radius: $card-radius;
        text-align: start;
        margin: 10px 0;
        padding: $padding-mobile;
        background-color: #F8F6FF;

        @media screen and (min-width: map-get($breakpoints, desktop)) {
            padding: $padding-desktop
        }

        h3 {
            font-size: clamp(1.2rem, -0.875rem + 8.333vw, 1.7rem);
            margin: 1vh;
            text-align: center;
            // @include h3text_desktop;

        }

    }
}
</style>