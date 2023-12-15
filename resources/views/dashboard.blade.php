<!DOCTYPE html>
<html lang="pt-br">
    <head>        
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="theme-color" content="#002e5b">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="resource-type" content="document"/>
        <meta name="classification" content="Internet"/>
        <meta name="distribution" content="Global"/>
        <meta name="rating" content="General"/>
        <meta name="language" content="pt-br"/>
        <meta name="Robots" content="index,follow" />
        <meta name="title" content="" />
        <meta name="description" content="" />	
                
        <title>Painel | Seu Aguiar</title>

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        
        <!-- Font Awesome Icons -->
        <script src="https://kit.fontawesome.com/b82bd3ad34.js"></script>
        
        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css">
        
        <!-- CSS Default -->
        <link rel="stylesheet" href="{{ asset('css/dashboard.css') }}" />
        
        @section('css')
        @show

        <style>
             
             /* Cores Painel */
             header { background-color: #062b58; }    
            .navbar .nav,
            .navbar .nav a,
            .navbar .user-header { background: #aa131a; }
            .form-box h1,
            .form-box button { background: #062b58; }
            .form-box a { color: #062b58; }
            .cor-primaria { color: #062b58; }
            .bg-cor-primaria { background: #062b58; }
        
        </style>
        
        <!-- Favicon -->
        <link href="{{ asset('public/img/favicon.png') }}" rel="shortcut icon" type="image/x-icon" />        
    </head>
<body class="skin-blue fixed">
    <header class="header">
        <a href="" class="logo float-left">
            <h1 class="text-center text-white text-uppercase font-weight-normal h5 p-3 m-0">Painel</h1>
        </a>
        <nav class="navbar navbar-static-top p-0">            
            <a href="#" class="navbar-btn sidebar-toggle pl-2" data-toggle="offcanvas" role="button">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </a>

            <div class="navbar-right h-100">
                <ul class="nav navbar-nav list-inline d-block">

                    <li class="list-inline-item dropdown user user-menu">
                        <a href="#" class="dropdown-toggle p-3 d-block text-white" data-toggle="dropdown">
                            <i class="fas fa-user pr-1"></i>
                        </a>

                        <ul class="dropdown-menu position-absolute">
                            <li class="user-header"> 
                                <img src="{{ asset('img/painel/sem-foto.jpg') }}" class="rounded-circle" alt="Imagem de Perfil do Usuário" />
    
                                    <p>
                                        Diego
                                        <small>Diego Guariz</small>
                                    </p>
         
                                </li>
                            <li class="user-footer">
                                <div class="row m-0">
                                    <div class="col-4 p-0">
                                        <a href="" class="btn btn-sm btn-block rounded-0 text-uppercase text-white">
                                            <i class="fas fa-user-tie pr-1"></i> Cadastro
                                        </a>
                                    </div>
                                    <div class="col-4 pr-0">
                                        <a href="" class="btn btn-sm btn-block rounded-0 text-uppercase text-white">
                                            <i class="fas fa-key pr-1"></i> Senha
                                        </a>
                                    </div>
                                    <div class="col-4 pr-0">
                                        <a href="" class="btn btn-logout btn-sm btn-block rounded-0 text-uppercase text-white">
                                            <i class="fas fa-power-off pr-1"></i> Sair
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>                
    </header>

    <div class="wrapper row-offcanvas row-offcanvas-left position-relative">
        <aside class="left-side sidebar-offcanvas">            
            
            <section class="sidebar">

                <!-- Sidebar user panel -->    
                <h2 class="m-0 bg-white pt-4 pr-3 pb-4 pl-3">
                    <img src="{{ asset('img/painel/logo.png') }}" class="img-fluid" alt="Logo Seu Aguiar" />
                </h2>

                <ul class="sidebar-menu">
                    {{-- Lista Menu --}}
                    <li>
                        <a href="" class="item-menu">
                            <i class="fa-solid fa-handshake-simple"></i>
                            <span style="margin-left: 10px">Franquias</span>                
                        </a>                        
                    </li>  
                    <li>
                        <a href="" class="item-menu">
                            <i class="fa-solid fa-warehouse"></i>
                            <span style="margin-left: 10px">Agências</span>                
                        </a>                        
                    </li>  
                    <li>
                        <a href="" class="item-menu">
                            <i class="fa-solid fa-id-card-clip"></i>
                            <span style="margin-left: 10px">Motoristas</span>                
                        </a>                        
                    </li>  
                    <li>
                        <a href="" class="item-menu">
                            <i class="fa-solid fa-car-rear"></i>
                            <span style="margin-left: 10px">Veículos</span>                
                        </a>                        
                    </li>  
                    <li>
                        <a href="" class="item-menu">
                            <i class="fa-solid fa-users-between-lines"></i>
                            <span style="margin-left: 10px">Passageiros</span>                
                        </a>                        
                    </li>  
                    <li>
                        <a href="" class="item-menu">
                            <i class="fa-solid fa-route"></i>
                            <span style="margin-left: 10px">Corridas</span>                
                        </a>                        
                    </li>  
                    <li>
                        <a href="" class="item-menu">
                            <i class="fa-solid fa-chart-line"></i>
                            <span style="margin-left: 10px">Dashboard</span>                
                        </a>                        
                    </li>  
                    <li>
                        <a href="" class="item-menu">
                            <i class="fa-solid fa-tree-city"></i>
                            <span style="margin-left: 10px">Cidades</span>                
                        </a>                        
                    </li>  
                    <li>
                        <a href="" class="item-menu">
                            <i class="fa-solid fa-tree-city"></i>
                            <span style="margin-left: 10px">Estados</span>                
                        </a>                         
                    </li>  
                    <li>
                        <a href="" class="item-menu">
                            <i class="fa-solid fa-user"></i>
                            <span style="margin-left: 10px">Usuários</span>                
                        </a>                        
                    </li>  
                    <li>
                        <a href="" class="item-menu">
                            <i class="fa-solid fa-sliders"></i>
                            <span style="margin-left: 10px">Parâmetros</span>                
                        </a>                        
                    </li>  
                    <li>
                        <a href="" class="item-menu">
                            <i class="fa-solid fa-screwdriver-wrench"></i>
                            <span style="margin-left: 10px">Configurações</span>                
                        </a>                        
                    </li>  
                    {{-- End; Lista Menu --}}
                                                  
                </ul>                
            </section>
        </aside>

        <aside class="right-side">            
            <section class="content">
                <div class="row m-0 p-3 content-header">
                    <div class="col-12 p-0">
                        <h3 class="h4 m-0">
                            Titulo
                            <small class="h6 text-secondary">Subtitulo</small>
                        </h3>
                    </div>                    
                </div>
                
                @yield('content')
            </section>
        </aside>
    </div>

    <!-- jQuery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!-- Popper.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" defer></script>

    <!-- Bootstrap JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js" defer></script>

    <!-- SlimScroll -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jQuery-slimScroll/1.3.8/jquery.slimscroll.min.js" defer></script>

    <!-- SweetAlert -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10" defer></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.0/sweetalert.min.js" defer></script>    

    <!-- JS Default -->
    <script src="{{ asset('js/dashboard.js') }}" defer></script>

    @section('js')
    @show
</body>
</html>