<template>
    <div class="navbar">
        <div class="navbar__left">
            <router-link to="/">
                <div class="logo">
                </div>
            </router-link>
            <div class="menu">
                <router-link to="/">SHOP</router-link>
                <router-link to="/contact">CONTACT</router-link>
            </div>
        </div>

        <div class="navbar__right">
            <router-link to="/cart">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 30 30" style="enable-background:new 0 0 30 30;" xml:space="preserve">
                    <g>
                        <path class="st0" d="M27,6h-6c-1.66,0-3-1.34-3-3v0c0-1.66,1.34-3,3-3l6,0c1.66,0,3,1.34,3,3v0C30,4.66,28.66,6,27,6z"/>
                    </g>
                    <g>
                        <path class="st0" d="M21,18H3c-1.66,0-3-1.34-3-3v0c0-1.66,1.34-3,3-3h18c1.66,0,3,1.34,3,3v0C24,16.66,22.66,18,21,18z"/>
                    </g>
                    <g>
                        <path class="st0" d="M7,30H6c-1.66,0-3-1.34-3-3v0c0-1.66,1.34-3,3-3h1c1.66,0,3,1.34,3,3v0C10,28.66,8.66,30,7,30z"/>
                    </g>
                    <g>
                        <path class="st0" d="M18,30h-1c-1.66,0-3-1.34-3-3v0c0-1.66,1.34-3,3-3h1c1.66,0,3,1.34,3,3v0C21,28.66,19.66,30,18,30z"/>
                    </g>
                </svg>

            </router-link>
            <router-link to="/">CONNEXION</router-link>
            <router-link to="/">INSCRIPTION</router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/scss/__variables.scss';
@import '@/scss/default.scss';

.navbar {
    display: flex;
    align-items: center;
    width: 85vw;
    margin: 0 auto;
    padding: 40px 0;
    justify-content: space-between;

    &__left {
        display: flex;
        align-items: center;

        & .logo {
            width: 175px;
            height: 65px;
            margin-right: 20px;
            background-image: url('../../assets/logo-grey.png');
            background-size: 100%;

            &:hover {
                cursor: pointer;
                    background-image: url('../../assets/logo-pink.png');
            }
        }

        a {
            margin-right: 20px;
        }
    }

    &__right {
        display: flex;

        a {
            margin-left: 20px;
        }

        .st0 {
            fill: #515151;
        }

        & svg:hover  .st0{
            fill: $pink;
        }

    }

    a {
        font-size: 22px;
        font-weight: 800;
        font-family: 'Work Sans';
        color: $grey;

        &:hover {
            color: $pink;
        }
    }
}



</style>