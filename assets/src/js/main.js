var start = {

    functions: {

        // ANIMAÇÃO DE SCROLL AO TOPO DO SITE
        scrollTop: function() {
            $("html, body").animate({ scrollTop: 0, }, "slow", "swing");
        },

        // BOTÃO PARA RETORNO AO TOPO DO SITE
        arrowBack: function() {
            if ($(window).scrollTop() > 10) {
                $('#upArrow').css("bottom", "40px");
            } else {
                $('#upArrow').css("bottom", "-50px");
            }
        }
    },


    events: {
        init: function() {
            //DESABILITA O CLICK
            $(document).on('click', '[data-prevent-default]', function(e) {
                e.preventDefault();
            });

            //BOTÃO DE RETORNO
            $(document).on('click', '[data-prevent-back]', function() {
                window.history.back();
            });


            //SETA DE SCROLL TOP
            $(document).on("click", ".go", function() {
                start.functions.scrollTop();
            });
        }
    },

    init: function() {
        start.events.init();
    }
};

start.init();