<template>
    <section>
        <nav class="mx-5 d-flex justify-content-between align-items-center">
            <div class="logo">
                Logo
            </div>
            <div class="center-nav d-flex gap-3 align-items-center">
                <b class="orange-hover fs-3">Home</b>
                <b class="orange-hover fs-3">Appartamenti</b>
                <b class="orange-hover fs-3">Contatti</b>
            </div>
            <div class="end-navd-flex align-items-center">
                <a class="orange-hover text-decoration-none link-underline link-underline-opacity-0 fs-5 fw-bold" href="#">Affitta con BoolBnB</a>
            </div>
        </nav>
    </section>
</template>
  
<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            
        }
    },
    methods: {

    },
    components: {

    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped>
    nav {
        color: rgb(68, 110, 112);
        div {
            a {
                color: rgb(68, 110, 112);
            }
        }
    }
</style>