import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Products from '@/views/Products';
import ProductDetail from '@/components/products/ProductDetail';
import CartProducts from '@/components/products/cart/CartProducts';
import Checkout from '@/components/products/cart/Checkout';
import CreateAccount from './views/login.vue';
import { isLoggedIn } from './components/shared/service/authService';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/products/:id',
      name: 'productDetails',
      component: ProductDetail
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartProducts,
      beforeEnter: (to, from, next) => {
        if (isLoggedIn()) {
          next();
        } else {
          next({
            name: 'login',
            query: {
              from: to.name
            }
          });
        }
      }
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout,
      beforeEnter: (to, from, next) => {
        if (isLoggedIn()) {
          next();
        } else {
          next({
            name: 'login',
            query: {
              from: to.name
            }
          });
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: CreateAccount
    }
  ]
});
