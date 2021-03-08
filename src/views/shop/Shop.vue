<template>
<div class="wrapper">
    <div class="search">
        <div 
        class="search__back iconfont"
        @click="HandleBackClick"
        >&#xe609;</div>
        <div class="search__content">
            <div class="search__content__icon iconfont">&#xe602;</div>
            <input 
            class="search__content__input" 
            placeholder="请输入商品名称"
            />
        </div>
    </div>
    <shop-item :shop="data.item" :hideBorder="true"></shop-item>
</div>
   
</template>

<script>
import shopItem from '../../components/ShopItem'
import { get } from '../../utils/request'
import { useRouter,useRoute } from 'vue-router'
import { reactive } from 'vue'

export default {
    name:'Shop',
    components:{ shopItem },
    setup(){
        
        const router = useRouter();
        const route = useRoute();
        const data = reactive({item:{}});
        const HandleBackClick=()=>{
            router.back();
        }

        const getShopItem= async ()=>{
            var result = await get(`/shop/shop/${route.params.id}`);
            console.log(result);
            if(result?.status==200 && result?.data){
                data.item = result.data;
            }
        }
        getShopItem();
        return  { data,HandleBackClick }
    }
}
</script>

<style scoped lang="scss">
.wrapper{
    padding: .18rem
}
.search{
    margin: .2rem 0 .04rem 0;
    display: flex;
    line-height: .32rem;
      &__back{
          width:.3rem; 
          font-size: .24rem;
          color:#B6B6B6; 
      }
      &__content{
          display: flex;
          flex: 1;
          line-height: .32rem;
          background: #f5f5f5;
          border-radius: .16rem;
          &__icon{
              color: #B6B6B6; 
              width: .44rem;
              text-align: center;
          }
          &__input{
              line-height: .32rem;
              border: none;
              outline: none;
              background: none;
              display: block;
              width: 100%;
              padding-right: .2rem;
              color: #333;
              font-size:.14rem;
              &::placeholder{
                  color: #333;
              }
          }
      }
      
}
</style>