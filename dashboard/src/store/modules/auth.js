const state = {
    isAuth: false,
    jwt: null,
    user: null
};

const getters = {
    isAuth: (state) => state.isAuth,
    jwt: (state) => state.jwt,
    user: (state) => state.user
}

const mutations = {
    SETJWT: (state, jwt) => {
        state.jwt = jwt;
        localStorage.setItem("jwt", jwt)
    },
    SETUSER: (state, user) => {
        state.user = user
        localStorage.setItem("user", JSON.stringify(user))
    }
}

const actions = {

}

export default {
    state,
    getters,
    mutations,
    actions
}