<template>
    <main class="connect">
        <h1>Connectez vous.</h1>
        <form>
            <input type="text" v-model="user.email" placeholder="Email">
            <input type="password" v-model="user.password" placeholder="Mot de passe">
            <button type="submit" @click.prevent="connect" class="connectButton">SE CONNECTER</button>
            <p class="erreur" v-if="error">{{error}}</p>
        <p>Connectez-vous avec votre compte administrateur. Si vous ne possédez pas de compte administrateur, ce site n'est pas fait pour vous :)</p>
        </form>
    </main>
</template>

<script>
import axios from "axios";

export default {
    data () {
        return {
            user : {
                email: null,
                password: null
            },
            error: null
        }
    },
    methods: {
        isEmailValid :  (email) => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email),
        connect: async function () {
            if (!this.user.email || !this.user.password) {
                return this.error = 'Veuillez remplir tous les champs.'
            }

            if (!this.isEmailValid(this.user.email)) {
                return this.error = 'Entrez un email valide.'
            }

            let config = {
                method: 'post',
                url: process.env.VUE_APP_API_URL + 'api/users/login-admin',
                data: {
                    user: this.user
                }
            };

            await axios(config).then(response => {
                console.log({
                    user: response.data.user
                })
                this.$store.commit("SETJWT", response.data.accessToken)
                this.$store.commit("SETUSER", response.data.user)
                this.$router.push({
                    name: "Home"
                })
            }).catch(err => {
                this.error = err.response.data.msg;
            });
        }
    }

}
</script>

<style lang="scss" scoped>
.connect {
    width: 80%;
    margin: 0 auto;

    & form {
        width: 40%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;

        & input {
            border: 2px solid black;
            font-size: 14px;
            font-weight: 800;
            padding: 10px 20px;
            margin-bottom: 10px;
            outline: none;
            background-color: white;
        }

        & button.connectButton {
            border: none;
            outline: none;
            font-weight: 800;
            font-size: 14px;
            color: white;
            background-color: black;
            padding: 10px 20px;
            width: initial;
            cursor: pointer;

        }

        & p.erreur {
            color: red;
        }
    }
}
</style>