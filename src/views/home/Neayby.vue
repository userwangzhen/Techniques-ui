<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <router-link
      v-for="item in nearbyList"
      :key="item.id"
      :to="`/shop/${item.id}`"
    >
      <shopItem :shop="item" />
    </router-link>
  </div>
</template>

<script>
import { ref } from "vue";
import { get } from "../../utils/request";
import shopItem from "../../components/ShopItem";

const useNearbyListEffect = () => {
  const nearbyList = ref([]);
  const getNearbyList = async () => {
    const result = await get("/shop/shop");
    console.log(result);
    if (result.status == 200) {
      nearbyList.value = result.data;
    }
  };
  return { nearbyList, getNearbyList };
};
export default {
  name: "Nearby",
  components: { shopItem },
  setup() {
    const { nearbyList, getNearbyList } = useNearbyListEffect();
    getNearbyList();
    return {
      nearbyList,
    };
  },
};
</script>

<style lang="scss">
@import "../../style/viriables.scss";
.nearby {
  &__title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    color: $content-fontcolor;
    font-weight: normal;
  }
  a {
    text-decoration: none;
  }
}
</style>