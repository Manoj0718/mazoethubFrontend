<template>
    <div class="container">
        <div class="section" id="email_form">
            <!-- Form Field all vee-validate -->
            <Form class="form" ref="form" name="post_form" @submit="sentEmail()" @keydown.enter="sentEmail()">
                <div>
                    <Field type="email" name="email_input" placeholder="Jouw e-mail" v-model="formData.email"
                        class="input-box" :rules="validateEmail" />
                    <p>
                        <ErrorMessage name="email_input" class="error-msg"></ErrorMessage>
                    </p>
                </div>
                <div>
                    <Field type="text" class="input-box" name="name_input" placeholder="Jouw Voornaam"
                        v-model="formData.first_name" :rules="isRequired" />
                    <p>
                        <ErrorMessage name="name_input" class="error-msg"></ErrorMessage>
                    </p>
                </div>

                <div class="box">
                    <Field name="box_input" type="checkbox" value="yes" class="check-box" :rules="isRequired"
                        style="margin-right: 0.5vh" /> Ik geef toestemming dat je me e-mailt. *
                </div>
                <ErrorMessage name="box_input" class="error-msg"></ErrorMessage>
                <button class="btn">Verzenden</button>
                <p class="returnMsg" style="background-color: #00ff3c;">{{ sucessMsg }}</p>
            </Form>
        </div>
    </div>
</template>

<script>
import { Form, Field, ErrorMessage, useForm } from "vee-validate";
// import * as yup from 'yup';

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
                first_name: "",
                email: "",
            },

            sucessMsg: "",
        };
    },
    methods: {
        isRequired(value) {
            if (value && value.trim()) {
                return true;
            }
            return "Dit is nodig";
        },

        validateEmail(value) {
            // if the field is empty
            if (!value) {
                return "Dit is nodig";
            }
            // if the field is not a valid email
            const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if (!regex.test(value)) {
                return "is dit een geldige e-mail?";
            }
            // All is good
            return true;
        },
        async sentEmail() {
            try {
                const responce = await fetch(import.meta.env.VITE_POST_REQUEST, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(this.formData),
                });
                if (responce.ok) {
                    const jsonResponce = await responce.json();
                    this.sucessMsg = jsonResponce.message;
                    // console.log(jsonResponce);
                    // this.formData.email = this.formData.first_name = '';
                } else {
                    // console.log(responce);
                    document.querySelector(".returnMsg").classList.add("error");
                    this.sucessMsg = responce;
                    throw new Error("Dit adres staat al in onze suscripe-lijst");
                }
            } catch (error) {
                this.sucessMsg = error;
            }
            // reset the form
            this.$refs.form.resetForm();
        },
    },
};
</script>
<style lang="scss" scoped>
@import "../assets/sass/mixin.scss";
@import "../assets/sass/mediaqueries.scss";

.container {
    @include mobile_container;

    @media screen and (min-width: map-get($breakpoints, desktop)) {
        @include desktop_container;
    }

    .section {
        background-color: #f8f6ff;
        border-radius: $card-radius;
        padding: $padding-mobile;

        .form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;

            .input-box {
                text-align: center;
                padding: 0.5em;
                margin: 0.5em;
                width: 80%;
                font-size: 1rem;
            }

            .box {
                font-size: 0.8rem;
                padding: 0.5em;
            }

            .btn {
                @include button_basic;
                transition: 0.5s;
                cursor: pointer;
                background-color: #ff6343;
                color: #fafaf9;
                margin: 1em;

                &:hover {
                    box-shadow: inset 0 -3.25em 0 0 #14143c;
                    border-color: #7e994d;
                    color: #fff;
                }
            }

            .error-msg {
                color: #ffffff;
                font-size: 0.8rem;
                text-align: center;
                background-color: #ff0000;
                padding: .25rem;
            }

            .returnMsg.error {
                color: #296397;
                background-color: #00ff3c;
                padding: .25rem;
            }
        }
    }
}
</style>
