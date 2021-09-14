<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>@yield ('title')</title>
    @include('layouts.links')

    <style>
        html, body{
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
        }
        .background{
            background-image: url("../../../laravel_bank/public/img/background01.svg");
            background-repeat: no-repeat;
            background-size: cover;
        }
    </style>
</head>

<body class="background">
    <header>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-ellipsis-v"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="{{env('APP_URL')}}/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{env('APP_URL')}}/createAccount">CreateAccount</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    @yield('content')
    <footer>
        <br><br>
        <div class="d-flex justify-content-center">
            <p class="text-white"> Desenvolvido por Matheus Braz</p>
        </div>
    </footer>
    @include('layouts.scripts')
    @yield('scripts')
</body>

</html>
