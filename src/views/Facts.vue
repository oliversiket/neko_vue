<template>
    <div v-if="!loading" class="facts">

        <nav class="links container">
            <router-link to="/"><button type="button" class="btn btn-warning m-1" >Back To Selection</button></router-link>
            <button type="button" class="addFav btn btn-danger m-1" @click="addToFavourites()">
                <svg width="25px" data-prefix="fal" data-icon="heart" class="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.7c-54.5-46.4-136-38.7-186.6 13.5L256 96.6l-19.7-20.3C195.5 34.1 113.2 8.7 49.7 62.7c-62.8 53.6-66.1 149.8-9.9 207.8l193.5 199.8c6.2 6.4 14.4 9.7 22.6 9.7 8.2 0 16.4-3.2 22.6-9.7L472 270.5c56.4-58 53.1-154.2-9.7-207.8zm-13.1 185.6L256.4 448.1 62.8 248.3c-38.4-39.6-46.4-115.1 7.7-161.2 54.8-46.8 119.2-12.9 142.8 11.5l42.7 44.1 42.7-44.1c23.2-24 88.2-58 142.8-11.5 54 46 46.1 121.5 7.7 161.2z"></path></svg>
                Add to Favourites
            </button>
            <button type="button" class="btn btn-dark resetLink m-2" @click="resetState()">Reset your picks</button>
        </nav>

        <div class="container catFacts">
            <h1>{{ data[0].breeds[0].name}}</h1>
            <img :src='data[0].url'>
            <h3>Description:</h3>
            <p>{{ data[0].breeds[0].description}}</p>
        </div>

    </div>

    <div v-else class="spinner d-flex justify-content-center">
        <div class="spinner-grow text-info" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
</template>

<script>
import axios from '../axios';

export default {
    name: 'facts',
    props: {
    },

    components: {

    },

    data() {
        return {
          loading: false,
          data: [],
          sId: this.$store.state.selectedId
        }
    },
    created () {
        this.getData();
    },

    computed: {
        selected() {
            return this.$store.state.selected;
        },

        favourites() {
            return this.$store.state.favourites;
        }
    },

    methods: {
        getData() {
            this.loading = true;

            axios.get(`images/search?breed_id=${this.$store.state.selectedId}`).then(response => {
                this.data = response.data;
            }).catch(ex => {
                console.log(ex);
            }).finally(() => {
                this.loading = false;
            });
        },

        addToFavourites() {
            if (!this.favourites.some(cat => cat.id === this.sId)) {
                let fav = {
                    id: this.sId,
                    name: this.$store.state.selected
            }
                this.$store.commit('addFav', fav)
                this.$toaster.success('Added to your favourites')
            }else {
                this.$toaster.error('This has already been added to your favourites')
            }
        },

        resetState() {
            this.$store.commit('reset');
        }
    }
}
</script>

<style scoped>
.spinner {
    height: 100vh;
    align-items: center;
    justify-content: center;
}
.spinner-grow{
    width: 4em;
    height: 4em;
}
.links {
    text-align: left;
}
.facts {
    height: 100vh;
    display: flex;
    flex-direction: column;
}
img{
    width: 250px;
    border-radius: 15px;
}
</style>
