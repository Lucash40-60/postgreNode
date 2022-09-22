<template>
    <div>
        <h1>
            Create a Projet 
        </h1>

        <form method="post">
            <!-- INPUT AUTEUR -->
            <div>
                <label>
                    Nom
                </label>
                <input type="text"
                    v-model="nom"
                    />
            </div>

            <!-- INPUT CONTENU -->
            <div>
                <label>
                    Age
                </label>
                <input type="text" 
                    v-model="age"
                    />
            </div>

            <!-- INPUT projet -->
            <div>
                <label>
                    Projet
                </label>
                <input type="text" 
                    v-model="projet"
                    />
            </div>

            <input type="submit" v-on:click="NewData()" value="Envoyer"/>
        </form>
    </div>
</template>
  
<script>
    import axios from 'axios'
    // import qs from 'qs';
    export default {
        data() {
            return {
                nom: null, 
                age: null , 
                projet: null
            };
        },

        methods: {

            NewData() {
                axios.post('http://localhost:3000/users/new',{
                    nom: this.nom, 
                    age: this.age, 
                    projet: this.projet
                },{
                    'content-type': 'application/json', 
                    'Access-Control-Allow-Origin': '*'
                }).then(function (reponse) {
                    console.log(reponse);
                })
                .catch(function (erreur) {
                    console.log(erreur);
                });
                this.$router.push('/all');
            }
        }
    }
</script>