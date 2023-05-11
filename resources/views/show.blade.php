@extends(config('form-builder.layout_path'))

@section(config('form-builder.content_section'))
    <main id="form-builder-app" v-pre>
        <div>
            <v-form action="#"
                    method="POST"
                    name="form_fields"
                    title="{{ $formData->name }}"
                    :form="{{ $form->toJson() }}"
                    :form-data="{{ $formData->toJson() }}"
                    :editable="false"
            >
            </v-form>
        </div>
    </main>
@endsection
