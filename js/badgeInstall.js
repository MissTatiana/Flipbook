var flashvars = {};
flashvars.id = 'air_badge';
flashvars.airversion = '1.1';
flashvars.appname = 'Flipbook';
flashvars.appurl = 'http://misstatiana.github.com/WSP/flipbook/FlipBook%282%29.air';
flashvars.imageurl = 'assets/badge.png';
flashvars.appid = 'com.yourSite.yourApp';
flashvars.pubid = '';
flashvars.appversion = '1.0';
flashvars.installarg = 'null';
flashvars.launcharg = 'null';
flashvars.helpurl = 'help.html';
flashvars.hidehelp = 'true';
flashvars.skiptransition = 'false';
flashvars.titlecolor = '#aaff';
flashvars.buttonlabelcolor = '#aaff';
flashvars.appnamecolor = '#aaff';


var params = {};
params.wmode = 'window';
params.menu = 'false';
params.quality = 'high';

var attributes = {};

swfobject.embedSWF('install_swf/AIRInstallBadge.swf', 'badge_div', '215', '180', '9.0.115', 'install_swf/expressInstall.swf', flashvars, params, attributes);