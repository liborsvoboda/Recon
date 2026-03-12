
//Global Javascript Library
window.Gs = {
    Behaviors: {},
    Objects: {},
    Functions: {},
    Apis: {},
    Media: {},
    Variables: {
        monacoEditorList: [],
        screensaver: {},
        notifySetting :{
            notifyWidth: 300,
            notifyDuration: 5000,
            notifyAnimation: "easeOutBounce"
        },
        getSpProcedure :[
            { SpProcedure: "SpGetTableDataList" },
            { tableName: null },
            { camelCase: false }
         ],
        setSpProcedure :[
            { SpProcedure: "SpSetTableDataRec" },
            { tableName: null },
            { dataRec: null }
        ],
        media: {
            audioRecorder: null,
            mediaRecorder: null, 
            mediaStream: null,
            videoData: [],
        },
        UserSettingList: {
            EnableAutoTranslate: false,
            EnableShowDescription: true,
            RememberLastJson: true,
            RememberLastHandleBar: true,
            EnableScreenSaver: true,
        },
        RemoveObjectList: {
            dialog: null
        }
    }
}
window.WindowButtons = [
    {
        html: "<span class='mif-file-code' title='Show Window Code'></span>",
        cls: "alert",
        onclick: "Gs.Behaviors.ShowWindowCode()"
    },
    {
        html: "<span class='mif-help' title='Show Menu Help'></span>",
        cls: "success",
        onclick: "Gs.Objects.InfoboxFrameCreate('HelpViewer','/server-portal/addons/md-viewer/index.html', false);"
    },
    {
        html: "<span class='mif-windows' title='Open in New Window'></span>",
        cls: "warning",
        onclick: "Gs.Objects.WindowIframeCreate('Open Window','', true);"
    },
    {
        html: "<span class='mif-windows' title='Open in External Window'></span>",
        cls: "sys-button",
        onclick: "Gs.Objects.OpenInExternalWindow('External Window','',true);"
    },
    {
        html: "<span class='mif-image' title='Take ScreenShot'></span>",
        cls: "sys-button",
        onclick: "Gs.Media.CaptureToImage();Gs.Media.DownloadCapturedImage();Gs.Media.ClearCapturedImage();"
    },
    {
        html: "<span class='mif-printer' title='Print'></span>",
        cls: "sys-button",
        onclick: "Gs.Functions.PrintWindowElement();"
    },
    
]



Gs.Behaviors.ChangeSchemeTo = function (n) {
    $("#AppPanel").css({ backgroundColor: n.split("?")[1] });
    $("#portal-color-scheme").attr("href", window.location.origin + "/server-integrated/razor-pages/server-portal/metro/css/schemes/" + n.split("?")[0]);
    $("#scheme-name").html(n.split("?")[0]);
    Metro.storage.setItem('WebScheme', n.split("?")[0]);
}



//Set Default Storage Values
Metro.storage.setItem('BackendServerAddress', window.location.origin);
Metro.storage.setItem('DetectedLanguage', (navigator.language || navigator.userLanguage).substring(0, 2));
if (Metro.storage.getItem('WebScheme', null) == null) {
    Metro.storage.setItem('WebScheme', "sky-net.css");
    Gs.Behaviors.ChangeSchemeTo(Metro.storage.getItem('WebScheme', null));
} else { Gs.Behaviors.ChangeSchemeTo(Metro.storage.getItem('WebScheme', null)); }


/*Start Set Global Constants*/
Metro.storage.setItem('ApiOriginSuffix', Metro.storage.getItem('BackendServerAddress', null) + "/");
Metro.storage.setItem('DefaultPath', Metro.storage.getItem('DefaultPath', null) == null ? window.location.href : Metro.storage.getItem('DefaultPath', null));


//Start Set User Default Setting
Metro.storage.setItem('UserSettingList', Gs.Variables.UserSettingList);









