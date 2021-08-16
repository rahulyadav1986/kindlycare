function ham_click(){
    var hamburger= document.getElementById('hamburger');
    var menu= document.getElementById('mobile_menu');
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
}

function auto_complete(){
    var auto_complete= document.getElementById('auto_complete');
    var auto_cross= document.getElementById('auto_cross');
    auto_complete.classList.add('active');
    auto_cross.classList.add('active')
}


function auto_cross(){
    var auto_complete= document.getElementById('auto_complete');
    var auto_cross= document.getElementById('auto_cross');
    auto_cross.classList.remove('active');
    auto_complete.classList.remove('active');
}

function cat_button(){
    var cat_button= document.getElementById('cat_button');
    cat_button.classList.toggle('active');
}

function mobileSearchPanel(){
    var mobileSearchPanel= document.getElementById('mobileSearchPanel');
    mobileSearchPanel.classList.add('active');
}
function mobile_cross(){
    var mobileSearchPanel= document.getElementById('mobileSearchPanel');
    mobileSearchPanel.classList.remove('active');
}

function register(){
    var main_login_area= document.getElementById('main_login_area');
    var log_text= document.getElementById('log_text');
    main_login_area.classList.add('active');
    log_text.classList.add('active');
    log_text.classList.remove('for_pass');
    main_login_area.classList.remove('forgot');
    social_del_back.classList.remove('social_button_off');
}
function login(){
    var main_login_area= document.getElementById('main_login_area');
    var log_text= document.getElementById('log_text');
    main_login_area.classList.remove('active');
    log_text.classList.remove('active')
}

function forgot(){
    var main_login_area= document.getElementById('main_login_area');
    var social_del_back= document.getElementById('social_del_back');
    log_text.classList.add('for_pass');
    social_del_back.classList.add('social_button_off');
    main_login_area.classList.add('forgot');
}

function mobile_log_cross(){
    var login_register_back= document.getElementById('login_register_back');
    login_register_back.classList.remove('open')
}
function log_click(){
    var login_register_back= document.getElementById('login_register_back');
    login_register_back.classList.add('open') 
}

function after_log_click(){
    var custom_button= document.getElementById('custom_button');
    custom_button.classList.toggle('active')
}

function cart_pop_up_section(){
    var cart_pop_up_section= document.getElementById('cart_pop_up_section');
    cart_pop_up_section.classList.toggle('active')
}


// Add minus icon for collapse element which is open by default
jQuery(".collapse.show").each(function(){
    jQuery(this).prev(".card-header").find(".icon").addClass("arrow_down").removeClass("arrow_up");
  });
  
  // Toggle plus minus icon on show hide of collapse element
  jQuery(".collapse").on('show.bs.collapse', function(){
    jQuery(this).prev(".card-header").find(".icon").removeClass("arrow_down").addClass("arrow_up");
  }).on('hide.bs.collapse', function(){
    jQuery(this).prev(".card-header").find(".icon").removeClass("arrow_up").addClass("arrow_down");
  });


  jQuery(".card .card-header:first").addClass("active").show(); //Activate first tab

  jQuery(".card-header").on('click', '.card-header', function(){    
    if (jQuery(this).find('.accordion-toggle').hasClass('active')) {        
    }
    

 })

 $('.woocommerce').addClass('container');



 var owl = $('.owl-carousel');
 function changeActive(e) {
    // Remove o seletor classe de todos item
    $('.owl-stage .owl-item').removeClass('ativo');
    setTimeout(function() {
      // Adiciona o seletor classe nos item da pagina ativa
      var current = e.relatedTarget.current()
      $('.owl-item').eq(current).addClass("ativo"); 
      console.log(e.relatedTarget.current())

    },5);
    setTimeout(() => {
        if($('.owl-carousel .owl-item').first().hasClass('active')){
            $('.customPrevBtn').hide();
            $('.customNextBtn').show();
            $('.cancleButton').show();
            $('.customBookBtn').hide();
            $('.sessionBtn').show();
         } else if($('.owl-carousel .owl-item').last().hasClass('active')){
            $('.customPrevBtn').show();
            $('.customNextBtn').hide();            
            $('.cancleButton').hide();
            $('.customBookBtn').show();
            $('.sessionBtn').hide();
         }else{
            $('.customPrevBtn').show();
            $('.customNextBtn').show();
            $('.cancleButton').hide();
            $('.customBookBtn').hide();
            $('.sessionBtn').hide();
         }
    }, 10);
    setTimeout(() => {
        jQuery('.ativo li').click();
    }, 20);
  }

  //owl.on('initialized.owl.carousel', changeActive);
 owl.owlCarousel({
     loop: false,
     dots: false,
     nav:true,
     navText: [
         ("<span><i class='fa fa-angle-left'></i></span>"),
         ("<span><i class='fa fa-angle-right'></i></span>")
     ],
     autoplay:false,
     autoplayTimeout:2000,
     autoplayHoverPause:true,
     center:false,
     margin: 0,
     onChanged: changeActive,
     onTranslate: changeActive,
     responsive:{
         0:{
             items: 1,
             margin: 0,
         },
         600:{
             items: 2,
             margin: 0,
         },
         1000:{
             items: 4
         }
     }
 });

 $('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
});
$('.customPrevBtn').click(function() {
    owl.trigger('prev.owl.carousel');
});



 var book= document.getElementsByClassName('book');
 var schedule_live_course_popup= document.getElementById('schedule_live_course_popup');
 for(let i=0; i<book.length; i++){
    book[i].addEventListener('click', function(){
        schedule_live_course_popup.classList.add('active');
     })
 }

function live_course_close(){
    schedule_live_course_popup.classList.remove('active');
}



let tab_box = document.querySelectorAll('.tab_box');
let content_area = document.querySelectorAll('.content_area');
let owl_item= document.querySelectorAll('owl-item');

for(let i=0; i<tab_box.length; i++){
    tab_box[i].addEventListener('click', function(){
        for(let i=0; i<content_area.length; i++){
            content_area[i].className= 'content_area';
        }
        document.getElementById(this.dataset.id).className = 'content_area content_active';
        for(let i=0; i<tab_box.length; i++){
            tab_box[i].className= 'tab_box';
            this.className = 'tab_box tab_active';
        }
    })
};

// if($('.owl-item').className('ativo')){
//     tab_box[i].addEventListener('click', function(){
//         for(let i=0; i<content_area.length; i++){
//             content_area[i].className= 'content_area';
//         }
//         document.getElementById(this.dataset.id).className = 'content_area active';
//         for(let i=0; i<tab_box.length; i++){
//             tab_box[i].className= 'tab_box';
//             this.className = 'tab_box active';
//         }
//     })
// }else{
//     content_area[i].className= 'content_area';
// }


jQuery(document).ready(function() {
    jQuery('.tab_box').click(function(){
        jQuery('.activo').removeClass('activo')
        jQuery(this).parent().addClass('activo')
    })

})
 
