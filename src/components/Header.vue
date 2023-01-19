<template>
    <div id="header">
        <div class="logoSection">
            <div class="one">
                <!-- <a href="mailto:flyindessert@gmail.com"> -->
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path
                            d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                    </svg>
                <!-- </a> -->
            </div>
            <div class="linkedinDiv">
                <div class="one">
                    <a href="https://www.linkedin.com/in/manojfernando-web-developer/" target="_blank">
                        <h3 style="font-weight: 400;">Linkedin</h3>
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
    </div>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
@import '../assets/sass/mixin.scss';
@import '../assets/sass/mediaqueries.scss';

#header {
    padding: 2rem;
    margin: 0;
    background-color: #14143C;

    .logoSection {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;

        .linkedinDiv {
            display: flex;
            margin-left: 5vh;
            flex-direction: row;
        }

        .one {
            padding: 0 2px;
            align-items: center;
            cursor: pointer;

            a {
                text-decoration: none;
                font-size: 1rem;
                color: #FFFFFF;

                h3 {
                    font-size: clamp(1rem, 0vw + 1rem, 1rem);
                }
            }

            svg {
                animation: slide1 2s ease-in-out infinite;
                //* svg use fill to change color //
                fill: #FFFFFF;
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
}
</style>