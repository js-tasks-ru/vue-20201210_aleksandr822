<template>
  <form class="form" @submit.prevent="login">
    <div class="form-group">
      <label class="form-label">Email</label>
      <div class="input-group">
        <input
          type="email"
          placeholder="demo@email"
          class="form-control"
          v-model="email.value"
        />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Пароль</label>
      <div class="input-group">
        <input
          type="password"
          placeholder="password"
          class="form-control"
          v-model="password.value"
        />
      </div>
    </div>
    <div class="form__buttons">
      <button
        type="submit"
        class="button button_primary button_block"
      >
        Войти
      </button>
    </div>
    <div class="form__append">Нет аккаунта? <router-link :to="{ name: 'register' }" class="link">Зарегистрируйтесь</router-link></div>
  </form>
</template>

<script>
import { login } from '../data';

export default {
  name: 'LoginPage',
  data () {
    return {
      email: {
        value: null,
        error: 'Требуется ввести Email'
      },
      password: {
        value: null,
        error: 'Требуется ввести пароль'
      }
    }
  },
  methods: {
    async login () {
      if (!this.email.value) {
        alert(this.email.error)
        return false
      }

      if (!this.password.value) {
        alert(this.password.error)
        return false
      }

      let respons = await login(this.email.value, this.password.value)
      if (respons.statusCode && respons.statusCode !== 200 ) {
        alert(respons.message)
        return false
      }

      alert(respons.fullname)

      this.email.value = ''
      this.password.value = ''

      return true
    }
  }
};
</script>

<style scoped></style>
