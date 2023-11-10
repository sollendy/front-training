<script>
import { store } from "../store/store";
import MultiselectComponent from '../components/MultiselectComponent.vue'

export default {
    name: 'SearchComponent',
    components: { MultiselectComponent },
    data() {
        return {
            store,
        };
    },
    mounted() {
        store.fetchServices();
    }
}
</script>

<template>
    <div class="container">
        <div class="row g-5 my-5">
            <div class="col-md-4">
                <small for="address">Indirizzo</small>
                <input type="text" class="form-control" id="address" name="address" placeholder="Cerca una destinazione">
            </div>
            <div class="col-md-4">
                <small for="rooms">Numero di stanze</small>
                <input type="number" class="form-control" id="rooms" name="rooms"
                    placeholder="Inserisci il numero minimo di stanze">
            </div>
            <div class="col-md-4">
                <small for="beds">Numero posti letto</small>
                <input type="number" class="form-control" id="beds" name="beds"
                    placeholder="Inserisci il numero minimo di letti">
            </div>
            <div class="col-md-8">
                <small for="service">Servizi</small>
                <MultiselectComponent></MultiselectComponent>
            </div>
            <div class="col-md-4">
                <small for="km">Raggio di ricerca</small>
                <input type="number" class="form-control" id="km" name="km" placeholder="Cerca entro un limite di Km">
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

    ;
}
</style>