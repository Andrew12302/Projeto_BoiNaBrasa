$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');
    $('.meuFormulario').on('submit', function(event){
        var nome = $('#nome').val();
        var email = $('#email').val();
        var valido = true;

        if(nome.trim() ===''){
            valido = false;
        }
        if(email.trim() === ''){
            valido = false
        }
        if(!valido){
            $('#mensagemErro').show();
            event.preventDefault();
        }
        else {
            $('#mensagemErro').hide();
            alert('Formulário enviado com sucesso!');
        }
    })
});
