<template>
  <div class='ex' :class= "{'sub':showHeader}" >
    <header class='ex-header' v-show="showHeader">
      <div  class='header-back' v-on:click="goBack">
        <cube-icon class='ba' name='arrow-right'></cube-icon>
      </div>
      <span>
      {{ title }}
      </span>
    </header>
    <div class="ex-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    title() {
      return this.$route.name
    },
    showHeader(){
      return this.$route.name!=='home'
    }
  },
  methods: {
    goBack(){
      this.$router.go(-1);
    }
  },
};
</script>

<style></style>
