<template>
<section>
    <form @submit="next">
        <h3>Infomations de livraison</h3>
        <label>
            <span>Adresse *</span>
            <input type="text" placeholder="55 rue du Faubourg Saint-Honoré" v-model="customer.line1" :class="customer.line1 ? 'green' : ''">
        </label>

        <label>
            <span>Informations complémentaires</span>
            <input type="text" placeholder="Digicode, étage, etc ..." v-model="customer.line2">
        </label>

        <label>
            <span>Code postal *</span>
            <input type="text" placeholder="75008" v-model.number="customer.postal" :class="isPostalCodeValid(customer.postal) == true ? 'green' : ''">
        </label>

        <label>
            <span>Ville *</span>
            <input type="text" placeholder="Paris" v-model="customer.city" :class="customer.city ? 'green' : ''">
        </label>

        <label>
            <span>Pays *</span>
            <input type="text" placeholder="France" v-model="customer.country" :class="isCountryValid(customer.country) ? 'green' : ''">
        </label>

        <button type="submit">SUIVANT</button>
    </form>
    <aside>
        <h3>Mode de livraison</h3>
        <p>L'interface de commande en ligne <a href="https://derienshop.com" target="_blank">derienshop.com</a>
            ne propose pour l'instant qu'un seul mode de livraison partout en France : la livraison <a href="https://www.laposte.fr/colissimo-en-ligne" target="_blank">La Poste</a> sous 7 jours à 5€.</p>
        <h3>Détails</h3>
        <table>
            <tr>
                <td>Sous-total :</td>
                <td>{{formatPrice(cart.subtotal)}}</td>
            </tr>

            <tr>
                <td>Livraison :</td>
                <td>{{formatPrice(deliveryFee)}}</td>
            </tr>

            <tr>
                <td>Total :</td>
                <td>{{formatPrice(deliveryFee + cart.subtotal)}}</td>
            </tr>
        </table>
    </aside>
</section>
</template>

<script>
import {
    mapGetters
} from "vuex";

import axios from "axios";

export default {
    methods: {
        next: function (e) {
            e.preventDefault();
            this.formValidateDelivery(this.customer)
                .then(validCustomer => {
                    this.$store.commit("SETCUSTOMERDELIVERY", validCustomer);
                    this.$emit("next-step");
                    this.$store.commit("SETSHIPPINGCOST", this.deliveryFee);
                    axios({
                        method: 'post',
                        headers: {},
                        url: process.env.VUE_APP_API_URL + 'api/stripe/create-payment-intent',
                        data: {
                            cart: this.cart
                        }
                    }).then(response => {
                        this.$store.commit("SETCLIENTSECRET", response.data.clientSecret);
                    }).catch(err => console.log(err));

                    this.$router.push({
                        name: "Checkout",
                        params: {
                            step: "payment"
                        }
                    });

                }).catch(message => {
                    this.$store.commit("ui/setMessage", message);
                });
        },
        formatPrice: price => (price / 100).toFixed(2) + "EUR",
        isPostalCodeValid: (postalCode) => {
            if (typeof postalCode == 'number' && postalCode.toString().length == 5) {
                return true;
            }
        },
        isCountryValid: (country) => {
            if (country) {
                if (country.toUpperCase() == "FRANCE") {
                    return true;
                }
            }
        },
        formValidateDelivery: function (customer) {
            return new Promise((resolve, reject) => {
                //check if all inputs are completed
                if (!customer.line1 || !customer.postal || !customer.city || !customer.country) {
                    reject({
                        type: "error",
                        message: "Remplis tous les champs."
                    });
                    return;
                }

                //check if the postal code is valid
                if (!this.isPostalCodeValid(customer.postal)) {
                    reject({
                        type: "error",
                        message: "Code postal incorrect."
                    });
                    return;
                }

                //check if the country is valid
                if (!this.isCountryValid(customer.country)) {
                    reject({
                        type: "error",
                        message: "La livraison est en France uniquement."
                    });
                    return;
                }

                resolve(customer)
            });
        }

    },
    computed: {
        ...mapGetters({
            cart: "getCart"
        })
    },
    data() {
        return {
            deliveryFee: 500,
            customer: {
                line1: null,
                line2: null,
                postal: null,
                city: null,
                country: null
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/scss/__variables.scss";

button {
    width: 100%;
}

table {
    width: 100%;

    & tr {
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;

        &:nth-child(1),
        &:nth-child(3) {
            background-color: lightgrey;
        }
    }

    margin-bottom: 10px;
}

@media screen and (min-width: 1050px) {
    section {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 20px;

        & form {
            width: 40%;
        }

        & aside {
            width: 50%;
        }
    }
}
</style>
