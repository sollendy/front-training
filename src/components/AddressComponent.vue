<script>
import { store } from "../store/store";


export default {
    data() {
        return {
            store
        };
    },

    methods: {
        fetchAddress() {
            store.fetchAddress();
        },

        selectHint(value) {
            store.selectHint(value);
        },
    },
};
</script>

<template>
    <div>
        <small for="address" class="form-label">Indirizzo</small>
        <input type="text" class="form-control userAddressInput" id="address" name="address" @input="this.fetchAddress"
            v-model="store.addressInput" placeholder="Inserisci un indirizzo">
        <input type="hidden" name="coordinates" id="coordinates">
        <p id="error-address"></p>
        <ul ref="hintsList" class="w-100 userAddressHints p-1">
            <li v-for="(hint, index) in store.hints" :key="index" @click="selectHint(hint)" class="item"> 
                {{ hint.address.freeformAddress }}
            </li>
        </ul>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.userAddressHints {
    list-style: none;
    position: absolute;
    background-color: white;
    border-radius: 5px;
    max-width: 400px;
    max-height: 200px;
    overflow-x: auto;
    z-index: 1000;

    .item {
        color: $primary;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border: 1px solid var(--bs-border-color);
        border-radius: 5px;
        cursor: pointer;
        padding: 4px 8px;

        &:hover {
            background-color: $secondary;
            color: $light;
        }
    }
}

small {
    color: $dark
}

input {
    border: 1px solid $primary;
    border-radius: 8px;
    padding: 1rem 20px;
    color: $primary;

    &::placeholder {
        color: $primary;
    }

}
</style>


