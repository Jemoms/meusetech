(function(){$(".notifs-menu").on("mouseenter",".notifs-unreaded",function(){var t;t=void 0,$(this).removeClass("notifs-unreaded"),t=$(this),$.post({url:$(this).data("url"),dataType:"json",success:function(n){var o,s;return o=void 0,s=void 0,n.success===!0&&(o=$(".notifCount").html(),s=o-1,$(".notifCount").html(s),t.find("span").fadeOut(),0===s)?$(".notifCount").fadeOut():void 0}})})}).call(this);