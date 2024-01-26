<template>
    <main class="container">
        <div class="d-flex justify-content-between align-items-center mt-3 mb-3">
            <h1>Project list</h1>
            <div>
                <select name="type" id="type" v-model="selectedType">
                    <option value="">All</option>
                    <option v-for="type in store.types" :key="type.id" :value="type.id">{{ type.name }}</option>
                </select>
            </div>
        </div>
        <div class="row justify-content-between">
            <div class="col-12 col-md-4 col-lg-3 d-flex justify-content-between" v-for="project in store.projects"
                :key="project.id">
                <ProjectCard :project="project" />
            </div>
        </div>

        <nav class="d-flex align-items-center mt-2">
            <ul class="pagination">
                <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                    <button class="page-link" :disabled="currentPage === 1" @click="getAllProject(currentPage - 1)">
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                </li>
                <li class="page-item" v-for="n in lastPage" :key="n">
                    <button class="page-link" @click="getAllProject(n)">{{ n }}</button>
                </li>
                <li class="page-item" :class="{ 'disabled': currentPage === lastPage }">
                    <button class="page-link" :disabled="currentPage === lastPage" @click="getAllProject(currentPage + 1)">
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </li>


            </ul>
        </nav>

    </main>
</template>

<script>

import ProjectCard from '../components/ProjectCard.vue';
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
            currentPage: 1,
            lastPage: null,
            total: 0,
            selectedType: ''
        };
    },
    methods: {
        getAllProject(pageNum) {
            axios.get(`${this.store.apiUrl}projects`, { params: { page: pageNum } }).then((res) => {
                console.log(res.data);
                this.store.projects = res.data.results.data;

                this.currentPage = res.data.results.current_page;
                this.lastPage = res.data.results.last_page;
                this.total = res.data.results.total;


            }).catch((err) => {
                console.error(err)
            });
        },

        loadProjectTypes() {
            axios.get(`${this.store.apiUrl}types`).then((res) => {
                this.store.types = res.data.results;
            }).catch((err) => {
                console.error(err);
            });
        },

        filterProjects() {
            if (this.selectedType) {
                axios.get(`${this.store.apiUrl}projects`, { params: { type: this.selectedType } }).then((res) => {
                    this.store.projects = res.data.results.data;
                    console.log(res.data)

                }).catch((err) => {
                    console.error(err);
                });

            } else {
                this.getAllProject(this.currentPage);
            }
        }
    },
    created() {
        this.getAllProject(this.currentPage);
        this.loadProjectTypes()
    },
    watch: {
        selectedType(newVal, oldVal) {
            this.filterProjects();
        },
    }
}
</script>

<style lang="scss" scoped></style>