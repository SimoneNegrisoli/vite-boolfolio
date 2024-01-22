<template>
    <h1>Project list</h1>
    <ul>
        <li v-for="project in store.projects" :key="project.id">
            <router-link :to="{ name: 'project-show', params: { slug: project.slug } }">
                {{ project.title }}
            </router-link>
        </li>
    </ul>
</template>

<script>
import { store } from '../data/store.js';
import axios from "axios";

export default {
    name: 'AppProjects',
    data() {
        return {
            store,
        }
    },

    methods: {
        getAllProject() {
            axios.get(`${this.store.apiUrl}projects`).then((res) => {
                console.log(res.data);
                this.store.projects = res.data.results.data;
            }).catch((err) => { })
        },

    },
    created() {
        this.getAllProject();
    }

}
</script>

<style lang="scss" scoped></style>