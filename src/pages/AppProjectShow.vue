<template>
    <div>
        <h1>CIAO</h1>
        {{ project.title }}

    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../data/store.js';

export default {
    name: 'AppProjectShow',
    data() {
        return {
            store,
            project: '',
        }
    },
    methods: {
        getProject() {
            axios.get(`${this.store.apiUrl}projects/${this.$route.params.slug}`).then((res) => {
                if (res.data.results) {
                    this.project = res.data.results;
                } else {
                    this.$router.push({ name: 'not-found' })
                }
            })
        }
    },
    created() {
        this.getProject();
    }

}
</script>

<style lang="scss" scoped></style>