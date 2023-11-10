import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  apiUrl: "http://127.0.0.1:8000/api/",
  premiumApartments: false,
    API_URL_BASE: "http://127.0.0.1:8000/",
    API_Apartments: "api/apartments",
    services: [],

    fetchServices() {
        const url = this.API_URL_BASE + this.API_Apartments;
        axios
            .get(url)
            .then(response => {
                if (response.data.success) {
                    this.services = response.data.services
                } else {
                    this.services = []
                }
            })
            .catch(error => {
                this.error = error.message
            })
    }
});