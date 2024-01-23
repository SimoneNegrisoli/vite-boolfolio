<template>
    <div class="card">
        <img :src="`${store.imgPath}${project.image}`" class="card-img-top" :alt="project.title">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.body }}</p>
            <router-link :to="{ name: 'project-show', params: { slug: project.slug } }" class="btn btn-primary">{{
                project.body }}</router-link>
        </div>
    </div>
</template>

<script>
import { store } from '@/data/store';
export default {
    name: 'ProjectCard',
    props: ['project'],
    data() {
        return {
            store,
        }
    }

}
</script>

<style lang="scss" scoped></style>