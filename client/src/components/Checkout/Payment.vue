<template>
<section>
    <form>
        <h3>Paiement sécurisé</h3>
        <div class="customer_info">
            <span>{{customer.identity.firstname + ' ' + customer.identity.lastname}}</span>
            <span class="no-capitalize">{{customer.identity.email}}</span>
            <span class="no-capitalize">{{customer.delivery.line1 + ' ' + (customer.delivery.line2 ? customer.delivery.line2 : '')}}</span>
            <span>{{customer.delivery.postal + ' ' + customer.delivery.city}}</span>
            <span>{{customer.delivery.country}}</span>
        </div>
        <div ref="card" class="stripe-elements"></div>
        <div class="termsAgreement">
            <input type="checkbox" name="agreeToTerms" id="agreeToTerms" v-model="agreeToTerms" v-show="false">
            <label for="agreeToTerms" :class="'box ' + (agreeToTerms ? 'checked' : '')">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </label>
            <label for="agreeToTerms">J'agrée à la politique de paiement de derien.</label>
        </div>
        <button type="submit" @click.prevent="valider" :disabled="!isClickable">{{!isLoading ? ('PAYER ' + formatPrice(cart.total)) : 'PAIEMENT EN COURS'}}</button>
        <div class="acceptedCards">
            <div v-for="(card, id) in creditCardsAccepted" :key="id">
                <img :src="require(`@/assets/credit-cards${card.path}`)" :alt="'Image of ' + card.class" :class="card.class">
            </div>
        </div>
        <div class="paypal__container">
            <p>ou</p>
            <div id="paypal-button-container"></div>
        </div>
    </form>
    <aside>
        <h3>Mes données banquaires sont en sécurité ?</h3>
        <p>L'interface de commande en ligne <a href="https://derienshop.com" target="_blank">derienshop.com</a>
            utilise <a href="http://stripe.com" target="_blank">Stripe</a> pour gérer ses paiements en ligne
            de manière sécurisé. Vos données banquaires sont directement transmis aux serveurs de Stripe pour être traités sans être sauvegardés et
            ne sont pas colléctés par derien. Pour plus d'information, vous pouvez consulter notre <a href="" target="_blank">politique
                de paiement</a>.</p>
        <h3>Comment annuler ma commande ?</h3>
        <p>Vous disposez de 24 heures après la réception de l'e-mail de confirmation pour annuler votre commande.
            Il suffira de cliquer sur le lien d'annulation reçu par mail.
            Vous serez ensuite remboursés intégralement sous 14 jours.
            En cas de problème vous pouvez nous <a href="/contact" target="_blank">contacter</a> par mail.
        </p>
    </aside>
</section>
</template>

<script>
import {
    mapGetters
} from "vuex";

import axios from "axios";

export default {
    data() {
        return {
            stripe: undefined,
            spk: 'pk_test_BZ12nnqutoAjr21mbIwrtKlJ00WHMaXYLG',
            card: undefined,
            agreeToTerms: false,
            isClickable: true,
            isLoading: false,
            creditCardsAccepted: [{
                    path: "/visa.svg",
                    class: "visa"
                },
                {
                    path: "/mastercard.svg",
                    class: "mastercard"
                },
                {
                    path: "/cb.svg",
                    class: "cb"
                },
                {
                    path: "/amex.svg",
                    class: "amex"
                }
            ]
        }
    },
    computed: {
        ...mapGetters({
            cart: "getCart",
            customer: "getCustomer",
            clientSecret: "getClientSecret"
        })
    },
    methods: {
        formatPrice: price => (price / 100).toFixed(2) + "EUR",
        valider: function () {
            if (!this.clientSecret || !this.customer.identity.email || !this.customer.identity.lastname || !this.customer.identity.firstname || !this.customer.delivery.city || !this.customer.delivery.line1 || !this.customer.delivery.postal) {
              this.$store.commit("ui/setMessage", {
                type: "error",
                message: "Oups, veuillez réessayer !"
              });
              this.$router.push({
                name: "Checkout",
                params: {
                  step: "indentify"
                }
              });
              return;
            }

            this.isClickable = false;
            this.isLoading = true;
            if (!this.agreeToTerms) {
                this.$store.commit("ui/setMessage", {
                    type: "error",
                    message: "Veuillez agreer au termes."
                });
                this.isClickable = true;
                return;
            }
            this.stripe.confirmCardPayment(this.clientSecret, {
                payment_method: {
                    card: this.card,
                    billing_details: {
                        email: this.customer.identity.email,
                        name: this.customer.identity.firstname + ' ' + this.customer.identity.lastname,
                        address: {
                            city: this.customer.delivery.city,
                            line1: this.customer.delivery.line1,
                            line2: this.customer.delivery.line2,
                            postal_code: this.customer.delivery.postal
                        }
                    }
                }
            }).then(result => {
                if (result.error) {
                    this.$store.commit("ui/setMessage", {
                        type: "error",
                        message: result.error.message
                    });

                    this.isClickable = true;
                } else if (result.paymentIntent && !result.error) {
                    this.$store.commit("ui/setMessage", {
                        type: "success",
                        message: "Achat réussi !"
                    });
                    //base de donnée
                    this.setOrder('Stripe', result.paymentIntent.id.toString());
                }
            });
            this.isLoading = false;

        },
        setOrder: async function (method, orderID) {
            let customer = this.customer;
            console.log(customer);
            let cart = this.cart;
            console.log(cart)
            let order = {
                customer: {
                    identity: customer.identity,
                    delivery: customer.delivery,
                    payment: {
                        method: method,
                        orderID: orderID
                    }
                },  
                cart: cart
            };
            this.$store.dispatch("emptyCart");
            let config = {
                method: 'post',
                url: process.env.VUE_APP_API_URL + 'api/orders',
                headers: {
                    "Content-Type": "application/json"
                },
                data: {
                    order
                }
            };
            return await axios(config)
                .then(response => {
                    let result = response.data;
                    this.$store.commit("SETORDERID", result.id);
                    this.$emit('next-step');
                    this.$router.push({
                        name: "Checkout",
                        params: {
                            step : "recap"
                        }
                    })

                })
                .catch(err => console.log(err));
        }
    },
    mounted: function () {
        let elements = {
            fonts: [{
                    cssSrc: 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;800&display=swap'
                },
                {
                    cssSrc: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,800;1,400;1,800&display=swap'
                }
            ]
        };
        let style = {
            base: {
                fontSize: 14 + "px",
                fontFamily: '"Montserrat", Sans-Serif',
                color: "black"
            }
        }
        this.stripe = window.Stripe(this.spk);
        this.card = this.stripe.elements(elements).create('card', {
            style: style
        });
        this.card.mount(this.$refs.card);


        const self = this;

        window.paypal.Buttons({
            fundingSource: window.paypal.FUNDING.PAYPAL,
            style: {
                layout: 'vertical',
                label:  'paypal',
                color: 'silver'
            },
            createOrder: function (data, actions) {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: (self.cart.total/100).toString()
                        }
                    }]
                })
            },
            onApprove: function (data, actions) {
                return actions.order.capture().then(function (details) {
                    console.log(details);
                    self.setOrder('Paypal', details.id);
                    self.$store.commit("ui/setMessage", {message: "Achat réussi !", type: "success"});
                });
            }
        }).render('#paypal-button-container');
    }
}
</script>

<style lang="scss" scoped>
@import "@/scss/__variables.scss";

.acceptedCards {
    display: flex;

    & img {
        height: 35px;
        margin-right: 10px;
        cursor: pointer;

        &:hover {
            opacity: .6;
        }
    }
}

.stripe-elements {
    padding: 10px 20px;
    border: 3px solid $grey;
    margin-bottom: 10px;

    &.StripeElement--complete {
        border: 3px solid $green;
    }
}

.customer_info {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

    & span {
        font-weight: 800;
        font-size: 14px;
        color: $grey;
        opacity: .8;
        text-transform: capitalize;

        &.no-capitalize {
            text-transform: none;
        }
    }
}

.termsAgreement {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;

    & label {
        margin-left: 20px;
        cursor: pointer;
        font-size: 14px;
    }

    & label.box {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        width: 18px;
        height: 18px;
        border: 3px solid $grey;
        margin: 0;
        cursor: pointer;
        overflow: hidden;

        & svg {
            width: 12px;
            height: 12px;
        }

        &.checked {
            border: 3px solid $green;
            background-color: $green;
        }

        &:hover {
            border: 3px solid $green;
        }
    }
}

.paypal__container {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & p {
        font-weight: 800;
    }

    & #paypal-button-container {
        width : 100%;
    }
}

.cta__paypal {
    background-color: #f4c439;
    border: none;
    img {
    height: 20px;
    }

    &:hover {
    background-color: $pink;
    }

    &:disabled {
    background-color: lightgrey;
    }
}

@media screen and (min-width: 1050px) {
    section {
        display: flex;
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

.termsAgreement {
    & label {
        margin-left: 10px;

        &.box {
            margin: 0;
        }
    }
}
</style>
