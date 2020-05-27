/*=========================================================== [ Define App's Object ] =======================================================================*/

if (typeof window.App == 'undefined' || !window.App) {
    window.App = {};
}

App.namespace = function (ns_string) {
    let parts = ns_string.split('.'), parent = App, i; // 처음에 중복되는 전역 객체명은 제거한다.
    if (parts[0] === 'App') {
        parts = parts.slice(1);
    }

    for (i = 0; i < parts.length; i++ ) {
        if (typeof parent[parts[i]] === 'undefined') {
            parent[parts[i]] = {};
        }

        parent = parent[parts[i]];
    }

    return parent;
};

// namespace 구성
App.namespace('App.ui');
App.namespace('App.content');


/*=========================================================== [ Global Event  ] =======================================================================*/
if (typeof window.GlobalEvent == 'undefined' || !window.GlobalEvent) {
    window.GlobalEvent = {};
    window.GlobalEvent.CHANGE_SCROLL = "change_scroll";
    window.GlobalEvent.CHANGE_RESIZE = "change_resize";
    window.GlobalEvent.CHANGE_DEVICE_SIZE = "change_device_size";
    window.GlobalEvent.MOUSE_WHEEL = "mousewheel";
}

/*=========================================================== [ App Start ] =======================================================================*/

// Module Loading!
define(['jquery', 'swiper'], function ($, Swiper) {

    (function(ns){
        const Common = (function(){
            var _init = function(){

                ns.ui.main.init();



                var mySwiper = new Swiper ('.swiper-container', {
                    // Optional parameters
                    loop: true,

                    // If we need pagination
                    pagination: {
                        el: '.swiper-pagination',
                    },

                    // Navigation arrows
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },


                })

            };

            return {
                init: _init
            }
        })();

        ns.common = Common;

    }(App || {}));

    $(document).ready(function(){
        App.common.init();
        $('#app').addClass('show');
    });
});


