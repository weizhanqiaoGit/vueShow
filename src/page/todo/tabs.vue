<template>
  <div class="hleper">
    <span class="left"> {{ unFinishTodoLenght }} item left </span>
    <span class="tabs">
      <span v-for="state in states"
        :key="state"
        :class="[state, filter === state ? 'actived': '']"
        @click="toggleFilter(state)">
        {{state}}
      </span>
    </span>
    <span class="clear" @click="clearAllCompleted">clear completed</span>
  </div>
</template>

<script>
  export default {
    props: {
      filter: {
        type: String,
        required: true
      },
      todos: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        states: ['all','active','completed']
      }
    },
    computed: {
      unFinishTodoLenght(){
        return this.todos.filter(todo => !todo.completed).length;
      }
    },
    methods: {
      toggleFilter (data) {
        this.$emit('toggle',data);
      },
      clearAllCompleted () {
        this.$emit('clearAll');
      }
    }
  }

</script>

<style scoped>
  .hleper{
    font-weight:100;
    display:flex;
    justify-content:space-between;
    padding:5px 0;
    line-height:30px;
    background:#fff;
    font-size:14px;
    font-smoothing:antialiased;
  }
  .left, .tabs, .clear{
    padding:0 10px;
    box-sizing:border-box;
  }
  .left, .clear{
    width:150px;
  }
  .left{
    text-align:left;
  }
  .clear{
    text-align:center;
    cursor:pointer;
  }
  .tabs{
    width:200px;
    display:flex;
    justify-content:space-around;
  }
  .tabs span{
    display:inline-block;
    padding:0 10px;
    cursor:pointer;
    border:1px solid rgba(175,47,47,0);
  }
  .tabs span.actived{
    border:1px solid rgba(175,47,47,0.4);
    border-radius:5px;
  }
</style>
