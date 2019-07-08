export class Constant {
    // tslint:disable-next-line:max-line-length
    public static EMAIL_REG_EX = /(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|('.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    public static CRITICAL_HEALTH = 500;
    public static ATTENTION_HEALTH = 300;
    public static OK_HEALTH = 200;
    public static deviceData = [
        {
            'id': 'a7504eb0-04ffb381-5e363c9b',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': 'd9cd02a2',
            'gatewayId': '00000000-04714477',
            'oem': 'SOLiD',
            'model': 'R6',
            'version': '6.3',
            'mode': 'DUPLEX',
            'name': 'TIC - Park Place Irvine SOLiD Rel 6 DMS1200',
            'description': 'The Irvine Company - Park Place Aparments SOLiD Rel6 DMS1200',
            'health': 300,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '28.4170294'
                ],
                'long': [
                    '-81.4289348'
                ],
                'name': ['Noah Place'],
                'owner': ['Building Systems Inc'],
                'address': ['385 Noah Place Suite 878'],
                'tel': ['875-255-7945'],
                'email': ['info@form.com'],
                'photo': ['assets/images/pexels-photo-374023.jpeg'],
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-0a91d17b',
                'ip': '192.168.1.3'
            }
        },
        {
            'id': 'a7504eb0-0620645c-78eadf4d',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '44726db3',
            'gatewayId': 'a7504eb0-0620645c',
            'oem': 'CMA',
            'model': '1k',
            'version': '5.3',
            'mode': 'DUPLEX',
            'name': 'Darden - Verizon/Sprint DAS',
            'description': 'Darden Restaurants - Verizon/Sprint CMA2k DAS',
            'health': 300,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '28.4170294'
                ],
                'long': [
                    '-81.4289348'
                ],
                'name' : ['Noah Place' ],
                'owner' : ['Building Systems Inc.'] ,
                'address' : ['385 Noah Place Suite 878'],
                'tel' : ['875-255-7945'],
                'email' : ['info@form.com'],
                'photo' : ['assets/images/pexels-photo-374023.jpeg'],
            },
            'properties': {
                'port': 80,
                'vaultId': 'a7504eb0-06497f6e',
                'ip': '192.168.63.6'
            }
        },
        {
            'id': 'a7504eb0-0620645c-879b89a5',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '44726db3',
            'gatewayId': 'a7504eb0-0620645c',
            'oem': 'CMA',
            'model': '1k',
            'version': '5.3',
            'mode': 'DUPLEX',
            'name': 'Darden - AT&T DAS',
            'description': 'Darden Restaurants - AT&T CMA2k DAS',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '28.4170294'
                ],
                'long': [
                    '-81.4289348'
                ]
            },
            'properties': {
                'port': 80,
                'vaultId': 'a7504eb0-263f8f8b',
                'ip': '192.168.63.8'
            }
        },
        {
            'id': 'a7504eb0-06876060-009f7761',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '0ad20ccc',
            'gatewayId': 'a7504eb0-06876060',
            'oem': 'Synaccess',
            'model': 'NP-0808DT',
            'version': '5.0',
            'mode': 'DUPLEX',
            'name': 'OIA - netBooter',
            'description': 'Orlando International Airport - netBooter',
            'health': 500,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '28.4306305'
                ],
                'long': [
                    '-81.3142908'
                ],
                'name' : ['Noah Place' ],
                'owner' : ['Building Systems Inc.'] ,
                'address' : ['385 Noah Place Suite 878'],
                'tel' : ['875-255-7945'],
                'email' : ['info@form.com'],
                'photo' : ['assets/images/pexels-photo-374023.jpeg'],
            },
            'properties': {
                'https': false,
                'port': 50514,
                'vaultId': 'a7504eb0-33d3076f',
                'ip': '166.155.19.92'
            }
        },
        {
            'id': 'a7504eb0-06876060-0b064f62',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '6bc28cf0',
            'gatewayId': 'a7504eb0-06876060',
            'oem': 'CMA',
            'model': '1k',
            'version': '7.4',
            'mode': 'DUPLEX',
            'name': 'OIA - Verizon DAS',
            'description': 'Orlando International Airport - Verizon CMA2k DAS',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '28.4306305'
                ],
                'long': [
                    '-81.3142908'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-f1ab89a8',
                'ip': '172.28.2.251'
            }
        },
        {
            'id': 'a7504eb0-06876060-171b93fc',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '6bc28cf0',
            'gatewayId': 'a7504eb0-06876060',
            'oem': 'CMA',
            'model': '1k',
            'version': '7.4',
            'mode': 'DUPLEX',
            'name': 'OIA - AT&T DAS',
            'description': 'Orlando International Airport - AT&T CMA2k DAS',
            'health': 300,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '28.4306305'
                ],
                'long': [
                    '-81.3142908'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-5b1d2c02',
                'ip': '172.28.2.253'
            }
        },
        {
            'id': 'a7504eb0-06876060-d6542fc3',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '6bc28cf0',
            'gatewayId': 'a7504eb0-06876060',
            'oem': 'CMA',
            'model': '1k',
            'version': '7.4',
            'mode': 'DUPLEX',
            'name': 'OIA - T-Mobile DAS',
            'description': 'Orlando International Airport - T-Mobile CMA2k DAS',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '28.4306305'
                ],
                'long': [
                    '-81.3142908'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-beacf5e5',
                'ip': '172.28.2.250'
            }
        },
        {
            'id': 'a7504eb0-06876060-f6357493',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '6bc28cf0',
            'gatewayId': 'a7504eb0-06876060',
            'oem': 'CMA',
            'model': '1k',
            'version': '7.4',
            'mode': 'DUPLEX',
            'name': 'OIA - Sprint DAS',
            'description': 'Orlando International Airport - Sprint CMA2k DAS',
            'health': 300,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '28.4306305'
                ],
                'long': [
                    '-81.3142908'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-a9e00c56',
                'ip': '172.28.2.248'
            }
        },
        {
            'id': 'a7504eb0-210b0ea6-19a478d1',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '0ad20ccc',
            'gatewayId': 'a7504eb0-210b0ea6',
            'oem': 'Synaccess',
            'model': 'NP-0808DT',
            'version': '5.0',
            'mode': 'DUPLEX',
            'name': 'South Point Casino netBooter',
            'description': 'South Point Casino netBooter',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '36.0112301'
                ],
                'long': [
                    '-115.177429'
                ],
                'name' : ['Noah Place' ],
                'owner' : ['Building Systems Inc.'] ,
                'address' : ['385 Noah Place Suite 878'],
                'tel' : ['875-255-7945'],
                'email' : ['info@form.com'],
                'photo' : ['assets/images/pexels-photo-374023.jpeg'],
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-66ca17f5',
                'ip': '192.168.1.2'
            }
        },
        {
            'id': 'a7504eb0-210b0ea6-215d8dfc',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '92d2e2de',
            'gatewayId': 'a7504eb0-210b0ea6',
            'oem': 'JMA',
            'model': 'Teko',
            'version': '3.2',
            'mode': 'DUPLEX',
            'name': 'South Point Casino - T-Mobile OMT',
            'description': 'T-Mobile OMT - JMA Teko DAS',
            'health': 500,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '36.0112301'
                ],
                'long': [
                    '-115.177429'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-63735e4c',
                'ip': '192.168.1.13'
            }
        },
        {
            'id': 'a7504eb0-210b0ea6-725b682d',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '92d2e2de',
            'gatewayId': 'a7504eb0-210b0ea6',
            'oem': 'JMA',
            'model': 'Teko',
            'version': '3.2',
            'mode': 'DUPLEX',
            'name': 'South Point Casino - Master OMT',
            'description': 'Main OMT - JMA Teko DAS',
            'health': 200,
            'defaultHealth': 200,
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-63735e4c',
                'ip': '192.168.1.10'
            }
        },
        {
            'id': 'a7504eb0-210b0ea6-ac7aa16b',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '92d2e2de',
            'gatewayId': 'a7504eb0-210b0ea6',
            'oem': 'JMA',
            'model': 'Teko',
            'version': '3.2',
            'mode': 'DUPLEX',
            'name': 'South Point Casino - AT&T OMT',
            'description': 'AT&T OMT - JMA Teko DAS',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '36.0112301'
                ],
                'long': [
                    '-115.177429'
                ],
                'name' : ['Noah Place' ],
                'owner' : ['Building Systems Inc.'] ,
                'address' : ['385 Noah Place Suite 878'],
                'tel' : ['875-255-7945'],
                'email' : ['info@form.com'],
                'photo' : ['assets/images/pexels-photo-374023.jpeg'],
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-63735e4c',
                'ip': '192.168.1.14'
            }
        },
        {
            'id': 'a7504eb0-210b0ea6-c8f4401c',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '92d2e2de',
            'gatewayId': 'a7504eb0-210b0ea6',
            'oem': 'JMA',
            'model': 'Teko',
            'version': '3.2',
            'mode': 'DUPLEX',
            'name': 'South Point Casino - Sprint OMT',
            'description': 'Sprint OMT - JMA Teko DAS',
            'health': 500,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '36.0112301'
                ],
                'long': [
                    '-115.177429'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-63735e4c',
                'ip': '192.168.1.11'
            }
        },
        {
            'id': 'a7504eb0-210b0ea6-eb46b1d7',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '92d2e2de',
            'gatewayId': 'a7504eb0-210b0ea6',
            'oem': 'JMA',
            'model': 'Teko',
            'version': '3.2',
            'mode': 'DUPLEX',
            'name': 'South Point Casino - Verizon OMT',
            'description': 'Verizon OMT - JMA Teko DAS',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '36.0112301'
                ],
                'long': [
                    '-115.177429'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-63735e4c',
                'ip': '192.168.1.12'
            }
        },
        {
            'id': 'a7504eb0-28ad8ab3-ddede603',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '95d00a2b',
            'gatewayId': 'a7504eb0-28ad8ab3',
            'oem': 'ADRF',
            'model': 'ADXV',
            'version': '3.0',
            'mode': 'DUPLEX',
            'name': 'NREL - Colorado',
            'description': 'National Renewable Energy Laboratory ADRF ADXV DAS',
            'health': 500,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '39.7162533'
                ],
                'long': [
                    '-105.1698694'
                ],
                'name' : ['Noah Place' ],
                'owner' : ['Building Systems Inc.'] ,
                'address' : ['385 Noah Place Suite 878'],
                'tel' : ['875-255-7945'],
                'email' : ['info@form.com'],
                'photo' : ['assets/images/pexels-photo-374023.jpeg'],
            },
            'properties': {
                'https': true,
                'port': 443,
                'vaultId': 'a7504eb0-f346bbee',
                'ip': '10.10.54.10'
            }
        },
        {
            'id': 'a7504eb0-2a6f8d08-287f7cbe',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': 'bebedf99',
            'gatewayId': 'a7504eb0-2a6f8d08',
            'oem': 'JMA',
            'model': 'Teko',
            'version': '4.0',
            'mode': 'DUPLEX',
            'name': 'SBA Macys Herald Square',
            'description': 'Macys Herald Square TEKO DAS (SBA )',
            'health': 200,
            'defaultHealth': 200,
            'properties': {
                'https': true,
                'port': 50500,
                'vaultId': 'a7504eb0-9ada9da9',
                'ip': '63.40.35.94'
            }
        },
        {
            'id': 'a7504eb0-2f96eb0e-dda3ad43',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': 'dd640dea',
            'gatewayId': 'a7504eb0-2f96eb0e',
            'oem': 'CommScope',
            'model': 'ION-B',
            'version': '5.30',
            'mode': 'DUPLEX',
            'name': 'Unity Point Meriter',
            'description': 'Unity Point Hospital',
            'health': 500,
            'defaultHealth': 200,
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-79c1705e',
                'ip': '172.17.140.11'
            }
        },
        {
            'id': 'a7504eb0-3166bf48-c46ee632',
            'phase': 'PRODUCTION',
            'connection': 'DISCONNECTED',
            'typeId': '9ad739b9',
            'gatewayId': 'a7504eb0-3166bf48',
            'oem': 'SOLiD',
            'model': 'R5',
            'version': '3.4',
            'mode': 'DUPLEX',
            'name': 'OSU - MC Main',
            'description': 'Medical Center Main SOLiD Rel5 DMS1200',
            'health': 300,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '39.9953222'
                ],
                'long': [
                    '-83.0199385'
                ],
                'name' : ['Noah Place' ],
                'address' : ['385 Noah Place Suite 878'],
                'tel' : ['875-255-7945'],
                'email' : ['info@form.com'],
                'photo' : ['assets/images/pexels-photo-374023.jpeg'],
            },
            'properties': {
                'port': 80,
                'vaultId': 'a7504eb0-ddcbe6ba',
                'ip': '192.168.1.101'
            }
        },
        {
            'id': 'a7504eb0-38c105d0-23cb920b',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '49727592',
            'gatewayId': 'a7504eb0-38c105d0',
            'oem': 'CMA',
            'model': '1k',
            'version': '5.4',
            'mode': 'DUPLEX',
            'name': 'UF - Shands Public Safety 1k/2k DAS',
            'description': 'UFS - Shands Public Safety 1k/2k DAS',
            'health': 200,
            'defaultHealth': 200,
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-2cc4e483',
                'ip': '192.168.1.101'
            }
        },
        {
            'id': 'a7504eb0-3bbe703f-b5449152',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '8773b4c0',
            'gatewayId': 'a7504eb0-3bbe703f',
            'oem': 'CommScope',
            'model': 'ION-U',
            'version': '1.95',
            'mode': 'DUPLEX',
            'name': 'Cheytec - Marriott 701 7th Ave DAS',
            'description': 'Marriott 701 7th Ave - CommScope ION-U DAS',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '40.7592741'
                ],
                'long': [
                    '-73.9863327'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-c8661cf1',
                'ip': '192.168.1.3'
            }
        },
        {
            'id': 'a7504eb0-46e00071-6bb9f28f',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '49727592',
            'gatewayId': 'a7504eb0-46e00071',
            'oem': 'CMA',
            'model': '1k',
            'version': '5.4',
            'mode': 'DUPLEX',
            'name': 'Adventist Wesley Chapel SC450 DAS',
            'description': 'Adventist Wesley Chapel SC450 DAS',
            'health': 500,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '28.1956032'
                ],
                'long': [
                    '-82.3516062'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-905c59d1',
                'ip': '192.168.1.3'
            }
        },
        {
            'id': 'a7504eb0-49400e62-db10fe76',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': 'd9cd02a2',
            'gatewayId': 'a7504eb0-49400e62',
            'oem': 'SOLiD',
            'model': 'R6',
            'version': '6.3',
            'mode': 'DUPLEX',
            'name': 'OSU - Raney House',
            'description': 'Raney House SOLiD Rel6 DMS1200',
            'health': 500,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '40.005276'
                ],
                'long': [
                    '-83.0122479'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-6a29f3bd',
                'ip': '192.168.1.3'
            }
        },
        {
            'id': 'a7504eb0-4cfa21ca-4c48e40a',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '44726db3',
            'gatewayId': 'a7504eb0-4cfa21ca',
            'oem': 'CMA',
            'model': '1k',
            'version': '5.3',
            'mode': 'DUPLEX',
            'name': 'Mercedes Benz Superdome CMA 1k/2k DAS',
            'description': 'Mercedes Benz Superdome CMA 1k/2k DAS',
            'health': 400,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '29.9516233'
                ],
                'long': [
                    '-90.0844579'
                ]
            },
            'properties': {
                'port': 80,
                'vaultId': 'a7504eb0-b878a17a',
                'ip': '192.168.200.2'
            }
        },
        {
            'id': 'a7504eb0-520fb8b4-d3b68a64',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': 'd4b6bf4a',
            'gatewayId': 'a7504eb0-520fb8b4',
            'oem': 'SOLiD',
            'model': 'R6',
            'version': '7.2',
            'mode': 'DUPLEX',
            'name': 'Valley Childrens Hospital',
            'description': 'SOLiD REL6 DMS1200 v7.2',
            'health': 300,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '36.8839159'
                ],
                'long': [
                    '-119.8007799'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-58099555',
                'ip': '192.168.1.3'
            }
        },
        {
            'id': 'a7504eb0-55b42f27-23a26a6e',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '12c3bc0b',
            'gatewayId': 'a7504eb0-55b42f27',
            'oem': 'CommScope',
            'model': 'FlexWave Prism',
            'version': '8.1',
            'mode': 'DUPLEX',
            'name': 'UNC ODAS Host 3_1',
            'description': 'Host3_1 Greenlaw',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '35.910364'
                ],
                'long': [
                    '-79.0514257'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-6563dfaa',
                'ip': '172.28.71.31'
            }
        },
        {
            'id': 'a7504eb0-55b42f27-2f3f0328',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '12c3bc0b',
            'gatewayId': 'a7504eb0-55b42f27',
            'oem': 'CommScope',
            'model': 'FlexWave Prism',
            'version': '8.1',
            'mode': 'DUPLEX',
            'name': 'UNC ODAS Host 5_1',
            'description': 'Host5_1 Greenlaw',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '35.910364'
                ],
                'long': [
                    '-79.0514257'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-d1c29d83',
                'ip': '172.28.71.51'
            }
        },
        {
            'id': 'a7504eb0-55b42f27-43d6c5a6',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '12c3bc0b',
            'gatewayId': 'a7504eb0-55b42f27',
            'oem': 'CommScope',
            'model': 'FlexWave Prism',
            'version': '8.1',
            'mode': 'DUPLEX',
            'name': 'UNC ODAS Host 7_2',
            'description': 'Host7_2 Greenlaw',
            'health': 300,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '35.910364'
                ],
                'long': [
                    '-79.0514257'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-9899382e',
                'ip': '172.28.71.72'
            }
        },
        {
            'id': 'a7504eb0-55b42f27-4cd1d40c',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '12c3bc0b',
            'gatewayId': 'a7504eb0-55b42f27',
            'oem': 'CommScope',
            'model': 'FlexWave Prism',
            'version': '8.1',
            'mode': 'DUPLEX',
            'name': 'UNC ODAS Host 2_2',
            'description': 'Host2_2 Kenan Stadium, Ehringhaus, Dean Dome',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '35.9043529'
                ],
                'long': [
                    '-79.0451019'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-fcc8f7e2',
                'ip': '172.28.71.22'
            }
        },
        {
            'id': 'a7504eb0-55b42f27-4d29db15',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '12c3bc0b',
            'gatewayId': 'a7504eb0-55b42f27',
            'oem': 'CommScope',
            'model': 'FlexWave Prism',
            'version': '8.1',
            'mode': 'DUPLEX',
            'name': 'UNC ODAS Host 2_1',
            'description': 'Host 2_1 Morehead, Cobb Parking, Carmichael RH, AOB',
            'health': 300,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '35.9082038'
                ],
                'long': [
                    '-79.0480317'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-aad43f06',
                'ip': '172.28.71.21'
            }
        },
        {
            'id': 'a7504eb0-55b42f27-5a019a23',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '12c3bc0b',
            'gatewayId': 'a7504eb0-55b42f27',
            'oem': 'CommScope',
            'model': 'FlexWave Prism',
            'version': '8.1',
            'mode': 'DUPLEX',
            'name': 'UNC ODAS Host 3_4',
            'description': 'Host3_4 Hinton James',
            'health': 500,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '35.9023847'
                ],
                'long': [
                    '-79.0454735'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-0f786c01',
                'ip': '172.28.71.34'
            }
        },
        {
            'id': 'a7504eb0-55b42f27-5ac9fe3a',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '338134d1',
            'gatewayId': 'a7504eb0-55b42f27',
            'oem': 'CommScope',
            'model': 'IONM',
            'version': '5.30',
            'mode': 'DUPLEX',
            'name': 'UNC iDAS Kenan Stadium - South sidelines',
            'description': 'TSUN(#4) Controller - South Sidelines',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '35.9069352'
                ],
                'long': [
                    '-79.049998'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-97ee9172',
                'ip': '172.28.71.124'
            }
        },
        {
            'id': 'a7504eb0-55b42f27-605c5844',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '12c3bc0b',
            'gatewayId': 'a7504eb0-55b42f27',
            'oem': 'CommScope',
            'model': 'FlexWave Prism',
            'version': '8.1',
            'mode': 'DUPLEX',
            'name': 'UNC ODAS Host 1_3',
            'description': 'Host1_3 Business School Parking, Dean Dome A, Dean Dome B',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '35.9008829'
                ],
                'long': [
                    '-79.0486856'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-ee0c4ac5',
                'ip': '172.28.71.13'
            }
        },
        {
            'id': 'a7504eb0-55b42f27-71749872',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '12c3bc0b',
            'gatewayId': 'a7504eb0-55b42f27',
            'oem': 'CommScope',
            'model': 'FlexWave Prism',
            'version': '8.1',
            'mode': 'DUPLEX',
            'name': 'UNC ODAS Host 3_2',
            'description': 'Host3_2 Greenlaw',
            'health': 500,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '35.910364'
                ],
                'long': [
                    '-79.0514257'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-dd377487',
                'ip': '172.28.71.32'
            }
        },
        {
            'id': 'a7504eb0-55b42f27-759f09fc',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '12c3bc0b',
            'gatewayId': 'a7504eb0-55b42f27',
            'oem': 'CommScope',
            'model': 'FlexWave Prism',
            'version': '8.1',
            'mode': 'DUPLEX',
            'name': 'UNC ODAS Host 1_1',
            'description': 'Host1_1 Cobb Parking, Morehead, Kenan Music',
            'health': 300,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '35.9117503'
                ],
                'long': [
                    '-79.047803'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-ca5b2a04',
                'ip': '172.28.71.11'
            }
        },
        {
            'id': 'a7504eb0-55b42f27-75ea3f72',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '12c3bc0b',
            'gatewayId': 'a7504eb0-55b42f27',
            'oem': 'CommScope',
            'model': 'FlexWave Prism',
            'version': '8.1',
            'mode': 'DUPLEX',
            'name': 'UNC ODAS Host 2_4',
            'description': 'Host2_4 Kenan Music, FedEx Global, Cardinal Parking, Kenan Stadium',
            'health': 300,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '35.9080442'
                ],
                'long': [
                    '-79.0562358'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-ada3407b',
                'ip': '172.28.71.24'
            }
        },
        {
            'id': 'a7504eb0-55b42f27-865181ee',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '338134d1',
            'gatewayId': 'a7504eb0-55b42f27',
            'oem': 'CommScope',
            'model': 'IONM',
            'version': '5.30',
            'mode': 'DUPLEX',
            'name': 'UNC iDAS Kenan Stadium- North Sidelines',
            'description': 'TSUN(#3) Controller - North Sidelines',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '35.9069352'
                ],
                'long': [
                    '-79.049998'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-d7f698cf',
                'ip': '172.28.71.123'
            }
        },
        {
            'id': 'a7504eb0-55b42f27-872011d1',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '12c3bc0b',
            'gatewayId': 'a7504eb0-55b42f27',
            'oem': 'CommScope',
            'model': 'FlexWave Prism',
            'version': '8.1',
            'mode': 'DUPLEX',
            'name': 'UNC ODAS Host 3_3',
            'description': 'Host3_3 Greenlaw',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '35.910364'
                ],
                'long': [
                    '-79.0514257'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-e3221f4f',
                'ip': '172.28.71.33'
            }
        },
        {
            'id': 'a7504eb0-55b42f27-8e3ec4a7',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '338134d1',
            'gatewayId': 'a7504eb0-55b42f27',
            'oem': 'CommScope',
            'model': 'IONM',
            'version': '5.30',
            'mode': 'DUPLEX',
            'name': 'UNC iDAS Kenan Stadium - Football Center',
            'description': 'TSUN(#1) Controller Power Supplies - Football Center',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '35.9058906'
                ],
                'long': [
                    '-79.0486791'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-d75ad207',
                'ip': '172.28.71.121'
            }
        },
        {
            'id': 'a7504eb0-55b42f27-aa4e8db1',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '12c3bc0b',
            'gatewayId': 'a7504eb0-55b42f27',
            'oem': 'CommScope',
            'model': 'FlexWave Prism',
            'version': '8.1',
            'mode': 'DUPLEX',
            'name': 'UNC ODAS Host 7_1',
            'description': 'Host7_1 Greenlaw',
            'health': 300,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '35.910364'
                ],
                'long': [
                    '-79.0514257'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-a0b8c04b',
                'ip': '172.28.71.71'
            }
        },
        {
            'id': 'a7504eb0-55b42f27-ab8b3994',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '12c3bc0b',
            'gatewayId': 'a7504eb0-55b42f27',
            'oem': 'CommScope',
            'model': 'FlexWave Prism',
            'version': '8.1',
            'mode': 'DUPLEX',
            'name': 'UNC ODAS Host 1_2',
            'description': 'Host1_2 Kenan Stadium West, Kenan Stadium East, Ehringhaus RH, Carmichael RH',
            'health': 500,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '35.9069682'
                ],
                'long': [
                    '-79.0500606'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-db4c3c00',
                'ip': '172.28.71.12'
            }
        },
        {
            'id': 'a7504eb0-55b42f27-b1ef62b5',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': 'c6fc0758',
            'gatewayId': 'a7504eb0-55b42f27',
            'oem': 'CommScope',
            'model': 'IONM',
            'version': '7.40',
            'mode': 'DUPLEX',
            'name': 'UNC iDAS Kenan Stadium Sectors 9-14',
            'description': 'RMC1600 #2 Kenan Stadium DAS Controller Sectors 9-14',
            'health': 300,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '35.9069352'
                ],
                'long': [
                    '-79.049998'
                ]
            },
            'properties': {
                'https': false,
                'port': 8080,
                'vaultId': 'a7504eb0-81b28583',
                'ip': '172.28.71.102'
            }
        },
        {
            'id': 'a7504eb0-55b42f27-b7d28150',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': 'c6fc0758',
            'gatewayId': 'a7504eb0-55b42f27',
            'oem': 'CommScope',
            'model': 'IONM',
            'version': '7.40',
            'mode': 'DUPLEX',
            'name': 'UNC iDAS Kenan Stadium Sectors 1-8',
            'description': 'Kenan Stadium Master DAS Controller Sectors 1-8',
            'health': 300,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '35.9069352'
                ],
                'long': [
                    '-79.049998'
                ]
            },
            'properties': {
                'https': false,
                'port': 8080,
                'vaultId': 'a7504eb0-6da0123a',
                'ip': '172.28.71.101'
            }
        },
        {
            'id': 'a7504eb0-55b42f27-c2eb30cb',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '12c3bc0b',
            'gatewayId': 'a7504eb0-55b42f27',
            'oem': 'CommScope',
            'model': 'FlexWave Prism',
            'version': '8.1',
            'mode': 'DUPLEX',
            'name': 'UNC ODAS Host 1_4',
            'description': 'Host 1_4 AOB, FedEx Global, Cardinal Parking',
            'health': 500,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '35.9027594'
                ],
                'long': [
                    '-79.0546876'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-b89adace',
                'ip': '172.28.71.14'
            }
        },
        {
            'id': 'a7504eb0-55b42f27-de76c4b8',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '12c3bc0b',
            'gatewayId': 'a7504eb0-55b42f27',
            'oem': 'CommScope',
            'model': 'FlexWave Prism',
            'version': '8.1',
            'mode': 'DUPLEX',
            'name': 'UNC ODAS Host 3_6',
            'description': 'Host 3_6 Hinton James',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '35.9103597'
                ],
                'long': [
                    '-79.0514257'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-deddf65a',
                'ip': '172.28.71.36'
            }
        },
        {
            'id': 'a7504eb0-55b42f27-e159a7ba',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '338134d1',
            'gatewayId': 'a7504eb0-55b42f27',
            'oem': 'CommScope',
            'model': 'IONM',
            'version': '5.30',
            'mode': 'DUPLEX',
            'name': 'UNC iDAS Kenan Stadium - Loudermilk',
            'description': 'TSUN(#2) Controller Power Supplies - Loudermilk',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '35.9058906'
                ],
                'long': [
                    '-79.0486791'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-0ca608ac',
                'ip': '172.28.71.122'
            }
        },
        {
            'id': 'a7504eb0-55b42f27-f040e839',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '12c3bc0b',
            'gatewayId': 'a7504eb0-55b42f27',
            'oem': 'CommScope',
            'model': 'FlexWave Prism',
            'version': '8.1',
            'mode': 'DUPLEX',
            'name': 'UNC ODAS Host 3_5',
            'description': 'Host 3_5 Hinton James',
            'health': 500,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '35.9023847'
                ],
                'long': [
                    '-79.0454735'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-6088e769',
                'ip': '172.28.71.35'
            }
        },
        {
            'id': 'a7504eb0-5695c9a6-6b4d9bb8',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '0ad20ccc',
            'gatewayId': 'a7504eb0-5695c9a6',
            'oem': 'Synaccess',
            'model': 'NP-0808DT',
            'version': '5.0',
            'mode': 'DUPLEX',
            'name': 'Hyatt Gainey Ranch - netBooter',
            'description': 'Hyatt Gainey Ranch - netBooter',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '33.5668717'
                ],
                'long': [
                    '-111.9204788'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-b873079f',
                'ip': '192.168.1.2'
            }
        },
        {
            'id': 'a7504eb0-5695c9a6-6c6b1423',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '92d2e2de',
            'gatewayId': 'a7504eb0-5695c9a6',
            'oem': 'JMA',
            'model': 'Teko',
            'version': '3.2',
            'mode': 'DUPLEX',
            'name': 'Hyatt Gainey Ranch Teko DAS',
            'description': 'Hyatt Gainey Ranch Teko DAS',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '33.5668717'
                ],
                'long': [
                    '-111.9204788'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-f77772aa',
                'ip': '192.168.1.10'
            }
        },
        {
            'id': 'a7504eb0-5b260723-2cd0f49f',
            'phase': 'COMMISSIONING',
            'connection': 'DISCONNECTED',
            'typeId': 'd9cd02a2',
            'gatewayId': 'a7504eb0-5b260723',
            'oem': 'SOLiD',
            'model': 'R6',
            'version': '6.3',
            'mode': 'DUPLEX',
            'name': 'OSU - Scott House',
            'description': 'Scott House SOLiD Rel6 DMS1200',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '40.0043897'
                ],
                'long': [
                    '-83.0155729'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-b3f33f0d',
                'ip': '192.168.1.3'
            }
        },
        {
            'id': 'a7504eb0-6679fc6a-902678f3',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': 'cfb6b76b',
            'gatewayId': 'a7504eb0-6679fc6a',
            'oem': 'SOLiD',
            'model': 'R6',
            'version': '7.5',
            'mode': 'DUPLEX',
            'name': 'OSU - Psychology SOLID REL6',
            'description': 'SOLiD REL6 DMS1200',
            'health': 500,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '39.9980786'
                ],
                'long': [
                    '-83.0164163'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-026fb0f2',
                'ip': '192.168.1.3'
            }
        },
        {
            'id': 'a7504eb0-6679fc6a-f3a952db',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': 'b86038f8',
            'gatewayId': 'a7504eb0-6679fc6a',
            'oem': 'Tripp Lite',
            'model': 'PowerAlert Device Manager',
            'version': '15.5',
            'mode': 'DUPLEX',
            'name': 'OSU - Psychology TRIPPLITE',
            'description': 'TrippLite Remote Power Management',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '39.9980786'
                ],
                'long': [
                    '-83.0164163'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-65d5952c',
                'ip': '192.168.1.103'
            }
        },
        {
            'id': 'a7504eb0-6764c969-0b7b7db6',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '9ad739b9',
            'gatewayId': 'a7504eb0-6764c969',
            'oem': 'SOLiD',
            'model': 'R5',
            'version': '3.4',
            'mode': 'DUPLEX',
            'name': 'OSU - Carmack SOLiD REL5 Schott DMS 2',
            'description': 'SOLiD REL5 Schott DMS 2',
            'health': 300,
            'defaultHealth': 200,
            'properties': {
                'port': 80,
                'vaultId': 'a7504eb0-5915795f',
                'ip': '192.168.1.124'
            }
        },
        {
            'id': 'a7504eb0-6764c969-39eb40b3',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': 'd5b6c0dd',
            'gatewayId': 'a7504eb0-6764c969',
            'oem': 'SOLiD',
            'model': 'R6',
            'version': '7.3',
            'mode': 'DUPLEX',
            'name': 'OSU - Carmack SOLiD REL6 DMS 1 - Stadium',
            'description': 'SOLiD REL6 DMS 1 - Stadium',
            'health': 300,
            'defaultHealth': 200,
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-0181d4d0',
                'ip': '192.168.1.120'
            }
        },
        {
            'id': 'a7504eb0-6764c969-4951777b',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': 'd5b6c0dd',
            'gatewayId': 'a7504eb0-6764c969',
            'oem': 'SOLiD',
            'model': 'R6',
            'version': '7.3',
            'mode': 'DUPLEX',
            'name': 'OSU - Carmack SOLiD REL6 DMS 2 - Stadium',
            'description': 'SOLiD REL6 DMS 2 - Stadium',
            'health': 300,
            'defaultHealth': 200,
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-0181d4d0',
                'ip': '192.168.1.122'
            }
        },
        {
            'id': 'a7504eb0-6764c969-614c65a1',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': 'd5b6c0dd',
            'gatewayId': 'a7504eb0-6764c969',
            'oem': 'SOLiD',
            'model': 'R6',
            'version': '7.3',
            'mode': 'DUPLEX',
            'name': 'OSU - Carmack SOLiD REL6 DMS 3 - Stadium',
            'description': 'SOLiD REL6 DMS 3 - Stadium',
            'health': 300,
            'defaultHealth': 200,
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-0181d4d0',
                'ip': '192.168.1.121'
            }
        },
        {
            'id': 'a7504eb0-6764c969-a855c93f',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '9ad739b9',
            'gatewayId': 'a7504eb0-6764c969',
            'oem': 'SOLiD',
            'model': 'R5',
            'version': '3.4',
            'mode': 'DUPLEX',
            'name': 'OSU - Carmack SOLiD REL5 Schott DMS 1',
            'description': 'SOLiD REL5 Schott DMS 1',
            'health': 300,
            'defaultHealth': 200,
            'properties': {
                'port': 80,
                'vaultId': 'a7504eb0-5915795f',
                'ip': '192.168.1.123'
            }
        },
        {
            'id': 'a7504eb0-6764c969-cb2aff20',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '9bd73b4c',
            'gatewayId': 'a7504eb0-6764c969',
            'oem': 'SOLiD',
            'model': 'R5',
            'version': '3.3',
            'mode': 'DUPLEX',
            'name': 'OSU - Carmack SOLiD REL5 DMS 4 - ODAS',
            'description': 'SOLiD REL5 DMS 4 - ODAS',
            'health': 300,
            'defaultHealth': 200,
            'properties': {
                'port': 80,
                'vaultId': 'a7504eb0-cd7a7dd7',
                'ip': '192.168.1.119'
            }
        },
        {
            'id': 'a7504eb0-6fb3a319-2bd7fc8f',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '312bb306',
            'gatewayId': 'a7504eb0-6fb3a319',
            'oem': 'SOLiD',
            'model': 'Express',
            'version': '2.1',
            'mode': 'DUPLEX',
            'name': 'Emory University - Public Safety DAS',
            'description': 'Public Safety SOLiD Express DMS600',
            'health': 500,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '33.7910585'
                ],
                'long': [
                    '-84.325969'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-1f63736b',
                'ip': '192.168.100.10'
            }
        },
        {
            'id': 'a7504eb0-778f4c11-7d2370d4',
            'phase': 'PRODUCTION',
            'connection': 'DISCONNECTED',
            'typeId': 'fde2ed64',
            'gatewayId': 'a7504eb0-778f4c11',
            'oem': 'CommScope',
            'model': 'ION-E',
            'version': '2.5',
            'mode': 'DUPLEX',
            'name': 'PIMA CommScope ION-E DAS',
            'description': 'PIMA CommScope ION-E DAS',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '32.2806915'
                ],
                'long': [
                    '-111.0356717'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-c1e7867c',
                'ip': '192.168.0.4'
            }
        },
        {
            'id': 'a7504eb0-778f4c11-aac296de',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '2e8dd8fa',
            'gatewayId': 'a7504eb0-778f4c11',
            'oem': 'ADRF',
            'model': 'SDR-N',
            'version': '1.0',
            'mode': 'DUPLEX',
            'name': 'PIMA - ADRF SDR-N Repeater',
            'description': 'PIMA - ADRF SDR-N Repeater',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '32.2806915'
                ],
                'long': [
                    '-111.0356717'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-59ed0eab',
                'ip': '192.168.0.3'
            }
        },
        {
            'id': 'a7504eb0-7a92f084-fbfc9c38',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '92d2e2de',
            'gatewayId': 'a7504eb0-7a92f084',
            'oem': 'JMA',
            'model': 'Teko',
            'version': '3.2',
            'mode': 'DUPLEX',
            'name': 'Morgan Group Pearl Dadeland',
            'description': 'Morgan Group Property TEKO DAS',
            'health': 200,
            'defaultHealth': 200,
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-93db4a52',
                'ip': '192.168.1.10'
            }
        },
        {
            'id': 'a7504eb0-7fd0a217-2ef8c7a6',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '7b1359a7',
            'gatewayId': 'a7504eb0-7fd0a217',
            'oem': 'CMA',
            'model': 'One',
            'version': '2.2',
            'mode': 'DUPLEX',
            'name': 'Raytheon - Aurora HCM 1',
            'description': 'Raytheon Aurora, CO CorningONE DAS HCM 1',
            'health': 500,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '39.7148954'
                ],
                'long': [
                    '-104.7949419'
                ]
            },
            'properties': {
                'https': true,
                'port': 443,
                'vaultId': 'a7504eb0-1b86834a',
                'ip': '192.168.1.1'
            }
        },
        {
            'id': 'a7504eb0-7fd0a217-abb1163d',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '7b1359a7',
            'gatewayId': 'a7504eb0-7fd0a217',
            'oem': 'CMA',
            'model': 'One',
            'version': '2.2',
            'mode': 'DUPLEX',
            'name': 'Raytheon - Aurora HCM 2',
            'description': 'Raytheon Aurora, CO CorningONE DAS HCM 2',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '39.7148954'
                ],
                'long': [
                    '-104.7949419'
                ]
            },
            'properties': {
                'https': true,
                'port': 443,
                'vaultId': 'a7504eb0-03b65088',
                'ip': '192.168.1.3'
            }
        },
        {
            'id': 'a7504eb0-7fd0a217-e2da5e5a',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '0ad20ccc',
            'gatewayId': 'a7504eb0-7fd0a217',
            'oem': 'Synaccess',
            'model': 'NP-0808DT',
            'version': '5.0',
            'mode': 'DUPLEX',
            'name': 'Raytheon - Aurora netBooter',
            'description': 'Raytheon - Aurora netBooter',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '39.7148954'
                ],
                'long': [
                    '-104.7949419'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-3f209c7e',
                'ip': '192.168.1.2'
            }
        },
        {
            'id': 'a7504eb0-7fe771b3-497feee9',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '9ad739b9',
            'gatewayId': 'a7504eb0-7fe771b3',
            'oem': 'SOLiD',
            'model': 'R5',
            'version': '3.4',
            'mode': 'DUPLEX',
            'name': 'Fort Hood - SOLiD DAS',
            'description': 'Fort Hood - Darnall Army Medical Center - SOLiD REL5 DMS1200 DAS',
            'health': 300,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '31.1268286'
                ],
                'long': [
                    '-97.7770595'
                ]
            },
            'properties': {
                'port': 80,
                'vaultId': 'a7504eb0-a5cc9b6c',
                'ip': '192.168.1.3'
            }
        },
        {
            'id': 'a7504eb0-82b71d96-62fdc76d',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '2e8dd8fa',
            'gatewayId': 'a7504eb0-82b71d96',
            'oem': 'ADRF',
            'model': 'SDR-N',
            'version': '1.0',
            'mode': 'DUPLEX',
            'name': 'UCH Longs Peak ADRF SDR-N #1',
            'description': 'UCH Longs Peak ADRF SDR-N #1',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '40.1617355'
                ],
                'long': [
                    '-105.0604597'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-dac82877',
                'ip': '192.168.1.3'
            }
        },
        {
            'id': 'a7504eb0-82b71d96-66673e46',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '2e8dd8fa',
            'gatewayId': 'a7504eb0-82b71d96',
            'oem': 'ADRF',
            'model': 'SDR-N',
            'version': '1.0',
            'mode': 'DUPLEX',
            'name': 'UCH Longs Peak ADRF SDR-N #2',
            'description': 'UCH Longs Peak ADRF SDR-N #2',
            'health': 500,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '40.1617355'
                ],
                'long': [
                    '-105.0604597'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-a396dfba',
                'ip': '192.168.1.4'
            }
        },
        {
            'id': 'a7504eb0-82b71d96-70592603',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '0ad20ccc',
            'gatewayId': 'a7504eb0-82b71d96',
            'oem': 'Synaccess',
            'model': 'NP-0808DT',
            'version': '5.0',
            'mode': 'DUPLEX',
            'name': 'UCH Longs Peak netBooter',
            'description': 'UCH Longs Peak netBooter',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '40.1617355'
                ],
                'long': [
                    '-105.0604597'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-665e53bc',
                'ip': '192.168.1.5'
            }
        },
        {
            'id': 'a7504eb0-82b71d96-c1ae6bd1',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': 'd9cd02a2',
            'gatewayId': 'a7504eb0-82b71d96',
            'oem': 'SOLiD',
            'model': 'R6',
            'version': '6.3',
            'mode': 'DUPLEX',
            'name': 'UCH Longs Peak SOLiD REL6 DAS',
            'description': 'UCH Longs Peak SOLiD REL6 DAS',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '40.1617355'
                ],
                'long': [
                    '-105.0604597'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-3e8f0479',
                'ip': '192.168.1.2'
            }
        },
        {
            'id': 'a7504eb0-85dc182c-3a21efda',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '7b1359a7',
            'gatewayId': 'a7504eb0-85dc182c',
            'oem': 'CMA',
            'model': 'One',
            'version': '2.2',
            'mode': 'DUPLEX',
            'name': 'John Glenn International CorningONE Sector 1B',
            'description': 'John Glenn International CorningONE Sector 1B',
            'health': 300,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '39.999944'
                ],
                'long': [
                    '-82.8893654'
                ]
            },
            'properties': {
                'https': true,
                'port': 443,
                'vaultId': 'a7504eb0-031ad072',
                'ip': '192.168.1.112'
            }
        },
        {
            'id': 'a7504eb0-85dc182c-42051895',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '7b1359a7',
            'gatewayId': 'a7504eb0-85dc182c',
            'oem': 'CMA',
            'model': 'One',
            'version': '2.2',
            'mode': 'DUPLEX',
            'name': 'John Glenn International CorningONE Sector 2B',
            'description': 'John Glenn International CorningONE Sector 2B DAS',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '39.999944'
                ],
                'long': [
                    '-82.8893654'
                ]
            },
            'properties': {
                'https': true,
                'port': 443,
                'vaultId': 'a7504eb0-46660369',
                'ip': '192.168.1.122'
            }
        },
        {
            'id': 'a7504eb0-85dc182c-503ad6ee',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '44726db3',
            'gatewayId': 'a7504eb0-85dc182c',
            'oem': 'CMA',
            'model': '1k',
            'version': '5.3',
            'mode': 'DUPLEX',
            'name': 'John Glenn Public Safety',
            'description': 'John Glenn PS CMA2K',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '39.999944'
                ],
                'long': [
                    '-82.8893654'
                ]
            },
            'properties': {
                'port': 80,
                'vaultId': 'a7504eb0-d46a0b08',
                'ip': '192.168.1.200'
            }
        },
        {
            'id': 'a7504eb0-85dc182c-6a36c003',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '7b1359a7',
            'gatewayId': 'a7504eb0-85dc182c',
            'oem': 'CMA',
            'model': 'One',
            'version': '2.2',
            'mode': 'DUPLEX',
            'name': 'John Glenn International CorningONE Sector 3B',
            'description': 'John Glenn International CorningONE Sector 3B DAS',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '39.999944'
                ],
                'long': [
                    '-82.8893654'
                ]
            },
            'properties': {
                'https': true,
                'port': 443,
                'vaultId': 'a7504eb0-b69f05c0',
                'ip': '192.168.1.132'
            }
        },
        {
            'id': 'a7504eb0-85dc182c-747bd853',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '7b1359a7',
            'gatewayId': 'a7504eb0-85dc182c',
            'oem': 'CMA',
            'model': 'One',
            'version': '2.2',
            'mode': 'DUPLEX',
            'name': 'John Glenn International CorningONE Sector 2A',
            'description': 'John Glenn International CorningONE Sector 2A',
            'health': 500,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '39.999944'
                ],
                'long': [
                    '-82.8893654'
                ]
            },
            'properties': {
                'https': true,
                'port': 443,
                'vaultId': 'a7504eb0-27aa3b42',
                'ip': '192.168.1.121'
            }
        },
        {
            'id': 'a7504eb0-85dc182c-8d1e048a',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '7b1359a7',
            'gatewayId': 'a7504eb0-85dc182c',
            'oem': 'CMA',
            'model': 'One',
            'version': '2.2',
            'mode': 'DUPLEX',
            'name': 'John Glenn International CorningONE Sector 3A',
            'description': 'John Glenn International CorningONE Sector 3A DAS',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '39.999944'
                ],
                'long': [
                    '-82.8893654'
                ]
            },
            'properties': {
                'https': true,
                'port': 443,
                'vaultId': 'a7504eb0-ff7a9e08',
                'ip': '192.168.1.131'
            }
        },
        {
            'id': 'a7504eb0-85dc182c-ba4283e4',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '7b1359a7',
            'gatewayId': 'a7504eb0-85dc182c',
            'oem': 'CMA',
            'model': 'One',
            'version': '2.2',
            'mode': 'DUPLEX',
            'name': 'John Glenn International CorningONE Sector 1A',
            'description': 'John Glenn International CorningONE Sector 1A DAS',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '39.999944'
                ],
                'long': [
                    '-82.8893654'
                ]
            },
            'properties': {
                'https': true,
                'port': 443,
                'vaultId': 'a7504eb0-0b00c925',
                'ip': '192.168.1.111'
            }
        },
        {
            'id': 'a7504eb0-96cfbc99-b60a3c0b',
            'phase': 'PRODUCTION',
            'connection': 'DISCONNECTED',
            'typeId': '0ad20ccc',
            'gatewayId': 'a7504eb0-96cfbc99',
            'oem': 'Synaccess',
            'model': 'NP-0808DT',
            'version': '5.0',
            'mode': 'DUPLEX',
            'name': 'Raytheon - Cityline netBooter',
            'description': 'Raytheon Cityline netBooter (IP Change Detected)',
            'health': 200,
            'defaultHealth': 200,
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-9dca1356',
                'ip': '192.168.0.3'
            }
        },
        {
            'id': 'a7504eb0-96cfbc99-b9298a40',
            'phase': 'PRODUCTION',
            'connection': 'DISCONNECTED',
            'typeId': '7b1359a7',
            'gatewayId': 'a7504eb0-96cfbc99',
            'oem': 'CMA',
            'model': 'One',
            'version': '2.2',
            'mode': 'DUPLEX',
            'name': 'Raytheon - Cityline CorningONE DAS',
            'description': 'Raytheon Cityline CorningONE DAS',
            'health': 500,
            'defaultHealth': 200,
            'properties': {
                'https': true,
                'port': 443,
                'vaultId': 'a7504eb0-9c563e8a',
                'ip': '192.168.0.4'
            }
        },
        {
            'id': 'a7504eb0-96cfbc99-ceb30c29',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '2e8dd8fa',
            'gatewayId': 'a7504eb0-96cfbc99',
            'oem': 'ADRF',
            'model': 'SDR-N',
            'version': '1.0',
            'mode': 'DUPLEX',
            'name': 'Raytheon - Cityline - ADRF SDR-N',
            'description': 'Raytheon Cityline - ADRF SDR-N',
            'health': 200,
            'defaultHealth': 200,
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-dcd6ac47',
                'ip': '192.168.0.3'
            }
        },
        {
            'id': 'a7504eb0-9e00953f-332fc78e',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '59c6a963',
            'gatewayId': 'a7504eb0-9e00953f',
            'oem': 'CommScope',
            'model': 'FlexWave Spectrum',
            'version': '8.1',
            'mode': 'DUPLEX',
            'name': 'JP Morgan Chase Host Unit 9 - AT&T Sector 3',
            'description': 'Host Unit 9 - AT&T Sector 3',
            'health': 500,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '40.1411009'
                ],
                'long': [
                    '-82.9980168'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-67783bdb',
                'ip': '192.168.1.90'
            }
        },
        {
            'id': 'a7504eb0-9e00953f-3a25d6c6',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '59c6a963',
            'gatewayId': 'a7504eb0-9e00953f',
            'oem': 'CommScope',
            'model': 'FlexWave Spectrum',
            'version': '8.1',
            'mode': 'DUPLEX',
            'name': 'JP Morgan Chase VZW Host Unit 3',
            'description': 'Host Unit 3 DAS Controller',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '40.1411009'
                ],
                'long': [
                    '-82.9980168'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-67783bdb',
                'ip': '192.168.1.30'
            }
        },
        {
            'id': 'a7504eb0-9e00953f-60d65962',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '59c6a963',
            'gatewayId': 'a7504eb0-9e00953f',
            'oem': 'CommScope',
            'model': 'FlexWave Spectrum',
            'version': '8.1',
            'mode': 'DUPLEX',
            'name': 'JP Morgan Chase VZW Host Unit 6',
            'description': 'Host Unit 6 DAS Controller',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '40.1411009'
                ],
                'long': [
                    '-82.9980168'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-67783bdb',
                'ip': '192.168.1.60'
            }
        },
        {
            'id': 'a7504eb0-9e00953f-708f475b',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '59c6a963',
            'gatewayId': 'a7504eb0-9e00953f',
            'oem': 'CommScope',
            'model': 'FlexWave Spectrum',
            'version': '8.1',
            'mode': 'DUPLEX',
            'name': 'JP Morgan Chase VZW Host Unit 4',
            'description': 'Host Unit 4 DAS Controller',
            'health': 500,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '40.1411009'
                ],
                'long': [
                    '-82.9980168'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-67783bdb',
                'ip': '192.168.1.40'
            }
        },
        {
            'id': 'a7504eb0-9e00953f-779db198',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '59c6a963',
            'gatewayId': 'a7504eb0-9e00953f',
            'oem': 'CommScope',
            'model': 'FlexWave Spectrum',
            'version': '8.1',
            'mode': 'DUPLEX',
            'name': 'JP Morgan Chase Host Unit 8 - AT&T Sector 2',
            'description': 'Host Unit 8 - AT&T Sector 2',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '40.1411009'
                ],
                'long': [
                    '-82.9980168'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-67783bdb',
                'ip': '192.168.1.80'
            }
        },
        {
            'id': 'a7504eb0-9e00953f-93da66a6',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '59c6a963',
            'gatewayId': 'a7504eb0-9e00953f',
            'oem': 'CommScope',
            'model': 'FlexWave Spectrum',
            'version': '8.1',
            'mode': 'DUPLEX',
            'name': 'JP Morgan Chase VZW Host Unit 1',
            'description': 'Host Unit 1 DAS Controller',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '40.140356'
                ],
                'long': [
                    '-82.9964137'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-67783bdb',
                'ip': '192.168.1.10'
            }
        },
        {
            'id': 'a7504eb0-9e00953f-9f25fc01',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '59c6a963',
            'gatewayId': 'a7504eb0-9e00953f',
            'oem': 'CommScope',
            'model': 'FlexWave Spectrum',
            'version': '8.1',
            'mode': 'DUPLEX',
            'name': 'JP Morgan Chase VZW Host Unit 5',
            'description': 'Host Unit 5 DAS Controller',
            'health': 500,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '40.1411009'
                ],
                'long': [
                    '-82.9980168'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-67783bdb',
                'ip': '192.168.1.50'
            }
        },
        {
            'id': 'a7504eb0-9e00953f-cce7efd2',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '59c6a963',
            'gatewayId': 'a7504eb0-9e00953f',
            'oem': 'CommScope',
            'model': 'FlexWave Spectrum',
            'version': '8.1',
            'mode': 'DUPLEX',
            'name': 'JP Morgan Chase Host Unit 7 - AT&T Sector 1',
            'description': 'Host Unit 7 - AT&T Sector 1',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '40.1411009'
                ],
                'long': [
                    '-82.9980168'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-67783bdb',
                'ip': '192.168.1.70'
            }
        },
        {
            'id': 'a7504eb0-9e00953f-cd430587',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '59c6a963',
            'gatewayId': 'a7504eb0-9e00953f',
            'oem': 'CommScope',
            'model': 'FlexWave Spectrum',
            'version': '8.1',
            'mode': 'DUPLEX',
            'name': 'JP Morgan Chase VZW Host Unit 2',
            'description': 'Host Unit 2 Controller',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '40.1411009'
                ],
                'long': [
                    '-82.9980168'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-67783bdb',
                'ip': '192.168.1.20'
            }
        },
        {
            'id': 'a7504eb0-9f3b2911-477790d9',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '44726db3',
            'gatewayId': 'a7504eb0-9f3b2911',
            'oem': 'CMA',
            'model': '1k',
            'version': '5.3',
            'mode': 'DUPLEX',
            'name': 'Deloitte - Rosslyn DAS',
            'description': 'Deloitte - Rosslyn - CMA2k DAS',
            'health': 300,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '38.897702'
                ],
                'long': [
                    '-77.072576'
                ]
            },
            'properties': {
                'port': 80,
                'vaultId': 'a7504eb0-75338166',
                'ip': '192.168.1.100'
            }
        },
        {
            'id': 'a7504eb0-a36404b9-8b180997',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '71c29662',
            'gatewayId': 'a7504eb0-a36404b9',
            'oem': 'CMA',
            'model': '1k',
            'version': '7.2',
            'mode': 'DUPLEX',
            'name': 'UCH - Memorial Central CMA 1K/2K',
            'description': 'CMA 1k/2k DAS',
            'health': 400,
            'defaultHealth': 200,
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-60d25541',
                'ip': '192.168.11.100'
            }
        },
        {
            'id': 'a7504eb0-a36404b9-bee81093',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '44726db3',
            'gatewayId': 'a7504eb0-a36404b9',
            'oem': 'CMA',
            'model': '1k',
            'version': '5.3',
            'mode': 'DUPLEX',
            'name': 'UCH - Memorial Central 1k/2k Slave Controller',
            'description': 'CMA 1k/2k Slave Controller',
            'health': 300,
            'defaultHealth': 200,
            'properties': {
                'port': 80,
                'vaultId': 'a7504eb0-fac6f7f5',
                'ip': '192.168.11.102'
            }
        },
        {
            'id': 'a7504eb0-ad6b8b85-36e46c1e',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '92d2e2de',
            'gatewayId': 'a7504eb0-ad6b8b85',
            'oem': 'JMA',
            'model': 'Teko',
            'version': '3.2',
            'mode': 'DUPLEX',
            'name': 'Morgan Group Midtown 29 JMA Teko DAS',
            'description': 'Midtown 29 (Morgan Group Properties)',
            'health': 500,
            'defaultHealth': 200,
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-92c958f0',
                'ip': '192.168.1.100'
            }
        },
        {
            'id': 'a7504eb0-ae40db7c-c1ef61df',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': 'd9cd02a2',
            'gatewayId': 'a7504eb0-ae40db7c',
            'oem': 'SOLiD',
            'model': 'R6',
            'version': '6.3',
            'mode': 'DUPLEX',
            'name': 'OSU - McCorkle RPAC',
            'description': 'OSU - McCorkle RPAC',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '39.998450'
                ],
                'long': [
                    '-83.017930'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-b730d077',
                'ip': '192.168.1.3'
            }
        },
        {
            'id': 'a7504eb0-af7d8b1e-8e4b5a43',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '44726db3',
            'gatewayId': 'a7504eb0-af7d8b1e',
            'oem': 'CMA',
            'model': '1k',
            'version': '5.3',
            'mode': 'DUPLEX',
            'name': 'UCH - Memorial North Public Safety',
            'description': 'CMA 1k/2k PS Controller',
            'health': 200,
            'defaultHealth': 200,
            'properties': {
                'port': 80,
                'vaultId': 'a7504eb0-c574a646',
                'ip': '192.168.11.100'
            }
        },
        {
            'id': 'a7504eb0-af7d8b1e-ae691f3b',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '44726db3',
            'gatewayId': 'a7504eb0-af7d8b1e',
            'oem': 'CMA',
            'model': '1k',
            'version': '5.3',
            'mode': 'DUPLEX',
            'name': 'UCH - Memorial North Corning DAS',
            'description': 'CMA 1k/2k VZW DAS Controller',
            'health': 300,
            'defaultHealth': 200,
            'properties': {
                'port': 80,
                'vaultId': 'a7504eb0-c574a646',
                'ip': '192.168.11.101'
            }
        },
        {
            'id': 'a7504eb0-b2507c7e-153ef4fd',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '9ad739b9',
            'gatewayId': 'a7504eb0-b2507c7e',
            'oem': 'SOLiD',
            'model': 'R5',
            'version': '3.4',
            'mode': 'DUPLEX',
            'name': 'TIC - 500 Block SOLiD REL5 DMS1200',
            'description': 'TIC - 500 Block SOLiD REL5 DMS1200',
            'health': 500,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '33.6160765'
                ],
                'long': [
                    '-117.8717183'
                ]
            },
            'properties': {
                'port': 80,
                'vaultId': 'a7504eb0-d0503864',
                'ip': '192.168.1.3'
            }
        },
        {
            'id': 'a7504eb0-bdb543ce-700a0c07',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '0ad20ccc',
            'gatewayId': 'a7504eb0-bdb543ce',
            'oem': 'Synaccess',
            'model': 'NP-0808DT',
            'version': '5.0',
            'mode': 'DUPLEX',
            'name': 'Denver Health - netBooter',
            'description': 'Denver Health - netBooter',
            'health': 500,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '37.7274526'
                ],
                'long': [
                    '-104.9929481'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-e6c49f47',
                'ip': '192.168.1.2'
            }
        },
        {
            'id': 'a7504eb0-bdb543ce-8e97bbc4',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': 'dd640dea',
            'gatewayId': 'a7504eb0-bdb543ce',
            'oem': 'CommScope',
            'model': 'IONB',
            'version': '5.30',
            'mode': 'DUPLEX',
            'name': 'Denver Health - (DHH) ION-B DAS',
            'description': 'Denver Health - (DHH) ION-B DAS',
            'health': 400,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '39.7274526'
                ],
                'long': [
                    '-104.9929481'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-f53abbc2',
                'ip': '192.168.1.3'
            }
        },
        {
            'id': 'a7504eb0-be3c160d-74d19f58',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '2e8dd8fa',
            'gatewayId': 'a7504eb0-be3c160d',
            'oem': 'ADRF',
            'model': 'SDR-N',
            'version': '1.0',
            'mode': 'DUPLEX',
            'name': 'Raytheon - Indianapolis - ADRF SDR-N',
            'description': 'Raytheon Indianapolis - ADRF SDR-N',
            'health': 500,
            'defaultHealth': 200,
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-074435d3',
                'ip': '192.168.1.3'
            }
        },
        {
            'id': 'a7504eb0-be3c160d-7ef32f80',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': '0ad20ccc',
            'gatewayId': 'a7504eb0-be3c160d',
            'oem': 'Synaccess',
            'model': 'NP-0808DT',
            'version': '5.0',
            'mode': 'DUPLEX',
            'name': 'Raytheon - Indianapolis netBooter',
            'description': 'Raytheon - Indianapolis netBooter',
            'health': 200,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '39.7947153'
                ],
                'long': [
                    '-86.0624597'
                ]
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-3eb6d620',
                'ip': '192.168.1.100'
            }
        }
    ];

    public static USA = {
        maxBounds: [
            [5.499550, -167.276413], //Southwest
            [83.162102, -52.233040]  //Northeast
        ],
        centerLat: 41.850033,
        centerLong: -87.6500523,
    };

    public static washingtonCoOrds = {
        'type': 'FeatureCollection',
        'name': 'Public Safety Towers',
        'crs': {'type': 'name', 'properties': {'name': 'urn:ogc:def:crs:OGC:1.3:CRS84'}},
        'features': [
            {
                'type': 'Feature',
                'properties': {
                    'Name': 'Reeves Center',
                    'description': '20001 14th St NW'
                }, 'geometry': {'type': 'Point', 'coordinates': [38.917333333333332, -77.032527777777773]}
            },
            {
                'type': 'Feature',
                'properties': {'Name': '4D Public Safety Site', 'description': '6001 Georgia Ave NW'},
                'geometry': {'type': 'Point', 'coordinates': [38.963025, -77.026694444444445]}
            },
            {
                'type': 'Feature',
                'properties': {'Name': 'GW Hospital', 'description': '2150 Pennsylvania Ave NW'},
                'geometry': {'type': 'Point', 'coordinates': [38.900983333333329, -77.04695]}
            },
            {
                'type': 'Feature',
                'properties': {'Name': 'UDC Public Safety', 'description': '4200 Connecticut Ave NW'},
                'geometry': {'type': 'Point', 'coordinates': [38.943511111111107, -77.065113888888888]}
            },
            {
                'type': 'Feature',
                'properties': {
                    'Name': '1700 Rhode Island Ave. Public Safety Site',
                    'description': '1700 Rhode Island Ave NE'
                },
                'geometry': {'type': 'Point', 'coordinates': [38.927322222222223, -76.980419444444451]}
            },
            {
                'type': 'Feature',
                'properties': {'Name': 'Georgetown Hospital', 'description': '3800 Reservoir Rd NW'},
                'geometry': {'type': 'Point', 'coordinates': [38.911647222222221, -77.075405555555548]}
            },
            {
                'type': 'Feature',
                'properties': {'Name': 'One Judiciary Square', 'description': '441 4th St NW'},
                'geometry': {'type': 'Point', 'coordinates': [38.895369444444441, -77.01565]}
            },
            {
                'type': 'Feature',
                'properties': {'Name': 'Fletcher Johnson School', 'description': '4650 Benning Rd SE'},
                'geometry': {'type': 'Point', 'coordinates': [38.882625, -76.9343]}
            },
            {
                'type': 'Feature',
                'properties': {'Name': 'Sibley Hospital', 'description': '5255 Loughboro Rd NW'},
                'geometry': {'type': 'Point', 'coordinates': [38.936658333333327, -77.111280555555552]}
            },
            {
                'type': 'Feature',
                'properties': {'Name': 'St. Elizabeth\'s Tower', 'description': '2901 Robinson Pl SE'},
                'geometry': {'type': 'Point', 'coordinates': [38.848241666666667, -76.98789166666667]}
            }
        ]
    };
    public static laCoOrds = {
        'type': 'FeatureCollection',
        'name': 'Public Safety Towers',
        'crs': {'type': 'name', 'properties': {'name': 'urn:ogc:def:crs:OGC:1.3:CRS84'}},
        'features': [
            {
                'type': 'Feature',
                'properties': {
                    'Name': '100 Wilshire',
                    'description': ''
                }, 'geometry': {'type': 'Point', 'coordinates': [34.01683, -118.50023]}
            },
            {
                'type': 'Feature',
                'properties': {'Name': 'Baldwin Hills', 'description': ''},
                'geometry': {'type': 'Point', 'coordinates': [34.00668, -118.36234]}
            },
            {
                'type': 'Feature',
                'properties': {'Name': 'Beverly Glen', 'description': ''},
                'geometry': {'type': 'Point', 'coordinates': [34.12915, -118.44257]}
            },
            {
                'type': 'Feature',
                'properties': {'Name': 'City Hall', 'description': ''},
                'geometry': {'type': 'Point', 'coordinates': [34.0536, -118.24256]}
            },
            {
                'type': 'Feature',
                'properties': {
                    'Name': 'KSKQ Radio Site',
                    'description': ''
                },
                'geometry': {'type': 'Point', 'coordinates': [34.07869, -118.18558]}
            },
            {
                'type': 'Feature',
                'properties': {'Name': 'MT. Washington', 'description': ''},
                'geometry': {'type': 'Point', 'coordinates': [34.10417, -118.21497]}
            },
            {
                'type': 'Feature',
                'properties': {'Name': 'Oat Mountain', 'description': ''},
                'geometry': {'type': 'Point', 'coordinates': [34.32833, -118.59812]}
            },
            {
                'type': 'Feature',
                'properties': {'Name': 'Verdugo Peak', 'description': ''},
                'geometry': {'type': 'Point', 'coordinates': [34.2198, -117.29053]}
            },
            {
                'type': 'Feature',
                'properties': {'Name': 'San Pedro Hill', 'description': ''},
                'geometry': {'type': 'Point', 'coordinates': [33.74639, -118.33563]}
            }
        ]
    };
    public static sanDiegoCoOrds = {
        'type': 'FeatureCollection',
        'name': 'Public Safety Towers',
        'crs': {'type': 'name', 'properties': {'name': 'urn:ogc:def:crs:OGC:1.3:CRS84'}},
        'features': [
            {
                'type': 'Feature',
                'properties': {
                    'Name': 'Cowles Mountain',
                    'description': 'Cowles Mountain - Mountain Peak \n' +
                        '\n' +
                        'San Diego, CA 92119 \n' +
                        '\n' +
                        'Cowles Mountain is a prominent mountain located in the San Carlos neighborhood, within the City of San Diego, San Diego County, California. The 1,593-foot summit is the highest point of the city of San Diego. \n' +
                        'Wikipedia (/url?q=https://en.wikipedia.org/wiki/Cowles_Mountain&sa=U&ved=0ahUKEwj12cbH1bzZAhVnm-AKHaXgBbMQ4lkIDygAMAA&usg=AOvVaw2NWSr2ZpRiqzuAkD3bGiXi) \n' +
                        'Elevation: 1,594′ \n' +
                        'Did you know: For many years Cowles Mountain was locally known as "S" Mountain. \n' +
                        'Prominence: 991′ \n' +
                        '\n' +
                        '\n' +
                        '\n' +
                        '(#) \n' +
                        '4.5 64 reviews (http://www.google.com/search?q=Cowles+Mountain,+San+Diego,+CA+92119&ludocid=1482284172081286669#lrd=0x80d957cb5c163f3d:0x14922199dd16ce0d,1) ',
                    'placePageUri': 'https://www.google.com/earth/rpc/entity?lat=32.8134238&amp;lng=-117.03055559999999&amp;fid=0x80d957cb5c163f3d:0x14922199dd16ce0d&amp;q=Cowles Mountain, San Diego, CA 92119&amp;hl=en&amp;gl=us&amp;client=earth-client&amp;cv=7.3.1.4507&amp;useragent=GoogleEarth/7.3.1.4507(Windows;Microsoft Windows (6.2.9200.0);en;kml:2.2;client:Pro;type:default)',
                    'photo': 'https://lh6.googleusercontent.com/proxy/DFZioPLOBNWzX950kqSO2YFviRC9FgIFKkydkDEGV4J234fIpWClpqory1f-_DwvU2vTbEU4LPXy3HSGbpJgA1HV982IjPN5P24Kz7tZgBfpSnEYS4DXyxJXQHfHUCDcgBG-ccu74kH89_o8YkIIEHJhfE5jcADG6HlCljbq5dKGwjFlto76sn41kx-bM4EbjyndYa52HOAII5_rS0JUUUfWX6HHOjNym1XTmSoOwp_9HKNQEaW_DjbKRzGsXWmmYr7agThPXe4BQqIX1mLj8zadvBonAR_tV6xYVn6h0yP30hAQYsANB8KDAyMfbdxkFnDs3oFGi1C2efW5BsW28EbXJhWIV6k=w314-h200'
                }, 'geometry': {'type': 'Point', 'coordinates': [32.8134238, -117.03055559999999]}
            },
            {
                'type': 'Feature',
                'properties': {'Name': 'Encanto', 'description': 'Aviation Dr \n' +
                        '\n' +
                        'San Diego, CA 92114 \n' +
                        '\n' +
                        '\n' +
                        '\n' +
                        '\n' +
                        '(#) \n' +
                        '(#) \n',
                    'placePageUri': 'https://www.google.com/earth/rpc/entity?lat=32.7041671&amp;lng=-117.05301240000001&amp;fid=0x80d9510c8a5c7c1d:0x346bc64b2dceeef2&amp;q=Aviation Dr, San Diego, CA 92114&amp;hl=en&amp;gl=us&amp;client=earth-client&amp;cv=7.3.1.4507&amp;useragent=GoogleEarth/7.3.1.4507(Windows;Microsoft Windows (6.2.9200.0);en;kml:2.2;client:Pro;type:default)'},
                'geometry': {'type': 'Point', 'coordinates': [32.7041671, -117.05301240000001]}
            },
            {
                'type': 'Feature',
                'properties': {'Name': 'Black Mountain', 'description': '9700 Laurentian Dr \n' +
                        '\n' +
                        'San Diego, CA 92129 \n' +
                        '\n' +
                        '\n' +
                        '\n' +
                        '\n' +
                        '(#) \n' +
                        '(#) ',
                    'placePageUri': 'https://www.google.com/earth/rpc/entity?lat=32.97474809999999&amp;lng=-117.12534710000001&amp;fid=0x80dbf77fed01d327:0xf48519161c3ff6e0&amp;q=9700 Laurentian Dr, San Diego, CA 92129&amp;hl=en&amp;gl=us&amp;client=earth-client&amp;cv=7.3.1.4507&amp;useragent=GoogleEarth/7.3.1.4507(Windows;Microsoft Windows (6.2.9200.0);en;kml:2.2;client:Pro;type:default)'},
                'geometry': {'type': 'Point', 'coordinates': [32.97474809999999, -117.12534710000001]}
            },
            {
                'type': 'Feature',
                'properties': {'Name': 'San Ysidro View', 'description': '4350 Otay Mesa Rd \n' +
                        '\n' +
                        'San Diego, CA 92154 \n' +
                        '\n' +
                        '\n' +
                        '\n' +
                        '\n' +
                        '(#) \n' +
                        '(#) ',
                    'placePageUri': 'https://www.google.com/earth/rpc/entity?lat=32.5624457&amp;lng=-117.04014939999999&amp;fid=0x80d94925b338a2df:0x2f0d609b53e0d988&amp;q=4350 Otay Mesa Rd, San Diego, CA 92154&amp;hl=en&amp;gl=us&amp;client=earth-client&amp;cv=7.3.1.4507&amp;useragent=GoogleEarth/7.3.1.4507(Windows;Microsoft Windows (6.2.9200.0);en;kml:2.2;client:Pro;type:default)'},
                'geometry': {'type': 'Point', 'coordinates': [32.5624457, -117.04014939999999]}
            },
            {
                'type': 'Feature',
                'properties': {
                    'Name': 'Mount Soledad',
                    'description': '2110 Via Casa Alta \n' +
                        '\n' +
                        'La Jolla, CA 92037 \n' +
                        '\n' +
                        '\n' +
                        '\n' +
                        '\n' +
                        '(#) \n' +
                        '(#) ',
                    'placePageUri': 'https://www.google.com/earth/rpc/entity?lat=32.8392678&amp;lng=-117.25038830000001&amp;fid=0x80dc0169f0d47f77:0x9c06816268c8b459&amp;q=2110 Via Casa Alta, La Jolla, CA 92037&amp;hl=en&amp;gl=us&amp;client=earth-client&amp;cv=7.3.1.4507&amp;useragent=GoogleEarth/7.3.1.4507(Windows;Microsoft Windows (6.2.9200.0);en;kml:2.2;client:Pro;type:default)',
                    'photo': 'https://lh4.googleusercontent.com/proxy/NbpTM3wPoJmVVYNmptofjYp_YE06IBydyG0…Aul6QTY-Z1APsI2Zqiaff_yup8bg53A5QWevTJbKhuCp-m6DdijM_XHVDyUo8Kcs=w314-h200'
                },
                'geometry': {'type': 'Point', 'coordinates': [32.8392678, -117.25038830000001]}
            },
            {
                'type': 'Feature',
                'properties': {'Name': 'City Admin Building', 'description': '202 C St \n' +
                        '\n' +
                        'San Diego, CA 92101 \n' +
                        '\n' +
                        '\n' +
                        '\n' +
                        '\n' +
                        '(#) \n' +
                        '(#) ',
                    'placePageUri': 'https://www.google.com/earth/rpc/entity?lat=32.7169145&amp;lng=-117.162969&amp;fid=0x80d954a861dd453f:0xb5691c2323cfd58f&amp;q=202 C St, San Diego, CA 92101&amp;hl=en&amp;gl=us&amp;client=earth-client&amp;cv=7.3.1.4507&amp;useragent=GoogleEarth/7.3.1.4507(Windows;Microsoft Windows (6.2.9200.0);en;kml:2.2;client:Pro;type:default)'},
                'geometry': {'type': 'Point', 'coordinates': [32.7169145, -117.162969]}
            }
        ]
    };
}
