<template>
    <div>
        <h1>Orders <span v-if="orders"> - {{ formatPrice(calcTotalNetValue(orders)) }}</span></h1>
        <div class="filter-selection-container">
            <label for="filter">Filtrer</label>
            <select name="filter" id="filter" v-model="filter">
                <option value="nofilter">Pas de filtre</option>
                <option value="undone">Commandes non-taités</option>
                <option value="done">Commandes taités</option>
            </select>
        </div>
        <div v-if="orders" class="orders">
            <div v-for="(order, id) in orders" :key="id" :class="'order' + (order.done ? ' complete' : '')" @click="singleOrder(order._id)" v-show="filterShow(order)">
                <div class="order__customer">
                    <h4>{{ order.customer.identity.firstname + ' ' + order.customer.identity.lastname }}</h4>
                    <p>{{ order.customer.identity.email }}</p>
                </div>
                <div class="order__details" v-if="order.cart.items.length > 0">
                    <p>{{ order.cart.items[0].name }} - {{ order.cart.items[0].color }}</p>
                    <p class="capitalize">{{ order.cart.items[0].size }}</p>
                </div>
                <div class="shipping__details">
                    <p>{{ order.customer.delivery.line1 +(order.customer.delivery.line2 ? ' ' + order.customer.delivery.line2 : '') }}</p>
                    <p>{{ order.customer.delivery.postal + ' ' + order.customer.delivery.city }}</p>
                </div>
                <h3 class="price" v-if="order.customer.payment">{{ formatPrice(netValue(order.cart.total, order.customer.payment.method)) }}</h3>
            </div>
        </div>
        <div class="spinner_container" v-if="loading">
            <Spinner></Spinner>
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
            loading: true,
            orders: null,
            filter: 'nofilter'
        }
    },
    methods: {
        formatPrice: price => (price/100).toFixed(2) + 'EUR',
        singleOrder: function (id) {
            this.$router.push({
                name: "SingleOrder",
                params: {
                    id: id
                }
            })
        },
        netValue: (total, paymentMethod) => {
            if (paymentMethod.toUpperCase() === "STRIPE") {
                return (total*0.986 - 25);
            }
            if (paymentMethod.toUpperCase() === "PAYPAL") {
                return (total*0.966 - 25);
            }
        },
        calcTotalNetValue : function (orders) {
            if (orders) {
                let sum = 0;
                orders.forEach(order => {
                    if (this.filterShow(order)) {

                        sum += this.netValue(order.cart.total, order.customer.payment.method);
                    }
                });
                return sum;
            }
        },
        filterShow : function (order) {
            if ((this.filter == 'done' && !order.done) || (this.filter == 'undone' && order.done)) {
                return false;
            }
            return true;
        }
    },
    created: async function () {
        let config = {
            method: 'get',
            url: process.env.VUE_APP_API_URL + 'api/orders?limit=5',
            headers: {
                "Authorization" : "Bearer " + this.$store.state.auth.jwt
            }
        }
        await axios(config)
            .then(async response => {
                this.orders = await response.data.reverse();
                this.loading = false;
            }).catch(err => console.log(err))
    }
}
</script>

<style lang="scss">

.filter-selection-container {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 30px;
    & label {
        margin-right: 20px;
    }
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

.orders {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 50px;
    width: 90%;
    margin: 0 auto;


    & .order {
        cursor: pointer;
        width: 190px;
        height: 230px;
        box-shadow: 0 10px 15px rgba(112, 112, 112, 0.2);
        overflow: hidden;
        padding: 10px;

        

        display: flex;
        flex-direction: column;

        transition: box-shadow .2s ease;



        & p {
            padding: 0;
            padding-left: 10px;
            margin: 0;
            font-size: 13px;

            &.capitalize {
                text-transform: uppercase;
            }
        }

        & .order__customer {
            padding-top: 20px;
            box-sizing: border-box;
            height: 40%;
            
            & h4 {
                font-size: 16px;
                padding: 0;
                margin: 0;
                padding-left: 10px;
            }

            & p {
                font-size: 11px;
                opacity: .6;

            }
        }

        .price {
            font-size: 24px;
            margin-left: 10px;
            margin-top: 20px;
        }

        &:hover {
            box-shadow: 0 15px 20px rgba(112, 112, 112, 0.4);
        }

        &.complete {
            box-shadow: 0 10px 15px rgba(45, 255, 56, 0.3);

            &:hover {
                box-shadow: 0 15px 20px rgba(45, 255, 56, 0.5);
            }
        }
    }
}

@media screen and (max-width: 1550px) {
    .orders {
        grid-template-columns: repeat(5, 1fr);
    }
}

@media screen and (max-width: 1300px) {
    .orders {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media screen and (max-width: 1050px) {
    .orders {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media screen and (max-width: 780px) {
    .orders {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (max-width: 560px) {
    .orders {
        grid-template-columns: repeat(1, 1fr);

        & .order {
            margin: 0 auto;
        }
    }
}
</style>