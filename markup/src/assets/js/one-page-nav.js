jQuery(function($) {
    var $menuHolder = $('#menu'),
        menu = [],
        sectionId = 0;

    $('.content-holder').find('h1,h2,h3,h4,h5').each(function(n) {
        var $el = $(this);
        var id = Date.now() + n;
        $el.attr('id', id);

        if ($el.is('h2') || $el.is('h1')) {
            sectionId = id;
            menu[sectionId] = {
                id: id,
                text: $el.text(),
                items: []
            }
        }
        else if (sectionId){
            menu[sectionId].items[id] = {
                id: id,
                text: $el.text(),
                items: []
            }
        }
    });

    if (Object.keys(menu)) {
        var $menu = buildMenuFromArray(menu);
        $menuHolder.append($menu);
        $menuHolder.find('ul').accordion({
          collapsible: true,
          icons: false,
          heightStyle: 'content'
        });
    }

    initAnchors();
});



function buildMenuFromArray(menu) {
    if (Object.keys(menu) == 0) return;
    var $menu = $('<ul class="anchor-links"/>');
    for (var menuKey in menu) {
        var menuItem = menu[menuKey];
        var $menuItem = $('<li></li>');
        var $submenu = buildMenuFromArray(menuItem.items);
        var $menuItemContent = $('<a href="#' + menuItem.id + '">' + menuItem.text + '</a>');
        if ($submenu) {
            $menuItemContent = $('<div class="opener-holder"></div>').append($menuItemContent).append('<a href="#" class="opener"></a>');
        }
        $menuItem.append($menuItemContent);
        $menuItem.append($submenu);
        $menu.append($menuItem);
    };
    return $menu;
}