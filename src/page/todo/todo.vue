<template>
  <section class="real-app">
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="你计划接下来做什么？"
      v-model="todoValue"
      @keyup.enter="addTodo"
    />
    <div class="real-content">
      <Item
        v-for="todo in filteredTodos"
        :key="todo.id"
        :todo="todo"
        @del="deleteTodo"
      />
    </div>
    <Tabs
      :filter="filter"
      :todos="todos"
      @toggle="toggleTabs"
      @clearAll="clearAll"
    />
  </section>
</template>

<script>
  import { Button,Input } from 'element-ui'
  import Item from './item'
  import Tabs from './tabs'
  let id=0
  export default {
    components: { Button,Input,Item,Tabs },
    data () {
      return {
        todoValue:null,
        filter:'all',
        todos:[]
      }
    },
    computed: {
      filteredTodos(){
        if(this.filter === 'all'){
          return this.todos;
        }
        const completed = this.filter === 'completed'
        return this.todos.filter(todo => completed === todo.completed)
      }
    },
    mounted: function() {
      this.getName();
    },
    methods: {
      getName(){
        this.$http.get("/sgcism/sgcis_mobile/rest/risk/getMeetPerson.do",{
            params:{
              "bidNo":localStorage.getItem('bid_no'),
              "loginUser":localStorage.getItem('user_id')
            }
        }).then(res=>{
            let data=res.data;
            if(data.result=="SUCCESS"){
              let resultData = data.data.LASTMEETPERSON
              if(resultData){
                for(let i=0;i<resultData.length;i++){
                  let obj ={};
                  obj.id = resultData[i].ID;
                  obj.content = resultData[i].USER_NAME;
                  obj.completed = false;
                  obj.Date = '该项添加时间： ' + new Date().toLocaleString();
                  this.todos.push(obj);
                }
              }
            }else{
              this.$message({
                showClose: true,
                message: '请求错误！',
                center: true
              });
            }
        }).catch(err=>{
          this.$message({
            showClose: true,
            message: '请求错误！',
            center: true
          });
        })
      },
      addTodo (e) {
        if(this.todoValue != null & this.todoValue != ''){
          this.todos.unshift({
            id:id++,
            content:this.todoValue.trim(),
            completed:false,
            Date:'该项添加时间： ' + new Date().toLocaleString()
          });
          this.todoValue = '';
        }else{
          this.$message({
            showClose: true,
            message: '请输入内容！',
            center: true
          });
        }
      },
      deleteTodo (id) {
        this.todos.splice(this.todos.findIndex(todo =>todo.id === id),1);
      },
      toggleTabs (state) {
        this.filter = state;
      },
      clearAll () {
        this.todos = this.todos.filter(todo =>!todo.completed);
      }
    }
  }
  export function fetch(url, params) {
    return new Promise((resolve, reject) => {
      axios.get(url, params)
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err);
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
</script>

<style scoped>
  .real-app{
    width:600px;
    margin:0 auto 50px;
    box-shadow: 0 0 5px #006;
  }
  .real-content{
    width:100%;
    max-height:200px;
    overflow-y:auto;
  }
  .real-content::-webkit-scrollbar {
    width:6px;
  }
  .real-content::-webkit-scrollbar-button    {
    background-color:black;
  }
  .real-content::-webkit-scrollbar-track     {
    background:rgba(255,255,255,0.5);
  }
  .real-content::-webkit-scrollbar-track-piece {
    background-color:#fff;
  }
  .real-content::-webkit-scrollbar-thumb{
    background:blue;
    border-radius:4px;
  }
  .add-input{
    background:#fff;
    position:relative;
    z-index:2;
    margin:0;
    width:100%;
    font-size:24px;
    font-family:inherit;
    font-weight:inherit;
    line-height:1.4em;
    border:0;
    outline:none;
    color:inherit;
    padding:6px;
    border:1px solid #009;
    box-shadow:inset 0 -1px 5px 0 rgba(0,0,0,0.4);
    box-sizing:border-box;
    font-smoothing:antialiased;
    padding:14px 14px 14px 60px;
    border:none;
    box-shadow:inset 0 -2px 1px rgba(0,0,0,0.4);
  }
</style>
