<template>
    <section>
        <nav class="mx-5 d-flex justify-content-around justify-content-md-between align-items-center">
            <div class="logo">
                <img src="../assets/img/logoBoolBNB.png" class="" alt="logo">
            </div>
            <div class="center-nav d-none d-md-flex gap-3 align-items-center">
                <b class="orange-hover fs-3">Home</b>
                <b class="orange-hover fs-3">Appartamenti</b>
                <b class="orange-hover fs-3">Contatti</b>
            </div>
            <div class="end-nav d-none d-md-flex align-items-center">
                <a class="orange-hover text-decoration-none link-underline link-underline-opacity-0 fs-5 fw-bold" href="#">Affitta con BoolBnB</a>
            </div>
            <nav class="navbar d-inline d-md-none">
                <div class="container-fluid">
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                </div>
            </nav>
        </nav>
        <div class="collapse d-md-none" id="navbarToggleExternalContent" data-bs-theme="dark">
            <div class="d-flex flex-column text-center">
              <!-- <h5 class="text-body-emphasis h4">Collapsed content</h5> -->
              <span class="collapsed fs-4">Home</span>
              <span class="collapsed fs-4">Appartamenti</span>
              <span class="collapsed fs-4">Contatti</span>
              <span class="collapsed fs-4">Affitta con BoolBnB</span>
            </div>
        </div>
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
        .logo {
           // width: 10%;
            img {
                width: 80px;
            }
        }
        .navbar {
            div {
                .navbar-toggler {
                    border-color: rgb(68, 110, 112);
                    span.navbar-toggler-icon {
                        color: rgb(68, 110, 112);
                    }
                }
            }
        }
    }
    .collapse {
        div {
            background-color: rgb(250, 250, 250);
            .collapsed {
                color: rgb(68, 110, 112);
            }
            .collapsed:hover {
                background-color: rgb(217, 143, 107);
                color: white;
            }
        }
    }
</style>