var img = '<center><img src="images/loading.gif"/></center>';

function loadInfo() {
    $('#countpoint').html('<center><img height="12px" src="images/loading.gif"/></center>');
    $.ajax({
        type: 'GET',
        url: 'LoadInfo.ashx',
        success: function (data) {
            var str = data.split('|')[0];
            $('#countpoint').html(str);
            str = data.split('|')[1];
            $('#nickname').html(str);
        }
    });
}
function loadItem(CategoryID, page) {
    $('#ListItem').html(img);
    $.ajax({
        type: 'GET',
        url: 'loadItem.ashx',
        data: 'CategoryID=' + CategoryID + '&page=' + page,
        success: function (data) {
            $('#ListItem').html(data);
            if (page < 2) {
				//document.getElementById('itemmenu').style.background="null";
				//document.getElementByClassName('.style5').style.background="null";
				//document.getElementById("menu_"+CategoryID).style.background="#fff";
                loadPaping(CategoryID, page);
            }
        }
    });
}
function loadPaping(CategoryID, page) {
    //$('#paping').html(img);
    $.ajax({
        type: 'GET',
        url: 'paging.ashx',
        data: 'CategoryID=' + CategoryID + '&page=' + page,
        success: function (data) {
            $('#paping').html(data);
        }
    });
}
function loadtab() {
    loadHotItem();
    loadTopBuy();
    loadSaleItem();
}
function loadHotItem() {
    $('#slider').html(img);
    $.ajax({
        type: 'GET',
        url: 'showhotitem.ashx',
        success: function (data) {
            $('#slider').html(data);
            $('#slider').movingBoxes({
                startPanel: 2,
                wrap: true,
                buildNav: false,
            });
        }
    });
}
function loadTopBuy() {
    $('#slider1').html(img);
    $.ajax({
        type: 'GET',
        url: 'showtopbuy.ashx',
        success: function (data) {
            $('#slider1').html(data);
            $('#slider1').movingBoxes({
                startPanel: 2,
                wrap: true,
                buildNav: false,
            });
        }
    });
}
function loadSaleItem() {
    $('#slider2').html(img);
    $.ajax({
        type: 'GET',
        url: 'showsaleitem.ashx',
        success: function (data) {
            $('#slider2').html(data);
            $('#slider2').movingBoxes({
                startPanel: 2,
                wrap: true,
                buildNav: false,
            });
        }
    });
}
function IsLogin() {
    showObj();
    $.ajax({
        type: 'GET',
        url: 'sectionlive.ashx',
        data: 'skiplive=true',
        success: function (data_revert) {
            if (data_revert == "live") {
			alert("Mua Thanh Cong");
                //loadItem(7, 1);
                //loadInfo();
                requestPay();
            }
            else {
                location.replace("index.html");
            }
        }
    });
}

function logout() {
    $.ajax({
        type: 'GET',
        url: 'sectionlive.ashx',
        data: 'skiplive=false',
        success: function (data_revert) {
			Set_Cookiex('username', null, '1', '/', '', '');
			Set_Cookiex('password', null, '1', '/', '', '');
            location.replace("index.html");
        }
    });
}

function ViewDetail(Obj) {
	
    //var alts = $("#item" + Obj).attr('alt').split(',');  
    $("#dialog").dialog({ modal: true });
    $('#view-item-content').html(img);
    var ID = $("#item" + Obj).attr('alt');//alts[0];
	            
    $.ajax({
        type: 'GET',
        url: 'popupStrigger.aspx',
        data: 'ID=' + ID,
        success: function (data) {
            $('#view-item-content').html(data);
        }
    });
}
function requestPay() {    
    $.ajax({
        type: 'GET',
        url: 'requestpay.ashx',
        success: function (data) {
            hideObjNoFade();
            showError(data, 'green');
            loadInfo();            
        }
    });
}
function BuyItem(Obj) {
    var count = $('#count' + Obj).val();
    if (!$.isNumeric(count)) {
        showError('Số lượng không hợp lệ!', 'red');
    }
    else {
        $("#buyitem").dialog({
            modal: true,
            buttons: {
                "Xác nhận": function () {
                    $(this).dialog("close");
					//alert("Mua Thanh Cong");
                    IsLogin();
                },
                "Hủy bỏ": function () {
                    $(this).dialog("close");
                }
            }
        });
        //var alts = $("#item" + Obj).attr('alt').split(',');            
        $('#buy-item-content').html(img);
        var ID = $("#item" + Obj).attr('alt');//alts[0];            
        $.ajax({
            type: 'GET',
            url: 'buyItem.ashx',
            data: 'id=' + ID + "&count=" + count,
            success: function (data) {
                $('#buy-item-content').html(data);

            }
        });
    }
}

function hideObjNoFade() {
    $("#TB_overlayBG").css({ display: "none" });
    $("#DynamicContent").css({ display: "none" });
}
function hideObj() {

    $("#TB_overlayBG").delay(2000).fadeOut('slow');
    $("#DynamicContent").delay(2000).fadeOut('slow');
}
function showObj() {
    $('#DynamicContent').corner("keep");
    $("#TB_overlayBG").fadeIn();
    $("#DynamicContent").fadeIn();
    $("#loading").html("Ðang sử lý, vui lòng chờ trong giây lát!<br/><img alt=\"\"  src=\"images/loading.gif\" /><br/>");
    var top = Math.max($(window).height() / 2 - $("#DynamicContent")[0].offsetHeight / 2, 0);
    var left = Math.max($(window).width() / 2 - $("#DynamicContent")[0].offsetWidth / 2, 0);
    $("#DynamicContent").css('top', top + "px");
    $("#DynamicContent").css('left', left + "px");
    $("#DynamicContent").css('position', 'fixed');
}
function showError(content, color) {
    $('#ErrorContent').corner("keep");
    $("#TB_overlayBG").fadeIn().delay(2000).fadeOut('slow');
    $("#ErrorContent").fadeIn().delay(2000).fadeOut('slow');
    if (color == "null") {
        $("#content").html(content);
    }
    else {
        $("#content").html('<span style="color:' + color + '; font-size: 14px;">' + content + '</span>');
    }
    var top = Math.max($(window).height() / 2 - $("#ErrorContent")[0].offsetHeight / 2, 0);
    var left = Math.max($(window).width() / 2 - $("#ErrorContent")[0].offsetWidth / 2, 0);
    $("#ErrorContent").css('top', top + "px");
    $("#ErrorContent").css('left', left + "px");
    $("#ErrorContent").css('position', 'fixed');
}
function hideOver() {

    $("#TB_overlayBG").css({ display: "none" });
}
function showOver() {
    $("#TB_overlayBG").css({ display: "block" });    
}