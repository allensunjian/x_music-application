<template>
  <div class="search-box">
    <i class="icon-search"></i>
    <input v-model="query" class="box" :placeholder="placeholder">
    <i @click="clear" class="icon-dismiss" v-show="query"></i>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      placeholder: {
        type: String,
        default: '搜索、歌手、歌曲'
      }
    },
    data() {
      return {
        query: ''
      }
    },
    methods: {
      clear() {
        this.query = ''
      },
      setQuery(query) {
        this.query = query
      }
    },
    created() {
      // 为什么 不用watch 而用created
      this.$watch('query', (newQuery) => {
        // created钩子下监听query数据变化 发生变化后把 query 的新数据派发出去
        this.$emit('query', newQuery)
      })
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus">
  @import "~common/stylus/variable"

  .search-box
    display: flex
    align-items: center
    box-sizing: border-box
    width: 100%
    padding: 0 6px
    height: 40px
    background: $color-highlight-background
    border-radius: 6px
    .icon-search
      font-size: 24px
      color: $color-background
    .box
      flex: 1
      margin: 0 5px
      line-height: 18px
      background: $color-highlight-background
      color: $color-text
      font-size: $font-size-medium
      &::placeholder
        color: $color-text-d
    .icon-dismiss
      font-size: 16px
      color: $color-background
</style>
