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



