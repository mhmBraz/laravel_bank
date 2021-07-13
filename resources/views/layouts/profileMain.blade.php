<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>@yield ('title')</title>
    @include('layouts.links')
</head>

<body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-ellipsis-v"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="{{env('APP_URL')}}/">Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{env('APP_URL')}}/createAccount">Account detail</a>
                        </li>
                    </ul>
                    <a class="nav-link" href="{{env('APP_URL')}}/"> <span class="text-secondary"> Sair</span> </a>
                </div>
            </div>
        </nav>
        <hr class="m-1">
    </header>
    @yield('content')
    <footer>
        <br><br>
        <p> Desenvolvido por Matheus Braz</p>
    </footer>
    @include('layouts.scripts')
    @yield('scripts')
</body>

</html>