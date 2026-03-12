
Gs.Objects.ShowToolPanel = function (close) {
    if (close) { Metro.bottomsheet.close($('#ToolPanel')); } else {
        if (Metro.bottomsheet.isOpen($('#ToolPanel'))) { Metro.bottomsheet.close($('#ToolPanel')); }
        else { Metro.bottomsheet.open($('#ToolPanel')); }
    }
}

//Global Tool Panel
Gs.Objects.CreateToolPanel = function () {
    let html = '<div id="ToolPanel" data-role="bottom-sheet" class="bottom-sheet pos-fixed list-list grid-style opened" style="top: 0px; left: 90%; z-index:10000;min-width: 430px;">';
    html += '<div class="c-pointer mif-cancel mif-1x icon pos-absolute fg-red" style="top:5px;right:5px;" onclick=Gs.Objects.ShowToolPanel(); ></div>';
    html += '<DIV class=d-block><DIV class="d-flex row gutters mr-4" >'
    html += '<ul data-role="materialtabs" data-expand="true" data-tabs-type="text" data-on-tab="">';
    html += '<li class="fg-black"><A href="#_toolTranslate">Translate</A> </li>';
    html += '<li class="fg-black"><A href="#_toolUserSet">User Setting</A> </li>';
    //html += '<li class="fg-black"><A href="#_toolHelp">Fast Help</A></li>';
    //html += '<li class="fg-black"><A href="#_toolImages">Images</A></li>';
    //html += '<li class="fg-black"><A href="#_toolRadio">Radio</A></li>';
    //html += '<li class="fg-black"><A href="#_toolVideo">Video</A></li>';
    html += '</ul>';
    html += '<DIV id=_toolTranslate class="d-contents" style="display: contents !important;">';
    //html += '<div class="w-100 text-left"> <audio id="radio" class="light bg-transparent" data-role="audio-player" data-src="/server-integrated/razor-pages/server-portal/media/hotel_california.mp3" data-volume=".5"></audio> </div>';
    html += '<div class="w-100 text-left" style="z-index: 1000000;"><div id="google_translate_element"></div></div>';
    html += '<div class="w-100 d-inline-flex"><div class="w-75 text-left">';
    html += '<input id="EnableAutoTranslate" type="checkbox" data-role="checkbox" data-cls-caption="fg-cyan text-bold" data-caption="Auto Translate" onchange=Gs.Behaviors.SetUserSettings(); >';
    html += '</div><div class="w-25 mt-1 text-right" style="max-width:25% !important;"><button class="button secondary mini" style="max-width:100% !important;" onclick=Gs.Behaviors.CancelTranslation(true); >Cancel Translate</button></div></div>';
    html += '</div>';

    html += '<DIV id=_toolUserSet>';
    html += '<DIV class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12" >';
    html += '<DIV class="form-group m-0 p-0" > <INPUT id=EnableShowDescription onchange=Gs.Behaviors.SetUserSettings()  style = "HEIGHT: auto" autocomplete = "off" data-role="checkbox" data-caption="Enable Show Description" > </DIV ></DIV > ';
    html += '<DIV class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12" >';
    html += '<DIV class="form-group m-0 p-0" > <INPUT id=RememberLastJson onchange=Gs.Behaviors.SetUserSettings()  style = "HEIGHT: auto" autocomplete = "off" data-role="checkbox" data-caption="Remember Last JSON" > </DIV ></DIV > ';
    html += '<DIV class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12" >';
    html += '<DIV class="form-group m-0 p-0" > <INPUT id=RememberLastHandleBar onchange=Gs.Behaviors.SetUserSettings()  style = "HEIGHT: auto" autocomplete = "off" data-role="checkbox" data-caption="Remember Last HandleBar" > </DIV ></DIV > ';
    html += '<DIV class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12" >';
    html += '<DIV class="form-group m-0 p-0" > <INPUT id=EnableScreenSaver onchange=Gs.Behaviors.SetUserSettings()  style = "HEIGHT: auto" autocomplete = "off" data-role="checkbox" data-caption="Enable ScreenSaver" > </DIV ></DIV > ';

    html += '<DIV id=_toolRadio></div>';

    html += '<DIV id=_toolVideo></div>';

    html += '</div></div>';
    //html += '<div class="d-flex w-100" title="Theme">';
    //let themes = [
    //    ["#585b5d", "darcula.css?white"], ["#AF0015", "red-alert.css?white"], ["#690012", "red-dark.css?white"], ["#0CA9F2", "sky-net.css?white"],
    //    ["#585b5d", "darcula.css?#585b5d"], ["#AF0015", "red-alert.css?#AF0015"], ["#690012", "red-dark.css?#690012"], ["#0CA9F2", "sky-net.css?#0CA9F2"]
    //];
    //themes.forEach((theme, index) => {
    //    html += '<button class="button shadowed w-50px ' + (index < 4 ? "opc-05" : "") + ' mt-1" style="background-color: ' + theme[0] + ';" onclick=Gs.Behaviors.ChangeSchemeTo(\'' + theme[1] + '\'); ></button>';
    //    if (index == 3) { html += '</div><div class="d-flex w-100" title="BackGround">'; }
    //});

    let injectToolPanel = document.createElement("div");
    injectToolPanel.innerHTML = html;
    document.body.append(injectToolPanel);
};

Gs.Objects.ShowLoginPage = function () {
    let htnlContent = '<DIV class=text-center><WINDOW><DIV class="hero hero-bg 1bg-brand-secondary add-neb"><DIV class=container><DIV class=row>';
    htnlContent += '<FORM id=loginform class="login-form bg-white fg-darkBlue p-6 mx-auto border bd-default win-shadow" method=post action=javascript: data-role="validator" data-on-validate-form="ValidateForm" data-on-error-form="InvalidForm" data-clear-invalid="2000"><SPAN class="mif-vpn-lock mif-4x place-right" style="MARGIN-TOP: -10px"></SPAN>';
    htnlContent += '<H2 class=text-light>EIC&ESB Portal</H2>'
    htnlContent += '<DIV class=form-group><INPUT id=usernameId class=input style="HEIGHT: auto" maxLength=50 data-role="input" data-validate="required" placeholder="Insert Username..." data-prepend="<span class=\'mif-envelop\'>"> </DIV>';
    htnlContent += '<DIV class=form-group><INPUT id=passwordId type=password data-role="input" data-validate="required minlength=6" placeholder="Insert Password..." data-prepend="<span class=\'mif-key\'>"> </DIV>';
    htnlContent += '<DIV class="form-group mt-10"><INPUT class=place-right type=checkbox data-role="checkbox" data-caption="Remember"><BUTTON class="button shadowed">Přihlásit</BUTTON> </DIV></FORM></DIV></DIV></DIV></WINDOW></DIV>';
    document.getElementById("FrameWindow").innerHTML = htnlContent;
}


//Blocked IP Info Panel
Gs.Objects.ShowBlockedMessage = function () {
    var html_content =
        "<h3>Blokovaná IP Adresa</h3>" +
        "<p>Vaše adrese je blokována, protože byla zjištěna podezřelá činnost...</p>" +
        "<p>Pro Odblokování nás kontaktujte Telefonicky.</p>";
    Metro.infobox.create(html_content, "alert");
}


//Unauthorized Access Info Panel
Gs.Objects.ShowUnAuthMessage = function () {
    Gs.Behaviors.SignOut();
    var html_content =
        "<h3>Neautorizovaný Přístup</h3>" +
        "<p>Pokoušíte se provést autorizovanou operaci neoprávněně,</p>" +
        "<p>nebo platnost vašeho tokenu vypršela.</p>";
    Metro.infobox.create(html_content, "alert");
}


function GenerateMenu() {
    let htmlContent = "";

    let lastGuid = null, menuItem = {}, menu = [];
    let portalMenu = Metro.storage.getItem('PortalMenu', null);

    portalMenu.forEach((mItem, index, arr) => {

        switch (mItem.apiTableColumnName) {
            case "ParentGuid":
                menuItem.ParentGuid = mItem.value;
                menuItem.RecGuid = mItem.recGuid;
                menuItem.Id = mItem.id;
                menuItem.Description = mItem.description;
                menuItem.Public = mItem.public;
                menuItem.Active = mItem.active;
                break;
            case "Sequence":
                menuItem.Sequence = parseInt(mItem.value);
                break;
            case "Name":
                menuItem.Name = mItem.value;
                break;
            case "Timestamp":
                menuItem.Timestamp = new Date(mItem.value);
                break;
            case "Icon":
                menuItem.Icon = mItem.value;
                break;
            case "InheritedMenuType":
                menuItem.InheritedMenuType = mItem.value;
                break;
            case "HtmlContent":
                menuItem.HtmlContent = mItem.value;
                menuItem.HtmlContentId = mItem.id;
                break;
            case "JsContent":
                menuItem.JsContent = mItem.value;
                menuItem.JsContentId = mItem.id;
                break;
            case "CSSContent":
                menuItem.CssContent = mItem.value;
                menuItem.CssContentId = mItem.id;
                break;
            default:
        }

        if (lastGuid != null && (arr[index + 1] == undefined || arr[index + 1].recGuid != mItem.recGuid)) {
            menu.push(menuItem);
            menuItem = {};
        }

        lastGuid = mItem.recGuid;
    });
    menu.sort((a, b) => a.Sequence > b.Sequence ? 1 : -1);
    Metro.storage.setItem('Menu', menu);

    menu.forEach((mItem, index, arr) => {
        if (mItem.InheritedMenuType == "menu") {
            htmlContent += '<li id="' + mItem.Sequence + '" ' + (Metro.storage.getItem('UserSettingList', null).EnableShowDescription && mItem.Description != null && mItem.Description.length > 0 ? ' class="drop-shadow" data-role="hint" data-hint-text="' + mItem.Description + '"' : "''") + ' ><a href="#" class="dropdown-toggle"><span class="icon"><span class="' + mItem.Icon + '"></span></span><span class="caption">' + mItem.Name + '</span></a>';
            htmlContent += '<ul id ="' + mItem.RecGuid + '" class="navview-menu stay-open" data-role="dropdown"><li class="item-header" > ' + mItem.Name + '</li></ul>';
            htmlContent += '</li>';
        }

        if (index == arr.length - 1) { document.getElementById("PortalMenu").innerHTML = htmlContent; }
    });

    menu.forEach((mItem, index, arr) => {
        if (mItem.InheritedMenuType == "link") {
            htmlContent = '<li onclick=Gs.Behaviors.SetLink(' + mItem.HtmlContentId + ',"' + mItem.HtmlContent + '"); ' + (Metro.storage.getItem('UserSettingList', null).EnableShowDescription && mItem.Description != null && mItem.Description.length > 0 ? ' data-role="hint" data-hint-text="' + mItem.Description + '"' : "''") + ' ><a href= "#' + mItem.Name + '" ><span class="icon"><span class="' + mItem.Icon + '"></span></span><span class="caption">' + mItem.Name + '</span></a></li >';
            document.getElementById(mItem.ParentGuid).innerHTML = document.getElementById(mItem.ParentGuid).innerHTML + htmlContent;

        } else if (mItem.InheritedMenuType == "externalLink") {
            htmlContent = '<li onclick=Gs.Behaviors.SetExternalLink(' + mItem.HtmlContentId + ',"' + mItem.HtmlContent + '"); ' + (Metro.storage.getItem('UserSettingList', null).EnableShowDescription && mItem.Description != null && mItem.Description.length > 0 ? ' data-role="hint" data-hint-text="' + mItem.Description + '"' : "''") + ' ><a href= "#' + mItem.Name + '" ><span class="icon"><span class="' + mItem.Icon + '"></span></span><span class="caption">' + mItem.Name + '</span></a></li >';
            document.getElementById(mItem.ParentGuid).innerHTML = document.getElementById(mItem.ParentGuid).innerHTML + htmlContent;

        }

        else if (mItem.InheritedMenuType == "content") {
            htmlContent = '<li onclick=Gs.Behaviors.SetContent(' + mItem.HtmlContentId + ',' + mItem.JsContentId + ',' + mItem.CssContentId + '); ' + (Metro.storage.getItem('UserSettingList', null).EnableShowDescription && mItem.Description != null && mItem.Description.length > 0 ? ' data-role="hint" data-hint-text="' + mItem.Description + '"' : "''") + ' ><a href= "#' + mItem.Name + '" ><span class="icon"><span class="' + mItem.Icon + '"></span></span><span class="caption">' + mItem.Name + '</span></a></li >';
            document.getElementById(mItem.ParentGuid).innerHTML = document.getElementById(mItem.ParentGuid).innerHTML + htmlContent;
        }

        else if (mItem.InheritedMenuType == "externalContent") {
            htmlContent = '<li onclick=Gs.Behaviors.SetExternalContent(' + mItem.HtmlContentId + ',' + mItem.JsContentId + ',' + mItem.CssContentId + '); ' + (Metro.storage.getItem('UserSettingList', null).EnableShowDescription && mItem.Description != null && mItem.Description.length > 0 ? ' data-role="hint" data-hint-text="' + mItem.Description + '"' : "''") + ' ><a href= "#' + mItem.Name + '" ><span class="icon"><span class="' + mItem.Icon + '"></span></span><span class="caption">' + mItem.Name + '</span></a></li >';
            document.getElementById(mItem.ParentGuid).innerHTML = document.getElementById(mItem.ParentGuid).innerHTML + htmlContent;
        }


    });


    //let windowFunction = Metro.storage.getItem("RunFunction", null);
    //if (windowFunction != null) {
    //    window[windowFunction]();
    //    Metro.storage.delItem("RunFunction", null);
    //}
}



Gs.Objects.ShowNotify = function (type, message) {
    try {
        var notify = Metro.notify; notify.setup({ width: Gs.Variables.notifySetting.notifyWidth, timeout: Metro.storage.getItem('NotifyShowTime', 2000), duration: Gs.Variables.notifySetting.notifyDuration, animation: Gs.Variables.notifySetting.notifyAnimation });
        if (type == 'error' || type == 'alert') { notify.create(message, "Error", { cls: "alert" }); }
        else if (type == 'success') { notify.create(message, "Success", { cls: "success" }); }
        else if (type == 'info') { notify.create(message, "Info"); }
        notify.reset();
    } catch { }
}


Gs.Objects.ShowMessagePanel = function (close) {
    charms = Metro.getPlugin($("#charmPanel"), 'charms');
    if (close) {
        charms.close();
    } else { charms.toggle(); }
}


Gs.Objects.ShowFavorites = function (elementId, close = false) {
    if (close || Metro.bottomsheet.isOpen("#" + elementId)) {
        Gs.Functions.AddClass(elementId, "hidden");
        Metro.bottomsheet.close("#" + elementId);
        Gs.Functions.AddClass(elementId, "hidden");
    }
    else { Metro.bottomsheet.open("#" + elementId, "grid"); Gs.Functions.RemoveClass(elementId, "hidden"); }
}


Gs.Objects.RefreshPreview = function () {
    Gs.Functions.RemoveElement("PreviewScript"); Gs.Functions.RemoveElement("PreviewStyle");
    document.getElementById("menuPreview").innerHTML = null;

    if ($("#menuType").val() == "link") {
        $("#menuPreview").load(Metro.storage.getItem('BackendServerAddress', null) + "/" + Gs.Variables.monacoEditorList.filter(obj => { return obj.elementId == "monacoHTML" })[0].model.getValue());

    } else if ($("#menuType").val() == "externalLink") {
        document.getElementById("menuPreview").innerHTML = '<iframe id="PreviewFrameWindow" src="' + Gs.Variables.monacoEditorList.filter(obj => { return obj.elementId == "monacoHTML" })[0].model.getValue() + '" width="100%" height="600" frameborder="0" scrolling="yes" style="width:100%; height:100%;"></iframe>';

    } else if ($("#menuType").val() == "content") {
        document.getElementById("menuPreview").innerHTML = Gs.Variables.monacoEditorList.filter(obj => { return obj.elementId == "monacoHTML" })[0].model.getValue();

        if (Gs.Variables.monacoEditorList.filter(obj => { return obj.elementId == "monacoJS" })[0].model.getValue() != null) {
            let script = "<script id='PreviewScript' type='text/javascript'> " + Gs.Variables.monacoEditorList.filter(obj => { return obj.elementId == "monacoJS" })[0].model.getValue();
            $('body').append(script);
        }
        if (Gs.Variables.monacoEditorList.filter(obj => { return obj.elementId == "monacoCSS" })[0].model.getValue() != null) {
            let style = document.createElement('style'); style.id = "PreviewStyle";
            style.innerText = Gs.Variables.monacoEditorList.filter(obj => { return obj.elementId == "monacoCSS" })[0].model.getValue();
            document.head.appendChild(style);
        }
    } else if ($("#menuType").val() == "externalContent") {

    } else if ($("#menuType").val() == "menu") {
        document.getElementById("menuPreview").innerHTML ="Menu doesnt have Content"
    }
}


//Gs.Objects.InfoboxTableCreate = function (elementId) {
//    let html = "<div class='container'><table id='MenuTable' class='table striped' data-role='table' data-pagination='true' data-show-all-pages='false' ></div>";
//    let infoBox = Metro.infobox.create(html, "", {
//        closeButton: true,
//        type: "",
//        removeOnClose: true,
//        width: "80%",
//        height: "802",
//        tag: "",
//        id: elementId
//    });
//    var table = Metro.getPlugin("#PreviewTable", "table");
//    let data=[];
//    let functionList = Metro.storage.getItem('FunctionList', null);
//    functionList.forEach(fn => { data.push([ fn.Group, fn.Label, fn.Path ]); });
//    table.setItems(data); table.reload();
//}


Gs.Objects.InfoboxFrameCreate = function (elementId,url) {
    let infoBox = Metro.infobox.create("<iframe id='" + elementId + "' src='" + url + "'  width='100%' height='880' frameborder='0' scrolling='yes' style='width: 100%; height: 780px;' ></iframe>", "", {
        closeButton: true,
        type: "",
        removeOnClose: true,
        width: "80%",
        height: "800",
        tag: "",
        id: elementId
    });
}


Gs.Objects.InfoboxObjectCreate = function (elementId, html) {
    let infoBox = Metro.infobox.create(html, "", {
        closeButton: true,
        type: "",
        removeOnClose: true,
        width: "80%",
        height: "800",
        tag: "",
        id: elementId
    });
}


Gs.Objects.WindowIframeCreate = function (title, url, lastWindow = false) {
    if (lastWindow) { ( url = document.getElementById("IFrameWindow") != null ? document.getElementById("IFrameWindow").src : "/") }
    Metro.window.create({
        cls: "p-0", title: title, clsCaption: 'bg-orange',
        btnMin: true, btnMax: true, shadow: true,
        draggable: true, resizable: true,
        width:"100%", height:"100%",
        place: 'center',
        clsWindow: "supertop",
        icon: "<span class='mif-hour-glass'></spam>",
        onCaptionDblClick: function () { },
        btnClose: true,
        content: "<iframe id=WindowFrame src='" + url + "' width='100%' height='800' frameborder='0' scrolling='yes' style='width: 100%; height: 100 %;'></iframe>"
    });
}


Gs.Objects.OpenInExternalWindow = function (title, url, lastWindow = false) {
    if (lastWindow) { (url = document.getElementById("IFrameWindow") != null ? document.getElementById("IFrameWindow").src : "/") }
    window.open(url, title);
}





Gs.Objects.ShowRegistrationPage = function () {
    let htnlContent = '<DIV class=text-center><window><DIV class="hero hero-bg 1bg-brand-secondary add-neb"><DIV class=container><DIV class=row>';
    htnlContent += '<form class="bg-white p-4 login-form bg-white fg-darkBlue p-6 mx-auto border bd-default win-shadow" action="javascript:" data-role="validator" data-on-validate-form="ValidateRegForm" data-clear-invalid="2000" data-on-error-form="InvalidForm" >';
    htnlContent += '<img src="/server-portal/images/p-120x120.png" class="place-right mt-4-minus mr-5-minus"><h1 class="mb-0">Register</h1><div class="text-muted mb-4">Register to EIC & ESB Portal</div>'
    htnlContent += '<div class="form-group"><input id="firstName" type="text" data-role="input" placeholder="First name" data-append="<span class=\'mif-user\'>" data-validate="required"><span class="invalid_feedback">Please enter a valid First Name</span></div>';
    htnlContent += '<div class="form-group"><input id="surname" type="text" data-role="input" placeholder="Surname" data-append="<span class=\'mif-user\'>" data-validate="required"><span class="invalid_feedback">Please enter a Surname</span></div>';
    htnlContent += '<div class="form-group"><input id="userName" type="text" data-role="input" placeholder="UserName" data-append="<span class=\'mif-user\'>" data-validate="required"><span class="invalid_feedback">Please enter a UserName</span></div>';
    htnlContent += '<div class="form-group"><input id="email" type="text" data-role="input" placeholder="Email" data-append="<span class=\'mif-envelop\'>" data-validate="required"><span class="invalid_feedback">Please enter a valid Email Address</span></div>';
    htnlContent += '<div class="form-group"><input id="password" type="password" data-role="input" placeholder="Password" data-append="<span class=\'mif-key\'>" data-validate="required" name="password"><span class="invalid_feedback">Please enter a Password</span>';
    htnlContent += '<input class="mt-4" type="password" data-role="input" placeholder="Retype password" data-append="<span class=\'mif-checkmark\'>" data-validate="required equals=password"><span class="invalid_feedback">Please enter a Password</span></div>';
    htnlContent += '<div class="form-group d-flex flex-align-center flex-justify-between"><input type="checkbox" data-role="checkbox" data-caption="I agree to the <a href=\'#\'>terms</a>"><button class="button primary">Register</button></div>';
    htnlContent += '</form></div></div></div></window></div>';
    document.getElementById("FrameWindow").innerHTML = htnlContent;
}


Gs.Objects.ShowExportDialog = function (title) {
    Metro.dialog.create({
        title: title,
        content: "<div>Export Table Data id=menuTable to File</div>",
        closeButton: true,
        removeOnClose: true,
        actions: [
            {
                caption: "CSV",
                cls: "js-dialog-close success",
                onclick: function () { Gs.Functions.ExportTable({ type: 'csv' }); }
            },
            {
                caption: "TXT",
                cls: "js-dialog-close success",
                onclick: function () { Gs.Functions.ExportTable({ type: 'txt' }); }
            },
            {
                caption: "JSON",
                cls: "js-dialog-close success",
                onclick: function () { Gs.Functions.ExportTable({ type: 'json', escape: 'true' }); }
            },
            {
                caption: "XLS",
                cls: "js-dialog-close success",
                onclick: function () { Gs.Functions.ExportTable({ type: 'excel' }); }
            },
            {
                caption: "DOC",
                cls: "js-dialog-close success",
                onclick: function () { Gs.Functions.ExportTable({ type: 'doc' }); }
            },
            {
                caption: "PDF",
                cls: "js-dialog-close success",
                onclick: function () { Gs.Functions.ExportTable({ type: 'pdf', jspdf: { orientation: 'l', margins: { right: 10, left: 10, top: 40, bottom: 40 }, autotable: { extendWidth: true } } }); }
            }
        ]
    });
}


Gs.Objects.CreateDialogRequest =async function (title, content, actions) {
    Metro.dialog.create({
        title: title,
        content: content,
        closeButton: true,
        removeOnClose: true,
        actions: actions,
        clsDialog: "supertop"
    });
}


Gs.Objects.ShowPrintExport = function () {
    Metro.dialog.create({
        title: "Print & Export",
        content: "<div>Print & Export Opened Page</div>",
        closeButton: true,
        removeOnClose: true,
        closeAction: true,
        actions: [
            {
                caption: "Download Html",
                cls: "js-dialog-close success",
                onclick: function () { Gs.Functions.PrintOrExportWindow("Download");  }
            },
            {
                caption: "Download Image",
                cls: "js-dialog-close success",
                onclick: function () { Gs.Functions.PrintOrExportWindow("Image"); }
            },
            {
                caption: "Download Pdf",
                cls: "js-dialog-close success",
                onclick: function () { Gs.Functions.PrintOrExportWindow("Pdf"); }
            },
            //{
            //    caption: "Copy to Buffer",
            //    cls: "js-dialog-close success",
            //    onclick: function () { Gs.Functions.PrintOrExportWindow("Copy"); }
            //}
        ]
    });
}