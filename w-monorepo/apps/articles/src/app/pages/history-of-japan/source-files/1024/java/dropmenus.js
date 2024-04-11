var flag = ( navigator.userAgent.indexOf("MSIE") >=0 && parseInt( navigator.appVersion ) >= 4 );
var eOpenMenu = null;

if ( flag )	{
	document.onmouseover=mouseover;
	document.onmouseout=mouseout;
}

function OpenMenu(eSrc,eMenu)
{
	eMenu.style.visibility = "visible";
	eOpenMenu = eMenu;
}

function CloseMenu(eMenu)
{
	eMenu.style.visibility = "hidden";
	eOpenMenu = null;
}

function setmsg(msg) 
{
	window.status = msg;
	return true;
}

function mouseover()
{
	if ( flag )	{
		var eSrc = window.event.srcElement;

		if ( eSrc.className == "clsMenuBarItem" )
		{
			var eMenu = document.all[eSrc.id.replace("tdMenuBarItem", "divMenu")];
			if (eOpenMenu && eOpenMenu != eMenu) 
				CloseMenu(eOpenMenu);

			if (eMenu) 
				OpenMenu(eSrc,eMenu);

			eSrc.style.color="red";
		}
		else if (eOpenMenu && !eOpenMenu.contains(eSrc) && !divMenuBar.contains(eSrc)) 
			CloseMenu(eOpenMenu);
              
	}
}

function mouseout()
{
	if ( flag )	{
		var eSrc = window.event.srcElement;
		eSrc.style.color="";
	}
}	

function drawmenus()
{
	var str='';


	if ( flag )	{	
		str += '<div id="divMenuCh1" class="clsMenu" style="width:175;position:absolute;z-index:1;left:170; visibility:hidden;">';
		str += '<div class="clsMenuSpacer"></div>';
		str += '<a href="chapter1.htm#earlyjapan" onMouseOver="return setmsg(\'A History of Japan\');">Early Japan</a><br>';
		str += '<a href="chapter1.htm#riseofsamurai" onMouseOver="return setmsg(\'A History of Japan\');">The Rise of the Samurai</a><br>';
		str += '<a href="chapter1.htm#gempeiwar" onMouseOver="return setmsg(\'A History of Japan\');">The Gempei War</a><br>';
		str += '<a href="chapter1.htm#earlyshoguns" onMouseOver="return setmsg(\'A History of Japan\');">Early Shoguns</a><br>';
		str += '<a href="chapter1.htm#sengoku" onMouseOver="return setmsg(\'A History of Japan\');">Sengoku: The Country at War</a><br>';
		str += '<a href="chapter1.htm#lastshogunate" onMouseOver="return setmsg(\'A History of Japan\');">The Last Shogunate</a><br>';
		str += '<a href="chapter1.htm#historyingame" onMouseOver="return setmsg(\'A History of Japan\');">History in the Game</a><br>';
		str += '<a href="chapter1.htm#daimyo" onMouseOver="return setmsg(\'A History of Japan\');">The Daimyo</a><br>';
		str += '</div>';
		


		str += '<div id="divMenuCh2" class="clsMenu" style="width:175;position:absolute;z-index:1;left:340; visibility:hidden;">';
		str += '<div class="clsMenuSpacer"></div>';
		str += '<a href="chapter2.htm#bushido" onMouseOver="return setmsg(\'The Samurai\');">Bushido</a><br>';
		str += '<a href="chapter2.htm#arms" onMouseOver="return setmsg(\'The Samurai\');">Arms & Armour</a><br>';
		str += '<a href="chapter2.htm#samuraiarmies" onMouseOver="return setmsg(\'The Samurai\');">Samurai Armies</a><br>';
		str += '<a href="chapter2.htm#armyunits" onMouseOver="return setmsg(\'The Samurai\');">Army Units</a><br>';
		str += '<a href="chapter2.htm#castles" onMouseOver="return setmsg(\'The Samurai\');">Castles and Siege Warfare</a><br>';
		str += '<a href="chapter2.htm#strategic" onMouseOver="return setmsg(\'The Samurai\');">Strategic Units</a><br>';
		str += '</div>';



		str += '<div id="divMenuCh3" class="clsMenu" style="width:175;position:absolute;z-index:1;left:510;visibility:hidden;">';
		str += '<div class="clsMenuSpacer"></div>';
		str += '<a href="chapter3.htm#provinces" onMouseOver="return setmsg(\'The Land of the Daimyo\');">Provinces</a><br>';
		str += '<a href="chapter3.htm#rebellions" onMouseOver="return setmsg(\'The Land of the Daimyo\');">Rebellions, Peasants & Ronin</a><br>';
		str += '<a href="chapter3.htm#religion" onMouseOver="return setmsg(\'The Land of the Daimyo\');">Religion</a><br>';
		str += '<a href="chapter3.htm#military" onMouseOver="return setmsg(\'The Land of the Daimyo\');">Military Buildings</a><br>';		
		str += '</div>';



		str += '<div id="divMenuCh4" class="clsMenu" style="width:175;position:absolute;z-index:1;left:585;visibility:hidden;">';
		str += '<div class="clsMenuSpacer"></div>';
		str += '<a href="chapter4.htm#tactical" onMouseOver="return setmsg(\'Three Campaigns\');">A Tactical Revolution</a><br>';
		str += '<a href="chapter4.htm#nobunaga" onMouseOver="return setmsg(\'Three Campaigns\');">The Battles of Oda Nobunaga</a><br>';
		str += '<a href="chapter4.htm#ieyasu" onMouseOver="return setmsg(\'Three Campaigns\');">The Battles of Tokugawa Ieyasu</a><br>';
		str += '<a href="chapter4.htm#hideyoshi" onMouseOver="return setmsg(\'Three Campaigns\');">The Battles of Toyotomi Hideyoshi</a><br>';
		str += '</div>';


				document.write( str )
	}
}
