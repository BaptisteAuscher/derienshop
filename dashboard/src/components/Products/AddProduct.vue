<template>
    <form>
        <h3>Product Information</h3>
        <input type="text" name="name" id="name" placeholder="Product name" v-model="product.name">
        <textarea type="text" name="description" id="description" rows="4" placeholder="Product description" v-model="product.description"></textarea>
        <h3>Images (URLs)</h3>
        <input type="text" v-for="(url, id) in product.imageUrl" :key="id" v-model="product.imageUrl[id]" name="url" id="url" placeholder="Image">
        <div class="buttons">
            <button @click="addOneImage">ADD ONE</button>
            <button @click="deleteOneImage" class="delete">DELETE ONE</button>
        </div>
        <h3>Colors</h3>
        <input type="text" v-for="(color, id) in product.colors" :key="id" v-model="product.colors[id]" name="color" id="color" placeholder="Color">
        <div class="buttons">
            <button @click="addOneColor">ADD ONE</button>
            <button @click="deleteOneColor" class="delete">DELETE ONE</button>
        </div>
        <p>{{ product }}</p>
    </form>
</template>

<script>
export default {
    data () {
        return {
            product: {
                name: "",
                description: "",
                imageUrl: [
                    ""
                ],
                colors: [
                    "",
                ]
            }
        }
    }, 
    methods: {
        addOneImage () {
            event.preventDefault();
            this.product.imageUrl.push("");
        },
        deleteOneImage () {
            event.preventDefault();
            this.product.imageUrl.pop();
        },
        addOneColor () {
            event.preventDefault();
            this.product.colors.push("");
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

            &.delete {
                background-color:#333333;
            }
        }
    }
</style>