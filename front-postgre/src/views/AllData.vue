<template>
    <div class="home">
      <h1>
        Toutes les données
      </h1>
        <div v-for="(datas, index) in data" :key="index">
            <span>
                {{datas.nom}}
            </span>
                | 
            <span>
                {{datas.projet}}
            </span>
        </div>
    </div>
</template>
<script setup>
    import { onMounted, ref } from 'vue';
    import axios from 'axios'
    let data = ref()

    onMounted(() => {
        
        axios.get('http://localhost:3000/users').then((res) => {
        data.value = res.data
        console.log("tab bdd", data);
        })
    })
</script>
  