<template>
    <div>
        <div class="form-basic">
            <div>
                <input type="text" v-model="title"/>
            </div>
            <br>
            <div>
                <button
                    type="button"
                    class="button"
                    @click="handleShowPreview"
                >{{ showPreview ? 'Edit' : 'Preview' }}</button>
                <a :href="cancelUrl" class="button">Cancel</a>
                <input type="submit" :value="form ? 'Update Form' : 'Create Form'" class="button success">
            </div>
        </div>
        <input type="hidden" :name="name" :value="valueJson" />
        <div v-if="showPreview" class="form-builder-preview-container">
            <div class="form-builder-preview">
                <v-form action="#" method="get" :fields="fields"></v-form>
            </div>
        </div>
        <div v-else class="form-builder-container">
            <div class="form-builder">
                <div class="menu form-builder-templates">
                    <draggable
                        v-model="templates"
                        :clone="cloneTemplate"
                        :group="{ name: 'fields', pull: 'clone', put: false }"
                    >
                        <li
                            class="button"
                            v-for="fieldTemplate in templates"
                            :key="fieldTemplate.name"
                            @click="addFieldToBottom(fieldTemplate)"
                        >{{ fieldTemplate.label }}</li>
                    </draggable>
                </div>
                <div class="form-builder-fields">
                    <draggable
                        v-model="fields"
                        ghost-class="fields"
                        :group="{ name: 'fields', pull: false, put: true }"
                        handle=".handle"
                    >
                        <div
                            v-for="(field, index) in fields"
                            class="p-r-2 relative -field"
                            :class="['-type-'+field.type]"
                            :key="field.id"
                        >
                            <div class="-field-title handle">
                                <h2 @click="field.isShowing = ! field.isShowing">
                                    <span class="fal fa-list"></span>
                                    <span class="-title">
                                        <span class="-type-title">{{ getFieldTypeTitle(field) }}:</span>
                                        <span class="-name">{{ field.label }}</span>
                                    </span>
                                </h2>
                                <span @click="removeField(index)">
                                    <i class="icon fal fa-lg fa-times"></i>
                                </span>
                            </div>
                            <div class="-field-properties">
                                <div class="-prop -label-text">
                                    <span>Label</span>
                                    <input type="text" v-model="field.label" />
                                </div>
                                <div class="-prop -placeholder" v-if="field.placeholder !== null">
                                    <span>Placeholder</span>
                                    <input type="text" v-model="field.placeholder" />
                                </div>
                                <div class="-prop -width" v-if="field.class">
                                    <span class="-label">Width</span>
                                    <select v-model="field.class">
                                        <option value="small-12">Full</option>
                                        <option value="small-6">Half</option>
                                    </select>
                                </div>
                                <div class="-prop -options" v-if="field.options">
                                    <span class="-label">Options</span>
                                    <draggable
                                        :list="field.options"
                                        class="-added"
                                        :group="{ name: field.id, pull: false, put: false }"
                                        handle=".option-handle"
                                    >
                                        <div v-for="(option, index) in field.options" class="-option">
                                            <div class="option-handle">
                                                <i class="fal fa-lg fa-list"></i>
                                            </div>
                                            <input v-model="field.options[index]" type="text" />
                                            <button
                                                type="button"
                                                class="-remove"
                                                @click="removeFieldOption(field, index)"
                                            >
                                                <i class="icon fal fa-times"></i>
                                            </button>
                                        </div>
                                    </draggable>
                                    <div class="-new">
                                        <input
                                            type="text"
                                            v-model="field.newOption"
                                            @keydown.enter.prevent="onAddOption(field)"
                                            placeholder="Add option"
                                        />
                                        <button
                                                type="button"
                                                class="button tiny"
                                                @click.prevent="onAddOption(field)"
                                        >
                                            <i class="icon fal fa-plus-circle"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </draggable>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VForm from "./VForm";
    import draggable from "vuedraggable";

    export default {
        name: "FormBuilder",
        components: {
            "v-form": VForm,
            draggable: draggable,
        },
        props: {
            name: String,
            form: {},
            cancelUrl: String,
        },
        created() {
            if (this.form) {
                this.title = this.form.title;
                this.fields = this.form.fields;
            }
        },
        data() {
            return {
                title: "New Form",
                fields: [],
                showPreview: false,
                templates: [
                    {
                        name: "heading",
                        type: "heading",
                        label: "Heading",
                        class: "small-12",
                        placeholder: null,
                    },
                    {
                        name: "text",
                        type: "text",
                        label: "Text",
                        class: "small-6",
                        placeholder: "Text",
                    },
                    {
                        name: "textarea",
                        type: "textarea",
                        label: "Text large",
                        class: "small-12",
                        placeholder: "Textarea",
                    },
                    {
                        name: "number",
                        type: "number",
                        label: "Number",
                        class: "small-6",
                        placeholder: "Number",
                    },
                    {
                        name: "datepicker",
                        type: "datepicker",
                        label: "Date Picker",
                        class: "small-6",
                        placeholder: "Date",
                    },
                    {
                        name: "checkbox",
                        type: "checkbox",
                        label: "Checkbox",
                        class: "small-6",
                        placeholder: null,
                    },
                    {
                        name: "signature",
                        type: "signature",
                        label: "Signature",
                        class: "small-12",
                        placeholder: null,
                    },
                    {
                        name: "file-upload",
                        type: "file-upload",
                        label: "File Upload",
                        class: "small-12",
                        placeholder: "Drop file here",
                    },
                    {
                        name: "select",
                        type: "select",
                        label: "Select",
                        class: "small-6",
                        placeholder: "Select an Option",
                        options: [],
                    },
                    {
                        name: "check-group",
                        type: "check-group",
                        label: "Checkbox Group",
                        class: "small-6",
                        placeholder: null,
                        options: [],
                    },
                    {
                        name: "radio-group",
                        type: "radio-group",
                        label: "Radio Button Group",
                        class: "small-6",
                        placeholder: null,
                        options: [],
                    },
                ],
            };
        },
        mounted(){
            this.allowOverFlow();
        },
        methods: {
            handleShowPreview(){
                this.showPreview = ! this.showPreview;
                this.allowOverFlow();
            },
            allowOverFlow(){
                if(this.showPreview){
                   return document.body.classList.remove('hide-overflow');
                }
                document.body.classList.add('hide-overflow');
            },
            getFieldTypeTitle(field) {
                switch (field.type) {
                    case "datepicker":
                        return "Date Picker";
                    case "file-upload":
                        return "File Upload";
                    case "textarea":
                        return "Text large";
                    case "radio-group":
                        return "Radio Button Group";
                    case "check-group":
                        return "Checkbox Group";
                    default:
                        return (
                            field.type.charAt(0).toUpperCase() + field.type.slice(1)
                        );
                }
            },
            onAddOption(field) {
                if (field.newOption) {
                    field.options.push(field.newOption);
                    field.newOption = null;
                }
            },
            uniqueId() {
                return Math.floor(Math.random() * Date.now());
            },
            removeField(index) {
                this.$delete(this.fields, index);
            },
            removeFieldOption(field, index) {
                this.$delete(field.options, index);
            },
            fieldTitle(field) {
                return field.type.charAt(0).toUpperCase() + field.type.slice(1)
            },
            cloneTemplate(template) {
                let id = this.uniqueId();
                return {
                    id: id,
                    name: `${template.type}_${id}`,
                    type: template.type,
                    label: template.label,
                    placeholder: template.placeholder,
                    class: template.class,
                    options: template.options,
                };
            },
            addFieldToBottom(fieldTemplate) {
                let field = this.cloneTemplate(fieldTemplate);
                this.fields.push(field);
            },
        },
        computed: {
            valueJson() {
                return JSON.stringify({
                    title: this.title,
                    fields: this.fields.map((field) => {
                        return {
                            id: field.id,
                            name: field.name,
                            type: field.type,
                            label: field.label,
                            placeholder: field.placeholder,
                            class: field.class,
                            options: field.options,
                        };
                    }),
                });
            },
        },
    };
</script>
