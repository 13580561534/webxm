
(function(){
    $(function() {

    $('#header').load('head.html', function() {});
    $('#footer').load('bottom.html', function() {});
    var data = decodeURI(location.search);
    var str = data.slice(1); //id=1
    var gid =str.split('=')[1];
    $.ajax({
        type: 'get',
        url: '../api/detail.php',
        data:'gid='+gid,
        success: function(str) {
            create(str);
            MagnifierF("MagnifierWrap2");
        }
    });

    var gid1 = '';
     var smallimg1 = '';
     var title1 = '';
     var price1 = '';
    function create(str) {
        var data = JSON.parse(str);
         gid1 = data[0].gid;
         smallimg1 = data[0].smallimg;
         title1 = data[0].title;
         price1 = data[0].price;
        // console.log(data);
        var bigarr=data[0].bigimg;
        var picItem=bigarr.split("&");//["big1.jpg", "big2.jpg", "big3.jpg", "big4.jpg"]
        console.log(picItem);//
        var arr = data.map(function(item) {
              var res =picItem.map(function(Pitem){
                return  `<li class=""><img src="../img/${Pitem}" data-lsrc="../img/big1.jpg" data-maxSrc="../img/${Pitem}"></li>`
            });
            return `
            <div id="nav" class="w">
                <div class="shopHeaderArea">
                    <div class="shopInfo">
                        <div class="shop-name">
                            <strong>
                                <a href="#" target="_blank">
                                   ${item.shopname}</a>
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
                <div id="xq" class="w">
            <div class="product-intro clearfix">
                <div class="preview-wrap">
                <div class="box">
                       <div id="MagnifierWrap2"> <div class="MagnifierMain">
                       <img class="MagTargetImg" src="../img/big1.jpg" data-src="../img/big1.jpg"> 
                        </div>
                        <span class="spe_leftBtn">&lt;</span>
                        <span class="spe_rightBtn">&gt;</span>
                        <div class="spec-items"> 
                        <ul>
                        ${res}
                     
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="info-wrap">
                    <div class="country-sign">
                        <img class="country-map-icon" src="../img/xxl.jpg">
                        <span class="country-name">&nbsp;澳大利亚</span>
                    </div>
                    <div class="sku-name">
                        <span class="worldbuy-icon">海囤全球</span>
                       ${item.title}
                    </div>
                    <div class="news">
                        <div class="item" id="p-ad" title="">【5.16爱他美京东超级品牌日】进口母婴奶粉好礼来袭！购物满899元有机会赢取京东E卡<a href="###">满699减200神券限量抢！爆款低至7折，点击速抢好礼</a>
                        </div>
                    </div>
                    <div id="summary-wrap" class="summary">
                        <div class="summary-price-wrap">
                            <div class="dt">价&nbsp;&nbsp;格</div>
                            <div class="dd">
                                <span class="p-price"> <span>￥</span> <span class="price J-p-1950749">${item.price}</span> </span>
                            </div>
                            <div class="dd J-fans-price hide" style="display: block;">
                                <span class="p-price fans-price">
                                    <span class="price J-p-f-1950749">￥225.00</span>
                                </span>
                                <img src="../img/fs.png" class="“fans-icon&quot;">
                                <span class="fans-text">关注店铺，即享粉丝价</span>
                            </div>
                            <div class="summary-tallage" id="summaryTallage">
                                <div class="dt" id="summaryTallageTitle">进&nbsp;口&nbsp;税</div>
                                <div class="dd">
                                    <span id="tax">预计￥20.84</span>
                                    <span class="d-tip hover">
                                        税费信息
                                        <span data-tips="京东全球购的售价由商品价、行邮税、国内费用组成" class="tips">
                                            <div class="tips-message">
                                                <i class="icon-arrowL"></i>
                                                <dl>
                                                    <dt>
                                                        税费详情：
                                                    </dt>
                                                    <dd id="summaryTallageDetail">
                                                        <a href="#" target="_blank">查看详情&gt;&gt;</a>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <!-- youhui -->
                            <div id="summary-promotion">
                                <div class="dt">优惠</div>
                                <div class="p-promotions">
                                    <div class="dd ">
                                        <div class="prom-item" data-code="16">
                                            <em class="hl_red_bg">满送</em>
                                            <em class="hl_red">满199元另加119元即赠热销商品，赠完即止，请在购物车点击领取</em>
                                            <a href="#" target="_blank"> &nbsp;&nbsp;详情
                                                <s class="s-arrow">&gt;&gt;</s></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="summary p-choose-wrap">
                            <!-- <img src="../img/jt.gif" alt="" /> -->
                            <div class="summary-stock">
                                <div class="dt"> 配 送</div>
                                <div class="dd clearfix">
                                    <div class="stock-from J-stock-from">天津保税仓<span>至</span></div>
                                    <div class="store clearfix">
                                        <div data-drop="head" class="head">
                                            <span class="text" data-res="">北京朝阳区三环以内</span>
                                            <span class="arrow arr-close"></span>
                                            <span>有货</span>
                                        </div>
                                    </div>
                                </div>
                                <span class="d-tip hover J-deliver-date" style="display: inline;">05:30前下单，预计<b>明天(05月16日)</b>送达</span>
                            </div>
                            <div id="yunfei">
                                <div class="dt">运 费</div>
                                <div class="dd"><a title="所选地址自营订单满99元免基础运费。" target="_blank" href="#">99元免基础运费</a></div>
                            </div>
                        </div>
                        <div id="choose-btns" class="choose-btns clearfix">
                           
                            <a href="#" id="InitCartUrl" class="btn-special1 btn-lg">加入购物车</a>
                        </div>
                    </div>
                </div>
                <div id="track"></div>
            </div>
            </div>
            `;
        }).join("");
        $('#container-box').html(arr);
        $('.spec-items ul li').eq(0).addClass('on');
        // $(".jqzoom").imagezoom();

      
    // $("#thumblist li a").click(function() {
    //     $(this).parents("li").addClass("tb-selected").siblings().removeClass("tb-selected");
    //     $(".jqzoom").attr('src', $(this).find("img").attr("mid"));
    //     $(".jqzoom").attr('rel', $(this).find("img").attr("big"));
    // });
    }
      //点击按钮加入购物车
     $('#container-box').on('click', '#InitCartUrl', function () {
         console.log('123');
         $.ajax({
             type: 'post',
             url: '../api/cart_addData.php',
             async: true,
             data: {
                 gid: gid1,
                 smallimg: smallimg1,
                 title: title1,
                 price: price1,
             },
             success: function (str) {
                 alert('加入成功~');
                 console.log(str);
                 return;
             }
         });

     });
     
});
})();

window.onload=function(){

              
}

