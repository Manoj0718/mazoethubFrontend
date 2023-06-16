<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container">
        <div class="textSide">
            <h3>Wil jij je uitschrijven?</h3>
            <p>Wanneer jij je uitschrijft ontvang jij geen info meer over mazoutprijzen in Bilzen.</p>
        </div>
        <div class="imageSide">
            <img src="../assets/mazoet_bilzen_price.webp" class="img-fluid" alt="">
        </div>

        <div class="section" id="email_form">
            <Form class="form" ref="form" name="unsubscribe_form" @submit="sentEmail" @keydown.enter="sentEmail">
                <div>
                    <Field type="email" name="email_input" placeholder="Jouw e-mail" v-model="formData.email"
                        class="input-box" :rules="validateEmail" />
                    <p>
                        <ErrorMessage name="email_input" class="error-msg"></ErrorMessage>
                    </p>
                </div>
                <ErrorMessage name="box_input" class="error-msg"></ErrorMessage>
                <p class="returnMsg">{{ sucessMsg }}</p>
                <button class="unsubscribe-button">Uitschrijven</button>
            </Form>
        </div>
    <!-- <router-link to="/">
            <button class="cancel-button">Teruggaan</button>
                                                    </router-link> -->
    </div>
</template>

<script>

import { Form, Field, ErrorMessage, useForm } from 'vee-validate';
export default {
    components: {
        // eslint-disable-next-line vue/no-reserved-component-names
        Form,
        Field,
        ErrorMessage,
        // eslint-disable-next-line vue/no-unused-components
        useForm,
    },
    data() {
        return {
            formData: {
                email: "",  // Update initial value to an empty string
            },
            sucessMsg: ''
        };
    },
    methods: {
        validateEmail(value) {
            if (!value) {
                return 'Dit is nodig';
            }
            // if the field is not a valid email
            const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if (!regex.test(value)) {
                return 'Dit is nodig';
            }
            //* All is good
            return true;
        },

        async sentEmail() {

            try {
                const responce = await fetch(import.meta.env.VITE_UNSUBSCRIBE_REQUEST, {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(this.formData),
                });
                if (responce.ok) {
                    const jsonResponce = await responce.json();
                    // console.log('line 74', jsonResponce);
                    this.sucessMsg = jsonResponce.message;
                } else {
                    const errorMsg = await responce.json();
                    document.querySelector(".returnMsg").classList.add("error");
                    this.sucessMsg = errorMsg.message;
                    //  throw new Error(this.sucessMsg);
                }

            } catch (error) {
                // console.log(error);
                throw new Error(error);
            }
            //* reset the form
            this.$refs.form.resetForm();
        }

    },
};

</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';
@import '../assets/sass/mixin.scss';
@import '../assets/sass/mediaqueries.scss';

.container {
    height: 100%;
    @include mobile_container;
    text-align: center;

    @media screen and (min-width:map-get($breakpoints, desktop)) {
        height: 100%;
    }

    .textSide {
        margin: 0.5rem;
    }

    .imageSide {
        width: 100%;

        @media screen and (min-width:map-get($breakpoints, desktop)) {
            width: 50%;
            margin: auto;
        }

        img {
            width: 100%;
            object-fit: cover;
            height: 100%;

            @media screen and (min-width:map-get($breakpoints, desktop)) {
                object-position: center;
                height: 70%;
                width: 50%;
            }
        }
    }

    .input-box {
        text-align: center;
        padding: 0.5em;
        margin: 0.5em;
        width: 80%;
        font-size: 1rem;

        @media screen and (min-width:map-get($breakpoints, desktop)) {
            width: 20%;
        }
    }

    .returnMsg.error {
        color: #296397;
        background-color: #00ff3c;
        padding: .25rem;

        @media screen and (min-width:map-get($breakpoints, desktop)) {
            width: 25%;
            margin: auto;
            align-items: center;
        }
    }

    .unsubscribe-button {
        @include button_basic;
        background-color: #ff6343;
        color: #fafaf9;
        margin: .5rem;
        width: 70%;

        @media screen and (min-width:map-get($breakpoints, desktop)) {
            cursor: pointer;
            width: 15%;

            &:hover {
                box-shadow: inset 0 -3.25em 0 0 #14143C;
                border-color: #7e994d;
                color: #fff;
            }
        }

    }

    .cancel-button {
        background-color: #f8f6ff;
        @include button_basic;
        width: 50%;
        margin: .5rem auto;

        &:hover {
            background-color: #14143C;
            color: #ffff;
        }

        @media screen and (min-width:map-get($breakpoints, desktop)) {
            width: 10%;
            cursor: pointer;
        }
    }

}
</style>

<!-- //* https://codepen.io/manoj0718/pen/dygBLaE -->