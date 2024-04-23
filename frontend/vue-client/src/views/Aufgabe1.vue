<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

// variables
const responseTextHi = ref('')
const responseTextNumber = ref()
// functions

const fetchHello = async () => {
    try {
        const response = await axios.get('/api/responder/hi')
        responseTextHi.value = response.data.message

    }
    catch (error) {
        console.log(`An Error occurred ${error}`)
    }
}
const fetchRandomNumber = async () => {
    try {
        const response = await axios.get('/api/responder/number')
        responseTextNumber.value = response.data.message

    }
    catch (error) {
        console.log(`An Error occurred ${error}`)
    }
}

/* const downloadFavicon = async () => {
    try {
        const response = await axios.get('/api/responder/favi')
        console.log(response.data.message)
    }
    catch (error) {
        console.log(`An Error occurred ${error}`)
    }
} */

const fetchGreeting = async (name) => {
    try {

        const response = await axios.get(`/api/responder/hi/${name}`)
        console.log(response.data.message)
    }
    catch (error) {
        console.log(`An Error occurred ${error}`)
    }
}


onMounted(() => {
    fetchHello()
    fetchRandomNumber()
    fetchGreeting('julian')
})

</script>

<template>
    <h1>Response:</h1>
    <h2>{{ responseTextHi }}</h2>
    <h2>{{ responseTextNumber }}</h2>
</template>

<style scoped></style>