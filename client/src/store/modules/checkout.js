const state = {
    customer : {
        identity: {
            lastname: null,
            firstname: null,
            email: null
        },
        delivery: {
            line1: null,
            line2: null,
            postal: null,
            city: null,
            country: null
        }
    },
    clientSecret: null,
    orderDatabaseId : null
};

const mutations = {
    SETCUSTOMERIDENTITY : (state, validCustomerIdentity) => {
        state.customer.identity = validCustomerIdentity;

        localStorage.setItem("customer", JSON.stringify(state.customer));
    },
    SETCUSTOMERDELIVERY : (state, validCustomerDelivery) => {
        state.customer.delivery = validCustomerDelivery;
        
        localStorage.setItem("customer", JSON.stringify(state.customer));
    },
    SETCUSTOMER : (state, customer) => {
        state.customer = customer;
    },
    SETCLIENTSECRET : (state, clientSecret) => {
        state.clientSecret = clientSecret
    },
    SETORDERID : (state, orderDatabaseId) => {
        state.orderDatabaseId = orderDatabaseId
    }
};

const actions = {   
    fetchCurrentCustomer : ({commit}) => {
        if (localStorage.customer) {
            let customer = JSON.parse(localStorage.customer);
            commit("SETCUSTOMER", customer);
        }
    }
};

const getters = {
    getCustomer : (state) => state.customer,
    getClientSecret: (state) => state.clientSecret
};

export default {
    state,
    mutations,
    actions,
    getters
}