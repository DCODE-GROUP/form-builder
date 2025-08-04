<template>
  <div class="file-upload flex-col">
    <input type="hidden" :name="name" :value="valueJson"/>
    <div class="flex flex-row gap-4 mt-1 mb-[55px]" v-if="files.length">
      <div
          v-for="(file, index) in files"
          :key="`file_${file?.id}_${index}`"
          class="file-upload-file"
      >
        <div class="preview">
          <span class="file-upload-preview">
            <img class="img" v-if="isImage(file.mime_type)" :src="file.url" :title="file.name"/>
            <svg class="svg" v-else fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path>
            </svg>
          </span>
          <a :href="file.url" target="_blank" class="link">
            <div class="file-upload-title line-clamp-2 hover:text-blue-500">{{ file.name }}</div>
          </a>
          <a class="file-upload-file-remove" v-if="editable" @click="deleteFile(index, file)">
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M9.66667 3.99992V3.46659C9.66667 2.71985 9.66667 2.34648 9.52134 2.06126C9.39351 1.81038 9.18954 1.60641 8.93865 1.47858C8.65344 1.33325 8.28007 1.33325 7.53333 1.33325H6.46667C5.71993 1.33325 5.34656 1.33325 5.06135 1.47858C4.81046 1.60641 4.60649 1.81038 4.47866 2.06126C4.33333 2.34648 4.33333 2.71985 4.33333 3.46659V3.99992M5.66667 7.66659V10.9999M8.33333 7.66659V10.9999M1 3.99992H13M11.6667 3.99992V11.4666C11.6667 12.5867 11.6667 13.1467 11.4487 13.5746C11.2569 13.9509 10.951 14.2569 10.5746 14.4486C10.1468 14.6666 9.58677 14.6666 8.46667 14.6666H5.53333C4.41323 14.6666 3.85318 14.6666 3.42535 14.4486C3.04903 14.2569 2.74307 13.9509 2.55132 13.5746C2.33333 13.1467 2.33333 12.5867 2.33333 11.4666V3.99992"
                  stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          </div>
      </div>
    </div>
    <div class="dropzone" :class="modelValue.class" ref="dropzone">
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
    <p v-if="modelValue?.hint" class="inline-block text-sm text-gray-600 mt-1.5 brand-200">{{ modelValue.hint }}</p>
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
  },
  data() {
    return {
      files: [],
      dropzone: null,
      placeholder: ''
    }
  },
  mounted() {
    const csrf = this.$parent._.parent.data.csrf;
    if (this.editable || this.preview) {
      this.dropzone = new Dropzone(this.$refs.dropzone, {
        url: `/api/generic/media/upload`,
        addRemoveLinks: true,
        dictDefaultMessage: '',
        sending: (file, xhr, formData) => {
          formData.append("_token", csrf);
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
    this.files = this.modelValue?.value ?? [];
  },
  watch: {
    files: {
      handler(newValue) {
        this.$emit("update:modelValue", {
          ...this.modelValue,
          value: {...newValue}
        });
      },
      deep: true,
    }
  },
  methods: {
    deleteFile(index, file) {
      axios
          .delete(`/api/generic/media?path=${file.path}`)
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
      return JSON.stringify(this.files.map((file) => {
        return {
          path: file.path,
          url: file.url,
          name: file.file_name,
          mime_type: file.mime_type,
        };
      }));
    },
  },
};
</script>
<style>
.file-upload {
  display: flex;
  align-items: start;
  gap: 4px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }

  .file-upload-preview {

    .img {
      object-fit: cover;
      width: 100px;
      height: 110px;
    }

    .svg {
      width: 80px;
      height: 120px;
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
      width: 80px;
      height: 100px;
      border-radius: 8px;
      object-fit: cover;
      overflow: hidden;
      display: inline-block;

      .file-upload-file-remove {
        cursor: pointer;
        position: absolute;
        right: 0;
        top: 0;
        padding: 2px 6px;
        border-radius: 2px;
        line-height: 0;
      }
    }
  }
}
</style>