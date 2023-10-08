<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PesertaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'no_id' => 'required|unique:pesertas',
            'nama' => 'required',
            'jk' => 'required',
            'instansi' => 'required',
            'sebagai' => 'required',
            'file_foto' => 'file|mimes:png,jpg'
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge(json_decode($this->peserta, true, 512, JSON_THROW_ON_ERROR));   
    }
}
