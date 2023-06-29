<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="header">
        <div class="logoSection">
            <div class="icon_box">
                <a href="mailto:flyindessert@gmail.com">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path
                            d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                    </svg>
                </a>
            </div>
            <div class="icon_box">
                <a href="https://webdeveloper-ten.vercel.app/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                        viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
                    </svg>
                </a>
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
    padding: 1rem;
    margin: 0;
    background-color: #14143C;

    .logoSection {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        padding: 1rem;

        .icon_box {
            padding: 0 2px;
            margin-right: 15vw;
            align-items: center;
            cursor: pointer;

            @media screen and (min-width : map-get($breakpoints, desktop)) {
                margin-right: 5vw;
            }

            a {
                text-decoration: none;
                font-size: 1rem;
                color: #FFFFFF;

                h3 {
                    font-size: clamp(1rem, 0vw + 1rem, 1rem);
                }
            }

            svg {
                //* svg use fill to change color //
                fill: #FFFFFF;
                width: 20px;
                height: 20px;
            }
        }

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

                svg {
                    animation: slide1 2s ease-in-out infinite;
                    //* svg use fill to change color //
                    fill: #FFFFFF;
                    width: 20px;
                    height: 20px;
                }
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