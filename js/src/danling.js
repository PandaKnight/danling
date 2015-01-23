/**
 * Created by Michael on 15-1-21.
 */

/**
 * 将 Ext 包导入到 DL
 * @type {Ext|*}
 */
var DL = Ext;

DL.require();

DL.application({
    name: 'danlingapp',
    launch: function() {
        /*
         Application.log('engineName=' + Ext.browser.engineName);
         Application.log('engineVersion=' + Ext.browser.engineVersion);
         Application.log('EngineVersion=' + Ext.browser.engineVersion);
         Application.log('isWebView=' + Ext.browser.is['WebView']);
         Application.log('haveCordova=' + Ext.browser.is['Cordova']);

         Application.log('deviceType=' + Ext.os.deviceType);
         Application.log('osName=' + Ext.os.name);
         Application.log('OSVersion=' + Ext.os.version.getMajor());

         Application.log('transitionEnd=' + Ext.browser.getVendorProperyName('transitionEnd'));
         Application.log('animationStart=' + Ext.browser.getVendorProperyName('animationStart'));
         Application.log('animationEnd=' +  Ext.browser.getVendorProperyName('animationEnd'));
         */

        document.addEventListener('deviceready', function(){
            // cordova device ready
            document.addEventListener('resume', function(){
                if (application_pause != undefined){
                    application_pause(this);
                }
            }, false);
            document.addEventListener('pause', function(){
                if (application_resume != undefined){
                    application_resume(this);
                }
            }, false);

            if (application_lanuch != undefined){
                application_lanuch(this);
            }
        }, false);
    }
});
