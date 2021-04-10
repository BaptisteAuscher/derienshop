<template>
  <section class="contact">
      <form>
          <h3>Contactez-nous</h3>
          <label>
                <span>E-mail</span>
                <input type="text" name="email" id="email" placeholder="email@exemple.com" v-model="contact.mail">
          </label>

          <label>
                <span>Objet</span>
                <input type="text" name="subject" id="subject" placeholder="Questions sur ma commande" v-model="contact.object"> 
          </label>

          <label>
                <span>Message</span>
                <textarea name="message" id="message" rows="10" spellcheck="false" placeholder="Tapez votre message ..." v-model="contact.message"></textarea> 
          </label>

          <button type="submit" @click.prevent="sendMessage()">ENVOYER</button>

      </form>

      <aside>
          <h3>Informations utiles</h3>
          <p>Contactez nous seulement en cas de besoin essentiels. Rentrez votre adresse mail soigneusement, sinon nous ne pourrons pas vous recontacter. Nous vous remercions pour votre message et vous recontacterons dans les plus brefs délais !</p>
      </aside>
  </section>
</template>

<script>
import axios from"axios";

export default {
    data () {
        return {
            contact: {
                mail: null,
                message: null,
                object: null
            }
        }
    },
    methods: {
        isEmailValid :  (email) => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email),
        sendMessage: async function () {
            if (!this.contact.mail || !this.contact.message || !this.contact.object) {
                return this.$store.commit("ui/setMessage", {type:"error", message:"Veuillez remplir tous les champs"});
            }

            if (!this.isEmailValid(this.contact.mail)) {
                return this.$store.commit("ui/setMessage", {type:"error", message:"Cet email n'est pas valide"});
            }

            let config = {
                method: 'post',
                url: process.env.VUE_APP_API_URL + 'api/messages',
                data: {
                    contact: this.contact
                }
            };

            await axios(config).then(response => {
                console.log(response)
                this.$store.commit("ui/setMessage", {type:"success", message:"Bien reçu !"})
            }).catch(err => {
                console.log(err)
            })


            console.log(process.env.VUE_APP_API_URL)
        }
    }

}
</script>

<style lang="scss" scoped>
@import "@/scss/__variables.scss";
@import "@/scss/default.scss";

section.contact {

    width: 90%;
    margin: 0 auto;

    & form {
        display: flex;
        flex-direction: column;

        & label {
            display: flex;
            flex-direction: column;

            & span {
                font-size: 13px;
                font-weight: 800;
                margin-left: 22px;
                margin-bottom: 5px;
                color: $grey;
            }
        }
        & input, textarea {
            padding: 10px 20px;
            margin: 0;
            margin-bottom: 10px;
            outline: none;
            border-radius: 0px;
            border: 3px solid $grey;
            font-weight: 800;
            font-size: 16px;
            font-family: 'Montserrat', sans-serif;
            color: $grey;
        }

        & button {
            cursor: pointer;
            background-color: black;
            color: white;
            font-size: 16px;
            padding: 10px 20px;
            width: 100%;
            border: none;
            outline: none;
            font-weight: 800;

            &:hover {
                background-color: $pink;
            }
        }
    }

    & h3 {
        color: $grey;
    }
}

@media screen and (min-width: 1050px) {
    .contact {
        display: flex;
        justify-content: space-between;

        & form {
            width: 50%;
        }

        & aside {
            width: 40%;
        }
    }
}
</style>