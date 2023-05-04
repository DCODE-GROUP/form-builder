@extends(config('form-builder.layout_path'))

@section(config('form-builder.content_section'))
    <div>
        <h2>{{ (isset($form) ? 'Edit' : 'New') . ' Form' }}</h2>
    </div>
    <main id="form-builder-app" v-pre>
        @if (isset($form))
            <form action="{{ route(config('form-builder.route_name'). '.update', $form) }}" method="POST">
                @method('PUT')
                @else
            <form action="{{ route(config('form-builder.route_name').'.store') }}" method="POST">
                @endif
                @csrf
                <div class="centering">
                    <form-builder
                            name="form_builder"
                            form="{{ isset($form) ? $form->toJson() : '{}' }}"
                            cancel-url="{{ route(config('form-builder.route_name').'.index') }}"
                    ></form-builder>
                </div>
            </form>
    </main>
@endsection
