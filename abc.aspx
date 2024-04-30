<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="estore.aspx.cs" Inherits="Tank.eStore.estore" %>

<!DOCTYPE html>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <!-- Required CSS -->

<link href="development-bundle/themes/trontastic/jquery.ui.all.css" rel="stylesheet" type="text/css" />
<link href="css/movingboxes.css" rel="stylesheet">
<link href="css/home.css" rel="stylesheet">
<link href="css/smartpaginator.css" rel="stylesheet" />
<title>Home</title>
    <script type="text/javascript" src="./js/jquery-1.7.2.min.js"></script>   
    <script src="development-bundle/external/jquery.bgiframe-2.1.2.js"></script>
    <script src="development-bundle/ui/jquery.ui.core.js"></script>
    <script src="development-bundle/ui/jquery.ui.widget.js"></script>
    <script src="development-bundle/ui/jquery.ui.mouse.js"></script>
    <script src="development-bundle/ui/jquery.ui.button.js"></script>
    <script src="development-bundle/ui/jquery.ui.draggable.js"></script>
    <script src="development-bundle/ui/jquery.ui.position.js"></script>
    <script src="development-bundle/ui/jquery.ui.resizable.js"></script>
    <script src="development-bundle/ui/jquery.ui.tabs.js"></script>
    <script src="development-bundle/ui/jquery.ui.dialog.js"></script>    
    <script src="js/jquery.movingboxes.js"></script>
    <script src="js/jquery.corner.js"></script>
    <script src="js/eStore.js"></script>
    <script src="js/smartpaginator.js"></script>    
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
   
    <style type="text/css">
        .auto-style1
        {
            width: 90px;
        }   
		/* Dimensions set via css in MovingBoxes version 2.2.2+ */
		#slider { width: 910px; }
		#slider li { width: 290px; }
        #slider1 { width: 910px; }
		#slider1 li { width: 290px; }
        #slider2 { width: 910px; }
		#slider2 li { width: 290px; }
	</style>   
</head>
<body>
    <form id="form1" runat="server">
<div id="paping"></div><br />
<table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-repeat:repeat-x; background-position:top; height:100%;">
  <tr>
    <td width="100%" align="right" valign="top">        
   <table border="0" cellpadding="0" cellspacing="0">
        <tr>
            <td align="right"><div style="width:100px;" class="style1">Xin chào,&nbsp;&nbsp;</div></td>
            <td align="left"><div style="width:100px;" class="style10" id="nickname">admin&nbsp;&nbsp;</div></td>
            <td align="right"><div style="width:190px;" class="style1">Số point hiện tại:&nbsp;&nbsp;</div></td>
            <td align="left" class="auto-style1"><div style="width:100px;" id="countpoint" class="style10">1000000</div></td>
            <td align="center" class="auto-style1"><div style="width:100px;" class="style1"><a style="text-decoration:none;" href="javascript:void();" onclick="logout();" >Đăng xuất</a> </div> </td>
            <td align="right"><div style="width:120px;">&nbsp;&nbsp;</div></td>
        </tr>
    </table>
        <br />
    </td>
          </tr>        
      <tr>
        <td align="center" valign="top" width="100%"><table width="100%"  border="0" cellspacing="0" cellpadding="0">
          <tr align="center" valign="top">
            <td width="243" height="100%" align="right"><table width="214"  border="0" cellspacing="0" cellpadding="0" style="height:100% ">
              <tr>
                <td align="left" valign="top"><img alt=""  src="images/kettle_1.jpg" width="214" height="33"></td>
              </tr>
              <tr>
                <td height="100%" align="left" valign="top" bgcolor="#F3F3F3"><div style="padding-left:22px; padding-top:19px">
                  <table width="170"  border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td height="21" align="left" valign="middle" style="background-image:url(images/rep_2.jpg); background-position:bottom; background-repeat:repeat-x "><table width="100%"  border="0" cellspacing="0" cellpadding="0">
                        <tr align="left" valign="middle">
                          <td width="12"><img alt=""  src="images/point_3.jpg" width="2" height="2" hspace="1"></td>
                          <td><a href="javascript:void();" onclick="loadItem(7,1);" class="style5">Vũ khí</a></td>
                        </tr>
                      </table></td>
                    </tr>
                    <tr>
                      <td height="21" align="left" valign="middle" style="background-image:url(images/rep_2.jpg); background-position:bottom; background-repeat:repeat-x "><table width="100%"  border="0" cellspacing="0" cellpadding="0">
                          <tr align="left" valign="middle">
                            <td width="12"><img alt=""  src="images/point_3.jpg" width="2" height="2" hspace="1"></td>
                            <td><a href="javascript:void();" onclick="loadItem(5,1);" class="style5">Áo</a></td>
                          </tr>
                      </table></td>
                    </tr>
                    <tr>
                      <td height="21" align="left" valign="middle" style="background-image:url(images/rep_2.jpg); background-position:bottom; background-repeat:repeat-x "><table width="100%"  border="0" cellspacing="0" cellpadding="0">
                          <tr align="left" valign="middle">
                            <td width="12"><img alt=""  src="images/point_3.jpg" width="2" height="2" hspace="1"></td>
                            <td><a href="javascript:void();" onclick="loadItem(1,1);" class="style5">Nón</a></td>
                          </tr>
                      </table></td>
                    </tr>
                    <tr>
                      <td height="21" align="left" valign="middle" style="background-image:url(images/rep_2.jpg); background-position:bottom; background-repeat:repeat-x "><table width="100%"  border="0" cellspacing="0" cellpadding="0">
                          <tr align="left" valign="middle">
                            <td width="12"><img alt=""  src="images/point_3.jpg" width="2" height="2" hspace="1"></td>
                            <td><a href="javascript:void();" onclick="loadItem(13,1);" class="style5">Set Quần áo</a></td>
                          </tr>
                      </table></td>
                    </tr>
                    <tr>
                      <td height="21" align="left" valign="middle" style="background-image:url(images/rep_2.jpg); background-position:bottom; background-repeat:repeat-x "><table width="100%"  border="0" cellspacing="0" cellpadding="0">
                          <tr align="left" valign="middle">
                            <td width="12"><img alt=""  src="images/point_3.jpg" width="2" height="2" hspace="1"></td>
                            <td><a href="javascript:void();" onclick="loadItem(89,1);" class="style5">Nhẩn - Vòng tay</a></td>
                          </tr>
                      </table></td>
                    </tr>
                    <tr>
                      <td height="21" align="left" valign="middle" style="background-image:url(images/rep_2.jpg); background-position:bottom; background-repeat:repeat-x "><table width="100%"  border="0" cellspacing="0" cellpadding="0">
                          <tr align="left" valign="middle">
                            <td width="12"><img alt=""  src="images/point_3.jpg" width="2" height="2" hspace="1"></td>
                            <td><a href="javascript:void();" onclick="loadItem(505152,1);" class="style5">Trang bị pet</a></td>
                          </tr>
                      </table></td>
                    </tr>
                    <tr>
                      <td height="21" align="left" valign="middle" style="background-image:url(images/rep_2.jpg); background-position:bottom; background-repeat:repeat-x "><table width="100%"  border="0" cellspacing="0" cellpadding="0">
                          <tr align="left" valign="middle">
                            <td width="12"><img alt=""  src="images/point_3.jpg" width="2" height="2" hspace="1"></td>
                            <td><a href="javascript:void();" onclick="loadItem(2346,1);" class="style5">Làm đẹp</a></td>
                          </tr>
                      </table></td>
                    </tr>
                    <tr>
                      <td height="21" align="left" valign="middle" style="background-image:url(images/rep_2.jpg); background-position:bottom; background-repeat:repeat-x "><table width="100%"  border="0" cellspacing="0" cellpadding="0">
                          <tr align="left" valign="middle">
                            <td width="12"><img alt=""  src="images/point_3.jpg" width="2" height="2" hspace="1"></td>
                            <td><a href="javascript:void();" onclick="loadItem(1516,1);" class="style5">Cánh - Bong Bóng</a></td>
                          </tr>
                      </table></td>
                    </tr>
                    <tr>
                      <td height="21" align="left" valign="middle" style="background-image:url(images/rep_2.jpg); background-position:bottom; background-repeat:repeat-x ">
                          <table width="100%"  border="0" cellspacing="0" cellpadding="0">
                          <tr align="left" valign="middle">
                            <td width="12"><img alt=""  src="images/point_3.jpg" width="2" height="2" hspace="1"></td>
                            <td><a href="javascript:void();" onclick="loadItem(11,1);" class="style5">Đạo cụ hổ trợ</a></td>
                          </tr>
                      </table>
                      </td>
                    </tr>
                       <tr>
                      <td height="21" align="left" valign="middle" style="background-image:url(images/rep_2.jpg); background-position:bottom; background-repeat:repeat-x ">
                          <table width="100%"  border="0" cellspacing="0" cellpadding="0">
                          <tr align="left" valign="middle">
                            <td width="12"><img alt=""  src="images/point_3.jpg" width="2" height="2" hspace="1"></td>
                            <td><a href="javascript:void();" onclick="loadItem(34,1);" class="style5">Thức ăn pet</a></td>
                          </tr>
                      </table>
                      </td>
                    </tr>
                       <tr>
                      <td height="21" align="left" valign="middle" style="background-image:url(images/rep_2.jpg); background-position:bottom; background-repeat:repeat-x ">
                          <table width="100%"  border="0" cellspacing="0" cellpadding="0">
                          <tr align="left" valign="middle">
                            <td width="12"><img alt=""  src="images/point_3.jpg" width="2" height="2" hspace="1"></td>
                            <td><a href="javascript:void();" onclick="loadItem(35,1);" class="style5">Trứng thú cưng</a></td>
                          </tr>
                      </table>
                      </td>
                    </tr>
                       <tr>
                      <td height="21" align="left" valign="middle" style="background-image:url(images/rep_2.jpg); background-position:bottom; background-repeat:repeat-x ">
                          <table width="100%"  border="0" cellspacing="0" cellpadding="0">
                          <tr align="left" valign="middle">
                            <td width="12"><img alt=""  src="images/point_3.jpg" width="2" height="2" hspace="1"></td>
                            <td><a href="javascript:void();" onclick="loadItem(1714,1);" class="style5">Vũ khí phụ - Dây chuyền</a></td>
                          </tr>
                      </table>
                      </td>
                    </tr>
                  </table>
                  </div>
                  </td>
              </tr>
              <tr>
                <td height="18" align="left" valign="top"><img alt=""  src="images/bot_1.jpg" width="214" height="4"></td>
              </tr>
            </table></td>
            <td height="100%">
			<!--begin-->
                <div id="show_smartpaginator"></div>
			<div id="ListItem" style="padding-left:27px; padding-top:12px"></div>
            
			<!--end-->
			</td>
          </tr>
        </table></td>
      </tr>
      <tr>
        <td align="center" valign="top">  
            <asp:Label ID="tabscontent" runat="server" Text="tabs"></asp:Label>
        </td>
      </tr>
      <tr>
        <td align="left" valign="top"><div style="padding-left:65px; padding-top:25px">
          <table width="100%"  border="0" cellspacing="0" cellpadding="0">
            <tr align="center" valign="top">
              <td width="100%" height="47" >
                      <span class="style4">CashShop for DDTank v1.0 tiện lợi hơn, an toàn hơn.</span><br />
                      <span class="style4" style="color:red"><strong>Đặt biệt mua vật phẩn bạn sẻ nhận ngay và không cần thoát game.</strong> </span><br />
                      <span class="style4">Copyright &copy; <span style="color:red">Trminhpc</span>, 2013. All Rights Reserved</span>                  
              </td>
            </tr>
          </table>
          </div></td>
      </tr>
    </table>    

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
