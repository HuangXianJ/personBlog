<template>
  <div>123</div>
</template>

<script lang='ts' setup>
import { reactive,toRefs,onBeforeMount,onMounted } from 'vue'
import { useRouter,useRoute } from 'vue-router'

  onMounted (() => {
    console.log(123);
  })

</script>

<style less='scss' scoped>

</style>