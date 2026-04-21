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
  }
];