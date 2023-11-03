<template>
  <HeaderComponent/>
  <RouterView />
  <FooterComponent/>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
export default {
  name: 'App',
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
    HeaderComponent,
    FooterComponent
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped></style>