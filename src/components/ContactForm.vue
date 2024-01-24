<template>
    <div class="container">
        <form @submit.prevent="submitForm" action="">
            <!-- NAME -->
            <div class="mb-3">
                <label for="name" class="form-label">name</label>
                <input type="text" class="form-control" id="name" placeholder="your name" v-model="name">
            </div>

            <!-- EMAIL -->
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="email">
            </div>

            <!-- ADDRESS -->
            <div class="mb-3">
                <label for="address" class="form-label">address </label>
                <input type="text" class="form-control" id="address" placeholder="via.." v-model="address">
            </div>

            <!-- MESSAGE -->
            <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" rows="3" v-model="message"></textarea>
            </div>

            <!-- BTN -->
            <button type="reset" class="btn btn-info me-3"> reset</button>
            <button type="submit" class="btn btn-success "> invia</button>


        </form>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../data/store';
export default {
    name: 'ContactForm',
    data() {
        return {
            store,
            name: '',
            email: '',
            address: '',
            message: ''
        }
    },
    methods: {
        submitForm() {
            const data = {
                name: this.name,
                email: this.email,
                address: this.address,
                message: this.message
            }

            axios.post(`${this.store.apiUrl}contacts`, data).then((res) => {
                console.log(res.data)
                this.name = '';
                this.email = '';
                this.address = '';
                this.message = '';
            })
        }
    }
}
</script>

<style lang="scss" scoped></style>