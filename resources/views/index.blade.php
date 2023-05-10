@extends(config('form-builder.layout_path'))

@section(config('form-builder.content_section'))
    <div>
        <a href="{{ route(config('form-builder.route_name').'.create') }}" class="button">
            <span class="desktop-text">Create</span>
        </a>
    </div>

    @if ($forms->isNotEmpty())
        <table>
            <thead>
            <tr>
                <th>Title</th>
                <th>Last Updated</th>
                <th>&nbsp;</th>
            </tr>
            </thead>
            <tbody>
            @foreach ($forms as $form)
                <tr>
                    <td>
                        <a href="{{ route(config('form-builder.route_name').'.show', $form->id) }}">{{ $form->title }}</a>
                    </td>
                    <td>
                        {{ $form->created_at }}
                    </td>
                    <td class="actions">
                        <menu>
                            <ul>
                                <li>
                                    <button>...</button>
                                    <ul class="right">
                                        <li>
                                            <a href="{{ route(config('form-builder.route_name').'.edit', $form->id) }}">
                                                Edit
                                            </a>
                                        </li>
                                        <li>
                                            <form action="{{ route(config('form-builder.route_name').'.destroy', $form->id) }}"
                                                  method="POST">
                                                <input type="hidden" name="_token" value="{{ csrf_token() }}"/>
                                                @method('delete')
                                                <button type="submit">Delete</button>
                                            </form>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </menu>
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
        {{ $forms->appends(request()->except('page'))->links() }}
    @else
        <div>
            <p>No records found.</p>
        </div>
    @endif
@endsection
