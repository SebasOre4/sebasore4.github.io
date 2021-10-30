var userMenu = document.getElementById('user-menu').classList;

function controlUserMenu(){
    if (userMenu.contains('user-menu--on')) {
        userMenu.remove('user-menu--on');
    }else{
        userMenu.add('user-menu--on');
    }
}