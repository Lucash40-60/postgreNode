<template>
    <div>
        <h1>
            Supprimez un Projet 
        </h1>

        <div v-for="(datas, index) in data" :key="index">
            <span>
                {{datas.nom }}
            </span>
             | 
           <span>
                {{ datas.age }}
           </span> 
             |  
            <span>
                {{ datas.projet }}
            </span>

            <input type="button" value="Supprimer" v-on:click="DeleteData(datas.id)" />
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
        })
    })

    function DeleteData(id) {

        console.log(id)
        axios.delete('http://localhost:3000/users/delete', {data: {
            id: id 
        }}).then((res) => {
            console.log(res)
        })

        // this.$router.push('/all');
    }  
</script>