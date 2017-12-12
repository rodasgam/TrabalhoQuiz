$(document).ready(function() {

    var a=new array();

    $("#btnadicionar").click(function(){


    });

    var geografia_fácil= "https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple";
    $.getJSON(geografia_fácil, function (data) {
        console.log(data);
        a = data;
        localStorage.geografia_facil=data;

    });

    function () {

    }
});


