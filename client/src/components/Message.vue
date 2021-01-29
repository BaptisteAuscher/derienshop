<template>
    <div class="message" >
        <div class="message__icon">
            <svg v-if="message.type == 'error'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f77e86" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            <svg v-if="message.type == 'success'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#52ff8e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <div class="message__message">
            {{message.message}}
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters({
            message: "ui/getMessage"
        })
    },
    created () {
        setTimeout(() => {
            this.$store.commit("ui/setMessage", {
                type: "",
                message: ""
            });
        }, 2000);
    }
}
</script>

<style lang="scss">
.message {
    position: fixed;
    z-index: 100;
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-around;
    bottom: 60px;
    border: 5px solid #515151;
    padding: 10px 15px;
    border-radius: 55px;
    background-color: white;
    left: 50%;
    transform: translateX(-50%);

    &__icon {
        margin-right: 15px;
        width: 16px;
        height: 16px;
    }

    &__message {
        font-size: 14px;
        font-family: 'Work Sans';
        font-weight: 100;
        color: #515151;
        text-transform: uppercase;
        font-weight: 800;
    }
}


@media screen and (min-width: 1050px) {
    .message {
        max-width: 400px;
        width: auto;
        right: 50px;
        top: 100px;
        left: auto;
        bottom: auto;
        transform: translateX(0);
    }
}
</style>