<template>
    <div class="checkout">
        <nav class="step">
            <ul>
                <li v-for="step in steps" :key="step.index">
                    <router-link :to="'/checkout/' + step.slug" :class="currentStep < step.index ? 'disabled' : ''">
                        <span class="step__number">{{step.index}}</span>
                        <span class="step__name">{{step.name}}</span>
                    </router-link>
                </li>
            </ul>
        </nav>
        <Identify v-show="$route.params.step == 'identify'" @next-step="incrementStep(1)"></Identify>
        <Delivery v-show="$route.params.step == 'delivery'" @next-step="incrementStep(2)"></Delivery>
        <Payment v-show="$route.params.step == 'payment'" @next-step="incrementStep(3)"></Payment>
        <Recap v-if="$route.params.step == 'recap'"></Recap>
    </div>
</template>

<script>
import Identify from "@/components/Checkout/Identify";
import Delivery from "@/components/Checkout/Delivery";
import Payment from "@/components/Checkout/Payment";
import Recap from "@/components/Checkout/Recap";

import {mapGetters} from "vuex";

export default {
    data: () => {
        return {
            currentStep: 1,
            steps: [
                {
                    index: 1,
                    name: "S'identifier",
                    slug: "identify"
                },
                {
                    index: 2,
                    name: "Livraison",
                    slug: "delivery"
                },
                {
                    index: 3,
                    name: "Paiement",
                    slug: "payment"
                },
                {
                    index: 4,
                    name: "Recapitulatif",
                    slug: "recap"
                }
            ]
        }
    },
    components: {
        Identify,
        Delivery,
        Payment,
        Recap
    },
    computed: {
        ...mapGetters({
            customer: "getCustomer"
        })
    },
    methods: {
        incrementStep : function (step) {
            if (step == this.currentStep) {
                this.currentStep += 1;
            }
        }
    },
    created: function () {
        if (this.$store.state.cart.cart.items.length < 1) {
            this.$router.push({name: "Cart"});
        }

        //Until i figure a solution to set the form into localStorage, everytime it refreshes, it goes back to step one unless we are already at step 4
        if (this.currentStep < 4) {
            this.$router.push({name: "Checkout", params: {step: "identify"}});
            this.currentStep = 1;
        }
    }
}
</script>

<style lang="scss">
@import "@/scss/__variables.scss";

p {
    & a {
        color: $pink;
        font-weight: 800;

        &:hover {
            text-decoration: underline;
        }
    }
}

h3 {
    color: $grey;
}

input, button {
    margin-bottom: 10px;
    padding: 10px 20px;
    border: 3px solid $grey;
    outline: none;
    font-weight: 800;
    box-shadow: none;
    font-size: 14px;

    &:disabled {
        pointer-events: none;
        opacity: .8;
        cursor: pointer;
    }

    &.green {
        border: 3px solid $green;
    }
}

label {
    display: flex;
    flex-direction: column;

    & span {
        font-size: 13px;
        margin-left: 22px;
        margin-bottom: 5px;
        font-weight: 800;
        color: $grey;
    }
}

button {
    color: white;
    border: 2px solid $black;
    background-color: $black;
    cursor: pointer;
    width: 100%;

    &:disabled {
        pointer-events: none;
        cursor: default;
        opacity: .6;
    }

    &:hover {
        border: 2px solid $pink;
        background-color: $pink;

    }
}

.checkout {
    width: 90%;
    margin: 0 auto;
    overflow-x: hidden;
    margin-top: 20px;
}
.step {
    width: 100%;
    & ul {
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
        & a {
            display: block;
            padding: 10px 20px;
            margin-bottom: 10px;
            color: white;
            background-color: $grey;
            font-weight: 800;


            & span:nth-child(1)::after {
                content: ". ";
            }

            &.router-link-active {
                background-color: $pink;
            }

            &.disabled {
                opacity: .6;
                pointer-events: none;
                cursor: default;
            }
        }
        & li {
            list-style: none;

            margin: 0;
            padding: 0;
        }
    }
}

@media screen and (min-width: 1050px) {

    .step {
        width: 70%;
        margin: 0 auto;
        & ul {
            flex-direction: row;
            justify-content: space-between;

            & li {
                width: 22%;
                min-width: 175px;
            }
        }
    }
}
</style>