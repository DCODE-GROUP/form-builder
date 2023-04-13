@extends(config('form-builder.layout_path'))

@section(config('form-builder.content_section'))
    <main id="form-builder-app">
        <div>
            <v-form action="#"
                    method="POST"
                    name="form_fields"
                    title="{{ $formData->name }}"
                    :fields="{{ $form->fieldsJson() }}"
                    :values="{{ $formData->values }}"
            >
            </v-form>
        </div>
    </main>
@endsection
