<template>
    <div class="card">
        <div class="my-img-c align-center">
            <img :src="`${store.imgPath}${project.image}`" class="card-img-top" :alt="project.title">
        </div>

        <div class="card-body">
            <h5 class="card-title">{{ truncateTitle }}</h5>
            <p class="card-text">{{ truncateBody }}</p>
            <router-link :to="{ name: 'project-show', params: { slug: project.slug } }"
                class="btn btn-primary">Scopri</router-link>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store';
export default {
    name: 'ProjectCard',
    props: ['project'],
    data() {
        return {
            store,
            titleMaxLen: 30,
            bodyMaxLen: 100
        }
    },
    computed: {
        truncateTitle() {
            if (this.project.title.length > this.titleMaxLen) {
                return this.project.title.substr(0, this.titleMaxLen) + '...';
            }
            return this.project.title;
        },
        truncateBody() {
            if (this.project.body.length > this.bodyMaxLen) {
                return this.project.body.substr(0, this.bodyMaxLen) + '...';
            }
            return this.project.body;
        }
    }
}

</script>

<style lang="scss" scoped>
.my-img-c {
    max-width: 300px;

    img {
        width: 100%;
    }
}
</style>