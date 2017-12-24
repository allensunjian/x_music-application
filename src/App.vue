<template>
  <div id="app">
    <m-Header></m-Header>
    <tabs></tabs>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>
  import Tabs from 'components/tab/tab.vue'
  import MHeader from 'components/header/header.vue'
  import player from 'components/player/player'
  // player 是全局组件 不输入任何路由
  export default {
    components: {
      MHeader,
      Tabs,
      player
    }
}
</script>

<style>

</style>
