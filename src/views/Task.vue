<template>
  <div class="w100">  
  <div class="container">
    <div class="box">
      <router-link :to="'/'">Gerenciar tarefas</router-link>
      <Title 
        title="Todas as tarefas compartilhadas"
        description="Essas são suas tarefas compartilhada com a store"
        isCities
      />
      <div class="grid">
        <div v-for="(task, index) in tasks" v-bind:key="index">
          <Card 
            :id="task.id"
            :title="task.title"
            :createdAt="task.createdAt"
            :hours="task.hours"
            :isComplete="task.isComplete"
            :onDeleteTask="handleDeleteTask"
            :onCompleteTask="handleCompleteTask"
          />
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
  import Title from '../components/Title.vue';
  import Card from '../components/Card.vue';
</script>

<script>
  export default {
    data() {
      return {
        tasks: this.$store.state.tasks
      }
    }
  }
</script>

<style lang="scss">
  .w100 {
    height: 100vh;
  }
</style>