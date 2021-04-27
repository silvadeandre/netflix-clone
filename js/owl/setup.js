$('.owl-carousel').owlCarousel({
   loop:true, /* ativa o efeito loop do carrossel, impedindo que pare de "girar"*/
   margin:10,
   nav:false,
   responsive:{ /* é quando os elementos se adaptam ao tamanho da tela */
       0:{
           items:1
       },
       600:{
           items:3
       },
       1000:{
           items:5
       }/*aqui está dizendo que, quando a tela tiver 1000 pixels ou mais, ele irá mostrar até 5 elementos. Igualmente, acontece nos casos com 600 e 0*/
   }
})