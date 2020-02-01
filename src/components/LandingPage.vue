<template>
	<div class="hello">
    
    <form v-if="!this.loading">
        <label>Species</label>
        
        <select v-if="breeds.length" v-model="selected">
            <option disabled value="">Please select one</option>
            <option v-for="breed in breeds" :key="breed.id">
                {{ breed.name }}
            </option>
        </select>

        <button>click me</button>
    </form>

    <div v-else class="d-flex justify-content-center">
        <div class="spinner-grow text-danger" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>

  </div>
</template>

<script>
import axios from '../axios';

export default {
    name: 'LandingPage',
    props: {

    },

    components: {
       
    },

    data() {
        return {
            selected: '',
            loading: false,
            breeds: [],
        }
    },
    created () {
        this.getData();
    },

    mounted: {

    },

    methods: {
        getData() {
            this.loading = true;

            axios.get('/breeds').then(response => {
                this.breeds = response.data;
            }).catch(ex => {
                console.log(ex);
            }).finally(() => {
                this.loading = false
            });
        },

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
