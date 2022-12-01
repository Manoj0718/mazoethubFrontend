<template>
    <div class="container">
        <div class="section" id="email_form">
            <!-- Form Field all vee-validate -->
            <Form class="form" ref="form" name="post_form" @submit="sentEmail()" @keydown.enter="sentEmail()">
                <div>
                    <Field type="email" name="email_input" placeholder="Jouw Email" v-model="formData.email"
                        class="input-box" :rules="validateEmail" />
                    <p>
                        <ErrorMessage name="email_input" class="error-msg"></ErrorMessage>
                    </p>
                </div>
                <div>
                    <Field type="text" class="input-box" name="name_input" placeholder="Jouw VoorNaam"
                        v-model="formData.first_name" :rules="isRequired" />
                    <p>
                        <ErrorMessage name="name_input" class="error-msg"></ErrorMessage>
                    </p>
                </div>


                <div class="box">
                    <Field name="box_input" type="checkbox" value="yes" class="check-box" :rules="isRequired" />I geef
                    de
                    toestemming om mij
                    te
                    mailen. *

                </div>
                <ErrorMessage name="box_input" class="error-msg"></ErrorMessage>
                <button class="btn">Submit</button>
                <p class="returnMsg">{{ sucessMsg }}</p>
            </Form>
        </div>
    </div>
</template>

<script>
import { Form, Field, ErrorMessage, useForm } from "vee-validate";
// import * as yup from 'yup';

export default {
    components: {
        Form,
        Field,
        ErrorMessage,
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
            return "This is required";
        },

        validateEmail(value) {
            // if the field is empty
            if (!value) {
                return "This field is required";
            }
            // if the field is not a valid email
            const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if (!regex.test(value)) {
                return "This field must be a valid email";
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
                    console.log(jsonResponce);
                    // this.formData.email = this.formData.first_name = '';
                } else {
                    this.sucessMsg = "This email adress alredy in our suscripe list";
                    throw new Error("This  adress alredy in our suscripe list");
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

            .input-box {
                text-align: center;
                padding: 0.5em;
                margin: 0.5em;
                width: 80%;
                font-size: 1rem;
            }

            .box {
                font-size: 0.8rem;
                padding: 0.2em;

            }

            .btn {
                background-color: #ff6343;
                border: 2px solid #252422;
                line-height: 1;
                margin: 1em;
                padding: 1em 2em;
                color: #fafaf9;
                transition: 0.5s;
                font-size: 1rem;
                cursor: pointer;

                &:hover {
                    box-shadow: inset 0 -3.25em 0 0 #7e994d;
                    border-color: #7e994d;
                    color: #fff;
                }
            }

            .returnMsg {
                color: #1a2136;
            }
        }
    }
}
</style>
