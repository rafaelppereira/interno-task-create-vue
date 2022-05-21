<template>
  <div class="card" :title="id">
    <h2>{{ name }}</h2>
    <button
      class="linkButton"
      @click="handleOpenLink(url)"
    >
      Clique para acessar
    </button>
  </div>
</template>

<script>
  export default {
    name: 'PokemonCardItem',
    props: {
      id: String,
      name: String,
      url: String
    },
    methods: {
      handleOpenLink(url) {
        window.location = url
        target = "_blank"
      }
    }
  }
</script>

<style lang="scss">
  .linkButton {
    background-color: #6699ff;
    color: #ffffff;
    width: 100%;
    height: 30px;

    margin-top: 2rem;
    border-radius: 0.5rem;
    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.9);
    }
  }
</style>

