<template>
  <form-layout title="Создать митап">
    <form>Meetup Form</form>
    <fieldset class="form-section">
      <div class="form-group">
        <label class="form-label">Название</label>
        <div class="input-group">
          <input class="form-control" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Дата</label>
        <div class="input-group">
          <input type="date" class="form-control" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Место проведения</label>
        <div class="input-group">
          <input class="form-control" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Описание</label>
        <div class="input-group">
          <textarea rows="3" class="form-control"></textarea>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Изображение</label>
        <div class="image-uploader">
          <label class="image-uploader__preview">
            <span>Загрузить изображение</span>
            <input type="file" accept="image/*" class="form-control-file" />
          </label>
        </div>
      </div>
    </fieldset>
  </form-layout>
</template>

<script>
import FormLayout from '../components/FormLayout';
export default {
  name: 'FormPage',
  components: { FormLayout },
};
</script>

<style scoped></style>
