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

