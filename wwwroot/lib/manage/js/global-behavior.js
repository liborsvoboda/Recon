// STARTUP Temp Variables Definitions
let pageLoader;


Gs.Behaviors.PortalStartup = async function () {
    if (Metro.storage.getItem("ApiToken", null) != null) { Cookies.set("ApiToken", Metro.storage.getItem("ApiToken", null).Token); }
    Gs.Objects.CreateToolPanel();

    Gs.Variables.getSpProcedure[1].tableName = "SolutionMixedEnumList";
    await Gs.Apis.RunServerPostApi("DatabaseService/SpProcedure/GetGenericDataListByParams", Gs.Variables.getSpProcedure, "MixedEnumList");

    Gs.Variables.getSpProcedure[1].tableName = "SolutionMonacoSuggestionList";
    Gs.Variables.getSpProcedure[2].camelCase = true;
    await Gs.Apis.RunServerPostApi("DatabaseService/SpProcedure/GetGenericDataListByParams", Gs.Variables.getSpProcedure, "MonacoSuggestionList");
    Gs.Variables.getSpProcedure[2].camelCase = false;

    await Gs.Apis.RunServerGetApi("PortalApiTableService/GetApiTableDataList/PortalMenu", "PortalMenu");
    await Gs.Apis.RunServerGetApi("InformationService/GetVersion", "ServerVersion");

    $(document).ready(function () {
        setTimeout(function () {
            GenerateMenu();
            Gs.Functions.GetFunctionList();
            
            if (!Gs.Apis.IsLogged()) { Gs.Behaviors.LoadUserSettings();
            } else { Gs.Apis.GetUserSetting(); }
        }, 5000);
    }); 
    
}


Gs.Behaviors.HidePageLoading = function () { Metro.activity.close(pageLoader); }
Gs.Behaviors.ShowPageLoading = function () {
    if (pageLoader != undefined) {
        if (pageLoader[0]["DATASET:UID:M4Q"] == undefined) { pageLoader = null; }
        else {
            try { Metro.activity.close(pageLoader); } catch {
                try { pageLoader.close(); } catch { pageLoader = pageLoader[0]["DATASET:UID:M4Q"].dialog; pageLoader.close(); }; pageLoader = null;
            }
        }
    }
    pageLoader = Metro.activity.open({ type: 'atom', style: 'dark', overlayClickClose: true, /*overlayColor: '#fff', overlayAlpha: 1*/ });
}


Gs.Behaviors.GetGoogleOptionLanguageIndex = function (optionValue) {
    if (document.querySelector('#google_translate_element select') != null) {
        let options = Array.from(document.getElementsByClassName("goog-te-combo")[0].options);
        return options.findIndex((opt) => opt.value == optionValue);
    } else { return 0; }
}


Gs.Behaviors.GoogleTranslateElementInit = function () {
    $(document).ready(function () {
        new google.translate.TranslateElement({
            pageLanguage: 'en', //includedLanguages: 'en,cs',
            layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
            autoDisplay: false
        }, 'google_translate_element');

        let autoTranslateSetting = Metro.storage.getItem('UserSettingList', null).EnableAutoTranslate == null || Metro.storage.getItem('UserSettingList', null).EnableAutoTranslate == false ? false : true;
        if (autoTranslateSetting && document.querySelector('#google_translate_element select') != null) {
            setTimeout(function () {
                let selectElement = document.querySelector('#google_translate_element select');
                selectElement.value = Metro.storage.getItem('DetectedLanguage', null);
                selectElement.dispatchEvent(new Event('change'));
            }, 1000);
        }
    });
}


Gs.Behaviors.CancelTranslation = async function (cancel) {
    if (cancel) {
        let userSettingList = Metro.storage.getItem('UserSettingList', null);
        let translateActive = userSettingList.EnableAutoTranslate;
        Gs.Variables.UserSettingList.EnableAutoTranslate = userSettingList.EnableAutoTranslate = false;
        Metro.storage.setItem('UserSettingList', userSettingList);
        Gs.Behaviors.ElementSetCheckBox("EnableAutoTranslate", Gs.Variables.UserSettingList.EnableAutoTranslate);
        if (translateActive && Gs.Apis.IsLogged()) {//on disabling translation Save UserSettingList
            await Gs.Apis.RunServerPostApi("PortalApiTableService/SetUserSettingList", Metro.storage.getItem("UserSettingList", null), null);
        }
    }
    if (document.querySelector('#google_translate_element select') != null) {
        setTimeout(function () {
            let selectElement = document.querySelector('#google_translate_element select');
            if (Gs.Behaviors.GetGoogleOptionLanguageIndex("") == 0) {
                selectElement.selectedIndex = 0; 
            } else { selectElement.selectedIndex = Gs.Behaviors.GetGoogleOptionLanguageIndex("en"); }
            selectElement.dispatchEvent(new Event('change'));
            if (selectElement.value != '') {
                setTimeout(function () {
                    if (Gs.Behaviors.GetGoogleOptionLanguageIndex("") == 0) {
                        selectElement.selectedIndex = 0; 
                    } else { selectElement.selectedIndex = Gs.Behaviors.GetGoogleOptionLanguageIndex("en"); }
                    selectElement.dispatchEvent(new Event('change'));
                    if (selectElement.value != '') {
                        setTimeout(function () {
                            if (Gs.Behaviors.GetGoogleOptionLanguageIndex("") == 0) {
                                selectElement.selectedIndex = 0; 
                            } else { selectElement.selectedIndex = Gs.Behaviors.GetGoogleOptionLanguageIndex("en"); }
                            selectElement.dispatchEvent(new Event('change'));
                        }, 2000);
                    }
                }, 2000);
            }
        }, 1000);
    }
}


Gs.Behaviors.ScrollToTop = function () { window.scrollTo(0, 0); }
Gs.Behaviors.EnableScroll = function () { window.onscroll = function () { }; }
Gs.Behaviors.DisableScroll = function () {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        window.onscroll = function () { window.scrollTo(scrollLeft, scrollTop); };
}


Gs.Behaviors.SetUserSettings = async function () {
    let userSetting = JSON.parse(JSON.stringify(Metro.storage.getItem('UserSettingList', null)))
    userSetting.EnableAutoTranslate = $("#EnableAutoTranslate")[0].checked;
    userSetting.EnableShowDescription = $("#EnableShowDescription")[0].checked;
    userSetting.RememberLastHandleBar = $("#RememberLastHandleBar")[0].checked;
    userSetting.RememberLastJson = $("#RememberLastJson")[0].checked;
    userSetting.EnableScreenSaver = $("#EnableScreenSaver")[0].checked;

    Metro.storage.setItem('UserSettingList', userSetting);Gs.Variables.UserSettingList = userSetting;

    //reset UserSetting Data
    if (!Metro.storage.getItem('UserSettingList', null).RememberLastHandleBar) { Metro.storage.delItem("HandlebarCode"); }
    if (!Metro.storage.getItem('UserSettingList', null).RememberLastJson) { Metro.storage.delItem("JsonGeneratorService"); }

    //Save UserSettingList
    if (Gs.Apis.IsLogged()) {
        await Gs.Apis.RunServerPostApi("PortalApiTableService/SetUserSettingList", Metro.storage.getItem("UserSettingList", null), null);
    }

    if ($("#EnableAutoTranslate").val('checked')[0].checked) { Gs.Behaviors.GoogleTranslateElementInit(); } else { Gs.Behaviors.CancelTranslation(false); }
    if ($("#EnableScreenSaver").val('checked')[0].checked && document.getElementById("ScreenSaver") == null) {
        Gs.Variables.screensaver = new Screensaver({
            secondsInactive: 60,
            speed: 1.5,
            logo: "/server-portal/images/logo.png",
            disabledWhenUsingIframes: false,
        });
    } else if (!$("#EnableScreenSaver").val('checked')[0].checked) { Gs.Variables.screensaver = {}; Gs.Functions.RemoveElement("ScreenSaver"); }
}


Gs.Behaviors.LoadUserSettings = function () {
    Gs.Behaviors.ElementSetCheckBox("EnableAutoTranslate", Gs.Variables.UserSettingList.EnableAutoTranslate);
    Gs.Behaviors.ElementSetCheckBox("EnableShowDescription", Gs.Variables.UserSettingList.EnableShowDescription);
    Gs.Behaviors.ElementSetCheckBox("RememberLastHandleBar", Gs.Variables.UserSettingList.RememberLastHandleBar);
    Gs.Behaviors.ElementSetCheckBox("RememberLastJson", Gs.Variables.UserSettingList.RememberLastJson);
    Gs.Behaviors.ElementSetCheckBox("EnableScreenSaver", Gs.Variables.UserSettingList.EnableScreenSaver);

    //Apply Changes
    Gs.Behaviors.SetUserSettings();
}


Gs.Behaviors.BeforeSetMenu = function (htmlContentId) {
    Gs.Variables.monacoEditorList = [];

    //SET UserSetting
    Gs.Behaviors.LoadUserSettings();

    //RESET here storage tables from Portal Menu
    Metro.storage.delItem("SelectedMenuId");
    Metro.storage.delItem('ApiTableList');
    Metro.storage.delItem("SelectedMenu");
    Metro.storage.delItem("ServerStartUpScriptList");
    Metro.storage.delItem("FtpServerStatus");
    Metro.storage.delItem("SchedulerServerStatus");   
    Metro.storage.delItem("MyQuestionList");
    Metro.storage.delItem("QuestionForResponseList");
    Metro.storage.delItem("SolutionCodeLibraryList"); 
    Metro.storage.delItem("SolutionMixedEnumList");
    Metro.storage.delItem("SelectedEditor");
    Metro.storage.delItem("PortalApiTableList");
    Metro.storage.delItem("EmailTemplateList");
    Metro.storage.delItem("RunAdminQueryResultList");
    Metro.storage.delItem("AudioNotepadList");
    Metro.storage.delItem("DataTableList");
    Metro.storage.delItem("CodeGeneratorList");
    

    Metro.storage.delItem("SelectedEditor");
    Metro.storage.delItem("OpenExcelFile");
    Metro.storage.delItem("OpenWordFile");
    Metro.storage.delItem("OpenPowerPointFile");
    Metro.storage.delItem("RevealPreview");
    Metro.storage.delItem("RevealPreviewData");
    //Metro.storage.delItem("RunFunction");

    Gs.Functions.RemoveElement("InheritScript"); Gs.Functions.RemoveElement("InheritStyle");
    let menu = JSON.parse(JSON.stringify(Metro.storage.getItem('Menu', null)));
    Metro.storage.setItem('SelectedMenu', menu.filter(obj => { return obj.HtmlContentId == htmlContentId })[0]);
    Metro.storage.setItem('SelectedMenuId', menu.filter(obj => { return obj.HtmlContentId == htmlContentId })[0].Id);
    return menu;
}


//Menu Behaviors
Gs.Behaviors.SetLink = function (htmlContentId, content) {
    let menu = Gs.Behaviors.BeforeSetMenu(htmlContentId);

    $("#FrameWindow").load(Metro.storage.getItem('ApiOriginSuffix', null) + content);
}


Gs.Behaviors.SetExternalLink = function (htmlContentId, content) {
    let menu = Gs.Behaviors.BeforeSetMenu(htmlContentId);

    document.getElementById("FrameWindow").innerHTML = 
    '<div id=MainWindow data-role="window" data-custom-buttons="WindowButtons" data-icon="<span class=\'' + menu.filter(obj => { return obj.HtmlContentId == htmlContentId })[0].Icon + '\'></spam>" data-title="' + menu.filter(obj => { return obj.HtmlContentId == htmlContentId })[0].Name + '" class="h-100" data-btn-close="false" data-btn-min="false" data-btn-max="false" data-width="100%" data-height="800" data-draggable="false" >'
    + '<iframe id="IFrameWindow" src="' + content + '" width="100%" height="700" frameborder="0" scrolling="yes" style="width:100%; height:100%;"></iframe></div>';
}


Gs.Behaviors.SetContent = function (htmlContentId, jsContentId, cssContentId) {
    let menu = Gs.Behaviors.BeforeSetMenu(htmlContentId);

    document.getElementById("FrameWindow").innerHTML =
         '<div id=MainWindow data-role="window" data-custom-buttons="WindowButtons" data-icon="<span class=\'' + menu.filter(obj => { return obj.HtmlContentId == htmlContentId })[0].Icon + '\'></spam>" data-title="' + menu.filter(obj => { return obj.HtmlContentId == htmlContentId })[0].Name + '" data-btn-close="false" class="h-100" data-btn-min="false" data-btn-max="false" data-width="100%" data-height="800" data-draggable="false" >'
         + menu.filter(menuItem => { return menuItem.HtmlContentId == htmlContentId })[0].HtmlContent + "</div>";

    if (menu.filter(menuItem => { return menuItem.JsContentId == jsContentId })[0].JsContent != null) {
        let script = "<script id='InheritScript' charset='utf-8' type='text/javascript'> " + menu.filter(menuItem => { return menuItem.JsContentId == jsContentId })[0].JsContent + " </script>";
        $('body').append(script);
    }
    if (menu.filter(menuItem => { return menuItem.CssContentId == cssContentId })[0].CssContent != null) {
        let style = document.createElement('style'); style.id = "InheritStyle"; style.rel = 'stylesheet';
        style.innerText = menu.filter(menuItem => { return menuItem.CssContentId == cssContentId })[0].CssContent;
        document.head.appendChild(style);
    }
    
}


Gs.Behaviors.SetExternalContent = function (htmlContentId, jsContentId, cssContentId) {
    let menu = Gs.Behaviors.BeforeSetMenu(htmlContentId);

    document.getElementById("FrameWindow").innerHTML =
    '<iframe id="IFrameWindow" src="' + menu.filter(menuItem => { return menuItem.HtmlContentId == htmlContentId })[0].HtmlContent + '" width="100%" height="600" frameborder="0" scrolling="yes" style="width:100%; height:100%;"></iframe>';

    if (menu.filter(menuItem => { return menuItem.JsContentId == jsContentId })[0].JsContent != null) {
        let script = "<script id='InheritScript' charset='utf-8' type='text/javascript'> " + menu.filter(menuItem => { return menuItem.JsContentId == jsContentId })[0].JsContent + " </script>";
        $("#IFrameWindow").contents().find("body").append(script);
    }
    if (menu.filter(menuItem => { return menuItem.CssContentId == cssContentId })[0].CssContent != null) {
        let style = document.createElement('style'); style.id = "InheritStyle"; style.rel = 'stylesheet';
        style.innerText = menu.filter(menuItem => { return menuItem.CssContentId == cssContentId })[0].CssContent;
        let iframeHead = document.getElementById('IFrameWindow').contentWindow.document.head;
        iframeHead.appendChild(style);
    }
}


Gs.Behaviors.ElementExpand = function (elementId) {
    try {
        let el = Metro.getPlugin('#' + elementId, 'collapse');
        let elStatus = el.isCollapsed();
        if (elStatus) { el.expand(); } else { el.collapsed(); }
    } catch { }
}


Gs.Behaviors.ElementShowHide = function (elementId, showOnly = false) {
    try {
        let el = Metro.get$el('#' + elementId);
        if (showOnly) { el.show(); }
        else if (el.style("display") == "none") { el.show(); } else { el.hide(); }
    } catch { }
}


Gs.Behaviors.ElementSetCheckBox = function (elementId, val) {
    try {
        $('#' + elementId).val('checked')[0].checked = JSON.parse((val.toString().toLowerCase()));
    } catch { }
}


Gs.Behaviors.InfoBoxOpenClose = function (elementId) {
    try {
        if (Metro.infobox.isOpen('#' + elementId)) { Metro.infobox.close('#' + elementId); }
        else { Metro.infobox.open('#' + elementId); }
    } catch { }
}


Gs.Behaviors.ShowWindowCode = function () {
    if (document.getElementById("IFrameWindow") == null) {
        Gs.Functions.ShowSource();
    } else { Gs.Functions.ShowFrameSource(); }
}


