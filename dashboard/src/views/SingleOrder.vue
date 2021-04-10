<template>
    <div>
        <h1>Commande <span v-if="order">de {{order.customer.identity.firstname + ' ' + order.customer.identity.lastname}}</span></h1>
        <div class="spinner_container" v-if="isLoading">
            <Spinner></Spinner>
        </div>
        <div class="order" v-if="order">
            <div class="items">
            <h3>Info commande</h3>
                <h4>Contenu du panier</h4>
                <div v-for="(item, id) in order.cart.items" :key="id" class="item">
                    <img src="https://images.derienshop.com/ice-cream-purple.png" alt="" width="50" height="50">
                    <p>{{item.name}}</p>
                    <p>{{item.color}}</p>
                    <p>{{item.size}}</p>
                    <p>x{{item.qty}}</p>
                    <p>{{formatPrice(item.price)}}</p>
                </div>
                <table>
                    <tr>
                        <td>Total :</td>
                        <td>{{ formatPrice(order.cart.total) }}</td>
                    </tr>
                    <tr>
                        <td>Net :</td>
                        <td>{{ formatPrice(netValue(order.cart.total, order.customer.payment.method)) }}</td>
                    </tr>
                </table>
                <div class="order__state">
                    <h4>Etat de la commande</h4>
                    <p>{{ order.done ? 'Commande traitée' : 'Commande en cours de traitement'}}</p>
                </div>
                <button v-if="!order.done" class="vert" @click="setDone()">COMMANDE ENVOYÉE</button>
                <button v-if="order.done" class="blue" @click="setUnDone()">COMMANDE PAS ENVOYÉE</button>
                <button class="gris" @click="back()">RETOUR</button>
            </div>

            <div class="customer">
                <h3>Info client</h3>
                <p>{{ order.customer.identity.email }}</p>
                <div class="customer__adress">
                    <h4>Adresse</h4>
                    <p>{{ order.customer.delivery.line1 + ' ' + (order.customer.delivery.line2 ? order.customer.delivery.line2 : '') }}</p>
                    <p>{{ order.customer.delivery.postal + ' ' + order.customer.delivery.city}}</p>
                    <p>{{ order.customer.delivery.country }}</p>
                </div>
                <div class="customer_payment">
                    <h4>Mode de paiement</h4>
                    <p>Paiement sécurisé par {{ order.customer.payment.method }}</p>
                    <p>Numéro de commande : {{order.customer.payment.orderID }}</p>
                </div>
                <div class="customer_other">
                    <h4>Infos complémentaires</h4>
                    <p>Id dans la base de donnée : {{order._id}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Spinner from "@/components/Spinner";
import axios from "axios";

export default {
    components: {
        Spinner
    },
    data () {
        return {
            isLoading: true,
            order: null
        }
    },
    created: async function () {
        let config = {
            method: 'get',
            url: process.env.VUE_APP_API_URL + 'api/orders/' + this.$route.params.id
        };
        await axios(config).then(response => {
            this.order = response.data;
            this.isLoading = false;
        }).catch(err => console.log(err));
    },
    methods: {
        formatPrice: price => (price/100).toFixed(2) + 'EUR',
        netValue: (total, paymentMethod) => {
            if (paymentMethod.toUpperCase() === "STRIPE") {
                return (total*0.986 - 25);
            }
            if (paymentMethod.toUpperCase() === "PAYPAL") {
                return (total*0.966 - 25);
            }
        },
        setDone: async function () {
            this.order.done = true;
            let config = {
                method: 'patch',
                url: process.env.VUE_APP_API_URL + 'api/orders/' +this.order._id,
                data: this.order,
                headers: {
                    "Authorization": "Bearer " + this.$store.state.auth.jwt
                }
            };
            await axios(config)
                .then(response => console.log(response))
                .catch(err => console.log(err))
        },
        setUnDone: async function () {
            this.order.done = false;
            let config = {
                method: 'patch',
                url: process.env.VUE_APP_API_URL + 'api/orders/' +this.order._id,
                data: this.order,
                headers: {
                    "Authorization": "Bearer " + this.$store.state.auth.jwt
                }
            };
            await axios(config)
                .then(response => console.log(response))
                .catch(err => console.log(err))
        },
        back: function () {
            this.$router.push({
                name: "Orders"
            })
        }
    }
}
</script>

<style lang="scss">
.vert, .gris, .blue{
    padding: 10px 20px;
    outline: none;
    border: none;
    color: white;
    font-size: 14px;
    background-color: black;
    font-weight: 800;
    cursor: pointer;
    margin-top: 20px;
}

.blue {
    background-color: #3ea4e1;
    margin-right: 10px;
}

.vert {
    background-color: #55b52e;
    margin-right: 10px;
}

.gris {
    background-color: grey;
}

.spinner_container {
    width: 100%;
    padding-top: 40px;
    display: flex;
    justify-content: center;
}

h1{
    padding-left: 50px;
    padding-top: 40px;
}


.order {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    & p {
        margin: 0;
        padding: 0;
    }
}

.items {
    width: 50%;
    & .item {
        display: flex;
        width: 100%;
        justify-content: space-between;
        border-bottom : 2px solid black;
        padding: 10px 20px;
        margin-bottom: 10px;
        align-items: center;
    }
}

.customer {
    width: 40%;

    & p {
        margin: 0;
        padding: 0;
    }
}
</style>