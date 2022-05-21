<template>
  <div class="card" :title="id">
    <h2>{{ title }}</h2>
    <p>Tarefa criada em {{ createdAt }}</p>
    <span>ás {{ hours }}</span>

    <div class="buttonContainer">
      <button
        type="button"
        :disabled="isComplete"
        @click="handleCompleteTask(id)"
      >
        <img src="/check.svg" alt="Ícone de completar">
      </button>
      <button
        type="button"
        @click="handleDeleteTask(id)"
      >
        <img src="/trash.svg" alt="Ícone de excluir">
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CardItem',
    props: {
      id: String,
      title: String,
      createdAt: String,
      hours: String,
      isComplete: Boolean,
    },
    methods: {
      handleDeleteTask(id) {
        this.$store.commit('DELETE_TASK', id);
      },
      handleCompleteTask(id) {
        this.$store.commit('COMPLETE_TASK', id);
      },
    }
  }
</script>

<style lang="scss">
  .card {
    width: 100%;

    border: 2px dashed;
    border-color: #454548;
    padding: 1rem;

    border-radius: 0.5rem;

    h2 {
      font-size: 1rem;
      font-weight: 400;
      border-bottom: 1px solid #454548;
      padding-bottom: 1rem;
    }

    p {
      font-size: 0.8rem;
      font-weight: 300;
      margin-top: 1rem;
      font-style: italic;
    }

    span {
      margin-top: 1rem;

      display: inline-flex;
      color: #6699ff;
    }

    .buttonContainer {
      margin-top: 2rem;
      border-top: 1px solid #454548;
      padding-top: 1rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        color: #ffffff;

        width: 32px;
        height: 32px;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 0.25rem;
        transition: filter 0.2s ease-in-out;

        &:disabled {
          cursor: not-allowed;
          opacity: 0.5;

          &:hover {
            filter: brightness(1);
          }
        }

        &:hover {
          filter: brightness(0.9);
        }

        &:first-child {
          background-color: #48BB78; 
        }

        &:last-child {
          background-color: #E53E3E;
        }

        img {
          width: 0.7rem;
        }
      }
    }
  }
</style>