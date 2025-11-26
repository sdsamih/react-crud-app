<?php
use Illuminate\Support\Facades\Route;

use Inertia\Inertia;



Route::get('/', function () {
    //return view('welcome'); - Original (usando Blade)
    return Inertia::render('Home'); //mesmo que return Inertia::render('home')
});



Route::get('/teste', function () {
    return Inertia::render('PageTeste', [
        'title' => 'Página de Teste',
    ]);
});

