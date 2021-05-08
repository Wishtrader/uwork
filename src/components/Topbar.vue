<template>
  <div class="topbar">
    <div class="topbar-wrapper">
      <router-link to="/"><div class="logo"><span>u</span>Work</div></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topbar'
}
</script>

<style lang="scss" scoped>
@import '@/scss/main.scss';

.topbar {
  width: 100%;
  height: 100px;
  background-color: $primary;
  padding: 0px 40px;
  .topbar-wrapper {
    display: flex;
    align-items: center;
    height: 100%;
    max-width: 1366px;
    margin: 0px auto;
      a {
        text-decoration: none;
        .logo {
          font-family: 'Poppins';
          color: $white;
          font-size: 2rem;
          font-weight: 900;
          span {
            font-family: 'Poppins';
            font-weight: 100;
            font-style: italic;
            color: $green;
            font-size: 1.5rem;
          }
      }
    }
  }
}

</style>
