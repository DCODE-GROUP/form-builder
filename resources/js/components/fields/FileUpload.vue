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
    <div class="dropzone" :class="field.class" ref="dropzone">
      <div class="placeholder">
        <div>
          <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6.66602 12.3333L9.99935 9M9.99935 9L13.3327 12.3333M9.99935 9V16.5M16.666 12.9524C17.6839 12.1117 18.3327 10.8399 18.3327 9.41667C18.3327 6.88536 16.2807 4.83333 13.7493 4.83333C13.5673 4.83333 13.3969 4.73833 13.3044 4.58145C12.2177 2.73736 10.2114 1.5 7.91602 1.5C4.46424 1.5 1.66602 4.29822 1.66602 7.75C1.66602 9.47175 2.36222 11.0309 3.48847 12.1613"
                stroke="#475467" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div><p><span>Click to upload</span><span> or drag and drop</span></p><span>(max. 20MB)</span></div>
      </div>
    </div>
    <p v-if="field?.hint" class="inline-block text-sm text-gray-600 mt-1.5 brand-200">{{ field.hint }}</p>
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
    field: {},
  },
  data() {
    return {
      files: [],
      dropzone: null,
      formData: null,
      placeholder: ''
    }
  },
  mounted() {
    this.formData = this.$parent._.parent.props.formData;
    const csrf = this.$parent._.parent.data.csrf;
    if (this.editable && this.formData) {
      this.dropzone = new Dropzone(this.$refs.dropzone, {
        url: `/api/generic/form-data/${this.formData.id}/media/upload`,
        addRemoveLinks: true,
        dictDefaultMessage: '',
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
};
</script>
<style>
.file-upload {
  display: flex;
  align-items: center;
  gap: 35px;

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
    display: flex;
    align-items: center;
    border-radius: 12px;
    min-height: 126px;
    border: 1px solid #EAECF0;
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