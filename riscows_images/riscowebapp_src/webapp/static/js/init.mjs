const RISCO_MAP_CFG = {
	"basic": RISCOJS_BASIC_CFG,
	"layers": RISCOJS_LAYERS_CFG,
	"text": RISCOJS_TEXT_CFG,
}

const HELP_MSG = "Generic help message, fill it as you wish";


var FEATURE_SERVICES_RISCO = {
	"EVORA": {
		"save": {
			"url_endpoint": "http//XX.XX.XX.XX:9999/riscosrv_v2/save",
			"layer": "FEATURES_evora"		
		}
	}
}

//

import { RiscoMapOverlay } from './riscojs_v2/main.mjs';
import { ctrToolTip } from './riscojs_v2/customization_canvas_baseclasses.mjs';
import { CanvasLocPointsLayerClass, GeoLocationMgr, MapCustomizations } from './riscojs_v2/default_customizations.mjs';
import { GlobalConst } from './riscojs_v2/constants.js';
import { LocQuery } from './generic_customizations.mjs';
import { QueriesMgr } from './queries.mjs';

window.mobileAndTabletCheck = function() {
	let check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
  };

let RiscoOVInst = new RiscoMapOverlay("MapPanelDiv");


function getTabletMode() {
	let ret = "NONE"; // Nesta app queremos que o default seja SIMPLE, não queremos o modo desktop com rato ativo (NONE)
	if (window.mobileAndTabletCheck()) {
		if (RISCO_MAP_CFG.basic["editcontrols"] !== undefined &&  RISCO_MAP_CFG.basic.editcontrols["tabletmode"] !== undefined) {
			ret = RISCO_MAP_CFG.basic.editcontrols.tabletmode;
		}
	}
	console.log("tablet mode:", ret);
	return ret;
}

const cnsm = getTabletMode();

let mapctx = RiscoOVInst.newMapCtx(RISCO_MAP_CFG, "single", "canvas", true, cnsm);

MessagesController2.setMediaRoot("http://localhost:8030/");

MessagesController2.check();

// encaminhar key evt para a caixa de pesquisa sem necessidade de a ativar
document.onkeydown = function (evt) {

	const inputels = document.getElementsByTagName('input');
	if (inputels.length > 1) {
		return;
	}

	//evt = evt || window.event;
	if (evt.ctrlKey) {
		console.log(`Ctrl+${String.fromCharCode(evt.code)}`)
	}

	const el2getFocusId = "loc-inputtext";
	let el, found = false;
	if (document.activeElement) {
		el = document.activeElement;
		if (el['id'] !== undefined && el['id'] == el2getFocusId) {
			found = true;
		}
	}

	if (!found) {
		el = document.getElementById(el2getFocusId);
		if (el) {
			el.focus();
		}
	}
};

/*

Para fazer JSON stringify de Map

function replacer(key, value) {
	if(value instanceof Map) {
	  return {
		dataType: 'Map',
		value: Array.from(value.entries()), // or with spread: value: [...value]
	  };
	} else {
	  return value;
	}
  }
*/

const mc = new MapCustomizations(mapctx, MessagesController2);

mapctx.setCustomizationObj(mc, function(p_mapctx, p_mapcustomiz_obj) {

	const basic_config = p_mapctx.toolmgr.basic_config;
	let loc_layer = null;

	// Customizations changing controls or toolboxes go first
	// (limiting available space for other widgets)
	loc_layer = "LOCATIONS_LAYER";
	p_mapctx.tocmgr.addLayer("LOCATIONS_LAYER", {
		"marker": "conc_circles",
		"strokeStyle": "red",
		"radiuses": [1,3],
		"lineWidth": 3,
		"fillStyle": "white",
		"varstyles": [
			{ 
				"func": (scl, attrs) => { 
					return (attrs.key == "from");
				},
				"strokeStyle": "rgb(244, 16, 210)",
				"change": (scl, pixsz, attrs) => { 
					const val = attrs.accuracy / Math.round(pixsz);
					if (val > 9) {
						return  { "radiuses": [3, 9, val], "dimsinpix": true };
					} else {
						return  { "radiuses": [3, 9], "dimsinpix": true };
					}
				}						
			}
		]
	}, CanvasLocPointsLayerClass); 


	p_mapcustomiz_obj.instances["geolocation"] = new GeoLocationMgr(p_mapctx, loc_layer);

	if (p_mapcustomiz_obj.instances["basiccontrolsbox"] !== undefined) {

		p_mapcustomiz_obj.instances["basiccontrolsbox"].addControl("gpspt", //togglable, round, p_drawface_func, p_endevent_func, p_mmove_func, gap)
			false,
			false,
			function (p_ctrlsbox, p_ctx, p_left, p_top, p_width, p_height, p_basic_config, p_global_constants, p_control_status) {

				let imgsrc;
				const imgh = new Image();
				imgh.decoding = "sync";

				imgh.src = p_basic_config.gpsposcontrol.symb.replace(/=%22black%22/g, `=%22${p_ctrlsbox.strokeStyleFront}%22`);
				imgh.decode()
					.then(() => {
						p_ctx.drawImage(imgh, p_left + ((p_global_constants.CONTROLS_STYLES.SIZE - p_basic_config.gpsposcontrol.symbwid) / 2), p_top);
					});
			},
			function (p_mapctx, p_evt, p_basic_config, p_global_constants) {
				p_mapcustomiz_obj.instances["geolocation"].geolocPinpoint();
				const topcnv = p_mapctx.renderingsmgr.getTopCanvas();
				topcnv.style.cursor = "default";
				return true; // no toggle
			},
			function (p_mapctx, p_evt, p_basic_config, p_global_constants) {
				const topcnv = p_mapctx.renderingsmgr.getTopCanvas();
				topcnv.style.cursor = "pointer";
				ctrToolTip(p_mapctx, p_evt, p_mapctx.i18n.msg('GEOP', true));
			},
			GlobalConst.CONTROLS_STYLES.GAP
		);

		p_mapcustomiz_obj.instances["basiccontrolsbox"].addControl("help", //togglable, round, p_drawface_func, p_endevent_func, p_mmove_func, gap)
			false,
			true,
			function (p_ctrlsbox, p_ctx, p_left, p_top, p_width, p_height, p_basic_config, p_global_constants, p_control_status) {

				let imgsrc;
				const imgh = new Image();
				imgh.decoding = "sync";

				imgh.src = "media/q-32-bl.png";
				imgh.decode()
					.then(() => {
						p_ctx.drawImage(imgh, p_left + 3, p_top + 4, 24, 24);
					});
			},
			function (p_mapctx, p_evt, p_basic_config, p_global_constants) {

				MessagesController2.setMessage(HELP_MSG, false);

				const topcnv = p_mapctx.renderingsmgr.getTopCanvas();
				topcnv.style.cursor = "default";
				return true; // no toggle
			},
			function (p_mapctx, p_evt, p_basic_config, p_global_constants) {
				const topcnv = p_mapctx.renderingsmgr.getTopCanvas();
				topcnv.style.cursor = "pointer";
				ctrToolTip(p_mapctx, p_evt, p_mapctx.i18n.msg('HELP', true));
			},
			GlobalConst.CONTROLS_STYLES.GAP
		);

	}

	p_mapcustomiz_obj.instances["querying"] = new LocQuery(p_mapctx, p_mapcustomiz_obj.messaging_ctrlr, basic_config["locquery"], basic_config["crs"], loc_layer);
	p_mapcustomiz_obj.instances["querying"].setCustomizationUI(p_mapcustomiz_obj, p_mapctx, GlobalConst, basic_config);
	console.info("[init RISCO] MapCustomizations, query box adapter launched");

	p_mapcustomiz_obj.instances["querying"].setOtherQueriesMgr(new QueriesMgr(p_mapctx, basic_config["query"]["url"], MessagesController2));

	// alert("ssid:" + document.getElementById("session_id").value);

	let elem, user="NONE", sid="NONE", cnt=0;
	for (let varname of ["user", "session_id"]) {

		elem = document.getElementById(varname+"_elem");
		if (elem) {

			switch(varname) {
				
				case "user":
					cnt++;
					user = elem.value;
					break;
				
				case "session_id":
					cnt++;
					sid = elem.value;
					break;

			}

		}
	}

	if (cnt == 2) {
		p_mapctx.enableEditUser(sid, user, true);
	}	

});




