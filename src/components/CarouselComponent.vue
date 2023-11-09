<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
export default {
    name: "CarouselComponent",
    props: ["items", "config"],
    components: {
        Swiper,
        SwiperSlide
    },
    mounted() {
        console.log(this.config)
    }
}
</script>

<template>
    <swiper
    :slidesPerView="config.spv"
    :spaceBetween="config.space"
    :centeredSlides="true"
    >
        <swiper-slide v-for="item in items" class="bg-danger d-flex flex-column justify-content-center align-items-center">
            <img :src="item.photo" :alt="item.name">
            <h4>{{ item.name }}</h4>
        </swiper-slide>
    </swiper>
</template>

<style lang="scss" scoped>
    
</style>