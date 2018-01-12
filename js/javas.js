$(document).ready(function() {
    var a= new Array();
    var nr_pergunta=0;
    /* var a= new Array();
     var geografia_facil= "https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple";
     var facil_geografia=JSON.stringify(a);
     var jogo= $("#iniciar");

     $.getJSON(geografia_facil, function (data) {
         a = data.results;
         localStorage.setItem("sotrage",facil_geografia) ;

     });
     */

    $("#btnAdicionar").click(function () {
        localStorage.setItem("nome", ($("#nome").val()));
        localStorage.setItem("dificuldade", ($("#dificuldade").val()));
        localStorage.setItem("categoria", ($("#categoria").val()));
        document.location.href = "Jogo.html";



    });

    if ($("body").hasClass("jogo") == true) {

        var dif = localStorage.getItem("dificuldade");
        var cat = localStorage.getItem("categoria");
        $("#nomebuscar").html(localStorage.getItem("nome"));
        $("#difibuscar").html(localStorage.getItem("dificuldade"));
        switch (cat) {
            case '22':
                $("#catbuscar").html("<p>Geografia</p>");
                break;
            case '17':
                $("#catbuscar").html("<p>Ciências</p>");
                break;
            case '23':
                $("#catbuscar").html("<p>História</p>")
                break
        }

        defenirLink(dif,cat);

    }

    function defenirLink(dif,cat) {
        var link = "https://opentdb.com/api.php?amount=10&category="+cat+"&difficulty="+dif+"&type=multiple";
        getJSONLink(link);

    }

    function getJSONLink(link) {
        $.getJSON(link, function (data) {
        a = data.results;

        comecarPerguntas(0);


        });
    }

    function comecarPerguntas() {
        $("#perguntas").html("<h2>"+ a[nr_pergunta].question +"</h2>");



            var posi_random = Math.floor((Math.random() * 4) + 1);
            var erradas=0;

            for(var i = 1; i<=4;i++){
                if(posi_random == i){
                    $("#respostas").html("<button>"+ a[nr_pergunta].correct_answer +"</button>");
                }else{
                    $("#respostas").html("<button>" + a[nr_pergunta].incorrect_answers[erradas] + "</button>");
                    erradas += 1;
                }
            }
        $("#jogar").innerHTML("<button id='btcontinuar'></button> <button id='btfavoritos'></button> ");








    }

    $("#btncontinuar").click(function(nr_pergunta){
        if ((nr_pergunta +1) == 10){
            pontuacao();
        }
        else{
           nr_pergunta ++;
           comecar_Perguntas(nr_perguntas);


        }

    });

    function pontuacao(){

    }
});
