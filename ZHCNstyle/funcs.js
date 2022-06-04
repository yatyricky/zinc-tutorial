regType = "^(hashtable|timer|thistype|lightning|unit|real|integer|nothing|boolean|trigger|string|effect|array|widget|location|item|group|boolexpr|code)(\ |&nbsp;)*$";
regKey = "^(call|local|type|extends|struct|function|endfunction|else|elseif|takes|returns|if|then|endif|return|set|not|and|or|private|method|static|library|requires|initializer|globals|endglobals|constant|public|optional|while|for|do|endmethod|endstruct|native|endlibrary|operator)(\ |&nbsp;)*$";
regCj = "^(CreateTimer|UnitRemoveAbility|UnitAddAbility|GetUnitAbilityLevel|SetWidgetLife|GetUnitState|SaveInteger|SaveReal|SaveUnitHandle|LoadUnitHandle|LoadInteger|LoadReal|GetHandleId|Cos|Sin|GetExpiredTimer|CreateTrigger|MoveLightningEx|AddLightningEx|DestroyLightning|TriggerAddCondition|TriggerAddAction|GetSpellAbilityId|ExecuteFunc|GetEventDamageSource|Condition|GetEventDamage|GetWidgetLife|GetTriggerUnit|TriggerRegisterUnitEvent|GroupAddUnit|GetSpellTargetUnit|CreateUnit|GetManipulatedItem|UnitRemoveItem|Player|TriggerRegisterPlayerUnitEvent|GetSpellTargetX|GetSpellTargetY|GetUnitX|GetUnitY|SetUnitX|SetUnitY|Atan2|TimerStart|R2S|I2S|DestroyEffect|AddSpecialEffect|AddSpecialEffectTarget|AddSpecialEffectLoc|DisplayTimedTextToPlayer|GetLocalPlayer)(\ |&nbsp;)*$";
regBj = "^(TriggerRegisterAnyUnitEventBJ|BJDebugMsg)(\ |&nbsp;)*$";
regUj = "^(NewTimer|evaluate|GetTimerData|SetTimerData|ReleaseTimer|create|allocate|onInit|deallocate|IsTerrainDeepWater|IsTerrainShallowWater|IsTerrainLand|IsTerrainPlatform|IsTerrainWalkable|NewGroup|ReleaseGroup|GroupRefresh|GroupEnumUnitsInArea|GroupUnitsInArea)(\ |&nbsp;)*$";
regOp = "^(;|[\(]|[\)]|[\*]|[\=]|,|[\{]|[\}]|[\-]|[\>]|[\+]|[/<]|&lt;|&gt;|&amp;|[\|]|[\!]|\]|[\[])";
regNum = "^[0-9]+|false|true|UNIT_STATE_MAX_LIFE|EVENT_UNIT_DAMAGED|EVENT_PLAYER_UNIT_PICKUP_ITEM|EVENT_PLAYER_UNIT_SPELL_EFFECT|bj_MAX_PLAYER_SLOTS|null|^'";
regSpecial = "^(this)";
regCmt = "[\/]{2,}.*"
regExt = "[\/]{2,}!{1,}.*"
regStr = "^\"";

function highlight(str) {
	var words = new Array();
	words = str.split("^");
	for (var i = 0; i < words.length; i += 1) {
		if (words[i].match(regType)) {
			document.write("<font class=\"type\">" + words[i] + "</font>");
		} else if (words[i].match(regExt)) {
			document.write("<font class=\"ext\">" + words[i] + "</font>");
		} else if (words[i].match(regCmt)) {
			document.write("<font class=\"cmt\">" + words[i] + "</font>");
		} else if (words[i].match(regKey)) {
			document.write("<font class=\"keyword\">" + words[i] + "</font>");
		} else if (words[i].match(regSpecial)) {
			document.write("<font class=\"special\">" + words[i] + "</font>");
		} else if (words[i].match(regCj)) {
			document.write("<font class=\"cj\">" + words[i] + "</font>");
		} else if (words[i].match(regBj)) {
			document.write("<font class=\"bj\">" + words[i] + "</font>");
		} else if (words[i].match(regUj)) {
			document.write("<font class=\"uj\">" + words[i] + "</font>");
		} else if (words[i].match(regOp)) {
			document.write("<font class=\"op\">" + words[i] + "</font>");
		} else if (words[i].match(regNum)) {
			document.write("<font class=\"num\">" + words[i] + "</font>");
		} else if (words[i].match(regStr)) {
			document.write("<font class=\"str\">" + words[i] + "</font>");
		} else {
			document.write(words[i]);
		}
	}
}
function writeNavigation(page) {
	document.write("<div id=\"navigation\"><font class=\"keyword\"><a onmousedown=\"showTOC("+page+");\">目录</a>|"+getLangSelection(page)+"</font></div>");
//	var obj = document.getElementById("navigation");
//	obj.style.width = '600px';
}
function getLangSelection(page) {
	var addrcn;
	var addrtw;
	switch(page) {
		case 0:
			addrtw = "index.html";
			break;
		default:
			addrtw = "chapter"+page+".html";
	}
	addrcn = "ZHCN" + addrtw;
	var str = "<a href=\"" + addrcn + "\">简体中文</a>|<a href=\"" + addrtw + "\">繁體中文</a>";
	return str;
}
function showTOC(page) {
	var obj = document.getElementById("navigation");
	var str = "<ul>";
	str += "<a href=\"ZHCNindex.html\"><li>前言</li></a>";
	str += "<a href=\"ZHCNchapter1.html\"><li>第一章:万恶的冲锋</li></a>";
	str += "<a href=\"ZHCNchapter2.html\"><li>第二章:Zinc基础及冲锋扩展</li></a>";
	str += "<a href=\"ZHCNchapter3.html\"><li>第三章:伤害事件</li></a>";
	str += "<a href=\"ZHCNchapter4.html\"><li>第四章:结构体演练与数据结构</li></a>";
	str += "</ul><font class=\"keyword\"><a onclick=\"hideTOC("+page+")\">目录</a>|"+getLangSelection(page)+"</font>"
	obj.innerHTML = str;
}
function hideTOC(page) {
	var obj = document.getElementById("navigation");
	obj.innerHTML = "<font class=\"keyword\"><a onmousedown=\"showTOC("+page+");\">目录</a>|"+getLangSelection(page)+"</font>";
}
function writeFooter() {
	document.write("<div id=\"footer\"><p>[Warft]Nef.出品, leoiii12繁化</p><p>致谢:Vexorian, 月协论坛, 月协论坛水民, YDWE制作组(everguo, wataloo, Aeris, Warft_TigerCN, Fetrix_sai, actboy168), Warft_TigerCN等</p><p>联系方式:<a href=\"http://www.ydwe.info/forum.php?mod=viewthread&tid=6421\" target=\"_new\">月协论坛</a>|<a href=\"mailto:yatyricky@gmail.com\">电子邮件(yatyricky@gmail.com)</a></p></div>")
}
/*
function loadChpt(n) {
	parent.cont.location="chapter" + n + ".html";
}*/