const clients = [
  {
    "code": "17788",
    "name": "AELIA DUTY FREE - OVIEDO"
  },
  {
    "code": "18159",
    "name": "RELAY - TIENDA Nº 5.026"
  },
  {
    "code": "17789",
    "name": "AELIA DUTY FREE - SANTANDER"
  },
  {
    "code": "12397",
    "name": "COMERCIAL TEXEO"
  },
  {
    "code": "16299",
    "name": "LIU ASIA"
  },
  {
    "code": "14188",
    "name": "GLOBAL VISADO"
  },
  {
    "code": "15664",
    "name": "FUNDACIÓN CABRALES"
  },
  {
    "code": "3635",
    "name": "LA TIENDA NUEVA"
  },
  {
    "code": "12360",
    "name": "AIPOL AVENTURA"
  },
  {
    "code": "2094",
    "name": "AREA SELLASTURES"
  },
  {
    "code": "1788",
    "name": "FERRETERÍA FALO"
  },
  {
    "code": "2997",
    "name": "HOTEL LOS ACEBOS"
  },
  {
    "code": "3573",
    "name": "CHOCOLATERIA LA ERGASTULA ROMANA"
  },
  {
    "code": "9317",
    "name": "E.S. ASTORGA (Nº 11020 )"
  },
  {
    "code": "14477",
    "name": "MUSICAL ZARABANDA"
  },
  {
    "code": "16002",
    "name": "UNA PAUSA EN EL CAMINO"
  },
  {
    "code": "14154",
    "name": "ULTREIA Y SUSEIA UNIPESSOAL LDA"
  },
  {
    "code": "6290",
    "name": "BAZAR CHINO"
  },
  {
    "code": "6390",
    "name": "CANAL FOTO"
  },
  {
    "code": "16431",
    "name": "HOTEL 40 NUDOS"
  },
  {
    "code": "16427",
    "name": "REGALOS VENUS"
  },
  {
    "code": "18923",
    "name": "TIZA Y PEONZA"
  },
  {
    "code": "6067",
    "name": "TODO ASTUR"
  },
  {
    "code": "17265",
    "name": "NATIVIDAD BERNARDO BERNARDO"
  },
  {
    "code": "18359",
    "name": "EL MUSGOSO"
  },
  {
    "code": "16457",
    "name": "LA ANJANA"
  },
  {
    "code": "13627",
    "name": "TERRALMAR"
  },
  {
    "code": "16642",
    "name": "GRAN HOTEL CELA"
  },
  {
    "code": "19749",
    "name": "LA PLAZA"
  },
  {
    "code": "18838",
    "name": "TIENDA EL TEYERU"
  },
  {
    "code": "19262",
    "name": "CLIC CLAC"
  },
  {
    "code": "14183",
    "name": "MARILUZ CADENAS MENDEZ"
  },
  {
    "code": "3884",
    "name": "ARTESANIA LA RUTA"
  },
  {
    "code": "15489",
    "name": "SUPERMERCADO LA RUTA"
  },
  {
    "code": "14357",
    "name": "EL PASEIN"
  },
  {
    "code": "18301",
    "name": "PIMPONETI ART"
  },
  {
    "code": "15339",
    "name": "YING CHEN"
  },
  {
    "code": "3958",
    "name": "E. MORODO"
  },
  {
    "code": "561",
    "name": "ASTURIAS ENCANTADA ALMACEN"
  },
  {
    "code": "528",
    "name": "ASTURIAS ENCANTADA CANGAS"
  },
  {
    "code": "18027",
    "name": "EL BARATO"
  },
  {
    "code": "11228",
    "name": "EL ESBARDU"
  },
  {
    "code": "521",
    "name": "EL MERCAO"
  },
  {
    "code": "19765",
    "name": "FOTO MARTINEZ"
  },
  {
    "code": "9028",
    "name": "LES CAMISETES CAYARGA"
  },
  {
    "code": "17488",
    "name": "LOS CAUCES"
  },
  {
    "code": "9828",
    "name": "REY PELAYO REGALOS"
  },
  {
    "code": "1754",
    "name": "SOUVENIRS PICOS DE EUROPA"
  },
  {
    "code": "16547",
    "name": "TV JAIME"
  },
  {
    "code": "2774",
    "name": "EL PORTICO"
  },
  {
    "code": "16850",
    "name": "LA CASA DEL EMBUTIDO"
  },
  {
    "code": "790",
    "name": "MANTELEIRO"
  },
  {
    "code": "17255",
    "name": "COLORETES"
  },
  {
    "code": "14721",
    "name": "ESTANCO MARIA SOLEDAD"
  },
  {
    "code": "15727",
    "name": "LA ESQUINA"
  },
  {
    "code": "17763",
    "name": "CONSERVAS VELMAR"
  },
  {
    "code": "17331",
    "name": "E.S. COLUNGA (Nº11980)"
  },
  {
    "code": "19597",
    "name": "MUNDO CIEN"
  },
  {
    "code": "16190",
    "name": "ALMA DE MAR"
  },
  {
    "code": "19204",
    "name": "BAR LA PERLA NEGRA"
  },
  {
    "code": "15570",
    "name": "CANTABROASTUR"
  },
  {
    "code": "18874",
    "name": "CAPRICHOS"
  },
  {
    "code": "19617",
    "name": "FERRETERIA ISAAC GUTIERREZ"
  },
  {
    "code": "18930",
    "name": "FOTO ROZAS"
  },
  {
    "code": "11559",
    "name": "LA VACA DE COMILLAS"
  },
  {
    "code": "14149",
    "name": "TRASGO"
  },
  {
    "code": "18839",
    "name": "EL OSO ROJO CORNELLANA"
  },
  {
    "code": "18028",
    "name": "EXPENDEDURIA DE COVADONGA"
  },
  {
    "code": "16053",
    "name": "KIOSCO Nº3"
  },
  {
    "code": "15615",
    "name": "QUIOSCO BEGOÑA"
  },
  {
    "code": "851",
    "name": "QUIOSCO CARLOS"
  },
  {
    "code": "5634",
    "name": "QUIOSCO Nº 1 Y 2"
  },
  {
    "code": "14201",
    "name": "ARTE Y MAR"
  },
  {
    "code": "18198",
    "name": "ESTANCO CUDILLERO"
  },
  {
    "code": "18380",
    "name": "KIOSCO IGNACIO"
  },
  {
    "code": "16586",
    "name": "LA CASA DE JULIA"
  },
  {
    "code": "19412",
    "name": "RELOJERIA CEBALLOS"
  },
  {
    "code": "19534",
    "name": "SUSANA PAPELERIA Y REGALO"
  },
  {
    "code": "16023",
    "name": "BAZAR SAN MARTIN"
  },
  {
    "code": "5296",
    "name": "CASA CLARA"
  },
  {
    "code": "8164",
    "name": "PETROPRIN"
  },
  {
    "code": "17628",
    "name": "BELEN CANEL MADARRO"
  },
  {
    "code": "15801",
    "name": "DANIEL ROSELL NOGALES"
  },
  {
    "code": "14704",
    "name": "EL ZOCO"
  },
  {
    "code": "4663",
    "name": "OFIFOZ"
  },
  {
    "code": "3905",
    "name": "EL PEREGRINO"
  },
  {
    "code": "522",
    "name": "A.E. DON PELAYO"
  },
  {
    "code": "14227",
    "name": "ARTESANIA ASTURIANA"
  },
  {
    "code": "525",
    "name": "ASTURIAS ENCANTADA GIJON"
  },
  {
    "code": "11446",
    "name": "ASTURIAS MAGICA"
  },
  {
    "code": "9384",
    "name": "E.S. PUMARIN (Nº 11609)"
  },
  {
    "code": "9402",
    "name": "EL CANTABRICO"
  },
  {
    "code": "16049",
    "name": "FLORISTERIA LA JOVELLANA"
  },
  {
    "code": "18530",
    "name": "HABIA OTRA VEZ"
  },
  {
    "code": "13845",
    "name": "HOTEL ARBEYAL"
  },
  {
    "code": "13931",
    "name": "HOTEL NORTE"
  },
  {
    "code": "17212",
    "name": "KE T´APUESTES?"
  },
  {
    "code": "14804",
    "name": "KIOSCO ADARO"
  },
  {
    "code": "14825",
    "name": "KIOSCO FAVILA"
  },
  {
    "code": "16984",
    "name": "KIROCOM"
  },
  {
    "code": "18676",
    "name": "LA CESTA"
  },
  {
    "code": "9559",
    "name": "LIBRERIA DIOCESANA GIJON"
  },
  {
    "code": "17211",
    "name": "LUNA NUEVA"
  },
  {
    "code": "14068",
    "name": "MUSEO DEL JURÁSICO DE ASTURIAS"
  },
  {
    "code": "16005",
    "name": "OM"
  },
  {
    "code": "18911",
    "name": "TIENDAS MARVELOUS"
  },
  {
    "code": "16595",
    "name": "VULEVU"
  },
  {
    "code": "15665",
    "name": "CAFE BAR EL PATIO"
  },
  {
    "code": "17611",
    "name": "LA TIENDA DEL KORYNTO"
  },
  {
    "code": "16875",
    "name": "PLANETA GOLOSO"
  },
  {
    "code": "12628",
    "name": "LILY COMPLEMENTOS"
  },
  {
    "code": "16654",
    "name": "PANRIS"
  },
  {
    "code": "17474",
    "name": "BAZAR ASIA BIN"
  },
  {
    "code": "15655",
    "name": "SILVIA FERNANDEZ ABASCAL"
  },
  {
    "code": "7384",
    "name": "REGALOS IRANA"
  },
  {
    "code": "18046",
    "name": "ROSA ABEL PARAJON CANGA"
  },
  {
    "code": "4779",
    "name": "BAZAR EL HORREO"
  },
  {
    "code": "12407",
    "name": "EL ASUBIU"
  },
  {
    "code": "681",
    "name": "FERRETERIA EL REGALO"
  },
  {
    "code": "12907",
    "name": "LOW COST LAREDO"
  },
  {
    "code": "19331",
    "name": "MAYU - DETALLES Y ENCANTOS"
  },
  {
    "code": "5586",
    "name": "TARANCO"
  },
  {
    "code": "548",
    "name": "ASTURIAS ENCANTADA LASTRES"
  },
  {
    "code": "4798",
    "name": "EL FARO"
  },
  {
    "code": "18371",
    "name": "E.S. FUENTE SILA (Nº 33303)"
  },
  {
    "code": "16737",
    "name": "BAZAR JIXIANG II"
  },
  {
    "code": "12738",
    "name": "ELOY AREVALO GONZALEZ"
  },
  {
    "code": "17936",
    "name": "ESTANCO DE GUZMAN"
  },
  {
    "code": "5232",
    "name": "FOTOGRAFIA J.R."
  },
  {
    "code": "16850",
    "name": "LA CASA DEL EMBUTIDO"
  },
  {
    "code": "5233",
    "name": "LEON TIPICO"
  },
  {
    "code": "13108",
    "name": "NAURA"
  },
  {
    "code": "19540",
    "name": "SAMARCANDA"
  },
  {
    "code": "17059",
    "name": "EL ALFAR"
  },
  {
    "code": "11845",
    "name": "LA CASA DE LA BISA"
  },
  {
    "code": "6596",
    "name": "ASTURARCO 2012, SL"
  },
  {
    "code": "17014",
    "name": "ASTUR"
  },
  {
    "code": "10227",
    "name": "ECUS"
  },
  {
    "code": "17013",
    "name": "RICO RICO"
  },
  {
    "code": "14812",
    "name": "RAFI"
  },
  {
    "code": "11681",
    "name": "CARTOY PRO APOYO"
  },
  {
    "code": "19745",
    "name": "COPISTERIA PYM"
  },
  {
    "code": "9385",
    "name": "E.S. LUANCO (Nº 11043)"
  },
  {
    "code": "15949",
    "name": "HONGYUAN MERCA"
  },
  {
    "code": "19252",
    "name": "LA MAR DE RECUERDOS"
  },
  {
    "code": "3131",
    "name": "MEDIO MARINO DE CABO PEÑAS"
  },
  {
    "code": "19577",
    "name": "SUERTE DEL NORTE"
  },
  {
    "code": "928",
    "name": "BAHIA 02 LUARCA"
  },
  {
    "code": "18472",
    "name": "AIGOR ROMO RODRIGUEZ"
  },
  {
    "code": "14926",
    "name": "BAHIA 19 LUGO"
  },
  {
    "code": "10690",
    "name": "E.S. MONTICO I (Nº 11259)"
  },
  {
    "code": "9531",
    "name": "E.S. PARQUEASTUR (Nº 11100)"
  },
  {
    "code": "8636",
    "name": "E.S. RIOSECO II (Nº 00000)"
  },
  {
    "code": "9447",
    "name": "E.S. ROBLEDO I (Nº 11423)"
  },
  {
    "code": "9387",
    "name": "E.S. ROBLEDO II (Nº 11424)"
  },
  {
    "code": "16054",
    "name": "OCHI Y MARIA"
  },
  {
    "code": "9719",
    "name": "GOMILOLAS"
  },
  {
    "code": "16986",
    "name": "LABERINTO"
  },
  {
    "code": "17477",
    "name": "CASA REGINA"
  },
  {
    "code": "8010",
    "name": "ESTANCO CASA CARI"
  },
  {
    "code": "9152",
    "name": "ESTANCO ALBA"
  },
  {
    "code": "18796",
    "name": "ESPIRAL MODA Y REGALOS"
  },
  {
    "code": "11583",
    "name": "GASOLINERA NOVELLANA"
  },
  {
    "code": "6872",
    "name": "EL TEXIEU"
  },
  {
    "code": "8645",
    "name": "E.S. VILLAVIDEL M.D. (Nº 11428)"
  },
  {
    "code": "8612",
    "name": "E.S. VILLAVIDEL M.I. (Nº 00000)"
  },
  {
    "code": "3615",
    "name": "ALCORDANCES DE ASTURIES"
  },
  {
    "code": "545",
    "name": "ASTURIAS ENCANTADA OVIEDO"
  },
  {
    "code": "19019",
    "name": "CATEDRAL DE OVIEDO"
  },
  {
    "code": "210",
    "name": "CLIENTE ERROR LOLO ASTURIAS"
  },
  {
    "code": "19364",
    "name": "CRESVI, SA"
  },
  {
    "code": "751",
    "name": "CRIVENCAR, S.L."
  },
  {
    "code": "15953",
    "name": "EL TREN DE VAPOR"
  },
  {
    "code": "18430",
    "name": "EXPENDEDURIA N. 55"
  },
  {
    "code": "13024",
    "name": "LA BOMBA RECORDS"
  },
  {
    "code": "18823",
    "name": "LIBRERIA ANTARES"
  },
  {
    "code": "17637",
    "name": "LIBRERIA DIOCESANA"
  },
  {
    "code": "15311",
    "name": "MANGOR"
  },
  {
    "code": "15075",
    "name": "PAIS DOBLE"
  },
  {
    "code": "15972",
    "name": "SERENDIPIA"
  },
  {
    "code": "18407",
    "name": "SUCUBUS"
  },
  {
    "code": "18729",
    "name": "TODO ASTURIAS"
  },
  {
    "code": "19488",
    "name": "TOLON TOLON"
  },
  {
    "code": "18431",
    "name": "TRIBU"
  },
  {
    "code": "742",
    "name": "TRISQUEL"
  },
  {
    "code": "17324",
    "name": "INFANTE"
  },
  {
    "code": "658",
    "name": "COVADONGA"
  },
  {
    "code": "18947",
    "name": "TUTTI EL PARQUE"
  },
  {
    "code": "17400",
    "name": "HECHIZOS REGALOS"
  },
  {
    "code": "1416",
    "name": "CASA SENI"
  },
  {
    "code": "16240",
    "name": "ORIGEN & ESPIGA"
  },
  {
    "code": "15237",
    "name": "BUSTAMANTE"
  },
  {
    "code": "2468",
    "name": "CANELA"
  },
  {
    "code": "10290",
    "name": "CARMEN PEREZ VILAN"
  },
  {
    "code": "11853",
    "name": "CASA REVUELTA"
  },
  {
    "code": "663",
    "name": "CASA WENCES"
  },
  {
    "code": "4232",
    "name": "FERRETERIA CETO"
  },
  {
    "code": "16389",
    "name": "FERRETERÍA GUTIÉRREZ FERNÁNDEZ"
  },
  {
    "code": "16580",
    "name": "KIOSCO LA SERNA"
  },
  {
    "code": "14342",
    "name": "LA TIENDA DE NURIA"
  },
  {
    "code": "9658",
    "name": "VENERANDA DE COS DOBARGANES"
  },
  {
    "code": "19903",
    "name": "FASONA"
  },
  {
    "code": "6949",
    "name": "CHAROL"
  },
  {
    "code": "16015",
    "name": "GRAN BAZAR ANGELA"
  },
  {
    "code": "16642",
    "name": "GRAN HOTEL CELA"
  },
  {
    "code": "2600",
    "name": "CASA CAMILO"
  },
  {
    "code": "11835",
    "name": "BAR-TIENDA LA VENTA LOS PROBES"
  },
  {
    "code": "1160",
    "name": "CASA MORÁN"
  },
  {
    "code": "18746",
    "name": "LA TIENDA VIOLETA"
  },
  {
    "code": "2296678",
    "name": "BAZAR EL REY"
  },
  {
    "code": "6623",
    "name": "LLAGAR CASTAÑON"
  },
  {
    "code": "8317",
    "name": "JOSE MANUEL GUTIERREZ"
  },
  {
    "code": "10203",
    "name": "MIGUEL ANGEL CUEVAS LOPEZ"
  },
  {
    "code": "18389",
    "name": "REGALOS GOMEZ"
  },
  {
    "code": "15801",
    "name": "DANIEL ROSELL NOGALES"
  },
  {
    "code": "17995",
    "name": "GONZALO SANTIAGO RODRIGUEZ VAQUERIZO"
  },
  {
    "code": "16466",
    "name": "PICAROLAS"
  },
  {
    "code": "13794",
    "name": "PREHOTI COOPERATIVA VALENCIANA"
  },
  {
    "code": "19157",
    "name": "BAZAR ALARA REGALOS Y SOUVENIR"
  },
  {
    "code": "5470",
    "name": "GECKO"
  },
  {
    "code": "19661",
    "name": "RIBADESELLAMIA"
  },
  {
    "code": "15296",
    "name": "TIENDA LHORRU"
  },
  {
    "code": "12242",
    "name": "A NASA"
  },
  {
    "code": "8635",
    "name": "E.S. RIOSECO DE TAPIA (Nº 10611)"
  },
  {
    "code": "8636",
    "name": "E.S. RIOSECO II (Nº 00000)"
  },
  {
    "code": "15276",
    "name": "JUAN ANTONIO ROSELL NOGALES"
  },
  {
    "code": "18521",
    "name": "E.S. LA CARIDAD"
  },
  {
    "code": "16026",
    "name": "BAZAR AYALGA"
  },
  {
    "code": "18483",
    "name": "ESTANCO AM"
  },
  {
    "code": "15885",
    "name": "GRAN BAZAR SAN ANDRÉS"
  },
  {
    "code": "14106",
    "name": "BAZAR ALIMENTACION"
  },
  {
    "code": "14068",
    "name": "MUSEO DEL JURÁSICO DE ASTURIAS"
  },
  {
    "code": "18472",
    "name": "AIGOR ROMO RODRIGUEZ"
  },
  {
    "code": "9690",
    "name": "ELECTRONICA LLERA"
  },
  {
    "code": "16690",
    "name": "HELADERIA LA MURALLA"
  },
  {
    "code": "16155",
    "name": "JORGE MARTINEZ OBRADORS"
  },
  {
    "code": "2210",
    "name": "REGALOS EL CASTILLO"
  },
  {
    "code": "18098",
    "name": "CASERIO VIDUEDO"
  },
  {
    "code": "9447",
    "name": "E.S. ROBLEDO I (Nº 11423)"
  },
  {
    "code": "9387",
    "name": "E.S. ROBLEDO II (Nº 11424)"
  },
  {
    "code": "9758",
    "name": "BAZAR EL VECINO"
  },
  {
    "code": "19378",
    "name": "BAZAR FAMILIA"
  },
  {
    "code": "1790",
    "name": "BURBUJAS"
  },
  {
    "code": "8664",
    "name": "COPPEN"
  },
  {
    "code": "13642",
    "name": "DONIS"
  },
  {
    "code": "16139",
    "name": "ESTANCO MACHICHACO"
  },
  {
    "code": "6778",
    "name": "EUROSHOP"
  },
  {
    "code": "19691",
    "name": "GARPLEX"
  },
  {
    "code": "17600",
    "name": "GODOFREDO"
  },
  {
    "code": "4829",
    "name": "HELADOS QUIYU"
  },
  {
    "code": "17264",
    "name": "KIOSCO CHARO"
  },
  {
    "code": "16806",
    "name": "MASTER CIEN"
  },
  {
    "code": "2299",
    "name": "PLASTICOS PLEX"
  },
  {
    "code": "13349",
    "name": "REGALOS MICHEL"
  },
  {
    "code": "9624",
    "name": "ARTESANIAS ANSORENA"
  },
  {
    "code": "15735",
    "name": "BAZAR COBO"
  },
  {
    "code": "1096",
    "name": "BAZAR COLEGIATA"
  },
  {
    "code": "11536",
    "name": "BAZAR COLEGIATA"
  },
  {
    "code": "1911",
    "name": "BAZAR EL DESEO"
  },
  {
    "code": "1970",
    "name": "CERÁMICA OTERO"
  },
  {
    "code": "11178",
    "name": "DA VINCI"
  },
  {
    "code": "13600",
    "name": "EDUARDO ANSORENA ECHEVARRIA"
  },
  {
    "code": "18262",
    "name": "EL BARCO"
  },
  {
    "code": "2167",
    "name": "EL RIO"
  },
  {
    "code": "19759",
    "name": "LA VACA SANTILLANA"
  },
  {
    "code": "10546",
    "name": "LUZMARI BIELVA PUENTE"
  },
  {
    "code": "16593",
    "name": "MERCADOS TEMATICOS ABALON"
  },
  {
    "code": "13893",
    "name": "MUSEO BARQUILLERO, SC"
  },
  {
    "code": "7821",
    "name": "TRASTOLILLO"
  },
  {
    "code": "12318",
    "name": "BAZAR EUROMAR"
  },
  {
    "code": "11623",
    "name": "MOOREA SURF"
  },
  {
    "code": "12099",
    "name": "EL KIOSKO DE NATI"
  },
  {
    "code": "15547",
    "name": "BAZAR COSAS DE CASA"
  },
  {
    "code": "10690",
    "name": "E.S. MONTICO I (Nº 11259)"
  },
  {
    "code": "9445",
    "name": "E.S. MONTICO II (Nº 11258)"
  },
  {
    "code": "8188",
    "name": "BAZAR EL REY"
  },
  {
    "code": "12057",
    "name": "TUTTI FRUTTI CHARO"
  },
  {
    "code": "17817",
    "name": "A XANUCA"
  },
  {
    "code": "7840",
    "name": "ARTESANIA  TELAR"
  },
  {
    "code": "632",
    "name": "CASA VICENTE, C.B."
  },
  {
    "code": "14872",
    "name": "DELICIAS DE TARAMUNDI"
  },
  {
    "code": "15204",
    "name": "EL PUESTIN DE TARAMUNDI"
  },
  {
    "code": "6036",
    "name": "EVA M. RODRIGUEZ RODIL"
  },
  {
    "code": "2117",
    "name": "FERRETERÍA LEGAZPI"
  },
  {
    "code": "12851",
    "name": "CASA VIÑES"
  },
  {
    "code": "16725",
    "name": "GUARNICIONERIA Y ARTESANIA SANZ"
  },
  {
    "code": "837",
    "name": "CARRUSELAMBRA"
  },
  {
    "code": "17011",
    "name": "REGALIZ"
  },
  {
    "code": "15701",
    "name": "EURODOA"
  },
  {
    "code": "13608",
    "name": "HOTEL OSCOS"
  },
  {
    "code": "15479",
    "name": "TIENDA OSCOS"
  },
  {
    "code": "10751",
    "name": "BAZAR NAVATEJERA"
  },
  {
    "code": "1047",
    "name": "FERRETERÍA JUAN S. MIGUEL"
  },
  {
    "code": "18158",
    "name": "PATRICIA TORRIJOS FERNANDEZ"
  }
];
