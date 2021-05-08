<template>
  <div class="sortWrapper">
    <div class="sortSelector active">Date<span>></span></div>
    <div class="sortSelector">A - Z<span>></span></div>
  </div>
</template>

<script>
export default {
  name: 'Sort'

}
</script>

<style lang="scss" scoped>
@import '@/scss/main.scss';

.sortWrapper {
  display: flex;
  margin-bottom: 2rem;

  .sortSelector {
  border: 1px solid $grey;
  display: flex;
  padding: 5px 20px;
  border-radius: 10px;
  margin-right: 20px;
  color: $grey;
  cursor: pointer;

    span {
      display: block;
      font-size: 26px;
      line-height: 28px;
      margin-left: 5px;
      transform: rotateZ(90deg);

    }
  }

  .active {
      border: 1px solid $primary;
      color: $primary;
    }
}
</style>
