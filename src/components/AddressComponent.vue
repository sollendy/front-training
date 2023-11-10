<script>
import axios from "axios";

export default {
    data() {
        return {
            API_URL_BASE: "http://127.0.0.1:8000/",
            API_Search: "api/geoSearch",
            addressInput: "",
            coordinateInput: "",
            hints: [],
        };
    },

    methods: {
        getCoordinates(data) {
            const userCoordinates = data.coordinate;
            return userCoordinates.lon + ' ' + userCoordinates.lat;
        },

        generateHints(hints) {
            console.log('Suggerimenti ricevuti:', hints);
            this.hints = hints.slice(0, 5);
            this.$refs.hintsList.innerHTML = '';
            this.hints.forEach((value, key) => {
                if (key < 5) {
                    const singleHint = document.createElement('li')
                    singleHint.classList.add('suggestion-item');
                    singleHint.textContent = value.address.freeformAddress;
                    singleHint.addEventListener('click', (e) => {
                        this.$refs.hintsList.innerHTML = '';
                        this.addressInput = e.target.textContent;
                        this.coordinateInput = this.getCoordinates(value);
                    })
                    this.$refs.hintsList.appendChild(singleHint);
                }
            });
        },

        fetchAddress() {
            console.log("Dentro fetchAdress");
            let timeOut;
            clearTimeout(timeOut);
            timeOut = setTimeout(() => {
                console.log("Dentro timeout");

                let userSearch = this.addressInput;
                const url = this.API_URL_BASE + this.API_Search;
                if (userSearch.length > 2) {
                    axios
                        .get(url, {
                            params: {
                                query: userSearch,
                            },
                        })
                        .then((response) => {
                            this.generateHints(response.data.shortAnswer)
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }
            }, 500);
        },
    },
};
</script>

<template>
    <div>
        <small for="address" class="form-label">Indirizzo</small>
        <input type="text" class="form-control userAddressInput" id="address" name="address" @input="this.fetchAddress" v-model="addressInput" placeholder="Inserisci un indirizzo">
        <input type="hidden" name="coordinates" id="coordinates">
        <p id="error-address"></p>
        <ul ref="hintsList" class="w-100 userAddressHints p-1"></ul>
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
    
    ::v-deep .suggestion-item {
        color: $primary;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border: 1px solid var(--bs-border-color);
        border-radius: 5px;
        cursor: pointer;
        padding: 4px 8px;
        
        &:hover{
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


