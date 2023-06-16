<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div style="background-color: #14143C; color: #FFFFF;">
        <div class="footer">
            <div class="logo">
                <router-link to="/">
                    <img src="../assets/M-solutions_Bilzen_mazoet_prizen.png" />
                </router-link>

            </div>
            <div class="router">
                <router-link to="/unscribe">
                    <p class="text">Uitschrijven</p>
                </router-link>
                <router-link to="/">
                    <p class="text">Home</p>
                </router-link>
            </div>
            <div class="logoSection">
                <div class="one">
                    <a href="https://www.linkedin.com/in/manojfernando-web-developer/" target="_blank">
                        <h3 style="font-weight:400">Linkedin</h3>
                    </a>
                </div>
                <div class="one">
                    <a href="https://www.linkedin.com/in/manojfernando-web-developer/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="rights_column">
            <p>© 2022 M-Solutions. All rights reserved</p>
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

.footer {
    @include mobile_container;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #FFFF;

    .logo {
        padding: 0 1vh;

        img {
            // border: 1px solid white;
            width: 60%;
            margin: auto;
            // height: 80%;
        }
    }

    .router {
        text-align: center;

        @media screen and (min-width:map-get($breakpoints, desktop)) {
            text-align: center;
        }


        .text {
            text-decoration: none;
            color: #65ec65;
            margin: 0.5rem;

            &:hover {
                color: #f8f6ff;
                ;
            }
        }

    }

}



.logoSection {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 1vh;

    .one {
        padding: 0 2px;
        align-items: center;
        color: white;

        a {
            text-decoration: none;
            color: #FAFAF9;

            h3 {
                font-size: clamp(1rem, 0vw + 1rem, 1rem);
            }
        }

        svg {
            animation: slide1 2s ease-in-out infinite;
            //* svg use fill to change color //
            fill: #FAFAF9;
            width: 20px;
            height: 20px;
        }



        @keyframes slide1 {

            0%,
            100% {
                transform: translate(0, 0);
            }

            50% {
                transform: translate(0, 5px);
            }
        }
    }
}


.rights_column {
    padding: 2vh;

    p {
        text-align: center;
        color: #FAFAF9;
    }
}
</style>