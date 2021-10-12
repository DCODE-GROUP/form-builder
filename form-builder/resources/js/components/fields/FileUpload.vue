<template>
    <div class="file-upload">
        <input type="hidden" :name="name" :value="valueJson" />
        <div
            v-for="(file, index) in files"
            :key="`file_${file.id}_${index}`"
            class="file-upload-file"
        >
            <a :href="file.url" target="_blank">
                <div class="file-upload-preview">
                    <img v-if="isImage(file.mime_type)" :src="file.url"  :title="file.filename" />
                    <img v-else src="/img/icons/pdf2.svg" :title="file.filename" style="width: 100px; height: 73px;"/>
                </div>
                <div class="file-upload-title">{{ file.filename }}</div>
            </a>
            <button class="file-upload-file-remove" type="button" @click="deleteFile(index, file)">
                <i class="fal fa-times"></i>
            </button>
        </div>
        <div class="dropzone" ref="dropzone"></div>
    </div>
</template>

<script>
    import axios from "axios";
    import Dropzone from "dropzone";
    Dropzone.autoDiscover = false;

    export default {
        name: "FileUpload",
        props: {
            name: String,
            value: {},
            getUrl: {
                type: String,
                default: "/file",
            },
            storeUrl: {
                type: String,
                default: "/file",
            },
            destroyUrl: {
                type: String,
                default: "/file",
            },
            placeholder: {
                type: String,
                default: "Drop files here",
            },
        },
        data() {
            return {
                files: [],
                dropzone: null,
            };
        },
        mounted() {
            this.dropzone = new Dropzone(this.$refs.dropzone, {
                url: this.storeUrl,
                addRemoveLinks: true,
                dictDefaultMessage: 'Drop files here',
                sending: (file, xhr, formData) => {
                    formData.append("_token", this.csrf);
                },
                success: (file, response) => {
                    this.files.push(response.data);
                },
                complete: (file) => {
                    this.dropzone.removeFile(file);
                },
            });
        },
        created() {
            let files = this.value;
            if (files) {
                this.files = files;
            }
        },
        methods: {
            deleteFile(index, file) {
                axios
                    .delete(this.destroyUrl, {
                        params: {
                            id: file.id,
                        },
                    })
                    .then((res) => {
                        this.$delete(this.files, index);
                    })
                    .catch(console.error);
            },
            getFile(id) {
                axios
                    .get(this.getUrl, {
                        params: {
                            id: id,
                        },
                    })
                    .then((res) => {
                        let data = res.data.data;
                        this.files.push({
                            id: data.id,
                            filename: data.filename,
                            path: data.path,
                            url: data.url,
                            mime_type: data.mime_type,
                        });
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
                    return file.id;
                });

                return JSON.stringify(fileIds);
            },
        },
        watch: {
            files() {
                this.$emit(
                    "input",
                    this.files.map((file) => {
                        return file.id;
                    })
                );
            },
            placeholder() {
                $(this.dropzone.element).find('.dz-message').text(this.placeholder);
            },
        },
    };
</script>
