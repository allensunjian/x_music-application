<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">晓音乐</h1>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {}
</script>
<style lang="stylus" ref="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .m-header
    position: relative
    height: 44px
    text-align: center
    color :$color-theme
    font-size: 0
    .icon
      display: inline-block
      vertical-align: top
      margin-top: 3px
      width: 46px
      height: 32px
      background-size: 55px 55px
      bg-image('logo')
    .text
      display: inline-block
      vertical-align: top
      line-height: 44px
      font-size: $font-size-large
      color: #BE1E2D
      font-weight: bold
      font-family: Arial, "Helvetica Neue", Helvetica, sans-serif
</style>
