<?php

namespace App\Http\Requests;

use Gate;
use Illuminate\Foundation\Http\FormRequest;

class MassDestroySliderRequest extends FormRequest
{
    public function authorize()
    {
        abort_if(Gate::denies('slider_delete'), 403, '403 Forbidden');

        return true;
    }

    public function rules()
    {
        return [
            'ids'   => 'required|array',
            'ids.*' => 'exists:sliders,id',
        ];
    }
}
