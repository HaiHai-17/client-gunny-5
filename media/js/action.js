var reg_chu_so = /^[a-zA-Z0-9_]+$/;
var reg_chu_so_ = /^[a-zA-Z0-9_]+$/;
var reg_so = /^[0-9]+$/;
var reg_email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,6})$/;

var loading_interval;
$.ajax({cache: true});

$("*").ajaxSend(function(r,s)
	{
		
		clearInterval(loading_interval);
		loading_interval = setInterval('batdau()',1);
		$("#loading").fadeIn("fast");
		
	});   
$("*").ajaxStop(function(r,s)
	{ 	
	try {
	var pageTracker = _gat._getTracker("UA-6645168-1");
	pageTracker._initData();
	url_no_hash = window.location.href;
	url_no_hash = url_no_hash.split('#');
	url_no_hash = url_no_hash[1];
	pageTracker._trackPageview(url_no_hash);
	}
	catch(Err) {
	}					  
	$("#loading").fadeOut("fast");
	clearInterval(loading_interval);

	//refeshimg();
	
	});

function centerView(layer/*no display:none*/, doNotAddOffsets){
if(typeof layer=="string"){layer=document.getElementById(layer);};
if(layer){
var parent=layer.parentNode;/*unless body tag, must have position to relative or absolute*/
parent.style.overflow="auto";
layer.style.position="absolute";/*much better if top and left are specified in style, with 'px'*/
layer.style.top=layer.style.top||layer.offsetTop+'px';
layer.style.left=layer.style.left||layer.offsetLeft+'px';
var clientH=0, clientW=0, offsetT=0, offsetL=0, top=0, left=0;
	if(parent && parent.nodeType==1/*a tag*/){
		if(parent.nodeName=="BODY"){
			if(typeof window.innerHeight!="undefined"){clientH=window.innerHeight; clientW=window.innerWidth;}
			else if(document.documentElement && document.documentElement.clientHeight){clientH=document.documentElement.clientHeight; clientW=document.documentElement.clientWidth;}
			else if(document.body.clientHeight){clientH=document.body.clientHeight; clientW=document.body.clientWidth;}
			else{clientH=parent.clientHeight; clientW=parent.clientWidth;};
			//
			if(typeof pageYOffset!="undefined"){offsetT=pageYOffset; offsetL=pageXOffset;}
			else if(document.documentElement && document.documentElement.scrollTop){offsetT=document.documentElement.scrollTop; offsetL=document.documentElement.scrollLeft;}
			else if(document.body && typeof document.body.scrollTop!="undefined"){offsetT=document.body.scrollTop; offsetL=document.body.scrollLeft;}
			else{offsetT=0; offsetL=0;};
		top=Math.abs(parent.offsetTop + ((clientH/2) - (layer.offsetHeight/2)));
		left=Math.abs(parent.offsetLeft + ((clientW/2) - (layer.offsetWidth/2)));
		}
		else{
		clientH=parent.offsetHeight; clientW=parent.offsetWidth;
		offsetT=parent.scrollTop; offsetL=parent.scrollLeft;
		top=Math.abs(((clientH/2) - (layer.offsetHeight/2))); left=Math.abs(((clientW/2) - (layer.offsetWidth/2)));
		};
	if(!doNotAddOffsets){top+=offsetT; left+=offsetL;};
	layer.style.top=top+'px';//comment out to avoid positioning and allow returning only
	layer.style.left=left+'px';//comment out to avoid positioning and allow returning only
	return [top, left, top+'px', left+'px'];
	};
};
}

function browser()
{
	var br_s = navigator.userAgent.toLowerCase();
	if (br_s.indexOf('opera')!= -1)
		br='op';
	else if (br_s.indexOf('netscape')!= -1)
		br='ns';
	else if (br_s.indexOf('firefox')!= -1)
		br='ff';
	else
		br='ie';
	return br;
}
function Set_Cookiex(name, value, expires, path, domain, secure) {
var today = new Date();
today.setTime(today.getTime());
var expires_date = new Date(today.getTime() + (expires));

document.cookie = name + "=" + escape(value) +
((expires) ? ";expires=" + expires_date.toGMTString() : "") +
((path) ? ";path=" + path : "") +
((domain) ? ";domain=" + domain : "") +
((secure) ? ";secure" : "");
}

function Get_Cookiex(name) {

var start = document.cookie.indexOf(name + "=");
var len = start + name.length + 1;
if ((!start) &&
(name != document.cookie.substring(0, name.length))) {
return null;
}
if (start == -1) return null;
var end = document.cookie.indexOf(";", len);
if (end == -1) end = document.cookie.length;
return unescape(document.cookie.substring(len, end));
}
function Delete_Cookiex(name, path, domain) {
if (Get_Cookie(name)) document.cookie = name + "=" +
((path) ? ";path=" + path : "") +
((domain) ? ";domain=" + domain : "") +
";expires=Mon, 11-November-1989 00:00:01 GMT";
}
function batdau()
{
	centerView("loading");
}

function doc()
{
	var url = window.location.href;
	if(url.indexOf('#')!=-1) c_url = url.split('#');
	module = c_url?c_url[1]:'#';

	$("#Load_Content").load("/checkuser.ashx?Page="+module);

}  

function khoidong()
{
	var interval = setInterval('url()',100);
} 

var last_url="";

function url()
{
	if(window.location.hash!=last_url)
	{
		doc();
		url_no_hash = window.location.href;
		url_no_hash = url_no_hash.split('#');
		url_no_hash = url_no_hash[1];
//		if(browser()=="ie") document.getElementById("history").src="ajax.php?h="+url_no_hash;
		$(function(){
			select_menu("Account_Manager");
			select_menu("Character_Manager");
			select_menu("Bank_Manager");
			select_menu("Event");
			select_menu("Webshop");
			select_menu("NapThe");
			select_menu("ChoTroi");
			select_menu("GiaiTri");
			select_menu("Ranking");
			select_menu("IPProtect");
			select_menu("Register");
			select_menu("LostPass");
		});		
	}
	last_url=window.location.hash;
	
}

function select_menu(id)
{
	var url = window.location.href;
	if (url.indexOf("#")>-1) {
		url = url.split('#');
		url = url[1];
	}
	if (url.indexOf(id)>-1) {
	    $('#'+id+"_Menu").attr("class", "nav_current nav_icon");
	}
	else{
	    $('#'+id+"_Menu").attr("class", "nav_icon");		
	}	
}

$(function(){
	$("#nav li.nav_current div").css("background-image", "");
	
	select_menu("Account_Manager");
	select_menu("Character_Manager");
	select_menu("Bank_Manager");
	select_menu("Event");
	select_menu("Webshop");
	select_menu("NapThe");
	select_menu("ChoTroi");
	select_menu("GiaiTri");
	select_menu("Ranking");
	select_menu("IPProtect");
	select_menu("Register");
	select_menu("LostPass");
});		
				
function Dialog(Content)
{
	$.fx.speeds._default = 800;
	$("#dialog-content").empty().append(Content);	
	$(function() {
		$( '#dialog:ui-dialog' ).dialog( 'destroy' );
	
		$( '#dialog-message' ).dialog({
			show: 'explode',
			hide: 'explode',
			modal: true,
			buttons: {
				Ok: function() {
					$( this ).dialog( 'close' );
					//location.reload(true);
				}
			}
		});
	});
}

function Show_Dialog(Content){
	setTimeout("Dialog(\'"+Content+"\')",800);
}
	
function show_error(id,data)
{
	$("#"+id+"_error").css('display','none')
	$("#"+id+"_error").empty().append("<font color='red'>"+data+"</font>");
	$("#"+id+"_error").fadeIn(500); 
    $("#"+id+"_error").show();	
}

function error(id) {	
	$("#td_" + id + "_title").css('background','url(templates/images/error_bg.gif)');
	$("#td_" + id + "_input").css('background','url(templates/images/error_bg.gif)');
	$("#td_" + id + "_sugg").css('background','url(templates/images/error_bg.gif)');
	$("#td_" + id + "_title").attr('class','td_title_error');
	$("#td_" + id + "_input").attr('class','td_input_error');
	$("#td_" + id + "_sugg").attr('class','td_sugg_error');
	$("#" + id).css('color', 'red');
	$("#" + id).css('font-weight', 'bold');		
}
function hideError(id) {
	$("#"+id+"_error").empty();
	$("#td_" + id + "_title").css('background','');
	$("#td_" + id + "_input").css('background','');
	$("#td_" + id + "_sugg").css('background','');
	$("#td_" + id + "_title").attr('class','td_title_reset');
	$("#td_" + id + "_input").attr('class','');
	$("#td_" + id + "_sugg").attr('class','');
	$("#" + id).css('color', '#000000');
	$("#" + id).css('font-weight', '100');			
}

function hideErrorField(id)
{
	$("#"+id+"_error").fadeOut(1000);
}

function hideError2(id) {
	$("#"+id+"_error").empty();
	$("#td_" + id + "_title").css('background','');
	$("#td_" + id + "_input").css('background','');
	$("#td_" + id + "_sugg").css('background','');
	$("#td_" + id + "_title").attr('class','td_title_reset2');
	$("#td_" + id + "_input").attr('class','');
	$("#td_" + id + "_sugg").attr('class','');
	$("#" + id).css('color', '#000000');
	$("#" + id).css('font-weight', '100');			
}

function hideSuggestion(id) {
	if(id != undefined) {
		$("#"+id).fadeOut(1000);
		//$('div[id='+id+']').hide();	
	}
	else {
		$("#"+id).fadeOut(1000);
		//$('div[id$=_suggestion]').hide();		
	}
}
function showSuggestion(id) {
	if(id != undefined) {
		$("#"+id).fadeIn(1000);
		//$('div[id='+id+']').show();	
	}
	else {
		$("#"+id).fadeIn(1000);
		//$('div[id$=_suggestion]').show();		
	}
}

function checkAnswer()
{
	var par1=document.frmreg.securityquestion.value;
	if(par1.length==0){
		document.frmreg.securityanswer.disabled=true;	
	}
	else{
		document.frmreg.securityanswer.disabled=false;
	}
}

function checkemail(par1){

		if(par1.length>0)
		{
			if(!reg_email.test(par1)){
				return false;
			}
			return true;
		}
}

function checkphone(par1){
	if(par1.length>0)
	{
		var Dauso=par1.substr(0,2);
		var length=par1.length;
			
		if(!(Dauso=='01' && (length==11 || length==12)) && !(Dauso=='09' && length==10)){
			return false;
		}
		return true;
	}
}

function checkchuso(par1){
	if(par1.length>0)
	{
		if(!reg_chu_so.test(par1)){
			return false;
		}
		return true;
	}
}

function checkchuso_(par1){
	if(par1.length>0)
	{
		if(!reg_chu_so_.test(par1)){
			return false;
		}
		return true;
	}
}

function checkso(par1){
	if(par1.length>0)
	{
		if(!reg_so.test(par1)){
			return false;
		}
		return true;
	}
}


function Login()
{
	username_ID="username"
	password_ID="password"
	report_ID="report"
	username=document.getElementById(username_ID).value;
	password=document.getElementById(password_ID).value;
	
    if(!checkchuso(username))
    {
    	show_error(username_ID,"Tên truy cập không hợp lệ");
   	}
   	else if(!checkchuso(password))
  	{
    	show_error(password_ID,"Mật khẩu không hợp lệ");
   	}
    else
   	{
   		$("#"+username_ID+"_error").hide();
   		
	  	$.get("/checkuser.ashx", { Page: "Login", username: username, password: MD5(password), login: 1 },
	   	function(data){
	   		if(data == "ok"){
	   			//var Acc_Content='<div id="acc_cnt"><a href="#Account_Manager/List_Act">Thông tin tài khoản</a>  |  <a href="#Account_Manager/ActionHistory&Type=HisLogin">Lịch sử hoạt động</a> | <a href="?act=Logout">Thoát</a> <a href="?Page=Logout"><img src="./templates/images/out.png" alt="Thoát" border="0"/></a></div>'
	   			//var Loginto='<font size=2><b>Tài khoản</b></font> <b><font color=red>'+username+'</font></b>'
	   			//$("#acc_cn").html(Acc_Content);
	   			//$("#logintro").html(Loginto);
	   			//$("#Login_Content").load("Load_Content.php?Page=Right_Content");
				Set_Cookiex('username', username, '1', '/', '', '');
				Set_Cookiex('password', MD5(password), '1', '/', '', '');
	   			window.location="/estore.aspx";
	   			//Show_Dialog('<font color=red>Nếu dữ liệu nhân vật không đúng. Hãy click chọn lại nhân vật ở danh sách nhân vật bên phải để cập nhật...</font>');
	   		}
	   		else
	   			show_error(report_ID,data);
		});
   	}
   	return false;
}