<template>
  <main class="cart">
    <article class="cart__summary">
      <h2>récapitulatif du panier</h2>
      <section class="cart__items">
        <div class="item" v-for="(item, index) in cart.items" :key="index">
          <img :src="item.image_link" :alt="item.alt">
          <div class="item__product">
            <p>{{ item.name }}</p>
            <p class="price">{{ formatPrice(item.price) }}</p>
          </div>
          <div class="item__qty">
            <button :class="item.qty == 1 ? 'disabled' : ''" @click="reduceQty(index)">-</button>
            <span class="qty__text">{{ item.qty }}</span>
            <button @click="incrementQty(index)">+</button>
          </div>
          <div class="item__info">
            <p>{{ item.color }}</p>
            <p>{{ item.size }}</p>
          </div>
          <svg @click="removeItem(index)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </div>
      </section>
    </article>
    <aside class="cart__info">
      <section class="cart__subtotal">
        <div>
          <p>sous-total :</p>
          <p>{{ formatPrice(cart.subtotal) }}</p>
        </div>
        <p class="shipping-costs">des frais de ports additionnels peuvent être ajoutés.</p>
      </section>
      <section class="cart__cta">
        <button class="cta__stripe">procéder au payment</button>
        <p>ou</p>
        <button class="cta__paypal">
          <img src="@/assets/paypal.png" alt="">
        </button>
      </section>
    </aside>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      cart: "getCart"
    })
  },
  methods: {
    ...mapActions(['emptyCart', 'incrementQty', 'reduceQty', 'removeItem']),
    formatPrice : price => (price / 100).toFixed(2) + "EUR"
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/__variables.scss";

.cart {
  width: 90vw;
  margin: 0 auto;
  overflow-x: hidden;
  margin-bottom: 50px;

  &__summary {

    h2 {
      font-size: 22px;
      max-width: 60%;
      color: $grey;
    }


  }

  &__items {
    margin-top: 30px;
    margin-bottom: 40px;
    & .item {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin: 0 auto;
      margin-bottom: 25px;
      border-bottom: 2px solid black;
      padding-bottom: 10px;

      p {
        font-weight: 800;
        font-size: 12px;
        text-transform: uppercase;
        color: $grey;
        margin: 0;
        padding: 0;
      }
      img {
        width: 50px;
      }

      &__product {
        margin-right: 10px;

        .price {
          opacity: .7;
        }
      }
      &__info {
        margin-left: 15px;

        p {
          opacity: .7;
        }
      }

      &__qty {
        display: flex;
        margin: auto 0;
        border: 2px solid $grey;

        button {
          border: none;
          outline: none;
          background-color: $grey;
          color: white;
          font-weight: 800;
          font-size: 18px;
          height: 25px;
          width: 25px;
          padding: 0;
          text-align: center;
          vertical-align:baseline;
          cursor: pointer;

          &.disabled {
            opacity: .7;
          }
        }

        span {
          width: 35px;
          display: block;
          text-align: center;
          font-family: 'Work Sans';
          font-weight: 800;
          font-size: 15px;
          color: $grey;
          margin: auto 0;
        }

      }

      svg {
        color: $grey;
        margin: auto 0;
        cursor: pointer;

        &:hover {
          color: $pink;
        }
      }
    }
  }

  &__subtotal {
    p {
      font-size: 15px;
      font-weight: 800;
      color: $grey;
      margin: 0;
      padding: 0;
    }

    div {
      display: flex;
      justify-content: space-between;
    }

    .shipping-costs {
      font-size: 13px;
      max-width: 70%;
      opacity: .7;
    }
  }

  &__cta {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
      width: 100%;
      font-size: 20px;
      font-weight: 800;
      border: none;
      border-radius: 0;
      outline: none;
      padding: 10px 20px;
      font-family: 'Work Sans';
      cursor: pointer;
    }
    
    p {
      font-size: 15px;
      font-weight: 800;
      margin: 0;
      margin-top: 30px;
      margin-bottom: 10px;
    }

    .cta__stripe {
      color:white;
      background-color: $black;

      &:hover {
        background-color: $pink;
      }
    }


    .cta__paypal {
      background-color: #f4c439;
      img {
        height: 20px;
      }
    }
  }
}

@media screen and (min-width: 1050px) {
  .cart{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 40px;

    &__summary {
      width: 60%;
      h2 {
        margin-top: 0;
      }

      & .item {
        align-items: center;
        img {
          width: 70px;
        }
        p {
          font-size: 16px;
        }
      }
    }

    &__info {
      width: 35%;
      margin-top: 20px;

      .cart__subtotal div p{
        font-size: 18px;
      }
      .shipping-costs {
        max-width: 60%;
      }
    }
  }
}

</style>
