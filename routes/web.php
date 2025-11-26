<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

use Inertia\Inertia;

Route::get('/', [PostController::class, 'index']);

Route::get('/teste', function () {
    return Inertia::render('PageTeste', [
        'title' => 'Página de Teste',
    ]);
});

Route::resource('posts',PostController::class)->except('index');



