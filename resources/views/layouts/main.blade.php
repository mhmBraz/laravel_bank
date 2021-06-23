<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>@yield ('title')</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/10.16.0/sweetalert2.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

</head>

<body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="collpase navbar-collapse">
                <a href="/" class=" navbar-brand">
                    <img src="" alt="">
                </a>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="/" class="nav-link">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a href="/" class="nav-link">Criar Conta</a>
                    </li>
                    <li class="nav-item">
                        <a href="/" class="nav-link">Sair</a>
                    </li>
                    <li class="nav-item">
                        <a href="/admin" class="nav-link">Admin</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    @yield('content')
    <footer>
    <br><br>
        <p> Desenvolvido por Matheus Braz</p>
    </footer>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</body>

</html>