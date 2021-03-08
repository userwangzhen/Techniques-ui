import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '../views/home/Home.vue';

const routes =
    [
      {path: '/', name: 'Home', component: Home},
      {
        path:'/shop/:id',
        name:'Shop',
        component:()=>import('../views/shop/Shop.vue')
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('../views/login/Login.vue'),
        beforeEnter(to, from, next) {
           console.log(to,from);
           next();
        }
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('../views/register/Register.vue'),
      }

    ]

    const router = createRouter({history: createWebHashHistory(), routes})

router.beforeEach((to, from, next) => {
  console.log(to,from);
  next();
});
export default router
