<template>
  <div class="facts">
    <h1>This is the facts page</h1>
    <p>{{ selected }}</p>
  </div>
</template>

<script>
import axios from '../axios';
// import store from 'vuex';
// import { mapState } from 'vuex';

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
        }
    },
    created () {
      this.getData();
    },

    mounted: {

    },

    computed: {
      selected() {
        return this.$store.state.selected;
      }
    },

    methods: {
      getData() {
        this.loading = true;

        axios.get(`images/search?breed_id=${this.$store.state.selected}`).then(response => {
          this.data = response;
        }).catch(ex => {
          console.log(ex);
        }).finally(() => {
          this.loading = false;
        });
      }
    }
}
</script>
