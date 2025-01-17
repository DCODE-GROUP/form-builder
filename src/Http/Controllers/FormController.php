<?php

namespace Dcodegroup\FormBuilder\Http\Controllers;

use Dcodegroup\FormBuilder\Http\Requests\StoreFormRequest;
use Dcodegroup\FormBuilder\Models\Form;
use Dcodegroup\FormBuilder\Models\FormData;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class FormController extends Controller
{
    public function index(Request $request)
    {
        $query = Form::query();

        if ($request->has('title')) {
            $query->where('title', 'like', "%{$request->input('title')}%");
        }

        return view('form-builder-views::index')->with('forms', $query->paginate(20));
    }

    public function show(Form $form)
    {
        $formData = new FormData([
            'form_id' => $form->id,
            'values' => request()->input('form_fields') ?? [],
        ]);

        return view('form-builder-views::show')
            ->with([
                'title' => $form->title,
                'formData' => $formData,
                'form' => $form,
            ]);
    }

    public function create()
    {
        return view('form-builder-views::edit');
    }

    public function store(StoreFormRequest $request)
    {
        Form::saveModel(json_decode($request->input('form_builder'), true));

        return redirect()->route(config('form-builder.route_name').'.index')->with('flashSuccess', 'Form saved.');
    }

    public function edit(Form $form)
    {
        return view('form-builder-views::edit')->with(compact(['form']));
    }

    public function update(StoreFormRequest $request, Form $form)
    {
        Form::saveModel(json_decode($request->input('form_builder'), true), $form);

        return redirect()
            ->route(config('form-builder.route_name').'.index')
            ->with('flashSuccess', 'Form saved.');
    }

    public function destroy(Form $form)
    {
        $form->delete();

        return redirect()->back()->with('flashSuccess', 'Form deleted.');
    }
}
