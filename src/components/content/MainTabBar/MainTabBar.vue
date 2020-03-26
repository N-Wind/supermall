<template>
  <TabBar>
    <TarBarItem path="/home" activeColor="deeppink">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </TarBarItem>
    <TarBarItem path="/category" activeColor="deeppink">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </TarBarItem>
    <TarBarItem path="/cart" activeColor="deeppink">
      <img slot="item-icon" src="~assets/img/tabbar/cart.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/cart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </TarBarItem>
    <TarBarItem path="/profile" activeColor="deeppink">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </TarBarItem>
  </TabBar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TarBarItem from "components/common/tabbar/TarBarItem";

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TarBarItem
    }
  }
</script>

<style scoped>
</style>
