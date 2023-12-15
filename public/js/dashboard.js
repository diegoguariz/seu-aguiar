(function($) {
    "use strict";

    $.fn.tree = function() {
        return this.each(function() {
            var btn = $(this).children("a").first();
            var menu = $(this).children(".treeview-menu").first();
            var isActive = $(this).hasClass('active');

            //initialize already active menus
            if (isActive) {
                menu.show();
                btn.children(".fa-angle-left").first().removeClass("fa-angle-left").addClass("fa-angle-down");
            }
            //Slide open or close the menu on link click
            btn.click(function(e) {
                e.preventDefault();
                if (isActive) {
                    //Slide up to close menu
                    menu.slideUp();
                    isActive = false;
                    btn.children(".fa-angle-down").first().removeClass("fa-angle-down").addClass("fa-angle-left");
                    btn.parent("li").removeClass("active");
                } else {
                    //Slide down to open menu
                    menu.slideDown();
                    isActive = true;
                    btn.children(".fa-angle-left").first().removeClass("fa-angle-left").addClass("fa-angle-down");
                    btn.parent("li").addClass("active");
                }
            });

            /* Add margins to submenu elements to give it a tree look */
            menu.find("li > a").each(function() {
                var pad = parseInt($(this).css("margin-left")) + 10;

                $(this).css({"margin-left": pad + "px"});
            });
        });
    };
}(jQuery));

$(document).ready(function () {    

    /* Tooltip */
    $('body').tooltip({ selector: '[data-toggle="tooltip"]' });

    //Sidebar width in pixels
    var left_side_width = 220;

    //Enable sidebar toggle
    $("[data-toggle='offcanvas']").click(function(e) {
        e.preventDefault();

        //If window is small enough, enable sidebar push menu
        if ($(window).width() <= 992) {
            $('.row-offcanvas').toggleClass('active');
            $('.left-side').removeClass("collapse-left");
            $(".right-side").removeClass("strech");
            $('.row-offcanvas').toggleClass("relative");
        } else {
            //Else, enable content streching
            $('.left-side').toggleClass("collapse-left");
            $(".right-side").toggleClass("strech");
        }
    });

    $(".navbar .menu").slimscroll({
        height: "200px",
        alwaysVisible: false,
        size: "3px"
    }).css("width", "100%");

    /* Sidebar tree view */
    $(".sidebar .treeview").tree();  
    
    /* Logout */
    $('a.btn-logout').on('click',function(){

        var href = $(this).attr('href');

        swal({            
            text:  "Deseja Sair do Painel?",
            icon:  "warning",										
            closeOnClickOutside: false,										
            buttons: {
                cancel: "NÃO",
                confirm: {
                    text: "SIM, Desejo Sair!",
                },
            },
        }).then((willDelete) => {
            /* Logout */
            if (willDelete) {
                $.ajax({
                    type:    'GET',
                    dataType:'json',
                    url:     'logout',            
                    cache:   false,
                    async:   false,
                    timeout: 5500,
                    success:function(data){ 
                        console.log("SUCCESS", data);       
                        window.location.href = '/login';
                    },
                    error: function(error) {
                        console.log(error);
                    }
                });

            /* Fecha Modal */
            } else {
                swal.close();                
            }
        });
 
        return false;
    });

    /* Logout Representante */
    $('a.btn-logout-representante').on('click',function(){
        var href = $(this).attr('href');

        swal({            
            text:  "Deseja Sair do Painel?",
            icon:  "warning",										
            closeOnClickOutside: false,										
            buttons: {
                cancel: "NÃO",
                confirm: {
                    text: "SIM, Desejo Sair!",
                },
            },
        }).then((willDelete) => {
    
            /* Logout */
            if (willDelete) {

                $.ajax({
                    type:    'GET',
                    dataType:'json',
                    url:     href,            
                    cache:   false,
                    async:   false,
                    timeout: 5500,
                    success:function(data){
        
                        window.location.href = '/representante';
                    }
                });

            /* Fecha Modal */
            } else {

                swal.close();                
            }
        });
 
        return false;
    });

    /* Logout Agência */
    $('a.btn-logout-agencia').on('click',function(){
        var href = $(this).attr('href');

        swal({            
            text:  "Deseja Sair do Painel?",
            icon:  "warning",										
            closeOnClickOutside: false,										
            buttons: {
                cancel: "NÃO",
                confirm: {
                    text: "SIM, Desejo Sair!",
                },
            },
        }).then((willDelete) => {
    
            /* Logout */
            if (willDelete) {

                $.ajax({
                    type:    'GET',
                    dataType:'json',
                    url:     href,            
                    cache:   false,
                    async:   false,
                    timeout: 5500,
                    success:function(data){
        
                        window.location.href = '/agencia';
                    }
                });

            /* Fecha Modal */
            } else {

                swal.close();                
            }
        });
 
        return false;
    });

    /* Form via Ajax */  
    $('form.ajax-form').on('submit', function(event){


        //event.target.preventDefault();

        var action = $(this).attr("action");
        var id     = $(this).attr("id");
        var url    = $(this).data('redirect');
        var dados  = new FormData(this);    

        $.ajax({
            type:    'POST',
            dataType:'json',
            url:     action,
            data:    dados,
            cache:   false,
            async:   false,
            
            processData: false,
            contentType: false,

            beforeSend: function(){

                Swal.fire({            
                    html: '<span class="h4 mb-3 d-block">Aguarde...</span>',
                    showConfirmButton: false,
                    didOpen: () => {
                        Swal.showLoading()
                    },
                    allowOutsideClick: () => {},
                });
            },

                                   
            success:function(data){
                Swal.close();

                console.log(data);

                /* Reset Form */ 
                if(data['reset-form'] == true){
                    $('form.ajax-form')[0].reset();

                    if(id != undefined){
                        $('form#' + id)[0].reset();
                    }
                }

                /* Refresh Grid */
                if(data['refresh-grid'] == true){
                    var table = $('.data-table').DataTable();
                    table.draw();
                }

                $("input[type=file").val('');

                swal(data['titulo-swal'], data['texto-swal'], data['retorno']).then(() => {
                    window.location.href = url;
                });
            },
            error: function(error) {
                console.log(data);
                Swal.close();
                var data = error.responseJSON;
                var obj = data.errors;
                var text = '';
                    for(var key in obj){ 
                        if (obj.hasOwnProperty(key)){
                            text += key+': '+obj[key]+'\n'
                        }
                    }    
                swal(data['texto-swal'], text, data['retorno']);               
            }
        });
    
        return false;
    });

    /* Excluir */
    $('a.btn-remove').on('click',function(){
        var id = $(this).attr('id');
        
        $.ajax({
            type:    'POST',
            dataType:'json',
            url:     '/clientes',
            data:    { action: 'remove', id: id },
            cache:   false,
            async:   false,
            timeout: 5500,
            success:function(data){

                $('tr#cliente-' + id).remove();

                swal(data['titulo-swal'], data['texto-swal'], data['retorno']);
            }
        });

        return false;
    });
    
    /* Mostra o que foi Digitado em Campos do Tipo "Password" */
    $("i.view-password").on('touchstart', function(){
        var input = $(this).attr('data-input');
                    $("input#" + input).attr("type", "text");
    });

    $("i.view-password").on('touchend', function(){
        var input = $(this).attr('data-input');
                    $("input#" + input).attr("type", "password");
    });

    $("i.view-password").mousedown(function() {
        var input = $(this).attr('data-input');
                    $("input#" + input).attr("type", "text");
    });

    $("i.view-password").mouseup(function() {
        var input = $(this).attr('data-input');
                    $("input#" + input).attr("type", "password");
    });

    /* Valida Confirmação de Senha */
    function ConfirmPassword(password, confirm) {
        var txtPassword        = document.getElementById(password);
        var txtConfirmPassword = document.getElementById(confirm);
            txtConfirmPassword.setCustomValidity("");

        if(txtPassword.value != txtConfirmPassword.value){
            txtConfirmPassword.setCustomValidity("As senhas não conferem.");
        }
    }

    $('input.senha').on('change',function(){
        var password = $(this).attr('data-password');
        var confirm  = $(this).attr('data-confirm-password');

        ConfirmPassword(password,confirm);
    });

    $('input.confirmar-senha').on('keyup',function(){        
        var password = $(this).attr('data-password');
        var confirm  = $(this).attr('data-confirm-password');

        ConfirmPassword(password,confirm);
    });
});
