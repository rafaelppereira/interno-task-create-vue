<template>
  <div class="container">
    <div class="box">
      <router-link :to="'/tasks'">Tarefas completadas</router-link>
      <Title 
        title="Todas as tarefas" 
        description="Essas são todas as suas tarefas do dia."
      />
      <div class="grid">  
        <Card 
          :id="task.id"
          :title="task.title"
          :createdAt="task.createdAt"
          :hours="task.hours"
          :isComplete="task.isComplete"
          v-for="(task, index) in tasks" v-bind:key="index"
        />
      </div>
    </div>

    <div class="box">
      <Title 
        title="Cidades do pokémon" 
        description="Essas são todas as 20 cidades do pokémon" 
        :isCities="true"
      />
      <div class="grid">  
        <div v-for="(citie, index) in cities" v-bind:key="index">        
          <PokemonCard 
            :id="citie.name"
            :name="citie.name"
            :url="citie.url"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Card from '../components/Card.vue';
  import Title from '../components/Title.vue';
  import PokemonCard from '../components/PokemonCard.vue';
</script>

<script>
  import axios from 'axios';
  
  export default {
    name: 'App',
    data() {
      return {
        cities: this.$store.state.cities,
      }
    },
    created() {
      this.getCities()
    },
    computed: {
      //Calculados com as mudanças de outros dados
      tasks() {
        return this.$store.state.tasks
      }
    },
    methods: {
      getCities() {
        axios
          .get("https://pokeapi.co/api/v2/location/")
          .then((res) => {
            this.cities = res.data.results;
          })
          .catch((error) => {
            console.log(error);
          })
      }
    },
  }
</script>


<style lang="scss">
  .container {
    width: 100%;
    height: 100%;

    background-color: #121214;
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    gap: 50px;
    padding: 4rem 0;

    @media (max-width: 768px) {
      height: auto;
      padding: 4rem 0;
    } 

    .box {
      width: 100%;
      max-width: 1100px;
      padding: 2rem;
      margin: 0 auto;

      min-height: 500px;

      border-radius: 0.5rem;
      background-color: #1e1e20;

      @media (max-width: 1100px) {
        margin: 0 2rem;
      }

      @media (max-width: 768px) {
        min-height: none;
      }

      a {
        color: #6699ff;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;

        margin-top: 2rem;

        @media (max-width: 1100px) {
          grid-template-columns: repeat(3, 1fr);  
        }

        @media (max-width: 768px) {
          grid-template-columns: repeat(2, 1fr);  
        }  
        
        @media (max-width: 560px) {
          grid-template-columns: repeat(1, 1fr);  
        }
      }
    }
  }
</style>
