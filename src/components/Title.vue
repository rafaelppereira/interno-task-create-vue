<template>
  <div class="title">
    <div class="data">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>

    <div class="inputContainer" v-show="isCities != true">
      <input type="text" placeholder="Digite uma nova tarefa..." v-model="value">
      <button
        type="button"
        @click="handleCreateNewTask(value)"
      >
        <img src="/send.svg" alt="Ícone de enviar">
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TitleItem',
    data() {
      return {
        value: ''
      }
    },
    props: {
      title: String,
      description: String,
      isCities: Boolean,
    },
    methods: {
      handleCreateNewTask(value) {
        this.$store.commit('ADD_TASK', value);
      },
    }
  }
</script>

<style lang="scss">
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 740px) {
      flex-direction: column;
    }

    .data {
      flex: 2;

      h2 {
        font-size: 1.6rem;
        font-weight: 400;
      }

      p {
        font-size: 0.9rem;
        font-weight: 300;
        opacity: 0.7;
      }

      @media (max-width: 850px) {
        flex: 1;
      }

      @media (max-width: 740px) {
        margin-bottom: 2rem;
        text-align: center;
      }
    }

    .inputContainer {
      flex: 1;

      display: flex;
      align-items: center;

      input {
        width: 100%;
        height: 45px;

        background-color: #121214;
        color: #ffffff;
        border: 1px solid;
        border-color: #121214;

        padding-left: 1rem;
        border-radius: 0.5rem 0 0 0.5rem;

        outline: none;
        transition: border-color 0.2s ease-out;

        &:focus {
          border-color: #6699ff;
        }

        @media (max-width: 768px) {
          font-size: 16px;
        }
      }

      button {
        width: 50px;
        height: 45px;

        display: flex;
        justify-content: center;
        align-items: center;

        color: #ffffff;
        background-color: #6699ff;
        border-radius: 0 0.5rem 0.5rem 0;
        transition: filter 0.2s ease-out;

        img {
          width: 1.2rem;
        }

        &:hover {
          filter: brightness(0.9);
        }

        &:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      }
    }
  }
</style>