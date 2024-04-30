<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="popupStrigger.aspx.cs" Inherits="Tank.eStore.popupStrigger" %>

    <style type="text/css">
        .DivMainContent
        {
            width: 100%;
            min-height: 100px;           
        }
        .ShowTitles
        {
           
            font:bold 13px/20px "Trebuchet MS", Arial, Helvetica, sans-serif;
            text-align: left;
            height: 25px;
            color: black;
        }
        
         .ShowDescription
        {
            min-height: 0px;
            color: #00FF00;
            font:normal 12px/15px "Trebuchet MS", Arial, Helvetica, sans-serif;
            text-align: justify;
        }
        .ShowID
        {
            height: 15px;
            color: #FFFFFF;
            font-size: 10px;
        }
     
         .ShowTitles0
        {
            font:bold 12px/20px "Trebuchet MS", Arial, Helvetica, sans-serif;
            text-align: left;
            min-height: 0px;
            color: #FFFFFF;
        }
       
        .AttDeffAgiLuc
        {
            font:bold 12px/20px "Trebuchet MS", Arial, Helvetica, sans-serif;
            min-height: 0px;
            color: #FF9900;
          
        }
        .LbSex
        {
            min-height: 1px;
            color: #00FF00;
            font:bold 12px/20px "Trebuchet MS", Arial, Helvetica, sans-serif;
        }
         .Type
        {
            font:bold 12px/20px "Trebuchet MS", Arial, Helvetica, sans-serif;
            text-align: left;
            min-height: 0px;
            color: #FFFFFF;
        }
        .Quality
        {
            height: 20px;
            font-weight: bold;
            color: #000080;
            font:bold 12px/20px "Trebuchet MS", Arial, Helvetica, sans-serif;
        }
        
    </style>

<asp:Label ID="popupStrigger1Content" runat="server">
<div class="DivMainContent">
        <table style="width:100%; color:#006600; " cellpadding="1" cellspacing="0" >
            <tr>
                <td colspan="2" >
                    <asp:Label ID="ShowTitles" CssClass="ShowTitles" runat="server" /></td>
            </tr>
            <tr>
                <td colspan="2">
                  <asp:Label ID="Quality" CssClass="Quality" runat="server" />
                    
                    </td>
            </tr>
            <tr>
                <td colspan="2" >
                 <asp:Label ID="Type" CssClass="Type" runat="server" /></td>
            </tr>
            <tr>
                <td colspan="2">
                    <asp:Label ID="ShowTitles0" CssClass="ShowTitles0" runat="server"/>
                    </td>
            </tr>
            <tr>
                <td colspan="2">
                    
                    <asp:Label ID="ShowAttack" CssClass="AttDeffAgiLuc" runat="server" />
                    </td>
            </tr>
            <tr>
                <td colspan="2">
                     
                    <asp:Label ID="ShowDefence" CssClass="AttDeffAgiLuc" runat="server" />
                    </td>
            </tr>
            <tr>
                <td  colspan="2">
                     
                    <asp:Label ID="ShowAgility" CssClass="AttDeffAgiLuc" runat="server" />
                    </td>
            </tr>
            <tr>
                <td  colspan="2">
                    
                    <asp:Label ID="ShowLuck" CssClass="AttDeffAgiLuc" runat="server" />
                    </td>
            </tr>
            <tr>
                <td colspan="2">
                   <asp:Label ID="LbSex" CssClass="LbSex" runat="server" /> </td>
            </tr>
            <tr>
                <td colspan="2">
                   <asp:Label ID="LbCan" CssClass="LbSex"  runat="server" /> </td>
            </tr>
            <tr>
                <td colspan="2">
                    <asp:Label ID="ShowDescription" CssClass="ShowDescription" runat="server" />
                    </td>
            </tr>
            <tr>
                <td  >
                    <asp:Label ID="ShowCategoryID" CssClass="ShowID" runat="server" />
                    </td>

                <td  >
                    <asp:Label ID="ShowTemplateID" CssClass="ShowID" runat="server" />
                    </td>

            </tr>
        </table>
    </div>

    </asp:Label>
   
