<template>
    <section class="giumbo d-flex justify-content-between align-items-center position-relative">
        <div class="schizzo schizzo-cont d-none d-xl-block position-absolute">
            <img src="../assets/img/schizzo2.png" class="top-img w-75" alt="schizzo">
        </div>
        <div class="title-search pt-4 d-flex flex-column justify-content-center align-items-between">
            <h1 class="pt-5">Il soggiorno perfetto per il tuo viaggio in pochi click</h1>
            <div class="form-button w-100 d-flex flex-column align-items-center">
                <input class="form-control shadow mt-5 border-1" type="text" aria-label="default input example">
                <button class="btn mt-4 w-25 text-light">
                    CERCA
                </button>
            </div>
        </div>
        <div class="schizzo schizzo2-cont d-none d-xl-block">
            <img src="../assets/img/schizzo1.png" class="top-img position-absolute" alt="schizzo">
        </div>
    </section>
    <section class="pt-5">
        <WavesComponent></WavesComponent>
        <div class="sub-waves py-5" v-if="store.premiumApartments">
            <CarouselComponent :config="config" :items="apartments"></CarouselComponent>
        </div>
    </section>
</template>

<script>
import WavesComponent from '../components/WavesComponent.vue';
import CarouselComponent from '../components/CarouselComponent.vue';
import axios from 'axios';  
import {store} from "../store/store";

// import Swiper styles
export default {
    name: 'Home',
    data() {
        return {
            store: store,
            apartments: [
                {name: "ap1", photo: "https://picsum.photos/200"},
                {name: "ap1", photo: "https://picsum.photos/200"},
                {name: "ap1", photo: "https://picsum.photos/200"},
                {name: "ap1", photo: "https://picsum.photos/200"},
                {name: "ap1", photo: "https://picsum.photos/200"}
            ],
            config: {
                spv: 3,
                space: 30,
            },
           // swiper: null,
        }
    },
    methods: {
        getPremiumApartments() {
            axios.get(store.apiUrl + "premium")
            .then(res => {
                store.premiumApartments = res.data.data
                this.apartments = res.data.data
                // console.log(this.apartments[0])
            });
        }
    },
    components: {
        WavesComponent,
        CarouselComponent
    },
    mounted() {
    },
    
    beforeMount() {
        this.getPremiumApartments()
    },

    beforeCreate() {

    },
}
</script>
  
<style lang="scss" scoped>
@use 'swiper/css';

.giumbo {
    overflow: hidden;
    padding-bottom: 5rem;

    h1 {
        color: rgb(217, 128, 108);
    }

    .schizzo {
        img {
            position: relative;
            z-index: 3;
        }
    }

    .schizzo-cont {
        // height: 285px;
        //overflow: hidden;
        top: 0;
        left: -350px;

        img {
            rotate: 145deg;
        }
    }

    .title-search {
        padding-left: 20%;

        h1 {
            width: 35rem;
            font-size: 400%;
        }

        .form-button {
            .form-control {
                border-color: rgb(121, 195, 199);
            }

            button {
                background-color: rgb(121, 195, 199);
            }
        }
    }

    .schizzo2-cont {
        img {
            width: 35%;
            top: 1%;
            right: -30px;
        }
    }
}

.sub-waves {
    background-color: rgb(47, 176, 189);

}</style>
<!-- .swiper {
    .swiper {
        .arrows {
            color: rgb(217, 128, 108);
            font-size: 50px;
        }
    }
} -->