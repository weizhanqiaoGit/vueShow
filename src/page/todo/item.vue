<template>
  <div :class="[ 'todo-item', todo.completed ? 'completed' : '' ]">
    <input
      type="checkbox"
      v-model="todo.completed"
      class="taggle"
    />
    <label class="listCont" :title="todo.Date">{{todo.content}}</label>
    <button
      class="deleteIcon"
      @click="deleteTodo"/>
  </div>
</template>

<script>
  export default {
    props: {
      todo: {
        type:Object,
        required:true
      }
    },
    data () {
      return {

      }
    },
    mounted: function () {

    },
    methods: {
      deleteTodo () {
        this.$emit('del',this.todo.id)
      }
    }
  }

</script>

<style scoped>
  .todo-item{
    position:relative;
    background:#fff;
    font-size:24px;
    border-bottom:1px solid rgba(0,0,0,0.06);
  }
  .taggle{
    text-align:center;
    width: 40px;
    height:  40px;
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    margin:auto 0;
    border:none;
    appearance:none;
    outline:none;
  }
  .taggle:after{
    position:absolute;top:0;
    left:0;
    bottom:0;right:0;
    margin:6px auto;
    content:url('../../assets/nosel.png');
  }
  .taggle:checked:after{
    position:absolute;top:0;
    left:0;
    bottom:0;right:0;
    margin:6px auto;
    content:url('../../assets/sel.png');
  }
  .listCont{
    white-space:pre-line;
    word-break:break-all;
    padding:15px 60px 15px 15px;
    margin-left:45px;
    display:block;
    line-height:1;
    transition:color 0.4s;
  }
  .deleteIcon{
    position:absolute;
    top:0;
    right:10px;
    bottom:0;
    width:40px;
    height:40px;
    margin:auto 0;
    font-size:30px;
    color:#cc9a9a;
    margin-bottom:11px;
    transition:color 0.2s ease-out;
    background-color:transparent;
    appearance:none;
    border-width:0;
    cursor:pointer;
    outline:none;
  }
  .completed .listCont{
    color:#d9d9d9;
    text-decoration:line-through;
  }
  .todo-item:hover .deleteIcon:after{
    content:'x';
  }
</style>
