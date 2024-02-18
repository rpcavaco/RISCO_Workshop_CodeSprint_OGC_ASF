
import {addEnv} from './riscojs_v2/geom.mjs';

export class QueriesMgr {

	url;
	msg_ctrlr;
	mapctxt;
	layers_labels;

	constructor(p_mapctxt, p_url, p_msg_ctrlr) {

		this.url = p_url;
		this.msg_ctrlr = p_msg_ctrlr;
		this.mapctxt = p_mapctxt;

		this.layers_labels = {
			"sv_prumo": "prumo",
			"sv_placa": "placa de sinal",
			"sv_pladic": "painel adicional"
		}

	}

	test(p_qrystr) {

		let ret = "_mix";

		/*const CodSIGRegEx = new RegExp("[\\d]+", "g");
		const NIP_NIPA_RegEx = new RegExp("[sS][vV][\\s]?[\\d\/]+", "g");

		if (CodSIGRegEx.test(p_qrystr) && p_qrystr.length > 8) {
			ret = "codsig";
		} if (NIP_NIPA_RegEx.test(p_qrystr) && p_qrystr.length > 8) {
			ret = "nip_nipa";
		}		*/

		return ret;
	}

	customquery(p_valueslist, p_type) {

		const that = this;

		const valueslist = p_valueslist;

		/* for (let v of p_valueslist) {
			valueslist.push(v.replace(/[sS][vV][\\s]?([\\S]*)/, "$1").trim()); // eliminar prefixo 'SV'
		} */

		return new Promise((resolve, reject) => {

			if (p_valueslist[0].length < 3) {
				resolve(["NUMCHARS_INSUFICIENTE"]);
			}
		
			fetch(this.url, {
				method: "POST",
				body: JSON.stringify({
					alias: 'sv_findprumoplaca_qry',
					keyword: p_type,
					filtervals: valueslist, 
					pbuffer: 50,
					lang: "pt"
				})
			})
			.then((p_response) => {

				if (p_response.length < 1) {
					that.msg_ctrlr.setMessage("Sem resposta do servidor", true, true);
					resolve(null);
				} else {
					resolve(p_response.json());
				}			
			}).catch((error) => {			
				reject(error);
			});		

		});
		
	}



}

