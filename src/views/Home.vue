<template>
  <div class="page-wrapper">
    <h1>List of money transfers</h1>
    <hr>
    <Sort />
    <PaymentCard />
  </div>
</template>

<script>
import PaymentCard from '@/components/PaymentCard'
import Sort from '@/components/Sort'

export default {
  name: 'Home',
  components: {
    PaymentCard,
    Sort
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/main.scss';

</style>
