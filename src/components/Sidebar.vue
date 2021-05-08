<template>
  <div class="sidebar">
    <router-link to="/add_new">
      <PlusCircleIcon class="plusCircleIcon"/>
      Add New Payment
    </router-link>
    <router-link to="/">
      <DocumentTextIcon class="plusCircleIcon"/>
      List
    </router-link>
    <router-link to="/info">
      <InformationCircleIcon class="plusCircleIcon"/>
      Info
    </router-link>
  </div>
</template>

<script>
import {
  PlusCircleIcon,
  DocumentTextIcon,
  InformationCircleIcon
} from '@heroicons/vue/outline'

export default {
  name: 'Sidebar',
  components: {
    PlusCircleIcon,
    DocumentTextIcon,
    InformationCircleIcon
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/main.scss';

.sidebar {
  box-sizing: border-box;
  min-width: 25%;
  height: 100%;
  background-color: $secondary;
  padding: 40px;
}

a {
  color: $white;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin: 20px 0px;
}

.plusCircleIcon {
  width: 30px;
  margin-right: 10px;
}
</style>
