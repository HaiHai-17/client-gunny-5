<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="estore.aspx.cs" Inherits="Tank.eStore.estore" %>
<!DOCTYPE html>
<html><head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <!-- Required CSS -->

<link href="development-bundle/themes/trontastic/jquery.ui.all.css" rel="stylesheet" type="text/css" />
<link href="css/movingboxes.css" rel="stylesheet">
<link href="css/home.css" rel="stylesheet">
<link href="css/smartpaginator.css" rel="stylesheet" />
<title>Gunny web shop</title>
   
	 <script src="./media/js/jquery.min.js"></script> 
	 <script src="./media/js/action.js"></script>
	 <script src="./media/js/jquery-ui-1.8.16.custom.min.js"></script>
	 <script src="./media/js/jquery.tooltip.js" type="text/javascript"></script>
	 <script src="./media/js/jquery.colorbox.js"></script>
	 <script src="./media/imagehelu/jquery_002.js" type="text/javascript"></script>
	 <script src="./media/imagehelu/showimg.js" type="text/javascript"></script>
	  <script type="text/javascript" src="js/webtoolkit.md5.js"></script>
      <script src="development-bundle/ui/jquery.ui.dialog.js"></script>
      <script src="js/jquery.movingboxes.js"></script>
      <script src="js/jquery.corner.js"></script>
      <script src="js/eStore.js"></script>
      <script src="js/smartpaginator.js"></script>
	 <script type="text/javascript">
	 if ($.browser.msie) {
		alert( "Vui lòng sử dụng trình duyệt Chrome hoặc Firefox để truy cập vào trang Quản Lý Tài Khoản." );
		}
	 </script>
	 <link href="./media/css/webshop_2010122303.css" media="screen" rel="stylesheet" type="text/css" />
	 <link href="./media/css/sexybuttons.css" media="screen" rel="stylesheet" type="text/css" />
	 
	<link rel="stylesheet" href="./media/css/reset.css" type="text/css" media="screen" title="no title">
	<link rel="stylesheet" href="./media/css/text.css" type="text/css" media="screen" title="no title">
	<link rel="stylesheet" href="./media/css/layout.css" type="text/css" media="screen" title="no title">	

	<link rel="stylesheet" href="./media/css/login.css" type="text/css" media="screen" title="no title">
	
	<link rel="stylesheet" href="./media/css/buttons.css" type="text/css" media="screen" title="no title">
	<link rel="stylesheet" href="./media/css/form.css" type="text/css" media="screen" title="no title">
	<link rel="stylesheet" href="./media/css/grid.css" type="text/css" media="screen" title="no title">	
	<link rel="stylesheet" href="./media/css/mini-pricing-grid.css" type="text/css" media="screen" title="no title">	
	<link rel="stylesheet" href="./media/css/uniform.css" type="text/css" media="screen" title="no title">
	<link rel="stylesheet" href="./media/css/dataTables.css" type="text/css" media="screen" title="no title">
	
	<link rel="stylesheet" href="./media/css/style.css" type="text/css" media="screen" title="no title">
	
 	<link rel="stylesheet" href="./media/css/custom.css" type="text/css" media="screen" title="no title">

	<link href="./media/imagehelu/style.css" rel="stylesheet" type="text/css">	

    <link href="./media/imagehelu/global.css" rel="stylesheet" type="text/css">
    <link href="./media/imagehelu/feature-carousel.css" rel="stylesheet" type="text/css">
    <script src="./media/imagehelu/jquery.featureCarousel.js" type="text/javascript"></script> 
    <script type="text/javascript">
        $(document).ready(function () {            
            loadItem(7, 1);
            loadInfo();            
            //$("#tabs").tabs();
            //$('#slider').movingBoxes({
            //    startPanel: 2
            //});
            //$('#slider1').movingBoxes({
            //    startPanel: 2
            //});
            //$('#slider2').movingBoxes({
            //    startPanel: 2
            //});
        });

  </script> 
</head>
<body>
    <form id="form1" runat="server">
<div id="wrapper-main">

  <div id="header">
     <div id="logoControl"><a href="http://gun24h.us" name="top"></a></div>
    <ul class="ls_regist">
      <li><a target="_blank" href="http://gun24h.us">Trang chủ</a></li>
      <li><a target="_blank" href="http://fb.com/gun24hus">Fanpage</a></li>
	  	  <li style="list-style-type:none" id="History_Menu"><a href="#Account_Manager/ActionHistory&amp;Type=HisLogin" style="cursor:pointer" target="_self" title="Lịch sử hoạt động">Lịch sử hoạt động</a></li>
	  <li style="list-style-type:none" id="IPProtect_Menu" class="nav_icon"><a href="#IPProtect" title="Bảo vệ IP">Khóa IP</a></li>	  <li class="line_none" style="list-style-type:none" id="Logout_Menu"><a href="javascript:void();" onclick="logout();" style="cursor:pointer" target="_self" title="Thoát"><img style="float:right; margin-top:-3px; margin-left:3px;" src="./media/imagehelu/logout.png"> Thoát</a></li>			
	      </ul>
  </div>
 		<div class="menu-main"><div class="menu-main">
			<!-- Box Menu -->
			
			<ul id="menu-main-wrapper">
<li>|</li><li style="list-style-type:none" id="TaiKhoan_Menu">
<a id="menu_7" href="javascript:void();" onclick="loadItem(7,1);" class="style5">Vũ khí</a></li>
<li>|</li>
<li style="list-style-type:none" id="Character_Menu">
<a id="menu_5" href="javascript:void();" onclick="loadItem(5,1);" class="style5">Áo</a>
</li>
<li>|</li>
<li style="list-style-type:none" id="NapThe_Menu" class="nav_icon">
<a id="menu_1" href="javascript:void();" onclick="loadItem(1,1);" class="style5">Nón</a></li>
<li>|</li>	                	
<li style="list-style-type:none" id="WebShop_Menu">
<a id="menu_13" href="javascript:void();" onclick="loadItem(13,1);" class="style5">Set Quần áo</a></li>
<li>|</li>						
<li style="list-style-type:none" id="Event_Menu" class="nav_icon">
<a id="menu_89" href="javascript:void();" onclick="loadItem(89,1);" class="style5">Nhẩn - Vòng tay</a></li><li>|</li>	                	
<li style="list-style-type:none" id="NganHang_Menu"><a id="menu_89"href="javascript:void();" onclick="loadItem(505152,1);" class="style5">Trang bị pet</a></li>
<li>|</li>						
<li style="list-style-type:none" id="GiaiTri_Menu" class="nav_icon"><a id="menu_2346" href="javascript:void();" onclick="loadItem(2346,1);" class="style5">Làm đẹp</a></li><li>|</li>

<li style="list-style-type:none" id="GiaiTri_Menu" class="nav_icon"><a id="menu_1516" href="javascript:void();" onclick="loadItem(1516,1);" class="style5">Cánh - Bong Bóng</a></li><li>|</li>

<li style="list-style-type:none" id="GiaiTri_Menu" class="nav_icon"><a id="menu_11" href="javascript:void();" onclick="loadItem(11,1);" class="style5">Đạo cụ hổ trợ</a></li><li>|</li>

<li style="list-style-type:none" id="GiaiTri_Menu" class="nav_icon"><a id="menu_34" href="javascript:void();" onclick="loadItem(34,1);" class="style5">Thức ăn pet</a></li><li>|</li>

<li style="list-style-type:none" id="GiaiTri_Menu" class="nav_icon"><a id="menu_35" href="javascript:void();" onclick="loadItem(35,1);" class="style5">Trứng thú cưng</a></li><li>|</li>

<li style="list-style-type:none" id="GiaiTri_Menu" class="nav_icon"><a id="menu_1714"  href="javascript:void();" onclick="loadItem(1714,1);" class="style5">Vũ khí phụ - Dây chuyền</a></li><li>|</li>
<div class="clear"></div>
			</ul>
			<!-- End Box Menu -->	
		</div></div>
  <div id="line_content">
    <div id="content-wrapper">
      <div id="container"><div id="Account_Content"><div id="Account_Content">

		<div class="rt_sider">
			<!-- Box Character -->
			<!-- Box Login -->
			<div class="login">
				<div class="login_01"><img src="./media/imagehelu/ico_account.png">Chọn nhân vật</div>
				<div class="login_02">
					<ul class="char-select">
					<li><img class="class" src="media/images/dk.gif"><a href="javascript:;" id="nickname">nickname</a></li>					</ul><!-- char-select -->
<br>
		
		<table border="0" cellspacing="0" cellpadding="0" width="100%" style="padding:0 7px">
			<tbody><tr><td><div style="height:20px;"><!-- --></div></td></tr>
			<tr><td class="sidebar-title account-title">Tài khoản</td></tr>
			<tr><td>
					<table id="account_info_tbl">
						<tbody><tr>
						  <td class="list_info"><li></li></td>
							<td class="info_acc"><div style="float:left"><font size="2">Point</font></div><div style="float:right"><span id="countpoint">0</span></div></td>
						</tr>
						<tr>
						 <td class="list_info"><li></li></td>
							<td class="info_acc"><div style="float:left"><font size="2">V.Point</font></div><div style="float:right"><span>0</span></div></td>
						</tr>
						<tr>
						  <td class="list_info"><li></li></td>
							<td class="info_acc"><div style="float:left"><font size="2">Xu</font></div><div style="float:right"><span>99999999</span></div></td>
						</tr>
						<tr>
						 <td class="list_info"><li></li></td>
							<td class="info_acc"><div style="float:left"><font size="2">Xu khóa</font></div><div style="float:right"><span>999999</span></div></td>
						</tr>
						<tr>
						 <td class="list_info"><li></li></td>
							<td class="info_acc"><div style="float:left"><font size="2">Creation</font></div><div style="float:right"><span>0</span></div></td>
						</tr>
						<tr>
						 <td class="list_info_last"><li></li></td>
							<td class="info_acc_last"><div style="float:left"><font size="2">Blue Feather</font></div><div style="float:right"><span>0</span></div></td>
						</tr>
					</tbody></table>
			</td></tr>
		</tbody></table>
			</div>
				</div>
			</div>
			
			

		</div>			</div>			<div id="Load_Content">
<div id="Load_Content">

	<div id="left_colm">
		<table style="width: 100%;" cellpadding="2">
			<tbody>
<tr>
				<td style="text-align: right; height: 25px;">

					<table style="margin-top: 7px;" border="0" cellpadding="0" cellspacing="0" width="100%">
						<tbody>
						<tr>
							<td colspan="3" style="text-align:left;"><p class="title_page">Cửa hàng Vé Event</p></td>
						</tr>
						<tr>
						  <td colspan="3">&nbsp;</td>
						  </tr>
						</tbody>
					</table>				</td>
			</tr>
</tbody>
</table>
<div id="paping"></div><br />

 <div id="show_smartpaginator"></div>
			<div id="ListItem" style="padding-left:27px; padding-top:12px"></div>
</div>
</div>
<div id="ShopTbl" title="Cửa hàng" style="display:none">
	<div id="ShopCont"></div>
</div></div>      </div><!-- /container -->
      <div class="clear"></div>
    </div><!-- /content -->
  </div>
</div><center>
            <asp:Label ID="tabscontent" runat="server" Text="tabs"></asp:Label>
            </center>
<div id="footer">
  <div class="cover_footer">
    <div class="block">
      <div class="left_block">
        <p>
<a href="http://gun24h.us"><strong>Hệ thống trang quản lý tài khoản được quản lý bởi </strong></a><sup>© </sup>Team Việt</p>
<p>
	Phiên bản sử dụng: <a href="http://gun24h.us">Giáng sinh thần bí</a></p>
<p>
	Hotline: <a href="http://gun24h.us">09xxxxx</a></p>
      </div>
      <div class="right_block">
      <p>
	<strong>Đối tác:</strong></p>
<ul class="nav_ls">
	<li>
		<a href="http://www.mobilegame.vn/" target="_blank"><img alt="www.mobilegame.vn" src="./media/imagehelu/mobile-game.png" style="width:73px;height: 35px;" align="absmiddle"></a></li>
	<li>
		<a href="http://www.tiepthigiadinh.com.vn/" target="_blank"><img alt="Báo Tiếp thị Gia đình" src="./media/imagehelu/tiep-thi-gia-dinh.png" style="width:105px;height: 33px;" align="absmiddle"></a></li>
	<li>
		<a href="http://vnwebmaster.com/" target="_blank"><img alt="vnwebmaster.com" src="./media/imagehelu/vnwebmaster.png" style="height: 35px;" align="absmiddle"></a></li>
	<li>
		<a href="http://www.onboom.com/" target="_blank"><img alt="vnwebmaster.com" src="./media/imagehelu/onboom.png" style="height: 35px;" align="absmiddle"></a></li>
</ul>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</div>
<div id="dialog" title="Thông tin chi tiết">
    <div id="view-item-content">
    </div>
</div>
<div id="buyitem" title="Thông tin giao dịch">
    <div id="buy-item-content">
    </div>
</div>
<div id="DynamicContent">
	<div id="loading" >
      Ðang sử lý, vui lòng chờ trong giây lát!
	  <img alt=""  src="images/loading.gif" />
     </div>               		
	</div>
<div id="ErrorContent">
	    <div id="content" >
        </div>               		
	</div>
        <div id="TB_overlayBG">
</div>


     
    </form>
</body>
</html>