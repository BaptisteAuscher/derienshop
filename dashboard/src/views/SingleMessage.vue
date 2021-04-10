<template>
    <main>
        <h1>Message<span v-if="message"> - {{message.contact.object}}</span></h1>
        <h4 v-if="message">Email : {{message.contact.mail}}</h4>
        <h4 v-if="message">Objet : {{message.contact.object}}</h4>
        <section v-if="message" class="singleMessage">
            <p>{{new Date(message.createdAt).toDateString()}}</p>
            <p>{{message.contact.message}}</p>
            <div class="buttons">
                <button class="red" @click="deleteMessage">SUPPRIMER</button>
                <button class="grey" @click="back">RETOUR</button>
            </div>
        </section>
    </main>
</template>

<script>
import axios from "axios";

export default {
    created: async function () {
        let config = {
            method: 'get',
            url: process.env.VUE_APP_API_URL + 'api/messages/' + this.$route.params.id,
            headers: {
                "Authorization" : "Bearer " + this.$store.state.auth.jwt
            }
        };
        await axios(config).then(response => {
            this.message = response.data
            this.setMessageRead();
        }).catch(err => console.log(err));
    },
    data () {
        return {
            message: null
        }
    },
    methods: {
        setMessageRead: async function () {
            this.message.done = true;
            let config = {
                method: 'patch',
                url: process.env.VUE_APP_API_URL + 'api/messages/' + this.$route.params.id,
                data: {
                    message: this.message
                },
                headers: {
                    "Authorization" : "Bearer " + this.$store.state.auth.jwt
                }
            };
            axios(config).then(response => {
                console.log(response)
            }).catch(err => console.log(err))
        },
        deleteMessage: async function () {
            let config = {
                method: 'delete',
                url: process.env.VUE_APP_API_URL + 'api/messages/' + this.$route.params.id,
                headers: {
                    "Authorization" : "Bearer " + this.$store.state.auth.jwt
                }
            };

            confirm('u sure ?');
            
            await axios(config).then(response => {
                console.log(response);
                this.$router.push({
                    name: "Messages"
                });
            }).catch(err => console.log(err));
        },
        back: function () {
            this.$router.push({
                name: "Messages"
            });
        }
    }

}
</script>

<style lang="scss" scoped>
.singleMessage {
    width: 90%;
    margin: 0 auto;
}

.red, .grey{
    padding: 10px 20px;
    margin: 0;
    margin-top: 20px;
    margin-right: 10px;
    outline: none;
    border: none;
    color: white;
    font-size: 15px;
    font-weight: 800;
    cursor: pointer;
}

.red {
    background-color: #f33e5c;
}

.grey {
    background-color: grey;
}

h4 {
    padding-left: 50px;
}
</style>