<template>
    <div class="nav">
        <div class="nav__logo">
            <router-link to="/">
                <div class="nav__button">
                    LOGO
                </div>  
            </router-link>
        </div>
        <div class="nav__products">
            <div class="nav__button">
                <router-link to="/products">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-package"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                </router-link> 
            </div>
        </div>
        <router-link to="/orders">
            <div class="nav__button">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-truck"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
            </div>
        </router-link> 
        <router-link to="/customers">
            <div class="nav__button">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
        </router-link> 
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.nav {
    background: #303030;
    display: flex;
    flex-direction: column;
    width: 100px;
    height: 100vh;

        & a {
            height: 80px;
            margin: 10px;
            width: 80px;
            color: white;
            background-color: #333;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            align-content: center;
        }
        & .router-link-active {
            background-color: #444;
        }

    

}
</style>