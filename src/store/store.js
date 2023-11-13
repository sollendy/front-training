import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    API_URL_BASE: "http://127.0.0.1:8000/",
    API_Apartments: "api/apartments",
    API_Search: "api/geoSearch",
    API_Filter: 'api/search',
    services: [],
    servicesLoaded: false,
    addressInput: "",
    coordinateInput: "",
    hints: [],

    rooms: 0,
    beds: 0,
    service: '',
    radius: 2000,
    apartment_filter: [],

    fetchServices() {
        const url = this.API_URL_BASE + this.API_Apartments;
        this.servicesLoaded = false;
        axios
            .get(url)
            .then(response => {
                if (response.data.success) {
                    this.services = response.data.services
                    this.servicesLoaded = true
                } else {
                    this.services = []
                }
            })
            .catch(error => {
                this.error = error.message
            })
    },

    fetchAddress() {
        let timeout;
        clearTimeout(timeout);
        timeout = setTimeout(async () => {
            let userSearch = this.addressInput;
            const url = this.API_URL_BASE + this.API_Search;

            if (userSearch.length > 2) {
                try {
                    const response = await axios.get(url, {
                        params: {
                            query: userSearch,
                        },
                    });
                    this.hints = response.data.shortAnswer.slice(0, 5);
                } catch (error) {
                    console.log(error);
                }
            }
        }, 500);
    },

    selectHint(value) {
        this.addressInput = value.address.freeformAddress;
        this.coordinateInput = this.getCoordinates(value);

        this.hints = [];

    },

    getCoordinates(data) {
        const userCoordinates = data && data.coordinate;
        // console.log(userCoordinates.lat, userCoordinates);

        return userCoordinates;

    },

    search() {
        let url = `${this.API_URL_BASE}${this.API_Filter}?`;

        if (this.coordinateInput && this.coordinateInput.lat && this.coordinateInput.lon) {
            url += `lat=${this.coordinateInput.lat}&lon=${this.coordinateInput.lon}&`;
        } else {
            url += 'lat=0&lon=0&';
        }

        url += `rooms=${this.rooms || 0}&beds=${this.beds || 0}&service=${this.service || ''}&radius=${this.radius || 2000}`;

        axios
            .get(url)
            .then(response => {
                console.log(url);
                if (response.data.success) {
                    if (response.data.results.length > 0) {
                        this.apartment_filter = response.data.results;
                        console.log(this.apartment_filter);
                    } else {
                        this.apartment_filter = [];
                        console.log('No results found');
                    }
                } else {
                    this.apartment_filter = [];
                }
            })
            .catch(error => {
                this.error = error.message;
            });
    }
},
);

