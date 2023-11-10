import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    API_URL_BASE: "http://127.0.0.1:8000/",
    API_Apartments: "api/apartments",
    API_Search:"api/geoSearch",
    services: [],
    servicesLoaded: false,
  
    fetchServices() {
        const url = this.API_URL_BASE + this.API_Apartments;
        this.servicesLoaded= false;
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

    
});