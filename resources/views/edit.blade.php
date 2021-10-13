@extends(config('form-builder.layout_path'))

@section(config('form-builder.content_section'))
    <div>
        <h2>{{ (isset($form) ? 'Edit' : 'New') . ' Form' }}</h2>
    </div>
    <main>
        @if (isset($form))
        <form action="{{ route('forms.update', $form) }}" method="POST">
            @method('PUT')
        @else
        <form action="{{ route('forms.store') }}" method="POST">
        @endif
            @csrf
            <div class="centering">
                <form-builder
                    name="form_builder"
                    :form="{{ isset($form) ? $form->toJson() : 'null' }}"
                    cancel-url="{{ route('forms.index') }}"
                ></form-builder>
            </div>
        </form>
    </main>
@endsection
