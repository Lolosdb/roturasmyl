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
    "code": "10872",
    "name": "E.S. MATAPORQUERA (Nº 11909)"
  },
  {
    "code": "15932",
    "name": "ADENOR ASTURIAS"
  },
  {
    "code": "348",
    "name": "CLIENTE ERROR GALP LOLO"
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
    "code": "9316",
    "name": "E.S. ARMUNIA (Nº 00000)"
  },
  {
    "code": "9933",
    "name": "E.S. ARMUNIA M.I. (Nº 00000)"
  },
  {
    "code": "12235",
    "name": "ZENIT EXPERIENCIAS"
  },
  {
    "code": "12360",
    "name": "AIPOL AVENTURA"
  },
  {
    "code": "1788",
    "name": "FERRETERÍA FALO"
  },
  {
    "code": "2094",
    "name": "AREA SELLASTURES"
  },
  {
    "code": "2997",
    "name": "HOTEL LOS ACEBOS"
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
    "code": "3573",
    "name": "CHOCOLATERIA LA ERGASTULA ROMANA"
  },
  {
    "code": "9317",
    "name": "E.S. ASTORGA (Nº 11020 )"
  },
  {
    "code": "14154",
    "name": "ULTREIA Y SUSEIA UNIPESSOAL LDA"
  },
  {
    "code": "14099",
    "name": "J&L MASPALOMAS"
  },
  {
    "code": "16427",
    "name": "REGALOS VENUS"
  },
  {
    "code": "16431",
    "name": "HOTEL 40 NUDOS"
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
    "code": "6290",
    "name": "BAZAR CHINO"
  },
  {
    "code": "6390",
    "name": "CANAL FOTO"
  },
  {
    "code": "6571",
    "name": "J&L"
  },
  {
    "code": "17265",
    "name": "NATIVIDAD BERNARDO BERNARDO"
  },
  {
    "code": "16457",
    "name": "LA ANJANA"
  },
  {
    "code": "18359",
    "name": "EL MUSGOSO"
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
    "code": "18838",
    "name": "TIENDA EL TEYERU"
  },
  {
    "code": "15335",
    "name": "BAZAR COSUCAS"
  },
  {
    "code": "12705",
    "name": "TIENDAS IGO´S"
  },
  {
    "code": "5498",
    "name": "E.S. MERUELO SL"
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
    "code": "9576",
    "name": "E.S. CABORANA (Nº 11692)"
  },
  {
    "code": "15489",
    "name": "SUPERMERCADO LA RUTA"
  },
  {
    "code": "3884",
    "name": "ARTESANIA LA RUTA"
  },
  {
    "code": "8623",
    "name": "E.S. CALDAS DE LUNA (Nº 10610)"
  },
  {
    "code": "14357",
    "name": "EL PASEIN"
  },
  {
    "code": "15339",
    "name": "YING CHEN"
  },
  {
    "code": "18301",
    "name": "PIMPONETI ART"
  },
  {
    "code": "3958",
    "name": "E. MORODO"
  },
  {
    "code": "11228",
    "name": "EL ESBARDU"
  },
  {
    "code": "16547",
    "name": "TV JAIME"
  },
  {
    "code": "17488",
    "name": "LOS CAUCES"
  },
  {
    "code": "1754",
    "name": "SOUVENIRS PICOS DE EUROPA"
  },
  {
    "code": "18027",
    "name": "EL BARATO"
  },
  {
    "code": "528",
    "name": "ASTURIAS ENCANTADA CANGAS"
  },
  {
    "code": "521",
    "name": "EL MERCAO"
  },
  {
    "code": "561",
    "name": "ASTURIAS ENCANTADA ALMACEN"
  },
  {
    "code": "9028",
    "name": "LES CAMISETES CAYARGA"
  },
  {
    "code": "9828",
    "name": "REY PELAYO REGALOS"
  },
  {
    "code": "9445",
    "name": "E.S. MONTICO II (Nº 11258)"
  },
  {
    "code": "2774",
    "name": "EL PORTICO"
  },
  {
    "code": "10688",
    "name": "E.S. CARTES (Nº 11534)"
  },
  {
    "code": "16850",
    "name": "LA CASA DEL EMBUTIDO"
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
    "code": "17255",
    "name": "COLORETES"
  },
  {
    "code": "10566",
    "name": "E.S. VALDALIGA M.D. (Nº 11383)"
  },
  {
    "code": "10724",
    "name": "E.S. VALDALIGA M.I. (Nº 11384)"
  },
  {
    "code": "7821",
    "name": "TRASTOLILLO"
  },
  {
    "code": "9336",
    "name": "E.S. CISTIERNA (Nº 00000)"
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
    "code": "11559",
    "name": "LA VACA DE COMILLAS"
  },
  {
    "code": "14149",
    "name": "TRASGO"
  },
  {
    "code": "15570",
    "name": "CANTABROASTUR"
  },
  {
    "code": "16190",
    "name": "ALMA DE MAR"
  },
  {
    "code": "18874",
    "name": "CAPRICHOS"
  },
  {
    "code": "18930",
    "name": "FOTO ROZAS"
  },
  {
    "code": "19204",
    "name": "BAR LA PERLA NEGRA"
  },
  {
    "code": "18839",
    "name": "EL OSO ROJO CORNELLANA"
  },
  {
    "code": "15615",
    "name": "QUIOSCO BEGOÑA"
  },
  {
    "code": "16053",
    "name": "KIOSCO Nº3"
  },
  {
    "code": "18028",
    "name": "EXPENDEDURIA DE COVADONGA"
  },
  {
    "code": "5634",
    "name": "QUIOSCO Nº 1 Y 2"
  },
  {
    "code": "851",
    "name": "QUIOSCO CARLOS"
  },
  {
    "code": "14201",
    "name": "ARTE Y MAR"
  },
  {
    "code": "16586",
    "name": "LA CASA DE JULIA"
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
    "code": "19412",
    "name": "RELOJERIA CEBALLOS"
  },
  {
    "code": "15932",
    "name": "ADENOR ASTURIAS"
  },
  {
    "code": "16023",
    "name": "BAZAR SAN MARTIN"
  },
  {
    "code": "9647",
    "name": "E.S. EL ENTREGO (Nº 10561)"
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
    "code": "14704",
    "name": "EL ZOCO"
  },
  {
    "code": "15801",
    "name": "DANIEL ROSELL NOGALES"
  },
  {
    "code": "4663",
    "name": "OFIFOZ"
  },
  {
    "code": "9383",
    "name": "E.S. LUGONES (Nº 11200)"
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
    "code": "525",
    "name": "ASTURIAS ENCANTADA GIJON"
  },
  {
    "code": "11446",
    "name": "ASTURIAS MAGICA"
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
    "code": "14068",
    "name": "MUSEO DEL JURÁSICO DE ASTURIAS"
  },
  {
    "code": "14227",
    "name": "ARTESANIA ASTURIANA"
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
    "code": "16005",
    "name": "OM"
  },
  {
    "code": "16049",
    "name": "FLORISTERIA LA JOVELLANA"
  },
  {
    "code": "16595",
    "name": "VULEVU"
  },
  {
    "code": "16984",
    "name": "KIROCOM"
  },
  {
    "code": "17211",
    "name": "LUNA NUEVA"
  },
  {
    "code": "17212",
    "name": "KE T´APUESTES?"
  },
  {
    "code": "18530",
    "name": "HABIA OTRA VEZ"
  },
  {
    "code": "18676",
    "name": "LA CESTA"
  },
  {
    "code": "18911",
    "name": "TIENDAS MARVELOUS"
  },
  {
    "code": "5596",
    "name": "REGALOS JIN HUA LIANG"
  },
  {
    "code": "8760",
    "name": "LOCIS SIGTECH SOLUCIONES SOSTENIBLES SLL VITAEVEN"
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
    "code": "9444",
    "name": "E.S. LOS CAMPONES (Nº 11597)"
  },
  {
    "code": "9559",
    "name": "LIBRERIA DIOCESANA GIJON"
  },
  {
    "code": "9846",
    "name": "QUIOSCO MARY"
  },
  {
    "code": "15665",
    "name": "CAFE BAR EL PATIO"
  },
  {
    "code": "16875",
    "name": "PLANETA GOLOSO"
  },
  {
    "code": "17611",
    "name": "LA TIENDA DEL KORYNTO"
  },
  {
    "code": "12628",
    "name": "LILY COMPLEMENTOS"
  },
  {
    "code": "9450",
    "name": "E.S. GRANDA-GIJON (Nº 00000)"
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
    "code": "9934",
    "name": "E.S. HERRERA (Nº 00000)"
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
    "code": "10607",
    "name": "E.S. LAREDO (Nº 10997)"
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
    "code": "681",
    "name": "FERRETERIA EL REGALO"
  },
  {
    "code": "4798",
    "name": "EL FARO"
  },
  {
    "code": "548",
    "name": "ASTURIAS ENCANTADA LASTRES"
  },
  {
    "code": "18371",
    "name": "E.S. FUENTE SILA (Nº 33303)"
  },
  {
    "code": "10636",
    "name": "BAZAR ASIA"
  },
  {
    "code": "12738",
    "name": "ELOY AREVALO GONZALEZ"
  },
  {
    "code": "13108",
    "name": "NAURA"
  },
  {
    "code": "16737",
    "name": "BAZAR JIXIANG II"
  },
  {
    "code": "16850",
    "name": "LA CASA DEL EMBUTIDO"
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
    "code": "5233",
    "name": "LEON TIPICO"
  },
  {
    "code": "9342",
    "name": "E.S. PUENTE CASTRO (Nº 00000)"
  },
  {
    "code": "9938",
    "name": "E.S. LA SERNA DE LEON (Nº 11865)"
  },
  {
    "code": "11845",
    "name": "LA CASA DE LA BISA"
  },
  {
    "code": "17059",
    "name": "EL ALFAR"
  },
  {
    "code": "15345",
    "name": "HOTEL CIELOASTUR"
  },
  {
    "code": "6596",
    "name": "ASTURARCO 2012, SL"
  },
  {
    "code": "9451",
    "name": "E.S. SILVOTA (Nº 00000)"
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
    "code": "17014",
    "name": "ASTUR"
  },
  {
    "code": "9443",
    "name": "E.S. LLARANES (Nº 00000)"
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
    "code": "12435",
    "name": "FLORES AZALEA"
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
    "code": "6544",
    "name": "SUPER EURO HON FU"
  },
  {
    "code": "6545",
    "name": "CHANG LIAN YE"
  },
  {
    "code": "9385",
    "name": "E.S. LUANCO (Nº 11043)"
  },
  {
    "code": "928",
    "name": "BAHIA 0"
  },
  {
    "code": "104066",
    "name": "AIGOR ROMO RODRIGUEZ"
  },
  {
    "code": "14926",
    "name": "BAHIA 19"
  },
  {
    "code": "18472",
    "name": "AIGOR ROMO RODRIGUEZ"
  },
  {
    "code": "10566",
    "name": "E.S. VALDALIGA M.D. (Nº 11383)"
  },
  {
    "code": "10582",
    "name": "E.S. CALLE CASTILLA (Nº 11412)"
  },
  {
    "code": "10607",
    "name": "E.S. LAREDO (Nº 10997)"
  },
  {
    "code": "10627",
    "name": "E.S. LOS OCHOS (Nº 00000)"
  },
  {
    "code": "10688",
    "name": "E.S. CARTES (Nº 11534)"
  },
  {
    "code": "10690",
    "name": "E.S. MONTICO I (Nº 11259)"
  },
  {
    "code": "10724",
    "name": "E.S. VALDALIGA M.I. (Nº 11384)"
  },
  {
    "code": "10872",
    "name": "E.S. MATAPORQUERA (Nº 11909)"
  },
  {
    "code": "11029",
    "name": "E.S. LA ALBERICIA (Nº 10647)"
  },
  {
    "code": "13332",
    "name": "CORREOS OVIEDO"
  },
  {
    "code": "14058",
    "name": "E.S. ESTRAMBASAGUAS (Nº 11081)"
  },
  {
    "code": "14060",
    "name": "E.S. LA CERRADA (Nº 11474)"
  },
  {
    "code": "17331",
    "name": "E.S. COLUNGA (Nº11980)"
  },
  {
    "code": "8612",
    "name": "E.S. VILLAVIDEL M.I. (Nº 00000)"
  },
  {
    "code": "8623",
    "name": "E.S. CALDAS DE LUNA (Nº 10610)"
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
    "code": "8645",
    "name": "E.S. VILLAVIDEL M.D. (Nº 11428)"
  },
  {
    "code": "9316",
    "name": "E.S. ARMUNIA (Nº 00000)"
  },
  {
    "code": "9317",
    "name": "E.S. ASTORGA (Nº 11020 )"
  },
  {
    "code": "9336",
    "name": "E.S. CISTIERNA (Nº 00000)"
  },
  {
    "code": "9337",
    "name": "E.S. VILLAOBISPO (Nº 00000)"
  },
  {
    "code": "9340",
    "name": "E.S. SAN JUAN DE DIOS (Nº 00000)"
  },
  {
    "code": "9342",
    "name": "E.S. PUENTE CASTRO (Nº 00000)"
  },
  {
    "code": "9383",
    "name": "E.S. LUGONES (Nº 11200)"
  },
  {
    "code": "9384",
    "name": "E.S. PUMARIN (Nº 11609)"
  },
  {
    "code": "9385",
    "name": "E.S. LUANCO (Nº 11043)"
  },
  {
    "code": "9386",
    "name": "E.S. LA TENDERINA (Nº 10665)"
  },
  {
    "code": "9387",
    "name": "E.S. ROBLEDO II (Nº 11424)"
  },
  {
    "code": "9443",
    "name": "E.S. LLARANES (Nº 00000)"
  },
  {
    "code": "9444",
    "name": "E.S. LOS CAMPONES (Nº 11597)"
  },
  {
    "code": "9445",
    "name": "E.S. MONTICO II (Nº 11258)"
  },
  {
    "code": "9446",
    "name": "E.S. CERDEÑO (Nº 11701)"
  },
  {
    "code": "9447",
    "name": "E.S. ROBLEDO I (Nº 11423)"
  },
  {
    "code": "9448",
    "name": "E.S. NAVIA (Nº 10299)"
  },
  {
    "code": "9449",
    "name": "E.S. LOS CAMPOS (Nº 00000)"
  },
  {
    "code": "9450",
    "name": "E.S. GRANDA-GIJON (Nº 00000)"
  },
  {
    "code": "9451",
    "name": "E.S. SILVOTA (Nº 00000)"
  },
  {
    "code": "9452",
    "name": "E.S. MIERES (Nº 11687)"
  },
  {
    "code": "9531",
    "name": "E.S. PARQUEASTUR (Nº 11100)"
  },
  {
    "code": "9576",
    "name": "E.S. CABORANA (Nº 11692)"
  },
  {
    "code": "9647",
    "name": "E.S. EL ENTREGO (Nº 10561)"
  },
  {
    "code": "9652",
    "name": "E.S. AVDA. ASTURIAS (Nº 00000)"
  },
  {
    "code": "9667",
    "name": "E.S. PONTON DE VAQUEROS (Nº 00000)"
  },
  {
    "code": "9672",
    "name": "E.S. MONDOÑEDO (Nº 11411)"
  },
  {
    "code": "9933",
    "name": "E.S. ARMUNIA M.I. (Nº 00000)"
  },
  {
    "code": "9934",
    "name": "E.S. HERRERA (Nº 00000)"
  },
  {
    "code": "9938",
    "name": "E.S. LA SERNA DE LEON (Nº 11865)"
  },
  {
    "code": "11311",
    "name": "COME & FLY. LA TIENDA DEL AEROPUERTO SEVE BALLESTE"
  },
  {
    "code": "14060",
    "name": "E.S. LA CERRADA (Nº 11474)"
  },
  {
    "code": "16054",
    "name": "OCHI Y MARIA"
  },
  {
    "code": "16986",
    "name": "LABERINTO"
  },
  {
    "code": "9452",
    "name": "E.S. MIERES (Nº 11687)"
  },
  {
    "code": "9719",
    "name": "GOMILOLAS"
  },
  {
    "code": "9672",
    "name": "E.S. MONDOÑEDO (Nº 11411)"
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
    "code": "9448",
    "name": "E.S. NAVIA (Nº 10299)"
  },
  {
    "code": "18796",
    "name": "ESPIRAL MODA Y REGALOS"
  },
  {
    "code": "7436",
    "name": "BAZAR XIN DA"
  },
  {
    "code": "11583",
    "name": "GASOLINERA NOVELLANA"
  },
  {
    "code": "18365",
    "name": "COSINAS DE ASTURIAS"
  },
  {
    "code": "6872",
    "name": "EL TEXIEU"
  },
  {
    "code": "8612",
    "name": "E.S. VILLAVIDEL M.I. (Nº 00000)"
  },
  {
    "code": "8645",
    "name": "E.S. VILLAVIDEL M.D. (Nº 11428)"
  },
  {
    "code": "11719",
    "name": "ALFREDO ALVAREZ"
  },
  {
    "code": "11806",
    "name": "CARAMELO"
  },
  {
    "code": "12995",
    "name": "ESTANCO EL GALEON"
  },
  {
    "code": "13024",
    "name": "LA BOMBA RECORDS"
  },
  {
    "code": "13332",
    "name": "CORREOS OVIEDO"
  },
  {
    "code": "13443",
    "name": "KIOSCO COLIBRI"
  },
  {
    "code": "14154",
    "name": "ULTREIA Y SUSEIA UNIPESSOAL LDA"
  },
  {
    "code": "15075",
    "name": "PAIS DOBLE"
  },
  {
    "code": "15311",
    "name": "MANGOR"
  },
  {
    "code": "15953",
    "name": "EL TREN DE VAPOR"
  },
  {
    "code": "15972",
    "name": "SERENDIPIA"
  },
  {
    "code": "17637",
    "name": "LIBRERIA DIOCESANA"
  },
  {
    "code": "18407",
    "name": "SUCUBUS"
  },
  {
    "code": "18430",
    "name": "EXPENDEDURIA N. 55"
  },
  {
    "code": "18431",
    "name": "TRIBU"
  },
  {
    "code": "545",
    "name": "ASTURIAS ENCANTADA OVIEDO"
  },
  {
    "code": "18729",
    "name": "TODO ASTURIAS"
  },
  {
    "code": "18823",
    "name": "LIBRERIA ANTARES"
  },
  {
    "code": "19019",
    "name": "CATEDRAL DE OVIEDO"
  },
  {
    "code": "19364",
    "name": "CRESVI, SA"
  },
  {
    "code": "19488",
    "name": "TOLON TOLON"
  },
  {
    "code": "210",
    "name": "CLIENTE ERROR LOLO ASTURIAS"
  },
  {
    "code": "3615",
    "name": "ALCORDANCES DE ASTURIES"
  },
  {
    "code": "742",
    "name": "TRISQUEL"
  },
  {
    "code": "751",
    "name": "CRIVENCAR, S.L."
  },
  {
    "code": "9386",
    "name": "E.S. LA TENDERINA (Nº 10665)"
  },
  {
    "code": "9446",
    "name": "E.S. CERDEÑO (Nº 11701)"
  },
  {
    "code": "9667",
    "name": "E.S. PONTON DE VAQUEROS (Nº 00000)"
  },
  {
    "code": "17324",
    "name": "INFANTE"
  },
  {
    "code": "11462",
    "name": "REGALOS SANCHO"
  },
  {
    "code": "9652",
    "name": "E.S. AVDA. ASTURIAS (Nº 00000)"
  },
  {
    "code": "658",
    "name": "COVADONGA"
  },
  {
    "code": "13794",
    "name": "PREHOTI COOPERATIVA VALENCIANA"
  },
  {
    "code": "9531",
    "name": "E.S. PARQUEASTUR (Nº 11100)"
  },
  {
    "code": "14243",
    "name": "ANTONIO DOS SANTOS"
  },
  {
    "code": "14244",
    "name": "CARLOS ALBERTO CORREIA"
  },
  {
    "code": "14245",
    "name": "ARMANDO FERNANDO CORREIA"
  },
  {
    "code": "14246",
    "name": "DINIS FERNANDO FERNANDEZ"
  },
  {
    "code": "104070",
    "name": "BAZAR CHINA"
  },
  {
    "code": "16022",
    "name": "HOME"
  },
  {
    "code": "18653",
    "name": "BAZAR CHINA"
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
    "code": "10290",
    "name": "CARMEN PEREZ VILAN"
  },
  {
    "code": "11853",
    "name": "CASA REVUELTA"
  },
  {
    "code": "14342",
    "name": "LA TIENDA DE NURIA"
  },
  {
    "code": "15237",
    "name": "BUSTAMANTE"
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
    "code": "2468",
    "name": "CANELA"
  },
  {
    "code": "4232",
    "name": "FERRETERIA CETO"
  },
  {
    "code": "663",
    "name": "CASA WENCES"
  },
  {
    "code": "9658",
    "name": "VENERANDA DE COS DOBARGANES"
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
    "code": "6949",
    "name": "CHAROL"
  },
  {
    "code": "16867",
    "name": "COMIBERSA"
  },
  {
    "code": "9637",
    "name": "PRENDES OIL, SL"
  },
  {
    "code": "2600",
    "name": "CASA CAMILO"
  },
  {
    "code": "1160",
    "name": "CASA MORÁN"
  },
  {
    "code": "11835",
    "name": "BAR-TIENDA LA VENTA LOS PROBES"
  },
  {
    "code": "18746",
    "name": "LA TIENDA VIOLETA"
  },
  {
    "code": "8188",
    "name": "BAZAR EL REY"
  },
  {
    "code": "6623",
    "name": "LLAGAR CASTAÑON"
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
    "code": "8317",
    "name": "JOSE MANUEL GUTIERREZ"
  },
  {
    "code": "13794",
    "name": "PREHOTI COOPERATIVA VALENCIANA"
  },
  {
    "code": "15801",
    "name": "DANIEL ROSELL NOGALES"
  },
  {
    "code": "16466",
    "name": "PICAROLAS"
  },
  {
    "code": "17995",
    "name": "GONZALO SANTIAGO RODRIGUEZ VAQUERIZO"
  },
  {
    "code": "15296",
    "name": "TIENDA L´HORRU"
  },
  {
    "code": "19157",
    "name": "BAZAR ALARA REGALOS Y SOUVENIR"
  },
  {
    "code": "526",
    "name": "ASTURIAS ENCANTADA RIBADESELLA"
  },
  {
    "code": "5470",
    "name": "GECKO"
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
    "code": "9340",
    "name": "E.S. SAN JUAN DE DIOS (Nº 00000)"
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
    "code": "16155",
    "name": "JORGE MARTINEZ OBRADORS"
  },
  {
    "code": "16690",
    "name": "HELADERIA LA MURALLA"
  },
  {
    "code": "2210",
    "name": "REGALOS EL CASTILLO"
  },
  {
    "code": "9690",
    "name": "ELECTRONICA LLERA"
  },
  {
    "code": "9449",
    "name": "E.S. LOS CAMPOS (Nº 00000)"
  },
  {
    "code": "18098",
    "name": "CASERIO VIDUEDO"
  },
  {
    "code": "14058",
    "name": "E.S. ESTRAMBASAGUAS (Nº 11081)"
  },
  {
    "code": "9387",
    "name": "E.S. ROBLEDO II (Nº 11424)"
  },
  {
    "code": "9447",
    "name": "E.S. ROBLEDO I (Nº 11423)"
  },
  {
    "code": "10582",
    "name": "E.S. CALLE CASTILLA (Nº 11412)"
  },
  {
    "code": "11029",
    "name": "E.S. LA ALBERICIA (Nº 10647)"
  },
  {
    "code": "13349",
    "name": "REGALOS MICHEL"
  },
  {
    "code": "13642",
    "name": "DONIS"
  },
  {
    "code": "15748",
    "name": "BAZAR FAMILIA"
  },
  {
    "code": "16139",
    "name": "ESTANCO MACHICHACO"
  },
  {
    "code": "16806",
    "name": "MASTER CIEN"
  },
  {
    "code": "17264",
    "name": "KIOSCO CHARO"
  },
  {
    "code": "17600",
    "name": "GODOFREDO"
  },
  {
    "code": "1790",
    "name": "BURBUJAS"
  },
  {
    "code": "19378",
    "name": "BAZAR FAMILIA"
  },
  {
    "code": "2299",
    "name": "PLASTICOS PLEX"
  },
  {
    "code": "4829",
    "name": "HELADOS QUIYU"
  },
  {
    "code": "6778",
    "name": "EUROSHOP"
  },
  {
    "code": "8664",
    "name": "COPPEN"
  },
  {
    "code": "9758",
    "name": "BAZAR EL VECINO"
  },
  {
    "code": "10546",
    "name": "LUZMARI BIELVA PUENTE"
  },
  {
    "code": "1096",
    "name": "BAZAR COLEGIATA"
  },
  {
    "code": "11178",
    "name": "DA VINCI"
  },
  {
    "code": "11536",
    "name": "BAZAR COLEGIATA"
  },
  {
    "code": "13600",
    "name": "EDUARDO ANSORENA ECHEVARRIA"
  },
  {
    "code": "13893",
    "name": "MUSEO BARQUILLERO, SC"
  },
  {
    "code": "15735",
    "name": "BAZAR COBO"
  },
  {
    "code": "16593",
    "name": "MERCADOS TEMATICOS ABALON"
  },
  {
    "code": "18262",
    "name": "ARTESANIA Y AROMAS ANSORENA"
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
    "code": "2167",
    "name": "EL RIO"
  },
  {
    "code": "9624",
    "name": "ARTESANIAS ANSORENA"
  },
  {
    "code": "11623",
    "name": "MOOREA SURF"
  },
  {
    "code": "12318",
    "name": "BAZAR EUROMAR"
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
    "code": "12057",
    "name": "TUTTI FRUTTI CHARO"
  },
  {
    "code": "8188",
    "name": "BAZAR EL REY"
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
    "code": "17817",
    "name": "A XANUCA"
  },
  {
    "code": "2117",
    "name": "FERRETERÍA LEGAZPI"
  },
  {
    "code": "6036",
    "name": "EVA M. RODRIGUEZ RODIL"
  },
  {
    "code": "632",
    "name": "CASA VICENTE, C.B."
  },
  {
    "code": "7840",
    "name": "ARTESANIA  TELAR"
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
    "code": "10627",
    "name": "E.S. LOS OCHOS (Nº 00000)"
  },
  {
    "code": "17011",
    "name": "REGALIZ"
  },
  {
    "code": "837",
    "name": "CARRUSELAMBRA"
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
    "code": "9337",
    "name": "E.S. VILLAOBISPO (Nº 00000)"
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
  },
  {
    "code": "1",
    "name": "GRAN CLIENTE ASTURIAS"
  },
  {
    "code": "101",
    "name": "OFERTA DESCUENTO DEL IVA"
  }
];
export default clients;