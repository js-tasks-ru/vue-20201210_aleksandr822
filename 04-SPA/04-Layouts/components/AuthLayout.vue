<template>
  <main class="main">
    <div class="page page_onboarding">
      <div class="container">
        <h1 class="page__title text-center">{{title}}</h1>
        <form class="form">
          <div class="form-group">
            <label class="form-label">Email</label>
            <div class="input-group">
              <input type="email" placeholder="demo@email" class="form-control" />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Пароль</label>
            <div class="input-group">
              <input type="password" placeholder="password" class="form-control" />
            </div>
          </div>
          <div class="form__buttons">
            <button type="submit" class="button button_primary button_block">Войти</button>
          </div>
          <div class="form__append">Нет аккаунта? <a href="register.html" class="link">Зарегистрируйтесь</a></div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'AuthLayout',
  props: {
    title: {
      type: String
    }
  }
};
</script>

<style scoped>

</style>
