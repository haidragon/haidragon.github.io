/*!
 * see https://github.com/jieyou/lazyload
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(window.jQuery||window.Zepto)}(function(t,e){var a,r,n=window,o=t(n),l={threshold:0,failure_limit:0,event:"scroll",effect:"show",effect_params:null,container:n,data_attribute:"original",data_srcset_attribute:"original-srcset",skip_invisible:!0,appear:i,load:i,vertical_only:!1,check_appear_throttle_time:300,url_rewriter_fn:i,no_fake_img_loader:!1,placeholder_data_img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",placeholder_real_img:""};function i(){}function c(t,e){return(e._$container==o?("innerHeight"in n?n.innerHeight:o.height())+o.scrollTop():e._$container.offset().top+e._$container.height())<=t.offset().top-e.threshold}function f(t,e){return(e._$container==o?o.scrollTop():e._$container.offset().top)>=t.offset().top+e.threshold+t.height()}function _(e,a){var r=0;e.each(function(l,i){var _=e.eq(l);if(!(_.width()<=0&&_.height()<=0||"none"===_.css("display")))if(a.vertical_only)if(f(_,a));else if(c(_,a)){if(++r>a.failure_limit)return!1}else d();else if(f(_,a)||function(e,a){return(a._$container==o?t.fn.scrollLeft?o.scrollLeft():n.pageXOffset:a._$container.offset().left)>=e.offset().left+a.threshold+e.width()}(_,a));else if(c(_,a)||function(e,a){return(a._$container==o?o.width()+(t.fn.scrollLeft?o.scrollLeft():n.pageXOffset):a._$container.offset().left+a._$container.width())<=e.offset().left-a.threshold}(_,a)){if(++r>a.failure_limit)return!1}else d();function d(){_.trigger("_lazyload_appear"),r=0}})}function d(t){return t.filter(function(e){return!t.eq(e).data("_lazyload_loadStarted")})}r=Object.prototype.toString,a=function(t){return r.call(t).replace("[object ","").replace("]","")},t.fn.hasOwnProperty("lazyload")||(t.fn.lazyload=function(e){var r,c,f,s=this;return t.isPlainObject(e)||(e={}),t.each(l,function(r,i){var c=a(e[r]);-1!=t.inArray(r,["threshold","failure_limit","check_appear_throttle_time"])?"String"==c?e[r]=parseInt(e[r],10):"Number"!=c&&(e[r]=i):"container"==r?(e.hasOwnProperty(r)?e[r]==n||e[r]==document?e._$container=o:e._$container=t(e[r]):e._$container=o,delete e.container):!l.hasOwnProperty(r)||e.hasOwnProperty(r)&&c==a(l[r])||(e[r]=i)}),r="scroll"==e.event,f=0==e.check_appear_throttle_time?_:function(t,e){var a,r,n,o,l=0;return function(){a=this,r=arguments;var t=new Date-l;return o||(t>=e?i():o=setTimeout(i,e-t)),n};function i(){o=0,l=+new Date,n=t.apply(a,r),a=null,r=null}}(_,e.check_appear_throttle_time),c=r||"scrollstart"==e.event||"scrollstop"==e.event,s.each(function(a,r){var n=this,o=s.eq(a),l=o.attr("src"),f=o.attr("data-"+e.data_attribute),_=e.url_rewriter_fn==i?f:e.url_rewriter_fn.call(n,o,f),u=o.attr("data-"+e.data_srcset_attribute),h=o.is("img");if(o.data("_lazyload_loadStarted")||l==_)return o.data("_lazyload_loadStarted",!0),void(s=d(s));o.data("_lazyload_loadStarted",!1),h&&!l&&o.one("error",function(){o.attr("src",e.placeholder_real_img)}).attr("src",e.placeholder_data_img),o.one("_lazyload_appear",function(){var a,r=t.isArray(e.effect_params);function l(){a&&o.hide(),h?(u&&o.attr("srcset",u),_&&o.attr("src",_)):o.css("background-image",'url("'+_+'")'),a&&o[e.effect].apply(o,r?e.effect_params:[]),s=d(s)}o.data("_lazyload_loadStarted")||(a="show"!=e.effect&&t.fn[e.effect]&&(!e.effect_params||r&&0==e.effect_params.length),e.appear!=i&&e.appear.call(n,o,s.length,e),o.data("_lazyload_loadStarted",!0),e.no_fake_img_loader||u?(e.load!=i&&o.one("load",function(){e.load.call(n,o,s.length,e)}),l()):t("<img />").one("load",function(){l(),e.load!=i&&e.load.call(n,o,s.length,e)}).attr("src",_))}),c||o.on(e.event,function(){o.data("_lazyload_loadStarted")||o.trigger("_lazyload_appear")})}),c&&e._$container.on(e.event,function(){f(s,e)}),o.on("resize load",function(){f(s,e)}),t(function(){f(s,e)}),this})});


!function(){var a=jQuery.event.special,b="D"+ +new Date,c="D"+(+new Date+1);a.scrollstart={setup:function(){var c,d=function(b){var d=this,e=arguments;c?clearTimeout(c):(b.type="scrollstart",jQuery.event.dispatch.apply(d,e)),c=setTimeout(function(){c=null},a.scrollstop.latency)};jQuery(this).bind("scroll",d).data(b,d)},teardown:function(){jQuery(this).unbind("scroll",jQuery(this).data(b))}},a.scrollstop={latency:300,setup:function(){var b,d=function(c){var d=this,e=arguments;b&&clearTimeout(b),b=setTimeout(function(){b=null,c.type="scrollstop",jQuery.event.dispatch.apply(d,e)},a.scrollstop.latency)};jQuery(this).bind("scroll",d).data(c,d)},teardown:function(){jQuery(this).unbind("scroll",jQuery(this).data(c))}}}();


// Infinite Ajax Scroll, a jQuery plugin 1.0.2
(function(e){"use strict";Date.now=Date.now||function(){return+(new Date)},e.ias=function(t){function u(){var t;i.onChangePage(function(e,t,r){s&&s.setPage(e,r),n.onPageChange.call(this,e,r,t)});if(n.triggerPageThreshold>0)a();else if(e(n.next).attr("href")){var u=r.getCurrentScrollOffset(n.scrollContainer);E(function(){p(u)})}return s&&s.havePage()&&(l(),t=s.getPage(),r.forceScrollTop(function(){var n;t>1?(v(t),n=h(!0),e("html, body").scrollTop(n)):a()})),o}function a(){c(),n.scrollContainer.scroll(f)}function f(){var e,t;e=r.getCurrentScrollOffset(n.scrollContainer),t=h(),e>=t&&(m()>=n.triggerPageThreshold?(l(),E(function(){p(e)})):p(e))}function l(){n.scrollContainer.unbind("scroll",f)}function c(){e(n.pagination).hide()}function h(t){var r,i;return r=e(n.container).find(n.item).last(),r.size()===0?0:(i=r.offset().top+r.height(),t||(i+=n.thresholdMargin),i)}function p(t,r){var s;s=e(n.next).attr("href");if(!s)return n.noneleft&&e(n.container).find(n.item).last().after(n.noneleft),l();if(n.beforePageChange&&e.isFunction(n.beforePageChange)&&n.beforePageChange(t,s)===!1)return;i.pushPages(t,s),l(),y(),d(s,function(t,i){var o=n.onLoadItems.call(this,i),u;o!==!1&&(e(i).hide(),u=e(n.container).find(n.item).last(),u.after(i),e(i).fadeIn()),s=e(n.next,t).attr("href"),e(n.pagination).replaceWith(e(n.pagination,t)),b(),c(),s?a():l(),n.onRenderComplete.call(this,i),r&&r.call(this)})}function d(t,r,i){var s=[],o,u=Date.now(),a,f;i=i||n.loaderDelay,e.get(t,null,function(t){o=e(n.container,t).eq(0),0===o.length&&(o=e(t).filter(n.container).eq(0)),o&&o.find(n.item).each(function(){s.push(this)}),r&&(f=this,a=Date.now()-u,a<i?setTimeout(function(){r.call(f,t,s)},i-a):r.call(f,t,s))},"html")}function v(t){var n=h(!0);n>0&&p(n,function(){l(),i.getCurPageNum(n)+1<t?(v(t),e("html,body").animate({scrollTop:n},400,"swing")):(e("html,body").animate({scrollTop:n},1e3,"swing"),a())})}function m(){var e=r.getCurrentScrollOffset(n.scrollContainer);return i.getCurPageNum(e)}function g(){var t=e(".ias_loader");return t.size()===0&&(t=e('<div class="ias_loader">'+n.loader+"</div>"),t.hide()),t}function y(){var t=g(),r;n.customLoaderProc!==!1?n.customLoaderProc(t):(r=e(n.container).find(n.item).last(),r.after(t),t.fadeIn())}function b(){var e=g();e.remove()}function w(t){var r=e(".ias_trigger");return r.size()===0&&(r=e('<div class="ias_trigger"><a href="#">'+n.trigger+"</a></div>"),r.hide()),e("a",r).unbind("click").bind("click",function(){return S(),t.call(),!1}),r}function E(t){var r=w(t),i;n.customTriggerProc!==!1?n.customTriggerProc(r):(i=e(n.container).find(n.item).last(),i.after(r),r.fadeIn())}function S(){var e=w();e.remove()}var n=e.extend({},e.ias.defaults,t),r=new e.ias.util,i=new e.ias.paging(n.scrollContainer),s=n.history?new e.ias.history:!1,o=this;u()},e.ias.defaults={container:"#container",scrollContainer:e(window),item:".item",pagination:"#pagination",next:".next",noneleft:!1,loader:'<img src="images/loader.gif"/>',loaderDelay:600,triggerPageThreshold:3,trigger:"Load more items",thresholdMargin:0,history:!0,onPageChange:function(){},beforePageChange:function(){},onLoadItems:function(){},onRenderComplete:function(){},customLoaderProc:!1,customTriggerProc:!1},e.ias.util=function(){function i(){e(window).load(function(){t=!0})}var t=!1,n=!1,r=this;i(),this.forceScrollTop=function(i){e("html,body").scrollTop(0),n||(t?(i.call(),n=!0):setTimeout(function(){r.forceScrollTop(i)},1))},this.getCurrentScrollOffset=function(e){var t,n;return e.get(0)===window?t=e.scrollTop():t=e.offset().top,n=e.height(),t+n}},e.ias.paging=function(){function s(){e(window).scroll(o)}function o(){var t,s,o,f,l;t=i.getCurrentScrollOffset(e(window)),s=u(t),o=a(t),r!==s&&(f=o[0],l=o[1],n.call({},s,f,l)),r=s}function u(e){for(var n=t.length-1;n>0;n--)if(e>t[n][0])return n+1;return 1}function a(e){for(var n=t.length-1;n>=0;n--)if(e>t[n][0])return t[n];return null}var t=[[0,document.location.toString()]],n=function(){},r=1,i=new e.ias.util;s(),this.getCurPageNum=function(t){return t=t||i.getCurrentScrollOffset(e(window)),u(t)},this.onChangePage=function(e){n=e},this.pushPages=function(e,n){t.push([e,n])}},e.ias.history=function(){function n(){t=!!(window.history&&history.pushState&&history.replaceState),t=!1}var e=!1,t=!1;n(),this.setPage=function(e,t){this.updateState({page:e},"",t)},this.havePage=function(){return this.getState()!==!1},this.getPage=function(){var e;return this.havePage()?(e=this.getState(),e.page):1},this.getState=function(){var e,n,r;if(t){n=history.state;if(n&&n.ias)return n.ias}else{e=window.location.hash.substring(0,7)==="#/page/";if(e)return r=parseInt(window.location.hash.replace("#/page/",""),10),{page:r}}return!1},this.updateState=function(t,n,r){e?this.replaceState(t,n,r):this.pushState(t,n,r)},this.pushState=function(n,r,i){var s;t?history.pushState({ias:n},r,i):(s=n.page>0?"#/page/"+n.page:"",window.location.hash=s),e=!0},this.replaceState=function(e,n,r){t?history.replaceState({ias:e},n,r):this.pushState(e,n,r)}}})(jQuery);

jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        var path = options.path ? '; path=' + options.path : '';
        var domain = options.domain ? '; domain=' + options.domain : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

+(function($) {
    var LS={
        get:function(dataKey){          
            if(window.localStorage){
                return localStorage.getItem(dataKey);
            }else{
                return $.cookie(dataKey);  
            }
        },
        set:function(key,value){            
            if(window.localStorage){
                localStorage[key]=value;
            }else{
                $.cookie(key,value);
            }
        },
        remove:function(key){
            if(window.localStorage){
                localStorage.removeItem(key);
            }else{
                $.cookie(key,undefined);
            }
        }
    }


    $('[data-event="rewards"]').on('click', function(){
        $('.rewards-popover-mask, .rewards-popover').fadeIn()
    })

    $('[data-event="rewards-close"]').on('click', function(){
        $('.rewards-popover-mask, .rewards-popover').fadeOut()
    })







    if( $('#focusslide').length ){

        var hswiper = new Swiper('#focusslide', {
            initialSlide: 0,
            loop: true,
            speed: 800,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })

        hswiper.el.onmouseover = function(){
            hswiper.autoplay.stop()
        }
        hswiper.el.onmouseleave = function(){
            hswiper.autoplay.start()
        }


    }




    if( $('body').hasClass('is-phone') && $('.article-content img, .woocommerce-Tabs-panel--description img').length ){

        var pics = $('.article-content img, .woocommerce-Tabs-panel--description img').map(function(index, elem) {
            return $(this).attr('src')
        })

        var timer = null

        $('.article-content img, .woocommerce-Tabs-panel--description img').each(function(index, el) {

            var prt = $(this).parent()
            var newsrc = prt.attr('href')
            var naw = prt[0].tagName == 'A' && /.(jpg|jpeg|webp|svg|bmp|png|gif)$/.test(newsrc.toLowerCase())
            
            if( naw ){
                prt.on('click', function(){
                    return false
                })
            }

            $(this).on('click', function(){

                if( prt[0].tagName !== 'A' || naw ){

                    clearTimeout(timer)

                    if( naw ){
                        pics[index] = newsrc
                    }
                        
                    var imgs = ''
                    for (var i = 0; i < pics.length; i++) {
                        imgs += '<div class="swiper-slide"><div class="swiper-zoom-container"><img src="'+ pics[i] +'"></div></div>'
                    }

                    var code = '<div class="swiper-container article-swiper-container">\
                        <div class="swiper-wrapper">'+ imgs +'</div>\
                        <div class="swiper-pagination"></div>\
                    </div>'

                    $('body').addClass('swiper-fixed').append(code)

                    var aswiper = new Swiper('.article-swiper-container', {
                        initialSlide: index,
                        zoom: {
                            maxRatio: 5
                        },
                        pagination: {
                            el: '.swiper-pagination',
                            type: 'fraction',
                        },
                        on:{
                            click: function(event){
                                timer = setTimeout(function(){
                                    $('body').removeClass('swiper-fixed')
                                    $('.article-swiper-container').remove()
                                    aswiper.destroy(true,true)
                                },50)
                            },
                            slideNextTransitionStart: function(event){
                                $('.article-swiper-container .swiper-slide-prev img').addClass('article-swiper-no-transition')
                            },
                            slidePrevTransitionStart: function(event){
                                $('.article-swiper-container .swiper-slide-next img').addClass('article-swiper-no-transition')
                            },
                            slideChange: function(event){
                                $('.article-swiper-container .article-swiper-no-transition').removeClass('article-swiper-no-transition')
                            }
                        },
                    })

                    return false
                    
                }
            
            })
        })
    
    }


    /*var el_carousel = $('.carousel')

    el_carousel.carousel({
        interval: 4000
    })

    if( el_carousel.length && $('body').hasClass('focusslide_s_m') ){
        var mc = new Hammer(el_carousel[0]);

        mc.on("panleft panright swipeleft swiperight", function(ev) {
            if( ev.type == 'swipeleft' || ev.type == 'panleft' ){
                el_carousel.carousel('next')
            }else if( ev.type == 'swiperight' || ev.type == 'panright' ){
                el_carousel.carousel('prev')
            }
            // el_carousel[0].textContent = ev.type +" gesture detected.";
        });
    }*/


    /* 
     * 
     * ====================================================================================================
    */
    $('.m-search').on('click', function(){
        $('.search-form').slideToggle(200, function(){
            if( $('.m-search').css('display') == 'block' ){
                $('.search-form .form-control').focus()
            }
        })
    })



    $('.navmore').on('click', function(){
        $('body').toggleClass('navshows');
    })


    $('body').append('<div class="rollto"><a href="javascript:;"></a></div>')

    // lazy avatar
    $('.content .avatar').lazyload({
        placeholder: jui.uri + '/images/avatar-default.png',
        event: 'scroll',
        threshold : 1000
    });

    $('.sidebar .avatar').lazyload({
        placeholder: jui.uri + '/images/avatar-default.png',
        event: 'scroll',
        threshold : 1000
    });

    $('.content .thumb').lazyload({
        placeholder: jui.uri + '/images/thumbnail.png',
        event: 'scroll',
        threshold : 1000,
    });

    $('.sidebar .thumb').lazyload({
        placeholder: jui.uri + '/images/thumbnail.png',
        event: 'scroll',
        threshold : 1000
    });

    $('.content .wp-smiley').lazyload({
        event: 'scroll',
        threshold : 1000
    });

    $('.sidebar .wp-smiley').lazyload({
        event: 'scroll',
        threshold : 1000
    });

    $('#postcomments img').lazyload({
        event: 'scroll',
        threshold : 1000
    });


    var elments = {
        sidebar: $('.sidebar'),
        footer: $('.footer')
    }

    $('.feed-weixin').popover({
        placement: $('body').hasClass('ui-navtop')?'bottom':'right',
        trigger: 'hover',
        container: 'body',
        html: true
    })

    if( Number(jui.ajaxpager) ){
        $.ias({
            triggerPageThreshold: jui.ajaxpager?Number(jui.ajaxpager)+1:5,
            history: false,
            container : '.content',
            item: '.excerpt',
            pagination: '.pagination',
            next: '.next-page a',
            loader: '<div class="pagination-loading"><img src="'+jui.uri+'/images/ajax-loader.gif"></div>',
            trigger: 'More',
            onRenderComplete: function() {
                $('.excerpt .thumb').each(function(index, el) {
                    $(this).lazyload({
                        placeholder: jui.uri + '/images/thumbnail.png',
                        threshold: 1000
                    });
                });
            }
        });
    }


    /* 
     * page search
     * ====================================================
    */
    if( $('body').hasClass('search-results') ){
        var val = $('.search-form .form-control').val()
        var reg = eval('/'+val+'/i')
        $('.excerpt h2 a, .excerpt .note').each(function(){
            $(this).html( $(this).text().replace(reg, function(w){ return '<span style="color:#FF5E52;">'+w+'</span>' }) )
        })
    }

    if( elments.sidebar.length && jui.roll ){

        jui.roll = jui.roll.split(' ')

    	var h1 = 20, h2 = 40, h3 = 20

    	if( $('body').hasClass('ui-navtop') ){
    		h1 = 100, h2 = 120
    	}

        var rollFirst = elments.sidebar.find('.widget:eq('+(Number(jui.roll[0])-1)+')')
        if( rollFirst.length ){
            var sheight = rollFirst[0].offsetHeight
            if( sheight ){
                rollFirst.on('affix-top.bs.affix', function(){
                    rollFirst.css({top: 0}) 
                    sheight = rollFirst[0].offsetHeight

                    for (var i = 1; i < jui.roll.length; i++) {
                        var item = Number(jui.roll[i])-1
                        var current = elments.sidebar.find('.widget:eq('+item+')')
                        current.removeClass('affix').css({top: 0})
                    };
                })

                rollFirst.on('affix.bs.affix', function(){
                    rollFirst.css({top: h1}) 

                    for (var i = 1; i < jui.roll.length; i++) {
                        var item = Number(jui.roll[i])-1
                        var current = elments.sidebar.find('.widget:eq('+item+')')
                        current.addClass('affix').css({top: sheight+h2})
                        sheight += current[0].offsetHeight + h3
                    };
                })

                rollFirst.affix({
                    offset: {
                        top: elments.sidebar.height(),
                        bottom: (elments.footer.height()||0) + 10
                    }
                })
            }
        }
    }

    $('.excerpt header small').each(function() {
        $(this).tooltip({
            container: 'body',
            title: '此文有 ' + $(this).text() + '张 图片'
        })
    })

    $('.article-tags a, .post-tags a').each(function() {
        $(this).tooltip({
            container: 'body',
            placement: 'bottom',
            title: '查看关于 ' + $(this).text() + ' 的文章'
        })
    })

    $('.cat').each(function() {
        $(this).tooltip({
            container: 'body',
            title: '查看关于 ' + $(this).text() + ' 的文章'
        })
    })

    $('.widget_tags a').tooltip({
        container: 'body'
    })

    $('.readers a, .widget_comments a').tooltip({
        container: 'body',
        placement: 'top'
    })

    $('.article-meta li:eq(1) a').tooltip({
        container: 'body',
        placement: 'bottom'
    })
    $('.post-edit-link').tooltip({
        container: 'body',
        placement: 'right',
        title: '去后台编辑此文章'
    })


    if ($('.article-content').length){
        $('.article-content img').attr('data-tag', 'bdshare')

        video_ok()
        $(window).resize(function(event) {
            video_ok()
        });
    }

    function video_ok(){
        $('.article-content embed, .article-content video, .article-content iframe').each(function(){
            var w = $(this).attr('width'),
                h = $(this).attr('height')
            if( h ){
                $(this).css('height', $(this).width()/(w/h))
            }
        })
    }


    $('.rollto a').on('click', function() {
        scrollTo()
    })

    $(window).scroll(function() {
        var scroller = $('.rollto');
        document.documentElement.scrollTop + document.body.scrollTop > 200 ? scroller.fadeIn() : scroller.fadeOut();
    })

    /* functions
     * ====================================================
     */
    function scrollTo(name, speed) {
        if (!speed) speed = 300
        if (!name) {
            $('html,body').animate({
                scrollTop: 0
            }, speed)
        } else {
            if ($(name).length > 0) {
                $('html,body').animate({
                    scrollTop: $(name).offset().top
                }, speed)
            }
        }
    }
    

    var islogin = false
    if( $('body').hasClass('logged-in') ) islogin = true

    /* event click
     * ====================================================
     */
    $(document).on('click', function(e) {
        e = e || window.event;
        var target = e.target || e.srcElement,
            _ta = $(target)

        if (_ta.hasClass('disabled')) return
        if (_ta.parent().attr('data-event')) _ta = $(_ta.parent()[0])
        if (_ta.parent().parent().attr('data-event')) _ta = $(_ta.parent().parent()[0])

        var type = _ta.attr('data-event')

        switch (type) {
            case 'like':
                var pid = _ta.attr('data-pid')
                if ( !pid || !/^\d{1,}$/.test(pid) ) return;
                
                if( !islogin ){
                    var lslike = LS.get('_likes') || ''
                    if( lslike.indexOf(','+pid+',')!==-1 ) return alert('你已赞！')

                    if( !lslike ){
                        LS.set('_likes', ','+pid+',')
                    }else{
                        if( lslike.length >= 160 ){
                            lslike = lslike.substring(0,lslike.length-1)
                            lslike = lslike.substr(1).split(',')
                            lslike.splice(0,1)
                            lslike.push(pid)
                            lslike = lslike.join(',')
                            LS.set('_likes', ','+lslike+',')
                        }else{
                            LS.set('_likes', lslike+pid+',')
                        }
                    }
                }

                $.ajax({
                    url: jui.uri + '/actions/index.php',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        key: 'like',
                        pid: pid
                    },
                    success: function(data, textStatus, xhr) {
                        //called when successful
                        // console.log(data)
                        if (data.error) return false;
                        // console.log( data.response )
                        // if( data.type === 1 ){
                        _ta.toggleClass('actived')
                        _ta.find('span').html(data.response)
                        // }
                    },
                    error: function(xhr, textStatus, errorThrown) {
                        //called when there is an error
                        console.log(xhr)
                    }
                });

                break;
            case 'comment-user-change':
                $('#comment-author-info').slideDown(300)
                $('#comment-author-info input:first').focus()

                break;
            case 'login':
                $('#modal-login').modal('show')


                break;
        }
    })



    $('.commentlist .url').attr('target','_blank')
	
	/*$('#comment-author-info p input').focus(function() {
		$(this).parent('p').addClass('on')
	})
	$('#comment-author-info p input').blur(function() {
		$(this).parent('p').removeClass('on')
	})

	$('#comment').focus(function(){
		if( $('#author').val()=='' || $('#email').val()=='' ) $('.comt-comterinfo').slideDown(300)
	})*/

    var edit_mode = '0',
        txt1 = '<div class="comt-tip comt-loading">正在提交, 请稍候...</div>',
        txt2 = '<div class="comt-tip comt-error">#</div>',
        txt3 = '">',
        cancel_edit = '取消编辑',
        edit,
        num = 1,
        comm_array = [];
    comm_array.push('');

    $comments = $('#comments-title');
    $cancel = $('#cancel-comment-reply-link');
    cancel_text = $cancel.text();
    $submit = $('#commentform #submit');
    $submit.attr('disabled', false);
    $('.comt-tips').append(txt1 + txt2);
    $('.comt-loading').hide();
    $('.comt-error').hide();
    $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    $('#commentform').submit(function() {
        $('.comt-loading').show();
        $submit.attr('disabled', true).fadeTo('slow', 0.5);
        if (edit) $('#comment').after('<input type="text" name="edit_id" id="edit_id" value="' + edit + '" style="display:none;" />');
        $.ajax({
            url: jui.uri+'/modules/comment.php',
            data: $(this).serialize(),
            type: $(this).attr('method'),
            error: function(request) {
                $('.comt-loading').hide();
                $('.comt-error').show().html(request.responseText);
                setTimeout(function() {
                        $submit.attr('disabled', false).fadeTo('slow', 1);
                        $('.comt-error').fadeOut()
                    },
                    3000)
            },
            success: function(data) {
                $('.comt-loading').hide();
                comm_array.push($('#comment').val());
                $('textarea').each(function() {
                    this.value = ''
                });
                var t = addComment,
                    cancel = t.I('cancel-comment-reply-link'),
                    temp = t.I('wp-temp-form-div'),
                    respond = t.I(t.respondId),
                    post = t.I('comment_post_ID').value,
                    parent = t.I('comment_parent').value;
                if (!edit && $comments.length) {
                    n = parseInt($comments.text().match(/\d+/));
                    $comments.text($comments.text().replace(n, n + 1))
                }
                new_htm = '" id="new_comm_' + num + '"></';
                new_htm = (parent == '0') ? ('\n<ol style="clear:both;" class="commentlist commentnew' + new_htm + 'ol>') : ('\n<ul class="children' + new_htm + 'ul>');
                ok_htm = '\n<span id="success_' + num + txt3;
                ok_htm += '</span><span></span>\n';

                if (parent == '0') {
                    if ($('#postcomments .commentlist').length) {
                        $('#postcomments .commentlist').before(new_htm);
                    } else {
                        $('#respond').after(new_htm);
                    }
                } else {
                    $('#respond').after(new_htm);
                }

                $('#comment-author-info').slideUp()

                // console.log( $('#new_comm_' + num) )
                $('#new_comm_' + num).hide().append(data);
                $('#new_comm_' + num + ' li').append(ok_htm);
                $('#new_comm_' + num).fadeIn(1000);
                $body.animate({
                        scrollTop: $('#new_comm_' + num).offset().top - 200
                    },
                    500);
                $('.comt-avatar .avatar').attr('src', $('.commentnew .avatar:last').attr('src'));
                countdown();
                num++;
                edit = '';
                $('*').remove('#edit_id');
                cancel.style.display = 'none';
                cancel.onclick = null;
                t.I('comment_parent').value = '0';
                if (temp && respond) {
                    temp.parentNode.insertBefore(respond, temp);
                    temp.parentNode.removeChild(temp)
                }
            }
        });
        return false
    });
    addComment = {
        moveForm: function(commId, parentId, respondId, postId, num) {
            var t = this,
                div, comm = t.I(commId),
                respond = t.I(respondId),
                cancel = t.I('cancel-comment-reply-link'),
                parent = t.I('comment_parent'),
                post = t.I('comment_post_ID');
            if (edit) exit_prev_edit();
            num ? (t.I('comment').value = comm_array[num], edit = t.I('new_comm_' + num).innerHTML.match(/(comment-)(\d+)/)[2], $new_sucs = $('#success_' + num), $new_sucs.hide(), $new_comm = $('#new_comm_' + num), $new_comm.hide(), $cancel.text(cancel_edit)) : $cancel.text(cancel_text);
            t.respondId = respondId;
            postId = postId || false;
            if (!t.I('wp-temp-form-div')) {
                div = document.createElement('div');
                div.id = 'wp-temp-form-div';
                div.style.display = 'none';
                respond.parentNode.insertBefore(div, respond)
            }!comm ? (temp = t.I('wp-temp-form-div'), t.I('comment_parent').value = '0', temp.parentNode.insertBefore(respond, temp), temp.parentNode.removeChild(temp)) : comm.parentNode.insertBefore(respond, comm.nextSibling);
            $body.animate({
                    scrollTop: $('#respond').offset().top - 180
                },
                400);
            if (post && postId) post.value = postId;
            parent.value = parentId;
            cancel.style.display = '';
            cancel.onclick = function() {
                if (edit) exit_prev_edit();
                var t = addComment,
                    temp = t.I('wp-temp-form-div'),
                    respond = t.I(t.respondId);
                t.I('comment_parent').value = '0';
                if (temp && respond) {
                    temp.parentNode.insertBefore(respond, temp);
                    temp.parentNode.removeChild(temp)
                }
                this.style.display = 'none';
                this.onclick = null;
                return false
            };
            try {
                t.I('comment').focus()
            } catch (e) {}
            return false
        },
        I: function(e) {
            return document.getElementById(e)
        }
    };

    $('.comment-reply-link').on('click', function(){
        var that = $(this)
        if( !that.attr('onclick') && that.data('belowelement') && that.data('commentid') && that.data('respondelement') && that.data('postid') ){
            return addComment.moveForm( that.data('belowelement'), that.data('commentid'), that.data('respondelement'), that.data('postid') )
        }
    })

    function exit_prev_edit() {
        $new_comm.show();
        $new_sucs.show();
        $('textarea').each(function() {
            this.value = ''
        });
        edit = ''
    }
    var wait = 15,
        submit_val = $submit.val();

    function countdown() {
        if (wait > 0) {
            $submit.val(wait);
            wait--;
            setTimeout(countdown, 1000)
        } else {
            $submit.val(submit_val).attr('disabled', false).fadeTo('slow', 1);
            wait = 15
        }
    }



})(jQuery)