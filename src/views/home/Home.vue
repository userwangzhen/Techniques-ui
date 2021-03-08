<template>
  <div class="wrapper">
    <StaticPart />
    <Nearby />
  </div>
  <Docker />
</template>

<script>
import StaticPart from "./StaticPart";
import Nearby from "./Neayby";
import Docker from "./Docker";
export default {
  name: "Home",
  components: {
    StaticPart,
    Nearby,
    Docker,
  },
};
</script>
<style scoped lang="scss">
/* @import "../../style/viriables.scss";
@import "../../style/mixins.scss";
 */

.wrapper {
  overflow-y: auto;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0.5rem;
  left: 0;
  padding: 0 0.18rem 0.1rem 0.18rem;
  background: #fff;
}
</style>