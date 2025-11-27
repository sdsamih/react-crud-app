<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

use Inertia\Inertia;

Route::get('/', [PostController::class, 'index']);

Route::get('/posts/create', [PostController::class, 'create']);

Route::resource('posts',PostController::class)->except(['index','create']);



