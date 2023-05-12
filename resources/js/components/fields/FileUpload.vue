<template>
  <div class="file-upload">
    <input type="hidden" :name="name" :value="valueJson"/>
    <div
      v-if="files.length"
      v-for="(file, index) in files"
      :key="`file_${file.id}_${index}`"
      class="file-upload-file"
    >
      <div class="preview">
        <span class="file-upload-preview">
          <img class="img" v-if="isImage(file.mime_type)" :src="file.url" :title="file.file_name"/>
          <svg class="svg" v-else fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path>
          </svg>
        </span>
        <a :href="file.url" target="_blank" class="link">
          <div class="file-upload-title">{{ file.file_name }}</div>
        </a>
        <a class="file-upload-file-remove" v-if="editable">
          <i class="fal fa-times" @click="deleteFile(index, file)"></i>
        </a>
      </div>
    </div>
    <div class="dropzone" ref="dropzone" v-if="editable"></div>
  </div>
</template>

<script>
import axios from "axios";
import Dropzone from "dropzone";
import BaseField from "../mixins/BaseField";

Dropzone.autoDiscover = false;

export default {
  name: "FileUpload",
  mixins: [BaseField],
  props: {
    name: String,
    modelValue: {},
    placeholder: {
      type: String,
      default: "Drop files here",
    },
  },
  data() {
    return {
      files: [],
      dropzone: null,
      formData: null,
    };
  },
  mounted() {
    this.formData = this.$parent._.parent.props.formData;
    const csrf = this.$parent._.parent.data.csrf;
    if (this.editable && this.formData) {
      this.dropzone = new Dropzone(this.$refs.dropzone, {
        url: `/api/generic/form-data/${this.formData.id}/media/upload`,
        addRemoveLinks: true,
        dictDefaultMessage: 'Drop files here',
        sending: (file, xhr, formData) => {
          formData.append("_token", csrf);
          formData.append("field", this.name);
        },
        success: (file, response) => {
          this.files.push(response);
        },
        complete: (file) => {
          this.dropzone.removeFile(file);
        },
      });
    }
  },
  created() {
    let files = typeof this.modelValue === 'string' ? JSON.parse(this.modelValue) : this.modelValue;

    if (files) {
      this.files = Object.values(files);
    }
  },
  methods: {
    deleteFile(index, file) {
      axios
        .delete(`/api/generic/form-data/${this.formData.id}/media/${file.id}`)
        .then((res) => {
          this.files.splice(index, 1);
        })
        .catch(console.error);
    },
    isImage(mimeType) {
      let imageMimes = [
        "image/gif",
        "image/jpeg",
        "image/png",
        "image/tiff",
      ];
      return imageMimes.includes(mimeType);
    },
  },
  computed: {
    valueJson() {
      let fileIds = this.files.map((file) => {
        return {
          id: file.id,
          url: file.url,
          file_name: file.file_name,
          mime_type: file.mime_type,
        };
      });

      return JSON.stringify(fileIds);
    },
  },
  watch: {
    placeholder() {
      $(this.dropzone.element).find('.dz-message').text(this.placeholder);
    },
  },
};
</script>
<style>
.file-upload {
  display: flex;
  align-items: center;
  gap: 35px;
  margin-bottom: 40px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }

  .file-upload-preview {

    .img {
      object-fit: cover;
      width: 200px;
      height: 110px;
    }

    .svg {
      width: 200px;
    }
  }

  .file-upload-title {
    font-size: 12px;
    word-break: break-word;
    position: absolute;
  }

  .dropzone {
    border-style: dashed !important;
    display: flex;
    align-items: center;
    border-radius: 5px;
  }

  .file-upload-file {
    display: inline-block;
    position: relative;

    .preview {
      display: inline-block;

      .file-upload-file-remove {
        cursor: pointer;
        position: absolute;
        right: 5px;
        top: 5px;
        padding: 2px 6px 2px 6px;
        background: white;
        border-radius: 2px;
        line-height: 0;
      }
    }
  }
}
</style>