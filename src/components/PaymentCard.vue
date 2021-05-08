<template>
  <div v-for="(detail,index) in details"
    :key="index"
    class="cardWrapper">
    <div class="date">
      <p>{{ detail.data }}</p>
    </div>
    <div class="arrow">></div>
    <div class="header">{{ detail.customer }}</div>
    <div class="amount">{{ detail.amount }} {{detail.currency}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'PaymentCard',

  computed: {
    ...mapState(['details'])
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/main.scss';

.cardWrapper {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  min-height: 60px;
  border-radius: 10px;
  padding: 16px 32px;
  margin: 12px auto;
  background-color: #fff;
  box-shadow: 0px 0px 3px rgba(0,0,0, 0.2);
  cursor: pointer;

  .date {
    position: absolute;
    top: -14px;
    left: 20px;
    padding: 5px 15px;
    background-color: $green;
    line-height: 1;
    border-radius: 5px;

    p {
      color: $white;
      font-size: 1rem;
      padding: 0px;
      margin: 0px;
    }
  }

  .arrow {
    display: block;
    position: absolute;
    right: 20px;
    bottom: 0px;
    font-size: 2rem;
    font-weight: bold;
    color: $green;
    transform: rotateZ(90deg);
  }

  .header {
    font-size: 1.6rem;
    font-weight: bold;
    color: $primary;
  }
}

</style>
