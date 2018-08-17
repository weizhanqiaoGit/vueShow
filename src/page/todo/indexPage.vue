<template>
  <div class="todo">
    <div class="cover">
      <Header></Header>
      <Todo></Todo>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
  import Header from './todoHeader'
  import Todo from './todo'
  import Footer from './todoFooter'
  export default {
    components: {Header,Todo,Footer},
    data () {
      return {

      }
    },
    mounted: function () {

    },
    methods: {
      
    }
  }

</script>

<style lang="stylus" scoped>
  import '../../assets/style/text-stylus.styl'
  .todo
    box-sizing border-box
    overflow-y auto
    width 100%
    height 100%
    background  url('https://ss3.bdstatic.com/iPoZeXSm1A5BphGlnYG/skin/254.jpg') no-repeat center
    background-size  cover
    z-index 0
  .cover
    background #999
    opacity 0.9
    z-index 1

</style>
