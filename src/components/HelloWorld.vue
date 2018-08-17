<template>
  <div class="hello">
    <div class="helloCont">
      <h1>{{ msg }}</h1>
      <el-button type="primary" @click="goIndex">Go</el-button>
    </div>
  </div>
</template>

<script>
import { Button } from 'element-ui'
export default {
  components: { Button },
  data () {
    return {
      msg: 'Are you ready?'
    }
  },
  methods: {
    goIndex () {
      this.$router.push({
        path: '/index'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  margin:50px;
}
.hello{
  box-sizing:border-box;
  overflow-y:auto;
  width:100%;
  height:100%;
  background:radial-gradient(90% 50%,#fff,#000);
}
.helloCont{
  height:200px;
  position:absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  margin:auto;
}
</style>
