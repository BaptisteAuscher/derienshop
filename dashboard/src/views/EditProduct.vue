<template>
    <div>
        <div class="spinner" v-if="!product">
            attend
        </div>
        <form v-if="product">
            <h2>Edit {{product.name}}</h2>
            <h3>Product Information</h3>
            <input type="text" name="name" id="name" placeholder="Product name" v-model="product.name">
            <textarea id="description" rows="4" placeholder="Product description" v-model="product.description"></textarea>
            <input type="number" name="price" id="price" placeholder="Prix en centimes d'euro" v-model="product.price">
            <h3>Colors</h3>
            <div class="form__colors" v-for="(color, colorId) in product.colors" :key="colorId">
                <input type="text" id="color" name="color" placeholder="Color" v-model="color.color">
                <input type="text" id="hex" name="hex" placeholder="Hex (ex: #A4B2F5)" v-model="color.hex">
                <div class="form__colors__images indent">
                    <h4>Images</h4>
                    <div class="form__colors__images__image" v-for="(image, imageId) in color.images" :key="imageId">
                        <input type="text" id="imageUrl" name="imageUrl" placeholder="Image url" v-model="image.link">
                        <input type="text" id="imageAlt" name="imageAlt" placeholder="Image alt" v-model="image.alt">
                    </div>
                    <div class="buttons">
                        <button @click="addOneImage(colorId)">ADD IMAGE</button>
                        <button @click="deleteOneImage(colorId)" class="delete">DELETE IMAGE</button>
                    </div>
                </div>
                <div class="form__colors__sizes indent">
                    <h4>Sizes</h4>
                    <div class="form__colors__sizes__size" v-for="(size, id) in color.sizes" :key="id">
                        <input type="text" id="size" name="size" placeholder="Size" v-model="size.size">
                    </div>
                    <div class="buttons">
                        <button @click="addOneSize(colorId)">ADD SIZE</button>
                        <button @click="deleteOneSize(colorId)" class="delete">DELETE SIZE</button>
                    </div>
                </div>
            </div>
            <div class="buttons">
                    <button @click="addOneColor">ADD COLOR</button>
                    <button @click="deleteOneColor" class="delete">DELETE COLOR</button>
            </div>
            <div class="sold_out_box">
                <input type="checkbox" name="isSoldOut" id="isSoldOut" v-model="product.isSoldOut">
                <label for="isSoldOut">sold out ?</label>
            </div>

            <button @click.prevent="addProduct()" :class="'submit' + (loading ? ' loading' : '')">{{ !loading ? 'UPDATE' : 'WAIT...'}}</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data () {
        return {
            product: null,
            loading: false
        }
    },
    created () {
        console.log(this.$route.params.id);
        axios(process.env.VUE_APP_API_URL + 'api/products/' + this.$route.params.id)
            .then(response => {
                this.product = response.data;
            });
    },
    methods: {
        addOneImage (id) {
            event.preventDefault();
            this.product.colors[id].images.push({link: "", alt: ""});
        },
        deleteOneImage (id) {
            event.preventDefault();
            this.product.colors[id].images.pop();
        },
        addOneSize (id) {
            event.preventDefault();
            this.product.colors[id].sizes.push({size: ""});
        },
        deleteOneSize (id) {
            event.preventDefault();
            this.product.colors[id].sizes.pop();
        },
        addOneColor () {
            event.preventDefault();
            this.product.colors.push({color: "",images: [{link: "",alt: ""}],sizes: [{size: ""}]});
        },
        deleteOneColor () {
            event.preventDefault();
            this.product.colors.pop();
        },
        addProduct: async function () {
            this.loading = true;
            let config = {
                method: 'patch',
                url: process.env.VUE_APP_API_URL + 'api/products/' + this.$route.params.id,
                data : {
                    product: this.product
                },
                headers: {
                    "Authorization" : "Bearer " + this.$store.state.auth.jwt
                }
            }
            await axios(config)
                .then(response => {
                    console.log(response)
                    this.loading = false;
                }).catch(err => console.log(err))
        }
    }
}
</script>

<style lang="scss" scoped>
    form {
        padding: 0;
        width: 70%;
        display: flex;
        margin: 0 auto;
        flex-direction: column;

        input[type=text], textarea, input[type=number]{
            font-family: 'Roboto';
            font-size: 16px;
            outline: none;
            border: 1px solid black;
            border-radius: none;
            padding: 10px 20px;
            margin-bottom: 15px;
        }
        textarea {
            min-width: calc(100% - 40px);
            max-width: calc(100% - 40px);
        }

        .indent {
            padding-left: 15px;
            padding-right: 15px;
        }

        .form__colors {

            display: flex;
            flex-direction: column;

            &__images {

                &__image {
                    display: flex;
                    justify-content: space-between;

                    & input {
                        width: 46%;
                    }
                }
            }
        }

        button {
            font-weight: bold;
            font-family: 'Roboto';
            color: white;
            background-color: black;
            outline: none;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            width: 150px;
            margin-right: 15px;
            margin-bottom: 30px;

            &.delete {
                background-color:#333333;
            }

            &.submit {
                background-color: #74a5f2;
            }
        }

        .sold_out_box {
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            cursor: pointer;

            & label, input {
                cursor: pointer;
                margin-right: 10px;
            }
        }
    }
</style>