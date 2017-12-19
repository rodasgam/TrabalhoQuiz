$(document).ready(function() {

    var a= new Array();



    var geografia_fácil= "https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple";
    $.getJSON(geografia_fácil, function (data) {
        a = data.results;
        localStorage.geografia_facil=data;

    });

    $("#btnAdicionar").on("click",function(){
        localStorage.nome = $("#nome").val();
        localStorage.dificuldade = $("#dificuldade").val();
        localStorage.categoria = $("#categoria").val();
        window.location.href = "jogo.html";
        $("#cont").html("<h1>" + a[0].question + "</h1>");
    });

});


