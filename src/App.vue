<template>
  <div class="wrapper">
    <Topbar />
    <div class="row">
      <Sidebar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar'
import Sidebar from './components/Sidebar'
export default {
  components: {
    Topbar,
    Sidebar
  }
}
</script>

<style lang="scss" scoped>
@import './scss/main.scss';
#app {
  font-family: 'Poppins';
  font-weight: normal;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  max-width: 1366px;
  margin: 0px auto;
}

.row {
  display: flex;
  height: calc(100vh - 100px);
  width: 100%;

}
</style>
