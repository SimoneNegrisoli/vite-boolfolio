<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
                <a class="navbar-brand" href="#">N S</a>
                <button class="navbar-toggler" @click="toggleMenu()" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" :class="{ 'show': showMenu }" id="navbarNav">
                    <div class="navbar-nav d-flex justify-content-between align-items-center w-100">
                        <div class="d-flex">
                            <div class="nav-item" v-for="item in menu">
                                <router-link class="nav-link me-2" active-class="active" :to="{ name: item.name }">{{
                                    item.label
                                }}</router-link>
                            </div>
                        </div>


                        <div>
                            <div class="d-flex">
                                <a href="http://127.0.0.1:8000/admin" class="btn btn-dark">Area Riservata</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            menu: [
                {
                    label: 'Home',
                    name: 'home'

                },
                {
                    label: 'Projects',
                    name: 'projects'

                },
                {
                    label: 'Contacts',
                    name: 'contacts'

                },
            ],
            showMenu: false
        }
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
        }
    }
}
</script>

<style lang="scss" scoped></style>