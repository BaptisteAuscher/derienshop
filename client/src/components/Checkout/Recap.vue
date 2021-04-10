<template>
    <section>
        <article>
            <h3>Merci pour votre commande !</h3>
                <p>Vous devriez recevoir un mail de derien dans les plus brefs délais. Votre livraison sera assuré par <a href="https://www.laposte.fr/colissimo-en-ligne" target="_blank">La Poste</a> sous une semaine. En cas de problème veuillez <a href="/contact" target="_blank">nous contacter</a>.</p>
                <button @click="backToShop()">RETOUR À LA BOUTIQUE</button>
            </article>
        <aside v-if="order">
            <h3>Récapitulatif de la commande</h3>
            <div class="item" v-for="(item, id) in order.cart.items" :key="id">
                <img :src="item.image_link" alt="Image of the product you ordered" width="50" height="50">
                <div class="item__info">
                    <p>{{ item.name}}</p>
                    <p>{{item.color}}</p>
                    <p>{{item.size}}</p>
                </div>
                <p>{{ formatPrice(item.price) }}</p>
                <p>x{{item.qty}}</p>
            </div>
            <div class="cart__info">
                <div class="cart__subtotal">
                    <p>Sous-total</p>
                    <p>{{ formatPrice(order.cart.subtotal) }}</p>
                </div>
                <div class="cart__shipping">
                    <p>Livraison</p>
                    <p>{{ formatPrice(order.cart.shippingCost) }}</p>
                </div>
                <div class="cart__total">
                    <p>Total</p>
                    <p>{{ formatPrice(order.cart.total) }}</p>
                </div>
            </div>
            <h3>Information client</h3>

            <div class="client client__identity">
                <p>{{order.customer.identity.firstname + ' ' + order.customer.identity.lastname}}</p>
                <p>{{ order.customer.identity.email }}</p>        
            </div>
            <div class="client client__delivery">
                <p>{{ order.customer.delivery.line1 + ' ' + (order.customer.delivery.line2 ? order.customer.delivery.line2 : '') }}</p>
                <p>{{ order.customer.delivery.postal + ' ' + order.customer.delivery.city}}</p>
                <p>{{  order.customer.delivery.country }}</p>
            </div>

        </aside>
        <aside v-if="!order" class="loading">
            <Spinner></Spinner>
        </aside>
    </section>
</template>

<script>
import Spinner from "@/components/Spinner";
import axios from "axios";

export default {
    data () {
        return {
            order: null,
            databaseId: null
        }
    },
    components: {
        Spinner
    },
    methods: {
        backToShop: function () {
            this.$router.push({
                name: "Shop"
            })
        },
        formatPrice : price => (price/100).toFixed(2) + 'EUR'
    },
    mounted: async function () {
        this.databaseId = await this.$store.state.checkout.orderDatabaseId;
        axios(process.env.VUE_APP_API_URL + 'api/orders/' + this.databaseId).then(result => {
            this.order = result.data;
        })
    }
}
</script>

<style lang="scss" scoped>
@import "@/scss/__variables.scss";


.item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid $grey;
    padding: 10px 20px;
    margin-top: 10px;

    & p {
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-family: 'Work Sans', sans-serif;
        font-weight: 800;
        color: $grey;
    }
}

.cart__info {
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    & div {
        width: 100%;
        display: flex;
        justify-content: space-between;
    
        
        & p {
            padding: 0;
            margin: 0;
            opacity: 0.8;
            font-size: 16px;
            font-family: 'Work Sans', sans-serif;
            font-weight: 800;
            color: $grey;
        }

        &.cart__total p{
            opacity: 1;
        }
    }
}

.loading {
    width: 50%;
    display: flex;
    justify-content: center;
    padding-top: 10px;
}

.client{
    margin-bottom: 10px;
    & p {
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-family: 'Work Sans', sans-serif;
        font-weight: 800;
        color: $grey;
        opacity: .8;
    }
}

@media screen and (min-width: 1050px) {
    section {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;

        & article {
            width: 40%;
        }

        & aside {
            width: 50%;
        }
    }
}
</style>