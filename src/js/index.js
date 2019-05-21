/* 
* @Author: Marte
* @Date:   2019-05-09 21:02:47
* @Last Modified by:   Marte
* @Last Modified time: 2019-05-21 14:07:43
*/


$(function(){
        function renden(){
             $.ajax({
                type:'get',
                url:'api/listdata.php',
                success:function(str){
                create(str)
             }
        });
     }
          renden();
          function create(str){
            var arr =JSON.parse(str);
        var tmres =arr.temai.map(function(item){
            return ` <li data-id="${item.gid}">
                                    <a href="#" class="itemImg">
                                        <img src="img/${item.otherimg}" alt="" />
                                    </a>
                                    <a href="#" class="name">${item.title}纸盒装</a>
                                    <span class="saleprice">
                                        <span class="label">特卖价:</span>
                                        <span class="price">
                                            <span><b>¥</b>${item.price}</span>
                                            <del>¥188</del>
                                        </span>
                                    </span>
                                    <span class="process">
                                        <span class="txt">已售3%</span>
                                        <span class="pBar">
                                            <span class="p-top" style="width:3%;">
                                            </span>
                                            <span class="p-btm">
                                            </span></span></span>
                    </li>`;
                                }).join("");
                        $('.splist').html(tmres);
          }
          renden();

    $('.item').on('mouseover',function(){
        $(this).find('h3 a').css('color','#312B30').siblings().css('color','#fff');

        $(this).addClass('hover').siblings().attr('class','item');
        $(this).find('.sub-menu').css('display','block');
    })
    $('.item').mouseleave(function(){
        // console.log($(this));
        $(this).find('.sub-menu').css('display','none');
        $(this).find('h3 a').css('color','#fff');
        // $(this).removeClass('hover');
    });
    $('.brand').on('mouseover',function(){
       $(this).find('div').attr('class','name');
       $(this).find('img').hide();
    });
     $('.brand').on('mouseleave',function(){
       $(this).find('div').attr('class','hide');
       $(this).find('img').show();
    });
     $('#header').load('./html/head.html', function() {
      var content="";
       var name=getCookie("username");
        if(name){
          $('.dlu').css('display','block');
          $('.flu').css('display','none');
          content+=name+'欢迎您';
          $('.user1').html(content);
           console.log(name);
        }else{
         $('.flu').css('display','block');
        }
          $('.out').on('click',function(){
          removeCookie("username");
          $('.dlu').css('display','none');
          location.reload();
         });
    });
    $('#footer').load('html/bottom.html', function() {
        //脚部
    }); 

    
});
