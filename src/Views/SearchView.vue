<script>
import SearchComponent from '../components/SearchComponent.vue';
import WavesComponent from '../components/WavesComponent.vue';
import CardApartment from '../components/CardApartment.vue';

    export default {
        name: 'SearchView',
        components: {SearchComponent, WavesComponent,CardApartment}
    }
</script>

<template>
    <SearchComponent></SearchComponent>
    <WavesComponent></WavesComponent>
   
</template>


<style lang="scss" scoped></style>