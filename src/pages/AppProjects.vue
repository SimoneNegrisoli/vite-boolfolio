<template>
    <main class="container">
        <h1>Project list</h1>
        <div class="row">
            <div class="col-12 col-md-4 col-lg-3" v-for="project in store.projects" :key="project.id">
                <ProjectCard :project="project" />
            </div>
        </div>

    </main>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue';
import { store } from '../data/store.js';
import axios from "axios";

export default {
    name: 'AppProjects',
    components: {
        ProjectCard,
    },
    data() {
        return {
            store,
        };
    },
    methods: {
        getAllProject() {
            axios.get(`${this.store.apiUrl}projects`).then((res) => {
                console.log(res.data);
                this.store.projects = res.data.results.data;
            }).catch((err) => { });
        },
    },
    created() {
        this.getAllProject();
    },
    components: { ProjectCard }
}
</script>

<style lang="scss" scoped></style>