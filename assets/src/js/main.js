var start = {

    functions: {
        filter: function(){

            //DECLARANDO VARIÁVEIS
            var input, filter, ul, li, a, i;
            input = document.getElementById("input");
            filter = input.value.toUpperCase();
            ul = document.getElementsByClassName("products-list");
            li = document.getElementsByClassName("products-list-item");
            
            //LOOP NA LI PARA RENDERIZAR OS PRODUTOS
            for(i=0; i < li.length; i++){
                a = li[i].getElementsByClassName("products-list-link")[0];
                if(!input.value){
                    li[i].classList.remove("show");
                    li[i].classList.add("hide");
                } else if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
                    li[i].classList.remove("hide");
                    li[i].classList.add("show");
                } else{
                    li[i].classList.remove("show");
                    li[i].classList.add("hide");
                }
            }

        }
    },

    events: {
        init: function() {

            //EVENTO DE TRIGGER DO FILTRO
            $(".form").on("keyup", function() {
                start.functions.filter();
            });
        }
    },

    init: function() {
        start.events.init();
    }
};

start.init();