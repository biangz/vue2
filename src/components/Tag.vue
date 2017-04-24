<template>
<div class="tag-wrap">
  <span>标签：</span>
  <input type="text" name="tag" id="tag" value="" v-model="val" />
  <button type="button" name="button" v-on:click="add"></button>
  <ul>
    <li v-for="item in cont">{{item}}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'tag',
  data () {
    return {
      cont: ['1', '2'],
      val: ''
    }
  },
  methods: {
    add: function () {
      let _val = this.val
      if (_val.length === 0 || this.cont.indexOf(_val) > -1) {
        return
      }
      this.cont.push(this.val)
    }
  },
  props: {
    width: {
      type: String,
      default: 'auto'
    }
  }
}
</script>
