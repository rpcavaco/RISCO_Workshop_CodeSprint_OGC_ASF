var RISCOJS_LAYERS_CFG = {
	"lorder": ["EV"], //, "mancha_constr", "mancha_construida", "gratMRK"],
	"basemaps": [
		"ortos_2018"
	],
	"relations": [
	],
	"layers": {
		"ortos_2018": {
			"type": "wms",
			"url": "http://localhost:9200/wms/ortos2018",
			"layernames": "Ortos2018-RGB",
			"envsplit": false,
			"filter": "grayscale",		
			"imageformat": "image/jpeg"
		},
		"EV": {
			"label":"eixo de via",
			"type": "riscofeats",
			"geomtype": "line",
			//"label": "Eixos de via",
			"mouseinteraction": false,
			"url": "http://localhost:8020",
			"lineDash": [8,2], 
			"lineWidth": 2,
			"strokeStyle": "#2e88c4",
			"labelfield": "toponimo",
			"labelplacement": "along",
			"labelFontSizePX": 14,
			"labelFontFace": "OpenSans-CondensedRegular",

			"envsplit": false,
			"fillStyle": "none"
		},
		"NPOLPROJ": {
			"type": "riscofeats",
			"geomtype": "line",
			"url": "https://geo.cm-porto.net/riscosrv_v2",
			"mouseinteraction": false,
			"strokeStyle": "none",
			//"lineWidth": 1,
			"maxscale": 1000,

			"labelfield": "n_policia",
			"labelplacement": "extend",
			"labelextend": "0.2:10:arrow",
			"labelFontSizePX": 12,
			"labelFontFace": "OpenSans-CondensedRegular",
			"labelTextAlign": "left",			
		},	
		"sv_prumo": {
			"label": "prumo",
			"type": "riscofeats",
			"geomtype": "point",
			"url": "https://geo.cm-porto.net/riscosrv_v2",
			"layervisible": true,
			"mouseinteraction": true,
			"marker": "circle",
			"markersize": 2,
			"strokeStyle": "#b1dbdb",
			"fillStyle": "rgba(204, 204, 204, 0.5)",
			"lineWidth": 1,
			"maxscale": 10000,
			"varstyles": [
				{
					"func": (p_utils, scl, attrs) => { return (attrs.cod_estado_conservacao == 0) },
					"key": "undef_e",
					"fillStyle": "rgba(100, 100, 250, 0.9)"
				},				
				{
					"func": (p_utils, scl, attrs) => { return (attrs.cod_estado_conservacao == 1) },
					"key": "bom_e",
					"fillStyle": RISCOJS_COLORRAMPS.RAMPS4X4.green_blue.b
				},
				{
					"func": (p_utils, scl, attrs) => { return (attrs.cod_estado_conservacao == 2) },
					"key": "dob_e",
					"fillStyle": "rgb(255, 196, 0)"
				},
				{
					"func": (p_utils, scl, attrs) => { return (attrs.cod_estado_conservacao == 3) },
					"key": "ac_e",
					"fillStyle": "rgb(240, 141, 12)"
					//"fillStyle": RISCOJS_COLORRAMPS.RAMPS4X4.ora_green.c,
				},				
				{
					"func": (p_utils, scl, attrs) => { return (attrs.cod_estado_conservacao == 4) },
					"key": "grf_e",
					"fillStyle": RISCOJS_COLORRAMPS.RAMPS4X4.mag_ora.d
				},
				{
					"func": (p_utils, scl, attrs) => { return (attrs.cod_estado_conservacao == 5) },
					"key": "ferr_e",
					"fillStyle": RISCOJS_COLORRAMPS.RAMPS4X4.mag_ora.c
				},
				{
					"func": (p_utils, scl, attrs) => { return (attrs.cod_estado_conservacao == 6) },
					"key": "outr_e",
					"fillStyle": RISCOJS_COLORRAMPS.RAMPS4X4.green_blue.c,
				}
			],

			"labelfield": "cnt",
			"labelfunc": (p_val) => {
				let ret = null;
				if (p_val >= 2) {
					ret = p_val;
				}
				return ret;
			},
			"labelFontSizePX": 12,
			"labelFontFace": "monospace",
			"labelFillStyle": "#2c2c2c",

			"msgsdict": {
				"deflang": "pt",
				"pt": {
					"sv_prumo": "prumo com sinais",
					"codigo_sig": "identificador", 
					"toponimo": "topónimo", 
					"tipo_suporte": "tipo de suporte", 
					"estado_conservacao": "estado de conservação", 
					"data_registo": "data de registo", 
					"data_levantamento": "data de levantamento", 
					"ult_atualizacao": "última atualização em", 
					"ult_intervencao": "última intervenção", 
					"foto": "fotografia",
					"bom_e": "bom estado",
					"dob_e": "dobrado",
					"ac_e": "autocolantes",
					"grf_e": "grafitti",
					"ferr_e": "ferrugem",
					"outr_e": "outros",
					"undef_e": "a definir"
				}
			},
			"maptipfields": {
				"add": [
					"codigo_sig", "tipo_suporte", "estado_conservacao", "placas"
				]
			},
			"infocfg": {
				"keyfields": [ "codigo_sig" ],
				"caption2value_widthfraction":  0.4,
				"qrykey": "sv_prumo_info",
				"jsonkey": "sv_prumo_tv", 
				"fields": {
					"add": [
						"codigo_sig", "freguesia", "toponimo", "tipo_suporte", "estado_conservacao", "data_registo", "data_levantamento", "ult_atualizacao", "ult_intervencao", "placas", "foto"
					],
					"formats": {	
						"data_registo": {
							"type": "date"
						},
						"data_levantamento": {
							"type": "date"
						},
						"ult_atualizacao": {
							"type": "date"
						},
						"foto": {
							"type": "singleimg",
							"hidecaption": true,
							"srcfunc": (x) => {
								return `/esvfotos/${x}.jpg`;
							}
						},
						"placas": {
							"type": "thumbcoll",
							"splitpatt": ",",
							"srcfunc": (x) => {
								return `symbimg/${x}.png`;
							}
						}
					},
					"transforms": [
					]
				}
			}
		},
		"sv_placa": {
			"label": "placa",
			"type": "riscofeats",
			"geomtype": "point",
			"url": "https://geo.cm-porto.net/riscosrv_v2",
			"layervisible": true,
			"mouseinteraction": true,
			"marker": "icon",
			"selectionsymbol": {
				"marker": "circle",
				"markersize": 4,
			},
			"markersize": 6,
			"maxscale": 1000,
			"varstyles": [],
			"iconsrcfunc": (p_args) => {
				return [p_args.tipo_placa, `symbimg/${p_args.tipo_placa.toLowerCase()}.png`];
			},
			"icondefsymb": { "tipo_placa": "d1b" },
			"msgsdict": {
				"deflang": "pt",
				"pt": {
					"sv_placa": "placa de sinalização",
					"nip": "identificação NIP",
					"cod_gis_suporte": "ident. prumo", 
					"tipo_placa": "tipo", 
					"ano_colocacao": "ano de colocacao", 
					"aba": "aba", 
					"data_lev": "data de levantamento", 
					"data_lastupd": "última atualização em", 
					"foto_face": "imagem frente",
					"foto_costas": "imagem traseira",
					"estado_conservacao": "estado de conservação",
					"obs": "observações"
				}
			},
			"maptipfields": {
				"add": [
					"nip", "tipo_placa", "cod_gis_suporte", "ano_colocacao","estado_conservacao"
				]
			},
			"infocfg": {
				"keyfield": "objectid",
				"keyisstring": true,
				"caption2value_widthfraction":  0.4,
				"qrykey": "sv_placa_info",
				"jsonkey": "sv_placa_tv", 
				"fields": {
					"add": [
						"tipo_placa","nip","cod_gis_suporte","ano_colocacao","aba","estado_conservacao","data_lev","data_lastupd","obs","foto_face","foto_costas"
					],
					"formats": {
						"nip": {
							"format": (p_attrs, p_fld, p_lang) => {
								return `${p_attrs[p_fld].toString()}`;
							}
						},						
						"data_lev": {
							"type": "date"
						},
						"data_lastupd": {
							"type": "date"
						},
						"foto_face": {
							"type": "singleimg",
							"hidecaption": true,
							"srcfunc": (x) => {
								return `/esvfotos/${x}.jpg`;
							}
						},
						"foto_costas": {
							"type": "singleimg",
							"hidecaption": true,
							"srcfunc": (x) => {
								return `/esvfotos/${x}.jpg`;
							}
						}						
					},
					"transforms": [
					]
				}
			}
		},
		"sv_pladic": {
			"label": "painel adicional",
			"type": "riscofeats",
			"geomtype": "point",
			"url": "https://geo.cm-porto.net/riscosrv_v2",
			"layervisible": true,
			"mouseinteraction": true,
			"marker": "square",
			"selectionsymbol": {
				"marker": "circle",
				"markersize": 4,
			},
			"markersize": 3,
			"fillStyle": "black",
			"strokeStyle": "white",
			"lineWidth": 1,
			"maxscale": 1000,
			"position_shift": [0,11],
			"varstyles": [],

			"labelfield": "cnt",
			"labelFontSizePX": 10,
			"labelFontFace": "monospace",
			"labelFillStyle": "white",
			"label_position_shift": [0,12],

			"msgsdict": {
				"deflang": "pt",
				"pt": {
					"sv_placa": "placa de sinalização",
					"nipas": "identificação(ões) NIPA",
					"cod_gis_suporte": "ident. prumo", 
					"cnt": "contagem",
					"tipos_painadic": "tipo(s)", 
					"ano_colocacao": "ano de colocacao", 
					"aba": "aba", 
					"data_lev": "data de levantamento", 
					"data_lastupd": "última atualização em", 
					"foto_face": "imagem frente",
					"foto_costas": "imagem traseira",
					"estado_conservacao": "estado de conservação",
					"observacoes": "observações"
				}
			},
			"maptipfields": {
				"add": [
					"cod_gis_suporte", "tipo_placa", "cnt", "nipas","tipos_painadic"
				]
			},
			"infocfg": {
				"keyfields": [ "cod_gis_suporte", "ord" ],
				"caption2value_widthfraction":  0.4,
				"qrykey": "sv_pladic_info",
				"jsonkey": "sv_pladic_tv", 
				"fields": {
					"add": [
						"tipo_placa","inscricao", "nipa","cod_gis_suporte","ano_colocacao","aba","estado_conservacao","data_lev","data_lastupd","observacoes","foto_face","foto_costas"
					],
					"formats": {
						"nipa": {
							"format": (p_attrs, p_fld, p_lang) => {
								return `${p_attrs[p_fld].toString()}`;
							}
						},						
						"data_lev": {
							"type": "date"
						},
						"data_lastupd": {
							"type": "date"
						},
						"foto_face": {
							"type": "singleimg",
							"hidecaption": true,
							"srcfunc": (x) => {
								return `/esvfotos/${x}.jpg`;
							}
						},
						"foto_costas": {
							"type": "singleimg",
							"hidecaption": true,
							"srcfunc": (x) => {
								return `/esvfotos/${x}.jpg`;
							}
						}						
					},
					"transforms": [
					]
				}
			}
		},
		"sv_lguia": {
			"type": "riscofeats",
			"geomtype": "line",
			//"label": "Eixos de via",
			"mouseinteraction": false,
			"url": "https://geo.cm-porto.net/riscosrv_v2",
			"maxscale": 1000,
			"lineDash": [2,2], 
			"lineWidth": 1,
			"strokeStyle": "#ededed",
			"envsplit": false,
			"fillStyle": "none"
		}	

	}

}
