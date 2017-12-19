$(document).ready(function() {

    var a= new Array();
    var geografia_facil= "https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple";
    var facil_geografia=JSON.stringify(a);



    $.getJSON(geografia_facil, function (data) {
        a = data.results;
        localStorage.setItem("sotrage",facil_geografia) ;

    });


    $("#btnAdicionar").on("click",function(){
        //localStorage.nome = $("#nome").val();
        //localStorage.dificuldade = $("#dificuldade").val();
        //localStorage.categoria = $("#categoria").val();
        //window.location.href = "jogo.html";
        $("#cont").html("<h1>" + a[0].question + "</h1> <button>" + a[0].correct_answer + "</button> <button>" + a[0].incorrect_answers[1] + "</button>"
    );
    });

});


