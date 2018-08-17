<template>
  <footer class="main-footer">
    <span class="author">
      Written by {{author}}
    </span>
  </footer>
</template>

<script>
  export default {
    data () {
      return {
        author:'WeiZQ'
      }
    }
  }

</script>

<style scoped>
  .main-footer{
    text-align:center;
  }
  .author{
    font-size:10px;
    color:#bfbfbf;
    text-shadow:0 1px 0;
  }
</style>
