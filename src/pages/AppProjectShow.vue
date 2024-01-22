
import { store } from '@/data/store';

import { Axios } from 'axios';
<template>
    <div>
        ciao
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../data/store.js';

export default {
    name: 'AppProjectShow',
    data() {
        return {
            project: null
        }
    },
    methods: {
        getProject() {
            axios.get(`${this.store.apiUrl}projects/${this.$route.params.slug}`).then((res) => {

            })
        }
    }

}
</script>

<style lang="scss" scoped></style>