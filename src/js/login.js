/* 
 * @Author: Marte
 * @Date:   2019-05-18 17:02:59
 * @Last Modified by:   Marte
 * @Last Modified time: 2019-05-20 19:55:58
 */

$(function() {


            $('#loginsubmit').on('click', function() {
                    // debugger
                    //用户名
                    var uname = $('#loginname').val();
                    var psw = $('#nloginpwd').val();

                    if (uname == "" || psw == "") {
                        $('.msg-error').css('display','block');
                        // alert("用户名或者密码不能为空")
                    }
                    else{
                        if (getCookie('uname')){
                                alert('先退出账号');
                            }else{
                                $.ajax({
                                    type: 'post',
                                    url: '../api/login.php',
                                    data: {
                                        name:uname,
                                        psw:psw
                                    },
                                    success: function(str) {
                                        console.log(str);
                                        if (str == '1') {
                                            $.cookie('uname', $('.itxt').val(),7);
                                            location.href ='../sy.html?'+uname;
                                            //把这个用户名存到cookie里面
                                             
                                        } else {
                                            alert('登录失败');
                                        }
                                    }
                                });
                            }
                        }
                    })

            });