<template>
    <section class="giumbo d-flex justify-content-between align-items-center position-relative">
        <div class="schizzo schizzo-cont position-absolute">
            <img src="../assets/img/schizzo2.png" class="top-img w-75" alt="schizzo">
        </div>
        <div class="title-search pt-4 d-flex flex-column justify-content-center align-items-between">
            <h1 class="pt-5 w-50">Il soggiorno perfetto per il tuo viaggio in pochi click</h1>
            <div class="form-button w-50 d-flex flex-column align-items-center">
                <input class="form-control shadow mt-5 border-1" type="text" aria-label="default input example">
                <button class="btn mt-4 w-25 text-light">
                    CERCA
                </button>
            </div>
        </div>
        <div class="schizzo schizzo2-cont">
            <img src="../assets/img/schizzo1.png" class="top-img position-absolute" alt="schizzo">
        </div>
    </section>
    <section class="pt-5">
        <WavesComponent></WavesComponent>
        <div class="sub-waves pt-5">
            <CarouselComponent :config="config" :items="apartments"></CarouselComponent>
            <div class="swiper">
                <div class="swiper-wrapper">
                    <!-- <div class="arrows left-arrow">
                        <i class="swiper-button-prev fa-solid fa-chevron-left"></i>
                    </div> -->
                    <div class="swiper-slide image-text w-25 d-flex flex-column align-items-center">
                        <div class="img-swiper img-sx w-75 rounded d-flex justify-content-center">
                            <img src="../assets/img/tric0.jpg" class=" rounded w-75" alt="swiper img">
                        </div>
                        <div class="text-card w-75 text-center">
                            <p>ita sunt eius obcaecati blanditiis rerum? Sapiente aliquid magnam perferendis itaque </p>
                        </div>
                    </div>
                    <div class="swiper-slide image-text w-25 d-flex flex-column align-items-center">
                        <div class="img-swiper main-img w-100 rounded d-flex justify-content-center">
                            <img src="../assets/img/yarni.jpg" class=" rounded w-75" alt="swiper img">
                        </div>
                        <div class="text-card w-75 text-center">
                            <p>ita sunt eius obcaecati blanditiis rerum? Sapiente aliquid magnam perferendis itaque </p>
                        </div>
                    </div>
                    <div class="swiper-slide image-text w-25 d-flex flex-column align-items-center">
                        <div class="img-swiper main-img w-100 rounded d-flex justify-content-center">
                            <img src="../assets/img/yarni.jpg" class=" rounded w-75" alt="swiper img">
                        </div>
                        <div class="text-card w-75 text-center">
                            <p>ita sunt eius obcaecati blanditiis rerum? Sapiente aliquid magnam perferendis itaque </p>
                        </div>
                    </div>
                    <div class="swiper-slide image-text w-25 d-flex flex-column align-items-center">
                        <div class="img-swiper main-img w-100 rounded d-flex justify-content-center">
                            <img src="../assets/img/yarni.jpg" class=" rounded w-75" alt="swiper img">
                        </div>
                        <div class="text-card w-75 text-center">
                            <p>ita sunt eius obcaecati blanditiis rerum? Sapiente aliquid magnam perferendis itaque </p>
                        </div>
                    </div>
                    <div class="swiper-slide image-text w-25 d-flex flex-column align-items-center">
                        <div class="img-swiper img-dx w-75 rounded d-flex justify-content-center">
                            <img src="../assets/img/morteh.jpg" class=" rounded w-75" alt="swiper img">
                        </div>
                        <div class="text-card w-75 text-center">
                            <p>ita sunt eius obcaecati blanditiis rerum? Sapiente aliquid magnam perferendis itaque </p>
                        </div>
                    </div>
                    <!-- <div class="arrows right-arrow">
                        <i class="swiper-button-next fa-solid fa-chevron-right"></i>
                    </div> -->
                </div>
            </div>
            <!-- <div class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">Slide 1</div>
                    <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div>
                    ...
                </div>
                <div class="swiper-pagination"></div>

                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>

                <div class="swiper-scrollbar"></div>
            </div> -->
        </div>
    </section>
</template>

<script>
import WavesComponent from '../components/WavesComponent.vue';
import CarouselComponent from '../components/CarouselComponent.vue';

// import Swiper styles
export default {
    name: 'Home',
    data() {
        return {
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
            }
           // swiper: null,
        }
    },
    methods: {
        
    },
    components: {
        WavesComponent,
        CarouselComponent
    },
    mounted() {

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