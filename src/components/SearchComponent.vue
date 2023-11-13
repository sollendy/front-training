<script>
import { store } from "../store/store";

import MultiselectComponent from '../components/MultiselectComponent.vue';
import AddressComponent from "../components/AddressComponent.vue";

export default {
    name: 'SearchComponent',
    components: { MultiselectComponent, AddressComponent },
    data() {
        return {
            store,
            addressInput: "",
            coordinateInput: "",

            formDataSubmitted: false,
            searchResults: null,
        };
    },
    mounted() {
        store.fetchServices();
    },
    methods:{
        startSearch() {
            store.search();
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row g-5 my-5">
            <div class="col-md-4">
                <AddressComponent></AddressComponent>
            </div>

            <div class="col-md-4">
                <small for="rooms">Numero di stanze</small>
                <input type="number" class="form-control" id="rooms" name="rooms"
                    placeholder="Inserisci il numero minimo di stanze" v-model="store.rooms">
            </div>
            <div class="col-md-4">
                <small for="beds">Numero posti letto</small>
                <input type="number" class="form-control" id="beds" name="beds"
                    placeholder="Inserisci il numero minimo di letti" v-model="store.beds">
            </div>
            <div class="col-md-8" v-if="store.servicesLoaded">
                <small for="service">Servizi</small>
                <MultiselectComponent></MultiselectComponent>
            </div>
            <div class="col-md-4">
                <small for="radius">Raggio di ricerca</small>
                <input type="number" class="form-control" id="radius" name="radius" placeholder="Cerca entro un limite di Km" v-model="store.km">
            </div>

            <div class="col-md-4">
                <button @click="startSearch" class="btn btn-primary">Cerca</button>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

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