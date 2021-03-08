<template>
  <div class="wrapper">
    <img
      class="wrapper__img"
      src="http://www.dell-lee.com/imgs/vue3/user.png"
    />
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="请输入手机号"
        v-model="data.userName"
      />
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="请输入密码"
        v-model="data.passWord"
        type="password"
      />
    </div>
    <div class="wrapper__login-button" @click="handleLogin">登录</div>
    <div class="wrapper__link" @click="HandleRegisterClick">注册</div>
  </div>
  <toast v-if="toastData.isShow" :msg="toastData.message" />
</template>
    
<script>
import { useRouter } from "vue-router";
import { reactive } from "vue";
import { post } from "../../utils/request";
import toast,{ useToastEffect } from "../../components/toast";



export default {
  name: "Login",
  components: { toast },
  setup() {
    const router = useRouter();
    const data = reactive({userName: "",passWord: ""});

    const { toastData, showToast} = useToastEffect();
    const handleLogin = async () => {
      try {
        const result = await post("/Identity/user/authenticate", {
          userName: data.userName,
          passWord: data.passWord,
        });
        if (result?.data?.token) {
          let token = result.data.token;
          localStorage.token = token;
          localStorage.isLogin = true;
          router.push({ name: "Home" });
        } else {
          showToast("登录失败");
        }
      } catch (ex) {
        showToast("请检查用户名和密码");
      }
    };
    const HandleRegisterClick = () => {
      router.push({ name: "Register" });
    };
    return {
      data,
      toastData,
      handleLogin,
      HandleRegisterClick,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
.wrapper {
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  transform: translateY(-10%);

  &__img {
    width: 0.66rem;
    height: 0.66rem;
    display: block;
    margin: 0 auto 0.4rem auto;
  }
  &__input {
    padding: 0 0.16rem;
    background: #f9f9f9;
    border: 0.01rem solid rgba(0, 0, 0, 0.1);
    border-radius: 0.06rem;
    border-radius: 0.06rem;
    height: 0.48rem;
    margin: 0 0.4rem 0.16rem 0.4rem;

    &__content {
      line-height: 0.48rem;
      border: none;
      width: 100%;
      outline: none;
      background: none;
      font-size: 0.16rem;
      color: rgba(0, 0, 0, 0.5);
      &::placeholder {
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  &__login-button {
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    line-height: 0.48rem;
    background: #0091ff;
    border-radius: 0.04rem;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    color: #fff;
    font-size: 0.16rem;
    text-align: center;
  }

  &__link {
    font-size: 0.14rem;
    text-align: center;
    color: rgba(114, 25, 25, 0.5);
  }
}
</style>