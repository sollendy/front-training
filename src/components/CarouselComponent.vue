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
    <swiper class="py-5"
    :slidesPerView="config.spv"
    :spaceBetween="config.space"
    :centeredSlides="true"
    >
        <swiper-slide v-for="item in items" class="d-flex flex-column justify-content-center align-items-center">
            <img :src="item.photo" :alt="item.name">
            <h4>{{ item.name }}</h4>
        </swiper-slide>
    </swiper>
</template>

<style lang="scss" scoped>
    .swiper-slide-active {
        scale: 1.3;
        transition: all .5s;
    }
</style>