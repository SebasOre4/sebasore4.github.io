var sideBarClasses = document.getElementById('side-bar').classList;
var contentClasses = document.getElementById('content').classList;

function controlSideBar(){
    if (sideBarClasses.contains('side-bar--off')) {
        sideBarClasses.remove('side-bar--off');
        contentClasses.remove('content--off');
    }else{
        sideBarClasses.add('side-bar--off');
        contentClasses.add('content--off');
    }
}
