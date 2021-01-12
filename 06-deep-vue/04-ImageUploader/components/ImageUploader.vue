<template>
  <div class="image-uploader">
    <label
      class="image-uploader__preview"
      :class="{ 'image-uploader__preview-loading': loading }"
      :style="image"
    >
      <span>{{ message }}</span>
      <input
        type="file"
        accept="image/*"
        class="form-control-file"
        :disabled="loading"
        @change="uploadingImage"
        @click="removeImage"
      />
    </label>
  </div>
</template>

<script>
import { ImageService } from '../image-service';

export default {
  name: 'ImageUploader',

  props: {
    imageId: {
      type: Number,
      default: null
    }
  },

  model: {
    prop: 'imageId',
    event: 'change'
  },

  data () {
    return {
      loading: false
    }
  },

  methods: {
    removeImage (event) {
      event.target.value = null
      this.$emit('change', null)
    },

    uploadingImage (event) {
      this.loading = true

      ImageService.uploadImage(event.target.files[0])
        .then((respons) => {
          this.loading = false
          this.$emit('change', respons.id)
        })
    }
  },

  computed: {
    image () {
      const id = ImageService.getImageURL(this.imageId)
      return {'--bg-image': id !== null ? `url('${id}')` : ''}
    },

    message () {
      let message = ''

      if (this.imageId === null) {
        message = 'Загрузить изображение'
      }

      if (this.imageId !== null) {
        message = 'Удалить изображение'
      }

      if (this.loading) {
        message = 'Загрузка...'
      }

      return message
    }
  }
};
</script>

<style scoped>
.image-uploader .form-control-file {
  opacity: 0;
  height: 0;
}

.image-uploader .image-uploader__preview {
  --bg-image: var(--default-cover);
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    var(--bg-image);
  border: 2px solid var(--blue-light);
  border-radius: 8px;
  transition: 0.2s border-color;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 512px;
  height: 228px;
}

.image-uploader .image-uploader__preview > span {
  color: var(--white);
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
}

.image-uploader .image-uploader__preview:hover {
  border-color: var(--blue);
}

.image-uploader .image-uploader__preview.image-uploader__preview-loading {
  cursor: no-drop;
}
</style>
