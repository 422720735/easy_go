var Pagination={showPageCount:7,init:function(obj,callback,topFlag){this.bindListener(obj,callback,topFlag);},createHtml:function(pageIndex,recordCount,pageSize){var pageCount=Math.ceil(recordCount/pageSize);var showPageCount=this.showPageCount;var MaxCount=10000000000;var HalfPageCount=(showPageCount+1)/2;var html=[];if(pageCount>MaxCount){pageCount=MaxCount;}
        if(pageIndex>pageCount-1){pageIndex=pageCount-1;}
        html.push("<span class=\"total\">共"+recordCount+"条</span>");if(pageIndex>0){html.push("<span class=\"previous\"><a href=\"javascript:;\" page= "+(pageIndex-1)+" data-rec=\"上一页\"></a></span>");}
        else{html.push("<span class=\"disable previous\"></span>");}
        if(pageCount<=showPageCount){for(var i=0;i<pageCount;i++){if(pageIndex==i){html.push("<span class=\"current num\">"+(i+1)+"</span>");}
        else{html.push("<span class=\"num\"><a href=\"javascript:;\"  page="+i+">"+(i+1)+"</a></span>");}}}
        else if(pageIndex<HalfPageCount){for(var i=0;i<showPageCount-1;i++){if(pageIndex==i){html.push("<span class=\"current num\">"+(i+1)+"</span>");}
        else{html.push("<span class=\"num\"><a href=\"javascript:;\"  page="+i+">"+(i+1)+"</a></span>");}}
            html.push("<span class=\"dots\">...</span>");html.push("<span class=\"num\"><a href=\"javascript:;\"  page="+(pageCount-1)+">"+pageCount+"</a></span>");}
        else if(pageIndex>=pageCount-HalfPageCount-1){html.push("<span class=\"num\"><a href=\"javascript:;\" page='0'>"+1+"</a></span>");html.push("<span class=\"dots\">...</span>");for(var i=pageCount-showPageCount+1;i<pageCount;i++){if(pageIndex==i){html.push("<span class=\"current num\">"+(i+1)+"</span>");}
        else{html.push("<span class=\"num\"><a href=\"javascript:;\" page="+i+">"+(i+1)+"</a></span>");}}}
        else{html.push("<span class=\"num\"><a href=\"javascript:;\" page=0>"+1+"</a></span>");html.push("<span class=\"dots\">...</span>");for(var i=pageIndex-HalfPageCount/2;i<=pageIndex+HalfPageCount/2;i++){if(pageIndex==i){html.push("<span class=\"current num\">"+(i+1)+"</span>");}
        else{html.push("<span class=\"num\"><a href=\"javascript:;\" page="+i+">"+(i+1)+"</a></span>");}}
            html.push("<span class=\"dots\">...</span>");html.push("<span class=\"num\"><a href=\"javascript:;\" page ="+(pageCount-1)+">"+pageCount+"</a></span>");}
        if(pageIndex<pageCount-1){html.push("<span class=\"next\"><a href=\"javascript:;\" page="+(pageIndex+1)+" data-rec=\"下一页\"></a></span>");}
        else{html.push("<span class=\"disable next\"></span>");}
        html.push("<span class=\"total total_page\">共"+pageCount+"页</span>");html.push("<span class=\"page_jump\">到</span><input id='pageInput' class='pageInput' oldpage='' maxlength='"+pageCount+"' type='text' ><span class=\"page_jump\">页</span><button type='button' id='pagebtn' class='pagebtn'>确定</button>");return html.join("");},bindListener:function(obj,callback,topFlag){var topFlag=topFlag||true;obj.on("click","a",function(){if(typeof callback==="function"){var index=$(this).attr("page");callback(parseInt(index));}
        if(topFlag){$(window).scrollTop(0);}
        return false;});obj.on("click","button",function(){var pageInput=obj.find('input');if(typeof callback==="function"){var index=pageInput.val();if(index==''){pageInput.focus();return false;}
        callback(parseInt(index)-1);}
        return false;});obj.on("keyup","input",function(e){switch(e.keyCode){case 37:break;case 38:break;case 39:break;case 40:break;case 13:changePage();break;case 8:$(e.target).attr('oldpage',$(e.target).val());break;case 46:$(e.target).attr('oldpage',$(e.target).val());break;default:validPage();}
        return false;});function changePage(){var pageInput=obj.find('input');var page=pageInput.val();var maxPage=parseInt(obj.find(".total_page").html().substring(1));var pattern=new RegExp("^[1-9]\\d{0,"+maxPage.toString().length+"}$");if(page.trim()==""){pageInput.focus();return;}
        if(pattern.test(page)){page=parseInt(page);maxPage=parseInt(maxPage);if(page>maxPage||page<0){pageInput.val("").focus();return;}}else{pageInput.val("").focus();return;}
        callback(parseInt(page)-1);}
        function validPage(){var pageInput=obj.find('input');var totalPageHtml=obj.find(".total_page").html();var maxPage=parseInt(totalPageHtml.substring(1,totalPageHtml.length-1));var page=pageInput.val();var pattern=/^[0-9]+$/;var oldpage=pageInput.attr("oldpage")||'';if(page.trim()==""){pageInput.val("");return;}
            if(!pattern.test(page)){pageInput.val(oldpage);return;}
            var pageInt=parseInt(page);if(page.substr(0,1)=='0'){pageInput.val(pageInt);}
            if(pageInt==0){pageInput.val('');return;}
            if(pageInt>parseInt(maxPage)){pageInput.val(page.substr(0,page.length-1));return;}
            pageInput.attr('oldpage',pageInput.val());}},Page:function(obj,pageIndex,recordCount,pageSize){obj.empty();obj.html(this.createHtml(pageIndex,recordCount,pageSize));}};