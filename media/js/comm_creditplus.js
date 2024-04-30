//var tipFrame = $('#tip_frame');
//var tLoginHerf = $('#tlogin_href');
//var mask = $(window).getMasker('','',true);
document.domain="2125.com";
var loginBox = $('#login_box');
var TRY_LOGIN_NUM = 0;
var proxy;

//显示、更改提示信息
function maketipCredit(msg, element ,align)
{
	selector = element;
    if(align != 'left')
    {
        selector.css('text-align','center');
    }
	else
	{
		selector.css('text-align','left');
	}
	selector.html(msg || '');
}

//检查是否是邮箱登录
function isemailCredit(email)
{
	var regex = /^[a-zA-Z0-9]+([\._-][a-zA-Z0-9]+)*@(([a-zA-Z0-9]+([\.-][a-zA-Z0-9]+)?)+\.)+[a-zA-Z]+$/;
	return regex.test(email);
}

//检查是否是数字
function isnumberCredit( num )
{
	return !isNaN( num );
}

//成长值领取机制
function creditsplus(typeid)
{
	if(typeid == 'webgame' || typeid == 'miba' || typeid == 'event')
	{
		percent = 0;
	}
	else if(typeid == 'minigame')
	{
		percent = 0;
	}
	else if(typeid == 'info')
	{
		percent = 0.3;
	}
	else if(typeid == 'maodou')
	{
		percent = 0.5;
	}
	else if(typeid == 'mini'||typeid == 'duola')
	{
		percent = 0;
	}
	else
	{
		return false;
	}

	if (probability(percent))
	{
		//判断是否已登陆
		var tiplog_iframe = '<iframe style="display:none" id="tiplog_iframe" src="" ></iframe>';
	    $('body').append(tiplog_iframe);
		$('#tiplog_iframe').bind('load',function()
		{
			proxy = document.getElementById("tiplog_iframe").contentWindow;
			islogin(typeid);
		});
		$('#tiplog_iframe').attr('src','http://login.2125.com/login.html');
	}
	else
	{
		return false;
	}
}

//控制percent大小的随机几率
function probability(percent)
{
	var random = Math.random();
	percent = parseFloat(percent);
	if(random >= percent){return true;}
	else{return false;}
}

//判断是否已登陆
function islogin(typeid)
{
	proxy.$.ajax({
		url:'http://login.2125.com/?c=loginses&d=index',
		type:'GET',
		dataType:'jsonp',
		jsonp:'callback',
		data:null,
		success:function(data)
		{
			if(data.error === 0)
			{
				if(typeid == 'mini'||typeid == 'duola')
				{
					var url = "http://event.2125.com/xiaohui/addCredits?cmd=2001:" + typeid;
					url = encodeURI(url);
					var iframe = '<iframe style="display:none" id="plus_iframe" src="" ></iframe>';
					$('body').append(iframe);
					$('#plus_iframe').attr('src', url);
					$('#plus_iframe').unbind('load');
					$('#plus_iframe').bind('load', function(){
						
						var callback = $('#plus_iframe').contents().find("body").html();
						callback = eval('(' + callback + ')');
						var error = callback.error;
						
						if (error == 2012) {
							return false;
						}
						else {
							showtipbox(10,1);
						}
					});
				}
				else if(typeid == 'maodou')
				{
					var url = "http://app.2125.com/api.php?cmd=2031:minigame";
					url = encodeURI(url);
					var iframe = '<iframe style="display:none" id="plus_iframe" src="" ></iframe>';
					$('body').append(iframe);
					$('#plus_iframe').attr('src', url);
					$('#plus_iframe').bind('load', function(){
						var callback = $('#plus_iframe').contents().find("body").html();
						callback = eval('(' + callback + ')');
						var error = callback.error;
						var maodou = callback.maodou;
						if (error == 2012) {
							return false;
						}
						else {
							showtipbox(6, maodou);
						}
					});
				}
				else
				{
					var url = "http://app.2125.com/api.php?cmd=2001:" + typeid;
					url = encodeURI(url);
					var iframe = '<iframe style="display:none" id="plus_iframe" src="" ></iframe>';
					$('body').append(iframe);
					$('#plus_iframe').attr('src', url);
					$('#plus_iframe').bind('load', function(){
						var callback = $('#plus_iframe').contents().find("body").html();
						callback = eval('(' + callback + ')');
						var error = callback.error;
						var credits = callback.credits;
						if (error == 2012 || error == 2013) {
							return false;
						}
						else {
							showtipbox(2,credits);
						}
					});
				}
			}
			else if(data.error == 1)
			{
				switch(typeid)
				{
					case 'minigame':
						showtipbox(1,2);
						break;
					case 'info':
						showtipbox(1,2);
						break;
					case 'webgame':
						showtipbox(1,10);
						break;
					case 'miba':
						showtipbox(1,3);
						break;
					case 'event':
						showtipbox(1,10);
						break;
					case 'maodou':
						showtipbox(7,1);
						break;
					case 'mini':
						showtipbox(9,1);
						break;
					case 'duola':
						showtipbox(9,1);
						break;
					default:
						break;
				}
				$('#tlogin_href').click(function(){	
					$('#tip_frame').css("display","none");
					showloginbox(typeid);	
				});	//绑定点击后显示登陆框事件
			}
			else if(data.error == 2 || data.error == 3)
			{
				switch(typeid)
				{
					case 'minigame':
						showtipbox(1,2);
						break;
					case 'info':
						showtipbox(1,2);
						break;
					case 'webgame':
						showtipbox(1,10);
						break;
					case 'miba':
						showtipbox(1,3);
						break;
					case 'event':
						showtipbox(1,10);
						break;
					case 'maodou':
						showtipbox(7,1);
						break;
					case 'mini':
						showtipbox(9,1);
						break;
					case 'duola':
						showtipbox(9,1);
						break;
					default:
						break;
				}
				TRY_LOGIN_NUM = 3;
				$('#tlogin_href').click(function(){	
					$('#tip_frame').css("display","none");
					showloginbox(typeid);	
				});	//绑定点击后显示登陆框事件
			}
			else
			{
				switch(typeid)
				{
					case 'minigame':
						showtipbox(1,2);
						break;
					case 'info':
						showtipbox(1,2);
						break;
					case 'webgame':
						showtipbox(1,10);
						break;
					case 'miba':
						showtipbox(1,3);
						break;
					case 'event':
						showtipbox(1,10);
						break;
					case 'maodou':
						showtipbox(7,1);
						break;
					case 'mini':
						showtipbox(9,1);
						break;
					case 'duola':
						showtipbox(9,1);
						break;
					default:
						break;
				}
				TRY_LOGIN_NUM = 3;
				$('#tlogin_href').click(function(){	
					$('#tip_frame').css("display","none");
					showloginbox(typeid);	
				});	//绑定点击后显示登陆框事件
			}
		}
	});
}

/**
* 弹框内容根据情况不同进行更改后，显示弹框	
* @params: box_style：1	未登录时弹框
*					  2	登陆后弹框	
*					  3	登录且已领满或达到最高等级时弹框
*		   credit：此次弹框事件所获成长值
* @return: none
*/
function showtipbox(box_style,credit)
{
	if(box_style == 1)
	{
		$('#tip_text1').html('恭喜你获得了<b id="tip_num" class="red">'+credit+'</b>点成长值！<br/>');
		$('#tip_text2').html('<a id="tlogin_href" class="blue underline" href="javascript:;">快去登录领取>></a>');
		$('#tip_frame').fadeIn(2000);
		$('#tip_text2').click(function()
		{
			$('#tip_frame').fadeOut(2000);
		});
	}
	else if(box_style == 2)
	{
		$('#tip_text1').html('恭喜你获得了<b id="tip_num" class="red">'+credit+'</b>点成长值！<br/>');
		$('#tip_text2').html('<a class="blue underline" target="_blank" href="http://www.2125.com/profile.html">立即查看>></a>');
		$('#tip_frame').fadeIn(2000);
		$('#tip_text2').click(function()
		{
			$('#tip_frame').fadeOut(2000);
		});
	}
	else if(box_style == 3)
	{
		$('#tip_text1').html('你已经获得了所有小游戏成长值！');
		$('#tip_text2').html('<a class="blue underline" target="_blank" href="http://www.2125.com/profile.html">立即查看>></a>');
		$('#tip_frame').fadeIn(2000);
		$('#tip_text2').click(function()
		{
			$('#tip_frame').fadeOut(2000);
		});
	}
	else if(box_style == 4)
	{
		$('#tip_text1').html('你已经获得了所有网页游戏成长值！');
		$('#tip_text2').html('<a class="blue underline" target="_blank" href="http://www.2125.com/profile.html">立即查看>></a>');
		$('#tip_frame').fadeIn(2000);
		$('#tip_text2').click(function()
		{
			$('#tip_frame').fadeOut(2000);
		});
	}
	else if(box_style == 5)
	{
		$('#tip_text1').html('你已经获得了所有游戏资讯成长值！');
		$('#tip_text2').html('<a class="blue underline" target="_blank" href="http://www.2125.com/profile.html">立即查看>></a>');
		$('#tip_frame').fadeIn(2000);
		$('#tip_text2').click(function()
		{
			$('#tip_frame').fadeOut(2000);
		});
	}
	else if(box_style == 6)
	{
		$('#tip_text1').html('恭喜你获得了<b id="tip_num" class="red">'+credit+'</b>个猫豆！<br/>');
		$('#tip_text2').html('<a class="blue underline" target="_blank" href="http://event.2125.com/fiesta/">快去抽奖吧>></a>');
		$('#tip_frame').fadeIn(2000);
		$('#tip_text2').click(function()
		{
			$('#tip_frame').fadeOut(2000);
		});	
	}
	else if(box_style == 7)
	{
		$('#tip_text1').html('恭喜你获得了<b id="tip_num" class="red">'+credit+'</b>个猫豆！<br/>');
		$('#tip_text2').html('<a id="tlogin_href" class="blue underline" href="javascript:;">快去登录领取>></a>');
		$('#tip_frame').fadeIn(2000);
		$('#tip_text2').click(function()
		{
			$('#tip_frame').fadeOut(2000);
		});	
	}
	else if(box_style == 8)
	{
		$('#tip_text1').html('你已经获得了所有小游戏猫豆！');
		$('#tip_text2').html('<a class="blue underline" target="_blank" href="http://event.2125.com/fiesta/">快去抽奖吧>></a>');
		$('#tip_frame').fadeIn(2000);
		$('#tip_text2').click(function()
		{
			$('#tip_frame').fadeOut(2000);
		});	
	}
	else if(box_style == 9)
	{
		$('#tip_text1').html('恭喜你获得<b id="tip_num" class="red">1</b>次宝箱抽奖机会！<br/>');
		$('#tip_text2').html('<a id="tlogin_href" class="blue underline" href="javascript:;">领取</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class="blue underline" target="_blank" href="http://event.2125.com/xiaohui/">查看活动</a>');
		$('#tip_frame').fadeIn(2000);
		$('#tip_text2').click(function()
		{
			$('#tip_frame').fadeOut(2000);
		});	
	}
	else if(box_style == 10)
	{
		$('#tip_text1').html('恭喜你获得<b id="tip_num" class="red">1</b>次宝箱抽奖机会！<br/>');
		$('#tip_text2').html('<a class="blue underline" target="_blank" href="http://event.2125.com/xiaohui/">参与活动赢大奖</a>');
		$('#tip_frame').fadeIn(2000);
		$('#tip_text2').click(function()
		{
			$('#tip_frame').fadeOut(2000);
		});	
	}
	else if(box_style == 11)
	{
		$('#tip_text1').html('今天的小游戏抽奖机会已领取完毕！');
		$('#tip_text2').html('<a class="blue underline" target="_blank" href="http://event.2125.com/xiaohui/">参与活动赢大奖</a>');
		$('#tip_frame').fadeIn(2000);
		$('#tip_text2').click(function()
		{
			$('#tip_frame').fadeOut(2000);
		});	
	}
	else if(box_style == 12)
	{
		$('#tip_text1').html('今天该网游抽奖机会已领取完毕！');
		$('#tip_text2').html('<a class="blue underline" target="_blank" href="http://event.2125.com/xiaohui/">参与活动赢大奖</a>');
		$('#tip_frame').fadeIn(2000);
		$('#tip_text2').click(function()
		{
			$('#tip_frame').fadeOut(2000);
		});	
	}
}


/**
 * 显示登陆框
 */
function showloginbox(typeid)
{
    maketipCredit('',loginBox.find('p'),'left');	//清理信息

    //弹框的时候判断是否需要出验证码
    cre_isNeedVerify();   
    
//    if( TRY_LOGIN_NUM > 2)
//	{	
//		//刷新验证码的事件已在触发处绑定，避免重复绑定
//		$('#hide_seccode').show();
//		loginBox.find("input[name='seccode']").bind('focus',function(){
//			displayVerificationCodeNew("#yz_area");
//			loginBox.setRightbottom();
//		});
//    }
	//因为主动提示的弹出框，和默认显示的弹出框后续动作不一样，所以事件每次都要单独绑定
	$('#ajax_login').unbind('click');
	$(document).unbind('keypress');

    //绑定点击按钮提交表单事件
    $('#ajax_login').bind('click',function(event)
    {
		event.preventDefault();
		event.stopPropagation();
		checklogin(typeid);
    });

	//绑定回车提交表单事件
	$(document).keypress(function(event)
    {			
	    //登录框显示时
	    if($("#ajax_login").css('display') != 'none' )
	    {
	        if(event.keyCode == 13)
		    {	
                checkLogin(event);
		    }
		}
	});
    
	setTimeout(function(){
		loginBox.setRightbottom();
		loginBox.show();	
	},20);
       
	loginBox.find("input[name='uid']").focus();	//默认选中米米号输入框
}

/**
 * 登录框登录
 */
function checklogin(typeid)
{	
	//验证表单
	var tip_mimi = loginBox.find("input[name='uid']"), tip_pwd = loginBox.find("input[name='password']");
	var tip_mimi_val = $.trim(tip_mimi.val()), tip_pwd_val = $.trim(tip_pwd.val());
	
	if(tip_mimi_val == '')
	{
		maketipCredit('请输入你的米米号或注册邮箱！',loginBox.find('p'),'left');
		try{tip_mimi_val.focus();}catch(e){}
		return false;
	}

	var IS_EMAIL = false, IS_MIMI = true;
	if(isemailCredit(tip_mimi_val))
	{
		IS_EMAIL = true;
	}
	else if(tip_mimi_val < 10000 || tip_mimi_val > 10000000000 || !isnumberCredit(tip_mimi_val))
	{
		IS_MIMI = false;
	}
	
	if(!IS_EMAIL && !IS_MIMI)
	{
		maketipCredit( '无效的米米号或邮箱地址，请重新输入！',loginBox.find('p'),'left');
		try{tip_mimi.focus();}catch(e){}
		return false;
	}
	if(tip_pwd_val == '')
	{
		maketipCredit('请输入你的密码！',loginBox.find('p'),'left');
		try{tip_pwd.focus();}catch(e){}
		return false;
	}
	var params = {'uid' : tip_mimi_val, 'password' : tip_pwd_val};
	var tip_seccode = loginBox.find("input[name='seccode']");
	
	//已显示验证码
	if($('#hide_seccode').css('display') != 'none')
	{
		var tip_seccode_val = $.trim(tip_seccode.val());
		if('' == tip_seccode_val)
		{
			maketipCredit("请输入验证码！",loginBox.find('p'),'left');
			try{tip_seccode.focus();}catch(e){}
			return false;
		}
		if(tip_seccode_val.length > 4)
		{
			maketipCredit("验证码超过长度！",loginBox.find('p'),'left');
			try{tip_seccode.focus();}catch(e){}
			return false;
		}
		params['seccode'] = tip_seccode_val;
		
		$('div').data("#yz_area",true);
	}
	//--------通讯开始----------//
	$.ajax({
	url:'http://login.2125.com/?c=loginses&d=index',
	type:'GET',
	dataType:'jsonp',
	jsonp:'callback',
	data:params,
	success:function(data)
		{ 
			if(data.error == 0)
			{	
				if (typeid == 'mini'||typeid == 'duola') 
				{
					var url = "http://event.2125.com/xiaohui/addCredits?cmd=2001:" + typeid;
					url = encodeURI(url);
					var iframe = '<iframe style="display:none" id="plus_iframe" src="" ></iframe>';
					$('body').append(iframe);
					$('#plus_iframe').attr('src', url);
					$('#plus_iframe').bind('load', function(){
						var callback = $('#plus_iframe').contents().find("body").html();
						callback = eval('(' + callback + ')');
						var error = callback.error; 
										
						if (typeid == 'mini')
						{
							url = "http://app.2125.com/api.php?cmd=1001";
							url = encodeURI(url);
							$('#plus_iframe').attr('src', url);
							$('#plus_iframe').unbind('load');
							$('#plus_iframe').bind('load', function(){
								callback = $('#plus_iframe').contents().find("body").html();
								callback = eval('(' + callback + ')');
								
								var nickname = callback.nickname;
								if (error == 2012) {
									$('#login_box').hide();
									if(typeid == 'duola')
									{
										showtipbox(12,0);
									}
									else{
										showtipbox(11,0);
									}
									if (nickname !== '') {
										top_login.find('p.welcome').html('欢迎你：<span id="namechange" class="c_gre">' + callback.nickname + '</span>， 进入<a class="c_gre underline" target="_blank" href="http://www.2125.com/profile.html">个人中心</a>　<a class="c_gre underline" href="javascript:logout();">退出</a>');
									}
									else {
										top_login.find('p.welcome').html('欢迎你：<span class="c_gre">2125小玩家</span>， 进入<a class="c_gre underline" target="_blank" href="http://www.2125.com/profile.html">个人中心</a>　<a class="c_gre underline" href="javascript:logout();">退出</a>');
									}
								}
								else
								{
									$('#login_box').hide();
									showtipbox(10,0);
									if(nickname !== '')
									{
										top_login.find('p.welcome').html('欢迎你：<span id="namechange" class="c_gre">'+callback.nickname+'</span>， 进入<a class="c_gre underline" target="_blank" href="http://www.2125.com/profile.html">个人中心</a>　<a class="c_gre underline" href="javascript:logout();">退出</a>');
									}
									else
									{
										top_login.find('p.welcome').html('欢迎你：<span class="c_gre">2125小玩家</span>， 进入<a class="c_gre underline" target="_blank" href="http://www.2125.com/profile.html">个人中心</a>　<a class="c_gre underline" href="javascript:logout();">退出</a>');
									}
								}
							});
						}
						else
						{
							if (error == 2012) {
								$('#login_box').hide();
								if(typeid == 'duola')
								{
									showtipbox(12,0);
								}
								else{
									showtipbox(11,0);
								}
							}
							else
							{
								$('#login_box').hide();
								showtipbox(10,0);
							}
						}
							
						
					});
				}
				else if (typeid == 'maodou') 
				{
					var url = "http://app.2125.com/api.php?cmd=2031:minigame";
					url = encodeURI(url);
					var iframe = '<iframe style="display:none" id="plus_iframe" src="" ></iframe>';
					$('body').append(iframe);
					$('#plus_iframe').attr('src', url);
					$('#plus_iframe').bind('load', function(){
						var callback = $('#plus_iframe').contents().find("body").html();
						callback = eval('(' + callback + ')');
						var error = callback.error;
						var maodou = callback.maodou;
						url = "http://app.2125.com/api.php?cmd=1001";
						url = encodeURI(url);
						$('#plus_iframe').attr('src', url);
						$('#plus_iframe').unbind('load');
						$('#plus_iframe').bind('load', function(){
							callback = $('#plus_iframe').contents().find("body").html();
							callback = eval('(' + callback + ')');
							
							var nickname = callback.nickname;
							if (error == 2012) {
								$('#login_box').hide();
								showtipbox(8,0);
								if (nickname !== '') {
									top_login.find('p.welcome').html('欢迎你：<span id="namechange" class="c_gre">' + callback.nickname + '</span>， 进入<a class="c_gre underline" target="_blank" href="http://www.2125.com/profile.html">个人中心</a>　<a class="c_gre underline" href="javascript:logout();">退出</a>');
								}
								else {
									top_login.find('p.welcome').html('欢迎你：<span class="c_gre">2125小玩家</span>， 进入<a class="c_gre underline" target="_blank" href="http://www.2125.com/profile.html">个人中心</a>　<a class="c_gre underline" href="javascript:logout();">退出</a>');
								}
							}
							else
							{
								$('#login_box').hide();
								showtipbox(6,maodou);
								if(nickname !== '')
								{
									top_login.find('p.welcome').html('欢迎你：<span id="namechange" class="c_gre">'+callback.nickname+'</span>， 进入<a class="c_gre underline" target="_blank" href="http://www.2125.com/profile.html">个人中心</a>　<a class="c_gre underline" href="javascript:logout();">退出</a>');
								}
								else
								{
									top_login.find('p.welcome').html('欢迎你：<span class="c_gre">2125小玩家</span>， 进入<a class="c_gre underline" target="_blank" href="http://www.2125.com/profile.html">个人中心</a>　<a class="c_gre underline" href="javascript:logout();">退出</a>');
								}
							}
						});
					});
				}
				else
				{
					var url = "http://app.2125.com/api.php?cmd=2001:"+typeid;
					url = encodeURI(url);
					var iframe = '<iframe style="display:none" id="plus_iframe" src="" ></iframe>';
					$('body').append(iframe);
					$('#plus_iframe').attr('src',url);
					$('#plus_iframe').bind('load',function()
					{
						var callback = $('#plus_iframe').contents().find("body").html();
						callback = eval('('+callback+')');
						var error = callback.error;
						var credits = callback.credits;
						
						url = "http://app.2125.com/api.php?cmd=1001";
						url = encodeURI(url);
						$('#plus_iframe').attr('src',url);
						$('#plus_iframe').unbind('load');
						$('#plus_iframe').bind('load',function()
						{
							callback = $('#plus_iframe').contents().find("body").html();
							callback = eval('('+callback+')');
							
							var nickname = callback.nickname;
							if(error == 2012 || error == 2013)
							{
								if(typeid == 'webgame')
								{
									$('#login_box').hide();
									showtipbox(4,0);
								}
								else if(typeid == 'info')
								{
									$('#login_box').hide();
									showtipbox(5,0);
								}
								else if(typeid == 'minigame')
								{
									$('#login_box').hide();
									showtipbox(3,0);
									if(nickname !== '')
									{
										top_login.find('p.welcome').html('欢迎你：<span id="namechange" class="c_gre">'+callback.nickname+'</span>， 进入<a class="c_gre underline" target="_blank" href="http://www.2125.com/profile.html">个人中心</a>　<a class="c_gre underline" href="javascript:logout();">退出</a>');
									}
									else
									{
										top_login.find('p.welcome').html('欢迎你：<span class="c_gre">2125小玩家</span>， 进入<a class="c_gre underline" target="_blank" href="http://www.2125.com/profile.html">个人中心</a>　<a class="c_gre underline" href="javascript:logout();">退出</a>');
									}
								}
								else
								{
									return;
								}
							}
							else
							{
								$('#login_box').hide();
								showtipbox(2,credits);
								if(typeid == 'minigame')
								{
									if(nickname !== '')
									{
										top_login.find('p.welcome').html('欢迎你：<span id="namechange" class="c_gre">'+callback.nickname+'</span>， 进入<a class="c_gre underline" target="_blank" href="http://www.2125.com/profile.html">个人中心</a>　<a class="c_gre underline" href="javascript:logout();">退出</a>');
									}
									else
									{
										top_login.find('p.welcome').html('欢迎你：<span class="c_gre">2125小玩家</span>， 进入<a class="c_gre underline" target="_blank" href="http://www.2125.com/profile.html">个人中心</a>　<a class="c_gre underline" href="javascript:logout();">退出</a>');
									}
								}
							}
						});
					});
				}
			}
			else if(data.error == 1)
			{
				maketipCredit(data.info,loginBox.find('p'),'left');
				refreshVerifyCodeForTip();
				tip_pwd.focus();
				tip_pwd.val("");
				tip_seccode.val("");
			}
			else if(data.error == 2 || data.error == 5)
			{	
				maketipCredit(data.info,loginBox.find('p'),'left');
				loginBox.hide();
				
				loginBox.find("input[name='seccode']").bind('focus',function(){displayVerificationCodeNew("#yz_area")});
				$('#hide_seccode').show();
				
				refreshVerifyCodeForTip();
				tip_pwd.focus();
				tip_pwd.val("");
				tip_seccode.val("");
				
				loginBox.setRightbottom();
				loginBox.show();
			}
			else if(data.error == 3)
			{	
				maketipCredit(data.info,loginBox.find('p'),'left');
//				loginBox.hide();
				
				refreshVerifyCodeForTip();
				tip_pwd.focus();
				tip_pwd.val("");
				tip_seccode.val("");
				
//				loginBox.setRightbottom();
//				loginBox.show();
			}
			else
			{
				maketipCredit('由于网络问题，目前无法登录，请稍候再试');
				refreshVerifyCodeForTip();
			}			
		}
	});
}
//第一次显示验证码
function displayVerificationCodeNew(element,autorefresh,small)
{	
	if(!!$("div").data(element))
	{	
		autorefresh = autorefresh || 0;

		if(!!autorefresh)
		{
			refreshVerifyCodeForTip();
		}
		
		return false;
	}
	else
	{
		$("div").data(element,true);
	}

	ele = $(element);
	
	var html ;
	
	if(small == 1)
	{
		html = '<img style="width:100px;height:38px;cursor:pointer;" class="secimg" onclick="refreshVerifyCodeForTip()" alt="看不清楚？点击换一张" title="看不清楚？点击换一张" /> <span><a onclick="refreshVerifyCodeForTip();return false;" href="javascript:;">换一张？</a></span>';
	}
	else
	{
		html = '<img class="secimg" onclick="refreshVerifyCodeForTip()" style="cursor:pointer;" alt="看不清楚？点击换一张" title="看不清楚？点击换一张" /> <span><a onclick="refreshVerifyCodeForTip();return false;" href="javascript:;">看不清，换一张</a></span>';
	}
	
	ele.html(html);
	//ele.find('img.secimg').attr('src', url+'/verifycode.php?act=init&rnd='+ Math.random());

	refreshVerifyCodeForTip();
}
//刷新验证码
function refreshVerifyCodeForTip()
{
	var ele = $('img.secimg');
	
	if(ele)
	{
		var mimi = loginBox.find("input[name='uid']");
		var mimi_val = $.trim(mimi.val());
		
		ele.attr('src', 'http://login.2125.com/loginses/changeVerify?act=init&userid='+mimi_val+'&rnd=' + Math.random());
	
		if(loginBox.css("left")==($(window).width() - loginBox.width()+"px"))
		{
			loginBox.setRightbottom();
		}
	}
}

//是否需要验证码
function cre_isNeedVerify()
{
	var mimi = loginBox.find("input[name='uid']");
	var mimi_val = $.trim(mimi.val());
	
    proxy.$.ajax({                        
        url:'http://login.2125.com/?c=loginses&d=needVerify&userid='+mimi_val,
        type:'GET',
        dataType:'jsonp',
        jsonp:'callback',
        success:function(data)
        {
            if(data == 1)
            {   
				$('#hide_seccode').show();
				loginBox.find("input[name='seccode']").bind('focus',function(){
					displayVerificationCodeNew("#yz_area");
//					setTimeout(function(){
//						loginBox.setRightbottom();
//					},20);
				});
				refreshVerifyCodeForTip();
            }
            else
            {
            	$('#hide_seccode').hide();   
            }
        }
    });   
}

jQuery(function($)
{
	loginBox.find("input[name='uid']").blur(function () 
 	{
 	    cre_isNeedVerify();
 	});
	
	$('#close_btn').bind('click',function(event)
    {
		event.preventDefault();
        event.stopPropagation();
        $('#login_box').hide();
    });
	$('#tipclose_btn').bind('click',function(event)
    {
		event.preventDefault();
        event.stopPropagation();
        $('#tip_frame').hide();
    });
	$('#tip_frame').setRightbottom();
});