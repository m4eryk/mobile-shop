<template>
  <div class="home-component">
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <img alt="Vue logo" src="../assets/logo.png" width="100px">
          <h3 class="display-5 "><span style="color:#42b983">Mobile Shop</span></h3>
        </div>
    </div>
    <div aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">Лучшие продукты</li>
        <li class="ml-auto" aria-current="page"><router-link to="/products">Показать все</router-link></li>
      </ol>
    </div>
    <BestProducts></BestProducts>
    <div aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active " aria-current="page">Топ продаж</li>
        <li class="ml-auto" aria-current="page"><router-link to="/products">Показать все</router-link></li>
      </ol>
    </div>
    <TopProducts></TopProducts>
  </div>
</template>

<script>
// @ is an alias to /src
import BestProducts from "@/components/products/BestProducts.vue";
import TopProducts from "@/components/products/TopProducts.vue";
export default {
  name: "home",
  components: {
    BestProducts,
    TopProducts
  }
};
</script>
<style>
.jumbotron {
  padding: 1rem 0rem;
}
</style>
