<template>
    <form>
        <h3>Product Information</h3>
        <input type="text" name="name" id="name" placeholder="Product name" v-model="product.name">
        <textarea type="text" name="description" id="description" rows="4" placeholder="Product description" v-model="product.description"></textarea>
        <h3>Colors</h3>
        <div class="form__colors" v-for="(color, colorId) in product.colors" :key="colorId">
            <input type="text" id="color" name="color" placeholder="Color" v-model="color.color">
            <div class="form__colors__images indent">
                <h4>Images</h4>
                <div class="form__colors__images__image" v-for="(image, imageId) in color.images" :key="imageId">
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Image url" v-model="image.url">
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
                    <button @click="addOneSize(colorId)">ADD ONE</button>
                    <button @click="deleteOneSize(colorId)" class="delete">DELETE ONE</button>
                </div>
            </div>
        </div>
        <div class="buttons">
                <button @click="addOneColor">ADD ONE</button>
                <button @click="deleteOneColor" class="delete">DELETE ONE</button>
        </div>
    </form>
</template>

<script>
export default {
    data () {
        return {
            product: {
                name: "",
                description: "",
                colors: [
                    {
                        color: "",
                        images: [
                            {
                                url: "",
                                alt: ""
                            }
                        ],
                        sizes: [{
                            size: ""
                        }]
                    }
                ]
            }
        }
    }, 
    methods: {
        addOneImage (id) {
            event.preventDefault();
            this.product.colors[id].images.push({url: "", alt: ""});
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
            this.product.colors.push({color: "",images: [{url: "",alt: ""}],sizes: [{size: ""}]});
        },
        deleteOneColor () {
            event.preventDefault();
            this.product.colors.pop();
        }
    },
}
</script>

<style lang="scss">
    form {
        padding: 0;
        width: 70%;
        display: flex;
        flex-direction: column;

        input[type=text], textarea{
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
        }
    }
</style>