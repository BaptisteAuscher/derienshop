<template>
    <main class="container">
        <h1>Messages<span v-if="messages"> - {{messages.length}}</span></h1>
        <section v-if="messages">
            <label>
                <span>Filtrer</span>
                <select name="filter" id="filter" v-model="filters">
                    <option value="nofilter" selected>Pas de filtres</option>
                    <option value="notDone" selected>Nons lus uniquement</option>
                </select>
                <div class="messages">
                    <div v-for="(message, id) in messages" :key="id" @click="singleMessage(message._id)" :class="'message' + (!message.done ? ' new' : '')" v-show="showFilter(message)">
                        <p class="email">{{message.contact.mail}}</p>
                        <p class="object">{{message.contact.object}}</p>
                        <p class="content">{{message.contact.message.substr(0,70) + '...'}}</p>
                        <p class="date">il y a {{ sinceDate(message.createdAt) }}</p>
                    </div>
                </div>
            </label>
        </section>
    </main>
</template>

<script>
import axios from "axios";

export default {
    data () {
        return {
            messages: null,
            filters: 'nofilter'
        }
    },
    created: async function () {
        let config = {
            method: 'get',
            url: process.env.VUE_APP_API_URL + 'api/messages',
            headers: {
                "Authorization" : "Bearer " + this.$store.state.auth.jwt
            }
        };
        await axios(config).then(response => {
            this.messages = response.data.reverse();
        });
    },
    methods: {
        singleMessage: function (id) {
            return this.$router.push({
                name: "SingleMessage",
                params: {
                    id: id
                }
            });
        },
        showFilter: function (message) {
            if (message.done && this.filters == "notDone") {
                return false;
            }
            return true;
        },
        sinceDate: function (dateStr) {
            let diffMs = new Date() - new Date(dateStr); //différence en millisecondes
            let diffMin = Math.ceil(diffMs / 60000); //différence en minutes

            if (diffMin < 60) {
                return diffMin + 'min';
            } else {
                let diffH = Math.round(diffMin/60);
                if (diffH < 24) {
                    return diffH + 'h';
                } else {
                    let diffD = Math.floor(diffH/24);
                    return diffD + 'j';
                }
            }
        }
    }
}   
</script>

<style lang="scss">
@import "@/scss/default.scss";

.container {

    & section {
        width: 90%;
        margin: 0 auto;

        & label {

            & span {
                margin-right: 30px;
            }
        }

        & .messages {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-top: 30px;

            & .message {
                display: flex;
                align-items: center;
                width: 80%;
                margin: 0 auto;
                justify-content: space-between;
                padding: 10px 20px;
                border-bottom: 1px solid black;
                cursor: pointer;

                &.new {
                    background-color: rgba(157,216,236, 0.3);
                }

                & p {
                    white-space: nowrap;
                    font-size: 15px;
                    padding: 0;
                    margin: 0;
                    overflow:hidden;

                    &.email {
                        width: 20%;
                    }

                    &.object {
                        width: 22%;
                    }

                    &.content {
                        width: 52%;
                    }

                    &.date {
                        width: 7%;
                    }
                }
            }
        }
    }
}
</style>