<template>
  <div class="index">
    <div id="icons">
      <i
      v-for="(icon,index) in icons"
      class="icon"
      :class="{
        'iconh':show,
        'el-icon-info':index == '0',
        'el-icon-location':index == '1',
        'el-icon-upload':index == '2',
        'el-icon-printer':index == '3',}"
        @click="toFlower(index)">
      </i>
    </div>
    <!--<img src="../../assets/logo.png">-->
    <a href="//www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png" download="sss.png">
      <img src="../../assets/logo.png">
    </a>
    <h3>
      <div >
        {{ msg }}
      </div>
    </h3>
    <el-input
      v-model.trim="password"
      placeholder="请输入密码,6个当前号"
      clearable>
    </el-input></br></br>
    <el-button
      icon="el-icon-menu"
      @click="showMean"
      type="warning">
      {{ conut }}
    </el-button></br></br>
    <el-button
      type="primary"
      round
      icon="el-icon-loading"
      @click="todo">
      Todo
    </el-button>
    <div class="progress" v-show="progressShow">
      <div class="progressCont">
        <el-progress
        :percentage="num"
        :stroke-width="30"
        :text-inside="true">
        </el-progress>
      </div>
    </div>
  </div>
</template>

<script>
import { Button,Input,Progress } from 'element-ui'
export default {
  components: { Button,Input,Progress },
  data () {
    return {
      msg: 'Welcome To Index Page!',
      conut:  null,
      password: null,
      show:false,
      progressShow:false,
      num:10,
      icons:[
        {name:'1'},{name:'2'},{name:'3'}, {name:'4'}
      ]
    }
  },
  mounted: function () {
    this.count();
  },
  methods: {
    count () {
      this.conut = this.$store.state.count;
    },
    showMean () {
      this.show = !this.show;
    },
    toFlower (num) {
      this.conut = num+1;
    },
    progress () {
      if(this.num<100){
        this.num++;
        setTimeout(this.progress,10)
      }else{
        this.progressShow = false;
        this.$router.push({
          path: '/indexPage'
        })
      }
    },
    todo () {
      let PW = this.conut+this.conut*10+this.conut*100+this.conut*1000+this.conut*10000+this.conut*100000;
      if(PW>0){
        if(this.password == PW){
          sessionStorage.setItem('pageNum',this.conut);
          this.progressShow = true;
          this.progress();
        }else{
          this.$message({
            showClose: true,
            message: '密码不正确，请重新输入密码！',
            type: 'error',
            center: true
          });
        }
      }else{
        this.$alert('请选择要进的页面', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.show = true;
          }
        });
      }
    }
  }
}
</script>

<style lang="less" scoped>
  img{
    position:absolute;
    top:80px;
    lefe:50%;
    z-index:100;
    transform: translate(-100px,0);
  }
  @nice-blue: #000;
  @light-blue: @nice-blue + #777;
  h3{
    margin:300px auto 100px;
    div{
      color: @light-blue;
    }
  }
  .icon{
    color:yellow;
    font-size:50px;
    position:absolute;
    left:50%;
    top:140px;
    margin-left:-25px;
    border:2px solid red;
    border-radius:10px;
    transition: 1s;
  }
  #icons .icon:hover{
    font-size:80px;
    margin:-20px 0 0 -20px;
  }
  .icon:nth-of-type(1){
    color:red;
  }
  .icon:nth-of-type(2){
    color:blue;
  }
  .icon:nth-of-type(3){
    color:green;
  }
  .iconh:nth-of-type(1){
    transform: translate(180px,90px);
  }
  .iconh:nth-of-type(2){
    transform: translate(-180px,90px);
  }
  .iconh:nth-of-type(3){
    transform: translate(180px,-80px);
  }
  .iconh:nth-of-type(4){
    transform: translate(-180px,-80px);
  }
  .index{
    box-sizing:border-box;
    overflow-y:auto;
    width:100%;
    height:100%;
    background: url(../../assets/4.jpg) no-repeat center;
		background-size: cover;
    color:blue;
    position:relative;
  }
  .progress{
    position:fixed;
    height:100%;
    width:100%;
    left:0;
    top:0;
    z-index:999;
    background:rgba(0,0,0,0.8);
  }
  .progressCont{
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin:auto;
    width:100%;
    height:30px;
    z-Index:1000;
  }
</style>
