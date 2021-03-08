<template>
  <div class="toast">{{ msg }}</div>
</template>
    
<script>
import { reactive } from 'vue'
export default {
  props: ["msg"],
};

export const useToastEffect = () => {
  const toastData = reactive({
    isShow: false,
    message: "",
  });

  const showToast = (msg) => {
    toastData.message = msg;
    toastData.isShow = true;
    setTimeout(() => {
      toastData.isShow = false;
      toastData.message = "";
    }, 2000);
  };

  return { toastData, showToast };
};
</script>

<style lang="scss" scoped >
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0.1rem;
  border-radius: 0.05rem;
  background: rgba(0, 0, 0, 0.35);
  color: #fff;
}
</style>