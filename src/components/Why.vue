<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
    <div class="container">
        <div class="whatSection">
            <h3 class="h3title">Warrom</h3>
            <p>Herken jij je hierin? Bijna ieder jaar overkomt het ons dat we vergeten om het
                mazoutpeil in de tank te controleren en merken we pas wanneer de verwarming
                niet aanslaat of het badwater ijskoud blijft, dat de tank leeg is. Tot voor enkele
                jaren geleden was dat niet zo een probleem. We telefoneerde naar de leverancier
                en diezelfde dag werd er mazout geleverd. De prijzen schommelden wel wat maar
                niet in die mate dan wat we nu kennen. Dit is verleden tijd. Of Putin, de oorlog of
                wat dan ook de reden is …. Wij zijn de dupe. <br>

                Vorig jaar betaalde je nog zo een €500 voor 1000 liter mazout. Nu is dat €1400. Het
                is gewoon niet meer bij te houden.
                Dus nu doen wij het anders. Wij controleren iedere dag de mazoutprijs en
                wanneer deze lager is vullen wij de tank weer.
                Hiervoor moet je gaan googelen naar de <span style="font-weight: 900;">mazoutprijs in Bilzen</span>.
                <br> Maar we zijn
                allemaal mensen die met zoveel dingen bezig zijn en dagelijks de mazoutprijs
                nagaan is er teveel aan. Ook bij ons staat dit niet op de prioriteitenlijst en er
                zijn leukere dingen om te doen.
                Maar doordat we vergeten waren om het mazoutpeil na te kijken moesten
                we tanken toen de mazoutprijs op zijn hoogste punt stond.
                Dus dacht ik …. Deze fout wil ik niet meer maken en begon ik naar
                oplossingen te zoeken zodat ik geen opportuniteiten meer mis en niet meer
                moet tanken aan deze monsterprijzen. <br>
                Als programmeur los je dingen op en maak je het leven makkelijker door te
                automatiseren. Als oplossing voor dit probleem van gemiste kansen en
                daardoor veel geld te veel te betalen heb ik voor mijzelf een automatisatie
                ontwikkeld die mij op de hoogte houdt van de huidige mazoutprijs. Nu krijg ik
                iedere dag een email die mij laat weten wat de mazoutprijs is. Aan de hand
                van deze informatie kan ik beslissen of ik mijn tank ga bijvullen of niet.
                Doordat ik deze email krijg vergeet ik ook niet meer mijn tank te controleren.
                <br>
                Op deze manier heb ik enkele honderden euro’s kunnen sparen en dit is in
                deze tijden mooi meegenomen.
                Waarom
                Toen ik op het nieuws hoorde hoeveel mensen in de moeilijkheden komen
                door de veel te hoge energiefacturen raakte mij dit heel diep en vond ik dat ik
                dit moest delen. Op deze manier kan ik anderen helpen om een beetje te
                besparen. Sharing is caring. <br>
                Het is een volledig gratis service die jou kan helpen om wat geld te besparen.
            </p>
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

    .whatSection {
        border-radius: $card-radius;
        text-align: start;
        background-color: #EEEEFF;
        padding: $padding-mobile;

        @media screen and (min-width: map-get($breakpoints, desktop)) {
            padding: $padding-desktop
        }
    }

    .h3title {
        font-size: clamp(1.2rem, -0.875rem + 8.333vw, 1.7rem);
        font-weight: 500px;
        margin: 1vh;
    }
}
</style>