$(function() {
    var phone_ok = false;
    var verifyCode = new GVerify("v_container");
    var phone = $('#form-phone').val();
    $('#form-phone').on('focus', function() {
        // $('#form-phone').val()="";
        $('#form-phone-error').show().html("验证完成后，你可以使用该手机登录或找回密码").css('color', '#ccc');
    });
    //手机号验证
    $('#form-phone').on('blur', function(){
         $('#form-phone-error').hide();
        $('#form-phone-error').hide();
        var reg = /^1[3-9]\d{9}$/;
        var phone = $(this).val();
        var val = reg.test(phone);
         if(val){//正则匹配成功
                 $('.i-status').css('display', 'block');
                 phone_ok=true;
            }else{
                $('#form-phone-error').text('格式错误').css('color', '#f91');
            }
    });

    //  $('.form-item').on('click',function(){
    //     var phone =$('#form-phone').val();
    //     var kong =trim(phone);
    //      var phone =$('#form-phone').val();
    //          // console.log(kong);
    //          if(kong){
    //             $('#form-phone-error').text('请输入手机号').css('color','#f91');
    //              return;
    //          }
    // });
    // 手机验证码
    var codetxt = ""; //y验证码文本框
    var code = ""; //拿到的验证码
    var sPhone = "";
    var obj = {
      "codetxt":""
    }

    // $('#getPhoneCode').on('click', function() {
        
    //     var info = $('#step1-next').prev('.input-tip');
    //     var phone = $('#form-phone').val();
    //     $.ajax({
    //         type: "post",
    //         data: {
    //             userphone: phone //换成你的号码即可
    //         },
    //         url: "../api/message.php",
    //         async: true,
    //         success: function(str) {
    //             // var arr = JSON.parse(str);
    //             // console.log(arr);
    //             codetxt = $('#phoneCode').val();
    //             codetxt = arr.phonecode;
    //             sPhone = phone;
    //             console.log(sPhone);
    //         }
    //     });

    // });
    
    //验证码
    var code_ok =false;
    var verifyCode = new GVerify("v_container");
    $('#code_input').on('blur', function() {
        var txt = $('#code_input').val();
        var res = verifyCode.validate(txt);
        // var result=trim(result);
        if (!res) {
            $('.ifo').text('验证码错误').css('color', '#f91');
           
        } else {
            $('.ifo').text('');
             code_ok = true;
        }

    });

    function trim(str) {
        if (str.replace(/\s+/g, "") == "") {
            return true;
        } else {
            return false;
        }
    }

    //点击下一步
    $('#step1-next').on('click', function() {
        //1.非空
        //2、正则
        var codetext = trim($('#phoneCode').val()); //手机验证码
        var info = $('#step1-next').prev('.input-tip');
        var tel = trim($('#form-phone').val());
        var code_input = trim($('#code_input').val());
        // console.log(code_input);
        // codetxt =$('#phoneCode').val();
        // code=arr.phonecode;
        // console.log(tel);
         // console.log(sPhone);
        //非空
        // if(!tel){//手机号非空验证
          
        //   return;
        // }
        // if(!code_input){//随机
        //   return;
        // }
        // if(!codetext){//短信 如果有输入内容
        //   return;
        // }

        // //手机正则验证
        // var reg = /^1[3-9]\d{9}$/;
        // var val = reg.test(phone);
        // if(!val){
        //   //手机格式出错
        //    $('#form-phone-error').text('格式错误').css('display', 'block');
        //   return;
        // }

        // //随机验证码输入是否正确
        // var txt = $('#code_input').val();
        // var res = verifyCode.validate(txt);
        // if(!res){
        //   //验证码出错
        //   $('.ifo').text('验证码错误').css('color', '#f91');
        //   return;
        //    // $('.ifo').text('请输入验证码').css('color', '#f91');
        // }

        // //短信验证码是否匹配
        // //var codetxt
        // if(trim(codetext)){
        //   //短 验证出错
        //   alert('请输入验证码');
        //   return;
        // }

        // if(codetext != codetxt){
        //   ///短 验证出错
        //   alert('验证码错误');
        //   return;
        // }

        // //手机号匹配验证
        // if(sPhone != phone){
        //      alert('手机号不匹配');
        //   return;
        // }
        if(phone_ok && code_ok){

                $('#step1-wrap').hide();
                $('.form-item-phonecode').css('display', 'none');
                $('#step1-next').css('display', 'none');
                $('#step2-wrap').show();
                $('.pro-step2 .step-index').css('background-position','0px -200px');
                $('.pro-step3 .step-index').css('background-position','-45px -200px');
            }else{
                alert("请先完成验证");
            } 
    });


    //开始注册
    var check = false;
    var name ="";
    $('.i-status').css('display', 'none');
    $('#form-account').on('focus', function() {
        // var ifo =
        $('.input-tip1').text("支持中文、英文、数字、“-”、“_”的组合,4-20个字符").css('color', '#ccc');
    });
    $('#form-account').on('blur', function() {
        // $('.input-tip1').text('');
        var reg = /^[\u4e00-\u9fa5\w-]{4,20}$/;
        // var reg1=/^[0-9]$/;
         name = $('#form-account').val().trim();
        res = reg.test(name);
        console.log(typeof(res));
        if(res){
            console.log(123);
            $.ajax({
                type: "post",
                data:{
                    name:name
                },
                url: "../api/checkname.php",
                success:function(str){
                        console.log("str",str);
                        if (str == 'no') {
                           $('.input-tip1').text('用户名已被注册');
                            check = false;
                        } else if(str=='yes'){
                             console.log(555);
                            $('.input-tip1').text('可以注册');
                            check =true;
                        }
                }
            });
        }else {
            $('.input-tip1').text('用户名不通过');
             check = false;
        } 

    });

// 密码输入的时候
    var psw1 ="";
    var psw2="";
    var checkpsw =false;
    $('#form-pwd').on('focus', function() {
        $('.tip2').text('建议使用字母、数字和符号两种及以上的组合，6-20个字符');
    });

    $('#form-pwd').on('keyup', function() {
        // var reg1 =/^[a-zA-Z][A-Za-z0-9_]{5,19}$/
        psw1 =$('#form-pwd').val();
        var level=0;
         if (/[1-9]/.test(psw1)) {
            level++;
        }
        if (/[a-z]/.test(psw1)) {
            level++;
        }
        if (/[^a-z1-9`!#$%^&*A-Z]/.test(psw1)) { //如果有特殊符号或大写字母
            level++;
        }
         
        if (level == 2) {
            $('.tip2').html("密码强度为中");
        }
        if (level == 3) {
          $('.tip2').html("密码较强");
        }
    });

    $('#form-equalTopwd').on('focus', function() {
        $('.tip3').html("请再次输入密码");
    });

    //密码失去焦点的时候
    $('#form-pwd').on('blur',function(){
        if ($('#form-pwd').val().length < 6) {
            $('.tip2').html('密码长度至少6位');
        }else{
            checkpsw=true;
        }
    });
    //确认密码
    var pswok =false;
    $('#form-equalTopwd').on('blur', function() {
        // $('.tip3').html("");
        psw2=$('#form-equalTopwd').val();
        if(psw1!==psw2){
         $('.tip3').html("两次输入的密码不一致");
         pswok =false;
        }else if(psw1==psw2){
            pswok =true;
        }
    });

    // function checkRepwd() {
    //     var repwd = $("#form-equalTopwd").val();
    //     var pwd = $("#form-pwd").val();
    //     if (pwd != repwd) {
    //         $('.tip3').html("两次输入的密码不一致");
    //         return false;
    //     }
    //     return true;
    // }
    $('#form-register').on('click',function(){
       console.log(check,checkpsw,pswok);
      if(check && checkpsw && pswok){
            $.ajax({
                type:'post',
                url:'../api/register.php',
                data:{
                    name:name,
                    phone:phone,
                    psw:psw1
                },
                success: function (str) {
                    console.log("dd",str);
                    if(str == 'yes'){
                        console.log(66);
                        location.href = 'login.html?name' + name;
                    }else{
                        alert('注册失败，请重新完善信息');
                    }
                }

            });
      }else {
            alert('请完善信息');
        }
    });
});