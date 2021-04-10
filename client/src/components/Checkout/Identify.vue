<template>
    <section class="identify">
        <form @submit="next">
            <h3>S'identifier</h3>
            <label>
                <span>Prénom *</span>
                <input type="text" placeholder="Harvey" v-model="newIdentity.firstname" :class="newIdentity.firstname ? 'green' : ''">
            </label>

            <label>
                <span>Nom *</span>
                <input type="text" placeholder="Specter" v-model="newIdentity.lastname" :class="newIdentity.lastname ? 'green' : ''">
            </label>

            <label>
                <span>Email *</span>
                <input type="text" placeholder="email@example.com" v-model="newIdentity.email" :class="isEmailValid(newIdentity.email) ? 'green' : ''">
            </label>
            <button type="submit">SUIVANT</button>
        </form>
        <aside v-if="windowWidth > 1050">
            <h3>Votre commande</h3>
            <div class="item" v-for="(item, index) in cart.items" :key="index">
                <img :src="item.image_link" :alt="item.alt">
                <p>{{item.name}}</p>
                <p>{{item.color}}</p>
                <p>{{item.size}}</p>
                <p>{{formatPrice(item.price)}}</p>
                <p class="qty">x{{item.qty}}</p>
            </div>
            <p class="subtotal">sous-total :  {{formatPrice(cart.subtotal)}}</p>
        </aside>
    </section>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "Identify",
    methods: {
        next: function (e) {
            e.preventDefault();
            console.log(e);
            this.formValidateIdentity(this.newIdentity).then(validIdentity => {
                this.$store.commit("SETCUSTOMERIDENTITY", validIdentity);
                this.$emit('next-step');
                this.$router.push({name: "Checkout", params: {step: "delivery"}});
            }).catch(message => {
                this.$store.commit("ui/setMessage", message);
            });
        },
        formatPrice : price => (price / 100).toFixed(2) + "EUR",
        isEmailValid : function (email) {
            return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
        },
        formValidateIdentity : function (identity) {
            return new Promise((resolve, reject) => {
                if (!identity.email|| !identity.firstname || !identity.lastname) {
                    reject({type: "error", message: "Remplis tous les champs."});
                    return;
                }
                if (!this.isEmailValid(identity.email)) {
                    reject({type: "error", message: "E-mail invalide."})
                    return;
                } 
                resolve(identity);
            });
        }
    },
    computed: {
        ...mapGetters({
            windowWidth: "ui/getWindowWidth",
            cart: "getCart",
            customer : "getCustomer"
        })
    },
    data () {
        return {
            newIdentity : {
                firstname: null,
                lastname: null,
                email: null
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import "@/scss/__variables.scss";


form {
    display: flex;
    flex-direction: column;
}

@media screen and (min-width: 1050px) {
    section {
        margin-top: 20px;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        & form {
            width: 40%;
        }

        & aside {
            width: 50%;
            & p {
                font-weight: 800;
                text-transform: uppercase;
                color: $grey;
            }

            & .item {
                display: flex;
                justify-content: space-between;
                border-bottom: 2px solid $grey;
                padding: 10px 20px;
            }
            & .qty {
                text-transform: none;
            }
            & .subtotal {
                text-align: right;
            }
            & img {
                width: 60px;
            }
        }
    }
}

</style>