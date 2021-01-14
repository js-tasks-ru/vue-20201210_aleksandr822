<template>
  <form class="form" @submit.prevent="register">
    <div class="form-group">
      <label class="form-label">Email</label>
      <div class="input-group">
        <input
          type="email"
          class="form-control"
          v-model="email.value"
          :placeholder="email.placeholder"
        />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Имя</label>
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          v-model="name.value"
          :placeholder="name.placeholder"
        />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Пароль</label>
      <div class="input-group">
        <input
          type="password"
          class="form-control"
          v-model="password.value"
          :placeholder="password.placeholder"
        />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Повтор пароля</label>
      <div class="input-group">
        <input
          type="password"
          class="form-control"
          v-model="repeatePassword.value"
          :placeholder="repeatePassword.placeholder"
        />
      </div>
    </div>
    <div class="form-group">
      <label class="checkbox">
        <input type="checkbox"
          v-model="agree.value"
        />
          Я согласен с условиями
          <span></span>
      </label>
    </div>
    <div class="form__buttons">
      <button
        type="submit"
        class="button button_primary"
      >
        Зарегистрироваться
      </button>
    </div>
    <div class="form__append">Уже есть аккаунт? <router-link :to="{ name: 'login' }" class="link">Войдите</router-link></div>
  </form>
</template>

<script>
import { register } from '../data';

export default {
  name: 'RegisterPage',
  data () {
    return {
      // agree: false
      email: {
        value: null,
        error: 'Требуется ввести Email',
        placeholder: 'Введите Email'
      },
      name: {
        value: null,
        error: 'Требуется ввести полное имя',
        placeholder: 'Введите ваше имя'
      },
      password: {
        value: null,
        error: 'Требуется ввести пароль',
        placeholder: 'Введите пароль'
      },
      repeatePassword: {
        value: null,
        error: 'Пароли не совпадают',
        placeholder: 'Повторно введите пароль'
      },
      agree: {
        value: false,
        error: 'Требуется согласиться с условиями'
      }
    }
  },
  methods: {
    async register () {
      if (!this.email.value) {
        alert(this.email.error)
        return false
      }

      if (!this.name.value) {
        alert(this.name.error)
        return false
      }

      if (!this.password.value) {
        alert(this.password.error)
        return false
      }

      if (this.password.value !== this.repeatePassword.value) {
        alert(this.repeatePassword.error)
        return false
      }

      if (!this.agree.value) {
        alert(this.agree.error)
        return false
      }

      let respons = await register(this.email.value, this.name.value, this.password.value)
      if (respons.statusCode && respons.statusCodeo !== 200) {
        alert(respons.message)
        return false
      }

      alert(respons.id)

      this.email.value = ''
      this.name.value = ''
      this.password.value = ''
      this.repeatePassword.value = ''
      this.agree.value = false

      return true
    }
  }
};
</script>

<style scoped></style>
