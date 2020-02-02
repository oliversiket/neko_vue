<template>
  <div class="hello">
        
        <form v-if="!this.loading" class="container d-flex flex-column col-lg-4">
            <label>Species</label>
            
            <select v-if="breeds.length" v-model="selected" class="select" @input="updateSelected" @change="checkBreed">
                <option disabled value="">Please select one</option>
                <option v-for="breed in breeds" :key="breed.id">
                    {{ breed.name }}
                </option>
            </select>
            <router-link to="/facts"><button type="button" class="btn btn-outline-warning">click me</button></router-link>
        </form>
        <div v-else class="d-flex justify-content-center">
            <div class="spinner-grow text-danger" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>

        <p>{{ selected  }}</p>

  </div>
</template>

<script>
import axios from '../axios';
import { mapState } from 'vuex';

export default {
    name: 'home',
    props: {

    },

    components: {
       
    },

    data() {
        return {
            selected: '',
            selectedId: '',
            loading: false,
            breeds: [],
        }
    },
    created () {
        this.getData();
    },

    mounted: {

    },

    computed: {
      ...mapState({
        selected: state => state.selected,
        selectedId: state => state.selectedId,
      })
    },

    methods: {
      checkBreed(e) {
        let breed = this.breeds.find(breed => breed.name === e.target.value)

        this.selectedId = breed === undefined ? '' : breed.id
      },

      updateSelected (e) {
        this.$store.commit('updateSelected', e.target.value)
      },

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
form label {
    padding: 20px;
}
.select {
    padding: 20px;
}
form button {
    margin: 0 auto;
    width: 30%;
}
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
