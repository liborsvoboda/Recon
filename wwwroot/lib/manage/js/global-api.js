Gs.Apis.SaveUserCapturedVideo = async function (filename) {
    await Gs.Apis.RunServerPostApi("UserStorageService/SaveMediaFile", { Path: "Videos", Filename: filename, Content: Metro.storage.getItem("CapturedVideo", null) }, null, "ReloadUserStorage");
    Gs.Media.ClearCapturedVideo();
}


Gs.Apis.SavePublicCapturedVideo = async function (filename) {
    await Gs.Apis.RunServerPostApi("PublicStorageService/SaveMediaFile", { Path: "Videos", Filename: filename, Content: Metro.storage.getItem("CapturedVideo", null) }, null, "ReloadUserStorage");
    Gs.Media.ClearCapturedVideo();
}


Gs.Apis.RunServerGetXMLApi = async function (apiPath, storageName, windowFunction = null) {
        Gs.Behaviors.ShowPageLoading();
        $.ajax({
            global: false,
            type: "GET",
            url: Metro.storage.getItem('ApiOriginSuffix', null) + apiPath,
            async: true,
            cache: false,
            headers: JSON.parse(JSON.stringify(Metro.storage.getItem("ApiToken", null))) != null ? { 'Content-type': 'application/json charset=UTF-8', 'Authorization': 'Bearer ' + Metro.storage.getItem('ApiToken', null).Token } : { 'Content-type': 'application/json' },
            contentType: "application/xml; charset=utf-8",
            dataType: "xml",
            success: function (result) {
                if (storageName != null) {
                    Metro.storage.setItem(storageName, new XMLSerializer().serializeToString(result).replaceAll(">", ">\n"));
                    if (windowFunction != null) { window[windowFunction](); }
                    Gs.Behaviors.HidePageLoading();
                }
            },
            error: function (err) {
                console.log(err);
                if (storageName != null) { Metro.storage.setItem(storageName, []); }
                if (windowFunction != null) { window[windowFunction](); }
                Gs.Behaviors.HidePageLoading();
                Gs.Objects.ShowNotify("alert", err.statusText); return false;
            }
        });
    }


Gs.Apis.DownloadApi = async function (apiPath, jsonData, filename, binary, storageName = null, windowFunction = null ) {
    //used for Downloading files
    Gs.Behaviors.ShowPageLoading();
    $.ajax({
        global: false,
        type: "POST",
        url: Metro.storage.getItem('ApiOriginSuffix', null) + apiPath,
        async: true,
        cache: false,
        headers: JSON.parse(JSON.stringify(Metro.storage.getItem("ApiToken", null))) != null ? { 'Content-type': 'application/json charset=UTF-8', 'Authorization': 'Bearer ' + Metro.storage.getItem('ApiToken', null).Token } : { 'Content-type': 'application/json' },
        data: JSON.stringify(jsonData),
        contentType: "application/json; charset=utf-8",
        //dataType: 'binary', 
        xhrFields: {
            'responseType': binary ? 'blob' : "text"
        },
        success: function (result) {
            if (storageName != null) {//SAVE to Storage
                if (result.Result != undefined && result.Result != "") {
                    Metro.storage.setItem(storageName, result.Result);
                } else if (result.Status == "UnauthorizedRequest" || result.Result == "") { Metro.storage.setItem(storageName, []); }
                else { Metro.storage.setItem(storageName, result); }
            } else { //DOWNLOAD When not saved to Storage
                let a = document.createElement('a');
                a.href = window.URL.createObjectURL(result);
                a.download = result.type == "application/x-zip-compressed" ? filename + ".zip" : filename + ".md";
                document.body.appendChild(a); a.click();
                document.body.removeChild(a);
                window.URL.revokeObjectURL(a.href);
            }

            if (windowFunction != null) { window[windowFunction](); }
            Gs.Behaviors.HidePageLoading();
        },
        error: function (err) {
            console.log(err);
            if (storageName != null) { Metro.storage.delItem(storageName); }
            if (windowFunction != null) { window[windowFunction](); }
            Gs.Behaviors.HidePageLoading();
            Gs.Objects.ShowNotify("alert", err.statusText); return false;
            return false;
        }
    });
}


Gs.Apis.RunServerPostApi = async function (apiPath, jsonData, storageName, windowFunction = null) {
    //windowFunction is Only for window.fnName() NOT window.Gs.XXX.XXX Use for Reload Table
    Gs.Behaviors.ShowPageLoading();
    $.ajax({
        global: false,
        type: "POST",
        url: Metro.storage.getItem('ApiOriginSuffix', null) + apiPath,
        async: true,
        cache: false,
        headers: JSON.parse(JSON.stringify(Metro.storage.getItem("ApiToken", null))) != null ? { 'Content-type': 'application/json charset=UTF-8', 'Authorization': 'Bearer ' + Metro.storage.getItem('ApiToken', null).Token } : { 'Content-type': 'application/json' },
        data: JSON.stringify(jsonData),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            if (storageName != null) {
                if (result.Result != undefined && result.Result != "") {
                    Metro.storage.setItem(storageName, result.Result);
                } else if (result.Status == "UnauthorizedRequest" || result.Result == "") { Metro.storage.setItem(storageName, []); }
                else { Metro.storage.setItem(storageName, result); }
            }
            if (windowFunction != null) { window[windowFunction](); }
            Gs.Behaviors.HidePageLoading();
            
            if (result.status == undefined || result.status == "success") { Gs.Objects.ShowNotify("success", result.result); return true; }
            else {
                if (storageName != null) { Metro.storage.setItem(storageName, []); }
                if (windowFunction != null) { window[windowFunction](); }
                Gs.Objects.ShowNotify("alert", result.status + " " + result.errorMessage); return false;
            }
        },
        error: function (err) {
            console.log(err);
            if (storageName != null) { Metro.storage.setItem(storageName, []); }
            if (windowFunction != null) { window[windowFunction](); }
            Gs.Behaviors.HidePageLoading();
            Gs.Objects.ShowNotify("alert", err.statusText); return false;
        }
    });
}



Gs.Apis.RunServerPutApi = async function (apiPath, jsonData, storageName, windowFunction = null) {
    //windowFunction is Only for window.fnName() NOT window.Gs.XXX.XXX Use for Reload Table
    Gs.Behaviors.ShowPageLoading();
    $.ajax({
        global: false,
        type: "PUT",
        url: Metro.storage.getItem('ApiOriginSuffix', null) + apiPath,
        async: true,
        cache: false,
        headers: JSON.parse(JSON.stringify(Metro.storage.getItem("ApiToken", null))) != null ? { 'Content-type': 'application/json charset=UTF-8', 'Authorization': 'Bearer ' + Metro.storage.getItem('ApiToken', null).Token } : { 'Content-type': 'application/json' },
        data: JSON.stringify(jsonData),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            if (storageName != null) {
                if (result.Result != undefined && result.Result != "") {
                    Metro.storage.setItem(storageName, result.Result);
                } else if (result.Status == "UnauthorizedRequest" || result.Result == "") { Metro.storage.setItem(storageName, []); }
                else { Metro.storage.setItem(storageName, result); }
            }
            if (windowFunction != null) { window[windowFunction](); }
            Gs.Behaviors.HidePageLoading();

            if (result.Status == undefined || result.Status == "success") { Gs.Objects.ShowNotify("success", result.Result); return true; }
            else {
                if (storageName != null) { Metro.storage.setItem(storageName, []); }
                if (windowFunction != null) { window[windowFunction](); }
                Gs.Objects.ShowNotify("alert", result.Status + " " + result.ErrorMessage); return false;
            }
        },
        error: function (err) {
            console.log(err);
            if (storageName != null) { Metro.storage.setItem(storageName, []); }
            if (windowFunction != null) { window[windowFunction](); }
            Gs.Behaviors.HidePageLoading();
            Gs.Objects.ShowNotify("alert", err.statusText); return false;
        }
    });
}


Gs.Apis.RunServerGetApi = async function (apiPath, storageName, windowFunction = null) {
    //windowFunction is Only for window.fnName() NOT window.Gs.XXX.XXX Use for Reload Table
    Gs.Behaviors.ShowPageLoading();
    $.ajax({
        global: false,
        type: "GET",
        url: Metro.storage.getItem('ApiOriginSuffix', null) + apiPath,
        async: true,
        cache: false,
        headers: JSON.parse(JSON.stringify(Metro.storage.getItem("ApiToken", null))) != null ? { 'Content-type': 'application/json charset=UTF-8', 'Authorization': 'Bearer ' + Metro.storage.getItem('ApiToken', null).Token } : { 'Content-type': 'application/json' },
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            if (storageName != null) {
                if (result.Result != undefined && result.Result != "") {
                    Metro.storage.setItem(storageName, result.Result);
                } else if (result.Status == "UnauthorizedRequest" || result.Result == "") { Metro.storage.setItem(storageName, []); }
                else { Metro.storage.setItem(storageName, result); }
            }
            if (windowFunction != null) { window[windowFunction](); }
            Gs.Behaviors.HidePageLoading();

            if (result.Status == undefined || result.Status == "success") { Gs.Objects.ShowNotify("success", result.Result); return true; }
            else {
                if (storageName != null) { Metro.storage.setItem(storageName, []); }
                if (windowFunction != null) { window[windowFunction](); }
                Gs.Objects.ShowNotify("alert", result.Status + " " + result.ErrorMessage); return false;
            }
        },
        error: function (err) {
            console.log(err);
            if (storageName != null) { Metro.storage.setItem(storageName, []); }
            if (windowFunction != null) { window[windowFunction](); }
            Gs.Behaviors.HidePageLoading();
            Gs.Objects.ShowNotify("alert", err.statusText); return false;
        }
    });
}


Gs.Apis.RunServerDeleteApi = async function (apiPath, windowFunction = null) {
    //windowFunction is Only for window.fnName() NOT window.Gs.XXX.XXX Use for Reload Table
    Gs.Behaviors.ShowPageLoading();
    $.ajax({
        global: false,
        type: "DELETE",
        url: Metro.storage.getItem('ApiOriginSuffix', null) + apiPath,
        async: true,
        cache: false,
        headers: JSON.parse(JSON.stringify(Metro.storage.getItem("ApiToken", null))) != null ? { 'Content-type': 'application/json charset=UTF-8', 'Authorization': 'Bearer ' + Metro.storage.getItem('ApiToken', null).Token } : { 'Content-type': 'application/json' },
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            if (windowFunction != null) { window[windowFunction](); }
            Gs.Behaviors.HidePageLoading();

            if (result.Status == undefined || result.Status == "success") { Gs.Objects.ShowNotify("success", result.Result); return true; }
            else {
                if (windowFunction != null) { window[windowFunction](); }
                Gs.Objects.ShowNotify("alert", result.Status + " " + result.ErrorMessage); return false;
            }
        },
        error: function (err) {
            console.log(err);
            if (windowFunction != null) { window[windowFunction](); }
            Gs.Behaviors.HidePageLoading();
            Gs.Objects.ShowNotify("alert", err.statusText); return false;
        }
    });
}


function InvalidForm() {
    var form = $(this); form.addClass("ani-ring");
    setTimeout(function () { form.removeClass("ani-ring"); }, 1000);
}


function ValidateForm() {
    Gs.Behaviors.ShowPageLoading();
    $.ajax({
        global: false,
        type: "POST",
        url: Metro.storage.getItem('BackendServerAddress', null) + "/AuthenticationService",
        async: true,
        cache: false,
        headers: { "Authorization": "Basic " + btoa($("#usernameId").val() + ":" + $("#passwordId").val()) },
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            Cookies.set('ApiToken', result.Token);
            Metro.storage.setItem("ApiToken", result);
            Gs.Behaviors.HidePageLoading();
            window.location.href = Metro.storage.getItem("DefaultPath", null);
            return true;
        },
        error: function (err) {
            console.log(err);
            Cookies.remove('ApiToken');
            Metro.storage.delItem("ApiToken");
            Gs.Behaviors.HidePageLoading();
            Gs.Objects.ShowNotify("alert", err.statusText); return false;
        }
    });

}


function ValidateRegForm() {
    Gs.Behaviors.ShowPageLoading();
    $.ajax({
        global: false,
        type: "POST",
        url: Metro.storage.getItem('BackendServerAddress', null) + "/RegistrationService/Registration",
        async: true,
        cache: false,
        headers: { 'Content-type': 'application/json' },
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify({ FirstName: $("#firstName").val(), Surname: $("#surname").val(), Username: $("#userName").val(), EmailAddress: $("#email").val(), Password: $("#password").val() }),
        success: function (result) {
            if (result.Status != "success") { Gs.Objects.ShowNotify("alert", result.ErrorMessage); }
            else { Gs.Objects.ShowNotify("success", result.Status); }
            Gs.Behaviors.HidePageLoading();
            return true;
        },
        error: function (err) {
            console.log(err);
            Gs.Behaviors.HidePageLoading();
            Gs.Objects.ShowNotify("alert", err.statusText); return false;
        }
    });

}


Gs.Apis.GetUserSetting = function () {
    Gs.Behaviors.ShowPageLoading();
    $.ajax({
        global: false,
        type: "GET",
        url: Metro.storage.getItem('BackendServerAddress', null) + "/PortalApiTableService/GetUserSettingList",
        async: true,
        cache: false,
        headers: JSON.parse(JSON.stringify(Metro.storage.getItem("ApiToken", null))) != null ? { 'Content-type': 'application/json charset=UTF-8', 'Authorization': 'Bearer ' + Metro.storage.getItem('ApiToken', null).Token } : { 'Content-type': 'application/json' },
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            result.forEach(userSetting => {
                if (userSetting.apiTableColumnName == "EnableAutoTranslate") { Gs.Variables.UserSettingList.EnableAutoTranslate = JSON.parse(userSetting.value.toLowerCase()); }
                if (userSetting.apiTableColumnName == "EnableShowDescription") { Gs.Variables.UserSettingList.EnableShowDescription = JSON.parse(userSetting.value.toLowerCase()); }
                if (userSetting.apiTableColumnName == "RememberLastHandleBar") { Gs.Variables.UserSettingList.RememberLastHandleBar = JSON.parse(userSetting.value.toLowerCase()); }
                if (userSetting.apiTableColumnName == "RememberLastJson") { Gs.Variables.UserSettingList.RememberLastJson = JSON.parse(userSetting.value.toLowerCase()); }
                if (userSetting.apiTableColumnName == "EnableScreenSaver") { Gs.Variables.UserSettingList.EnableScreenSaver = JSON.parse(userSetting.value.toLowerCase()); }
            });
            Metro.storage.setItem("UserSettingList", Gs.Variables.UserSettingList);
            
            Gs.Behaviors.LoadUserSettings();
            Gs.Behaviors.HidePageLoading();
            return true;
        },
        error: function (err) {
            console.log(err);
            Metro.storage.delItem("UserSettingList");
            Gs.Behaviors.HidePageLoading();
            Gs.Objects.ShowNotify("alert", err.statusText); return false;
        }
    });
}


Gs.Apis.IsLogged = function () {
    if (Cookies.get('ApiToken') == undefined || Cookies.get('ApiToken') == null) { return false } else { return true};
}


Gs.Apis.SignOut = function () {
    Cookies.remove('ApiToken');
    Metro.storage.delItem('ApiToken');
    window.location.href = Metro.storage.getItem("DefaultPath", null);
}