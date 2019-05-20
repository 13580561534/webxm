/* 
* @Author: Marte
* @Date:   2019-05-09 21:02:47
* @Last Modified by:   Marte
* @Last Modified time: 2019-05-20 19:57:49
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
            console.log(arr);
            console.log(arr.temai);
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
    });
    $('#footer').load('html/bottom.html', function() {
        //脚部
    }); 
     // var name=getCookie("uname");
     //    console.log(name);
});
