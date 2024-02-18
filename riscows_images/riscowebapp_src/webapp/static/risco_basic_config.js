var RISCOJS_BASIC_CFG = {
	
	"mapname": "evora",	
	"crs": 3763,
	"scale": 4000.0 , 
	"terrain_center": [19500.0,-121600.0],
	"togglable_tools": ["InfoTool", "PointEditTool"],
	"maxscaleview": {
		"scale": 30000,
		"terrain_center": [19500.0,-121600.0]
	},
	"set_mapenv_cookies": true,
	"logo": {
	},
	"querybox": {
		"show": true,
		"size": 320,
		"clrbtn_size": 80,
		"placeholder": "TM"
	},
	"attribution": "OpenStreetMap, DGPC",
	"query": {
		"url": "http://localhost:8030/doget"
	},
	"style_override": {
	},
	"single_feat_editing_mode": true,
	"locquery": {
		"url": "NOMINATIM",
		"zoomto": 500,
		"centerlinefeats": {
			"layerkey": "EV",
			"fieldname_topo": "cod_topo",
			"symb": { 
				"strokeStyle": "#d2133f7f",
				"lineWidth": 10
			}
		},
		"npolfeats": {
			"layerkey": "NPOLPROJ",
			"fieldname_topo": "cod_topo",
			"fieldname_npol": "n_policia",
			"symb": { 
				"strokeStyle": "#fc164c",
				"lineWidth": 4
			}
		}	
	},
	"info": {
		"max_textlines_height": 22,
		"boxstyle": {
			"layercaptionszPX": 18,
			"normalszPX": 15
		}
	},
	"dashboard": {
	},
	"slicing": {
	},
	"editing": {
		"editable_layers": ["sv_prumo"]
	},
	"msgs": {
		"pt": {
			"TM": "morada"
		},
		"en": {
			"TM": "address"
		}
	},
	"geometry_service": {
		"type": "ARCGIS",
		"url": "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Utilities/Geometry/GeometryServer/project?inSR=4326&outSR=3763&transformation=&transformForward=true&vertical=false&f=pjson"			
	},

	"gpsposcontrol": {
		"separation": true,
		"symbwid": 24,
		"symb": "data:image/svg+xml;charset=utf-8,%3Csvg width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22 xmlns=%22http://www.w3.org/2000/svg%22%3E %3Ccircle  fill=%22none%22 stroke=%22black%22 stroke-width=%221%22 cx=%2212%22 cy=%2216%22 r=%228%22/%3E %3Ccircle fill=%22black%22 stroke=%22black%22 stroke-width=%221%22 cx=%2212%22 cy=%2216%22 r=%222%22/%3E %3C/svg%3E"
	},

	"gpstrackcontrol": {
		"symbwid": 24,
		"symb": "data:image/svg+xml;charset=utf-8,%3Csvg width=%2224%22 height=%2228%22 viewBox=%220 0 24 28%22 xmlns=%22http://www.w3.org/2000/svg%22%3E %3Cpath fill=%22none%22 stroke=%22black%22 stroke-width=%221%22 d=%22M 12 24 A 8 8 0 1 1 12 8%22 /%3E %3Ccircle fill=%22black%22 stroke=%22black%22 stroke-width=%221%22 cx=%2212%22 cy=%2216%22 r=%222%22/%3E %3Cpath fill=%22none%22 stroke=%22black%22 stroke-width=%221%22 stroke-linecap=%22round%22 d=%22M 23 15 L 23 19%22 /%3E %3Ccircle fill=%22none%22 stroke=%22black%22 stroke-width=%221%22 cx=%2220%22 cy=%2212%22 r=%223%22/%3E %3Ccircle fill=%22none%22 stroke=%22black%22 stroke-width=%221%22 cx=%2220%22 cy=%2222%22 r=%223%22/%3E %3C/svg%3E"
	},

	"filtericon": "data:image/svg+xml,%3Csvg xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 15.875 15.875' height='30' width='30'%3E%3Cg transform='translate(-25.6676,-10.720879)'%3E%3Cpath transform='translate(0.18708867,-0.88867118)' d='m 33.357579,12.61721 -7.418963,0.003 5.71689,7.323289 v 6.520088 h 1.700893 m -0.0012,-13.846377 7.418963,0.003 -5.71689,7.323289 v 6.520088 h -1.700893' style='fill:none;stroke:%23fff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /%3E%3C/g%3E%3C/svg%3E",

	"charticon": "data:image/svg+xml,%3Csvg xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 7.9374998 7.9375002' height='30' width='30'%3E%3Cg transform='translate(0,-289.06248)' id='layer1'%3E%3Crect style='fill:none;fill-opacity:1;fill-rule:nonzero;stroke:%23fff;stroke-width:0.08;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1' width='1.610294' height='0.91873169' x='5.2910933' y='289.93442' /%3E%3Crect style='fill:none;fill-opacity:1;fill-rule:nonzero;stroke:%23fff;stroke-width:0.08;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1' width='4.6649837' height='0.91873169' x='2.2364049' y='290.87018' /%3E%3Crect style='fill:none;fill-opacity:1;fill-rule:nonzero;stroke:%23fff;stroke-width:0.08;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1' width='5.6266446' height='0.91873902' x='1.2747428' y='291.80591' /%3E%3Crect style='fill:none;fill-opacity:1;fill-rule:nonzero;stroke:%23fff;stroke-width:0.08;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1' width='4.2878613' height='0.91873169' x='2.6135271' y='292.74167' /%3E%3Crect style='fill:none;fill-opacity:1;fill-rule:nonzero;stroke:%23fff;stroke-width:0.08;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1' width='2.8076568' height='0.91873169' x='4.0937309' y='293.6774' /%3E%3Crect style='fill:none;fill-opacity:1;fill-rule:nonzero;stroke:%23fff;stroke-width:0.08;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1' width='1.9497039' height='0.91873169' x='4.951684' y='294.61316' /%3E%3Crect style='fill:none;fill-opacity:1;fill-rule:nonzero;stroke:%23fff;stroke-width:0.08;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1' width='1.610294' height='0.91873169' x='5.2910938' y='295.53189' /%3E%3Cpath d='M 6.9013871,289.93442 H 5.2910933 l 0,0.91873 -3.0546884,0.017 v 0.91876 l -0.9616621,0.017 v 0.91873 l 1.3387843,0.017 v 0.91873 l 1.4802038,0.017 v 0.91873 l 0.8579531,0.017 v 0.91873 h 0.3394098 v 0.91873 h 1.6102939' style='fill:none;stroke:%23fff;stroke-width:0.75;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /%3E%3C/g%3E%3C/svg%3E",

	"edit_off": "data:image/svg+xml,%3Csvg xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' id='svg8' version='1.1' viewBox='0 0 1200 480' height='480mm' width='1200mm'%3E  %3Cg transform='translate(-47.080663,332.1789)' id='layer1'%3E %3Crect y='74.364479' x='79.379044' height='41.694069' width='0' id='rect815-1-3' style='fill:%23ffc400;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:8.39799976;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1' /%3E %3Crect ry='48.125954' rx='48.125954' y='-316.05106' x='64.468033' height='446.48477' width='1168.374' id='rect4731' style='fill:none;fill-opacity:1;fill-rule:nonzero;stroke:%235d5d5d;stroke-width:34.77474594;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1' /%3E %3Crect ry='24.062977' rx='24.062977' y='-273.74738' x='111.37149' height='363.43698' width='131.88599' id='rect4731-0' style='fill:%23a6a6a6;fill-opacity:1;fill-rule:nonzero;stroke:%23ffffff;stroke-width:30.078722;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1' /%3E %3Cpath id='path4752' d='M 859.56987,-167.59665 H 358.19486' style='fill:none;stroke:%23959595;stroke-width:12.03148842;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1' /%3E %3Cpath id='path4752-3' d='M 859.27993,-27.715891 H 358.19486' style='fill:none;stroke:%23959595;stroke-width:12.03148842;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1' /%3E %3Cpath id='path4789' d='m 859.56987,-167.59665 -0.28994,139.880759' style='fill:none;stroke:%23959595;stroke-width:12.03148842;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1' /%3E %3Cpath id='path4793' d='m 859.85412,-167.02822 152.32358,69.371903' style='fill:none;stroke:%23959595;stroke-width:12.03148842;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1' /%3E %3Cpath id='path4795' d='M 859.27993,-27.715891 1012.1777,-97.656317' style='fill:none;stroke:%23959595;stroke-width:12.03148842;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1' /%3E %3Cpath id='path4797' d='m 973.25638,-115.38207 -0.24304,35.64076 39.16406,-17.915007 z' style='fill:%23888888;fill-opacity:1;stroke:%23959595;stroke-width:1.59166551px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /%3E %3Cpath transform='matrix(6.0157442,0,0,6.0157442,-298.84974,-1204.4864)' id='path4817' d='m 109.22083,172.36268 c 0,7.75055 0,15.50137 0,23.25245' style='fill:none;stroke:%23959595;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1' /%3E %3Cpath transform='matrix(6.0157442,0,0,6.0157442,-298.84974,-1204.4864)' id='path4821' d='m 109.22083,172.36268 c -2.9397,0 -5.87967,0 -7.30524,3.87563 -1.42556,3.87562 -1.33648,11.62574 0.13368,15.50128 1.47017,3.87554 4.32095,3.87554 7.17156,3.87554' style='fill:none;stroke:%23959595;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1' /%3E %3Cpath id='path4752-3-7' d='M 841.91885,-48.62313 H 376.6079' style='fill:none;stroke:%23959595;stroke-width:12.03148842;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1' /%3E %3Cpath id='path4752-3-7-2' d='M 841.91885,-71.931069 H 376.6079' style='fill:none;stroke:%23959595;stroke-width:12.03148842;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1' /%3E  %3C/g%3E %3C/svg%3E",
	
	"edit_on": "data:image/svg+xml,%3Csvg xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' id='svg8' version='1.1' viewBox='0 0 1200 480' height='480mm' width='1200mm'%3E  %3Cg  transform='translate(-47.080663,332.1789)'  id='layer1'%3E %3Crect y='74.364479' x='79.379044' height='41.694069' width='0' id='rect815-1-3' style='fill:%23ffc400;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:8.39799976;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1' /%3E %3Crect ry='48.125954' rx='48.125954' y='-316.05106' x='64.468033' height='446.48477' width='1168.374' id='rect4731' style='fill:none;fill-opacity:1;fill-rule:nonzero;stroke:%23ffffff;stroke-width:34.77474594;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1' /%3E %3Crect ry='24.062977' rx='24.062977' y='-273.74738' x='1051.7762' height='363.43698' width='131.88599' id='rect4731-0' style='fill:%23a6a6a6;fill-opacity:1;fill-rule:nonzero;stroke:%23ffffff;stroke-width:30.078722;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1' /%3E %3Cpath id='path4752' d='M 839.91511,-167.59665 H 338.5401' style='fill:none;stroke:%23fefefe;stroke-width:15.875;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1' /%3E %3Cpath id='path4752-3' d='M 839.62517,-27.715891 H 338.5401' style='fill:none;stroke:%23fefefe;stroke-width:15.875;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1' /%3E %3Cpath id='path4789' d='m 839.91511,-167.59665 -0.28994,139.880759' style='fill:none;stroke:%23fefefe;stroke-width:15.875;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1' /%3E %3Cpath id='path4793' d='m 840.19936,-167.02822 152.32361,69.371903' style='fill:none;stroke:%23fefefe;stroke-width:15.875;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1' /%3E %3Cpath id='path4795' d='m 839.62517,-27.715891 152.8978,-69.940426' style='fill:none;stroke:%23fefefe;stroke-width:15.875;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1' /%3E %3Cpath id='path4797' d='m 953.60162,-115.38207 -0.24304,35.64076 39.16409,-17.915007 z' style='fill:%23ffffff;fill-opacity:1;stroke:%23fefefe;stroke-width:15.875;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1' /%3E %3Cpath transform='matrix(6.0157442,0,0,6.0157442,-318.5045,-1204.4864)' id='path4817' d='m 109.22083,172.36268 c 0,7.75055 0,15.50137 0,23.25245' style='fill:none;stroke:%23fefefe;stroke-width:2.63890886;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1' /%3E %3Cpath transform='matrix(6.0157442,0,0,6.0157442,-318.5045,-1204.4864)' id='path4821' d='m 109.22083,172.36268 c -2.9397,0 -5.87967,0 -7.30524,3.87563 -1.42556,3.87562 -1.33648,11.62574 0.13368,15.50128 1.47017,3.87554 4.32095,3.87554 7.17156,3.87554' style='fill:none;stroke:%23fefefe;stroke-width:2.63890886;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1' /%3E %3Cpath id='path4752-3-7' d='M 822.26409,-48.62313 H 356.95314' style='fill:none;stroke:%23fefefe;stroke-width:15.875;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1' /%3E %3Cpath id='path4752-3-7-2' d='M 822.26409,-71.931069 H 356.95314' style='fill:none;stroke:%23fefefe;stroke-width:15.875;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1' /%3E  %3C/g%3E %3C/svg%3E",

	"editcontrols": {

		"tabletmode": "SIMPLE",

		"iconwidth": 36,
		"controlssize": 40,

		"bckgrd": "#0b1d1fe0",
		"color": "white",
		"bckgrdon": "rgb(255, 255, 255)",
		"coloroff": "#707070",
		"strokewidth": 1.2,
		"margin_offset": 10,

		"orientation": "VERTICAL",

		"delsymb": "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8' standalone='no'?%3E %3Csvg xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 200 200' height='200mm' width='200mm' id='svg5178'%3E %3Cpath style='fill:none;fill-opacity:1;fill-rule:nonzero;stroke:%23000000;stroke-width:10.58333325;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1' d='M 147.625,62.956228 V 139.6854 c 0,10.26055 -8.2603,18.52084 -18.52084,18.52084 H 70.895832 c -10.260542,0 -18.520834,-8.26029 -18.520834,-18.52084 V 62.956228 Z' id='rect5102' /%3E %3Cg id='g5200' transform='matrix(1.0041462,0,0,0.91919503,-0.41461785,9.0038039)'%3E  %3Cpath  id='path5105'  d='m 76.118842,82.933612 c 0,17.819478 0,35.639178 0,53.459118'  style='fill:none;stroke:%23000000;stroke-width:11.90625;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1' /%3E  %3Cuse  style='stroke-width:11.90625;stroke-miterlimit:4;stroke-dasharray:none'  id='use5133'  transform='translate(23.881159)'  xlink:href='%23path5105'  y='0'  x='0'  width='100%'  height='100%' /%3E  %3Cuse  style='stroke-width:11.90625;stroke-miterlimit:4;stroke-dasharray:none'  id='use5135'  transform='translate(47.762319)'  xlink:href='%23path5105'  y='0'  x='0'  width='100%'  height='100%' /%3E %3C/g%3E %3Cpath style='fill:none;fill-opacity:1;fill-rule:nonzero;stroke:%23000000;stroke-width:7.40833328;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1' d='m 60.473044,43.453298 h 79.053906 c 7.99486,0 14.43115,3.358944 14.43115,7.531266 v 10.23789 H 46.041899 v -10.23789 c 0,-4.172322 6.436291,-7.531266 14.431145,-7.531266 z' id='rect5142' /%3E %3Cpath style='fill:none;fill-opacity:1;fill-rule:nonzero;stroke:%23000000;stroke-width:5.29166663;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1' d='m 87.111239,41.757868 v -6.663121 c 0,-1.465792 1.180042,-2.645834 2.645834,-2.645834 h 20.485847 c 1.46579,0 2.64584,1.180042 2.64584,2.645834 v 6.663121' id='rect5153' /%3E %3C/svg%3E",

	}	
}