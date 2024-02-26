\connect evoradata

--
-- TOC entry 3922 (class 0 OID 152381)
-- Dependencies: 207
-- Data for Name: risco_find; Type: TABLE DATA; Schema: risco_v2; Owner: risco_v2
--

COPY risco_v2.risco_find (falias, alias, ord, inuse, filteradapt, target, fschema) FROM stdin;
\.


--
-- TOC entry 3923 (class 0 OID 153416)
-- Dependencies: 213
-- Data for Name: risco_layerview; Type: TABLE DATA; Schema: risco_v2; Owner: risco_v2
--

COPY risco_v2.risco_layerview (lname, dbobjname, oidfname, geomfname, adic_fields_str, schema, lyrid, inuse, maps, srid, useridfname, filter_expression, joinobj, join_expression, joinschema, outer_join, public_access, is_function, deffilter, editable, editobj_schema, editobj_name, edit_users, gisid_field, accept_deletion, mark_as_deleted_ts_field, creation_ts_field) FROM stdin;
AL	estabelecimentos_de_al	id	geom	denominacao, modalidade, endereco, codigopostal, nrutentes	evoradata	e07adbd0-cf01-11ee-b9bd-be44c46e6d02	t	{evora}	3763	\N	\N	\N	\N	\N	\N	f	f	\N	f	\N	\N	\N	\N	f	\N	\N
EV	lines_osm	id	geom	name	evoradata	48a80bc4-cba1-11ee-b760-3ae1cf4de08f	t	{evora}	3763	\N	\N	\N	\N	\N	\N	f	f	\N	f	\N	\N	\N	\N	f	\N	\N
edificios	polygons_osm	id	geom	osm_type, tourism, website, historic, wikipedia, site_status, amenity, name, "heritage:website:sipa", "heritage:website", "heritage:since", building, alt_name	evoradata	f107c5bc-d21c-11ee-ae84-c62ae8c8478b	t	{evora}	3763	\N	\N	\N	\N	\N	\N	f	f	\N	f	\N	\N	\N	\N	t	\N	\N
arqueologia	dgpc_arqueologia	id	geom	url, periodos, tipo_principal, outros_tipos, designacao	evoradata	e0754d42-cf82-11ee-9b6f-d2ac454cfcd7	t	{evora}	3763	\N	\N	\N	\N	\N	\N	f	f	\N	t	\N	\N	\N	globalid	t	\N	\N
\.


--
-- TOC entry 3924 (class 0 OID 153432)
-- Dependencies: 214
-- Data for Name: risco_map; Type: TABLE DATA; Schema: risco_v2; Owner: risco_v2
--

COPY risco_v2.risco_map (mapname, descr, srid) FROM stdin;
evora	Explore Évora	3763
\.


--
-- TOC entry 3925 (class 0 OID 153440)
-- Dependencies: 215
-- Data for Name: risco_map_auth_session; Type: TABLE DATA; Schema: risco_v2; Owner: risco_v2
--

COPY risco_v2.risco_map_auth_session (mapname, auth_ctrl_obj_schema, auth_ctrl_obj_name, login_field, sessionid_field, editok_validation_expression, do_match_login) FROM stdin;
evora	evoradata	vw_active_user_sessions	login	session_id	can_edit	f
\.


--
-- TOC entry 3926 (class 0 OID 153449)
-- Dependencies: 216
-- Data for Name: risco_msgs; Type: TABLE DATA; Schema: risco_v2; Owner: risco_v2
--

COPY risco_v2.risco_msgs (sn, msg, severity, context, ts, params) FROM stdin;
1	evoradata.estabelecimentos_al: table does not exist	2	full_chunk_calc	2024-02-19 08:46:46.249008+00	\N
2	evoradata.estabelecimentos_al: table does not exist	2	full_chunk_calc	2024-02-19 08:46:53.779155+00	\N
3	evoradata.estabelecimentos_al: table does not exist	2	full_chunk_calc	2024-02-19 08:46:56.171829+00	\N
4	evoradata.estabelecimentos_al: table does not exist	2	full_chunk_calc	2024-02-19 08:47:03.092681+00	\N
5	evoradata.vw_dgpc_arqueologia: table does not exist	2	full_chunk_calc	2024-02-20 00:18:24.959458+00	\N
6	evoradata.vw_dgpc_arqueologia: table does not exist	2	full_chunk_calc	2024-02-20 00:18:32.880322+00	\N
7	evoradata.vw_dgpc_arqueologia: table does not exist	2	full_chunk_calc	2024-02-20 00:18:41.431724+00	\N
\.


--
-- TOC entry 3927 (class 0 OID 153460)
-- Dependencies: 217
-- Data for Name: risco_request; Type: TABLE DATA; Schema: risco_v2; Owner: risco_v2
--

COPY risco_v2.risco_request (reqid, cenx, ceny, wid, hei, pixsz) FROM stdin;
\.


--
-- TOC entry 3928 (class 0 OID 153469)
-- Dependencies: 218
-- Data for Name: risco_request_geometry; Type: TABLE DATA; Schema: risco_v2; Owner: risco_v2
--

COPY risco_v2.risco_request_geometry (reqid, lyrid, oidv, the_geom) FROM stdin;
\.


--
-- TOC entry 3929 (class 0 OID 153477)
-- Dependencies: 219
-- Data for Name: risco_stats; Type: TABLE DATA; Schema: risco_v2; Owner: risco_v2
--

COPY risco_v2.risco_stats (key, dataobjname, allowedcols, dataobjschema, filter_expression) FROM stdin;
\.


--
-- TOC entry 3930 (class 0 OID 153485)
-- Dependencies: 220
-- Data for Name: risco_tableview; Type: TABLE DATA; Schema: risco_v2; Owner: risco_v2
--

COPY risco_v2.risco_tableview (alias, dbobjname, fields_str, schema, tblid, inuse, orderby, filter_expression, joinobj, join_expression, joinschema, outer_join) FROM stdin;
\.


--
-- TOC entry 3936 (class 0 OID 0)
-- Dependencies: 206
-- Name: risco_msgs_sn_seq; Type: SEQUENCE SET; Schema: risco_v2; Owner: risco_v2
--

SELECT pg_catalog.setval('risco_v2.risco_msgs_sn_seq', 7, true);


-- Completed on 2024-02-25 23:29:31 UTC

--
-- PostgreSQL database dump complete
--

