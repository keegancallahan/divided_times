// eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('$(u).v(g(){$(\'#3-4 .l\').i(\'m\',g(e){e.t();$(\'#3-4 .l\').o().8(\'7\');$(\'#3-4 .l\').r(\'7\');9($(\'#3-4 .l\').c(\'7\')){9($(\'#1-2\').c(\'0\')){$(\'#1-2 .5.0\').b().8(\'0\');$(\'.5.l\').d().6(\'0\')}f{$(\'#1-2 .5\').b();$(\'.5.l\').d().6(\'0\');$(\'#1-2\').s(a).6(\'0\')}}f{$(\'#1-2\').q(a).8(\'0\')}});$(\'#3-4 .k\').i(\'m\',g(e){e.t();$(\'#3-4 .k\').o().8(\'7\');$(\'#3-4 .k\').r(\'7\');9($(\'#3-4 .k\').c(\'7\')){9($(\'#1-2\').c(\'0\')){$(\'#1-2 .5.0\').b().8(\'0\');$(\'.5.k\').d().6(\'0\')}f{$(\'#1-2 .5\').b();$(\'.5.k\').d().6(\'0\');$(\'#1-2\').s(a).6(\'0\')}}f{$(\'#1-2\').q(a).8(\'0\')}});$(\'#3-4 .n\').i(\'m\',g(e){e.t();$(\'#3-4 .n\').o().8(\'7\');$(\'#3-4 .n\').r(\'7\');9($(\'#3-4 .n\').c(\'7\')){9($(\'#1-2\').c(\'0\')){$(\'#1-2 .5.0\').b().8(\'0\');$(\'.5.n\').d().6(\'0\')}f{$(\'#1-2 .5\').b();$(\'.5.n\').d().6(\'0\');$(\'#1-2\').s(a).6(\'0\')}}f{$(\'#1-2\').q(a).8(\'0\')}});$(\'#3-4 .j\').i(\'m\',g(e){e.t();$(\'#3-4 .j\').o().8(\'7\');$(\'#3-4 .j\').r(\'7\');9($(\'#3-4 .j\').c(\'7\')){9($(\'#1-2\').c(\'0\')){$(\'#1-2 .5.0\').b().8(\'0\');$(\'.5.j\').d().6(\'0\')}f{$(\'#1-2 .5\').b();$(\'.5.j\').d().6(\'0\');$(\'#1-2\').s(a).6(\'0\')}}f{$(\'#1-2\').q(a).8(\'0\')}});$(\'#3-4 .h\').i(\'m\',g(e){e.t();$(\'#3-4 .h\').o().8(\'7\');$(\'#3-4 .h\').r(\'7\');9($(\'#3-4 .h\').c(\'7\')){9($(\'#1-2\').c(\'0\')){$(\'#1-2 .5.0\').b().8(\'0\');$(\'.5.h\').d().6(\'0\')}f{$(\'#1-2 .5\').b();$(\'.5.h\').d().6(\'0\');$(\'#1-2\').s(a).6(\'0\')}}f{$(\'#1-2\').q(a).8(\'0\')}});$(\'#3-4 .p\').i(\'m\',g(e){e.t();$(\'#3-4 .p\').o().8(\'7\');$(\'#3-4 .p\').r(\'7\');9($(\'#3-4 .p\').c(\'7\')){9($(\'#1-2\').c(\'0\')){$(\'#1-2 .5.0\').b().8(\'0\');$(\'.5.p\').d().6(\'0\')}f{$(\'#1-2 .5\').b();$(\'.5.p\').d().6(\'0\');$(\'#1-2\').s(a).6(\'0\')}}f{$(\'#1-2\').q(a).8(\'0\')}})});',32,32,'open|slide|down|primary|nav|drop|addClass|active|removeClass|if|150|hide|hasClass|show||else|function|culture|on|technology|politics|international|click|business|siblings|blogs|slideUp|toggleClass|slideDown|preventDefault|document|ready'.split('|'),0,{}))


$(document).ready(function() {
    $("#primary-nav .international").on("click", function(e) {
        e.preventDefault();
        $("#primary-nav .international").siblings().removeClass("active");
        $("#primary-nav .international").toggleClass("active");
        if ($("#primary-nav .international").hasClass("active")) {
            if ($("#slide-down").hasClass("open")) {
                $("#slide-down .drop.open").hide().removeClass("open");
                $(".drop.international").show().addClass("open");
            } else {
                $("#slide-down .drop").hide();
                $(".drop.international").show().addClass("open");
                $("#slide-down").slideDown().addClass("open");
            }
        } else {
            $("#slide-down").slideUp().removeClass("open");
        }
    });
    $("#primary-nav .politics").on("click", function(e) {
        e.preventDefault();
        $("#primary-nav .politics").siblings().removeClass("active");
        $("#primary-nav .politics").toggleClass("active");
        if ($("#primary-nav .politics").hasClass("active")) {
            if ($("#slide-down").hasClass("open")) {
                $("#slide-down .drop.open").hide().removeClass("open");
                $(".drop.politics").show().addClass("open");
            } else {
                $("#slide-down .drop").hide();
                $(".drop.politics").show().addClass("open");
                $("#slide-down").slideDown().addClass("open");
            }
        } else {
            $("#slide-down").slideUp().removeClass("open");
        }
    });
    $("#primary-nav .business").on("click", function(e) {
      e.preventDefault();
      $("#primary-nav .business").siblings().removeClass("active");
      $("#primary-nav .business").toggleClass("active");
      if ($("#primary-nav .business").hasClass("active")) {
        if ($("#slide-down").hasClass("open")) {
            $("#slide-down .drop.open").hide().removeClass("open");
            $(".drop.business").show().addClass("open");
        } else {
            $("#slide-down .drop").hide();
            $(".drop.business").show().addClass("open");
            $("#slide-down").slideDown().addClass("open");
        }
      } else {
          $("#slide-down").slideUp().removeClass("open");
      }
    });
    $("#primary-nav .technology").on("click", function(e) {
      e.preventDefault();
      $("#primary-nav .technology").siblings().removeClass("active");
      $("#primary-nav .technology").toggleClass("active");
      if ($("#primary-nav .technology").hasClass("active")) {
        if ($("#slide-down").hasClass("open")) {
            $("#slide-down .drop.open").hide().removeClass("open");
            $(".drop.technology").show().addClass("open");
        } else {
          $("#slide-down .drop").hide();
          $(".drop.technology").show().addClass("open");
          $("#slide-down").slideDown().addClass("open");
        }
      } else {
        $("#slide-down").slideUp().removeClass("open");
      }
    });
    $("#primary-nav .culture").on("click", function(e) {
      e.preventDefault();
      $("#primary-nav .culture").siblings().removeClass("active");
      $("#primary-nav .culture").toggleClass("active");
      if ($("#primary-nav .culture").hasClass("active")) {
        if ($("#slide-down").hasClass("open")) {
            $("#slide-down .drop.open").hide().removeClass("open");
            $(".drop.culture").show().addClass("open");
        } else {
          $("#slide-down .drop").hide();
          $(".drop.culture").show().addClass("open");
          $("#slide-down").slideDown().addClass("open");
        }
      } else {
        $("#slide-down").slideUp().removeClass("open");
      }
    });
    $("#primary-nav .blogs").on("click", function(e) {
      e.preventDefault();
      $("#primary-nav .blogs").siblings().removeClass("active");
      $("#primary-nav .blogs").toggleClass("active");
      if ($("#primary-nav .blogs").hasClass("active")) {
        if ($("#slide-down").hasClass("open")) {
            $("#slide-down .drop.open").hide().removeClass("open");
            $(".drop.blogs").show().addClass("open");
        } else {
          $("#slide-down .drop").hide();
          $(".drop.blogs").show().addClass("open");
          $("#slide-down").slideDown().addClass("open");
        }
      } else {
        $("#slide-down").slideUp().removeClass("open");
      }
    });
});
