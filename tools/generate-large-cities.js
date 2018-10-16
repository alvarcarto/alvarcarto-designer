const _ = require('lodash');

const a = [
  {
    "id": "48.208L16.372",
    "name": "Vienna",
    "lat": 48.20849,
    "lng": 16.37208,
    "countryCode": "AT",
    "population": 1691468
  },
  {
    "id": "48.167L14.033",
    "name": "Wels",
    "lat": 48.16667,
    "lng": 14.03333,
    "countryCode": "AT",
    "population": 57946
  },
  {
    "id": "46.610L13.856",
    "name": "Villach",
    "lat": 46.61028,
    "lng": 13.85583,
    "countryCode": "AT",
    "population": 58882
  },
  {
    "id": "47.799L13.044",
    "name": "Salzburg",
    "lat": 47.79941,
    "lng": 13.04399,
    "countryCode": "AT",
    "population": 150269
  },
  {
    "id": "48.306L14.286",
    "name": "Linz",
    "lat": 48.30639,
    "lng": 14.28611,
    "countryCode": "AT",
    "population": 181162
  },
  {
    "id": "46.625L14.305",
    "name": "Klagenfurt am Wörthersee",
    "lat": 46.62472,
    "lng": 14.30528,
    "countryCode": "AT",
    "population": 90610
  },
  {
    "id": "47.263L11.395",
    "name": "Innsbruck",
    "lat": 47.26266,
    "lng": 11.39454,
    "countryCode": "AT",
    "population": 112467
  },
  {
    "id": "47.067L15.450",
    "name": "Graz",
    "lat": 47.06667,
    "lng": 15.45,
    "countryCode": "AT",
    "population": 222326
  },
  {
    "id": "50.589L5.862",
    "name": "Verviers",
    "lat": 50.58907,
    "lng": 5.86241,
    "countryCode": "BE",
    "population": 52824
  },
  {
    "id": "50.607L3.389",
    "name": "Tournai",
    "lat": 50.60715,
    "lng": 3.38932,
    "countryCode": "BE",
    "population": 67721
  },
  {
    "id": "51.165L4.144",
    "name": "Sint-Niklaas",
    "lat": 51.16509,
    "lng": 4.1437,
    "countryCode": "BE",
    "population": 69010
  },
  {
    "id": "50.584L5.501",
    "name": "Seraing",
    "lat": 50.58362,
    "lng": 5.50115,
    "countryCode": "BE",
    "population": 60737
  },
  {
    "id": "50.947L3.123",
    "name": "Roeselare",
    "lat": 50.94653,
    "lng": 3.12269,
    "countryCode": "BE",
    "population": 56016
  },
  {
    "id": "51.216L2.927",
    "name": "Ostend",
    "lat": 51.21551,
    "lng": 2.927,
    "countryCode": "BE",
    "population": 69011
  },
  {
    "id": "50.467L4.867",
    "name": "Namur",
    "lat": 50.4669,
    "lng": 4.86746,
    "countryCode": "BE",
    "population": 106284
  },
  {
    "id": "50.745L3.206",
    "name": "Mouscron",
    "lat": 50.74497,
    "lng": 3.20639,
    "countryCode": "BE",
    "population": 52069
  },
  {
    "id": "50.454L3.952",
    "name": "Mons",
    "lat": 50.45413,
    "lng": 3.95229,
    "countryCode": "BE",
    "population": 91277
  },
  {
    "id": "51.026L4.478",
    "name": "Mechelen",
    "lat": 51.02574,
    "lng": 4.47762,
    "countryCode": "BE",
    "population": 77530
  },
  {
    "id": "50.634L5.567",
    "name": "Liège",
    "lat": 50.63373,
    "lng": 5.56749,
    "countryCode": "BE",
    "population": 182597
  },
  {
    "id": "50.880L4.701",
    "name": "Leuven",
    "lat": 50.87959,
    "lng": 4.70093,
    "countryCode": "BE",
    "population": 92892
  },
  {
    "id": "50.487L4.188",
    "name": "La Louvière",
    "lat": 50.48657,
    "lng": 4.18785,
    "countryCode": "BE",
    "population": 76668
  },
  {
    "id": "50.828L3.265",
    "name": "Kortrijk",
    "lat": 50.82803,
    "lng": 3.26487,
    "countryCode": "BE",
    "population": 73879
  },
  {
    "id": "50.931L5.338",
    "name": "Hasselt",
    "lat": 50.93106,
    "lng": 5.33781,
    "countryCode": "BE",
    "population": 69222
  },
  {
    "id": "51.050L3.717",
    "name": "Gent",
    "lat": 51.05,
    "lng": 3.71667,
    "countryCode": "BE",
    "population": 231493
  },
  {
    "id": "50.965L5.501",
    "name": "Genk",
    "lat": 50.965,
    "lng": 5.50082,
    "countryCode": "BE",
    "population": 63666
  },
  {
    "id": "50.411L4.444",
    "name": "Charleroi",
    "lat": 50.41136,
    "lng": 4.44448,
    "countryCode": "BE",
    "population": 200132
  },
  {
    "id": "50.850L4.349",
    "name": "Brussels",
    "lat": 50.85045,
    "lng": 4.34878,
    "countryCode": "BE",
    "population": 1019022
  },
  {
    "id": "51.209L3.224",
    "name": "Brugge",
    "lat": 51.20892,
    "lng": 3.22424,
    "countryCode": "BE",
    "population": 116709
  },
  {
    "id": "51.220L4.403",
    "name": "Antwerpen",
    "lat": 51.21989,
    "lng": 4.40346,
    "countryCode": "BE",
    "population": 459805
  },
  {
    "id": "50.936L4.035",
    "name": "Aalst",
    "lat": 50.93604,
    "lng": 4.0355,
    "countryCode": "BE",
    "population": 77534
  },
  {
    "id": "42.483L26.500",
    "name": "Yambol",
    "lat": 42.48333,
    "lng": 26.5,
    "countryCode": "BG",
    "population": 80116
  },
  {
    "id": "43.210L23.563",
    "name": "Vratsa",
    "lat": 43.21,
    "lng": 23.5625,
    "countryCode": "BG",
    "population": 64941
  },
  {
    "id": "43.990L22.872",
    "name": "Vidin",
    "lat": 43.99,
    "lng": 22.8725,
    "countryCode": "BG",
    "population": 54409
  },
  {
    "id": "43.081L25.629",
    "name": "Veliko Tŭrnovo",
    "lat": 43.08124,
    "lng": 25.62904,
    "countryCode": "BG",
    "population": 66217
  },
  {
    "id": "43.217L27.917",
    "name": "Varna",
    "lat": 43.21667,
    "lng": 27.91667,
    "countryCode": "BG",
    "population": 312770
  },
  {
    "id": "43.567L27.833",
    "name": "Dobrich",
    "lat": 43.56667,
    "lng": 27.83333,
    "countryCode": "BG",
    "population": 94831
  },
  {
    "id": "42.433L25.642",
    "name": "Stara Zagora",
    "lat": 42.43278,
    "lng": 25.64194,
    "countryCode": "BG",
    "population": 143431
  },
  {
    "id": "42.698L23.324",
    "name": "Sofia",
    "lat": 42.69751,
    "lng": 23.32415,
    "countryCode": "BG",
    "population": 1152556
  },
  {
    "id": "42.686L26.329",
    "name": "Sliven",
    "lat": 42.68583,
    "lng": 26.32917,
    "countryCode": "BG",
    "population": 96368
  },
  {
    "id": "43.271L26.923",
    "name": "Shumen",
    "lat": 43.27064,
    "lng": 26.92286,
    "countryCode": "BG",
    "population": 87283
  },
  {
    "id": "43.856L25.971",
    "name": "Ruse",
    "lat": 43.85639,
    "lng": 25.97083,
    "countryCode": "BG",
    "population": 156238
  },
  {
    "id": "42.150L24.750",
    "name": "Plovdiv",
    "lat": 42.15,
    "lng": 24.75,
    "countryCode": "BG",
    "population": 340494
  },
  {
    "id": "43.417L24.617",
    "name": "Pleven",
    "lat": 43.41667,
    "lng": 24.61667,
    "countryCode": "BG",
    "population": 118675
  },
  {
    "id": "42.600L23.033",
    "name": "Pernik",
    "lat": 42.6,
    "lng": 23.03333,
    "countryCode": "BG",
    "population": 82467
  },
  {
    "id": "42.200L24.333",
    "name": "Pazardzhik",
    "lat": 42.2,
    "lng": 24.33333,
    "countryCode": "BG",
    "population": 75977
  },
  {
    "id": "41.650L25.367",
    "name": "Kardzhali",
    "lat": 41.65,
    "lng": 25.36667,
    "countryCode": "BG",
    "population": 51000
  },
  {
    "id": "41.934L25.556",
    "name": "Haskovo",
    "lat": 41.93415,
    "lng": 25.55557,
    "countryCode": "BG",
    "population": 79699
  },
  {
    "id": "42.617L25.400",
    "name": "Kazanlak",
    "lat": 42.61667,
    "lng": 25.4,
    "countryCode": "BG",
    "population": 55196
  },
  {
    "id": "42.875L25.334",
    "name": "Gabrovo",
    "lat": 42.87472,
    "lng": 25.33417,
    "countryCode": "BG",
    "population": 66175
  },
  {
    "id": "42.506L27.468",
    "name": "Burgas",
    "lat": 42.50606,
    "lng": 27.46781,
    "countryCode": "BG",
    "population": 195966
  },
  {
    "id": "42.017L23.100",
    "name": "Blagoevgrad",
    "lat": 42.01667,
    "lng": 23.1,
    "countryCode": "BG",
    "population": 71306
  },
  {
    "id": "42.017L24.867",
    "name": "Asenovgrad",
    "lat": 42.01667,
    "lng": 24.86667,
    "countryCode": "BG",
    "population": 52170
  },
  {
    "id": "49.058L-122.253",
    "name": "Abbotsford",
    "lat": 49.05798,
    "lng": -122.25257,
    "countryCode": "CA",
    "population": 151683
  },
  {
    "id": "43.850L-79.033",
    "name": "Ajax",
    "lat": 43.85012,
    "lng": -79.03288,
    "countryCode": "CA",
    "population": 90167
  },
  {
    "id": "49.316L-122.853",
    "name": "Anmore",
    "lat": 49.31637,
    "lng": -122.85263,
    "countryCode": "CA",
    "population": 126456
  },
  {
    "id": "44.400L-79.666",
    "name": "Barrie",
    "lat": 44.40011,
    "lng": -79.66634,
    "countryCode": "CA",
    "population": 182041
  },
  {
    "id": "43.683L-79.766",
    "name": "Brampton",
    "lat": 43.68341,
    "lng": -79.76633,
    "countryCode": "CA",
    "population": 433806
  },
  {
    "id": "43.133L-80.266",
    "name": "Brantford",
    "lat": 43.1334,
    "lng": -80.26636,
    "countryCode": "CA",
    "population": 87759
  },
  {
    "id": "45.450L-73.466",
    "name": "Brossard",
    "lat": 45.45008,
    "lng": -73.46583,
    "countryCode": "CA",
    "population": 69575
  },
  {
    "id": "43.386L-79.837",
    "name": "Burlington",
    "lat": 43.38621,
    "lng": -79.83713,
    "countryCode": "CA",
    "population": 164415
  },
  {
    "id": "49.266L-122.953",
    "name": "Burnaby",
    "lat": 49.26636,
    "lng": -122.95263,
    "countryCode": "CA",
    "population": 202799
  },
  {
    "id": "51.050L-114.085",
    "name": "Calgary",
    "lat": 51.05011,
    "lng": -114.08529,
    "countryCode": "CA",
    "population": 1019942
  },
  {
    "id": "43.360L-80.313",
    "name": "Cambridge",
    "lat": 43.3601,
    "lng": -80.31269,
    "countryCode": "CA",
    "population": 120372
  },
  {
    "id": "49.166L-121.953",
    "name": "Chilliwack",
    "lat": 49.16638,
    "lng": -121.95257,
    "countryCode": "CA",
    "population": 77000
  },
  {
    "id": "49.283L-122.753",
    "name": "Coquitlam",
    "lat": 49.28297,
    "lng": -122.75262,
    "countryCode": "CA",
    "population": 114565
  },
  {
    "id": "44.671L-63.577",
    "name": "Dartmouth",
    "lat": 44.67134,
    "lng": -63.57719,
    "countryCode": "CA",
    "population": 101343
  },
  {
    "id": "49.144L-122.907",
    "name": "Delta",
    "lat": 49.14399,
    "lng": -122.9068,
    "countryCode": "CA",
    "population": 101668
  },
  {
    "id": "45.883L-72.482",
    "name": "Drummondville",
    "lat": 45.88336,
    "lng": -72.48241,
    "countryCode": "CA",
    "population": 59489
  },
  {
    "id": "53.550L-113.469",
    "name": "Edmonton",
    "lat": 53.55014,
    "lng": -113.46871,
    "countryCode": "CA",
    "population": 712391
  },
  {
    "id": "43.654L-79.567",
    "name": "Etobicoke",
    "lat": 43.65421,
    "lng": -79.56711,
    "countryCode": "CA",
    "population": 347948
  },
  {
    "id": "56.727L-111.381",
    "name": "Fort McMurray",
    "lat": 56.72676,
    "lng": -111.38103,
    "countryCode": "CA",
    "population": 76000
  },
  {
    "id": "45.945L-66.666",
    "name": "Fredericton",
    "lat": 45.94541,
    "lng": -66.66558,
    "countryCode": "CA",
    "population": 52337
  },
  {
    "id": "45.477L-75.702",
    "name": "Gatineau",
    "lat": 45.47723,
    "lng": -75.70164,
    "countryCode": "CA",
    "population": 242124
  },
  {
    "id": "45.400L-72.732",
    "name": "Granby",
    "lat": 45.40008,
    "lng": -72.73243,
    "countryCode": "CA",
    "population": 53979
  },
  {
    "id": "46.490L-80.990",
    "name": "Greater Sudbury",
    "lat": 46.49,
    "lng": -80.99001,
    "countryCode": "CA",
    "population": 157857
  },
  {
    "id": "43.546L-80.256",
    "name": "Guelph",
    "lat": 43.54594,
    "lng": -80.25599,
    "countryCode": "CA",
    "population": 115760
  },
  {
    "id": "43.250L-79.850",
    "name": "Hamilton",
    "lat": 43.25011,
    "lng": -79.84963,
    "countryCode": "CA",
    "population": 519949
  },
  {
    "id": "50.666L-120.319",
    "name": "Kamloops",
    "lat": 50.66648,
    "lng": -120.3192,
    "countryCode": "CA",
    "population": 68714
  },
  {
    "id": "49.883L-119.486",
    "name": "Kelowna",
    "lat": 49.88307,
    "lng": -119.48568,
    "countryCode": "CA",
    "population": 125109
  },
  {
    "id": "44.230L-76.481",
    "name": "Kingston",
    "lat": 44.22976,
    "lng": -76.48098,
    "countryCode": "CA",
    "population": 114195
  },
  {
    "id": "43.425L-80.511",
    "name": "Kitchener",
    "lat": 43.42537,
    "lng": -80.5112,
    "countryCode": "CA",
    "population": 233700
  },
  {
    "id": "49.083L-122.586",
    "name": "Langley",
    "lat": 49.08297,
    "lng": -122.58589,
    "countryCode": "CA",
    "population": 93726
  },
  {
    "id": "45.570L-73.692",
    "name": "Laval",
    "lat": 45.56995,
    "lng": -73.692,
    "countryCode": "CA",
    "population": 376845
  },
  {
    "id": "49.700L-112.819",
    "name": "Lethbridge",
    "lat": 49.69999,
    "lng": -112.81856,
    "countryCode": "CA",
    "population": 70617
  },
  {
    "id": "42.983L-81.233",
    "name": "London",
    "lat": 42.98339,
    "lng": -81.23304,
    "countryCode": "CA",
    "population": 346765
  },
  {
    "id": "45.531L-73.518",
    "name": "Longueuil",
    "lat": 45.53121,
    "lng": -73.51806,
    "countryCode": "CA",
    "population": 229330
  },
  {
    "id": "49.219L-122.602",
    "name": "Maple Ridge",
    "lat": 49.21939,
    "lng": -122.60193,
    "countryCode": "CA",
    "population": 70000
  },
  {
    "id": "43.867L-79.266",
    "name": "Markham",
    "lat": 43.86682,
    "lng": -79.2663,
    "countryCode": "CA",
    "population": 261573
  },
  {
    "id": "50.039L-110.677",
    "name": "Medicine Hat",
    "lat": 50.03928,
    "lng": -110.67661,
    "countryCode": "CA",
    "population": 63138
  },
  {
    "id": "43.517L-79.883",
    "name": "Milton",
    "lat": 43.51681,
    "lng": -79.88294,
    "countryCode": "CA",
    "population": 84362
  },
  {
    "id": "43.579L-79.658",
    "name": "Mississauga",
    "lat": 43.5789,
    "lng": -79.6583,
    "countryCode": "CA",
    "population": 668549
  },
  {
    "id": "46.095L-64.796",
    "name": "Moncton",
    "lat": 46.09454,
    "lng": -64.7965,
    "countryCode": "CA",
    "population": 87467
  },
  {
    "id": "45.509L-73.588",
    "name": "Montréal",
    "lat": 45.50884,
    "lng": -73.58781,
    "countryCode": "CA",
    "population": 1600000
  },
  {
    "id": "49.166L-123.940",
    "name": "Nanaimo",
    "lat": 49.16638,
    "lng": -123.94003,
    "countryCode": "CA",
    "population": 84905
  },
  {
    "id": "44.050L-79.466",
    "name": "Newmarket",
    "lat": 44.05011,
    "lng": -79.46631,
    "countryCode": "CA",
    "population": 74295
  },
  {
    "id": "49.207L-122.911",
    "name": "New Westminster",
    "lat": 49.20678,
    "lng": -122.91092,
    "countryCode": "CA",
    "population": 58549
  },
  {
    "id": "43.100L-79.066",
    "name": "Niagara Falls",
    "lat": 43.10012,
    "lng": -79.06627,
    "countryCode": "CA",
    "population": 82000
  },
  {
    "id": "42.833L-80.383",
    "name": "Norfolk County",
    "lat": 42.8334,
    "lng": -80.38297,
    "countryCode": "CA",
    "population": 60847
  },
  {
    "id": "46.317L-79.466",
    "name": "North Bay",
    "lat": 46.3168,
    "lng": -79.46633,
    "countryCode": "CA",
    "population": 50170
  },
  {
    "id": "43.767L-79.416",
    "name": "North York",
    "lat": 43.76681,
    "lng": -79.4163,
    "countryCode": "CA",
    "population": 636000
  },
  {
    "id": "43.450L-79.683",
    "name": "Oakville",
    "lat": 43.45011,
    "lng": -79.68292,
    "countryCode": "CA",
    "population": 165697
  },
  {
    "id": "43.900L-78.850",
    "name": "Oshawa",
    "lat": 43.90012,
    "lng": -78.84957,
    "countryCode": "CA",
    "population": 247989
  },
  {
    "id": "45.411L-75.698",
    "name": "Ottawa",
    "lat": 45.41117,
    "lng": -75.69812,
    "countryCode": "CA",
    "population": 812129
  },
  {
    "id": "44.300L-78.316",
    "name": "Peterborough",
    "lat": 44.30012,
    "lng": -78.31623,
    "countryCode": "CA",
    "population": 75877
  },
  {
    "id": "43.900L-79.133",
    "name": "Pickering",
    "lat": 43.90012,
    "lng": -79.13289,
    "countryCode": "CA",
    "population": 87838
  },
  {
    "id": "53.917L-122.753",
    "name": "Prince George",
    "lat": 53.9166,
    "lng": -122.75301,
    "countryCode": "CA",
    "population": 65558
  },
  {
    "id": "52.267L-113.802",
    "name": "Red Deer",
    "lat": 52.26682,
    "lng": -113.802,
    "countryCode": "CA",
    "population": 73593
  },
  {
    "id": "50.450L-104.618",
    "name": "Regina",
    "lat": 50.45008,
    "lng": -104.6178,
    "countryCode": "CA",
    "population": 176183
  },
  {
    "id": "45.742L-73.450",
    "name": "Repentigny",
    "lat": 45.74222,
    "lng": -73.45008,
    "countryCode": "CA",
    "population": 76237
  },
  {
    "id": "49.170L-123.137",
    "name": "Richmond",
    "lat": 49.17003,
    "lng": -123.13683,
    "countryCode": "CA",
    "population": 182000
  },
  {
    "id": "43.871L-79.437",
    "name": "Richmond Hill",
    "lat": 43.87111,
    "lng": -79.43725,
    "countryCode": "CA",
    "population": 185541
  },
  {
    "id": "48.417L-71.066",
    "name": "Saguenay",
    "lat": 48.41675,
    "lng": -71.06573,
    "countryCode": "CA",
    "population": 143692
  },
  {
    "id": "45.631L-72.957",
    "name": "Saint-Hyacinthe",
    "lat": 45.63076,
    "lng": -72.95699,
    "countryCode": "CA",
    "population": 50326
  },
  {
    "id": "45.307L-73.263",
    "name": "Saint-Jean-sur-Richelieu",
    "lat": 45.30713,
    "lng": -73.26259,
    "countryCode": "CA",
    "population": 71613
  },
  {
    "id": "45.780L-74.004",
    "name": "Saint-Jérôme",
    "lat": 45.78036,
    "lng": -74.00365,
    "countryCode": "CA",
    "population": 54948
  },
  {
    "id": "45.273L-66.068",
    "name": "Saint John",
    "lat": 45.27271,
    "lng": -66.06766,
    "countryCode": "CA",
    "population": 87857
  },
  {
    "id": "45.500L-73.666",
    "name": "Saint-Laurent",
    "lat": 45.50008,
    "lng": -73.66585,
    "countryCode": "CA",
    "population": 77391
  },
  {
    "id": "45.588L-73.595",
    "name": "Saint-Léonard",
    "lat": 45.58773,
    "lng": -73.59501,
    "countryCode": "CA",
    "population": 73423
  },
  {
    "id": "42.979L-82.404",
    "name": "Sarnia",
    "lat": 42.97866,
    "lng": -82.40407,
    "countryCode": "CA",
    "population": 82998
  },
  {
    "id": "52.132L-106.669",
    "name": "Saskatoon",
    "lat": 52.13238,
    "lng": -106.66892,
    "countryCode": "CA",
    "population": 198958
  },
  {
    "id": "46.517L-84.333",
    "name": "Sault Ste. Marie",
    "lat": 46.51677,
    "lng": -84.33325,
    "countryCode": "CA",
    "population": 74948
  },
  {
    "id": "45.400L-71.899",
    "name": "Sherbrooke",
    "lat": 45.40008,
    "lng": -71.89908,
    "countryCode": "CA",
    "population": 129447
  },
  {
    "id": "53.517L-113.319",
    "name": "Sherwood Park",
    "lat": 53.51684,
    "lng": -113.3187,
    "countryCode": "CA",
    "population": 55063
  },
  {
    "id": "53.633L-113.635",
    "name": "St. Albert",
    "lat": 53.63344,
    "lng": -113.63533,
    "countryCode": "CA",
    "population": 57719
  },
  {
    "id": "43.171L-79.243",
    "name": "St. Catharines",
    "lat": 43.17126,
    "lng": -79.24267,
    "countryCode": "CA",
    "population": 131989
  },
  {
    "id": "49.106L-122.825",
    "name": "Surrey",
    "lat": 49.10635,
    "lng": -122.82509,
    "countryCode": "CA",
    "population": 394976
  },
  {
    "id": "45.700L-73.647",
    "name": "Terrebonne",
    "lat": 45.70004,
    "lng": -73.64732,
    "countryCode": "CA",
    "population": 94703
  },
  {
    "id": "48.382L-89.250",
    "name": "Thunder Bay",
    "lat": 48.38202,
    "lng": -89.25018,
    "countryCode": "CA",
    "population": 99334
  },
  {
    "id": "43.700L-79.416",
    "name": "Toronto",
    "lat": 43.70011,
    "lng": -79.4163,
    "countryCode": "CA",
    "population": 2600000
  },
  {
    "id": "46.345L-72.548",
    "name": "Trois-Rivières",
    "lat": 46.34515,
    "lng": -72.5477,
    "countryCode": "CA",
    "population": 119693
  },
  {
    "id": "49.250L-123.119",
    "name": "Vancouver",
    "lat": 49.24966,
    "lng": -123.11934,
    "countryCode": "CA",
    "population": 600000
  },
  {
    "id": "43.836L-79.498",
    "name": "Vaughan",
    "lat": 43.8361,
    "lng": -79.49827,
    "countryCode": "CA",
    "population": 238866
  },
  {
    "id": "48.433L-123.369",
    "name": "Victoria",
    "lat": 48.43294,
    "lng": -123.3693,
    "countryCode": "CA",
    "population": 289625
  },
  {
    "id": "43.467L-80.516",
    "name": "Waterloo",
    "lat": 43.4668,
    "lng": -80.51639,
    "countryCode": "CA",
    "population": 97475
  },
  {
    "id": "42.983L-79.250",
    "name": "Welland",
    "lat": 42.98342,
    "lng": -79.24958,
    "countryCode": "CA",
    "population": 50331
  },
  {
    "id": "49.016L-122.803",
    "name": "White Rock",
    "lat": 49.01636,
    "lng": -122.8026,
    "countryCode": "CA",
    "population": 66450
  },
  {
    "id": "42.300L-83.017",
    "name": "Windsor",
    "lat": 42.30008,
    "lng": -83.01654,
    "countryCode": "CA",
    "population": 278013
  },
  {
    "id": "49.884L-97.147",
    "name": "Winnipeg",
    "lat": 49.8844,
    "lng": -97.14704,
    "countryCode": "CA",
    "population": 632063
  },
  {
    "id": "44.645L-63.572",
    "name": "Halifax",
    "lat": 44.64533,
    "lng": -63.57239,
    "countryCode": "CA",
    "population": 359111
  },
  {
    "id": "47.565L-52.709",
    "name": "St. John's",
    "lat": 47.56494,
    "lng": -52.70931,
    "countryCode": "CA",
    "population": 99182
  },
  {
    "id": "46.812L-71.215",
    "name": "Québec",
    "lat": 46.81228,
    "lng": -71.21454,
    "countryCode": "CA",
    "population": 528595
  },
  {
    "id": "46.803L-71.178",
    "name": "Lévis",
    "lat": 46.80326,
    "lng": -71.17793,
    "countryCode": "CA",
    "population": 126396
  },
  {
    "id": "46.135L-60.183",
    "name": "Sydney",
    "lat": 46.1351,
    "lng": -60.1831,
    "countryCode": "CA",
    "population": 105968
  },
  {
    "id": "43.772L-79.257",
    "name": "Scarborough",
    "lat": 43.77223,
    "lng": -79.25666,
    "countryCode": "CA",
    "population": 600000
  },
  {
    "id": "50.364L-119.350",
    "name": "Okanagan",
    "lat": 50.36386,
    "lng": -119.34997,
    "countryCode": "CA",
    "population": 297601
  },
  {
    "id": "48.416L-71.249",
    "name": "Jonquière",
    "lat": 48.41648,
    "lng": -71.24884,
    "countryCode": "CA",
    "population": 54842
  },
  {
    "id": "49.089L-123.082",
    "name": "Ladner",
    "lat": 49.08938,
    "lng": -123.08241,
    "countryCode": "CA",
    "population": 200000
  },
  {
    "id": "43.691L-79.328",
    "name": "East York",
    "lat": 43.69053,
    "lng": -79.32794,
    "countryCode": "CA",
    "population": 115365
  },
  {
    "id": "43.767L-79.399",
    "name": "Willowdale",
    "lat": 43.76672,
    "lng": -79.39909,
    "countryCode": "CA",
    "population": 79440
  },
  {
    "id": "35.175L33.364",
    "name": "Nicosia",
    "lat": 35.17531,
    "lng": 33.3642,
    "countryCode": "CY",
    "population": 200452
  },
  {
    "id": "34.684L33.038",
    "name": "Limassol",
    "lat": 34.68406,
    "lng": 33.03794,
    "countryCode": "CY",
    "population": 154000
  },
  {
    "id": "34.923L33.623",
    "name": "Larnaca",
    "lat": 34.92291,
    "lng": 33.6233,
    "countryCode": "CY",
    "population": 72000
  },
  {
    "id": "49.226L17.671",
    "name": "Zlín",
    "lat": 49.22645,
    "lng": 17.67065,
    "countryCode": "CZ",
    "population": 78759
  },
  {
    "id": "50.661L14.032",
    "name": "Ústí nad Labem",
    "lat": 50.6607,
    "lng": 14.03227,
    "countryCode": "CZ",
    "population": 94105
  },
  {
    "id": "50.640L13.825",
    "name": "Teplice",
    "lat": 50.6404,
    "lng": 13.82451,
    "countryCode": "CZ",
    "population": 51223
  },
  {
    "id": "50.088L14.421",
    "name": "Prague",
    "lat": 50.08804,
    "lng": 14.42076,
    "countryCode": "CZ",
    "population": 1165581
  },
  {
    "id": "49.747L13.378",
    "name": "Pilsen",
    "lat": 49.74747,
    "lng": 13.37759,
    "countryCode": "CZ",
    "population": 164180
  },
  {
    "id": "50.041L15.777",
    "name": "Pardubice",
    "lat": 50.04075,
    "lng": 15.77659,
    "countryCode": "CZ",
    "population": 88741
  },
  {
    "id": "49.835L18.282",
    "name": "Ostrava",
    "lat": 49.83465,
    "lng": 18.28204,
    "countryCode": "CZ",
    "population": 313088
  },
  {
    "id": "49.939L17.903",
    "name": "Opava",
    "lat": 49.93866,
    "lng": 17.90257,
    "countryCode": "CZ",
    "population": 60252
  },
  {
    "id": "49.596L17.252",
    "name": "Olomouc",
    "lat": 49.59552,
    "lng": 17.25175,
    "countryCode": "CZ",
    "population": 101268
  },
  {
    "id": "50.503L13.636",
    "name": "Most",
    "lat": 50.50301,
    "lng": 13.63617,
    "countryCode": "CZ",
    "population": 67905
  },
  {
    "id": "50.767L15.056",
    "name": "Liberec",
    "lat": 50.76711,
    "lng": 15.05619,
    "countryCode": "CZ",
    "population": 97770
  },
  {
    "id": "50.147L14.103",
    "name": "Kladno",
    "lat": 50.14734,
    "lng": 14.10285,
    "countryCode": "CZ",
    "population": 70003
  },
  {
    "id": "49.854L18.542",
    "name": "Karviná",
    "lat": 49.854,
    "lng": 18.54169,
    "countryCode": "CZ",
    "population": 63677
  },
  {
    "id": "50.233L12.871",
    "name": "Karlovy Vary",
    "lat": 50.23271,
    "lng": 12.87117,
    "countryCode": "CZ",
    "population": 51807
  },
  {
    "id": "49.396L15.591",
    "name": "Jihlava",
    "lat": 49.3961,
    "lng": 15.59124,
    "countryCode": "CZ",
    "population": 50100
  },
  {
    "id": "50.209L15.833",
    "name": "Hradec Králové",
    "lat": 50.20923,
    "lng": 15.83277,
    "countryCode": "CZ",
    "population": 95195
  },
  {
    "id": "49.780L18.437",
    "name": "Havířov",
    "lat": 49.77984,
    "lng": 18.43688,
    "countryCode": "CZ",
    "population": 82768
  },
  {
    "id": "49.683L18.350",
    "name": "Frýdek-Místek",
    "lat": 49.68333,
    "lng": 18.35,
    "countryCode": "CZ",
    "population": 59416
  },
  {
    "id": "50.782L14.215",
    "name": "Děčín",
    "lat": 50.78215,
    "lng": 14.21478,
    "countryCode": "CZ",
    "population": 52058
  },
  {
    "id": "50.460L13.418",
    "name": "Chomutov",
    "lat": 50.46048,
    "lng": 13.41779,
    "countryCode": "CZ",
    "population": 50251
  },
  {
    "id": "48.974L14.474",
    "name": "České Budějovice",
    "lat": 48.97447,
    "lng": 14.47434,
    "countryCode": "CZ",
    "population": 96053
  },
  {
    "id": "49.195L16.608",
    "name": "Brno",
    "lat": 49.19522,
    "lng": 16.60796,
    "countryCode": "CZ",
    "population": 369559
  },
  {
    "id": "50.727L12.488",
    "name": "Zwickau",
    "lat": 50.72724,
    "lng": 12.48839,
    "countryCode": "DE",
    "population": 98796
  },
  {
    "id": "52.433L13.250",
    "name": "Zehlendorf",
    "lat": 52.43333,
    "lng": 13.25,
    "countryCode": "DE",
    "population": 58469
  },
  {
    "id": "49.794L9.951",
    "name": "Würzburg",
    "lat": 49.79391,
    "lng": 9.95121,
    "countryCode": "DE",
    "population": 133731
  },
  {
    "id": "51.270L7.168",
    "name": "Wuppertal",
    "lat": 51.27027,
    "lng": 7.16755,
    "countryCode": "DE",
    "population": 360797
  },
  {
    "id": "49.633L8.359",
    "name": "Worms",
    "lat": 49.63278,
    "lng": 8.35916,
    "countryCode": "DE",
    "population": 81099
  },
  {
    "id": "52.425L10.781",
    "name": "Wolfsburg",
    "lat": 52.42452,
    "lng": 10.7815,
    "countryCode": "DE",
    "population": 123064
  },
  {
    "id": "52.164L10.541",
    "name": "Wolfenbüttel",
    "lat": 52.16442,
    "lng": 10.54095,
    "countryCode": "DE",
    "population": 54740
  },
  {
    "id": "51.444L7.353",
    "name": "Witten",
    "lat": 51.44362,
    "lng": 7.35258,
    "countryCode": "DE",
    "population": 101247
  },
  {
    "id": "53.600L10.000",
    "name": "Winterhude",
    "lat": 53.6,
    "lng": 10,
    "countryCode": "DE",
    "population": 51297
  },
  {
    "id": "52.483L13.317",
    "name": "Wilmersdorf",
    "lat": 52.48333,
    "lng": 13.31667,
    "countryCode": "DE",
    "population": 94113
  },
  {
    "id": "51.264L6.547",
    "name": "Willich",
    "lat": 51.26371,
    "lng": 6.54734,
    "countryCode": "DE",
    "population": 51843
  },
  {
    "id": "53.530L8.113",
    "name": "Wilhelmshaven",
    "lat": 53.52998,
    "lng": 8.11253,
    "countryCode": "DE",
    "population": 84393
  },
  {
    "id": "50.083L8.249",
    "name": "Wiesbaden",
    "lat": 50.08258,
    "lng": 8.24932,
    "countryCode": "DE",
    "population": 272432
  },
  {
    "id": "50.561L8.505",
    "name": "Wetzlar",
    "lat": 50.56109,
    "lng": 8.50495,
    "countryCode": "DE",
    "population": 52656
  },
  {
    "id": "51.667L6.620",
    "name": "Wesel",
    "lat": 51.6669,
    "lng": 6.62037,
    "countryCode": "DE",
    "population": 61685
  },
  {
    "id": "50.980L11.329",
    "name": "Weimar",
    "lat": 50.9803,
    "lng": 11.32903,
    "countryCode": "DE",
    "population": 64727
  },
  {
    "id": "52.547L13.356",
    "name": "Wedding",
    "lat": 52.54734,
    "lng": 13.35594,
    "countryCode": "DE",
    "population": 78290
  },
  {
    "id": "48.832L9.316",
    "name": "Waiblingen",
    "lat": 48.83241,
    "lng": 9.31641,
    "countryCode": "DE",
    "population": 52945
  },
  {
    "id": "48.062L8.494",
    "name": "Villingen-Schwenningen",
    "lat": 48.06226,
    "lng": 8.49358,
    "countryCode": "DE",
    "population": 81770
  },
  {
    "id": "51.254L6.394",
    "name": "Viersen",
    "lat": 51.25435,
    "lng": 6.39441,
    "countryCode": "DE",
    "population": 76153
  },
  {
    "id": "51.335L7.043",
    "name": "Velbert",
    "lat": 51.33537,
    "lng": 7.04348,
    "countryCode": "DE",
    "population": 87669
  },
  {
    "id": "51.538L7.690",
    "name": "Unna",
    "lat": 51.53795,
    "lng": 7.68969,
    "countryCode": "DE",
    "population": 66734
  },
  {
    "id": "48.398L9.992",
    "name": "Ulm",
    "lat": 48.39841,
    "lng": 9.99155,
    "countryCode": "DE",
    "population": 120451
  },
  {
    "id": "48.523L9.052",
    "name": "Tübingen",
    "lat": 48.52266,
    "lng": 9.05222,
    "countryCode": "DE",
    "population": 83416
  },
  {
    "id": "50.809L7.150",
    "name": "Troisdorf",
    "lat": 50.80901,
    "lng": 7.14968,
    "countryCode": "DE",
    "population": 74749
  },
  {
    "id": "49.756L6.639",
    "name": "Trier",
    "lat": 49.75565,
    "lng": 6.63935,
    "countryCode": "DE",
    "population": 100129
  },
  {
    "id": "52.467L13.400",
    "name": "Tempelhof",
    "lat": 52.46667,
    "lng": 13.4,
    "countryCode": "DE",
    "population": 56669
  },
  {
    "id": "48.782L9.177",
    "name": "Stuttgart",
    "lat": 48.78232,
    "lng": 9.17702,
    "countryCode": "DE",
    "population": 589793
  },
  {
    "id": "54.309L13.082",
    "name": "Stralsund",
    "lat": 54.30911,
    "lng": 13.0818,
    "countryCode": "DE",
    "population": 58976
  },
  {
    "id": "50.774L6.226",
    "name": "Stolberg",
    "lat": 50.77368,
    "lng": 6.22595,
    "countryCode": "DE",
    "population": 58874
  },
  {
    "id": "52.456L13.332",
    "name": "Steglitz",
    "lat": 52.45606,
    "lng": 13.332,
    "countryCode": "DE",
    "population": 72464
  },
  {
    "id": "49.321L8.431",
    "name": "Speyer",
    "lat": 49.32083,
    "lng": 8.43111,
    "countryCode": "DE",
    "population": 50343
  },
  {
    "id": "51.173L7.085",
    "name": "Solingen",
    "lat": 51.17343,
    "lng": 7.0845,
    "countryCode": "DE",
    "population": 164359
  },
  {
    "id": "48.700L9.017",
    "name": "Sindelfingen",
    "lat": 48.7,
    "lng": 9.01667,
    "countryCode": "DE",
    "population": 61311
  },
  {
    "id": "50.875L8.024",
    "name": "Siegen",
    "lat": 50.87481,
    "lng": 8.02431,
    "countryCode": "DE",
    "population": 107242
  },
  {
    "id": "51.444L7.567",
    "name": "Schwerte",
    "lat": 51.44387,
    "lng": 7.5675,
    "countryCode": "DE",
    "population": 50399
  },
  {
    "id": "53.629L11.413",
    "name": "Schwerin",
    "lat": 53.62937,
    "lng": 11.41316,
    "countryCode": "DE",
    "population": 96641
  },
  {
    "id": "50.049L10.222",
    "name": "Schweinfurt",
    "lat": 50.04937,
    "lng": 10.22175,
    "countryCode": "DE",
    "population": 54012
  },
  {
    "id": "48.799L9.798",
    "name": "Schwäbisch Gmünd",
    "lat": 48.79947,
    "lng": 9.79809,
    "countryCode": "DE",
    "population": 61338
  },
  {
    "id": "52.467L13.350",
    "name": "Schöneberg",
    "lat": 52.46667,
    "lng": 13.35,
    "countryCode": "DE",
    "population": 115976
  },
  {
    "id": "50.775L7.197",
    "name": "Sankt Augustin",
    "lat": 50.77538,
    "lng": 7.197,
    "countryCode": "DE",
    "population": 56094
  },
  {
    "id": "49.233L7.010",
    "name": "Saarbrücken",
    "lat": 49.23262,
    "lng": 7.00982,
    "countryCode": "DE",
    "population": 181227
  },
  {
    "id": "49.990L8.423",
    "name": "Rüsselsheim",
    "lat": 49.98955,
    "lng": 8.42251,
    "countryCode": "DE",
    "population": 59730
  },
  {
    "id": "54.089L12.140",
    "name": "Rostock",
    "lat": 54.0887,
    "lng": 12.14049,
    "countryCode": "DE",
    "population": 198293
  },
  {
    "id": "47.856L12.122",
    "name": "Rosenheim",
    "lat": 47.85637,
    "lng": 12.12247,
    "countryCode": "DE",
    "population": 60167
  },
  {
    "id": "52.285L7.441",
    "name": "Rheine",
    "lat": 52.28509,
    "lng": 7.44055,
    "countryCode": "DE",
    "population": 76491
  },
  {
    "id": "48.491L9.204",
    "name": "Reutlingen",
    "lat": 48.49144,
    "lng": 9.20427,
    "countryCode": "DE",
    "population": 112627
  },
  {
    "id": "51.180L7.192",
    "name": "Remscheid",
    "lat": 51.17983,
    "lng": 7.1925,
    "countryCode": "DE",
    "population": 117118
  },
  {
    "id": "52.567L13.333",
    "name": "Reinickendorf",
    "lat": 52.56667,
    "lng": 13.33333,
    "countryCode": "DE",
    "population": 75414
  },
  {
    "id": "49.015L12.102",
    "name": "Regensburg",
    "lat": 49.01513,
    "lng": 12.10161,
    "countryCode": "DE",
    "population": 129151
  },
  {
    "id": "51.614L7.197",
    "name": "Recklinghausen",
    "lat": 51.61379,
    "lng": 7.19738,
    "countryCode": "DE",
    "population": 122438
  },
  {
    "id": "51.297L6.849",
    "name": "Ratingen",
    "lat": 51.29724,
    "lng": 6.84929,
    "countryCode": "DE",
    "population": 91606
  },
  {
    "id": "51.000L6.806",
    "name": "Pulheim",
    "lat": 50.99965,
    "lng": 6.80632,
    "countryCode": "DE",
    "population": 53762
  },
  {
    "id": "52.539L13.424",
    "name": "Prenzlauer Berg",
    "lat": 52.53878,
    "lng": 13.42443,
    "countryCode": "DE",
    "population": 148878
  },
  {
    "id": "52.399L13.066",
    "name": "Potsdam",
    "lat": 52.39886,
    "lng": 13.06566,
    "countryCode": "DE",
    "population": 145292
  },
  {
    "id": "50.497L12.138",
    "name": "Plauen",
    "lat": 50.4973,
    "lng": 12.13782,
    "countryCode": "DE",
    "population": 66412
  },
  {
    "id": "48.884L8.699",
    "name": "Pforzheim",
    "lat": 48.88436,
    "lng": 8.69892,
    "countryCode": "DE",
    "population": 119313
  },
  {
    "id": "48.566L13.431",
    "name": "Passau",
    "lat": 48.5665,
    "lng": 13.43122,
    "countryCode": "DE",
    "population": 50560
  },
  {
    "id": "52.569L13.402",
    "name": "Pankow",
    "lat": 52.56926,
    "lng": 13.40186,
    "countryCode": "DE",
    "population": 57113
  },
  {
    "id": "51.719L8.754",
    "name": "Paderborn",
    "lat": 51.71905,
    "lng": 8.75439,
    "countryCode": "DE",
    "population": 142161
  },
  {
    "id": "52.273L8.050",
    "name": "Osnabrück",
    "lat": 52.27264,
    "lng": 8.0498,
    "countryCode": "DE",
    "population": 166462
  },
  {
    "id": "53.141L8.215",
    "name": "Oldenburg",
    "lat": 53.14118,
    "lng": 8.21467,
    "countryCode": "DE",
    "population": 159218
  },
  {
    "id": "48.474L7.945",
    "name": "Offenburg",
    "lat": 48.47377,
    "lng": 7.94495,
    "countryCode": "DE",
    "population": 59238
  },
  {
    "id": "50.101L8.766",
    "name": "Offenbach",
    "lat": 50.10061,
    "lng": 8.76647,
    "countryCode": "DE",
    "population": 119192
  },
  {
    "id": "51.478L6.862",
    "name": "Oberhausen",
    "lat": 51.47805,
    "lng": 6.8625,
    "countryCode": "DE",
    "population": 219176
  },
  {
    "id": "49.454L11.078",
    "name": "Nürnberg",
    "lat": 49.45421,
    "lng": 11.07752,
    "countryCode": "DE",
    "population": 499237
  },
  {
    "id": "52.431L7.068",
    "name": "Nordhorn",
    "lat": 52.43081,
    "lng": 7.06833,
    "countryCode": "DE",
    "population": 52803
  },
  {
    "id": "53.686L9.980",
    "name": "Norderstedt",
    "lat": 53.6859,
    "lng": 9.98041,
    "countryCode": "DE",
    "population": 71439
  },
  {
    "id": "50.965L6.953",
    "name": "Nippes",
    "lat": 50.96545,
    "lng": 6.95314,
    "countryCode": "DE",
    "population": 113487
  },
  {
    "id": "50.434L7.471",
    "name": "Neuwied",
    "lat": 50.4336,
    "lng": 7.47057,
    "countryCode": "DE",
    "population": 66805
  },
  {
    "id": "48.393L10.011",
    "name": "Neu-Ulm",
    "lat": 48.39279,
    "lng": 10.01112,
    "countryCode": "DE",
    "population": 51389
  },
  {
    "id": "49.350L8.139",
    "name": "Neustadt",
    "lat": 49.35009,
    "lng": 8.13886,
    "countryCode": "DE",
    "population": 53984
  },
  {
    "id": "52.150L11.633",
    "name": "Neue Neustadt",
    "lat": 52.15,
    "lng": 11.63333,
    "countryCode": "DE",
    "population": 226851
  },
  {
    "id": "51.198L6.685",
    "name": "Neuss",
    "lat": 51.19807,
    "lng": 6.68504,
    "countryCode": "DE",
    "population": 152457
  },
  {
    "id": "54.075L9.982",
    "name": "Neumünster",
    "lat": 54.07477,
    "lng": 9.98195,
    "countryCode": "DE",
    "population": 78383
  },
  {
    "id": "51.134L6.639",
    "name": "Neubrück",
    "lat": 51.13434,
    "lng": 6.63857,
    "countryCode": "DE",
    "population": 51109
  },
  {
    "id": "53.564L13.275",
    "name": "Neubrandenburg",
    "lat": 53.56414,
    "lng": 13.27532,
    "countryCode": "DE",
    "population": 68082
  },
  {
    "id": "51.962L7.626",
    "name": "Münster",
    "lat": 51.96236,
    "lng": 7.62571,
    "countryCode": "DE",
    "population": 270184
  },
  {
    "id": "48.137L11.575",
    "name": "Munich",
    "lat": 48.13743,
    "lng": 11.57549,
    "countryCode": "DE",
    "population": 1260391
  },
  {
    "id": "51.432L6.880",
    "name": "Mülheim",
    "lat": 51.43218,
    "lng": 6.87967,
    "countryCode": "DE",
    "population": 171000
  },
  {
    "id": "51.185L6.442",
    "name": "Mönchengladbach",
    "lat": 51.18539,
    "lng": 6.44172,
    "countryCode": "DE",
    "population": 261742
  },
  {
    "id": "51.453L6.633",
    "name": "Moers",
    "lat": 51.45342,
    "lng": 6.6326,
    "countryCode": "DE",
    "population": 107816
  },
  {
    "id": "52.526L13.339",
    "name": "Moabit",
    "lat": 52.52635,
    "lng": 13.33903,
    "countryCode": "DE",
    "population": 70911
  },
  {
    "id": "52.290L8.915",
    "name": "Minden",
    "lat": 52.28953,
    "lng": 8.91455,
    "countryCode": "DE",
    "population": 82879
  },
  {
    "id": "51.443L7.778",
    "name": "Menden",
    "lat": 51.44337,
    "lng": 7.77825,
    "countryCode": "DE",
    "population": 58451
  },
  {
    "id": "51.261L6.672",
    "name": "Meerbusch",
    "lat": 51.26118,
    "lng": 6.6717,
    "countryCode": "DE",
    "population": 54826
  },
  {
    "id": "52.545L13.570",
    "name": "Marzahn",
    "lat": 52.54525,
    "lng": 13.56983,
    "countryCode": "DE",
    "population": 103768
  },
  {
    "id": "51.657L7.090",
    "name": "Marl",
    "lat": 51.65671,
    "lng": 7.09038,
    "countryCode": "DE",
    "population": 91398
  },
  {
    "id": "50.809L8.771",
    "name": "Marburg an der Lahn",
    "lat": 50.80904,
    "lng": 8.77069,
    "countryCode": "DE",
    "population": 78895
  },
  {
    "id": "49.489L8.467",
    "name": "Mannheim",
    "lat": 49.4891,
    "lng": 8.46694,
    "countryCode": "DE",
    "population": 307960
  },
  {
    "id": "49.984L8.279",
    "name": "Mainz",
    "lat": 49.98419,
    "lng": 8.2791,
    "countryCode": "DE",
    "population": 184997
  },
  {
    "id": "52.128L11.629",
    "name": "Magdeburg",
    "lat": 52.12773,
    "lng": 11.62916,
    "countryCode": "DE",
    "population": 229826
  },
  {
    "id": "51.616L7.529",
    "name": "Lünen",
    "lat": 51.61634,
    "lng": 7.52872,
    "countryCode": "DE",
    "population": 91009
  },
  {
    "id": "53.251L10.414",
    "name": "Lüneburg",
    "lat": 53.2509,
    "lng": 10.41409,
    "countryCode": "DE",
    "population": 71260
  },
  {
    "id": "49.481L8.446",
    "name": "Ludwigshafen am Rhein",
    "lat": 49.48121,
    "lng": 8.44641,
    "countryCode": "DE",
    "population": 163196
  },
  {
    "id": "48.897L9.192",
    "name": "Ludwigsburg",
    "lat": 48.89731,
    "lng": 9.19161,
    "countryCode": "DE",
    "population": 87603
  },
  {
    "id": "51.220L7.627",
    "name": "Lüdenscheid",
    "lat": 51.21977,
    "lng": 7.6273,
    "countryCode": "DE",
    "population": 79386
  },
  {
    "id": "53.869L10.687",
    "name": "Lübeck",
    "lat": 53.86893,
    "lng": 10.68729,
    "countryCode": "DE",
    "population": 212207
  },
  {
    "id": "51.674L8.345",
    "name": "Lippstadt",
    "lat": 51.67369,
    "lng": 8.34482,
    "countryCode": "DE",
    "population": 67219
  },
  {
    "id": "52.521L7.318",
    "name": "Lingen",
    "lat": 52.52143,
    "lng": 7.31845,
    "countryCode": "DE",
    "population": 51310
  },
  {
    "id": "52.433L13.308",
    "name": "Lichterfelde",
    "lat": 52.4333,
    "lng": 13.30762,
    "countryCode": "DE",
    "population": 80149
  },
  {
    "id": "51.030L6.984",
    "name": "Leverkusen",
    "lat": 51.0303,
    "lng": 6.98432,
    "countryCode": "DE",
    "population": 162738
  },
  {
    "id": "51.340L12.371",
    "name": "Leipzig",
    "lat": 51.33962,
    "lng": 12.37129,
    "countryCode": "DE",
    "population": 504971
  },
  {
    "id": "52.448L9.737",
    "name": "Langenhagen",
    "lat": 52.44758,
    "lng": 9.73741,
    "countryCode": "DE",
    "population": 50439
  },
  {
    "id": "51.108L6.948",
    "name": "Langenfeld",
    "lat": 51.10821,
    "lng": 6.94831,
    "countryCode": "DE",
    "population": 59378
  },
  {
    "id": "48.530L12.162",
    "name": "Landshut",
    "lat": 48.52961,
    "lng": 12.16179,
    "countryCode": "DE",
    "population": 60488
  },
  {
    "id": "52.500L13.403",
    "name": "Kreuzberg",
    "lat": 52.49973,
    "lng": 13.40338,
    "countryCode": "DE",
    "population": 147532
  },
  {
    "id": "51.336L6.554",
    "name": "Krefeld",
    "lat": 51.33645,
    "lng": 6.55381,
    "countryCode": "DE",
    "population": 237984
  },
  {
    "id": "52.446L13.575",
    "name": "Köpenick",
    "lat": 52.4455,
    "lng": 13.57455,
    "countryCode": "DE",
    "population": 60128
  },
  {
    "id": "52.443L13.582",
    "name": "Berlin Köpenick",
    "lat": 52.44254,
    "lng": 13.58228,
    "countryCode": "DE",
    "population": 59561
  },
  {
    "id": "47.660L9.176",
    "name": "Konstanz",
    "lat": 47.66033,
    "lng": 9.17582,
    "countryCode": "DE",
    "population": 81275
  },
  {
    "id": "50.933L6.950",
    "name": "Köln",
    "lat": 50.93333,
    "lng": 6.95,
    "countryCode": "DE",
    "population": 963395
  },
  {
    "id": "50.354L7.579",
    "name": "Koblenz",
    "lat": 50.35357,
    "lng": 7.57883,
    "countryCode": "DE",
    "population": 107319
  },
  {
    "id": "54.321L10.135",
    "name": "Kiel",
    "lat": 54.32133,
    "lng": 10.13489,
    "countryCode": "DE",
    "population": 232758
  },
  {
    "id": "50.870L6.697",
    "name": "Kerpen",
    "lat": 50.86991,
    "lng": 6.69691,
    "countryCode": "DE",
    "population": 64226
  },
  {
    "id": "47.727L10.314",
    "name": "Kempten (Allgäu)",
    "lat": 47.72674,
    "lng": 10.31389,
    "countryCode": "DE",
    "population": 61399
  },
  {
    "id": "51.317L9.500",
    "name": "Kassel",
    "lat": 51.31667,
    "lng": 9.5,
    "countryCode": "DE",
    "population": 194501
  },
  {
    "id": "49.009L8.404",
    "name": "Karlsruhe",
    "lat": 49.00937,
    "lng": 8.40444,
    "countryCode": "DE",
    "population": 283799
  },
  {
    "id": "49.443L7.772",
    "name": "Kaiserslautern",
    "lat": 49.443,
    "lng": 7.77161,
    "countryCode": "DE",
    "population": 98732
  },
  {
    "id": "50.929L11.590",
    "name": "Jena",
    "lat": 50.92878,
    "lng": 11.5899,
    "countryCode": "DE",
    "population": 104712
  },
  {
    "id": "51.375L7.703",
    "name": "Iserlohn",
    "lat": 51.37547,
    "lng": 7.70281,
    "countryCode": "DE",
    "population": 97910
  },
  {
    "id": "48.765L11.424",
    "name": "Ingolstadt",
    "lat": 48.76508,
    "lng": 11.42372,
    "countryCode": "DE",
    "population": 120658
  },
  {
    "id": "52.280L7.715",
    "name": "Ibbenbüren",
    "lat": 52.27964,
    "lng": 7.71457,
    "countryCode": "DE",
    "population": 50577
  },
  {
    "id": "50.871L6.868",
    "name": "Hürth",
    "lat": 50.87079,
    "lng": 6.86761,
    "countryCode": "DE",
    "population": 54678
  },
  {
    "id": "52.151L9.951",
    "name": "Hildesheim",
    "lat": 52.15077,
    "lng": 9.95112,
    "countryCode": "DE",
    "population": 103052
  },
  {
    "id": "51.168L6.931",
    "name": "Hilden",
    "lat": 51.16818,
    "lng": 6.93093,
    "countryCode": "DE",
    "population": 56565
  },
  {
    "id": "51.596L7.144",
    "name": "Herten",
    "lat": 51.59638,
    "lng": 7.14387,
    "countryCode": "DE",
    "population": 65306
  },
  {
    "id": "51.539L7.226",
    "name": "Herne",
    "lat": 51.5388,
    "lng": 7.22572,
    "countryCode": "DE",
    "population": 172108
  },
  {
    "id": "52.115L8.673",
    "name": "Herford",
    "lat": 52.11457,
    "lng": 8.67343,
    "countryCode": "DE",
    "population": 64879
  },
  {
    "id": "52.533L13.609",
    "name": "Hellersdorf",
    "lat": 52.53319,
    "lng": 13.6088,
    "countryCode": "DE",
    "population": 74847
  },
  {
    "id": "49.140L9.221",
    "name": "Heilbronn",
    "lat": 49.13995,
    "lng": 9.22054,
    "countryCode": "DE",
    "population": 120733
  },
  {
    "id": "48.678L10.152",
    "name": "Heidenheim an der Brenz",
    "lat": 48.67798,
    "lng": 10.15162,
    "countryCode": "DE",
    "population": 50067
  },
  {
    "id": "49.408L8.691",
    "name": "Heidelberg",
    "lat": 49.40768,
    "lng": 8.69079,
    "countryCode": "DE",
    "population": 143345
  },
  {
    "id": "51.399L7.186",
    "name": "Hattingen",
    "lat": 51.39894,
    "lng": 7.18557,
    "countryCode": "DE",
    "population": 56866
  },
  {
    "id": "53.461L9.984",
    "name": "Harburg",
    "lat": 53.46057,
    "lng": 9.98388,
    "countryCode": "DE",
    "population": 202571
  },
  {
    "id": "52.371L9.733",
    "name": "Hannover",
    "lat": 52.37052,
    "lng": 9.73322,
    "countryCode": "DE",
    "population": 515140
  },
  {
    "id": "50.134L8.914",
    "name": "Hanau am Main",
    "lat": 50.13423,
    "lng": 8.91418,
    "countryCode": "DE",
    "population": 88648
  },
  {
    "id": "51.680L7.821",
    "name": "Hamm",
    "lat": 51.68033,
    "lng": 7.82089,
    "countryCode": "DE",
    "population": 185327
  },
  {
    "id": "52.104L9.356",
    "name": "Hameln",
    "lat": 52.10397,
    "lng": 9.35623,
    "countryCode": "DE",
    "population": 58666
  },
  {
    "id": "53.583L10.083",
    "name": "Wandsbek",
    "lat": 53.58334,
    "lng": 10.08305,
    "countryCode": "DE",
    "population": 411422
  },
  {
    "id": "53.567L10.083",
    "name": "Marienthal",
    "lat": 53.56667,
    "lng": 10.08333,
    "countryCode": "DE",
    "population": 287101
  },
  {
    "id": "53.550L10.017",
    "name": "Hamburg-Mitte",
    "lat": 53.55,
    "lng": 10.01667,
    "countryCode": "DE",
    "population": 233144
  },
  {
    "id": "53.567L9.983",
    "name": "Eimsbüttel",
    "lat": 53.56667,
    "lng": 9.98333,
    "countryCode": "DE",
    "population": 251907
  },
  {
    "id": "53.550L9.933",
    "name": "Altona",
    "lat": 53.55,
    "lng": 9.93333,
    "countryCode": "DE",
    "population": 250192
  },
  {
    "id": "53.575L10.015",
    "name": "Hamburg",
    "lat": 53.57532,
    "lng": 10.01534,
    "countryCode": "DE",
    "population": 1739117
  },
  {
    "id": "51.482L11.979",
    "name": "Halle (Saale)",
    "lat": 51.48158,
    "lng": 11.97947,
    "countryCode": "DE",
    "population": 234107
  },
  {
    "id": "51.361L7.472",
    "name": "Hagen",
    "lat": 51.36081,
    "lng": 7.47168,
    "countryCode": "DE",
    "population": 198972
  },
  {
    "id": "51.907L8.379",
    "name": "Gütersloh",
    "lat": 51.90693,
    "lng": 8.37853,
    "countryCode": "DE",
    "population": 96180
  },
  {
    "id": "51.026L7.565",
    "name": "Gummersbach",
    "lat": 51.02608,
    "lng": 7.56473,
    "countryCode": "DE",
    "population": 53131
  },
  {
    "id": "51.091L6.583",
    "name": "Grevenbroich",
    "lat": 51.09102,
    "lng": 6.5827,
    "countryCode": "DE",
    "population": 64779
  },
  {
    "id": "54.093L13.388",
    "name": "Greifswald",
    "lat": 54.09311,
    "lng": 13.38786,
    "countryCode": "DE",
    "population": 52731
  },
  {
    "id": "51.534L9.932",
    "name": "Göttingen",
    "lat": 51.53443,
    "lng": 9.93228,
    "countryCode": "DE",
    "population": 122149
  },
  {
    "id": "51.155L14.989",
    "name": "Görlitz",
    "lat": 51.15518,
    "lng": 14.98853,
    "countryCode": "DE",
    "population": 57751
  },
  {
    "id": "48.704L9.652",
    "name": "Göppingen",
    "lat": 48.70354,
    "lng": 9.65209,
    "countryCode": "DE",
    "population": 58040
  },
  {
    "id": "51.571L6.986",
    "name": "Gladbeck",
    "lat": 51.57077,
    "lng": 6.98593,
    "countryCode": "DE",
    "population": 76940
  },
  {
    "id": "50.587L8.676",
    "name": "Gießen",
    "lat": 50.58727,
    "lng": 8.67554,
    "countryCode": "DE",
    "population": 74411
  },
  {
    "id": "52.550L13.391",
    "name": "Gesundbrunnen",
    "lat": 52.55035,
    "lng": 13.39139,
    "countryCode": "DE",
    "population": 84789
  },
  {
    "id": "50.880L12.082",
    "name": "Gera",
    "lat": 50.88029,
    "lng": 12.08187,
    "countryCode": "DE",
    "population": 104659
  },
  {
    "id": "51.505L7.097",
    "name": "Gelsenkirchen",
    "lat": 51.50508,
    "lng": 7.09654,
    "countryCode": "DE",
    "population": 270028
  },
  {
    "id": "52.414L9.590",
    "name": "Garbsen",
    "lat": 52.41371,
    "lng": 9.5899,
    "countryCode": "DE",
    "population": 63355
  },
  {
    "id": "49.476L10.989",
    "name": "Fürth",
    "lat": 49.47593,
    "lng": 10.98856,
    "countryCode": "DE",
    "population": 112025
  },
  {
    "id": "50.552L9.675",
    "name": "Fulda",
    "lat": 50.55162,
    "lng": 9.67518,
    "countryCode": "DE",
    "population": 63760
  },
  {
    "id": "52.516L13.455",
    "name": "Friedrichshain",
    "lat": 52.51559,
    "lng": 13.45482,
    "countryCode": "DE",
    "population": 117829
  },
  {
    "id": "47.657L9.476",
    "name": "Friedrichshafen",
    "lat": 47.65689,
    "lng": 9.47554,
    "countryCode": "DE",
    "population": 58403
  },
  {
    "id": "47.996L7.852",
    "name": "Freiburg",
    "lat": 47.9959,
    "lng": 7.85222,
    "countryCode": "DE",
    "population": 215966
  },
  {
    "id": "50.116L8.684",
    "name": "Frankfurt am Main",
    "lat": 50.11552,
    "lng": 8.68417,
    "countryCode": "DE",
    "population": 650000
  },
  {
    "id": "52.347L14.551",
    "name": "Frankfurt (Oder)",
    "lat": 52.34714,
    "lng": 14.55062,
    "countryCode": "DE",
    "population": 51691
  },
  {
    "id": "54.784L9.440",
    "name": "Flensburg",
    "lat": 54.78431,
    "lng": 9.43961,
    "countryCode": "DE",
    "population": 85838
  },
  {
    "id": "50.661L6.787",
    "name": "Euskirchen",
    "lat": 50.66057,
    "lng": 6.78722,
    "countryCode": "DE",
    "population": 54889
  },
  {
    "id": "48.740L9.305",
    "name": "Esslingen",
    "lat": 48.73961,
    "lng": 9.30473,
    "countryCode": "DE",
    "population": 92390
  },
  {
    "id": "51.457L7.012",
    "name": "Essen",
    "lat": 51.45657,
    "lng": 7.01228,
    "countryCode": "DE",
    "population": 593085
  },
  {
    "id": "50.819L6.272",
    "name": "Eschweiler",
    "lat": 50.81854,
    "lng": 6.27184,
    "countryCode": "DE",
    "population": 55778
  },
  {
    "id": "49.591L11.008",
    "name": "Erlangen",
    "lat": 49.59099,
    "lng": 11.00783,
    "countryCode": "DE",
    "population": 102675
  },
  {
    "id": "50.979L11.033",
    "name": "Erfurt",
    "lat": 50.9787,
    "lng": 11.03283,
    "countryCode": "DE",
    "population": 203254
  },
  {
    "id": "50.815L6.794",
    "name": "Erftstadt",
    "lat": 50.81481,
    "lng": 6.79387,
    "countryCode": "DE",
    "population": 51207
  },
  {
    "id": "53.367L7.208",
    "name": "Emden",
    "lat": 53.36745,
    "lng": 7.20778,
    "countryCode": "DE",
    "population": 51526
  },
  {
    "id": "51.222L6.776",
    "name": "Düsseldorf",
    "lat": 51.22172,
    "lng": 6.77616,
    "countryCode": "DE",
    "population": 573057
  },
  {
    "id": "50.804L6.493",
    "name": "Düren",
    "lat": 50.80434,
    "lng": 6.49299,
    "countryCode": "DE",
    "population": 93440
  },
  {
    "id": "51.432L6.765",
    "name": "Duisburg",
    "lat": 51.43247,
    "lng": 6.76516,
    "countryCode": "DE",
    "population": 504358
  },
  {
    "id": "51.051L13.738",
    "name": "Dresden",
    "lat": 51.05089,
    "lng": 13.73832,
    "countryCode": "DE",
    "population": 486854
  },
  {
    "id": "51.515L7.466",
    "name": "Dortmund",
    "lat": 51.51494,
    "lng": 7.466,
    "countryCode": "DE",
    "population": 588462
  },
  {
    "id": "51.662L6.965",
    "name": "Dorsten",
    "lat": 51.66166,
    "lng": 6.96514,
    "countryCode": "DE",
    "population": 79981
  },
  {
    "id": "51.097L6.832",
    "name": "Dormagen",
    "lat": 51.09683,
    "lng": 6.83167,
    "countryCode": "DE",
    "population": 63582
  },
  {
    "id": "51.562L6.743",
    "name": "Dinslaken",
    "lat": 51.56227,
    "lng": 6.7434,
    "countryCode": "DE",
    "population": 70573
  },
  {
    "id": "51.939L8.873",
    "name": "Detmold",
    "lat": 51.93855,
    "lng": 8.87318,
    "countryCode": "DE",
    "population": 73680
  },
  {
    "id": "51.839L12.246",
    "name": "Dessau",
    "lat": 51.83864,
    "lng": 12.24555,
    "countryCode": "DE",
    "population": 77315
  },
  {
    "id": "53.051L8.631",
    "name": "Delmenhorst",
    "lat": 53.0511,
    "lng": 8.63091,
    "countryCode": "DE",
    "population": 75893
  },
  {
    "id": "49.872L8.650",
    "name": "Darmstadt",
    "lat": 49.87167,
    "lng": 8.65027,
    "countryCode": "DE",
    "population": 140385
  },
  {
    "id": "53.872L8.691",
    "name": "Cuxhaven",
    "lat": 53.87176,
    "lng": 8.69087,
    "countryCode": "DE",
    "population": 52677
  },
  {
    "id": "51.758L14.329",
    "name": "Cottbus",
    "lat": 51.75769,
    "lng": 14.32888,
    "countryCode": "DE",
    "population": 84754
  },
  {
    "id": "50.836L12.929",
    "name": "Chemnitz",
    "lat": 50.8357,
    "lng": 12.92922,
    "countryCode": "DE",
    "population": 247220
  },
  {
    "id": "52.517L13.283",
    "name": "Charlottenburg",
    "lat": 52.51667,
    "lng": 13.28333,
    "countryCode": "DE",
    "population": 119857
  },
  {
    "id": "52.623L10.080",
    "name": "Celle",
    "lat": 52.62264,
    "lng": 10.08047,
    "countryCode": "DE",
    "population": 71010
  },
  {
    "id": "51.557L7.312",
    "name": "Castrop-Rauxel",
    "lat": 51.55657,
    "lng": 7.31155,
    "countryCode": "DE",
    "population": 77924
  },
  {
    "id": "53.550L8.577",
    "name": "Bremerhaven",
    "lat": 53.55021,
    "lng": 8.57673,
    "countryCode": "DE",
    "population": 117446
  },
  {
    "id": "53.075L8.808",
    "name": "Bremen",
    "lat": 53.07516,
    "lng": 8.80777,
    "countryCode": "DE",
    "population": 546501
  },
  {
    "id": "52.266L10.527",
    "name": "Braunschweig",
    "lat": 52.26594,
    "lng": 10.52673,
    "countryCode": "DE",
    "population": 244715
  },
  {
    "id": "52.417L12.550",
    "name": "Brandenburg an der Havel",
    "lat": 52.41667,
    "lng": 12.55,
    "countryCode": "DE",
    "population": 59826
  },
  {
    "id": "51.524L6.928",
    "name": "Bottrop",
    "lat": 51.52392,
    "lng": 6.9285,
    "countryCode": "DE",
    "population": 119909
  },
  {
    "id": "50.734L7.095",
    "name": "Bonn",
    "lat": 50.73438,
    "lng": 7.09549,
    "countryCode": "DE",
    "population": 313125
  },
  {
    "id": "48.152L11.616",
    "name": "Bogenhausen",
    "lat": 48.15221,
    "lng": 11.61585,
    "countryCode": "DE",
    "population": 77542
  },
  {
    "id": "51.482L7.216",
    "name": "Bochum",
    "lat": 51.48165,
    "lng": 7.21648,
    "countryCode": "DE",
    "population": 385729
  },
  {
    "id": "51.839L6.615",
    "name": "Bocholt",
    "lat": 51.83879,
    "lng": 6.61531,
    "countryCode": "DE",
    "population": 73943
  },
  {
    "id": "52.033L8.533",
    "name": "Bielefeld",
    "lat": 52.03333,
    "lng": 8.53333,
    "countryCode": "DE",
    "population": 331906
  },
  {
    "id": "52.524L13.411",
    "name": "Berlin",
    "lat": 52.52437,
    "lng": 13.41053,
    "countryCode": "DE",
    "population": 3426354
  },
  {
    "id": "51.616L7.645",
    "name": "Bergkamen",
    "lat": 51.61633,
    "lng": 7.64451,
    "countryCode": "DE",
    "population": 52329
  },
  {
    "id": "50.986L7.133",
    "name": "Bergisch Gladbach",
    "lat": 50.9856,
    "lng": 7.13298,
    "countryCode": "DE",
    "population": 106184
  },
  {
    "id": "50.956L6.640",
    "name": "Bergheim",
    "lat": 50.95572,
    "lng": 6.63986,
    "countryCode": "DE",
    "population": 63558
  },
  {
    "id": "49.948L11.579",
    "name": "Bayreuth",
    "lat": 49.94782,
    "lng": 11.57893,
    "countryCode": "DE",
    "population": 75061
  },
  {
    "id": "49.899L10.901",
    "name": "Bamberg",
    "lat": 49.89873,
    "lng": 10.90067,
    "countryCode": "DE",
    "population": 70047
  },
  {
    "id": "52.086L8.744",
    "name": "Bad Salzuflen",
    "lat": 52.0862,
    "lng": 8.74434,
    "countryCode": "DE",
    "population": 54899
  },
  {
    "id": "50.227L8.618",
    "name": "Bad Homburg vor der Höhe",
    "lat": 50.22683,
    "lng": 8.61816,
    "countryCode": "DE",
    "population": 51859
  },
  {
    "id": "48.761L8.240",
    "name": "Baden-Baden",
    "lat": 48.7606,
    "lng": 8.23975,
    "countryCode": "DE",
    "population": 54239
  },
  {
    "id": "48.372L10.899",
    "name": "Augsburg",
    "lat": 48.37154,
    "lng": 10.89851,
    "countryCode": "DE",
    "population": 259196
  },
  {
    "id": "49.977L9.152",
    "name": "Aschaffenburg",
    "lat": 49.97704,
    "lng": 9.15214,
    "countryCode": "DE",
    "population": 68551
  },
  {
    "id": "51.383L8.083",
    "name": "Arnsberg",
    "lat": 51.38333,
    "lng": 8.08333,
    "countryCode": "DE",
    "population": 76612
  },
  {
    "id": "51.763L7.889",
    "name": "Ahlen",
    "lat": 51.76338,
    "lng": 7.8887,
    "countryCode": "DE",
    "population": 55280
  },
  {
    "id": "48.838L10.093",
    "name": "Aalen",
    "lat": 48.83777,
    "lng": 10.0933,
    "countryCode": "DE",
    "population": 67085
  },
  {
    "id": "50.777L6.083",
    "name": "Aachen",
    "lat": 50.77664,
    "lng": 6.08342,
    "countryCode": "DE",
    "population": 265208
  },
  {
    "id": "52.520L13.405",
    "name": "Mitte",
    "lat": 52.52003,
    "lng": 13.40489,
    "countryCode": "DE",
    "population": 81205
  },
  {
    "id": "51.502L7.176",
    "name": "Bochum-Hordel",
    "lat": 51.50168,
    "lng": 7.1756,
    "countryCode": "DE",
    "population": 380000
  },
  {
    "id": "53.485L10.229",
    "name": "Bergedorf",
    "lat": 53.48462,
    "lng": 10.22904,
    "countryCode": "DE",
    "population": 119665
  },
  {
    "id": "52.484L13.348",
    "name": "Berlin Schöneberg",
    "lat": 52.48388,
    "lng": 13.3477,
    "countryCode": "DE",
    "population": 116286
  },
  {
    "id": "52.567L13.513",
    "name": "Neu-Hohenschönhausen",
    "lat": 52.56681,
    "lng": 13.51255,
    "countryCode": "DE",
    "population": 53374
  },
  {
    "id": "53.589L9.984",
    "name": "Hamburg-Nord",
    "lat": 53.58935,
    "lng": 9.984,
    "countryCode": "DE",
    "population": 280000
  },
  {
    "id": "55.709L9.536",
    "name": "Vejle",
    "lat": 55.70927,
    "lng": 9.5357,
    "countryCode": "DK",
    "population": 51177
  },
  {
    "id": "56.461L10.036",
    "name": "Randers",
    "lat": 56.4607,
    "lng": 10.03639,
    "countryCode": "DK",
    "population": 55780
  },
  {
    "id": "55.396L10.388",
    "name": "Odense",
    "lat": 55.39594,
    "lng": 10.38831,
    "countryCode": "DK",
    "population": 145931
  },
  {
    "id": "55.676L12.566",
    "name": "Copenhagen",
    "lat": 55.67594,
    "lng": 12.56553,
    "countryCode": "DK",
    "population": 1153615
  },
  {
    "id": "55.490L9.472",
    "name": "Kolding",
    "lat": 55.4904,
    "lng": 9.47216,
    "countryCode": "DK",
    "population": 55363
  },
  {
    "id": "55.861L9.850",
    "name": "Horsens",
    "lat": 55.86066,
    "lng": 9.85034,
    "countryCode": "DK",
    "population": 50074
  },
  {
    "id": "55.679L12.535",
    "name": "Frederiksberg",
    "lat": 55.67938,
    "lng": 12.53463,
    "countryCode": "DK",
    "population": 95029
  },
  {
    "id": "55.470L8.452",
    "name": "Esbjerg",
    "lat": 55.47028,
    "lng": 8.45187,
    "countryCode": "DK",
    "population": 72205
  },
  {
    "id": "56.157L10.211",
    "name": "Århus",
    "lat": 56.15674,
    "lng": 10.21076,
    "countryCode": "DK",
    "population": 237551
  },
  {
    "id": "57.048L9.919",
    "name": "Aalborg",
    "lat": 57.048,
    "lng": 9.9187,
    "countryCode": "DK",
    "population": 122219
  },
  {
    "id": "58.381L26.725",
    "name": "Tartu",
    "lat": 58.38062,
    "lng": 26.72509,
    "countryCode": "EE",
    "population": 101092
  },
  {
    "id": "59.437L24.754",
    "name": "Tallinn",
    "lat": 59.43696,
    "lng": 24.75353,
    "countryCode": "EE",
    "population": 394024
  },
  {
    "id": "59.377L28.190",
    "name": "Narva",
    "lat": 59.37722,
    "lng": 28.19028,
    "countryCode": "EE",
    "population": 66980
  },
  {
    "id": "39.938L-0.101",
    "name": "Vila-real",
    "lat": 39.9383,
    "lng": -0.10087,
    "countryCode": "ES",
    "population": 51205
  },
  {
    "id": "36.781L-4.103",
    "name": "Vélez-Málaga",
    "lat": 36.78107,
    "lng": -4.10266,
    "countryCode": "ES",
    "population": 74190
  },
  {
    "id": "39.470L-0.377",
    "name": "Valencia",
    "lat": 39.46975,
    "lng": -0.37739,
    "countryCode": "ES",
    "population": 814208
  },
  {
    "id": "37.185L-5.781",
    "name": "Utrera",
    "lat": 37.18516,
    "lng": -5.78093,
    "countryCode": "ES",
    "population": 50665
  },
  {
    "id": "37.979L-0.682",
    "name": "Torrevieja",
    "lat": 37.97872,
    "lng": -0.68222,
    "countryCode": "ES",
    "population": 101792
  },
  {
    "id": "39.437L-0.465",
    "name": "Torrent",
    "lat": 39.43705,
    "lng": -0.46546,
    "countryCode": "ES",
    "population": 78543
  },
  {
    "id": "36.620L-4.500",
    "name": "Torremolinos",
    "lat": 36.62035,
    "lng": -4.49976,
    "countryCode": "ES",
    "population": 65448
  },
  {
    "id": "39.858L-4.023",
    "name": "Toledo",
    "lat": 39.8581,
    "lng": -4.02263,
    "countryCode": "ES",
    "population": 82291
  },
  {
    "id": "27.992L-15.419",
    "name": "Telde",
    "lat": 27.99243,
    "lng": -15.41915,
    "countryCode": "ES",
    "population": 100015
  },
  {
    "id": "39.963L-4.831",
    "name": "Talavera de la Reina",
    "lat": 39.96348,
    "lng": -4.83076,
    "countryCode": "ES",
    "population": 88856
  },
  {
    "id": "37.383L-5.973",
    "name": "Sevilla",
    "lat": 37.38283,
    "lng": -5.97317,
    "countryCode": "ES",
    "population": 703206
  },
  {
    "id": "38.396L-0.525",
    "name": "San Vicent del Raspeig",
    "lat": 38.3964,
    "lng": -0.5255,
    "countryCode": "ES",
    "population": 53126
  },
  {
    "id": "27.912L-15.541",
    "name": "Santa Lucía",
    "lat": 27.91174,
    "lng": -15.54071,
    "countryCode": "ES",
    "population": 63637
  },
  {
    "id": "28.468L-16.255",
    "name": "Santa Cruz de Tenerife",
    "lat": 28.46824,
    "lng": -16.25462,
    "countryCode": "ES",
    "population": 222417
  },
  {
    "id": "36.778L-6.351",
    "name": "Sanlúcar de Barrameda",
    "lat": 36.77808,
    "lng": -6.3515,
    "countryCode": "ES",
    "population": 65805
  },
  {
    "id": "36.476L-6.198",
    "name": "San Fernando",
    "lat": 36.4759,
    "lng": -6.19817,
    "countryCode": "ES",
    "population": 96366
  },
  {
    "id": "28.485L-16.320",
    "name": "La Laguna",
    "lat": 28.4853,
    "lng": -16.32014,
    "countryCode": "ES",
    "population": 150661
  },
  {
    "id": "27.925L-15.573",
    "name": "San Bartolomé de Tirajana",
    "lat": 27.92481,
    "lng": -15.57329,
    "countryCode": "ES",
    "population": 52161
  },
  {
    "id": "39.683L-0.267",
    "name": "Sagunto",
    "lat": 39.68333,
    "lng": -0.26667,
    "countryCode": "ES",
    "population": 66070
  },
  {
    "id": "36.764L-2.615",
    "name": "Roquetas de Mar",
    "lat": 36.76419,
    "lng": -2.61475,
    "countryCode": "ES",
    "population": 82665
  },
  {
    "id": "38.687L-4.107",
    "name": "Puertollano",
    "lat": 38.68712,
    "lng": -4.10734,
    "countryCode": "ES",
    "population": 51842
  },
  {
    "id": "39.500L-0.433",
    "name": "Paterna",
    "lat": 39.5,
    "lng": -0.43333,
    "countryCode": "ES",
    "population": 64023
  },
  {
    "id": "39.569L2.650",
    "name": "Palma",
    "lat": 39.56939,
    "lng": 2.65024,
    "countryCode": "ES",
    "population": 401270
  },
  {
    "id": "38.085L-0.944",
    "name": "Orihuela",
    "lat": 38.08483,
    "lng": -0.94401,
    "countryCode": "ES",
    "population": 86164
  },
  {
    "id": "37.987L-1.130",
    "name": "Murcia",
    "lat": 37.98704,
    "lng": -1.13004,
    "countryCode": "ES",
    "population": 436870
  },
  {
    "id": "36.751L-3.518",
    "name": "Motril",
    "lat": 36.75066,
    "lng": -3.5179,
    "countryCode": "ES",
    "population": 60279
  },
  {
    "id": "38.055L-1.208",
    "name": "Molina de Segura",
    "lat": 38.05456,
    "lng": -1.20763,
    "countryCode": "ES",
    "population": 64065
  },
  {
    "id": "36.596L-4.637",
    "name": "Mijas",
    "lat": 36.59575,
    "lng": -4.63728,
    "countryCode": "ES",
    "population": 73787
  },
  {
    "id": "38.916L-6.344",
    "name": "Mérida",
    "lat": 38.91611,
    "lng": -6.34366,
    "countryCode": "ES",
    "population": 56395
  },
  {
    "id": "35.294L-2.938",
    "name": "Melilla",
    "lat": 35.29369,
    "lng": -2.93833,
    "countryCode": "ES",
    "population": 73460
  },
  {
    "id": "36.515L-4.886",
    "name": "Marbella",
    "lat": 36.51543,
    "lng": -4.88583,
    "countryCode": "ES",
    "population": 134623
  },
  {
    "id": "36.720L-4.420",
    "name": "Málaga",
    "lat": 36.72016,
    "lng": -4.42034,
    "countryCode": "ES",
    "population": 568305
  },
  {
    "id": "37.671L-1.702",
    "name": "Lorca",
    "lat": 37.67119,
    "lng": -1.7017,
    "countryCode": "ES",
    "population": 91906
  },
  {
    "id": "38.095L-3.636",
    "name": "Linares",
    "lat": 38.09519,
    "lng": -3.63602,
    "countryCode": "ES",
    "population": 61338
  },
  {
    "id": "28.100L-15.413",
    "name": "Las Palmas de Gran Canaria",
    "lat": 28.09973,
    "lng": -15.41343,
    "countryCode": "ES",
    "population": 381847
  },
  {
    "id": "36.168L-5.348",
    "name": "La Línea de la Concepción",
    "lat": 36.16809,
    "lng": -5.34777,
    "countryCode": "ES",
    "population": 64595
  },
  {
    "id": "36.686L-6.136",
    "name": "Jerez de la Frontera",
    "lat": 36.68645,
    "lng": -6.13606,
    "countryCode": "ES",
    "population": 207532
  },
  {
    "id": "37.769L-3.790",
    "name": "Jaén",
    "lat": 37.76922,
    "lng": -3.79028,
    "countryCode": "ES",
    "population": 116557
  },
  {
    "id": "37.266L-6.940",
    "name": "Huelva",
    "lat": 37.26638,
    "lng": -6.94004,
    "countryCode": "ES",
    "population": 148806
  },
  {
    "id": "37.188L-3.607",
    "name": "Granada",
    "lat": 37.18817,
    "lng": -3.60667,
    "countryCode": "ES",
    "population": 234325
  },
  {
    "id": "38.967L-0.183",
    "name": "Gandia",
    "lat": 38.96667,
    "lng": -0.18333,
    "countryCode": "ES",
    "population": 80020
  },
  {
    "id": "36.540L-4.625",
    "name": "Fuengirola",
    "lat": 36.53998,
    "lng": -4.62473,
    "countryCode": "ES",
    "population": 71482
  },
  {
    "id": "36.428L-5.146",
    "name": "Estepona",
    "lat": 36.42764,
    "lng": -5.14589,
    "countryCode": "ES",
    "population": 65592
  },
  {
    "id": "36.594L-6.233",
    "name": "El Puerto de Santa María",
    "lat": 36.59389,
    "lng": -6.23298,
    "countryCode": "ES",
    "population": 87696
  },
  {
    "id": "36.776L-2.815",
    "name": "El Ejido",
    "lat": 36.77629,
    "lng": -2.81456,
    "countryCode": "ES",
    "population": 84227
  },
  {
    "id": "38.478L-0.792",
    "name": "Elda",
    "lat": 38.47783,
    "lng": -0.79157,
    "countryCode": "ES",
    "population": 55168
  },
  {
    "id": "38.262L-0.701",
    "name": "Elche",
    "lat": 38.26218,
    "lng": -0.70107,
    "countryCode": "ES",
    "population": 230112
  },
  {
    "id": "37.283L-5.921",
    "name": "Dos Hermanas",
    "lat": 37.28287,
    "lng": -5.92088,
    "countryCode": "ES",
    "population": 122943
  },
  {
    "id": "37.892L-4.773",
    "name": "Córdoba",
    "lat": 37.89155,
    "lng": -4.77275,
    "countryCode": "ES",
    "population": 328428
  },
  {
    "id": "38.986L-3.929",
    "name": "Ciudad Real",
    "lat": 38.98626,
    "lng": -3.92907,
    "countryCode": "ES",
    "population": 74014
  },
  {
    "id": "36.419L-6.149",
    "name": "Chiclana de la Frontera",
    "lat": 36.41915,
    "lng": -6.14941,
    "countryCode": "ES",
    "population": 77293
  },
  {
    "id": "39.986L-0.049",
    "name": "Castelló de la Plana",
    "lat": 39.98567,
    "lng": -0.04935,
    "countryCode": "ES",
    "population": 180005
  },
  {
    "id": "37.605L-0.986",
    "name": "Cartagena",
    "lat": 37.60512,
    "lng": -0.98623,
    "countryCode": "ES",
    "population": 211996
  },
  {
    "id": "38.219L-2.981",
    "name": "Campiña",
    "lat": 38.21896,
    "lng": -2.98069,
    "countryCode": "ES",
    "population": 67904
  },
  {
    "id": "39.566L2.506",
    "name": "Calvià",
    "lat": 39.5657,
    "lng": 2.50621,
    "countryCode": "ES",
    "population": 51774
  },
  {
    "id": "36.527L-6.289",
    "name": "Cadiz",
    "lat": 36.52672,
    "lng": -6.2891,
    "countryCode": "ES",
    "population": 126766
  },
  {
    "id": "39.476L-6.372",
    "name": "Cáceres",
    "lat": 39.47649,
    "lng": -6.37224,
    "countryCode": "ES",
    "population": 93131
  },
  {
    "id": "38.538L-0.131",
    "name": "Benidorm",
    "lat": 38.53816,
    "lng": -0.13098,
    "countryCode": "ES",
    "population": 71034
  },
  {
    "id": "36.596L-4.573",
    "name": "Benalmádena",
    "lat": 36.5961,
    "lng": -4.57267,
    "countryCode": "ES",
    "population": 58854
  },
  {
    "id": "38.878L-6.971",
    "name": "Badajoz",
    "lat": 38.87789,
    "lng": -6.97061,
    "countryCode": "ES",
    "population": 148334
  },
  {
    "id": "28.963L-13.548",
    "name": "Arrecife",
    "lat": 28.96302,
    "lng": -13.54769,
    "countryCode": "ES",
    "population": 59127
  },
  {
    "id": "28.100L-16.681",
    "name": "Arona",
    "lat": 28.09962,
    "lng": -16.68102,
    "countryCode": "ES",
    "population": 78614
  },
  {
    "id": "36.838L-2.460",
    "name": "Almería",
    "lat": 36.83814,
    "lng": -2.45974,
    "countryCode": "ES",
    "population": 188810
  },
  {
    "id": "38.345L-0.481",
    "name": "Alicante",
    "lat": 38.34517,
    "lng": -0.48149,
    "countryCode": "ES",
    "population": 334757
  },
  {
    "id": "36.133L-5.451",
    "name": "Algeciras",
    "lat": 36.13326,
    "lng": -5.45051,
    "countryCode": "ES",
    "population": 116209
  },
  {
    "id": "38.705L-0.474",
    "name": "Alcoy",
    "lat": 38.70545,
    "lng": -0.47432,
    "countryCode": "ES",
    "population": 61552
  },
  {
    "id": "37.338L-5.840",
    "name": "Alcalá de Guadaira",
    "lat": 37.33791,
    "lng": -5.83951,
    "countryCode": "ES",
    "population": 70155
  },
  {
    "id": "38.994L-1.856",
    "name": "Albacete",
    "lat": 38.99424,
    "lng": -1.85643,
    "countryCode": "ES",
    "population": 169716
  },
  {
    "id": "39.642L-0.239",
    "name": "Grao de Murviedro",
    "lat": 39.64167,
    "lng": -0.23889,
    "countryCode": "ES",
    "population": 62368
  },
  {
    "id": "41.656L-0.877",
    "name": "Zaragoza",
    "lat": 41.65606,
    "lng": -0.87734,
    "countryCode": "ES",
    "population": 674317
  },
  {
    "id": "41.506L-5.745",
    "name": "Zamora",
    "lat": 41.50633,
    "lng": -5.74456,
    "countryCode": "ES",
    "population": 66293
  },
  {
    "id": "42.850L-2.673",
    "name": "Gasteiz / Vitoria",
    "lat": 42.84998,
    "lng": -2.67268,
    "countryCode": "ES",
    "population": 235661
  },
  {
    "id": "40.350L-3.700",
    "name": "Villaverde",
    "lat": 40.35,
    "lng": -3.7,
    "countryCode": "ES",
    "population": 126802
  },
  {
    "id": "41.224L1.725",
    "name": "Vilanova i la Geltrú",
    "lat": 41.22392,
    "lng": 1.72511,
    "countryCode": "ES",
    "population": 65890
  },
  {
    "id": "41.314L2.014",
    "name": "Viladecans",
    "lat": 41.31405,
    "lng": 2.01427,
    "countryCode": "ES",
    "population": 63489
  },
  {
    "id": "42.233L-8.723",
    "name": "Vigo",
    "lat": 42.23282,
    "lng": -8.72264,
    "countryCode": "ES",
    "population": 297332
  },
  {
    "id": "40.400L-3.600",
    "name": "Vicálvaro",
    "lat": 40.4,
    "lng": -3.6,
    "countryCode": "ES",
    "population": 66439
  },
  {
    "id": "41.655L-4.724",
    "name": "Valladolid",
    "lat": 41.65518,
    "lng": -4.72372,
    "countryCode": "ES",
    "population": 317864
  },
  {
    "id": "40.191L-3.679",
    "name": "Valdemoro",
    "lat": 40.19081,
    "lng": -3.67887,
    "countryCode": "ES",
    "population": 62750
  },
  {
    "id": "40.326L-3.511",
    "name": "Rivas-Vaciamadrid",
    "lat": 40.32605,
    "lng": -3.51089,
    "countryCode": "ES",
    "population": 68405
  },
  {
    "id": "43.349L-4.048",
    "name": "Torrelavega",
    "lat": 43.34943,
    "lng": -4.04785,
    "countryCode": "ES",
    "population": 55297
  },
  {
    "id": "40.455L-3.470",
    "name": "Torrejón de Ardoz",
    "lat": 40.45535,
    "lng": -3.46973,
    "countryCode": "ES",
    "population": 118162
  },
  {
    "id": "40.460L-3.697",
    "name": "Tetuán de las Victorias",
    "lat": 40.45975,
    "lng": -3.6975,
    "countryCode": "ES",
    "population": 155000
  },
  {
    "id": "41.567L2.017",
    "name": "Terrassa",
    "lat": 41.56667,
    "lng": 2.01667,
    "countryCode": "ES",
    "population": 210941
  },
  {
    "id": "41.117L1.250",
    "name": "Tarragona",
    "lat": 41.11667,
    "lng": 1.25,
    "countryCode": "ES",
    "population": 140323
  },
  {
    "id": "40.948L-4.118",
    "name": "Segovia",
    "lat": 40.94808,
    "lng": -4.11839,
    "countryCode": "ES",
    "population": 56660
  },
  {
    "id": "41.491L2.141",
    "name": "Cerdanyola del Vallès",
    "lat": 41.49109,
    "lng": 2.14079,
    "countryCode": "ES",
    "population": 58747
  },
  {
    "id": "43.296L-2.988",
    "name": "Barakaldo",
    "lat": 43.29639,
    "lng": -2.98813,
    "countryCode": "ES",
    "population": 98460
  },
  {
    "id": "42.881L-8.546",
    "name": "Santiago de Compostela",
    "lat": 42.88052,
    "lng": -8.54569,
    "countryCode": "ES",
    "population": 95092
  },
  {
    "id": "43.465L-3.804",
    "name": "Santander",
    "lat": 43.46472,
    "lng": -3.80444,
    "countryCode": "ES",
    "population": 182700
  },
  {
    "id": "41.452L2.208",
    "name": "Santa Coloma de Gramenet",
    "lat": 41.45152,
    "lng": 2.2081,
    "countryCode": "ES",
    "population": 119717
  },
  {
    "id": "40.556L-3.627",
    "name": "San Sebastián de los Reyes",
    "lat": 40.55555,
    "lng": -3.62733,
    "countryCode": "ES",
    "population": 75912
  },
  {
    "id": "43.313L-1.975",
    "name": "Donostia / San Sebastián",
    "lat": 43.31283,
    "lng": -1.97499,
    "countryCode": "ES",
    "population": 185357
  },
  {
    "id": "41.471L2.086",
    "name": "Sant Cugat del Vallès",
    "lat": 41.47063,
    "lng": 2.08611,
    "countryCode": "ES",
    "population": 79253
  },
  {
    "id": "41.344L2.037",
    "name": "Sant Boi de Llobregat",
    "lat": 41.34357,
    "lng": 2.03659,
    "countryCode": "ES",
    "population": 82428
  },
  {
    "id": "41.435L2.190",
    "name": "Sant Andreu",
    "lat": 41.43541,
    "lng": 2.18982,
    "countryCode": "ES",
    "population": 147732
  },
  {
    "id": "40.969L-5.664",
    "name": "Salamanca",
    "lat": 40.96882,
    "lng": -5.66388,
    "countryCode": "ES",
    "population": 155619
  },
  {
    "id": "41.543L2.109",
    "name": "Sabadell",
    "lat": 41.54329,
    "lng": 2.10942,
    "countryCode": "ES",
    "population": 206493
  },
  {
    "id": "41.492L2.033",
    "name": "Rubí",
    "lat": 41.49226,
    "lng": 2.03305,
    "countryCode": "ES",
    "population": 72987
  },
  {
    "id": "41.156L1.107",
    "name": "Reus",
    "lat": 41.15612,
    "lng": 1.10687,
    "countryCode": "ES",
    "population": 107118
  },
  {
    "id": "40.394L-3.662",
    "name": "Puente de Vallecas",
    "lat": 40.39354,
    "lng": -3.662,
    "countryCode": "ES",
    "population": 244151
  },
  {
    "id": "40.433L-3.813",
    "name": "Pozuelo de Alarcón",
    "lat": 40.43293,
    "lng": -3.81338,
    "countryCode": "ES",
    "population": 82428
  },
  {
    "id": "42.431L-8.644",
    "name": "Pontevedra",
    "lat": 42.431,
    "lng": -8.64435,
    "countryCode": "ES",
    "population": 81576
  },
  {
    "id": "42.547L-6.596",
    "name": "Ponferrada",
    "lat": 42.54664,
    "lng": -6.59619,
    "countryCode": "ES",
    "population": 68736
  },
  {
    "id": "40.236L-3.768",
    "name": "Parla",
    "lat": 40.23604,
    "lng": -3.76752,
    "countryCode": "ES",
    "population": 115611
  },
  {
    "id": "42.817L-1.643",
    "name": "Pamplona",
    "lat": 42.81687,
    "lng": -1.64323,
    "countryCode": "ES",
    "population": 198491
  },
  {
    "id": "42.010L-4.524",
    "name": "Palencia",
    "lat": 42.00955,
    "lng": -4.52406,
    "countryCode": "ES",
    "population": 82651
  },
  {
    "id": "43.360L-5.845",
    "name": "Oviedo",
    "lat": 43.36029,
    "lng": -5.84476,
    "countryCode": "ES",
    "population": 224005
  },
  {
    "id": "42.337L-7.864",
    "name": "Ourense",
    "lat": 42.33669,
    "lng": -7.86407,
    "countryCode": "ES",
    "population": 107742
  },
  {
    "id": "40.322L-3.865",
    "name": "Móstoles",
    "lat": 40.32234,
    "lng": -3.86496,
    "countryCode": "ES",
    "population": 206478
  },
  {
    "id": "40.407L-3.649",
    "name": "Moratalaz",
    "lat": 40.40742,
    "lng": -3.64935,
    "countryCode": "ES",
    "population": 104923
  },
  {
    "id": "41.540L2.213",
    "name": "Mollet del Vallès",
    "lat": 41.54026,
    "lng": 2.21306,
    "countryCode": "ES",
    "population": 52484
  },
  {
    "id": "41.542L2.445",
    "name": "Mataró",
    "lat": 41.54211,
    "lng": 2.4445,
    "countryCode": "ES",
    "population": 121722
  },
  {
    "id": "41.728L1.824",
    "name": "Manresa",
    "lat": 41.72815,
    "lng": 1.82399,
    "countryCode": "ES",
    "population": 76558
  },
  {
    "id": "40.474L-3.872",
    "name": "Majadahonda",
    "lat": 40.47353,
    "lng": -3.87182,
    "countryCode": "ES",
    "population": 68110
  },
  {
    "id": "40.416L-3.703",
    "name": "Madrid",
    "lat": 40.4165,
    "lng": -3.70256,
    "countryCode": "ES",
    "population": 3255944
  },
  {
    "id": "43.010L-7.556",
    "name": "Lugo",
    "lat": 43.00992,
    "lng": -7.55602,
    "countryCode": "ES",
    "population": 96678
  },
  {
    "id": "42.467L-2.450",
    "name": "Logroño",
    "lat": 42.46667,
    "lng": -2.45,
    "countryCode": "ES",
    "population": 152107
  },
  {
    "id": "41.617L0.622",
    "name": "Lleida",
    "lat": 41.61674,
    "lng": 0.62218,
    "countryCode": "ES",
    "population": 135919
  },
  {
    "id": "42.600L-5.570",
    "name": "León",
    "lat": 42.60003,
    "lng": -5.57032,
    "countryCode": "ES",
    "population": 134305
  },
  {
    "id": "40.327L-3.764",
    "name": "Leganés",
    "lat": 40.32718,
    "lng": -3.7635,
    "countryCode": "ES",
    "population": 186066
  },
  {
    "id": "40.493L-3.874",
    "name": "Las Rozas de Madrid",
    "lat": 40.49292,
    "lng": -3.87371,
    "countryCode": "ES",
    "population": 86340
  },
  {
    "id": "43.371L-8.396",
    "name": "A Coruña",
    "lat": 43.37135,
    "lng": -8.396,
    "countryCode": "ES",
    "population": 246056
  },
  {
    "id": "43.339L-1.789",
    "name": "Irun",
    "lat": 43.33904,
    "lng": -1.78938,
    "countryCode": "ES",
    "population": 60951
  },
  {
    "id": "42.136L-0.409",
    "name": "Huesca",
    "lat": 42.13615,
    "lng": -0.4087,
    "countryCode": "ES",
    "population": 52059
  },
  {
    "id": "41.360L2.100",
    "name": "L'Hospitalet de Llobregat",
    "lat": 41.35967,
    "lng": 2.10028,
    "countryCode": "ES",
    "population": 257038
  },
  {
    "id": "40.474L-3.641",
    "name": "Hortaleza",
    "lat": 40.47444,
    "lng": -3.6411,
    "countryCode": "ES",
    "population": 161661
  },
  {
    "id": "43.357L-3.011",
    "name": "Getxo",
    "lat": 43.35689,
    "lng": -3.01146,
    "countryCode": "ES",
    "population": 80770
  },
  {
    "id": "40.629L-3.162",
    "name": "Guadalajara",
    "lat": 40.62862,
    "lng": -3.16185,
    "countryCode": "ES",
    "population": 83039
  },
  {
    "id": "41.608L2.288",
    "name": "Granollers",
    "lat": 41.60797,
    "lng": 2.28773,
    "countryCode": "ES",
    "population": 60658
  },
  {
    "id": "41.402L2.156",
    "name": "Gràcia",
    "lat": 41.40237,
    "lng": 2.15641,
    "countryCode": "ES",
    "population": 121502
  },
  {
    "id": "43.536L-5.662",
    "name": "Gijón",
    "lat": 43.53573,
    "lng": -5.66152,
    "countryCode": "ES",
    "population": 277554
  },
  {
    "id": "40.306L-3.733",
    "name": "Getafe",
    "lat": 40.30571,
    "lng": -3.73295,
    "countryCode": "ES",
    "population": 167164
  },
  {
    "id": "41.983L2.825",
    "name": "Girona",
    "lat": 41.98311,
    "lng": 2.82493,
    "countryCode": "ES",
    "population": 96188
  },
  {
    "id": "40.284L-3.794",
    "name": "Fuenlabrada",
    "lat": 40.28419,
    "lng": -3.79415,
    "countryCode": "ES",
    "population": 197836
  },
  {
    "id": "41.328L2.095",
    "name": "El Prat de Llobregat",
    "lat": 41.32784,
    "lng": 2.09472,
    "countryCode": "ES",
    "population": 63418
  },
  {
    "id": "43.490L-8.219",
    "name": "Ferrol",
    "lat": 43.48961,
    "lng": -8.2194,
    "countryCode": "ES",
    "population": 74273
  },
  {
    "id": "40.067L-2.133",
    "name": "Cuenca",
    "lat": 40.06667,
    "lng": -2.13333,
    "countryCode": "ES",
    "population": 55866
  },
  {
    "id": "40.424L-3.561",
    "name": "Coslada",
    "lat": 40.42378,
    "lng": -3.56129,
    "countryCode": "ES",
    "population": 90280
  },
  {
    "id": "41.350L2.083",
    "name": "Cornellà de Llobregat",
    "lat": 41.35,
    "lng": 2.08333,
    "countryCode": "ES",
    "population": 86519
  },
  {
    "id": "40.635L-4.005",
    "name": "Collado-Villalba",
    "lat": 40.63506,
    "lng": -4.00486,
    "countryCode": "ES",
    "population": 55027
  },
  {
    "id": "40.445L-3.651",
    "name": "Ciudad Lineal",
    "lat": 40.44505,
    "lng": -3.65132,
    "countryCode": "ES",
    "population": 228171
  },
  {
    "id": "40.462L-3.677",
    "name": "Chamartín",
    "lat": 40.46206,
    "lng": -3.6766,
    "countryCode": "ES",
    "population": 140000
  },
  {
    "id": "41.278L1.970",
    "name": "Castelldefels",
    "lat": 41.27794,
    "lng": 1.97033,
    "countryCode": "ES",
    "population": 62080
  },
  {
    "id": "42.341L-3.702",
    "name": "Burgos",
    "lat": 42.34106,
    "lng": -3.70184,
    "countryCode": "ES",
    "population": 178966
  },
  {
    "id": "43.263L-2.925",
    "name": "Bilbao",
    "lat": 43.26271,
    "lng": -2.92528,
    "countryCode": "ES",
    "population": 354860
  },
  {
    "id": "41.389L2.159",
    "name": "Barcelona",
    "lat": 41.38879,
    "lng": 2.15899,
    "countryCode": "ES",
    "population": 1621537
  },
  {
    "id": "41.450L2.247",
    "name": "Badalona",
    "lat": 41.45004,
    "lng": 2.24741,
    "countryCode": "ES",
    "population": 219547
  },
  {
    "id": "43.555L-5.925",
    "name": "Avilés",
    "lat": 43.55473,
    "lng": -5.92483,
    "countryCode": "ES",
    "population": 84242
  },
  {
    "id": "40.657L-4.700",
    "name": "Ávila",
    "lat": 40.65724,
    "lng": -4.69951,
    "countryCode": "ES",
    "population": 56855
  },
  {
    "id": "40.301L-3.437",
    "name": "Arganda",
    "lat": 40.30076,
    "lng": -3.43722,
    "countryCode": "ES",
    "population": 51489
  },
  {
    "id": "40.031L-3.602",
    "name": "Aranjuez",
    "lat": 40.03108,
    "lng": -3.60246,
    "countryCode": "ES",
    "population": 54055
  },
  {
    "id": "43.349L-3.009",
    "name": "Algorta",
    "lat": 43.34927,
    "lng": -3.0094,
    "countryCode": "ES",
    "population": 82624
  },
  {
    "id": "40.346L-3.825",
    "name": "Alcorcón",
    "lat": 40.34582,
    "lng": -3.82487,
    "countryCode": "ES",
    "population": 167967
  },
  {
    "id": "40.547L-3.642",
    "name": "Alcobendas",
    "lat": 40.54746,
    "lng": -3.64197,
    "countryCode": "ES",
    "population": 107514
  },
  {
    "id": "40.482L-3.360",
    "name": "Alcalá de Henares",
    "lat": 40.48205,
    "lng": -3.35996,
    "countryCode": "ES",
    "population": 204574
  },
  {
    "id": "41.442L2.177",
    "name": "Nou Barris",
    "lat": 41.44163,
    "lng": 2.17727,
    "countryCode": "ES",
    "population": 166310
  },
  {
    "id": "35.889L-5.320",
    "name": "Ceuta",
    "lat": 35.88933,
    "lng": -5.31979,
    "countryCode": "ES",
    "population": 78674
  },
  {
    "id": "40.435L-3.732",
    "name": "Moncloa-Aravaca",
    "lat": 40.43547,
    "lng": -3.7317,
    "countryCode": "ES",
    "population": 116531
  },
  {
    "id": "41.389L2.162",
    "name": "Eixample",
    "lat": 41.38896,
    "lng": 2.16179,
    "countryCode": "ES",
    "population": 266477
  },
  {
    "id": "41.387L2.130",
    "name": "Les Corts",
    "lat": 41.38712,
    "lng": 2.13007,
    "countryCode": "ES",
    "population": 82270
  },
  {
    "id": "41.401L2.139",
    "name": "Sarrià-Sant Gervasi",
    "lat": 41.40104,
    "lng": 2.1394,
    "countryCode": "ES",
    "population": 147912
  },
  {
    "id": "41.418L2.168",
    "name": "Horta-Guinardó",
    "lat": 41.41849,
    "lng": 2.1677,
    "countryCode": "ES",
    "population": 168092
  },
  {
    "id": "41.373L2.155",
    "name": "Sants-Montjuïc",
    "lat": 41.37263,
    "lng": 2.1546,
    "countryCode": "ES",
    "population": 183120
  },
  {
    "id": "41.418L2.199",
    "name": "Sant Martí",
    "lat": 41.41814,
    "lng": 2.19933,
    "countryCode": "ES",
    "population": 235719
  },
  {
    "id": "41.380L2.173",
    "name": "Ciutat Vella",
    "lat": 41.38022,
    "lng": 2.17319,
    "countryCode": "ES",
    "population": 102347
  },
  {
    "id": "40.400L-3.696",
    "name": "Arganzuela",
    "lat": 40.40021,
    "lng": -3.69618,
    "countryCode": "ES",
    "population": 148797
  },
  {
    "id": "40.439L-3.615",
    "name": "San Blas-Canillejas",
    "lat": 40.43893,
    "lng": -3.61537,
    "countryCode": "ES",
    "population": 157367
  },
  {
    "id": "40.389L-3.746",
    "name": "Latina",
    "lat": 40.38897,
    "lng": -3.74569,
    "countryCode": "ES",
    "population": 256644
  },
  {
    "id": "40.389L-3.700",
    "name": "Usera",
    "lat": 40.38866,
    "lng": -3.70035,
    "countryCode": "ES",
    "population": 141189
  },
  {
    "id": "40.430L-3.680",
    "name": "Salamanca",
    "lat": 40.42972,
    "lng": -3.67975,
    "countryCode": "ES",
    "population": 147707
  },
  {
    "id": "40.434L-3.704",
    "name": "Chamberí",
    "lat": 40.43404,
    "lng": -3.70379,
    "countryCode": "ES",
    "population": 145934
  },
  {
    "id": "40.391L-3.724",
    "name": "Carabanchel",
    "lat": 40.39094,
    "lng": -3.7242,
    "countryCode": "ES",
    "population": 253678
  },
  {
    "id": "40.418L-3.703",
    "name": "City Center",
    "lat": 40.41831,
    "lng": -3.70275,
    "countryCode": "ES",
    "population": 149718
  },
  {
    "id": "40.413L-3.683",
    "name": "Retiro",
    "lat": 40.41317,
    "lng": -3.68307,
    "countryCode": "ES",
    "population": 126058
  },
  {
    "id": "41.649L-0.908",
    "name": "Delicias",
    "lat": 41.64928,
    "lng": -0.90757,
    "countryCode": "ES",
    "population": 110520
  },
  {
    "id": "43.253L-2.916",
    "name": "Santutxu",
    "lat": 43.25347,
    "lng": -2.9161,
    "countryCode": "ES",
    "population": 60000
  },
  {
    "id": "41.404L2.173",
    "name": "Sagrada Família",
    "lat": 41.40408,
    "lng": 2.17332,
    "countryCode": "ES",
    "population": 51623
  },
  {
    "id": "40.498L-3.731",
    "name": "Fuencarral-El Pardo",
    "lat": 40.4984,
    "lng": -3.7314,
    "countryCode": "ES",
    "population": 220085
  },
  {
    "id": "40.367L-3.601",
    "name": "Villa de Vallecas",
    "lat": 40.36695,
    "lng": -3.60146,
    "countryCode": "ES",
    "population": 65162
  },
  {
    "id": "41.403L2.157",
    "name": "la Vila de Gràcia",
    "lat": 41.40315,
    "lng": 2.15687,
    "countryCode": "ES",
    "population": 50928
  },
  {
    "id": "41.383L2.149",
    "name": "la Nova Esquerra de l'Eixample",
    "lat": 41.38309,
    "lng": 2.149,
    "countryCode": "ES",
    "population": 58224
  },
  {
    "id": "41.437L2.190",
    "name": "Sant Andreu",
    "lat": 41.43693,
    "lng": 2.19022,
    "countryCode": "ES",
    "population": 56818
  },
  {
    "id": "41.437L2.190",
    "name": "Barri de Sant Andreu",
    "lat": 41.43693,
    "lng": 2.19022,
    "countryCode": "ES",
    "population": 56818
  },
  {
    "id": "60.294L25.041",
    "name": "Vantaa",
    "lat": 60.29414,
    "lng": 25.04099,
    "countryCode": "FI",
    "population": 190058
  },
  {
    "id": "63.096L21.616",
    "name": "Vaasa",
    "lat": 63.096,
    "lng": 21.61577,
    "countryCode": "FI",
    "population": 57014
  },
  {
    "id": "60.451L22.269",
    "name": "Turku",
    "lat": 60.45148,
    "lng": 22.26869,
    "countryCode": "FI",
    "population": 175945
  },
  {
    "id": "61.499L23.787",
    "name": "Tampere",
    "lat": 61.49911,
    "lng": 23.78712,
    "countryCode": "FI",
    "population": 202687
  },
  {
    "id": "61.483L21.783",
    "name": "Pori",
    "lat": 61.48333,
    "lng": 21.78333,
    "countryCode": "FI",
    "population": 76772
  },
  {
    "id": "65.012L25.468",
    "name": "Oulu",
    "lat": 65.01236,
    "lng": 25.46816,
    "countryCode": "FI",
    "population": 128618
  },
  {
    "id": "61.059L28.189",
    "name": "Lappeenranta",
    "lat": 61.05871,
    "lng": 28.18871,
    "countryCode": "FI",
    "population": 59276
  },
  {
    "id": "60.983L25.662",
    "name": "Lahti",
    "lat": 60.98267,
    "lng": 25.66151,
    "countryCode": "FI",
    "population": 98826
  },
  {
    "id": "62.892L27.677",
    "name": "Kuopio",
    "lat": 62.89238,
    "lng": 27.67703,
    "countryCode": "FI",
    "population": 89104
  },
  {
    "id": "60.466L26.946",
    "name": "Kotka",
    "lat": 60.4664,
    "lng": 26.94582,
    "countryCode": "FI",
    "population": 54616
  },
  {
    "id": "62.241L25.721",
    "name": "Jyväskylä",
    "lat": 62.24147,
    "lng": 25.72088,
    "countryCode": "FI",
    "population": 85026
  },
  {
    "id": "62.601L29.763",
    "name": "Joensuu",
    "lat": 62.60118,
    "lng": 29.76316,
    "countryCode": "FI",
    "population": 53388
  },
  {
    "id": "60.170L24.935",
    "name": "Helsinki",
    "lat": 60.16952,
    "lng": 24.93545,
    "countryCode": "FI",
    "population": 558457
  },
  {
    "id": "60.205L24.652",
    "name": "Espoo",
    "lat": 60.2052,
    "lng": 24.6522,
    "countryCode": "FI",
    "population": 256760
  },
  {
    "id": "48.787L2.403",
    "name": "Vitry-sur-Seine",
    "lat": 48.78716,
    "lng": 2.40332,
    "countryCode": "FR",
    "population": 81001
  },
  {
    "id": "45.767L4.883",
    "name": "Villeurbanne",
    "lat": 45.76667,
    "lng": 4.88333,
    "countryCode": "FR",
    "population": 131445
  },
  {
    "id": "48.800L2.133",
    "name": "Versailles",
    "lat": 48.8,
    "lng": 2.13333,
    "countryCode": "FR",
    "population": 85416
  },
  {
    "id": "45.703L4.871",
    "name": "Vénissieux",
    "lat": 45.70254,
    "lng": 4.87147,
    "countryCode": "FR",
    "population": 57584
  },
  {
    "id": "47.667L-2.750",
    "name": "Vannes",
    "lat": 47.66667,
    "lng": -2.75,
    "countryCode": "FR",
    "population": 54020
  },
  {
    "id": "44.933L4.900",
    "name": "Valence",
    "lat": 44.93333,
    "lng": 4.9,
    "countryCode": "FR",
    "population": 63864
  },
  {
    "id": "48.300L4.083",
    "name": "Troyes",
    "lat": 48.3,
    "lng": 4.08333,
    "countryCode": "FR",
    "population": 60785
  },
  {
    "id": "47.383L0.683",
    "name": "Tours",
    "lat": 47.38333,
    "lng": 0.68333,
    "countryCode": "FR",
    "population": 141621
  },
  {
    "id": "50.724L3.161",
    "name": "Tourcoing",
    "lat": 50.72391,
    "lng": 3.16117,
    "countryCode": "FR",
    "population": 91574
  },
  {
    "id": "43.604L1.444",
    "name": "Toulouse",
    "lat": 43.60426,
    "lng": 1.44367,
    "countryCode": "FR",
    "population": 433055
  },
  {
    "id": "43.124L5.928",
    "name": "Toulon",
    "lat": 43.12442,
    "lng": 5.92836,
    "countryCode": "FR",
    "population": 168701
  },
  {
    "id": "43.233L0.083",
    "name": "Tarbes",
    "lat": 43.23333,
    "lng": 0.08333,
    "countryCode": "FR",
    "population": 52106
  },
  {
    "id": "48.584L7.746",
    "name": "Strasbourg",
    "lat": 48.58392,
    "lng": 7.74553,
    "countryCode": "FR",
    "population": 274845
  },
  {
    "id": "48.948L2.192",
    "name": "Sartrouville",
    "lat": 48.9482,
    "lng": 2.19169,
    "countryCode": "FR",
    "population": 53980
  },
  {
    "id": "49.000L2.383",
    "name": "Sarcelles",
    "lat": 49,
    "lng": 2.38333,
    "countryCode": "FR",
    "population": 57979
  },
  {
    "id": "49.849L3.288",
    "name": "Saint-Quentin",
    "lat": 49.84889,
    "lng": 3.28757,
    "countryCode": "FR",
    "population": 55407
  },
  {
    "id": "47.283L-2.200",
    "name": "Saint-Nazaire",
    "lat": 47.28333,
    "lng": -2.2,
    "countryCode": "FR",
    "population": 67054
  },
  {
    "id": "48.794L2.493",
    "name": "Saint-Maur-des-Fossés",
    "lat": 48.79395,
    "lng": 2.49323,
    "countryCode": "FR",
    "population": 75402
  },
  {
    "id": "48.650L-2.017",
    "name": "Saint-Malo",
    "lat": 48.65,
    "lng": -2.01667,
    "countryCode": "FR",
    "population": 50676
  },
  {
    "id": "45.434L4.390",
    "name": "Saint-Étienne",
    "lat": 45.43389,
    "lng": 4.39,
    "countryCode": "FR",
    "population": 176280
  },
  {
    "id": "48.933L2.367",
    "name": "Saint-Denis",
    "lat": 48.93333,
    "lng": 2.36667,
    "countryCode": "FR",
    "population": 96128
  },
  {
    "id": "48.515L-2.768",
    "name": "Saint-Brieuc",
    "lat": 48.51513,
    "lng": -2.76838,
    "countryCode": "FR",
    "population": 52774
  },
  {
    "id": "48.877L2.190",
    "name": "Rueil-Malmaison",
    "lat": 48.8765,
    "lng": 2.18967,
    "countryCode": "FR",
    "population": 76616
  },
  {
    "id": "49.443L1.099",
    "name": "Rouen",
    "lat": 49.44313,
    "lng": 1.09932,
    "countryCode": "FR",
    "population": 112787
  },
  {
    "id": "50.694L3.175",
    "name": "Roubaix",
    "lat": 50.69421,
    "lng": 3.17456,
    "countryCode": "FR",
    "population": 95721
  },
  {
    "id": "48.112L-1.674",
    "name": "Rennes",
    "lat": 48.11198,
    "lng": -1.67429,
    "countryCode": "FR",
    "population": 209375
  },
  {
    "id": "49.250L4.033",
    "name": "Reims",
    "lat": 49.25,
    "lng": 4.03333,
    "countryCode": "FR",
    "population": 196565
  },
  {
    "id": "48.000L-4.100",
    "name": "Quimper",
    "lat": 48,
    "lng": -4.1,
    "countryCode": "FR",
    "population": 63849
  },
  {
    "id": "46.583L0.333",
    "name": "Poitiers",
    "lat": 46.58333,
    "lng": 0.33333,
    "countryCode": "FR",
    "population": 85960
  },
  {
    "id": "44.810L-0.641",
    "name": "Pessac",
    "lat": 44.81011,
    "lng": -0.64129,
    "countryCode": "FR",
    "population": 57944
  },
  {
    "id": "42.698L2.895",
    "name": "Perpignan",
    "lat": 42.69764,
    "lng": 2.89541,
    "countryCode": "FR",
    "population": 110706
  },
  {
    "id": "43.300L-0.367",
    "name": "Pau",
    "lat": 43.3,
    "lng": -0.36667,
    "countryCode": "FR",
    "population": 82697
  },
  {
    "id": "48.853L2.349",
    "name": "Paris",
    "lat": 48.85341,
    "lng": 2.3488,
    "countryCode": "FR",
    "population": 2138551
  },
  {
    "id": "48.894L2.409",
    "name": "Pantin",
    "lat": 48.89437,
    "lng": 2.40935,
    "countryCode": "FR",
    "population": 52922
  },
  {
    "id": "47.903L1.904",
    "name": "Orléans",
    "lat": 47.90289,
    "lng": 1.90389,
    "countryCode": "FR",
    "population": 124149
  },
  {
    "id": "48.850L2.563",
    "name": "Noisy-le-Grand",
    "lat": 48.84979,
    "lng": 2.56266,
    "countryCode": "FR",
    "population": 62420
  },
  {
    "id": "46.323L-0.459",
    "name": "Niort",
    "lat": 46.32313,
    "lng": -0.45877,
    "countryCode": "FR",
    "population": 54660
  },
  {
    "id": "43.833L4.350",
    "name": "Nîmes",
    "lat": 43.83333,
    "lng": 4.35,
    "countryCode": "FR",
    "population": 148236
  },
  {
    "id": "43.703L7.266",
    "name": "Nice",
    "lat": 43.70313,
    "lng": 7.26608,
    "countryCode": "FR",
    "population": 338620
  },
  {
    "id": "48.885L2.270",
    "name": "Neuilly-sur-Seine",
    "lat": 48.8846,
    "lng": 2.26965,
    "countryCode": "FR",
    "population": 61300
  },
  {
    "id": "43.184L3.001",
    "name": "Narbonne",
    "lat": 43.18396,
    "lng": 3.00141,
    "countryCode": "FR",
    "population": 50776
  },
  {
    "id": "47.217L-1.553",
    "name": "Nantes",
    "lat": 47.21725,
    "lng": -1.55336,
    "countryCode": "FR",
    "population": 277269
  },
  {
    "id": "48.892L2.207",
    "name": "Nanterre",
    "lat": 48.89198,
    "lng": 2.20675,
    "countryCode": "FR",
    "population": 86719
  },
  {
    "id": "48.684L6.185",
    "name": "Nancy",
    "lat": 48.68439,
    "lng": 6.18496,
    "countryCode": "FR",
    "population": 105334
  },
  {
    "id": "47.750L7.333",
    "name": "Mulhouse",
    "lat": 47.75,
    "lng": 7.33333,
    "countryCode": "FR",
    "population": 111430
  },
  {
    "id": "48.864L2.443",
    "name": "Montreuil",
    "lat": 48.86415,
    "lng": 2.44322,
    "countryCode": "FR",
    "population": 90652
  },
  {
    "id": "43.611L3.877",
    "name": "Montpellier",
    "lat": 43.61092,
    "lng": 3.87723,
    "countryCode": "FR",
    "population": 248252
  },
  {
    "id": "44.017L1.350",
    "name": "Montauban",
    "lat": 44.01667,
    "lng": 1.35,
    "countryCode": "FR",
    "population": 52434
  },
  {
    "id": "49.119L6.173",
    "name": "Metz",
    "lat": 49.11911,
    "lng": 6.17269,
    "countryCode": "FR",
    "population": 123914
  },
  {
    "id": "44.832L-0.634",
    "name": "Mérignac",
    "lat": 44.83248,
    "lng": -0.63381,
    "countryCode": "FR",
    "population": 69791
  },
  {
    "id": "48.960L2.879",
    "name": "Meaux",
    "lat": 48.96014,
    "lng": 2.87885,
    "countryCode": "FR",
    "population": 53811
  },
  {
    "id": "43.297L5.381",
    "name": "Marseille",
    "lat": 43.29695,
    "lng": 5.38107,
    "countryCode": "FR",
    "population": 794811
  },
  {
    "id": "48.812L2.439",
    "name": "Maisons-Alfort",
    "lat": 48.81171,
    "lng": 2.43945,
    "countryCode": "FR",
    "population": 53964
  },
  {
    "id": "45.748L4.847",
    "name": "Lyon",
    "lat": 45.74846,
    "lng": 4.84671,
    "countryCode": "FR",
    "population": 472317
  },
  {
    "id": "47.750L-3.367",
    "name": "Lorient",
    "lat": 47.75,
    "lng": -3.36667,
    "countryCode": "FR",
    "population": 58112
  },
  {
    "id": "45.832L1.258",
    "name": "Limoges",
    "lat": 45.83153,
    "lng": 1.25781,
    "countryCode": "FR",
    "population": 141176
  },
  {
    "id": "50.633L3.059",
    "name": "Lille",
    "lat": 50.63297,
    "lng": 3.05858,
    "countryCode": "FR",
    "population": 228328
  },
  {
    "id": "48.894L2.289",
    "name": "Levallois-Perret",
    "lat": 48.89389,
    "lng": 2.28864,
    "countryCode": "FR",
    "population": 62178
  },
  {
    "id": "48.000L0.200",
    "name": "Le Mans",
    "lat": 48,
    "lng": 0.2,
    "countryCode": "FR",
    "population": 144515
  },
  {
    "id": "49.494L0.108",
    "name": "Le Havre",
    "lat": 49.4938,
    "lng": 0.10767,
    "countryCode": "FR",
    "population": 185972
  },
  {
    "id": "48.067L-0.767",
    "name": "Laval",
    "lat": 48.06667,
    "lng": -0.76667,
    "countryCode": "FR",
    "population": 50489
  },
  {
    "id": "43.098L5.885",
    "name": "La Seyne-sur-Mer",
    "lat": 43.09818,
    "lng": 5.88471,
    "countryCode": "FR",
    "population": 62330
  },
  {
    "id": "46.667L-1.433",
    "name": "La Roche-sur-Yon",
    "lat": 46.66667,
    "lng": -1.43333,
    "countryCode": "FR",
    "population": 59410
  },
  {
    "id": "46.167L-1.150",
    "name": "La Rochelle",
    "lat": 46.16667,
    "lng": -1.15,
    "countryCode": "FR",
    "population": 76810
  },
  {
    "id": "48.816L2.385",
    "name": "Ivry-sur-Seine",
    "lat": 48.81568,
    "lng": 2.38487,
    "countryCode": "FR",
    "population": 57897
  },
  {
    "id": "48.821L2.277",
    "name": "Issy-les-Moulineaux",
    "lat": 48.82104,
    "lng": 2.27718,
    "countryCode": "FR",
    "population": 61447
  },
  {
    "id": "43.120L6.129",
    "name": "Hyères",
    "lat": 43.12038,
    "lng": 6.12857,
    "countryCode": "FR",
    "population": 50487
  },
  {
    "id": "45.167L5.717",
    "name": "Grenoble",
    "lat": 45.16667,
    "lng": 5.71667,
    "countryCode": "FR",
    "population": 158552
  },
  {
    "id": "43.433L6.735",
    "name": "Fréjus",
    "lat": 43.43286,
    "lng": 6.73524,
    "countryCode": "FR",
    "population": 53098
  },
  {
    "id": "48.854L2.483",
    "name": "Fontenay-sous-Bois",
    "lat": 48.85442,
    "lng": 2.48268,
    "countryCode": "FR",
    "population": 52075
  },
  {
    "id": "48.633L2.450",
    "name": "Évry",
    "lat": 48.63333,
    "lng": 2.45,
    "countryCode": "FR",
    "population": 51900
  },
  {
    "id": "49.024L1.151",
    "name": "Évreux",
    "lat": 49.02414,
    "lng": 1.15082,
    "countryCode": "FR",
    "population": 57795
  },
  {
    "id": "51.033L2.377",
    "name": "Dunkerque",
    "lat": 51.03297,
    "lng": 2.377,
    "countryCode": "FR",
    "population": 71287
  },
  {
    "id": "48.926L2.445",
    "name": "Drancy",
    "lat": 48.92578,
    "lng": 2.44533,
    "countryCode": "FR",
    "population": 62488
  },
  {
    "id": "47.317L5.017",
    "name": "Dijon",
    "lat": 47.31667,
    "lng": 5.01667,
    "countryCode": "FR",
    "population": 149782
  },
  {
    "id": "48.783L2.467",
    "name": "Créteil",
    "lat": 48.78333,
    "lng": 2.46667,
    "countryCode": "FR",
    "population": 84833
  },
  {
    "id": "48.897L2.257",
    "name": "Courbevoie",
    "lat": 48.89672,
    "lng": 2.25666,
    "countryCode": "FR",
    "population": 85158
  },
  {
    "id": "48.919L2.254",
    "name": "Colombes",
    "lat": 48.91882,
    "lng": 2.25404,
    "countryCode": "FR",
    "population": 82300
  },
  {
    "id": "48.083L7.367",
    "name": "Colmar",
    "lat": 48.08333,
    "lng": 7.36667,
    "countryCode": "FR",
    "population": 65405
  },
  {
    "id": "48.900L2.310",
    "name": "Clichy",
    "lat": 48.90018,
    "lng": 2.30952,
    "countryCode": "FR",
    "population": 57467
  },
  {
    "id": "45.780L3.086",
    "name": "Clermont-Ferrand",
    "lat": 45.77966,
    "lng": 3.08628,
    "countryCode": "FR",
    "population": 138681
  },
  {
    "id": "48.803L2.267",
    "name": "Clamart",
    "lat": 48.80299,
    "lng": 2.26692,
    "countryCode": "FR",
    "population": 51400
  },
  {
    "id": "47.067L-0.883",
    "name": "Cholet",
    "lat": 47.06667,
    "lng": -0.88333,
    "countryCode": "FR",
    "population": 53160
  },
  {
    "id": "46.817L1.700",
    "name": "Châteauroux",
    "lat": 46.81667,
    "lng": 1.7,
    "countryCode": "FR",
    "population": 53301
  },
  {
    "id": "49.767L4.717",
    "name": "Charleville-Mézières",
    "lat": 49.76667,
    "lng": 4.71667,
    "countryCode": "FR",
    "population": 52415
  },
  {
    "id": "48.816L2.494",
    "name": "Champigny-sur-Marne",
    "lat": 48.81642,
    "lng": 2.49366,
    "countryCode": "FR",
    "population": 76726
  },
  {
    "id": "45.567L5.933",
    "name": "Chambéry",
    "lat": 45.56667,
    "lng": 5.93333,
    "countryCode": "FR",
    "population": 61640
  },
  {
    "id": "48.954L4.367",
    "name": "Châlons-en-Champagne",
    "lat": 48.95393,
    "lng": 4.36724,
    "countryCode": "FR",
    "population": 51257
  },
  {
    "id": "49.036L2.076",
    "name": "Cergy",
    "lat": 49.03645,
    "lng": 2.07613,
    "countryCode": "FR",
    "population": 57576
  },
  {
    "id": "43.551L7.013",
    "name": "Cannes",
    "lat": 43.55135,
    "lng": 7.01275,
    "countryCode": "FR",
    "population": 70011
  },
  {
    "id": "50.952L1.856",
    "name": "Calais",
    "lat": 50.95194,
    "lng": 1.85635,
    "countryCode": "FR",
    "population": 74433
  },
  {
    "id": "49.186L-0.359",
    "name": "Caen",
    "lat": 49.18585,
    "lng": -0.35912,
    "countryCode": "FR",
    "population": 110624
  },
  {
    "id": "45.150L1.533",
    "name": "Brive-la-Gaillarde",
    "lat": 45.15,
    "lng": 1.53333,
    "countryCode": "FR",
    "population": 53466
  },
  {
    "id": "48.390L-4.486",
    "name": "Brest",
    "lat": 48.39029,
    "lng": -4.48628,
    "countryCode": "FR",
    "population": 144899
  },
  {
    "id": "47.083L2.400",
    "name": "Bourges",
    "lat": 47.08333,
    "lng": 2.4,
    "countryCode": "FR",
    "population": 67987
  },
  {
    "id": "48.833L2.250",
    "name": "Boulogne-Billancourt",
    "lat": 48.83333,
    "lng": 2.25,
    "countryCode": "FR",
    "population": 108782
  },
  {
    "id": "44.840L-0.581",
    "name": "Bordeaux",
    "lat": 44.84044,
    "lng": -0.5805,
    "countryCode": "FR",
    "population": 231844
  },
  {
    "id": "47.583L1.333",
    "name": "Blois",
    "lat": 47.58333,
    "lng": 1.33333,
    "countryCode": "FR",
    "population": 53660
  },
  {
    "id": "43.341L3.214",
    "name": "Béziers",
    "lat": 43.34122,
    "lng": 3.21402,
    "countryCode": "FR",
    "population": 74081
  },
  {
    "id": "47.249L6.018",
    "name": "Besançon",
    "lat": 47.24878,
    "lng": 6.01815,
    "countryCode": "FR",
    "population": 128426
  },
  {
    "id": "47.633L6.867",
    "name": "Belfort",
    "lat": 47.63333,
    "lng": 6.86667,
    "countryCode": "FR",
    "population": 54562
  },
  {
    "id": "49.433L2.083",
    "name": "Beauvais",
    "lat": 49.43333,
    "lng": 2.08333,
    "countryCode": "FR",
    "population": 53393
  },
  {
    "id": "43.948L4.809",
    "name": "Avignon",
    "lat": 43.94834,
    "lng": 4.80892,
    "countryCode": "FR",
    "population": 89769
  },
  {
    "id": "48.938L2.494",
    "name": "Aulnay-sous-Bois",
    "lat": 48.93814,
    "lng": 2.49402,
    "countryCode": "FR",
    "population": 80615
  },
  {
    "id": "48.917L2.383",
    "name": "Aubervilliers",
    "lat": 48.91667,
    "lng": 2.38333,
    "countryCode": "FR",
    "population": 70914
  },
  {
    "id": "48.917L2.283",
    "name": "Asnières-sur-Seine",
    "lat": 48.91667,
    "lng": 2.28333,
    "countryCode": "FR",
    "population": 86742
  },
  {
    "id": "43.677L4.630",
    "name": "Arles",
    "lat": 43.67681,
    "lng": 4.63031,
    "countryCode": "FR",
    "population": 53431
  },
  {
    "id": "48.950L2.250",
    "name": "Argenteuil",
    "lat": 48.95,
    "lng": 2.25,
    "countryCode": "FR",
    "population": 101475
  },
  {
    "id": "48.750L2.300",
    "name": "Antony",
    "lat": 48.75,
    "lng": 2.3,
    "countryCode": "FR",
    "population": 59845
  },
  {
    "id": "43.562L7.128",
    "name": "Antibes",
    "lat": 43.56241,
    "lng": 7.12777,
    "countryCode": "FR",
    "population": 76393
  },
  {
    "id": "47.467L-0.550",
    "name": "Angers",
    "lat": 47.46667,
    "lng": -0.55,
    "countryCode": "FR",
    "population": 168279
  },
  {
    "id": "49.900L2.300",
    "name": "Amiens",
    "lat": 49.9,
    "lng": 2.3,
    "countryCode": "FR",
    "population": 143086
  },
  {
    "id": "43.930L2.148",
    "name": "Albi",
    "lat": 43.9298,
    "lng": 2.148,
    "countryCode": "FR",
    "population": 52409
  },
  {
    "id": "41.919L8.738",
    "name": "Ajaccio",
    "lat": 41.91886,
    "lng": 8.73812,
    "countryCode": "FR",
    "population": 54364
  },
  {
    "id": "43.528L5.450",
    "name": "Aix-en-Provence",
    "lat": 43.5283,
    "lng": 5.44973,
    "countryCode": "FR",
    "population": 146821
  },
  {
    "id": "50.617L3.167",
    "name": "Villeneuve-d'Ascq",
    "lat": 50.61669,
    "lng": 3.16664,
    "countryCode": "FR",
    "population": 62400
  },
  {
    "id": "43.271L5.382",
    "name": "Marseille 08",
    "lat": 43.27083,
    "lng": 5.3821,
    "countryCode": "FR",
    "population": 78837
  },
  {
    "id": "43.279L5.415",
    "name": "Marseille 10",
    "lat": 43.27889,
    "lng": 5.41523,
    "countryCode": "FR",
    "population": 51299
  },
  {
    "id": "43.254L5.406",
    "name": "Marseille 09",
    "lat": 43.25433,
    "lng": 5.4057,
    "countryCode": "FR",
    "population": 76868
  },
  {
    "id": "43.291L5.438",
    "name": "Marseille 11",
    "lat": 43.2907,
    "lng": 5.4384,
    "countryCode": "FR",
    "population": 56792
  },
  {
    "id": "43.296L5.436",
    "name": "Marseille 12",
    "lat": 43.29614,
    "lng": 5.43617,
    "countryCode": "FR",
    "population": 58734
  },
  {
    "id": "43.319L5.408",
    "name": "Marseille 13",
    "lat": 43.31856,
    "lng": 5.40836,
    "countryCode": "FR",
    "population": 89316
  },
  {
    "id": "43.344L5.380",
    "name": "Marseille 14",
    "lat": 43.34447,
    "lng": 5.38004,
    "countryCode": "FR",
    "population": 61920
  },
  {
    "id": "43.372L5.354",
    "name": "Marseille 15",
    "lat": 43.37224,
    "lng": 5.35386,
    "countryCode": "FR",
    "population": 77770
  },
  {
    "id": "48.772L2.019",
    "name": "Saint-Quentin-en-Yvelines",
    "lat": 48.77186,
    "lng": 2.01891,
    "countryCode": "FR",
    "population": 146598
  },
  {
    "id": "49.039L2.078",
    "name": "Cergy-Pontoise",
    "lat": 49.03894,
    "lng": 2.07805,
    "countryCode": "FR",
    "population": 183430
  },
  {
    "id": "53.958L-1.083",
    "name": "York",
    "lat": 53.95763,
    "lng": -1.08271,
    "countryCode": "GB",
    "population": 153717
  },
  {
    "id": "53.047L-2.991",
    "name": "Wrexham",
    "lat": 53.04664,
    "lng": -2.99132,
    "countryCode": "GB",
    "population": 65692
  },
  {
    "id": "50.818L-0.375",
    "name": "Worthing",
    "lat": 50.81795,
    "lng": -0.37538,
    "countryCode": "GB",
    "population": 99110
  },
  {
    "id": "52.189L-2.220",
    "name": "Worcester",
    "lat": 52.18935,
    "lng": -2.22001,
    "countryCode": "GB",
    "population": 101659
  },
  {
    "id": "52.585L-2.123",
    "name": "Wolverhampton",
    "lat": 52.58547,
    "lng": -2.12296,
    "countryCode": "GB",
    "population": 252791
  },
  {
    "id": "51.319L-0.559",
    "name": "Woking",
    "lat": 51.31903,
    "lng": -0.55893,
    "countryCode": "GB",
    "population": 103932
  },
  {
    "id": "53.543L-2.637",
    "name": "Wigan",
    "lat": 53.54296,
    "lng": -2.63706,
    "countryCode": "GB",
    "population": 175405
  },
  {
    "id": "53.362L-2.734",
    "name": "Widnes",
    "lat": 53.3618,
    "lng": -2.73406,
    "countryCode": "GB",
    "population": 61464
  },
  {
    "id": "50.614L-2.460",
    "name": "Weymouth",
    "lat": 50.61448,
    "lng": -2.45991,
    "countryCode": "GB",
    "population": 57691
  },
  {
    "id": "51.346L-2.977",
    "name": "Weston-super-Mare",
    "lat": 51.34603,
    "lng": -2.97665,
    "countryCode": "GB",
    "population": 82903
  },
  {
    "id": "52.519L-1.994",
    "name": "West Bromwich",
    "lat": 52.51868,
    "lng": -1.9945,
    "countryCode": "GB",
    "population": 135618
  },
  {
    "id": "51.802L-0.207",
    "name": "Welwyn Garden City",
    "lat": 51.80174,
    "lng": -0.20691,
    "countryCode": "GB",
    "population": 59910
  },
  {
    "id": "52.303L-0.694",
    "name": "Wellingborough",
    "lat": 52.30273,
    "lng": -0.69446,
    "countryCode": "GB",
    "population": 50577
  },
  {
    "id": "51.655L-0.396",
    "name": "Watford",
    "lat": 51.65531,
    "lng": -0.39602,
    "countryCode": "GB",
    "population": 125707
  },
  {
    "id": "50.881L-1.030",
    "name": "Waterlooville",
    "lat": 50.88067,
    "lng": -1.0304,
    "countryCode": "GB",
    "population": 64350
  },
  {
    "id": "54.900L-1.517",
    "name": "Washington",
    "lat": 54.9,
    "lng": -1.51667,
    "countryCode": "GB",
    "population": 53526
  },
  {
    "id": "53.393L-2.580",
    "name": "Warrington",
    "lat": 53.39254,
    "lng": -2.58024,
    "countryCode": "GB",
    "population": 165456
  },
  {
    "id": "52.585L-1.984",
    "name": "Walsall",
    "lat": 52.58528,
    "lng": -1.98396,
    "countryCode": "GB",
    "population": 172141
  },
  {
    "id": "53.423L-3.065",
    "name": "Wallasey",
    "lat": 53.42324,
    "lng": -3.06497,
    "countryCode": "GB",
    "population": 58794
  },
  {
    "id": "53.683L-1.498",
    "name": "Wakefield",
    "lat": 53.68331,
    "lng": -1.49768,
    "countryCode": "GB",
    "population": 78978
  },
  {
    "id": "52.456L-2.143",
    "name": "Stourbridge",
    "lat": 52.45608,
    "lng": -2.14317,
    "countryCode": "GB",
    "population": 56284
  },
  {
    "id": "53.004L-2.185",
    "name": "Stoke-on-Trent",
    "lat": 53.00415,
    "lng": -2.18538,
    "countryCode": "GB",
    "population": 372775
  },
  {
    "id": "54.568L-1.319",
    "name": "Stockton-on-Tees",
    "lat": 54.56848,
    "lng": -1.3187,
    "countryCode": "GB",
    "population": 79957
  },
  {
    "id": "53.410L-2.158",
    "name": "Stockport",
    "lat": 53.40979,
    "lng": -2.15761,
    "countryCode": "GB",
    "population": 139052
  },
  {
    "id": "51.902L-0.203",
    "name": "Stevenage",
    "lat": 51.90224,
    "lng": -0.20256,
    "countryCode": "GB",
    "population": 90232
  },
  {
    "id": "51.431L-0.506",
    "name": "Staines",
    "lat": 51.43092,
    "lng": -0.50606,
    "countryCode": "GB",
    "population": 51040
  },
  {
    "id": "52.805L-2.116",
    "name": "Stafford",
    "lat": 52.80521,
    "lng": -2.11636,
    "countryCode": "GB",
    "population": 69217
  },
  {
    "id": "54.999L-1.432",
    "name": "South Shields",
    "lat": 54.99859,
    "lng": -1.4323,
    "countryCode": "GB",
    "population": 83655
  },
  {
    "id": "53.646L-3.010",
    "name": "Southport",
    "lat": 53.64581,
    "lng": -3.01008,
    "countryCode": "GB",
    "population": 91703
  },
  {
    "id": "51.538L0.714",
    "name": "Southend-on-Sea",
    "lat": 51.53782,
    "lng": 0.71433,
    "countryCode": "GB",
    "population": 295310
  },
  {
    "id": "50.904L-1.404",
    "name": "Southampton",
    "lat": 50.90395,
    "lng": -1.40428,
    "countryCode": "GB",
    "population": 246201
  },
  {
    "id": "51.509L-0.371",
    "name": "Southall",
    "lat": 51.50896,
    "lng": -0.3713,
    "countryCode": "GB",
    "population": 70000
  },
  {
    "id": "52.414L-1.781",
    "name": "Solihull",
    "lat": 52.41426,
    "lng": -1.78094,
    "countryCode": "GB",
    "population": 96267
  },
  {
    "id": "51.509L-0.595",
    "name": "Slough",
    "lat": 51.50949,
    "lng": -0.59541,
    "countryCode": "GB",
    "population": 163777
  },
  {
    "id": "52.710L-2.752",
    "name": "Shrewsbury",
    "lat": 52.71009,
    "lng": -2.75208,
    "countryCode": "GB",
    "population": 71715
  },
  {
    "id": "53.383L-1.466",
    "name": "Sheffield",
    "lat": 53.38297,
    "lng": -1.4659,
    "countryCode": "GB",
    "population": 685368
  },
  {
    "id": "53.579L-0.654",
    "name": "Scunthorpe",
    "lat": 53.57905,
    "lng": -0.65437,
    "countryCode": "GB",
    "population": 79977
  },
  {
    "id": "54.280L-0.404",
    "name": "Scarborough",
    "lat": 54.27966,
    "lng": -0.40443,
    "countryCode": "GB",
    "population": 61749
  },
  {
    "id": "53.488L-2.290",
    "name": "Salford",
    "lat": 53.48771,
    "lng": -2.29042,
    "countryCode": "GB",
    "population": 72750
  },
  {
    "id": "53.425L-2.324",
    "name": "Sale",
    "lat": 53.42519,
    "lng": -2.32443,
    "countryCode": "GB",
    "population": 55689
  },
  {
    "id": "51.367L1.417",
    "name": "Saint Peters",
    "lat": 51.36667,
    "lng": 1.41667,
    "countryCode": "GB",
    "population": 125370
  },
  {
    "id": "53.450L-2.733",
    "name": "St Helens",
    "lat": 53.45,
    "lng": -2.73333,
    "countryCode": "GB",
    "population": 102555
  },
  {
    "id": "51.750L-0.333",
    "name": "St Albans",
    "lat": 51.75,
    "lng": -0.33333,
    "countryCode": "GB",
    "population": 84561
  },
  {
    "id": "53.342L-2.731",
    "name": "Runcorn",
    "lat": 53.34174,
    "lng": -2.73124,
    "countryCode": "GB",
    "population": 62872
  },
  {
    "id": "52.371L-1.264",
    "name": "Rugby",
    "lat": 52.37092,
    "lng": -1.26417,
    "countryCode": "GB",
    "population": 73150
  },
  {
    "id": "51.133L0.263",
    "name": "Royal Tunbridge Wells",
    "lat": 51.13321,
    "lng": 0.26256,
    "countryCode": "GB",
    "population": 68910
  },
  {
    "id": "53.430L-1.357",
    "name": "Rotherham",
    "lat": 53.43012,
    "lng": -1.35678,
    "countryCode": "GB",
    "population": 117618
  },
  {
    "id": "53.618L-2.155",
    "name": "Rochdale",
    "lat": 53.61766,
    "lng": -2.1552,
    "countryCode": "GB",
    "population": 97550
  },
  {
    "id": "51.659L-3.449",
    "name": "Rhondda",
    "lat": 51.65896,
    "lng": -3.44885,
    "countryCode": "GB",
    "population": 59450
  },
  {
    "id": "51.237L-0.206",
    "name": "Reigate",
    "lat": 51.23736,
    "lng": -0.20582,
    "countryCode": "GB",
    "population": 52123
  },
  {
    "id": "51.240L-0.170",
    "name": "Redhill",
    "lat": 51.24048,
    "lng": -0.17044,
    "countryCode": "GB",
    "population": 51559
  },
  {
    "id": "52.306L-1.946",
    "name": "Redditch",
    "lat": 52.3065,
    "lng": -1.94569,
    "countryCode": "GB",
    "population": 82253
  },
  {
    "id": "51.456L-0.971",
    "name": "Reading",
    "lat": 51.45625,
    "lng": -0.97113,
    "countryCode": "GB",
    "population": 318014
  },
  {
    "id": "51.337L-0.112",
    "name": "Purley",
    "lat": 51.33678,
    "lng": -0.11201,
    "countryCode": "GB",
    "population": 72000
  },
  {
    "id": "53.763L-2.705",
    "name": "Preston",
    "lat": 53.76282,
    "lng": -2.70452,
    "countryCode": "GB",
    "population": 313332
  },
  {
    "id": "50.799L-1.091",
    "name": "Portsmouth",
    "lat": 50.79899,
    "lng": -1.09125,
    "countryCode": "GB",
    "population": 194150
  },
  {
    "id": "50.714L-1.985",
    "name": "Poole",
    "lat": 50.71429,
    "lng": -1.98458,
    "countryCode": "GB",
    "population": 150092
  },
  {
    "id": "50.372L-4.143",
    "name": "Plymouth",
    "lat": 50.37153,
    "lng": -4.14305,
    "countryCode": "GB",
    "population": 260203
  },
  {
    "id": "52.574L-0.248",
    "name": "Peterborough",
    "lat": 52.57364,
    "lng": -0.24777,
    "countryCode": "GB",
    "population": 163379
  },
  {
    "id": "55.832L-4.433",
    "name": "Paisley",
    "lat": 55.83173,
    "lng": -4.43254,
    "countryCode": "GB",
    "population": 76220
  },
  {
    "id": "51.752L-1.256",
    "name": "Oxford",
    "lat": 51.75222,
    "lng": -1.25596,
    "countryCode": "GB",
    "population": 171380
  },
  {
    "id": "53.541L-2.118",
    "name": "Oldham",
    "lat": 53.54051,
    "lng": -2.1183,
    "countryCode": "GB",
    "population": 104782
  },
  {
    "id": "52.523L-1.465",
    "name": "Nuneaton",
    "lat": 52.52323,
    "lng": -1.46523,
    "countryCode": "GB",
    "population": 92698
  },
  {
    "id": "52.954L-1.150",
    "name": "Nottingham",
    "lat": 52.9536,
    "lng": -1.15047,
    "countryCode": "GB",
    "population": 729977
  },
  {
    "id": "52.628L1.298",
    "name": "Norwich",
    "lat": 52.62783,
    "lng": 1.29834,
    "countryCode": "GB",
    "population": 213166
  },
  {
    "id": "52.250L-0.883",
    "name": "Northampton",
    "lat": 52.25,
    "lng": -0.88333,
    "countryCode": "GB",
    "population": 215963
  },
  {
    "id": "54.660L-5.909",
    "name": "Newtownabbey",
    "lat": 54.65983,
    "lng": -5.90858,
    "countryCode": "GB",
    "population": 63860
  },
  {
    "id": "51.588L-2.998",
    "name": "Newport",
    "lat": 51.58774,
    "lng": -2.99835,
    "countryCode": "GB",
    "population": 306844
  },
  {
    "id": "54.973L-1.614",
    "name": "Newcastle upon Tyne",
    "lat": 54.97328,
    "lng": -1.61396,
    "countryCode": "GB",
    "population": 192382
  },
  {
    "id": "53.000L-2.233",
    "name": "Newcastle under Lyme",
    "lat": 53,
    "lng": -2.23333,
    "countryCode": "GB",
    "population": 75794
  },
  {
    "id": "53.740L-1.599",
    "name": "Morley",
    "lat": 53.74013,
    "lng": -1.59877,
    "countryCode": "GB",
    "population": 57385
  },
  {
    "id": "54.068L-2.861",
    "name": "Morecambe",
    "lat": 54.06835,
    "lng": -2.86108,
    "countryCode": "GB",
    "population": 51644
  },
  {
    "id": "52.042L-0.756",
    "name": "Milton Keynes",
    "lat": 52.04172,
    "lng": -0.75583,
    "countryCode": "GB",
    "population": 229941
  },
  {
    "id": "54.576L-1.235",
    "name": "Middlesbrough",
    "lat": 54.57623,
    "lng": -1.23483,
    "countryCode": "GB",
    "population": 142707
  },
  {
    "id": "51.381L1.386",
    "name": "Margate",
    "lat": 51.38132,
    "lng": 1.38617,
    "countryCode": "GB",
    "population": 60134
  },
  {
    "id": "53.133L-1.200",
    "name": "Mansfield",
    "lat": 53.13333,
    "lng": -1.2,
    "countryCode": "GB",
    "population": 171958
  },
  {
    "id": "53.481L-2.237",
    "name": "Manchester",
    "lat": 53.48095,
    "lng": -2.23743,
    "countryCode": "GB",
    "population": 395515
  },
  {
    "id": "51.267L0.517",
    "name": "Maidstone",
    "lat": 51.26667,
    "lng": 0.51667,
    "countryCode": "GB",
    "population": 107627
  },
  {
    "id": "51.523L-0.720",
    "name": "Maidenhead",
    "lat": 51.52279,
    "lng": -0.71986,
    "countryCode": "GB",
    "population": 64831
  },
  {
    "id": "53.260L-2.126",
    "name": "Macclesfield",
    "lat": 53.26023,
    "lng": -2.12564,
    "countryCode": "GB",
    "population": 63954
  },
  {
    "id": "51.880L-0.417",
    "name": "Luton",
    "lat": 51.87967,
    "lng": -0.41748,
    "countryCode": "GB",
    "population": 258018
  },
  {
    "id": "52.475L1.752",
    "name": "Lowestoft",
    "lat": 52.4752,
    "lng": 1.75159,
    "countryCode": "GB",
    "population": 70945
  },
  {
    "id": "52.767L-1.200",
    "name": "Loughborough",
    "lat": 52.76667,
    "lng": -1.2,
    "countryCode": "GB",
    "population": 59932
  },
  {
    "id": "54.997L-7.309",
    "name": "Londonderry County Borough",
    "lat": 54.99721,
    "lng": -7.30917,
    "countryCode": "GB",
    "population": 87153
  },
  {
    "id": "54.998L-7.309",
    "name": "Derry",
    "lat": 54.9981,
    "lng": -7.30934,
    "countryCode": "GB",
    "population": 83652
  },
  {
    "id": "51.509L-0.126",
    "name": "London",
    "lat": 51.50853,
    "lng": -0.12574,
    "countryCode": "GB",
    "population": 7556900
  },
  {
    "id": "55.903L-3.523",
    "name": "Livingston",
    "lat": 55.90288,
    "lng": -3.52261,
    "countryCode": "GB",
    "population": 56570
  },
  {
    "id": "53.411L-2.978",
    "name": "Liverpool",
    "lat": 53.41058,
    "lng": -2.97794,
    "countryCode": "GB",
    "population": 864122
  },
  {
    "id": "50.811L-0.541",
    "name": "Littlehampton",
    "lat": 50.81137,
    "lng": -0.54078,
    "countryCode": "GB",
    "population": 58714
  },
  {
    "id": "54.523L-6.035",
    "name": "Lisburn",
    "lat": 54.52337,
    "lng": -6.03527,
    "countryCode": "GB",
    "population": 77506
  },
  {
    "id": "53.227L-0.538",
    "name": "Lincoln",
    "lat": 53.22683,
    "lng": -0.53792,
    "countryCode": "GB",
    "population": 114879
  },
  {
    "id": "52.639L-1.132",
    "name": "Leicester",
    "lat": 52.6386,
    "lng": -1.13169,
    "countryCode": "GB",
    "population": 508916
  },
  {
    "id": "53.796L-1.548",
    "name": "Leeds",
    "lat": 53.79648,
    "lng": -1.54785,
    "countryCode": "GB",
    "population": 455123
  },
  {
    "id": "52.300L-1.533",
    "name": "Royal Leamington Spa",
    "lat": 52.3,
    "lng": -1.53333,
    "countryCode": "GB",
    "population": 95172
  },
  {
    "id": "51.453L-2.508",
    "name": "Kingswood",
    "lat": 51.45278,
    "lng": -2.50833,
    "countryCode": "GB",
    "population": 64793
  },
  {
    "id": "53.745L-0.335",
    "name": "Kingston upon Hull",
    "lat": 53.7446,
    "lng": -0.33525,
    "countryCode": "GB",
    "population": 314018
  },
  {
    "id": "52.388L-2.250",
    "name": "Kidderminster",
    "lat": 52.38819,
    "lng": -2.25,
    "countryCode": "GB",
    "population": 57059
  },
  {
    "id": "52.398L-0.726",
    "name": "Kettering",
    "lat": 52.39836,
    "lng": -0.72571,
    "countryCode": "GB",
    "population": 63675
  },
  {
    "id": "53.868L-1.907",
    "name": "Keighley",
    "lat": 53.86791,
    "lng": -1.90664,
    "countryCode": "GB",
    "population": 50171
  },
  {
    "id": "51.536L-0.103",
    "name": "Islington",
    "lat": 51.53622,
    "lng": -0.10304,
    "countryCode": "GB",
    "population": 319143
  },
  {
    "id": "51.889L0.904",
    "name": "Irvine",
    "lat": 51.88921,
    "lng": 0.90421,
    "countryCode": "GB",
    "population": 121859
  },
  {
    "id": "51.790L1.156",
    "name": "Clacton-on-Sea",
    "lat": 51.78967,
    "lng": 1.15597,
    "countryCode": "GB",
    "population": 50548
  },
  {
    "id": "53.250L-1.417",
    "name": "Chesterfield",
    "lat": 53.25,
    "lng": -1.41667,
    "countryCode": "GB",
    "population": 113057
  },
  {
    "id": "53.191L-2.892",
    "name": "Chester",
    "lat": 53.1905,
    "lng": -2.89189,
    "countryCode": "GB",
    "population": 90524
  },
  {
    "id": "51.700L-0.030",
    "name": "Cheshunt",
    "lat": 51.7002,
    "lng": -0.03026,
    "countryCode": "GB",
    "population": 57374
  },
  {
    "id": "51.900L-2.080",
    "name": "Cheltenham",
    "lat": 51.90006,
    "lng": -2.07972,
    "countryCode": "GB",
    "population": 116447
  },
  {
    "id": "51.488L-0.169",
    "name": "Chelsea",
    "lat": 51.48755,
    "lng": -0.16936,
    "countryCode": "GB",
    "population": 60000
  },
  {
    "id": "51.736L0.470",
    "name": "Chelmsford",
    "lat": 51.73575,
    "lng": 0.46958,
    "countryCode": "GB",
    "population": 111511
  },
  {
    "id": "51.379L0.528",
    "name": "Chatham",
    "lat": 51.37891,
    "lng": 0.52786,
    "countryCode": "GB",
    "population": 75509
  },
  {
    "id": "54.574L-5.885",
    "name": "Castlereagh",
    "lat": 54.5735,
    "lng": -5.88472,
    "countryCode": "GB",
    "population": 56679
  },
  {
    "id": "53.726L-1.363",
    "name": "Castleford",
    "lat": 53.72587,
    "lng": -1.36256,
    "countryCode": "GB",
    "population": 60509
  },
  {
    "id": "54.895L-2.938",
    "name": "Carlisle",
    "lat": 54.8951,
    "lng": -2.9382,
    "countryCode": "GB",
    "population": 78470
  },
  {
    "id": "51.480L-3.180",
    "name": "Cardiff",
    "lat": 51.48,
    "lng": -3.18,
    "countryCode": "GB",
    "population": 447287
  },
  {
    "id": "51.279L1.080",
    "name": "Canterbury",
    "lat": 51.27904,
    "lng": 1.07992,
    "countryCode": "GB",
    "population": 55240
  },
  {
    "id": "52.690L-2.031",
    "name": "Cannock",
    "lat": 52.69045,
    "lng": -2.03085,
    "countryCode": "GB",
    "population": 86121
  },
  {
    "id": "52.200L0.117",
    "name": "Cambridge",
    "lat": 52.2,
    "lng": 0.11667,
    "countryCode": "GB",
    "population": 158434
  },
  {
    "id": "53.600L-2.300",
    "name": "Bury",
    "lat": 53.6,
    "lng": -2.3,
    "countryCode": "GB",
    "population": 61044
  },
  {
    "id": "52.807L-1.643",
    "name": "Burton upon Trent",
    "lat": 52.80728,
    "lng": -1.64263,
    "countryCode": "GB",
    "population": 122199
  },
  {
    "id": "53.800L-2.233",
    "name": "Burnley",
    "lat": 53.8,
    "lng": -2.23333,
    "countryCode": "GB",
    "population": 149422
  },
  {
    "id": "53.167L-3.083",
    "name": "Buckley",
    "lat": 53.16667,
    "lng": -3.08333,
    "countryCode": "GB",
    "population": 63576
  },
  {
    "id": "51.455L-2.597",
    "name": "Bristol",
    "lat": 51.45523,
    "lng": -2.59665,
    "countryCode": "GB",
    "population": 617280
  },
  {
    "id": "50.828L-0.139",
    "name": "Brighton",
    "lat": 50.82838,
    "lng": -0.13947,
    "countryCode": "GB",
    "population": 139001
  },
  {
    "id": "51.506L-3.577",
    "name": "Bridgend",
    "lat": 51.50583,
    "lng": -3.57722,
    "countryCode": "GB",
    "population": 58380
  },
  {
    "id": "51.621L0.306",
    "name": "Brentwood",
    "lat": 51.62127,
    "lng": 0.30556,
    "countryCode": "GB",
    "population": 52586
  },
  {
    "id": "51.878L0.553",
    "name": "Braintree",
    "lat": 51.87819,
    "lng": 0.55292,
    "countryCode": "GB",
    "population": 53477
  },
  {
    "id": "53.794L-1.752",
    "name": "Bradford",
    "lat": 53.79391,
    "lng": -1.75206,
    "countryCode": "GB",
    "population": 299310
  },
  {
    "id": "51.414L-0.751",
    "name": "Bracknell",
    "lat": 51.41363,
    "lng": -0.75054,
    "countryCode": "GB",
    "population": 76103
  },
  {
    "id": "50.720L-1.879",
    "name": "Bournemouth",
    "lat": 50.72048,
    "lng": -1.8795,
    "countryCode": "GB",
    "population": 163600
  },
  {
    "id": "53.467L-3.017",
    "name": "Bootle",
    "lat": 53.46667,
    "lng": -3.01667,
    "countryCode": "GB",
    "population": 57791
  },
  {
    "id": "53.583L-2.433",
    "name": "Bolton",
    "lat": 53.58333,
    "lng": -2.43333,
    "countryCode": "GB",
    "population": 141331
  },
  {
    "id": "50.782L-0.680",
    "name": "Bognor Regis",
    "lat": 50.78206,
    "lng": -0.67978,
    "countryCode": "GB",
    "population": 63885
  },
  {
    "id": "51.993L-0.735",
    "name": "Bletchley",
    "lat": 51.99334,
    "lng": -0.73471,
    "countryCode": "GB",
    "population": 50193
  },
  {
    "id": "53.817L-3.050",
    "name": "Blackpool",
    "lat": 53.81667,
    "lng": -3.05,
    "countryCode": "GB",
    "population": 239409
  },
  {
    "id": "53.750L-2.483",
    "name": "Blackburn",
    "lat": 53.75,
    "lng": -2.48333,
    "countryCode": "GB",
    "population": 146521
  },
  {
    "id": "52.481L-1.900",
    "name": "Birmingham",
    "lat": 52.48142,
    "lng": -1.89983,
    "countryCode": "GB",
    "population": 984333
  },
  {
    "id": "53.393L-3.015",
    "name": "Birkenhead",
    "lat": 53.39337,
    "lng": -3.01479,
    "countryCode": "GB",
    "population": 325264
  },
  {
    "id": "51.442L0.149",
    "name": "Bexley",
    "lat": 51.44162,
    "lng": 0.14866,
    "countryCode": "GB",
    "population": 228000
  },
  {
    "id": "54.597L-5.925",
    "name": "Belfast",
    "lat": 54.59682,
    "lng": -5.92541,
    "countryCode": "GB",
    "population": 274770
  },
  {
    "id": "52.135L-0.466",
    "name": "Bedford",
    "lat": 52.13459,
    "lng": -0.46632,
    "countryCode": "GB",
    "population": 106940
  },
  {
    "id": "51.409L-0.025",
    "name": "Beckenham",
    "lat": 51.40878,
    "lng": -0.02526,
    "countryCode": "GB",
    "population": 82000
  },
  {
    "id": "53.703L-1.634",
    "name": "Batley",
    "lat": 53.70291,
    "lng": -1.6337,
    "countryCode": "GB",
    "population": 50807
  },
  {
    "id": "51.375L-2.362",
    "name": "Bath",
    "lat": 51.3751,
    "lng": -2.36172,
    "countryCode": "GB",
    "population": 94782
  },
  {
    "id": "51.262L-1.087",
    "name": "Basingstoke",
    "lat": 51.26249,
    "lng": -1.08708,
    "countryCode": "GB",
    "population": 107642
  },
  {
    "id": "51.568L0.458",
    "name": "Basildon",
    "lat": 51.56844,
    "lng": 0.45782,
    "countryCode": "GB",
    "population": 144859
  },
  {
    "id": "51.400L-3.284",
    "name": "Barry",
    "lat": 51.39979,
    "lng": -3.2838,
    "countryCode": "GB",
    "population": 54673
  },
  {
    "id": "53.550L-1.483",
    "name": "Barnsley",
    "lat": 53.55,
    "lng": -1.48333,
    "countryCode": "GB",
    "population": 71447
  },
  {
    "id": "51.533L0.083",
    "name": "Barking",
    "lat": 51.53333,
    "lng": 0.08333,
    "countryCode": "GB",
    "population": 61000
  },
  {
    "id": "54.653L-5.669",
    "name": "Bangor",
    "lat": 54.65338,
    "lng": -5.66895,
    "countryCode": "GB",
    "population": 60385
  },
  {
    "id": "51.817L-0.815",
    "name": "Aylesbury",
    "lat": 51.81665,
    "lng": -0.81458,
    "countryCode": "GB",
    "population": 74748
  },
  {
    "id": "51.146L0.874",
    "name": "Ashford",
    "lat": 51.14648,
    "lng": 0.87376,
    "countryCode": "GB",
    "population": 62787
  },
  {
    "id": "51.248L-0.764",
    "name": "Aldershot",
    "lat": 51.24827,
    "lng": -0.76389,
    "countryCode": "GB",
    "population": 61339
  },
  {
    "id": "51.509L-0.276",
    "name": "Acton",
    "lat": 51.50901,
    "lng": -0.2762,
    "countryCode": "GB",
    "population": 53689
  },
  {
    "id": "57.144L-2.098",
    "name": "Aberdeen",
    "lat": 57.14369,
    "lng": -2.09814,
    "countryCode": "GB",
    "population": 196670
  },
  {
    "id": "53.478L-3.033",
    "name": "Crosby",
    "lat": 53.47778,
    "lng": -3.03333,
    "countryCode": "GB",
    "population": 52140
  },
  {
    "id": "51.622L-3.455",
    "name": "Tonypandy",
    "lat": 51.62202,
    "lng": -3.45544,
    "countryCode": "GB",
    "population": 62545
  },
  {
    "id": "52.677L-2.449",
    "name": "Telford",
    "lat": 52.67659,
    "lng": -2.44926,
    "countryCode": "GB",
    "population": 147980
  },
  {
    "id": "54.447L-6.387",
    "name": "Craigavon",
    "lat": 54.44709,
    "lng": -6.387,
    "countryCode": "GB",
    "population": 59236
  },
  {
    "id": "51.475L-0.155",
    "name": "Battersea",
    "lat": 51.47475,
    "lng": -0.15547,
    "countryCode": "GB",
    "population": 75651
  },
  {
    "id": "51.362L-0.094",
    "name": "South Croydon",
    "lat": 51.36217,
    "lng": -0.09421,
    "countryCode": "GB",
    "population": 55198
  },
  {
    "id": "51.553L0.129",
    "name": "Becontree",
    "lat": 51.5529,
    "lng": 0.129,
    "countryCode": "GB",
    "population": 100000
  },
  {
    "id": "51.466L-0.107",
    "name": "Brixton",
    "lat": 51.46593,
    "lng": -0.10652,
    "countryCode": "GB",
    "population": 66300
  },
  {
    "id": "51.505L-0.021",
    "name": "Canary Wharf",
    "lat": 51.50519,
    "lng": -0.02085,
    "countryCode": "GB",
    "population": 73390
  },
  {
    "id": "51.237L-2.627",
    "name": "Mendip",
    "lat": 51.2372,
    "lng": -2.6266,
    "countryCode": "GB",
    "population": 110000
  },
  {
    "id": "53.685L-2.277",
    "name": "Rossendale",
    "lat": 53.68456,
    "lng": -2.2769,
    "countryCode": "GB",
    "population": 67400
  },
  {
    "id": "53.368L-1.845",
    "name": "High Peak",
    "lat": 53.36797,
    "lng": -1.84536,
    "countryCode": "GB",
    "population": 92600
  },
  {
    "id": "39.361L22.942",
    "name": "Volos",
    "lat": 39.36103,
    "lng": 22.94248,
    "countryCode": "GR",
    "population": 86048
  },
  {
    "id": "37.961L23.753",
    "name": "Výronas",
    "lat": 37.96105,
    "lng": 23.753,
    "countryCode": "GR",
    "population": 61308
  },
  {
    "id": "39.555L21.768",
    "name": "Tríkala",
    "lat": 39.55493,
    "lng": 21.76837,
    "countryCode": "GR",
    "population": 61653
  },
  {
    "id": "37.947L23.637",
    "name": "Piraeus",
    "lat": 37.94745,
    "lng": 23.63708,
    "countryCode": "GR",
    "population": 163688
  },
  {
    "id": "38.042L23.685",
    "name": "Petroúpolis",
    "lat": 38.04187,
    "lng": 23.68494,
    "countryCode": "GR",
    "population": 58979
  },
  {
    "id": "38.015L23.692",
    "name": "Peristéri",
    "lat": 38.01539,
    "lng": 23.69187,
    "countryCode": "GR",
    "population": 139981
  },
  {
    "id": "38.244L21.734",
    "name": "Pátra",
    "lat": 38.24444,
    "lng": 21.73444,
    "countryCode": "GR",
    "population": 168034
  },
  {
    "id": "37.928L23.701",
    "name": "Palaió Fáliro",
    "lat": 37.92812,
    "lng": 23.70105,
    "countryCode": "GR",
    "population": 64021
  },
  {
    "id": "37.967L23.650",
    "name": "Níkaia",
    "lat": 37.96667,
    "lng": 23.65,
    "countryCode": "GR",
    "population": 89380
  },
  {
    "id": "37.945L23.714",
    "name": "Néa Smýrni",
    "lat": 37.94504,
    "lng": 23.71416,
    "countryCode": "GR",
    "population": 73076
  },
  {
    "id": "38.033L23.700",
    "name": "Ílion",
    "lat": 38.03333,
    "lng": 23.7,
    "countryCode": "GR",
    "population": 84793
  },
  {
    "id": "38.036L23.757",
    "name": "Néa Ionía",
    "lat": 38.0357,
    "lng": 23.75733,
    "countryCode": "GR",
    "population": 67134
  },
  {
    "id": "39.637L22.418",
    "name": "Lárisa",
    "lat": 39.63689,
    "lng": 22.41761,
    "countryCode": "GR",
    "population": 144651
  },
  {
    "id": "38.900L22.433",
    "name": "Lamía",
    "lat": 38.9,
    "lng": 22.43333,
    "countryCode": "GR",
    "population": 52006
  },
  {
    "id": "35.511L24.029",
    "name": "Chaniá",
    "lat": 35.51124,
    "lng": 24.02921,
    "countryCode": "GR",
    "population": 53910
  },
  {
    "id": "38.464L23.603",
    "name": "Chalkída",
    "lat": 38.46354,
    "lng": 23.60284,
    "countryCode": "GR",
    "population": 59125
  },
  {
    "id": "38.024L23.801",
    "name": "Khalándrion",
    "lat": 38.02369,
    "lng": 23.80068,
    "countryCode": "GR",
    "population": 74192
  },
  {
    "id": "37.962L23.620",
    "name": "Keratsíni",
    "lat": 37.9625,
    "lng": 23.61972,
    "countryCode": "GR",
    "population": 77077
  },
  {
    "id": "37.950L23.700",
    "name": "Kallithéa",
    "lat": 37.95,
    "lng": 23.7,
    "countryCode": "GR",
    "population": 100641
  },
  {
    "id": "37.039L22.113",
    "name": "Kalamata",
    "lat": 37.03913,
    "lng": 22.11265,
    "countryCode": "GR",
    "population": 54100
  },
  {
    "id": "35.328L25.143",
    "name": "Irákleion",
    "lat": 35.32787,
    "lng": 25.14341,
    "countryCode": "GR",
    "population": 137154
  },
  {
    "id": "39.665L20.852",
    "name": "Ioánnina",
    "lat": 39.66486,
    "lng": 20.85189,
    "countryCode": "GR",
    "population": 65574
  },
  {
    "id": "37.863L23.758",
    "name": "Glyfáda",
    "lat": 37.86289,
    "lng": 23.75802,
    "countryCode": "GR",
    "population": 87305
  },
  {
    "id": "38.017L23.750",
    "name": "Galátsi",
    "lat": 38.01667,
    "lng": 23.75,
    "countryCode": "GR",
    "population": 59345
  },
  {
    "id": "37.933L23.733",
    "name": "Agios Dimitrios",
    "lat": 37.93333,
    "lng": 23.73333,
    "countryCode": "GR",
    "population": 71294
  },
  {
    "id": "38.017L23.833",
    "name": "Agía Paraskeví",
    "lat": 38.01667,
    "lng": 23.83333,
    "countryCode": "GR",
    "population": 59704
  },
  {
    "id": "37.979L23.716",
    "name": "Athens",
    "lat": 37.97945,
    "lng": 23.71622,
    "countryCode": "GR",
    "population": 664046
  },
  {
    "id": "38.050L23.800",
    "name": "Maroúsi",
    "lat": 38.05,
    "lng": 23.8,
    "countryCode": "GR",
    "population": 72333
  },
  {
    "id": "38.083L23.733",
    "name": "Acharnés",
    "lat": 38.08333,
    "lng": 23.73333,
    "countryCode": "GR",
    "population": 99346
  },
  {
    "id": "37.983L23.683",
    "name": "Aigáleo",
    "lat": 37.98333,
    "lng": 23.68333,
    "countryCode": "GR",
    "population": 69946
  },
  {
    "id": "36.436L28.222",
    "name": "Ródos",
    "lat": 36.43556,
    "lng": 28.22199,
    "countryCode": "GR",
    "population": 56128
  },
  {
    "id": "40.644L22.931",
    "name": "Thessaloníki",
    "lat": 40.64361,
    "lng": 22.93086,
    "countryCode": "GR",
    "population": 354290
  },
  {
    "id": "41.085L23.548",
    "name": "Sérres",
    "lat": 41.08499,
    "lng": 23.54757,
    "countryCode": "GR",
    "population": 58287
  },
  {
    "id": "40.940L24.407",
    "name": "Kavála",
    "lat": 40.93959,
    "lng": 24.40687,
    "countryCode": "GR",
    "population": 54027
  },
  {
    "id": "40.270L22.506",
    "name": "Kateríni",
    "lat": 40.26956,
    "lng": 22.50608,
    "countryCode": "GR",
    "population": 53293
  },
  {
    "id": "40.583L22.950",
    "name": "Kalamariá",
    "lat": 40.5825,
    "lng": 22.95028,
    "countryCode": "GR",
    "population": 91617
  },
  {
    "id": "40.850L25.876",
    "name": "Alexandroupoli",
    "lat": 40.84995,
    "lng": 25.87644,
    "countryCode": "GR",
    "population": 52979
  },
  {
    "id": "37.931L23.768",
    "name": "Ilioúpoli",
    "lat": 37.93149,
    "lng": 23.76779,
    "countryCode": "GR",
    "population": 78153
  },
  {
    "id": "37.985L23.647",
    "name": "Korydallós",
    "lat": 37.98468,
    "lng": 23.64711,
    "countryCode": "GR",
    "population": 63445
  },
  {
    "id": "37.976L23.769",
    "name": "Zográfos",
    "lat": 37.97574,
    "lng": 23.76911,
    "countryCode": "GR",
    "population": 71026
  },
  {
    "id": "45.814L15.978",
    "name": "Zagreb",
    "lat": 45.81444,
    "lng": 15.97798,
    "countryCode": "HR",
    "population": 698966
  },
  {
    "id": "44.120L15.242",
    "name": "Zadar",
    "lat": 44.11972,
    "lng": 15.24222,
    "countryCode": "HR",
    "population": 71258
  },
  {
    "id": "43.509L16.439",
    "name": "Split",
    "lat": 43.50891,
    "lng": 16.43915,
    "countryCode": "HR",
    "population": 176314
  },
  {
    "id": "45.160L18.016",
    "name": "Slavonski Brod",
    "lat": 45.16028,
    "lng": 18.01556,
    "countryCode": "HR",
    "population": 60742
  },
  {
    "id": "45.831L16.116",
    "name": "Sesvete",
    "lat": 45.83111,
    "lng": 16.11639,
    "countryCode": "HR",
    "population": 52411
  },
  {
    "id": "45.327L14.442",
    "name": "Rijeka",
    "lat": 45.32673,
    "lng": 14.44241,
    "countryCode": "HR",
    "population": 141172
  },
  {
    "id": "44.868L13.848",
    "name": "Pula",
    "lat": 44.86833,
    "lng": 13.84806,
    "countryCode": "HR",
    "population": 59078
  },
  {
    "id": "45.551L18.694",
    "name": "Osijek",
    "lat": 45.55111,
    "lng": 18.69389,
    "countryCode": "HR",
    "population": 88140
  },
  {
    "id": "47.183L20.200",
    "name": "Szolnok",
    "lat": 47.18333,
    "lng": 20.2,
    "countryCode": "HU",
    "population": 75474
  },
  {
    "id": "46.253L20.148",
    "name": "Szeged",
    "lat": 46.253,
    "lng": 20.14824,
    "countryCode": "HU",
    "population": 164883
  },
  {
    "id": "47.955L21.717",
    "name": "Nyíregyháza",
    "lat": 47.95539,
    "lng": 21.71671,
    "countryCode": "HU",
    "population": 116298
  },
  {
    "id": "48.100L20.783",
    "name": "Miskolc",
    "lat": 48.1,
    "lng": 20.78333,
    "countryCode": "HU",
    "population": 172637
  },
  {
    "id": "47.903L20.373",
    "name": "Eger",
    "lat": 47.90265,
    "lng": 20.37329,
    "countryCode": "HU",
    "population": 56647
  },
  {
    "id": "47.533L21.633",
    "name": "Debrecen",
    "lat": 47.53333,
    "lng": 21.63333,
    "countryCode": "HU",
    "population": 204124
  },
  {
    "id": "46.683L21.100",
    "name": "Békéscsaba",
    "lat": 46.68333,
    "lng": 21.1,
    "countryCode": "HU",
    "population": 65206
  },
  {
    "id": "46.840L16.844",
    "name": "Zalaegerszeg",
    "lat": 46.84,
    "lng": 16.84389,
    "countryCode": "HU",
    "population": 61898
  },
  {
    "id": "47.093L17.911",
    "name": "Veszprém",
    "lat": 47.09327,
    "lng": 17.91149,
    "countryCode": "HU",
    "population": 62023
  },
  {
    "id": "47.585L18.393",
    "name": "Tatabánya",
    "lat": 47.58494,
    "lng": 18.39325,
    "countryCode": "HU",
    "population": 70541
  },
  {
    "id": "47.231L16.622",
    "name": "Szombathely",
    "lat": 47.23088,
    "lng": 16.62155,
    "countryCode": "HU",
    "population": 79534
  },
  {
    "id": "47.190L18.410",
    "name": "Székesfehérvár",
    "lat": 47.18995,
    "lng": 18.41034,
    "countryCode": "HU",
    "population": 101600
  },
  {
    "id": "47.685L16.590",
    "name": "Sopron",
    "lat": 47.68501,
    "lng": 16.59049,
    "countryCode": "HU",
    "population": 57210
  },
  {
    "id": "46.083L18.233",
    "name": "Pécs",
    "lat": 46.08333,
    "lng": 18.23333,
    "countryCode": "HU",
    "population": 156649
  },
  {
    "id": "47.913L19.977",
    "name": "Parádsasvár",
    "lat": 47.9126,
    "lng": 19.97709,
    "countryCode": "HU",
    "population": 76000
  },
  {
    "id": "46.453L16.991",
    "name": "Nagykanizsa",
    "lat": 46.45347,
    "lng": 16.99104,
    "countryCode": "HU",
    "population": 50823
  },
  {
    "id": "46.906L19.691",
    "name": "Kecskemét",
    "lat": 46.90618,
    "lng": 19.69128,
    "countryCode": "HU",
    "population": 109847
  },
  {
    "id": "46.367L17.800",
    "name": "Kaposvár",
    "lat": 46.36667,
    "lng": 17.8,
    "countryCode": "HU",
    "population": 67746
  },
  {
    "id": "47.683L17.635",
    "name": "Győr",
    "lat": 47.68333,
    "lng": 17.63512,
    "countryCode": "HU",
    "population": 128265
  },
  {
    "id": "47.502L19.072",
    "name": "Erzsébetváros",
    "lat": 47.50207,
    "lng": 19.07218,
    "countryCode": "HU",
    "population": 62000
  },
  {
    "id": "47.395L18.914",
    "name": "Érd",
    "lat": 47.39489,
    "lng": 18.91361,
    "countryCode": "HU",
    "population": 62408
  },
  {
    "id": "46.965L18.940",
    "name": "Dunaújváros",
    "lat": 46.96479,
    "lng": 18.93974,
    "countryCode": "HU",
    "population": 50084
  },
  {
    "id": "47.498L19.040",
    "name": "Budapest",
    "lat": 47.49801,
    "lng": 19.03991,
    "countryCode": "HU",
    "population": 1741041
  },
  {
    "id": "47.492L19.015",
    "name": "Budapest XII. kerület",
    "lat": 47.49192,
    "lng": 19.01493,
    "countryCode": "HU",
    "population": 56544
  },
  {
    "id": "47.476L19.036",
    "name": "Budapest XI. kerület",
    "lat": 47.47603,
    "lng": 19.03605,
    "countryCode": "HU",
    "population": 139049
  },
  {
    "id": "47.489L19.070",
    "name": "Budapest VIII. kerület",
    "lat": 47.48919,
    "lng": 19.07012,
    "countryCode": "HU",
    "population": 82222
  },
  {
    "id": "47.530L19.081",
    "name": "Budapest XIII. kerület",
    "lat": 47.52978,
    "lng": 19.08068,
    "countryCode": "HU",
    "population": 113531
  },
  {
    "id": "47.562L19.089",
    "name": "Budapest IV. kerület",
    "lat": 47.56182,
    "lng": 19.08909,
    "countryCode": "HU",
    "population": 98374
  },
  {
    "id": "47.563L19.117",
    "name": "Budapest XV. kerület",
    "lat": 47.56263,
    "lng": 19.11681,
    "countryCode": "HU",
    "population": 80218
  },
  {
    "id": "47.515L19.170",
    "name": "Budapest XVI. kerület",
    "lat": 47.51482,
    "lng": 19.17028,
    "countryCode": "HU",
    "population": 68484
  },
  {
    "id": "47.479L19.158",
    "name": "Budapest X. kerület",
    "lat": 47.4791,
    "lng": 19.15835,
    "countryCode": "HU",
    "population": 79270
  },
  {
    "id": "47.453L19.149",
    "name": "Budapest XIX. kerület",
    "lat": 47.45293,
    "lng": 19.14943,
    "countryCode": "HU",
    "population": 61610
  },
  {
    "id": "47.444L19.176",
    "name": "Budapest XVIII. kerület",
    "lat": 47.44417,
    "lng": 19.17595,
    "countryCode": "HU",
    "population": 93225
  },
  {
    "id": "47.427L19.040",
    "name": "Budapest XXII. kerület",
    "lat": 47.42698,
    "lng": 19.04016,
    "countryCode": "HU",
    "population": 50499
  },
  {
    "id": "47.430L19.071",
    "name": "Budapest XXI. kerület",
    "lat": 47.43047,
    "lng": 19.07098,
    "countryCode": "HU",
    "population": 76339
  },
  {
    "id": "47.437L19.101",
    "name": "Budapest XX. kerület",
    "lat": 47.43674,
    "lng": 19.10093,
    "countryCode": "HU",
    "population": 63371
  },
  {
    "id": "47.480L19.254",
    "name": "Budapest XVII. kerület",
    "lat": 47.47997,
    "lng": 19.25388,
    "countryCode": "HU",
    "population": 78250
  },
  {
    "id": "47.542L19.045",
    "name": "Budapest III. kerület",
    "lat": 47.54157,
    "lng": 19.04501,
    "countryCode": "HU",
    "population": 123723
  },
  {
    "id": "47.520L19.022",
    "name": "Budapest II. kerület",
    "lat": 47.51984,
    "lng": 19.02218,
    "countryCode": "HU",
    "population": 88729
  },
  {
    "id": "53.286L-6.373",
    "name": "Tallaght",
    "lat": 53.2859,
    "lng": -6.37344,
    "countryCode": "IE",
    "population": 64282
  },
  {
    "id": "52.665L-8.623",
    "name": "Luimneach",
    "lat": 52.66472,
    "lng": -8.62306,
    "countryCode": "IE",
    "population": 90054
  },
  {
    "id": "53.272L-9.049",
    "name": "Gaillimh",
    "lat": 53.27194,
    "lng": -9.04889,
    "countryCode": "IE",
    "population": 70686
  },
  {
    "id": "53.294L-6.136",
    "name": "Dún Laoghaire",
    "lat": 53.29395,
    "lng": -6.13586,
    "countryCode": "IE",
    "population": 185400
  },
  {
    "id": "53.333L-6.249",
    "name": "Dublin",
    "lat": 53.33306,
    "lng": -6.24889,
    "countryCode": "IE",
    "population": 1024027
  },
  {
    "id": "51.898L-8.471",
    "name": "Cork",
    "lat": 51.89797,
    "lng": -8.47061,
    "countryCode": "IE",
    "population": 190384
  },
  {
    "id": "36.952L14.528",
    "name": "Vittoria",
    "lat": 36.95151,
    "lng": 14.52788,
    "countryCode": "IT",
    "population": 50852
  },
  {
    "id": "38.018L12.536",
    "name": "Trapani",
    "lat": 38.0176,
    "lng": 12.53617,
    "countryCode": "IT",
    "population": 58681
  },
  {
    "id": "37.084L15.276",
    "name": "Siracusa",
    "lat": 37.08415,
    "lng": 15.27628,
    "countryCode": "IT",
    "population": 97472
  },
  {
    "id": "38.110L15.661",
    "name": "Reggio Calabria",
    "lat": 38.11047,
    "lng": 15.66129,
    "countryCode": "IT",
    "population": 169140
  },
  {
    "id": "36.926L14.724",
    "name": "Ragusa",
    "lat": 36.92574,
    "lng": 14.72443,
    "countryCode": "IT",
    "population": 61380
  },
  {
    "id": "39.229L9.250",
    "name": "Quartu Sant'Elena",
    "lat": 39.22935,
    "lng": 9.25004,
    "countryCode": "IT",
    "population": 66620
  },
  {
    "id": "38.132L13.336",
    "name": "Palermo",
    "lat": 38.13205,
    "lng": 13.33561,
    "countryCode": "IT",
    "population": 648260
  },
  {
    "id": "38.971L16.313",
    "name": "Nicastro-Sambiase",
    "lat": 38.97089,
    "lng": 16.31285,
    "countryCode": "IT",
    "population": 55687
  },
  {
    "id": "38.194L15.553",
    "name": "Messina",
    "lat": 38.19394,
    "lng": 15.55256,
    "countryCode": "IT",
    "population": 219948
  },
  {
    "id": "37.799L12.437",
    "name": "Marsala",
    "lat": 37.7992,
    "lng": 12.4367,
    "countryCode": "IT",
    "population": 77915
  },
  {
    "id": "37.074L14.240",
    "name": "Gela",
    "lat": 37.07381,
    "lng": 14.24038,
    "countryCode": "IT",
    "population": 73854
  },
  {
    "id": "39.299L16.253",
    "name": "Cosenza",
    "lat": 39.2989,
    "lng": 16.25307,
    "countryCode": "IT",
    "population": 63852
  },
  {
    "id": "38.882L16.601",
    "name": "Catanzaro",
    "lat": 38.88247,
    "lng": 16.60086,
    "countryCode": "IT",
    "population": 78970
  },
  {
    "id": "37.492L15.070",
    "name": "Catania",
    "lat": 37.49223,
    "lng": 15.07041,
    "countryCode": "IT",
    "population": 290927
  },
  {
    "id": "37.490L14.062",
    "name": "Caltanissetta",
    "lat": 37.49025,
    "lng": 14.06216,
    "countryCode": "IT",
    "population": 56715
  },
  {
    "id": "39.231L9.119",
    "name": "Cagliari",
    "lat": 39.23054,
    "lng": 9.11917,
    "countryCode": "IT",
    "population": 149257
  },
  {
    "id": "38.079L13.512",
    "name": "Bagheria",
    "lat": 38.07892,
    "lng": 13.51237,
    "countryCode": "IT",
    "population": 52952
  },
  {
    "id": "45.314L8.854",
    "name": "Vigevano",
    "lat": 45.31407,
    "lng": 8.85437,
    "countryCode": "IT",
    "population": 57970
  },
  {
    "id": "45.547L11.547",
    "name": "Vicenza",
    "lat": 45.54672,
    "lng": 11.5475,
    "countryCode": "IT",
    "population": 107129
  },
  {
    "id": "45.430L10.984",
    "name": "Verona",
    "lat": 45.4299,
    "lng": 10.98444,
    "countryCode": "IT",
    "population": 219103
  },
  {
    "id": "45.437L12.333",
    "name": "Venice",
    "lat": 45.43713,
    "lng": 12.33265,
    "countryCode": "IT",
    "population": 51298
  },
  {
    "id": "45.821L8.825",
    "name": "Varese",
    "lat": 45.82058,
    "lng": 8.82511,
    "countryCode": "IT",
    "population": 76851
  },
  {
    "id": "46.069L13.237",
    "name": "Udine",
    "lat": 46.0693,
    "lng": 13.23715,
    "countryCode": "IT",
    "population": 97761
  },
  {
    "id": "45.650L13.777",
    "name": "Trieste",
    "lat": 45.64953,
    "lng": 13.77678,
    "countryCode": "IT",
    "population": 187056
  },
  {
    "id": "45.667L12.242",
    "name": "Treviso",
    "lat": 45.66673,
    "lng": 12.2416,
    "countryCode": "IT",
    "population": 77604
  },
  {
    "id": "46.068L11.121",
    "name": "Trento",
    "lat": 46.06787,
    "lng": 11.12108,
    "countryCode": "IT",
    "population": 80425
  },
  {
    "id": "41.277L16.410",
    "name": "Trani",
    "lat": 41.27733,
    "lng": 16.41011,
    "countryCode": "IT",
    "population": 53981
  },
  {
    "id": "40.789L14.368",
    "name": "Torre del Greco",
    "lat": 40.78931,
    "lng": 14.36806,
    "countryCode": "IT",
    "population": 85897
  },
  {
    "id": "45.070L7.687",
    "name": "Turin",
    "lat": 45.07049,
    "lng": 7.68682,
    "countryCode": "IT",
    "population": 870456
  },
  {
    "id": "42.563L12.643",
    "name": "Terni",
    "lat": 42.56335,
    "lng": 12.64329,
    "countryCode": "IT",
    "population": 97050
  },
  {
    "id": "40.464L17.247",
    "name": "Taranto",
    "lat": 40.46438,
    "lng": 17.24707,
    "countryCode": "IT",
    "population": 181082
  },
  {
    "id": "45.533L9.226",
    "name": "Sesto San Giovanni",
    "lat": 45.53329,
    "lng": 9.22585,
    "countryCode": "IT",
    "population": 76509
  },
  {
    "id": "44.309L8.477",
    "name": "Savona",
    "lat": 44.30905,
    "lng": 8.47715,
    "countryCode": "IT",
    "population": 58283
  },
  {
    "id": "40.726L8.556",
    "name": "Sassari",
    "lat": 40.72586,
    "lng": 8.55552,
    "countryCode": "IT",
    "population": 91895
  },
  {
    "id": "41.686L15.381",
    "name": "San Severo",
    "lat": 41.68564,
    "lng": 15.38148,
    "countryCode": "IT",
    "population": 54880
  },
  {
    "id": "40.675L14.793",
    "name": "Salerno",
    "lat": 40.67545,
    "lng": 14.79328,
    "countryCode": "IT",
    "population": 125797
  },
  {
    "id": "41.892L12.511",
    "name": "Rome",
    "lat": 41.89193,
    "lng": 12.51133,
    "countryCode": "IT",
    "population": 2318895
  },
  {
    "id": "44.058L12.565",
    "name": "Rimini",
    "lat": 44.05755,
    "lng": 12.56528,
    "countryCode": "IT",
    "population": 118673
  },
  {
    "id": "44.698L10.631",
    "name": "Reggio nell'Emilia",
    "lat": 44.69825,
    "lng": 10.63125,
    "countryCode": "IT",
    "population": 133296
  },
  {
    "id": "44.413L12.201",
    "name": "Ravenna",
    "lat": 44.41344,
    "lng": 12.20121,
    "countryCode": "IT",
    "population": 80868
  },
  {
    "id": "43.880L11.097",
    "name": "Prato",
    "lat": 43.8805,
    "lng": 11.09699,
    "countryCode": "IT",
    "population": 181820
  },
  {
    "id": "40.642L15.808",
    "name": "Potenza",
    "lat": 40.64175,
    "lng": 15.80794,
    "countryCode": "IT",
    "population": 56433
  },
  {
    "id": "40.816L14.337",
    "name": "Portici",
    "lat": 40.81563,
    "lng": 14.33716,
    "countryCode": "IT",
    "population": 55765
  },
  {
    "id": "43.931L10.924",
    "name": "Pistoia",
    "lat": 43.93064,
    "lng": 10.92365,
    "countryCode": "IT",
    "population": 73832
  },
  {
    "id": "43.709L10.404",
    "name": "Pisa",
    "lat": 43.70853,
    "lng": 10.4036,
    "countryCode": "IT",
    "population": 77007
  },
  {
    "id": "45.052L9.693",
    "name": "Piacenza",
    "lat": 45.05242,
    "lng": 9.69342,
    "countryCode": "IT",
    "population": 93228
  },
  {
    "id": "42.458L14.203",
    "name": "Pescara",
    "lat": 42.4584,
    "lng": 14.20283,
    "countryCode": "IT",
    "population": 116596
  },
  {
    "id": "43.909L12.916",
    "name": "Pesaro",
    "lat": 43.90921,
    "lng": 12.9164,
    "countryCode": "IT",
    "population": 77241
  },
  {
    "id": "43.112L12.389",
    "name": "Perugia",
    "lat": 43.1122,
    "lng": 12.38878,
    "countryCode": "IT",
    "population": 120137
  },
  {
    "id": "45.192L9.159",
    "name": "Pavia",
    "lat": 45.19205,
    "lng": 9.15917,
    "countryCode": "IT",
    "population": 65734
  },
  {
    "id": "44.799L10.326",
    "name": "Parma",
    "lat": 44.79935,
    "lng": 10.32618,
    "countryCode": "IT",
    "population": 146299
  },
  {
    "id": "45.408L11.886",
    "name": "Padova",
    "lat": 45.40797,
    "lng": 11.88586,
    "countryCode": "IT",
    "population": 203725
  },
  {
    "id": "45.447L8.621",
    "name": "Novara",
    "lat": 45.44694,
    "lng": 8.62118,
    "countryCode": "IT",
    "population": 93295
  },
  {
    "id": "40.852L14.268",
    "name": "Naples",
    "lat": 40.85216,
    "lng": 14.26811,
    "countryCode": "IT",
    "population": 959470
  },
  {
    "id": "45.580L9.272",
    "name": "Monza",
    "lat": 45.58005,
    "lng": 9.27246,
    "countryCode": "IT",
    "population": 119618
  },
  {
    "id": "41.200L16.599",
    "name": "Molfetta",
    "lat": 41.20036,
    "lng": 16.59905,
    "countryCode": "IT",
    "population": 59557
  },
  {
    "id": "44.648L10.925",
    "name": "Modena",
    "lat": 44.64783,
    "lng": 10.92539,
    "countryCode": "IT",
    "population": 158886
  },
  {
    "id": "45.464L9.190",
    "name": "Milan",
    "lat": 45.46427,
    "lng": 9.18951,
    "countryCode": "IT",
    "population": 1236837
  },
  {
    "id": "45.492L12.245",
    "name": "Mestre",
    "lat": 45.49167,
    "lng": 12.24538,
    "countryCode": "IT",
    "population": 147662
  },
  {
    "id": "40.666L16.605",
    "name": "Matera",
    "lat": 40.66599,
    "lng": 16.60463,
    "countryCode": "IT",
    "population": 54891
  },
  {
    "id": "44.035L10.139",
    "name": "Massa",
    "lat": 44.03541,
    "lng": 10.13927,
    "countryCode": "IT",
    "population": 64783
  },
  {
    "id": "41.631L15.919",
    "name": "Manfredonia",
    "lat": 41.63065,
    "lng": 15.91876,
    "countryCode": "IT",
    "population": 52911
  },
  {
    "id": "43.844L10.504",
    "name": "Lucca",
    "lat": 43.84369,
    "lng": 10.50447,
    "countryCode": "IT",
    "population": 81748
  },
  {
    "id": "43.544L10.326",
    "name": "Livorno",
    "lat": 43.54427,
    "lng": 10.32615,
    "countryCode": "IT",
    "population": 153773
  },
  {
    "id": "41.732L12.277",
    "name": "Lido di Ostia",
    "lat": 41.73212,
    "lng": 12.27654,
    "countryCode": "IT",
    "population": 79400
  },
  {
    "id": "45.598L8.915",
    "name": "Legnano",
    "lat": 45.59788,
    "lng": 8.91506,
    "countryCode": "IT",
    "population": 57589
  },
  {
    "id": "40.355L18.172",
    "name": "Lecce",
    "lat": 40.35481,
    "lng": 18.17244,
    "countryCode": "IT",
    "population": 80695
  },
  {
    "id": "41.466L12.904",
    "name": "Latina",
    "lat": 41.46614,
    "lng": 12.9043,
    "countryCode": "IT",
    "population": 76305
  },
  {
    "id": "44.103L9.824",
    "name": "La Spezia",
    "lat": 44.103,
    "lng": 9.82375,
    "countryCode": "IT",
    "population": 88491
  },
  {
    "id": "44.359L11.713",
    "name": "Imola",
    "lat": 44.35916,
    "lng": 11.7132,
    "countryCode": "IT",
    "population": 52981
  },
  {
    "id": "42.763L11.109",
    "name": "Grosseto",
    "lat": 42.76296,
    "lng": 11.10941,
    "countryCode": "IT",
    "population": 60922
  },
  {
    "id": "40.928L14.202",
    "name": "Giugliano in Campania",
    "lat": 40.92849,
    "lng": 14.20197,
    "countryCode": "IT",
    "population": 80269
  },
  {
    "id": "44.405L8.944",
    "name": "Genoa",
    "lat": 44.40478,
    "lng": 8.94439,
    "countryCode": "IT",
    "population": 580223
  },
  {
    "id": "45.660L8.792",
    "name": "Gallarate",
    "lat": 45.66019,
    "lng": 8.79164,
    "countryCode": "IT",
    "population": 50439
  },
  {
    "id": "44.222L12.041",
    "name": "Forlì",
    "lat": 44.22177,
    "lng": 12.04144,
    "countryCode": "IT",
    "population": 93638
  },
  {
    "id": "41.458L15.552",
    "name": "Foggia",
    "lat": 41.45845,
    "lng": 15.55188,
    "countryCode": "IT",
    "population": 137032
  },
  {
    "id": "43.779L11.246",
    "name": "Florence",
    "lat": 43.77925,
    "lng": 11.24626,
    "countryCode": "IT",
    "population": 349296
  },
  {
    "id": "44.838L11.621",
    "name": "Ferrara",
    "lat": 44.83804,
    "lng": 11.62057,
    "countryCode": "IT",
    "population": 92802
  },
  {
    "id": "40.808L14.350",
    "name": "Ercolano",
    "lat": 40.80783,
    "lng": 14.35012,
    "countryCode": "IT",
    "population": 53576
  },
  {
    "id": "45.133L10.021",
    "name": "Cremona",
    "lat": 45.13325,
    "lng": 10.02129,
    "countryCode": "IT",
    "population": 59561
  },
  {
    "id": "45.808L9.083",
    "name": "Como",
    "lat": 45.80819,
    "lng": 9.0832,
    "countryCode": "IT",
    "population": 81975
  },
  {
    "id": "45.558L9.215",
    "name": "Cinisello Balsamo",
    "lat": 45.55823,
    "lng": 9.21495,
    "countryCode": "IT",
    "population": 71109
  },
  {
    "id": "44.139L12.243",
    "name": "Cesena",
    "lat": 44.1391,
    "lng": 12.24315,
    "countryCode": "IT",
    "population": 79398
  },
  {
    "id": "41.265L15.896",
    "name": "Cerignola",
    "lat": 41.26523,
    "lng": 15.89559,
    "countryCode": "IT",
    "population": 54056
  },
  {
    "id": "40.702L14.487",
    "name": "Castellammare di Stabia",
    "lat": 40.70211,
    "lng": 14.48685,
    "countryCode": "IT",
    "population": 65730
  },
  {
    "id": "40.908L14.293",
    "name": "Casoria",
    "lat": 40.90751,
    "lng": 14.293,
    "countryCode": "IT",
    "population": 58456
  },
  {
    "id": "41.073L14.332",
    "name": "Caserta",
    "lat": 41.07262,
    "lng": 14.33231,
    "countryCode": "IT",
    "population": 72844
  },
  {
    "id": "44.079L10.098",
    "name": "Carrara",
    "lat": 44.07926,
    "lng": 10.09789,
    "countryCode": "IT",
    "population": 58666
  },
  {
    "id": "44.782L10.878",
    "name": "Carpi Centro",
    "lat": 44.78237,
    "lng": 10.8777,
    "countryCode": "IT",
    "population": 53024
  },
  {
    "id": "45.611L8.849",
    "name": "Busto Arsizio",
    "lat": 45.61128,
    "lng": 8.84914,
    "countryCode": "IT",
    "population": 79519
  },
  {
    "id": "40.632L17.936",
    "name": "Brindisi",
    "lat": 40.63215,
    "lng": 17.93607,
    "countryCode": "IT",
    "population": 78548
  },
  {
    "id": "45.536L10.215",
    "name": "Brescia",
    "lat": 45.53558,
    "lng": 10.21472,
    "countryCode": "IT",
    "population": 184826
  },
  {
    "id": "46.491L11.340",
    "name": "Bolzano",
    "lat": 46.49067,
    "lng": 11.33982,
    "countryCode": "IT",
    "population": 99049
  },
  {
    "id": "44.494L11.339",
    "name": "Bologna",
    "lat": 44.49381,
    "lng": 11.33875,
    "countryCode": "IT",
    "population": 366133
  },
  {
    "id": "41.110L16.691",
    "name": "Bitonto",
    "lat": 41.11006,
    "lng": 16.69086,
    "countryCode": "IT",
    "population": 51661
  },
  {
    "id": "41.243L16.501",
    "name": "Bisceglie",
    "lat": 41.24264,
    "lng": 16.50104,
    "countryCode": "IT",
    "population": 53648
  },
  {
    "id": "45.696L9.667",
    "name": "Bergamo",
    "lat": 45.69601,
    "lng": 9.66721,
    "countryCode": "IT",
    "population": 114162
  },
  {
    "id": "41.314L16.282",
    "name": "Barletta",
    "lat": 41.31429,
    "lng": 16.28165,
    "countryCode": "IT",
    "population": 93279
  },
  {
    "id": "41.111L16.855",
    "name": "Bari",
    "lat": 41.11148,
    "lng": 16.8554,
    "countryCode": "IT",
    "population": 277387
  },
  {
    "id": "40.973L14.207",
    "name": "Aversa",
    "lat": 40.97259,
    "lng": 14.20745,
    "countryCode": "IT",
    "population": 52830
  },
  {
    "id": "44.902L8.208",
    "name": "Asti",
    "lat": 44.90162,
    "lng": 8.20751,
    "countryCode": "IT",
    "population": 61254
  },
  {
    "id": "43.463L11.881",
    "name": "Arezzo",
    "lat": 43.46276,
    "lng": 11.88068,
    "countryCode": "IT",
    "population": 76346
  },
  {
    "id": "41.231L16.298",
    "name": "Andria",
    "lat": 41.23117,
    "lng": 16.29797,
    "countryCode": "IT",
    "population": 98342
  },
  {
    "id": "43.594L13.503",
    "name": "Ancona",
    "lat": 43.5942,
    "lng": 13.50337,
    "countryCode": "IT",
    "population": 89994
  },
  {
    "id": "40.827L16.550",
    "name": "Altamura",
    "lat": 40.82664,
    "lng": 16.54952,
    "countryCode": "IT",
    "population": 67821
  },
  {
    "id": "44.909L8.610",
    "name": "Alessandria",
    "lat": 44.90924,
    "lng": 8.61007,
    "countryCode": "IT",
    "population": 64178
  },
  {
    "id": "40.923L14.309",
    "name": "Afragola",
    "lat": 40.92298,
    "lng": 14.30935,
    "countryCode": "IT",
    "population": 62775
  },
  {
    "id": "41.763L12.331",
    "name": "Acilia-Castel Fusano-Ostia Antica",
    "lat": 41.76337,
    "lng": 12.33078,
    "countryCode": "IT",
    "population": 129362
  },
  {
    "id": "40.945L14.371",
    "name": "Acerra",
    "lat": 40.94477,
    "lng": 14.3714,
    "countryCode": "IT",
    "population": 53578
  },
  {
    "id": "41.994L12.722",
    "name": "Guidonia Montecelio",
    "lat": 41.99362,
    "lng": 12.72238,
    "countryCode": "IT",
    "population": 67516
  },
  {
    "id": "38.963L16.309",
    "name": "Lamezia Terme",
    "lat": 38.96255,
    "lng": 16.30938,
    "countryCode": "IT",
    "population": 70501
  },
  {
    "id": "54.689L25.280",
    "name": "Vilnius",
    "lat": 54.68916,
    "lng": 25.2798,
    "countryCode": "LT",
    "population": 542366
  },
  {
    "id": "55.933L23.317",
    "name": "Šiauliai",
    "lat": 55.93333,
    "lng": 23.31667,
    "countryCode": "LT",
    "population": 130587
  },
  {
    "id": "55.733L24.350",
    "name": "Panevėžys",
    "lat": 55.73333,
    "lng": 24.35,
    "countryCode": "LT",
    "population": 117395
  },
  {
    "id": "55.709L21.143",
    "name": "Klaipėda",
    "lat": 55.70888,
    "lng": 21.14312,
    "countryCode": "LT",
    "population": 192307
  },
  {
    "id": "54.903L23.910",
    "name": "Kaunas",
    "lat": 54.90272,
    "lng": 23.90961,
    "countryCode": "LT",
    "population": 374643
  },
  {
    "id": "54.396L24.041",
    "name": "Alytus",
    "lat": 54.39635,
    "lng": 24.04142,
    "countryCode": "LT",
    "population": 70747
  },
  {
    "id": "54.915L23.968",
    "name": "Dainava (Kaunas)",
    "lat": 54.91525,
    "lng": 23.96831,
    "countryCode": "LT",
    "population": 70000
  },
  {
    "id": "54.931L23.932",
    "name": "Eiguliai",
    "lat": 54.93133,
    "lng": 23.93243,
    "countryCode": "LT",
    "population": 61700
  },
  {
    "id": "49.612L6.130",
    "name": "Luxembourg",
    "lat": 49.61167,
    "lng": 6.13,
    "countryCode": "LU",
    "population": 76684
  },
  {
    "id": "56.946L24.106",
    "name": "Riga",
    "lat": 56.946,
    "lng": 24.10589,
    "countryCode": "LV",
    "population": 742572
  },
  {
    "id": "56.517L21.017",
    "name": "Liepāja",
    "lat": 56.51667,
    "lng": 21.01667,
    "countryCode": "LV",
    "population": 85132
  },
  {
    "id": "56.968L23.770",
    "name": "Jūrmala",
    "lat": 56.968,
    "lng": 23.77038,
    "countryCode": "LV",
    "population": 54088
  },
  {
    "id": "56.650L23.713",
    "name": "Jelgava",
    "lat": 56.65,
    "lng": 23.71278,
    "countryCode": "LV",
    "population": 61791
  },
  {
    "id": "55.883L26.533",
    "name": "Daugavpils",
    "lat": 55.88333,
    "lng": 26.53333,
    "countryCode": "LV",
    "population": 111564
  },
  {
    "id": "52.513L6.094",
    "name": "Zwolle",
    "lat": 52.5125,
    "lng": 6.09444,
    "countryCode": "NL",
    "population": 111805
  },
  {
    "id": "52.057L4.493",
    "name": "Zoetermeer",
    "lat": 52.0575,
    "lng": 4.49306,
    "countryCode": "NL",
    "population": 115845
  },
  {
    "id": "52.090L5.233",
    "name": "Zeist",
    "lat": 52.09,
    "lng": 5.23333,
    "countryCode": "NL",
    "population": 60949
  },
  {
    "id": "52.453L4.814",
    "name": "Zaanstad",
    "lat": 52.45313,
    "lng": 4.81356,
    "countryCode": "NL",
    "population": 140085
  },
  {
    "id": "52.439L4.826",
    "name": "Zaandam",
    "lat": 52.43854,
    "lng": 4.82643,
    "countryCode": "NL",
    "population": 71708
  },
  {
    "id": "51.913L4.342",
    "name": "Vlaardingen",
    "lat": 51.9125,
    "lng": 4.34167,
    "countryCode": "NL",
    "population": 73798
  },
  {
    "id": "51.370L6.168",
    "name": "Venlo",
    "lat": 51.37,
    "lng": 6.16806,
    "countryCode": "NL",
    "population": 92403
  },
  {
    "id": "52.460L4.650",
    "name": "Velsen-Zuid",
    "lat": 52.46,
    "lng": 4.65,
    "countryCode": "NL",
    "population": 67758
  },
  {
    "id": "52.029L5.559",
    "name": "Veenendaal",
    "lat": 52.02863,
    "lng": 5.55891,
    "countryCode": "NL",
    "population": 61271
  },
  {
    "id": "52.091L5.122",
    "name": "Utrecht",
    "lat": 52.09083,
    "lng": 5.12222,
    "countryCode": "NL",
    "population": 290529
  },
  {
    "id": "51.556L5.091",
    "name": "Tilburg",
    "lat": 51.55551,
    "lng": 5.0913,
    "countryCode": "NL",
    "population": 199613
  },
  {
    "id": "51.845L4.329",
    "name": "Spijkenisse",
    "lat": 51.845,
    "lng": 4.32917,
    "countryCode": "NL",
    "population": 74988
  },
  {
    "id": "51.699L5.304",
    "name": "s-Hertogenbosch",
    "lat": 51.69917,
    "lng": 5.30417,
    "countryCode": "NL",
    "population": 134520
  },
  {
    "id": "52.077L4.299",
    "name": "The Hague",
    "lat": 52.07667,
    "lng": 4.29861,
    "countryCode": "NL",
    "population": 474292
  },
  {
    "id": "51.919L4.389",
    "name": "Schiedam",
    "lat": 51.91917,
    "lng": 4.38889,
    "countryCode": "NL",
    "population": 75438
  },
  {
    "id": "51.922L4.479",
    "name": "Rotterdam",
    "lat": 51.9225,
    "lng": 4.47917,
    "countryCode": "NL",
    "population": 598199
  },
  {
    "id": "51.531L4.465",
    "name": "Roosendaal",
    "lat": 51.53083,
    "lng": 4.46528,
    "countryCode": "NL",
    "population": 77725
  },
  {
    "id": "52.505L4.960",
    "name": "Purmerend",
    "lat": 52.505,
    "lng": 4.95972,
    "countryCode": "NL",
    "population": 76745
  },
  {
    "id": "51.765L5.518",
    "name": "Oss",
    "lat": 51.765,
    "lng": 5.51806,
    "countryCode": "NL",
    "population": 76430
  },
  {
    "id": "51.645L4.860",
    "name": "Oosterhout",
    "lat": 51.645,
    "lng": 4.85972,
    "countryCode": "NL",
    "population": 53107
  },
  {
    "id": "51.843L5.853",
    "name": "Nijmegen",
    "lat": 51.8425,
    "lng": 5.85278,
    "countryCode": "NL",
    "population": 158732
  },
  {
    "id": "52.029L5.081",
    "name": "Nieuwegein",
    "lat": 52.02917,
    "lng": 5.08056,
    "countryCode": "NL",
    "population": 61489
  },
  {
    "id": "50.848L5.689",
    "name": "Maastricht",
    "lat": 50.84833,
    "lng": 5.68889,
    "countryCode": "NL",
    "population": 122378
  },
  {
    "id": "52.508L5.475",
    "name": "Lelystad",
    "lat": 52.50833,
    "lng": 5.475,
    "countryCode": "NL",
    "population": 70741
  },
  {
    "id": "52.158L4.493",
    "name": "Leiden",
    "lat": 52.15833,
    "lng": 4.49306,
    "countryCode": "NL",
    "population": 119713
  },
  {
    "id": "53.201L5.809",
    "name": "Leeuwarden",
    "lat": 53.20139,
    "lng": 5.80859,
    "countryCode": "NL",
    "population": 91424
  },
  {
    "id": "52.642L5.060",
    "name": "Hoorn",
    "lat": 52.6425,
    "lng": 5.05972,
    "countryCode": "NL",
    "population": 68852
  },
  {
    "id": "52.303L4.689",
    "name": "Hoofddorp",
    "lat": 52.3025,
    "lng": 4.68889,
    "countryCode": "NL",
    "population": 132734
  },
  {
    "id": "52.223L5.176",
    "name": "Hilversum",
    "lat": 52.22333,
    "lng": 5.17639,
    "countryCode": "NL",
    "population": 83640
  },
  {
    "id": "52.266L6.793",
    "name": "Hengelo",
    "lat": 52.26583,
    "lng": 6.79306,
    "countryCode": "NL",
    "population": 80809
  },
  {
    "id": "51.482L5.661",
    "name": "Helmond",
    "lat": 51.48167,
    "lng": 5.66111,
    "countryCode": "NL",
    "population": 74740
  },
  {
    "id": "50.884L5.982",
    "name": "Heerlen",
    "lat": 50.88365,
    "lng": 5.98154,
    "countryCode": "NL",
    "population": 93084
  },
  {
    "id": "52.576L6.619",
    "name": "Hardenberg",
    "lat": 52.57583,
    "lng": 6.61944,
    "countryCode": "NL",
    "population": 57909
  },
  {
    "id": "52.381L4.637",
    "name": "Haarlem",
    "lat": 52.38084,
    "lng": 4.63683,
    "countryCode": "NL",
    "population": 147590
  },
  {
    "id": "53.219L6.567",
    "name": "Groningen",
    "lat": 53.21917,
    "lng": 6.56667,
    "countryCode": "NL",
    "population": 181194
  },
  {
    "id": "52.017L4.708",
    "name": "Gouda",
    "lat": 52.01667,
    "lng": 4.70833,
    "countryCode": "NL",
    "population": 71952
  },
  {
    "id": "52.218L6.896",
    "name": "Enschede",
    "lat": 52.21833,
    "lng": 6.89583,
    "countryCode": "NL",
    "population": 153655
  },
  {
    "id": "52.779L6.907",
    "name": "Emmen",
    "lat": 52.77917,
    "lng": 6.90694,
    "countryCode": "NL",
    "population": 57010
  },
  {
    "id": "51.441L5.478",
    "name": "Eindhoven",
    "lat": 51.44083,
    "lng": 5.47778,
    "countryCode": "NL",
    "population": 209620
  },
  {
    "id": "52.033L5.658",
    "name": "Ede",
    "lat": 52.03333,
    "lng": 5.65833,
    "countryCode": "NL",
    "population": 67670
  },
  {
    "id": "51.810L4.674",
    "name": "Dordrecht",
    "lat": 51.81,
    "lng": 4.67361,
    "countryCode": "NL",
    "population": 119260
  },
  {
    "id": "52.255L6.164",
    "name": "Deventer",
    "lat": 52.255,
    "lng": 6.16389,
    "countryCode": "NL",
    "population": 97331
  },
  {
    "id": "52.960L4.759",
    "name": "Den Helder",
    "lat": 52.95988,
    "lng": 4.75933,
    "countryCode": "NL",
    "population": 59569
  },
  {
    "id": "52.007L4.356",
    "name": "Delft",
    "lat": 52.00667,
    "lng": 4.35556,
    "countryCode": "NL",
    "population": 95060
  },
  {
    "id": "51.929L4.578",
    "name": "Capelle aan den IJssel",
    "lat": 51.92917,
    "lng": 4.57778,
    "countryCode": "NL",
    "population": 65255
  },
  {
    "id": "51.587L4.776",
    "name": "Breda",
    "lat": 51.58656,
    "lng": 4.77596,
    "countryCode": "NL",
    "population": 167673
  },
  {
    "id": "51.495L4.292",
    "name": "Bergen op Zoom",
    "lat": 51.495,
    "lng": 4.29167,
    "countryCode": "NL",
    "population": 66256
  },
  {
    "id": "52.997L6.563",
    "name": "Assen",
    "lat": 52.99667,
    "lng": 6.5625,
    "countryCode": "NL",
    "population": 62237
  },
  {
    "id": "51.980L5.911",
    "name": "Arnhem",
    "lat": 51.98,
    "lng": 5.91111,
    "countryCode": "NL",
    "population": 141674
  },
  {
    "id": "52.210L5.969",
    "name": "Apeldoorn",
    "lat": 52.21,
    "lng": 5.96944,
    "countryCode": "NL",
    "population": 136670
  },
  {
    "id": "52.374L4.890",
    "name": "Amsterdam",
    "lat": 52.37403,
    "lng": 4.88969,
    "countryCode": "NL",
    "population": 741636
  },
  {
    "id": "52.301L4.864",
    "name": "Amstelveen",
    "lat": 52.30083,
    "lng": 4.86389,
    "countryCode": "NL",
    "population": 79639
  },
  {
    "id": "52.155L5.388",
    "name": "Amersfoort",
    "lat": 52.155,
    "lng": 5.3875,
    "countryCode": "NL",
    "population": 139914
  },
  {
    "id": "52.129L4.655",
    "name": "Alphen aan den Rijn",
    "lat": 52.12917,
    "lng": 4.65546,
    "countryCode": "NL",
    "population": 70251
  },
  {
    "id": "52.370L5.214",
    "name": "Almere Stad",
    "lat": 52.37025,
    "lng": 5.21413,
    "countryCode": "NL",
    "population": 176432
  },
  {
    "id": "52.357L6.662",
    "name": "Almelo",
    "lat": 52.35667,
    "lng": 6.6625,
    "countryCode": "NL",
    "population": 72725
  },
  {
    "id": "52.632L4.749",
    "name": "Alkmaar",
    "lat": 52.63167,
    "lng": 4.74861,
    "countryCode": "NL",
    "population": 94853
  },
  {
    "id": "52.307L4.972",
    "name": "Amsterdam-Zuidoost",
    "lat": 52.3075,
    "lng": 4.97222,
    "countryCode": "NL",
    "population": 84811
  },
  {
    "id": "52.269L20.986",
    "name": "Żoliborz",
    "lat": 52.26896,
    "lng": 20.98644,
    "countryCode": "PL",
    "population": 50934
  },
  {
    "id": "50.723L23.252",
    "name": "Zamość",
    "lat": 50.72314,
    "lng": 23.25196,
    "countryCode": "PL",
    "population": 66034
  },
  {
    "id": "52.240L20.989",
    "name": "Wola",
    "lat": 52.2401,
    "lng": 20.98869,
    "countryCode": "PL",
    "population": 143996
  },
  {
    "id": "52.197L21.178",
    "name": "Wawer",
    "lat": 52.19656,
    "lng": 21.17752,
    "countryCode": "PL",
    "population": 62656
  },
  {
    "id": "52.230L21.012",
    "name": "Warsaw",
    "lat": 52.22977,
    "lng": 21.01178,
    "countryCode": "PL",
    "population": 1702139
  },
  {
    "id": "51.531L20.009",
    "name": "Tomaszów Mazowiecki",
    "lat": 51.53131,
    "lng": 20.00855,
    "countryCode": "PL",
    "population": 67197
  },
  {
    "id": "50.014L20.987",
    "name": "Tarnów",
    "lat": 50.01381,
    "lng": 20.98698,
    "countryCode": "PL",
    "population": 117799
  },
  {
    "id": "50.573L21.679",
    "name": "Tarnobrzeg",
    "lat": 50.57304,
    "lng": 21.67937,
    "countryCode": "PL",
    "population": 50459
  },
  {
    "id": "52.292L21.048",
    "name": "Targówek",
    "lat": 52.29185,
    "lng": 21.04845,
    "countryCode": "PL",
    "population": 124316
  },
  {
    "id": "54.112L22.931",
    "name": "Suwałki",
    "lat": 54.11175,
    "lng": 22.93087,
    "countryCode": "PL",
    "population": 69222
  },
  {
    "id": "51.037L21.071",
    "name": "Starachowice",
    "lat": 51.0374,
    "lng": 21.07126,
    "countryCode": "PL",
    "population": 53739
  },
  {
    "id": "50.583L22.053",
    "name": "Stalowa Wola",
    "lat": 50.58286,
    "lng": 22.05334,
    "countryCode": "PL",
    "population": 66495
  },
  {
    "id": "52.229L21.016",
    "name": "Śródmieście",
    "lat": 52.22904,
    "lng": 21.01644,
    "countryCode": "PL",
    "population": 134306
  },
  {
    "id": "52.168L22.290",
    "name": "Siedlce",
    "lat": 52.16772,
    "lng": 22.29006,
    "countryCode": "PL",
    "population": 77185
  },
  {
    "id": "50.041L21.999",
    "name": "Rzeszów",
    "lat": 50.04132,
    "lng": 21.99901,
    "countryCode": "PL",
    "population": 158382
  },
  {
    "id": "51.403L21.147",
    "name": "Radom",
    "lat": 51.40253,
    "lng": 21.14714,
    "countryCode": "PL",
    "population": 226794
  },
  {
    "id": "49.785L22.767",
    "name": "Przemyśl",
    "lat": 49.78498,
    "lng": 22.76728,
    "countryCode": "PL",
    "population": 67013
  },
  {
    "id": "52.171L20.812",
    "name": "Pruszków",
    "lat": 52.17072,
    "lng": 20.81214,
    "countryCode": "PL",
    "population": 55371
  },
  {
    "id": "50.929L21.385",
    "name": "Ostrowiec Świętokrzyski",
    "lat": 50.92936,
    "lng": 21.38525,
    "countryCode": "PL",
    "population": 73989
  },
  {
    "id": "53.086L21.576",
    "name": "Ostrołęka",
    "lat": 53.08621,
    "lng": 21.57566,
    "countryCode": "PL",
    "population": 53740
  },
  {
    "id": "53.780L20.494",
    "name": "Olsztyn",
    "lat": 53.77995,
    "lng": 20.49416,
    "countryCode": "PL",
    "population": 171803
  },
  {
    "id": "52.221L20.985",
    "name": "Ochota",
    "lat": 52.22096,
    "lng": 20.98526,
    "countryCode": "PL",
    "population": 93192
  },
  {
    "id": "49.622L20.697",
    "name": "Nowy Sącz",
    "lat": 49.62177,
    "lng": 20.69705,
    "countryCode": "PL",
    "population": 84376
  },
  {
    "id": "52.193L21.035",
    "name": "Mokotów",
    "lat": 52.1934,
    "lng": 21.03487,
    "countryCode": "PL",
    "population": 212670
  },
  {
    "id": "50.287L21.424",
    "name": "Mielec",
    "lat": 50.28709,
    "lng": 21.4239,
    "countryCode": "PL",
    "population": 60993
  },
  {
    "id": "51.250L22.567",
    "name": "Lublin",
    "lat": 51.25,
    "lng": 22.56667,
    "countryCode": "PL",
    "population": 360044
  },
  {
    "id": "53.178L22.059",
    "name": "Łomża",
    "lat": 53.17806,
    "lng": 22.05935,
    "countryCode": "PL",
    "population": 63723
  },
  {
    "id": "52.401L20.927",
    "name": "Legionowo",
    "lat": 52.40149,
    "lng": 20.92664,
    "countryCode": "PL",
    "population": 50786
  },
  {
    "id": "50.870L20.628",
    "name": "Kielce",
    "lat": 50.87033,
    "lng": 20.62752,
    "countryCode": "PL",
    "population": 208598
  },
  {
    "id": "53.828L22.365",
    "name": "Ełk",
    "lat": 53.82824,
    "lng": 22.36469,
    "countryCode": "PL",
    "population": 55769
  },
  {
    "id": "51.143L23.472",
    "name": "Chełm",
    "lat": 51.14312,
    "lng": 23.4716,
    "countryCode": "PL",
    "population": 68043
  },
  {
    "id": "52.292L20.935",
    "name": "Bielany",
    "lat": 52.29242,
    "lng": 20.93531,
    "countryCode": "PL",
    "population": 134854
  },
  {
    "id": "53.133L23.164",
    "name": "Białystok",
    "lat": 53.13333,
    "lng": 23.16433,
    "countryCode": "PL",
    "population": 291855
  },
  {
    "id": "52.321L20.972",
    "name": "Białołeka",
    "lat": 52.32127,
    "lng": 20.97204,
    "countryCode": "PL",
    "population": 89324
  },
  {
    "id": "52.032L23.117",
    "name": "Biała Podlaska",
    "lat": 52.03238,
    "lng": 23.11652,
    "countryCode": "PL",
    "population": 57541
  },
  {
    "id": "52.255L20.908",
    "name": "Bemowo",
    "lat": 52.2546,
    "lng": 20.90844,
    "countryCode": "PL",
    "population": 102393
  },
  {
    "id": "50.045L18.701",
    "name": "Żory",
    "lat": 50.04523,
    "lng": 18.70062,
    "countryCode": "PL",
    "population": 63174
  },
  {
    "id": "51.935L15.506",
    "name": "Zielona Góra",
    "lat": 51.93548,
    "lng": 15.50643,
    "countryCode": "PL",
    "population": 118433
  },
  {
    "id": "51.856L19.406",
    "name": "Zgierz",
    "lat": 51.85561,
    "lng": 19.40623,
    "countryCode": "PL",
    "population": 58036
  },
  {
    "id": "50.488L19.417",
    "name": "Zawiercie",
    "lat": 50.48766,
    "lng": 19.41679,
    "countryCode": "PL",
    "population": 53159
  },
  {
    "id": "50.325L18.786",
    "name": "Zabrze",
    "lat": 50.32492,
    "lng": 18.78576,
    "countryCode": "PL",
    "population": 192177
  },
  {
    "id": "51.100L17.033",
    "name": "Wrocław",
    "lat": 51.1,
    "lng": 17.03333,
    "countryCode": "PL",
    "population": 634893
  },
  {
    "id": "52.648L19.068",
    "name": "Włocławek",
    "lat": 52.64817,
    "lng": 19.0678,
    "countryCode": "PL",
    "population": 120339
  },
  {
    "id": "50.771L16.284",
    "name": "Wałbrzych",
    "lat": 50.77141,
    "lng": 16.28432,
    "countryCode": "PL",
    "population": 127431
  },
  {
    "id": "50.137L18.966",
    "name": "Tychy",
    "lat": 50.13717,
    "lng": 18.96641,
    "countryCode": "PL",
    "population": 130000
  },
  {
    "id": "53.014L18.598",
    "name": "Toruń",
    "lat": 53.01375,
    "lng": 18.59814,
    "countryCode": "PL",
    "population": 208717
  },
  {
    "id": "54.092L18.778",
    "name": "Tczew",
    "lat": 54.09242,
    "lng": 18.77787,
    "countryCode": "PL",
    "population": 60133
  },
  {
    "id": "50.445L18.861",
    "name": "Tarnowskie Góry",
    "lat": 50.44548,
    "lng": 18.86147,
    "countryCode": "PL",
    "population": 60938
  },
  {
    "id": "53.429L14.553",
    "name": "Szczecin",
    "lat": 53.42894,
    "lng": 14.55302,
    "countryCode": "PL",
    "population": 407811
  },
  {
    "id": "50.296L18.917",
    "name": "Świętochłowice",
    "lat": 50.29636,
    "lng": 18.91726,
    "countryCode": "PL",
    "population": 55600
  },
  {
    "id": "50.844L16.489",
    "name": "Świdnica",
    "lat": 50.84378,
    "lng": 16.48859,
    "countryCode": "PL",
    "population": 60351
  },
  {
    "id": "53.337L15.050",
    "name": "Stargard",
    "lat": 53.33672,
    "lng": 15.0499,
    "countryCode": "PL",
    "population": 71224
  },
  {
    "id": "50.287L19.104",
    "name": "Sosnowiec",
    "lat": 50.28682,
    "lng": 19.10385,
    "countryCode": "PL",
    "population": 227295
  },
  {
    "id": "54.464L17.029",
    "name": "Słupsk",
    "lat": 54.46405,
    "lng": 17.02872,
    "countryCode": "PL",
    "population": 98608
  },
  {
    "id": "50.327L19.029",
    "name": "Siemianowice Śląskie",
    "lat": 50.32738,
    "lng": 19.02901,
    "countryCode": "PL",
    "population": 73121
  },
  {
    "id": "50.097L18.542",
    "name": "Rybnik",
    "lat": 50.09713,
    "lng": 18.54179,
    "countryCode": "PL",
    "population": 142510
  },
  {
    "id": "50.258L18.856",
    "name": "Ruda Śląska",
    "lat": 50.2584,
    "lng": 18.85632,
    "countryCode": "PL",
    "population": 146189
  },
  {
    "id": "50.092L18.219",
    "name": "Racibórz",
    "lat": 50.09195,
    "lng": 18.21928,
    "countryCode": "PL",
    "population": 58464
  },
  {
    "id": "52.407L16.930",
    "name": "Poznań",
    "lat": 52.40692,
    "lng": 16.92993,
    "countryCode": "PL",
    "population": 570352
  },
  {
    "id": "52.547L19.706",
    "name": "Płock",
    "lat": 52.54682,
    "lng": 19.70638,
    "countryCode": "PL",
    "population": 127474
  },
  {
    "id": "51.405L19.703",
    "name": "Piotrków Trybunalski",
    "lat": 51.40547,
    "lng": 19.70321,
    "countryCode": "PL",
    "population": 80128
  },
  {
    "id": "53.151L16.738",
    "name": "Piła",
    "lat": 53.15145,
    "lng": 16.73782,
    "countryCode": "PL",
    "population": 75532
  },
  {
    "id": "50.380L18.927",
    "name": "Piekary Śląskie",
    "lat": 50.38017,
    "lng": 18.92653,
    "countryCode": "PL",
    "population": 59757
  },
  {
    "id": "51.664L19.355",
    "name": "Pabianice",
    "lat": 51.66446,
    "lng": 19.35473,
    "countryCode": "PL",
    "population": 70542
  },
  {
    "id": "51.655L17.807",
    "name": "Ostrów Wielkopolski",
    "lat": 51.65501,
    "lng": 17.80686,
    "countryCode": "PL",
    "population": 72898
  },
  {
    "id": "50.672L17.925",
    "name": "Opole",
    "lat": 50.67211,
    "lng": 17.92533,
    "countryCode": "PL",
    "population": 127676
  },
  {
    "id": "50.207L19.167",
    "name": "Mysłowice",
    "lat": 50.20745,
    "lng": 19.16668,
    "countryCode": "PL",
    "population": 75281
  },
  {
    "id": "51.401L16.201",
    "name": "Lubin",
    "lat": 51.40089,
    "lng": 16.20149,
    "countryCode": "PL",
    "population": 77532
  },
  {
    "id": "51.750L19.467",
    "name": "Łódź",
    "lat": 51.75,
    "lng": 19.46667,
    "countryCode": "PL",
    "population": 768755
  },
  {
    "id": "51.840L16.575",
    "name": "Leszno",
    "lat": 51.84034,
    "lng": 16.57494,
    "countryCode": "PL",
    "population": 63565
  },
  {
    "id": "51.210L16.162",
    "name": "Legnica",
    "lat": 51.21006,
    "lng": 16.1619,
    "countryCode": "PL",
    "population": 106033
  },
  {
    "id": "50.061L19.937",
    "name": "Kraków",
    "lat": 50.06143,
    "lng": 19.93658,
    "countryCode": "PL",
    "population": 755050
  },
  {
    "id": "54.194L16.172",
    "name": "Koszalin",
    "lat": 54.19438,
    "lng": 16.17222,
    "countryCode": "PL",
    "population": 107450
  },
  {
    "id": "52.223L18.251",
    "name": "Konin",
    "lat": 52.22338,
    "lng": 18.25121,
    "countryCode": "PL",
    "population": 81258
  },
  {
    "id": "50.350L18.226",
    "name": "Kędzierzyn-Koźle",
    "lat": 50.34984,
    "lng": 18.22606,
    "countryCode": "PL",
    "population": 65636
  },
  {
    "id": "50.258L19.028",
    "name": "Katowice",
    "lat": 50.25841,
    "lng": 19.02754,
    "countryCode": "PL",
    "population": 317316
  },
  {
    "id": "51.761L18.091",
    "name": "Kalisz",
    "lat": 51.76109,
    "lng": 18.09102,
    "countryCode": "PL",
    "population": 108759
  },
  {
    "id": "50.900L15.729",
    "name": "Jelenia Góra",
    "lat": 50.89973,
    "lng": 15.72899,
    "countryCode": "PL",
    "population": 87310
  },
  {
    "id": "50.205L19.275",
    "name": "Jaworzno",
    "lat": 50.20528,
    "lng": 19.27498,
    "countryCode": "PL",
    "population": 96541
  },
  {
    "id": "49.955L18.575",
    "name": "Jastrzębie Zdrój",
    "lat": 49.95542,
    "lng": 18.57479,
    "countryCode": "PL",
    "population": 95813
  },
  {
    "id": "52.799L18.264",
    "name": "Inowrocław",
    "lat": 52.79886,
    "lng": 18.26387,
    "countryCode": "PL",
    "population": 77597
  },
  {
    "id": "53.484L18.754",
    "name": "Grudziądz",
    "lat": 53.48411,
    "lng": 18.75366,
    "countryCode": "PL",
    "population": 99486
  },
  {
    "id": "52.737L15.229",
    "name": "Gorzów Wielkopolski",
    "lat": 52.73679,
    "lng": 15.22878,
    "countryCode": "PL",
    "population": 124430
  },
  {
    "id": "52.535L17.583",
    "name": "Gniezno",
    "lat": 52.53481,
    "lng": 17.58259,
    "countryCode": "PL",
    "population": 70269
  },
  {
    "id": "51.664L16.084",
    "name": "Głogów",
    "lat": 51.66361,
    "lng": 16.0845,
    "countryCode": "PL",
    "population": 68530
  },
  {
    "id": "50.298L18.677",
    "name": "Gliwice",
    "lat": 50.29761,
    "lng": 18.67658,
    "countryCode": "PL",
    "population": 198835
  },
  {
    "id": "54.519L18.532",
    "name": "Gdynia",
    "lat": 54.51889,
    "lng": 18.53188,
    "countryCode": "PL",
    "population": 253730
  },
  {
    "id": "54.352L18.646",
    "name": "Gdańsk",
    "lat": 54.35205,
    "lng": 18.64637,
    "countryCode": "PL",
    "population": 461865
  },
  {
    "id": "53.148L18.170",
    "name": "Fordon",
    "lat": 53.14821,
    "lng": 18.17036,
    "countryCode": "PL",
    "population": 70000
  },
  {
    "id": "54.152L19.409",
    "name": "Elbląg",
    "lat": 54.1522,
    "lng": 19.40884,
    "countryCode": "PL",
    "population": 127558
  },
  {
    "id": "50.318L19.237",
    "name": "Dąbrowa Górnicza",
    "lat": 50.31818,
    "lng": 19.2374,
    "countryCode": "PL",
    "population": 130601
  },
  {
    "id": "50.796L19.124",
    "name": "Częstochowa",
    "lat": 50.79646,
    "lng": 19.12409,
    "countryCode": "PL",
    "population": 248125
  },
  {
    "id": "50.306L18.974",
    "name": "Chorzów",
    "lat": 50.30582,
    "lng": 18.9742,
    "countryCode": "PL",
    "population": 113430
  },
  {
    "id": "50.348L18.933",
    "name": "Bytom",
    "lat": 50.34802,
    "lng": 18.93282,
    "countryCode": "PL",
    "population": 189186
  },
  {
    "id": "53.123L18.008",
    "name": "Bydgoszcz",
    "lat": 53.1235,
    "lng": 18.00762,
    "countryCode": "PL",
    "population": 366452
  },
  {
    "id": "49.822L19.047",
    "name": "Bielsko-Biala",
    "lat": 49.82245,
    "lng": 19.04686,
    "countryCode": "PL",
    "population": 176515
  },
  {
    "id": "51.369L19.357",
    "name": "Bełchatów",
    "lat": 51.36883,
    "lng": 19.35671,
    "countryCode": "PL",
    "population": 62896
  },
  {
    "id": "50.326L19.126",
    "name": "Będzin",
    "lat": 50.32607,
    "lng": 19.12565,
    "countryCode": "PL",
    "population": 58236
  },
  {
    "id": "52.151L21.050",
    "name": "Ursynów",
    "lat": 52.15051,
    "lng": 21.05041,
    "countryCode": "PL",
    "population": 147676
  },
  {
    "id": "52.254L21.035",
    "name": "Praga Północ",
    "lat": 52.25443,
    "lng": 21.03472,
    "countryCode": "PL",
    "population": 93192
  },
  {
    "id": "52.244L21.085",
    "name": "Praga Południe",
    "lat": 52.24424,
    "lng": 21.08545,
    "countryCode": "PL",
    "population": 187845
  },
  {
    "id": "38.524L-8.888",
    "name": "Setúbal",
    "lat": 38.5244,
    "lng": -8.8882,
    "countryCode": "PT",
    "population": 117110
  },
  {
    "id": "38.775L-9.328",
    "name": "Rio de Mouro",
    "lat": 38.77457,
    "lng": -9.3276,
    "countryCode": "PT",
    "population": 54695
  },
  {
    "id": "38.757L-9.255",
    "name": "Queluz",
    "lat": 38.75657,
    "lng": -9.25451,
    "countryCode": "PT",
    "population": 103399
  },
  {
    "id": "38.793L-9.184",
    "name": "Odivelas",
    "lat": 38.79269,
    "lng": -9.1838,
    "countryCode": "PT",
    "population": 54624
  },
  {
    "id": "38.831L-9.168",
    "name": "Loures",
    "lat": 38.83091,
    "lng": -9.16845,
    "countryCode": "PT",
    "population": 66231
  },
  {
    "id": "38.717L-9.133",
    "name": "Lisbon",
    "lat": 38.71667,
    "lng": -9.13333,
    "countryCode": "PT",
    "population": 517802
  },
  {
    "id": "32.666L-16.925",
    "name": "Funchal",
    "lat": 32.66568,
    "lng": -16.92547,
    "countryCode": "PT",
    "population": 100847
  },
  {
    "id": "38.567L-7.900",
    "name": "Évora",
    "lat": 38.56667,
    "lng": -7.9,
    "countryCode": "PT",
    "population": 55620
  },
  {
    "id": "38.645L-9.148",
    "name": "Corroios",
    "lat": 38.64502,
    "lng": -9.14843,
    "countryCode": "PT",
    "population": 52520
  },
  {
    "id": "38.767L-9.298",
    "name": "Cacém",
    "lat": 38.76698,
    "lng": -9.29793,
    "countryCode": "PT",
    "population": 93982
  },
  {
    "id": "38.663L-9.072",
    "name": "Barreiro",
    "lat": 38.66314,
    "lng": -9.0724,
    "countryCode": "PT",
    "population": 51280
  },
  {
    "id": "38.630L-9.116",
    "name": "Amora",
    "lat": 38.62961,
    "lng": -9.11557,
    "countryCode": "PT",
    "population": 52577
  },
  {
    "id": "38.754L-9.231",
    "name": "Amadora",
    "lat": 38.75382,
    "lng": -9.23083,
    "countryCode": "PT",
    "population": 178858
  },
  {
    "id": "41.134L-8.617",
    "name": "Vila Nova de Gaia",
    "lat": 41.13363,
    "lng": -8.61742,
    "countryCode": "PT",
    "population": 70811
  },
  {
    "id": "41.150L-8.611",
    "name": "Porto",
    "lat": 41.14961,
    "lng": -8.61099,
    "countryCode": "PT",
    "population": 249633
  },
  {
    "id": "40.206L-8.420",
    "name": "Coimbra",
    "lat": 40.20564,
    "lng": -8.41955,
    "countryCode": "PT",
    "population": 106582
  },
  {
    "id": "41.550L-8.420",
    "name": "Braga",
    "lat": 41.55032,
    "lng": -8.42005,
    "countryCode": "PT",
    "population": 121394
  },
  {
    "id": "40.644L-8.646",
    "name": "Aveiro",
    "lat": 40.64427,
    "lng": -8.64554,
    "countryCode": "PT",
    "population": 54162
  },
  {
    "id": "47.200L23.050",
    "name": "Zalău",
    "lat": 47.2,
    "lng": 23.05,
    "countryCode": "RO",
    "population": 63232
  },
  {
    "id": "46.633L27.733",
    "name": "Vaslui",
    "lat": 46.63333,
    "lng": 27.73333,
    "countryCode": "RO",
    "population": 69225
  },
  {
    "id": "46.567L23.783",
    "name": "Turda",
    "lat": 46.56667,
    "lng": 23.78333,
    "countryCode": "RO",
    "population": 54586
  },
  {
    "id": "45.167L28.800",
    "name": "Tulcea",
    "lat": 45.16667,
    "lng": 28.8,
    "countryCode": "RO",
    "population": 92475
  },
  {
    "id": "46.542L24.557",
    "name": "Târgu-Mureş",
    "lat": 46.54245,
    "lng": 24.55747,
    "countryCode": "RO",
    "population": 146863
  },
  {
    "id": "45.050L23.283",
    "name": "Târgu Jiu",
    "lat": 45.05,
    "lng": 23.28333,
    "countryCode": "RO",
    "population": 97179
  },
  {
    "id": "44.925L25.457",
    "name": "Târgovişte",
    "lat": 44.92543,
    "lng": 25.4567,
    "countryCode": "RO",
    "population": 88435
  },
  {
    "id": "45.754L21.226",
    "name": "Timişoara",
    "lat": 45.75372,
    "lng": 21.22571,
    "countryCode": "RO",
    "population": 315053
  },
  {
    "id": "47.633L26.250",
    "name": "Suceava",
    "lat": 47.63333,
    "lng": 26.25,
    "countryCode": "RO",
    "population": 105796
  },
  {
    "id": "44.433L24.367",
    "name": "Slatina",
    "lat": 44.43333,
    "lng": 24.36667,
    "countryCode": "RO",
    "population": 78988
  },
  {
    "id": "45.800L24.150",
    "name": "Sibiu",
    "lat": 45.8,
    "lng": 24.15,
    "countryCode": "RO",
    "population": 151894
  },
  {
    "id": "45.867L25.783",
    "name": "Sfântu-Gheorghe",
    "lat": 45.86667,
    "lng": 25.78333,
    "countryCode": "RO",
    "population": 60677
  },
  {
    "id": "47.799L22.863",
    "name": "Satu Mare",
    "lat": 47.79926,
    "lng": 22.86255,
    "countryCode": "RO",
    "population": 112490
  },
  {
    "id": "46.921L26.926",
    "name": "Roman",
    "lat": 46.92119,
    "lng": 26.92646,
    "countryCode": "RO",
    "population": 67819
  },
  {
    "id": "45.100L24.367",
    "name": "Râmnicu Vâlcea",
    "lat": 45.1,
    "lng": 24.36667,
    "countryCode": "RO",
    "population": 107558
  },
  {
    "id": "45.301L21.889",
    "name": "Reşiţa",
    "lat": 45.30083,
    "lng": 21.88917,
    "countryCode": "RO",
    "population": 81228
  },
  {
    "id": "44.950L26.017",
    "name": "Ploieşti",
    "lat": 44.95,
    "lng": 26.01667,
    "countryCode": "RO",
    "population": 228851
  },
  {
    "id": "44.850L24.867",
    "name": "Piteşti",
    "lat": 44.85,
    "lng": 24.86667,
    "countryCode": "RO",
    "population": 167669
  },
  {
    "id": "46.917L26.333",
    "name": "Piatra Neamţ",
    "lat": 46.91667,
    "lng": 26.33333,
    "countryCode": "RO",
    "population": 102688
  },
  {
    "id": "47.046L21.918",
    "name": "Oradea",
    "lat": 47.0458,
    "lng": 21.91833,
    "countryCode": "RO",
    "population": 206614
  },
  {
    "id": "46.167L24.350",
    "name": "Mediaş",
    "lat": 46.16667,
    "lng": 24.35,
    "countryCode": "RO",
    "population": 53040
  },
  {
    "id": "47.167L27.600",
    "name": "Iaşi",
    "lat": 47.16667,
    "lng": 27.6,
    "countryCode": "RO",
    "population": 318012
  },
  {
    "id": "45.750L22.900",
    "name": "Hunedoara",
    "lat": 45.75,
    "lng": 22.9,
    "countryCode": "RO",
    "population": 69136
  },
  {
    "id": "43.883L25.967",
    "name": "Giurgiu",
    "lat": 43.88333,
    "lng": 25.96667,
    "countryCode": "RO",
    "population": 69067
  },
  {
    "id": "45.450L28.050",
    "name": "Galaţi",
    "lat": 45.45,
    "lng": 28.05,
    "countryCode": "RO",
    "population": 294087
  },
  {
    "id": "45.700L27.183",
    "name": "Focșani",
    "lat": 45.7,
    "lng": 27.18333,
    "countryCode": "RO",
    "population": 77313
  },
  {
    "id": "44.632L22.656",
    "name": "Drobeta-Turnu Severin",
    "lat": 44.63194,
    "lng": 22.65611,
    "countryCode": "RO",
    "population": 102346
  },
  {
    "id": "45.883L22.900",
    "name": "Deva",
    "lat": 45.88333,
    "lng": 22.9,
    "countryCode": "RO",
    "population": 67802
  },
  {
    "id": "44.317L23.800",
    "name": "Craiova",
    "lat": 44.31667,
    "lng": 23.8,
    "countryCode": "RO",
    "population": 304142
  },
  {
    "id": "44.181L28.634",
    "name": "Constanţa",
    "lat": 44.18073,
    "lng": 28.63432,
    "countryCode": "RO",
    "population": 303399
  },
  {
    "id": "46.767L23.600",
    "name": "Cluj-Napoca",
    "lat": 46.76667,
    "lng": 23.6,
    "countryCode": "RO",
    "population": 316748
  },
  {
    "id": "45.150L26.833",
    "name": "Buzău",
    "lat": 45.15,
    "lng": 26.83333,
    "countryCode": "RO",
    "population": 130954
  },
  {
    "id": "44.432L26.106",
    "name": "Bucharest",
    "lat": 44.43225,
    "lng": 26.10626,
    "countryCode": "RO",
    "population": 1877155
  },
  {
    "id": "45.649L25.606",
    "name": "Braşov",
    "lat": 45.64861,
    "lng": 25.60613,
    "countryCode": "RO",
    "population": 276088
  },
  {
    "id": "45.267L27.983",
    "name": "Brăila",
    "lat": 45.26667,
    "lng": 27.98333,
    "countryCode": "RO",
    "population": 213569
  },
  {
    "id": "47.750L26.667",
    "name": "Botoşani",
    "lat": 47.75,
    "lng": 26.66667,
    "countryCode": "RO",
    "population": 114783
  },
  {
    "id": "47.133L24.500",
    "name": "Bistriţa",
    "lat": 47.13316,
    "lng": 24.50011,
    "countryCode": "RO",
    "population": 81318
  },
  {
    "id": "46.232L27.669",
    "name": "Bârlad",
    "lat": 46.23175,
    "lng": 27.66907,
    "countryCode": "RO",
    "population": 67818
  },
  {
    "id": "47.657L23.568",
    "name": "Baia Mare",
    "lat": 47.65729,
    "lng": 23.56808,
    "countryCode": "RO",
    "population": 136553
  },
  {
    "id": "46.567L26.914",
    "name": "Bacău",
    "lat": 46.56718,
    "lng": 26.91384,
    "countryCode": "RO",
    "population": 171396
  },
  {
    "id": "46.183L21.317",
    "name": "Arad",
    "lat": 46.18333,
    "lng": 21.31667,
    "countryCode": "RO",
    "population": 169065
  },
  {
    "id": "46.067L23.583",
    "name": "Alba Iulia",
    "lat": 46.06667,
    "lng": 23.58333,
    "countryCode": "RO",
    "population": 66085
  },
  {
    "id": "47.653L23.579",
    "name": "Baia Mare",
    "lat": 47.65331,
    "lng": 23.57949,
    "countryCode": "RO",
    "population": 137976
  },
  {
    "id": "44.565L27.363",
    "name": "Slobozia",
    "lat": 44.5647,
    "lng": 27.3633,
    "countryCode": "RO",
    "population": 52710
  },
  {
    "id": "44.492L26.048",
    "name": "Sector 1",
    "lat": 44.49239,
    "lng": 26.04831,
    "countryCode": "RO",
    "population": 225453
  },
  {
    "id": "44.453L26.133",
    "name": "Sector 2",
    "lat": 44.4528,
    "lng": 26.13321,
    "countryCode": "RO",
    "population": 345370
  },
  {
    "id": "44.423L26.169",
    "name": "Sector 3",
    "lat": 44.4234,
    "lng": 26.16874,
    "countryCode": "RO",
    "population": 385439
  },
  {
    "id": "44.376L26.121",
    "name": "Sector 4",
    "lat": 44.37571,
    "lng": 26.12085,
    "countryCode": "RO",
    "population": 287828
  },
  {
    "id": "44.388L26.071",
    "name": "Sector 5",
    "lat": 44.38808,
    "lng": 26.07144,
    "countryCode": "RO",
    "population": 271575
  },
  {
    "id": "44.436L26.016",
    "name": "Sector 6",
    "lat": 44.43579,
    "lng": 26.01649,
    "countryCode": "RO",
    "population": 367760
  },
  {
    "id": "60.017L30.350",
    "name": "Sosnovka",
    "lat": 60.01667,
    "lng": 30.35,
    "countryCode": "RU",
    "population": 66227
  },
  {
    "id": "55.656L37.568",
    "name": "Zyuzino",
    "lat": 55.65608,
    "lng": 37.56846,
    "countryCode": "RU",
    "population": 121000
  },
  {
    "id": "55.617L37.767",
    "name": "Zyablikovo",
    "lat": 55.61667,
    "lng": 37.76667,
    "countryCode": "RU",
    "population": 129000
  },
  {
    "id": "55.171L59.651",
    "name": "Zlatoust",
    "lat": 55.17111,
    "lng": 59.65083,
    "countryCode": "RU",
    "population": 191366
  },
  {
    "id": "55.700L37.850",
    "name": "Zhulebino",
    "lat": 55.7,
    "lng": 37.85,
    "countryCode": "RU",
    "population": 150000
  },
  {
    "id": "55.595L38.120",
    "name": "Zhukovskiy",
    "lat": 55.59528,
    "lng": 38.12028,
    "countryCode": "RU",
    "population": 97200
  },
  {
    "id": "53.400L49.495",
    "name": "Zhigulevsk",
    "lat": 53.39972,
    "lng": 49.49528,
    "countryCode": "RU",
    "population": 57094
  },
  {
    "id": "52.331L35.371",
    "name": "Zheleznogorsk",
    "lat": 52.331,
    "lng": 35.3711,
    "countryCode": "RU",
    "population": 97900
  },
  {
    "id": "55.744L38.017",
    "name": "Zheleznodorozhnyy",
    "lat": 55.744,
    "lng": 38.01684,
    "countryCode": "RU",
    "population": 141648
  },
  {
    "id": "55.983L37.181",
    "name": "Zelenograd",
    "lat": 55.9825,
    "lng": 37.18139,
    "countryCode": "RU",
    "population": 215727
  },
  {
    "id": "55.844L48.518",
    "name": "Zelenodolsk",
    "lat": 55.84376,
    "lng": 48.51784,
    "countryCode": "RU",
    "population": 99600
  },
  {
    "id": "53.204L45.192",
    "name": "Zarechnyy",
    "lat": 53.20356,
    "lng": 45.19227,
    "countryCode": "RU",
    "population": 63579
  },
  {
    "id": "55.733L37.633",
    "name": "Zamoskvorech’ye",
    "lat": 55.73333,
    "lng": 37.63333,
    "countryCode": "RU",
    "population": 55000
  },
  {
    "id": "56.639L47.891",
    "name": "Yoshkar-Ola",
    "lat": 56.63877,
    "lng": 47.89078,
    "countryCode": "RU",
    "population": 279100
  },
  {
    "id": "46.706L38.274",
    "name": "Yeysk",
    "lat": 46.7055,
    "lng": 38.2739,
    "countryCode": "RU",
    "population": 87814
  },
  {
    "id": "44.044L42.861",
    "name": "Yessentuki",
    "lat": 44.04444,
    "lng": 42.86056,
    "countryCode": "RU",
    "population": 81015
  },
  {
    "id": "52.624L38.502",
    "name": "Yelets",
    "lat": 52.62366,
    "lng": 38.50169,
    "countryCode": "RU",
    "population": 115688
  },
  {
    "id": "55.761L52.065",
    "name": "Yelabuga",
    "lat": 55.76127,
    "lng": 52.06493,
    "countryCode": "RU",
    "population": 72643
  },
  {
    "id": "55.383L39.032",
    "name": "Yegor’yevsk",
    "lat": 55.38283,
    "lng": 39.03233,
    "countryCode": "RU",
    "population": 85200
  },
  {
    "id": "55.607L37.520",
    "name": "Yasenevo",
    "lat": 55.60686,
    "lng": 37.51991,
    "countryCode": "RU",
    "population": 180000
  },
  {
    "id": "55.067L32.696",
    "name": "Yartsevo",
    "lat": 55.06667,
    "lng": 32.69639,
    "countryCode": "RU",
    "population": 52706
  },
  {
    "id": "57.630L39.874",
    "name": "Yaroslavl",
    "lat": 57.62987,
    "lng": 39.87368,
    "countryCode": "RU",
    "population": 606730
  },
  {
    "id": "57.591L34.565",
    "name": "Vyshniy Volochëk",
    "lat": 57.59125,
    "lng": 34.56453,
    "countryCode": "RU",
    "population": 53800
  },
  {
    "id": "55.318L42.174",
    "name": "Vyksa",
    "lat": 55.3175,
    "lng": 42.17444,
    "countryCode": "RU",
    "population": 61664
  },
  {
    "id": "55.702L37.812",
    "name": "Vykhino-Zhulebino",
    "lat": 55.70196,
    "lng": 37.81178,
    "countryCode": "RU",
    "population": 216000
  },
  {
    "id": "60.708L28.753",
    "name": "Vyborg",
    "lat": 60.70763,
    "lng": 28.75283,
    "countryCode": "RU",
    "population": 78633
  },
  {
    "id": "55.210L34.295",
    "name": "Vyaz’ma",
    "lat": 55.21039,
    "lng": 34.29508,
    "countryCode": "RU",
    "population": 55500
  },
  {
    "id": "57.049L53.987",
    "name": "Votkinsk",
    "lat": 57.04865,
    "lng": 53.98717,
    "countryCode": "RU",
    "population": 98633
  },
  {
    "id": "55.317L38.653",
    "name": "Voskresensk",
    "lat": 55.31733,
    "lng": 38.65264,
    "countryCode": "RU",
    "population": 77086
  },
  {
    "id": "51.672L39.184",
    "name": "Voronezh",
    "lat": 51.67204,
    "lng": 39.1843,
    "countryCode": "RU",
    "population": 848752
  },
  {
    "id": "55.883L37.583",
    "name": "Altuf’yevskiy",
    "lat": 55.88333,
    "lng": 37.58333,
    "countryCode": "RU",
    "population": 54000
  },
  {
    "id": "48.786L44.780",
    "name": "Volzhskiy",
    "lat": 48.78583,
    "lng": 44.77973,
    "countryCode": "RU",
    "population": 323293
  },
  {
    "id": "55.866L48.359",
    "name": "Volzhsk",
    "lat": 55.86638,
    "lng": 48.3594,
    "countryCode": "RU",
    "population": 58000
  },
  {
    "id": "52.045L47.380",
    "name": "Vol’sk",
    "lat": 52.04541,
    "lng": 47.37993,
    "countryCode": "RU",
    "population": 70500
  },
  {
    "id": "59.224L39.884",
    "name": "Vologda",
    "lat": 59.2239,
    "lng": 39.88398,
    "countryCode": "RU",
    "population": 314900
  },
  {
    "id": "55.650L37.617",
    "name": "Nagornyy",
    "lat": 55.65,
    "lng": 37.61667,
    "countryCode": "RU",
    "population": 76000
  },
  {
    "id": "48.719L44.502",
    "name": "Volgograd",
    "lat": 48.71939,
    "lng": 44.50183,
    "countryCode": "RU",
    "population": 1011417
  },
  {
    "id": "47.514L42.151",
    "name": "Volgodonsk",
    "lat": 47.51361,
    "lng": 42.15139,
    "countryCode": "RU",
    "population": 167731
  },
  {
    "id": "56.137L40.397",
    "name": "Vladimir",
    "lat": 56.13655,
    "lng": 40.39658,
    "countryCode": "RU",
    "population": 310024
  },
  {
    "id": "43.037L44.668",
    "name": "Vladikavkaz",
    "lat": 43.03667,
    "lng": 44.66778,
    "countryCode": "RU",
    "population": 317370
  },
  {
    "id": "55.552L37.710",
    "name": "Vidnoye",
    "lat": 55.55239,
    "lng": 37.70967,
    "countryCode": "RU",
    "population": 51721
  },
  {
    "id": "55.724L37.820",
    "name": "Veshnyaki",
    "lat": 55.72393,
    "lng": 37.81952,
    "countryCode": "RU",
    "population": 122000
  },
  {
    "id": "56.340L30.545",
    "name": "Velikiye Luki",
    "lat": 56.34,
    "lng": 30.54517,
    "countryCode": "RU",
    "population": 103149
  },
  {
    "id": "53.982L38.171",
    "name": "Uzlovaya",
    "lat": 53.98179,
    "lng": 38.17118,
    "countryCode": "RU",
    "population": 58458
  },
  {
    "id": "59.839L30.175",
    "name": "Uritsk",
    "lat": 59.83889,
    "lng": 30.17528,
    "countryCode": "RU",
    "population": 55037
  },
  {
    "id": "54.328L48.387",
    "name": "Ulyanovsk",
    "lat": 54.32824,
    "lng": 48.38657,
    "countryCode": "RU",
    "population": 640680
  },
  {
    "id": "63.567L53.683",
    "name": "Ukhta",
    "lat": 63.56705,
    "lng": 53.68348,
    "countryCode": "RU",
    "population": 102187
  },
  {
    "id": "54.743L55.968",
    "name": "Ufa",
    "lat": 54.74306,
    "lng": 55.96779,
    "countryCode": "RU",
    "population": 1033338
  },
  {
    "id": "56.858L35.901",
    "name": "Tver",
    "lat": 56.85836,
    "lng": 35.90057,
    "countryCode": "RU",
    "population": 400212
  },
  {
    "id": "54.607L53.710",
    "name": "Tuymazy",
    "lat": 54.60666,
    "lng": 53.7097,
    "countryCode": "RU",
    "population": 68829
  },
  {
    "id": "54.196L37.618",
    "name": "Tula",
    "lat": 54.19609,
    "lng": 37.61822,
    "countryCode": "RU",
    "population": 468825
  },
  {
    "id": "44.105L39.080",
    "name": "Tuapse",
    "lat": 44.1053,
    "lng": 39.0802,
    "countryCode": "RU",
    "population": 64234
  },
  {
    "id": "55.656L37.485",
    "name": "Troparëvo",
    "lat": 55.65625,
    "lng": 37.48496,
    "countryCode": "RU",
    "population": 118000
  },
  {
    "id": "53.530L49.346",
    "name": "Tol’yatti",
    "lat": 53.5303,
    "lng": 49.3461,
    "countryCode": "RU",
    "population": 702879
  },
  {
    "id": "45.617L38.945",
    "name": "Timashëvsk",
    "lat": 45.61694,
    "lng": 38.94528,
    "countryCode": "RU",
    "population": 53940
  },
  {
    "id": "59.645L33.529",
    "name": "Tikhvin",
    "lat": 59.64511,
    "lng": 33.52937,
    "countryCode": "RU",
    "population": 62075
  },
  {
    "id": "45.855L40.125",
    "name": "Tikhoretsk",
    "lat": 45.85472,
    "lng": 40.12528,
    "countryCode": "RU",
    "population": 64387
  },
  {
    "id": "55.620L37.493",
    "name": "Tyoply Stan",
    "lat": 55.62047,
    "lng": 37.49338,
    "countryCode": "RU",
    "population": 125000
  },
  {
    "id": "55.700L37.743",
    "name": "Tekstil’shchiki",
    "lat": 55.70033,
    "lng": 37.74271,
    "countryCode": "RU",
    "population": 100000
  },
  {
    "id": "52.732L41.443",
    "name": "Tambov",
    "lat": 52.73169,
    "lng": 41.44326,
    "countryCode": "RU",
    "population": 290933
  },
  {
    "id": "47.236L38.897",
    "name": "Taganrog",
    "lat": 47.23617,
    "lng": 38.89688,
    "countryCode": "RU",
    "population": 279056
  },
  {
    "id": "55.733L37.667",
    "name": "Taganskiy",
    "lat": 55.73333,
    "lng": 37.66667,
    "countryCode": "RU",
    "population": 116000
  },
  {
    "id": "53.158L48.468",
    "name": "Syzran’",
    "lat": 53.1585,
    "lng": 48.4681,
    "countryCode": "RU",
    "population": 189338
  },
  {
    "id": "61.676L50.810",
    "name": "Syktyvkar",
    "lat": 61.67642,
    "lng": 50.80994,
    "countryCode": "RU",
    "population": 230139
  },
  {
    "id": "55.850L37.633",
    "name": "Sviblovo",
    "lat": 55.85,
    "lng": 37.63333,
    "countryCode": "RU",
    "population": 60000
  },
  {
    "id": "54.901L38.071",
    "name": "Stupino",
    "lat": 54.90083,
    "lng": 38.07083,
    "countryCode": "RU",
    "population": 60999
  },
  {
    "id": "55.818L37.412",
    "name": "Strogino",
    "lat": 55.81838,
    "lng": 37.41224,
    "countryCode": "RU",
    "population": 152000
  },
  {
    "id": "53.625L55.950",
    "name": "Sterlitamak",
    "lat": 53.62462,
    "lng": 55.95015,
    "countryCode": "RU",
    "population": 267231
  },
  {
    "id": "45.043L41.973",
    "name": "Stavropol’",
    "lat": 45.0428,
    "lng": 41.9734,
    "countryCode": "RU",
    "population": 363064
  },
  {
    "id": "51.297L37.842",
    "name": "Staryy Oskol",
    "lat": 51.29667,
    "lng": 37.84167,
    "countryCode": "RU",
    "population": 226977
  },
  {
    "id": "59.900L29.086",
    "name": "Sosnovyy Bor",
    "lat": 59.8996,
    "lng": 29.08574,
    "countryCode": "RU",
    "population": 68563
  },
  {
    "id": "55.637L37.381",
    "name": "Solntsevo",
    "lat": 55.63711,
    "lng": 37.38115,
    "countryCode": "RU",
    "population": 120000
  },
  {
    "id": "56.183L36.983",
    "name": "Solnechnogorsk",
    "lat": 56.18333,
    "lng": 36.98333,
    "countryCode": "RU",
    "population": 58891
  },
  {
    "id": "59.632L56.769",
    "name": "Solikamsk",
    "lat": 59.6316,
    "lng": 56.7685,
    "countryCode": "RU",
    "population": 100812
  },
  {
    "id": "55.802L37.672",
    "name": "Sokol’niki",
    "lat": 55.80202,
    "lng": 37.67159,
    "countryCode": "RU",
    "population": 57000
  },
  {
    "id": "55.800L37.517",
    "name": "Sokol",
    "lat": 55.8,
    "lng": 37.51667,
    "countryCode": "RU",
    "population": 57000
  },
  {
    "id": "43.599L39.726",
    "name": "Sochi",
    "lat": 43.59917,
    "lng": 39.72569,
    "countryCode": "RU",
    "population": 327608
  },
  {
    "id": "54.782L32.040",
    "name": "Smolensk",
    "lat": 54.7818,
    "lng": 32.0401,
    "countryCode": "RU",
    "population": 320991
  },
  {
    "id": "45.256L38.126",
    "name": "Slavyansk-na-Kubani",
    "lat": 45.2558,
    "lng": 38.1256,
    "countryCode": "RU",
    "population": 65196
  },
  {
    "id": "52.718L58.666",
    "name": "Sibay",
    "lat": 52.71806,
    "lng": 58.66583,
    "countryCode": "RU",
    "population": 61590
  },
  {
    "id": "56.849L41.388",
    "name": "Shuya",
    "lat": 56.84865,
    "lng": 41.38833,
    "countryCode": "RU",
    "population": 60705
  },
  {
    "id": "45.128L42.026",
    "name": "Mikhaylovsk",
    "lat": 45.12833,
    "lng": 42.02556,
    "countryCode": "RU",
    "population": 59198
  },
  {
    "id": "55.800L37.450",
    "name": "Shchukino",
    "lat": 55.8,
    "lng": 37.45,
    "countryCode": "RU",
    "population": 102000
  },
  {
    "id": "55.925L37.972",
    "name": "Shchelkovo",
    "lat": 55.92497,
    "lng": 37.97218,
    "countryCode": "RU",
    "population": 113000
  },
  {
    "id": "54.005L37.522",
    "name": "Shchëkino",
    "lat": 54.00513,
    "lng": 37.52194,
    "countryCode": "RU",
    "population": 60700
  },
  {
    "id": "47.709L40.214",
    "name": "Shakhty",
    "lat": 47.70911,
    "lng": 40.21443,
    "countryCode": "RU",
    "population": 221312
  },
  {
    "id": "69.069L33.416",
    "name": "Severomorsk",
    "lat": 69.06889,
    "lng": 33.41622,
    "countryCode": "RU",
    "population": 53921
  },
  {
    "id": "64.564L39.830",
    "name": "Severodvinsk",
    "lat": 64.5635,
    "lng": 39.8302,
    "countryCode": "RU",
    "population": 194292
  },
  {
    "id": "55.936L37.549",
    "name": "Severnyy",
    "lat": 55.93583,
    "lng": 37.54889,
    "countryCode": "RU",
    "population": 200000
  },
  {
    "id": "54.916L37.411",
    "name": "Serpukhov",
    "lat": 54.91578,
    "lng": 37.41114,
    "countryCode": "RU",
    "population": 128158
  },
  {
    "id": "56.300L38.133",
    "name": "Sergiyev Posad",
    "lat": 56.3,
    "lng": 38.13333,
    "countryCode": "RU",
    "population": 109252
  },
  {
    "id": "54.936L43.324",
    "name": "Sarov",
    "lat": 54.93583,
    "lng": 43.32352,
    "countryCode": "RU",
    "population": 88000
  },
  {
    "id": "51.541L46.009",
    "name": "Saratov",
    "lat": 51.54056,
    "lng": 46.00861,
    "countryCode": "RU",
    "population": 863725
  },
  {
    "id": "56.476L53.798",
    "name": "Sarapul",
    "lat": 56.47633,
    "lng": 53.79782,
    "countryCode": "RU",
    "population": 98830
  },
  {
    "id": "54.184L45.175",
    "name": "Saransk",
    "lat": 54.1838,
    "lng": 45.1749,
    "countryCode": "RU",
    "population": 303394
  },
  {
    "id": "59.939L30.314",
    "name": "Saint Petersburg",
    "lat": 59.93863,
    "lng": 30.31413,
    "countryCode": "RU",
    "population": 5028000
  },
  {
    "id": "53.200L50.150",
    "name": "Samara",
    "lat": 53.20007,
    "lng": 50.15,
    "countryCode": "RU",
    "population": 1134730
  },
  {
    "id": "46.475L41.541",
    "name": "Sal’sk",
    "lat": 46.4747,
    "lng": 41.54114,
    "countryCode": "RU",
    "population": 61000
  },
  {
    "id": "53.384L55.908",
    "name": "Salavat",
    "lat": 53.38365,
    "lng": 55.90773,
    "countryCode": "RU",
    "population": 159893
  },
  {
    "id": "56.262L34.328",
    "name": "Rzhev",
    "lat": 56.26241,
    "lng": 34.32817,
    "countryCode": "RU",
    "population": 62246
  },
  {
    "id": "58.045L38.843",
    "name": "Rybinsk",
    "lat": 58.0446,
    "lng": 38.84259,
    "countryCode": "RU",
    "population": 216724
  },
  {
    "id": "59.839L30.499",
    "name": "Rybatskoye",
    "lat": 59.8393,
    "lng": 30.49873,
    "countryCode": "RU",
    "population": 55076
  },
  {
    "id": "54.627L39.692",
    "name": "Ryazan’",
    "lat": 54.6269,
    "lng": 39.6916,
    "countryCode": "RU",
    "population": 520173
  },
  {
    "id": "47.231L39.723",
    "name": "Rostov-na-Donu",
    "lat": 47.23135,
    "lng": 39.72328,
    "countryCode": "RU",
    "population": 1074482
  },
  {
    "id": "51.121L38.512",
    "name": "Rossosh’",
    "lat": 51.1209,
    "lng": 38.5116,
    "countryCode": "RU",
    "population": 64323
  },
  {
    "id": "50.198L39.567",
    "name": "Rossosh’",
    "lat": 50.19828,
    "lng": 39.56726,
    "countryCode": "RU",
    "population": 62000
  },
  {
    "id": "53.953L32.864",
    "name": "Roslavl’",
    "lat": 53.95278,
    "lng": 32.86389,
    "countryCode": "RU",
    "population": 56971
  },
  {
    "id": "56.801L59.930",
    "name": "Revda",
    "lat": 56.80097,
    "lng": 59.93028,
    "countryCode": "RU",
    "population": 61785
  },
  {
    "id": "55.761L37.858",
    "name": "Reutov",
    "lat": 55.76111,
    "lng": 37.8575,
    "countryCode": "RU",
    "population": 78370
  },
  {
    "id": "55.567L38.230",
    "name": "Ramenskoye",
    "lat": 55.56694,
    "lng": 38.23028,
    "countryCode": "RU",
    "population": 96000
  },
  {
    "id": "55.700L37.500",
    "name": "Ramenki",
    "lat": 55.7,
    "lng": 37.5,
    "countryCode": "RU",
    "population": 130000
  },
  {
    "id": "44.049L43.059",
    "name": "Pyatigorsk",
    "lat": 44.04861,
    "lng": 43.05944,
    "countryCode": "RU",
    "population": 142865
  },
  {
    "id": "56.017L37.867",
    "name": "Pushkino",
    "lat": 56.01722,
    "lng": 37.86667,
    "countryCode": "RU",
    "population": 102816
  },
  {
    "id": "59.714L30.396",
    "name": "Pushkin",
    "lat": 59.71417,
    "lng": 30.39642,
    "countryCode": "RU",
    "population": 92889
  },
  {
    "id": "57.814L28.350",
    "name": "Pskov",
    "lat": 57.8136,
    "lng": 28.3496,
    "countryCode": "RU",
    "population": 201990
  },
  {
    "id": "43.757L44.030",
    "name": "Prokhladnyy",
    "lat": 43.75741,
    "lng": 44.0297,
    "countryCode": "RU",
    "population": 60800
  },
  {
    "id": "55.659L37.604",
    "name": "Kotlovka",
    "lat": 55.65928,
    "lng": 37.60404,
    "countryCode": "RU",
    "population": 64000
  },
  {
    "id": "55.808L37.458",
    "name": "Pokrovskoye-Streshnëvo",
    "lat": 55.80797,
    "lng": 37.45814,
    "countryCode": "RU",
    "population": 55000
  },
  {
    "id": "55.424L37.555",
    "name": "Podolsk",
    "lat": 55.42419,
    "lng": 37.55472,
    "countryCode": "RU",
    "population": 179400
  },
  {
    "id": "55.733L37.767",
    "name": "Ryazanskiy",
    "lat": 55.73333,
    "lng": 37.76667,
    "countryCode": "RU",
    "population": 101000
  },
  {
    "id": "61.785L34.347",
    "name": "Petrozavodsk",
    "lat": 61.78491,
    "lng": 34.34691,
    "countryCode": "RU",
    "population": 265025
  },
  {
    "id": "59.896L29.801",
    "name": "Petrodvorets",
    "lat": 59.89565,
    "lng": 29.80145,
    "countryCode": "RU",
    "population": 61973
  },
  {
    "id": "59.883L29.900",
    "name": "Peterhof",
    "lat": 59.88333,
    "lng": 29.9,
    "countryCode": "RU",
    "population": 73199
  },
  {
    "id": "56.905L59.944",
    "name": "Pervoural’sk",
    "lat": 56.90528,
    "lng": 59.94361,
    "countryCode": "RU",
    "population": 133600
  },
  {
    "id": "58.010L56.250",
    "name": "Perm",
    "lat": 58.01046,
    "lng": 56.25017,
    "countryCode": "RU",
    "population": 982419
  },
  {
    "id": "55.645L37.336",
    "name": "Novo-Peredelkino",
    "lat": 55.64528,
    "lng": 37.33583,
    "countryCode": "RU",
    "population": 115536
  },
  {
    "id": "53.201L45.005",
    "name": "Penza",
    "lat": 53.20066,
    "lng": 45.00464,
    "countryCode": "RU",
    "population": 512602
  },
  {
    "id": "55.782L38.650",
    "name": "Pavlovskiy Posad",
    "lat": 55.78187,
    "lng": 38.65025,
    "countryCode": "RU",
    "population": 60051
  },
  {
    "id": "60.039L30.311",
    "name": "Ozerki",
    "lat": 60.03947,
    "lng": 30.31128,
    "countryCode": "RU",
    "population": 95000
  },
  {
    "id": "53.376L51.345",
    "name": "Otradnyy",
    "lat": 53.37596,
    "lng": 51.3452,
    "countryCode": "RU",
    "population": 50127
  },
  {
    "id": "55.830L37.616",
    "name": "Ostankinskiy",
    "lat": 55.82957,
    "lng": 37.61604,
    "countryCode": "RU",
    "population": 60000
  },
  {
    "id": "51.205L58.567",
    "name": "Orsk",
    "lat": 51.20487,
    "lng": 58.56685,
    "countryCode": "RU",
    "population": 246836
  },
  {
    "id": "51.773L55.099",
    "name": "Orenburg",
    "lat": 51.7727,
    "lng": 55.0988,
    "countryCode": "RU",
    "population": 550204
  },
  {
    "id": "52.965L36.078",
    "name": "Orël",
    "lat": 52.96508,
    "lng": 36.07849,
    "countryCode": "RU",
    "population": 324200
  },
  {
    "id": "55.807L38.962",
    "name": "Orekhovo-Zuyevo",
    "lat": 55.80672,
    "lng": 38.96178,
    "countryCode": "RU",
    "population": 120000
  },
  {
    "id": "55.617L37.683",
    "name": "Orekhovo-Borisovo Severnoye",
    "lat": 55.61667,
    "lng": 37.68333,
    "countryCode": "RU",
    "population": 128000
  },
  {
    "id": "43.319L45.049",
    "name": "Sunzha",
    "lat": 43.3195,
    "lng": 45.04911,
    "countryCode": "RU",
    "population": 71841
  },
  {
    "id": "54.481L53.471",
    "name": "Oktyabr’skiy",
    "lat": 54.48147,
    "lng": 53.47103,
    "countryCode": "RU",
    "population": 108200
  },
  {
    "id": "55.678L37.278",
    "name": "Odintsovo",
    "lat": 55.67798,
    "lng": 37.27773,
    "countryCode": "RU",
    "population": 137041
  },
  {
    "id": "55.684L37.447",
    "name": "Ochakovo-Matveyevskoye",
    "lat": 55.68432,
    "lng": 37.44654,
    "countryCode": "RU",
    "population": 114000
  },
  {
    "id": "55.097L36.610",
    "name": "Obninsk",
    "lat": 55.09681,
    "lng": 36.61006,
    "countryCode": "RU",
    "population": 107392
  },
  {
    "id": "55.700L37.750",
    "name": "Novyye Kuz’minki",
    "lat": 55.7,
    "lng": 37.75,
    "countryCode": "RU",
    "population": 143000
  },
  {
    "id": "55.700L37.583",
    "name": "Novyye Cherëmushki",
    "lat": 55.7,
    "lng": 37.58333,
    "countryCode": "RU",
    "population": 101000
  },
  {
    "id": "51.203L58.327",
    "name": "Novotroitsk",
    "lat": 51.20301,
    "lng": 58.32665,
    "countryCode": "RU",
    "population": 106186
  },
  {
    "id": "47.760L39.933",
    "name": "Novoshakhtinsk",
    "lat": 47.76037,
    "lng": 39.93335,
    "countryCode": "RU",
    "population": 99478
  },
  {
    "id": "44.724L37.768",
    "name": "Novorossiysk",
    "lat": 44.72439,
    "lng": 37.76752,
    "countryCode": "RU",
    "population": 241856
  },
  {
    "id": "54.011L38.285",
    "name": "Novomoskovsk",
    "lat": 54.0105,
    "lng": 38.2846,
    "countryCode": "RU",
    "population": 130982
  },
  {
    "id": "53.096L49.946",
    "name": "Novokuybyshevsk",
    "lat": 53.0959,
    "lng": 49.9462,
    "countryCode": "RU",
    "population": 111800
  },
  {
    "id": "55.754L37.819",
    "name": "Novogireyevo",
    "lat": 55.75378,
    "lng": 37.81885,
    "countryCode": "RU",
    "population": 95000
  },
  {
    "id": "47.420L40.091",
    "name": "Novocherkassk",
    "lat": 47.42018,
    "lng": 40.09132,
    "countryCode": "RU",
    "population": 166974
  },
  {
    "id": "56.111L47.478",
    "name": "Novocheboksarsk",
    "lat": 56.11095,
    "lng": 47.47755,
    "countryCode": "RU",
    "population": 128468
  },
  {
    "id": "58.521L31.271",
    "name": "Velikiy Novgorod",
    "lat": 58.52131,
    "lng": 31.27104,
    "countryCode": "RU",
    "population": 215062
  },
  {
    "id": "55.866L38.444",
    "name": "Noginsk",
    "lat": 55.86647,
    "lng": 38.4438,
    "countryCode": "RU",
    "population": 115979
  },
  {
    "id": "57.919L59.965",
    "name": "Nizhniy Tagil",
    "lat": 57.91944,
    "lng": 59.965,
    "countryCode": "RU",
    "population": 381116
  },
  {
    "id": "56.329L44.002",
    "name": "Nizhniy Novgorod",
    "lat": 56.32867,
    "lng": 44.00205,
    "countryCode": "RU",
    "population": 1284164
  },
  {
    "id": "55.637L51.824",
    "name": "Nizhnekamsk",
    "lat": 55.63657,
    "lng": 51.82447,
    "countryCode": "RU",
    "population": 234297
  },
  {
    "id": "44.633L41.944",
    "name": "Nevinnomyssk",
    "lat": 44.6333,
    "lng": 41.9444,
    "countryCode": "RU",
    "population": 134345
  },
  {
    "id": "56.092L54.266",
    "name": "Neftekamsk",
    "lat": 56.092,
    "lng": 54.2661,
    "countryCode": "RU",
    "population": 126805
  },
  {
    "id": "43.226L44.773",
    "name": "Nazran’",
    "lat": 43.22597,
    "lng": 44.77323,
    "countryCode": "RU",
    "population": 164131
  },
  {
    "id": "55.388L36.733",
    "name": "Naro-Fominsk",
    "lat": 55.38752,
    "lng": 36.73307,
    "countryCode": "RU",
    "population": 72632
  },
  {
    "id": "43.498L43.619",
    "name": "Nal’chik",
    "lat": 43.49806,
    "lng": 43.61889,
    "countryCode": "RU",
    "population": 272800
  },
  {
    "id": "55.725L52.411",
    "name": "Naberezhnyye Chelny",
    "lat": 55.72545,
    "lng": 52.41122,
    "countryCode": "RU",
    "population": 509870
  },
  {
    "id": "55.912L37.731",
    "name": "Mytishchi",
    "lat": 55.91163,
    "lng": 37.73076,
    "countryCode": "RU",
    "population": 160542
  },
  {
    "id": "55.575L42.043",
    "name": "Murom",
    "lat": 55.575,
    "lng": 42.0426,
    "countryCode": "RU",
    "population": 126931
  },
  {
    "id": "68.979L33.093",
    "name": "Murmansk",
    "lat": 68.97917,
    "lng": 33.09251,
    "countryCode": "RU",
    "population": 319263
  },
  {
    "id": "55.752L37.616",
    "name": "Moscow",
    "lat": 55.75222,
    "lng": 37.61556,
    "countryCode": "RU",
    "population": 10381222
  },
  {
    "id": "44.210L43.135",
    "name": "Mineralnye Vody",
    "lat": 44.21028,
    "lng": 43.13528,
    "countryCode": "RU",
    "population": 76280
  },
  {
    "id": "50.060L43.238",
    "name": "Mikhaylovka",
    "lat": 50.06,
    "lng": 43.2379,
    "countryCode": "RU",
    "population": 58898
  },
  {
    "id": "52.898L40.491",
    "name": "Michurinsk",
    "lat": 52.8978,
    "lng": 40.4907,
    "countryCode": "RU",
    "population": 93499
  },
  {
    "id": "52.965L55.933",
    "name": "Meleuz",
    "lat": 52.96467,
    "lng": 55.93277,
    "countryCode": "RU",
    "population": 65362
  },
  {
    "id": "44.608L40.106",
    "name": "Maykop",
    "lat": 44.60778,
    "lng": 40.10583,
    "countryCode": "RU",
    "population": 144055
  },
  {
    "id": "55.650L37.717",
    "name": "Mar’ino",
    "lat": 55.65,
    "lng": 37.71667,
    "countryCode": "RU",
    "population": 243000
  },
  {
    "id": "55.883L37.717",
    "name": "Yaroslavskiy",
    "lat": 55.88333,
    "lng": 37.71667,
    "countryCode": "RU",
    "population": 91000
  },
  {
    "id": "42.976L47.502",
    "name": "Makhachkala",
    "lat": 42.97638,
    "lng": 47.50236,
    "countryCode": "RU",
    "population": 497959
  },
  {
    "id": "53.419L59.047",
    "name": "Magnitogorsk",
    "lat": 53.41861,
    "lng": 59.04722,
    "countryCode": "RU",
    "population": 413351
  },
  {
    "id": "55.679L37.752",
    "name": "Lyublino",
    "lat": 55.67923,
    "lng": 37.7525,
    "countryCode": "RU",
    "population": 172000
  },
  {
    "id": "55.677L37.893",
    "name": "Lyubertsy",
    "lat": 55.67719,
    "lng": 37.89322,
    "countryCode": "RU",
    "population": 154650
  },
  {
    "id": "55.583L37.905",
    "name": "Lytkarino",
    "lat": 55.58271,
    "lng": 37.90516,
    "countryCode": "RU",
    "population": 50619
  },
  {
    "id": "58.109L57.805",
    "name": "Lys’va",
    "lat": 58.10861,
    "lng": 57.80528,
    "countryCode": "RU",
    "population": 68660
  },
  {
    "id": "56.010L37.482",
    "name": "Lobnya",
    "lat": 56.00972,
    "lng": 37.48194,
    "countryCode": "RU",
    "population": 61772
  },
  {
    "id": "52.425L37.607",
    "name": "Livny",
    "lat": 52.42534,
    "lng": 37.60689,
    "countryCode": "RU",
    "population": 52915
  },
  {
    "id": "50.984L39.515",
    "name": "Liski",
    "lat": 50.98405,
    "lng": 39.51545,
    "countryCode": "RU",
    "population": 55939
  },
  {
    "id": "52.603L39.571",
    "name": "Lipetsk",
    "lat": 52.60311,
    "lng": 39.57076,
    "countryCode": "RU",
    "population": 515655
  },
  {
    "id": "55.898L37.587",
    "name": "Lianozovo",
    "lat": 55.89783,
    "lng": 37.5868,
    "countryCode": "RU",
    "population": 86000
  },
  {
    "id": "60.004L30.275",
    "name": "Komendantsky aerodrom",
    "lat": 60.00448,
    "lng": 30.27523,
    "countryCode": "RU",
    "population": 84052
  },
  {
    "id": "54.603L52.461",
    "name": "Leninogorsk",
    "lat": 54.60256,
    "lng": 52.46087,
    "countryCode": "RU",
    "population": 66263
  },
  {
    "id": "55.625L37.650",
    "name": "Tsaritsyno",
    "lat": 55.6254,
    "lng": 37.65032,
    "countryCode": "RU",
    "population": 123000
  },
  {
    "id": "55.767L37.700",
    "name": "Lefortovo",
    "lat": 55.76667,
    "lng": 37.7,
    "countryCode": "RU",
    "population": 91000
  },
  {
    "id": "44.634L40.736",
    "name": "Labinsk",
    "lat": 44.63417,
    "lng": 40.73556,
    "countryCode": "RU",
    "population": 61945
  },
  {
    "id": "53.117L46.600",
    "name": "Kuznetsk",
    "lat": 53.11675,
    "lng": 46.60037,
    "countryCode": "RU",
    "population": 90480
  },
  {
    "id": "55.700L37.800",
    "name": "Kuz’minki",
    "lat": 55.7,
    "lng": 37.8,
    "countryCode": "RU",
    "population": 143000
  },
  {
    "id": "51.737L36.187",
    "name": "Kursk",
    "lat": 51.73733,
    "lng": 36.18735,
    "countryCode": "RU",
    "population": 409431
  },
  {
    "id": "59.853L30.357",
    "name": "Kupchino",
    "lat": 59.85278,
    "lng": 30.35667,
    "countryCode": "RU",
    "population": 54198
  },
  {
    "id": "57.437L56.959",
    "name": "Kungur",
    "lat": 57.4368,
    "lng": 56.9593,
    "countryCode": "RU",
    "population": 66389
  },
  {
    "id": "52.767L55.783",
    "name": "Kumertau",
    "lat": 52.76667,
    "lng": 55.78333,
    "countryCode": "RU",
    "population": 65321
  },
  {
    "id": "56.147L44.198",
    "name": "Kstovo",
    "lat": 56.14733,
    "lng": 44.19787,
    "countryCode": "RU",
    "population": 67242
  },
  {
    "id": "44.929L37.991",
    "name": "Krymsk",
    "lat": 44.92934,
    "lng": 37.99117,
    "countryCode": "RU",
    "population": 57555
  },
  {
    "id": "45.438L40.576",
    "name": "Kropotkin",
    "lat": 45.4375,
    "lng": 40.57556,
    "countryCode": "RU",
    "population": 79599
  },
  {
    "id": "55.588L37.643",
    "name": "Biryulëvo Zapadnoye",
    "lat": 55.58766,
    "lng": 37.64282,
    "countryCode": "RU",
    "population": 89000
  },
  {
    "id": "58.080L55.755",
    "name": "Krasnokamsk",
    "lat": 58.0796,
    "lng": 55.7552,
    "countryCode": "RU",
    "population": 52689
  },
  {
    "id": "55.820L37.330",
    "name": "Krasnogorsk",
    "lat": 55.82036,
    "lng": 37.33017,
    "countryCode": "RU",
    "population": 92932
  },
  {
    "id": "45.045L38.976",
    "name": "Krasnodar",
    "lat": 45.04484,
    "lng": 38.97603,
    "countryCode": "RU",
    "population": 649851
  },
  {
    "id": "55.750L37.550",
    "name": "Presnenskiy",
    "lat": 55.75,
    "lng": 37.55,
    "countryCode": "RU",
    "population": 122000
  },
  {
    "id": "56.357L41.319",
    "name": "Kovrov",
    "lat": 56.35722,
    "lng": 41.31917,
    "countryCode": "RU",
    "population": 154224
  },
  {
    "id": "61.257L46.650",
    "name": "Kotlas",
    "lat": 61.25745,
    "lng": 46.64963,
    "countryCode": "RU",
    "population": 59180
  },
  {
    "id": "57.766L40.927",
    "name": "Kostroma",
    "lat": 57.76647,
    "lng": 40.92686,
    "countryCode": "RU",
    "population": 277656
  },
  {
    "id": "59.751L30.589",
    "name": "Kolpino",
    "lat": 59.75069,
    "lng": 30.58856,
    "countryCode": "RU",
    "population": 138979
  },
  {
    "id": "55.079L38.778",
    "name": "Kolomna",
    "lat": 55.07944,
    "lng": 38.77833,
    "countryCode": "RU",
    "population": 147690
  },
  {
    "id": "52.760L32.239",
    "name": "Klintsy",
    "lat": 52.76019,
    "lng": 32.23935,
    "countryCode": "RU",
    "population": 66336
  },
  {
    "id": "56.333L36.733",
    "name": "Klin",
    "lat": 56.33333,
    "lng": 36.73333,
    "countryCode": "RU",
    "population": 80778
  },
  {
    "id": "55.364L37.530",
    "name": "Klimovsk",
    "lat": 55.36352,
    "lng": 37.52984,
    "countryCode": "RU",
    "population": 55206
  },
  {
    "id": "43.847L46.714",
    "name": "Kizlyar",
    "lat": 43.84712,
    "lng": 46.71445,
    "countryCode": "RU",
    "population": 50564
  },
  {
    "id": "43.913L42.721",
    "name": "Kislovodsk",
    "lat": 43.91333,
    "lng": 42.72083,
    "countryCode": "RU",
    "population": 132771
  },
  {
    "id": "58.554L50.040",
    "name": "Kirovo-Chepetsk",
    "lat": 58.55386,
    "lng": 50.03986,
    "countryCode": "RU",
    "population": 90252
  },
  {
    "id": "58.597L49.660",
    "name": "Kirov",
    "lat": 58.59665,
    "lng": 49.66007,
    "countryCode": "RU",
    "population": 457383
  },
  {
    "id": "59.447L32.020",
    "name": "Kirishi",
    "lat": 59.44712,
    "lng": 32.02049,
    "countryCode": "RU",
    "population": 56190
  },
  {
    "id": "59.373L28.613",
    "name": "Kingisepp",
    "lat": 59.37331,
    "lng": 28.61343,
    "countryCode": "RU",
    "population": 50566
  },
  {
    "id": "57.439L42.129",
    "name": "Kineshma",
    "lat": 57.43914,
    "lng": 42.12894,
    "countryCode": "RU",
    "population": 92983
  },
  {
    "id": "56.867L37.350",
    "name": "Kimry",
    "lat": 56.86667,
    "lng": 37.35,
    "countryCode": "RU",
    "population": 52070
  },
  {
    "id": "55.784L37.471",
    "name": "Khoroshëvo-Mnevniki",
    "lat": 55.78363,
    "lng": 37.47137,
    "countryCode": "RU",
    "population": 159000
  },
  {
    "id": "55.897L37.430",
    "name": "Khimki",
    "lat": 55.89704,
    "lng": 37.42969,
    "countryCode": "RU",
    "population": 239967
  },
  {
    "id": "43.251L46.588",
    "name": "Khasavyurt",
    "lat": 43.2509,
    "lng": 46.58766,
    "countryCode": "RU",
    "population": 126829
  },
  {
    "id": "55.789L49.122",
    "name": "Kazan",
    "lat": 55.78874,
    "lng": 49.12214,
    "countryCode": "RU",
    "population": 1104738
  },
  {
    "id": "42.882L47.639",
    "name": "Kaspiysk",
    "lat": 42.88165,
    "lng": 47.63919,
    "countryCode": "RU",
    "population": 81752
  },
  {
    "id": "50.098L45.416",
    "name": "Kamyshin",
    "lat": 50.09833,
    "lng": 45.41601,
    "countryCode": "RU",
    "population": 128626
  },
  {
    "id": "48.318L40.259",
    "name": "Kamensk-Shakhtinskiy",
    "lat": 48.31779,
    "lng": 40.25948,
    "countryCode": "RU",
    "population": 75814
  },
  {
    "id": "54.529L36.275",
    "name": "Kaluga",
    "lat": 54.5293,
    "lng": 36.27542,
    "countryCode": "RU",
    "population": 338978
  },
  {
    "id": "55.914L37.826",
    "name": "Korolev",
    "lat": 55.91417,
    "lng": 37.82556,
    "countryCode": "RU",
    "population": 139798
  },
  {
    "id": "54.706L20.511",
    "name": "Kaliningrad",
    "lat": 54.70649,
    "lng": 20.51095,
    "countryCode": "RU",
    "population": 434954
  },
  {
    "id": "55.787L37.802",
    "name": "Izmaylovo",
    "lat": 55.78677,
    "lng": 37.80165,
    "countryCode": "RU",
    "population": 104000
  },
  {
    "id": "56.850L53.204",
    "name": "Izhevsk",
    "lat": 56.84976,
    "lng": 53.20448,
    "countryCode": "RU",
    "population": 631038
  },
  {
    "id": "55.971L37.921",
    "name": "Ivanteyevka",
    "lat": 55.97111,
    "lng": 37.92083,
    "countryCode": "RU",
    "population": 51085
  },
  {
    "id": "55.767L37.833",
    "name": "Ivanovskoye",
    "lat": 55.76667,
    "lng": 37.83333,
    "countryCode": "RU",
    "population": 128000
  },
  {
    "id": "56.997L40.971",
    "name": "Ivanovo",
    "lat": 56.99719,
    "lng": 40.97139,
    "countryCode": "RU",
    "population": 420839
  },
  {
    "id": "53.454L56.041",
    "name": "Ishimbay",
    "lat": 53.45446,
    "lng": 56.04149,
    "countryCode": "RU",
    "population": 70421
  },
  {
    "id": "55.611L40.652",
    "name": "Gus’-Khrustal’nyy",
    "lat": 55.61113,
    "lng": 40.65186,
    "countryCode": "RU",
    "population": 62746
  },
  {
    "id": "48.062L39.935",
    "name": "Gukovo",
    "lat": 48.06212,
    "lng": 39.9355,
    "countryCode": "RU",
    "population": 66079
  },
  {
    "id": "51.282L37.546",
    "name": "Gubkin",
    "lat": 51.28167,
    "lng": 37.54583,
    "countryCode": "RU",
    "population": 87000
  },
  {
    "id": "43.312L45.689",
    "name": "Groznyy",
    "lat": 43.31195,
    "lng": 45.68895,
    "countryCode": "RU",
    "population": 226100
  },
  {
    "id": "60.036L30.405",
    "name": "Grazhdanka",
    "lat": 60.03587,
    "lng": 30.40518,
    "countryCode": "RU",
    "population": 71128
  },
  {
    "id": "55.823L37.813",
    "name": "Gol’yanovo",
    "lat": 55.82299,
    "lng": 37.81306,
    "countryCode": "RU",
    "population": 158000
  },
  {
    "id": "58.139L52.658",
    "name": "Glazov",
    "lat": 58.1393,
    "lng": 52.658,
    "countryCode": "RU",
    "population": 100676
  },
  {
    "id": "44.152L43.470",
    "name": "Georgiyevsk",
    "lat": 44.15194,
    "lng": 43.46972,
    "countryCode": "RU",
    "population": 72649
  },
  {
    "id": "44.562L38.085",
    "name": "Gelendzhik",
    "lat": 44.5622,
    "lng": 38.0848,
    "countryCode": "RU",
    "population": 50715
  },
  {
    "id": "59.576L30.128",
    "name": "Gatchina",
    "lat": 59.57639,
    "lng": 30.12833,
    "countryCode": "RU",
    "population": 89761
  },
  {
    "id": "55.961L38.046",
    "name": "Fryazino",
    "lat": 55.96056,
    "lng": 38.04556,
    "countryCode": "RU",
    "population": 52255
  },
  {
    "id": "55.733L38.465",
    "name": "Fryazevo",
    "lat": 55.73321,
    "lng": 38.46458,
    "countryCode": "RU",
    "population": 53212
  },
  {
    "id": "55.748L37.480",
    "name": "Fili",
    "lat": 55.74819,
    "lng": 37.47969,
    "countryCode": "RU",
    "population": 80000
  },
  {
    "id": "61.813L50.728",
    "name": "Ezhva",
    "lat": 61.81281,
    "lng": 50.72834,
    "countryCode": "RU",
    "population": 56000
  },
  {
    "id": "51.484L46.105",
    "name": "Engel’s",
    "lat": 51.48389,
    "lng": 46.10528,
    "countryCode": "RU",
    "population": 196011
  },
  {
    "id": "46.308L44.256",
    "name": "Elista",
    "lat": 46.30778,
    "lng": 44.25583,
    "countryCode": "RU",
    "population": 106971
  },
  {
    "id": "55.790L38.447",
    "name": "Elektrostal’",
    "lat": 55.78959,
    "lng": 38.44671,
    "countryCode": "RU",
    "population": 144387
  },
  {
    "id": "56.241L43.455",
    "name": "Dzerzhinsk",
    "lat": 56.24143,
    "lng": 43.45539,
    "countryCode": "RU",
    "population": 233126
  },
  {
    "id": "56.733L37.167",
    "name": "Dubna",
    "lat": 56.73333,
    "lng": 37.16667,
    "countryCode": "RU",
    "population": 60604
  },
  {
    "id": "55.750L37.567",
    "name": "Dorogomilovo",
    "lat": 55.75,
    "lng": 37.56667,
    "countryCode": "RU",
    "population": 68000
  },
  {
    "id": "48.335L39.946",
    "name": "Donetsk",
    "lat": 48.33487,
    "lng": 39.9459,
    "countryCode": "RU",
    "population": 50850
  },
  {
    "id": "55.441L37.754",
    "name": "Domodedovo",
    "lat": 55.4413,
    "lng": 37.75367,
    "countryCode": "RU",
    "population": 53887
  },
  {
    "id": "55.950L37.502",
    "name": "Dolgoprudnyy",
    "lat": 55.94958,
    "lng": 37.50183,
    "countryCode": "RU",
    "population": 68259
  },
  {
    "id": "56.345L37.520",
    "name": "Dmitrov",
    "lat": 56.34485,
    "lng": 37.52041,
    "countryCode": "RU",
    "population": 61607
  },
  {
    "id": "54.214L49.618",
    "name": "Dimitrovgrad",
    "lat": 54.21386,
    "lng": 49.61838,
    "countryCode": "RU",
    "population": 132226
  },
  {
    "id": "42.068L48.290",
    "name": "Derbent",
    "lat": 42.06779,
    "lng": 48.28987,
    "countryCode": "RU",
    "population": 105965
  },
  {
    "id": "59.842L30.256",
    "name": "Dachnoye",
    "lat": 59.84167,
    "lng": 30.25583,
    "countryCode": "RU",
    "population": 72822
  },
  {
    "id": "58.301L57.813",
    "name": "Chusovoy",
    "lat": 58.3013,
    "lng": 57.8131,
    "countryCode": "RU",
    "population": 50205
  },
  {
    "id": "55.363L50.642",
    "name": "Chistopol’",
    "lat": 55.36311,
    "lng": 50.64244,
    "countryCode": "RU",
    "population": 62200
  },
  {
    "id": "44.223L42.058",
    "name": "Cherkessk",
    "lat": 44.22333,
    "lng": 42.05778,
    "countryCode": "RU",
    "population": 116224
  },
  {
    "id": "59.133L37.900",
    "name": "Cherepovets",
    "lat": 59.13333,
    "lng": 37.9,
    "countryCode": "RU",
    "population": 315738
  },
  {
    "id": "55.665L37.561",
    "name": "Cherëmushki",
    "lat": 55.66473,
    "lng": 37.56135,
    "countryCode": "RU",
    "population": 106587
  },
  {
    "id": "55.148L37.477",
    "name": "Chekhov",
    "lat": 55.1477,
    "lng": 37.47728,
    "countryCode": "RU",
    "population": 75643
  },
  {
    "id": "56.132L47.252",
    "name": "Cheboksary",
    "lat": 56.13222,
    "lng": 47.25194,
    "countryCode": "RU",
    "population": 446781
  },
  {
    "id": "56.769L54.115",
    "name": "Chaykovskiy",
    "lat": 56.76864,
    "lng": 54.11484,
    "countryCode": "RU",
    "population": 86712
  },
  {
    "id": "52.977L49.709",
    "name": "Chapayevsk",
    "lat": 52.9771,
    "lng": 49.7086,
    "countryCode": "RU",
    "population": 70147
  },
  {
    "id": "52.781L52.264",
    "name": "Buzuluk",
    "lat": 52.7807,
    "lng": 52.2635,
    "countryCode": "RU",
    "population": 87714
  },
  {
    "id": "42.819L47.119",
    "name": "Buynaksk",
    "lat": 42.819,
    "lng": 47.1192,
    "countryCode": "RU",
    "population": 62689
  },
  {
    "id": "53.655L52.442",
    "name": "Buguruslan",
    "lat": 53.6554,
    "lng": 52.442,
    "countryCode": "RU",
    "population": 53511
  },
  {
    "id": "54.538L52.798",
    "name": "Bugul’ma",
    "lat": 54.5378,
    "lng": 52.7985,
    "countryCode": "RU",
    "population": 91900
  },
  {
    "id": "44.784L44.166",
    "name": "Budënnovsk",
    "lat": 44.78389,
    "lng": 44.16583,
    "countryCode": "RU",
    "population": 67962
  },
  {
    "id": "53.252L34.372",
    "name": "Bryansk",
    "lat": 53.25209,
    "lng": 34.37167,
    "countryCode": "RU",
    "population": 427236
  },
  {
    "id": "55.638L37.764",
    "name": "Brateyevo",
    "lat": 55.63755,
    "lng": 37.76438,
    "countryCode": "RU",
    "population": 102000
  },
  {
    "id": "58.388L33.915",
    "name": "Borovichi",
    "lat": 58.38778,
    "lng": 33.91546,
    "countryCode": "RU",
    "population": 56571
  },
  {
    "id": "51.367L42.085",
    "name": "Borisoglebsk",
    "lat": 51.36713,
    "lng": 42.08494,
    "countryCode": "RU",
    "population": 68597
  },
  {
    "id": "56.358L44.075",
    "name": "Bor",
    "lat": 56.35808,
    "lng": 44.07477,
    "countryCode": "RU",
    "population": 60647
  },
  {
    "id": "55.814L37.716",
    "name": "Bogorodskoye",
    "lat": 55.81353,
    "lng": 37.71617,
    "countryCode": "RU",
    "population": 103000
  },
  {
    "id": "55.586L37.678",
    "name": "Biryulëvo",
    "lat": 55.58635,
    "lng": 37.67781,
    "countryCode": "RU",
    "population": 144000
  },
  {
    "id": "55.883L37.600",
    "name": "Bibirevo",
    "lat": 55.88333,
    "lng": 37.6,
    "countryCode": "RU",
    "population": 159000
  },
  {
    "id": "59.409L56.820",
    "name": "Berezniki",
    "lat": 59.4091,
    "lng": 56.8204,
    "countryCode": "RU",
    "population": 167748
  },
  {
    "id": "53.963L58.398",
    "name": "Beloretsk",
    "lat": 53.96306,
    "lng": 58.39806,
    "countryCode": "RU",
    "population": 70468
  },
  {
    "id": "44.771L39.879",
    "name": "Belorechensk",
    "lat": 44.77127,
    "lng": 39.87879,
    "countryCode": "RU",
    "population": 54526
  },
  {
    "id": "50.611L36.580",
    "name": "Belgorod",
    "lat": 50.61074,
    "lng": 36.58015,
    "countryCode": "RU",
    "population": 345289
  },
  {
    "id": "54.117L54.117",
    "name": "Belebey",
    "lat": 54.11667,
    "lng": 54.11667,
    "countryCode": "RU",
    "population": 62582
  },
  {
    "id": "47.140L39.752",
    "name": "Bataysk",
    "lat": 47.13975,
    "lng": 39.75181,
    "countryCode": "RU",
    "population": 109962
  },
  {
    "id": "51.550L43.167",
    "name": "Balashov",
    "lat": 51.5502,
    "lng": 43.1667,
    "countryCode": "RU",
    "population": 98107
  },
  {
    "id": "55.809L37.958",
    "name": "Balashikha",
    "lat": 55.80945,
    "lng": 37.95806,
    "countryCode": "RU",
    "population": 150103
  },
  {
    "id": "52.028L47.801",
    "name": "Balakovo",
    "lat": 52.02782,
    "lng": 47.8007,
    "countryCode": "RU",
    "population": 199572
  },
  {
    "id": "56.490L43.601",
    "name": "Novaya Balakhna",
    "lat": 56.48989,
    "lng": 43.60114,
    "countryCode": "RU",
    "population": 63083
  },
  {
    "id": "55.869L37.730",
    "name": "Babushkin",
    "lat": 55.86931,
    "lng": 37.72966,
    "countryCode": "RU",
    "population": 86000
  },
  {
    "id": "47.108L39.416",
    "name": "Azov",
    "lat": 47.10779,
    "lng": 39.41648,
    "countryCode": "RU",
    "population": 82133
  },
  {
    "id": "46.350L48.041",
    "name": "Astrakhan",
    "lat": 46.34968,
    "lng": 48.04076,
    "countryCode": "RU",
    "population": 502533
  },
  {
    "id": "55.395L43.840",
    "name": "Arzamas",
    "lat": 55.39485,
    "lng": 43.83992,
    "countryCode": "RU",
    "population": 109479
  },
  {
    "id": "44.989L41.123",
    "name": "Armavir",
    "lat": 44.9892,
    "lng": 41.1234,
    "countryCode": "RU",
    "population": 199548
  },
  {
    "id": "64.540L40.543",
    "name": "Arkhangel’sk",
    "lat": 64.5401,
    "lng": 40.5433,
    "countryCode": "RU",
    "population": 356051
  },
  {
    "id": "67.564L33.403",
    "name": "Apatity",
    "lat": 67.56414,
    "lng": 33.4031,
    "countryCode": "RU",
    "population": 61186
  },
  {
    "id": "44.891L37.324",
    "name": "Anapa",
    "lat": 44.89084,
    "lng": 37.3239,
    "countryCode": "RU",
    "population": 53600
  },
  {
    "id": "54.904L52.315",
    "name": "Al’met’yevsk",
    "lat": 54.90442,
    "lng": 52.3154,
    "countryCode": "RU",
    "population": 140437
  },
  {
    "id": "54.505L37.067",
    "name": "Aleksin",
    "lat": 54.50503,
    "lng": 37.0674,
    "countryCode": "RU",
    "population": 66885
  },
  {
    "id": "55.630L37.800",
    "name": "Alekseyevka",
    "lat": 55.63,
    "lng": 37.8,
    "countryCode": "RU",
    "population": 78000
  },
  {
    "id": "56.395L38.712",
    "name": "Aleksandrov",
    "lat": 56.39516,
    "lng": 38.71216,
    "countryCode": "RU",
    "population": 64088
  },
  {
    "id": "55.850L37.483",
    "name": "Levoberezhnyy",
    "lat": 55.85,
    "lng": 37.48333,
    "countryCode": "RU",
    "population": 52000
  },
  {
    "id": "43.429L39.924",
    "name": "Adler",
    "lat": 43.42896,
    "lng": 39.92391,
    "countryCode": "RU",
    "population": 70200
  },
  {
    "id": "55.969L43.091",
    "name": "Pavlovo",
    "lat": 55.9686,
    "lng": 43.0912,
    "countryCode": "RU",
    "population": 63338
  },
  {
    "id": "53.133L46.583",
    "name": "Zarechnyy",
    "lat": 53.13333,
    "lng": 46.58333,
    "countryCode": "RU",
    "population": 62139
  },
  {
    "id": "53.707L84.949",
    "name": "Zarinsk",
    "lat": 53.7074,
    "lng": 84.9493,
    "countryCode": "RU",
    "population": 52209
  },
  {
    "id": "55.723L84.886",
    "name": "Yurga",
    "lat": 55.72306,
    "lng": 84.88611,
    "countryCode": "RU",
    "population": 84220
  },
  {
    "id": "56.852L60.612",
    "name": "Yekaterinburg",
    "lat": 56.8519,
    "lng": 60.6122,
    "countryCode": "RU",
    "population": 1349772
  },
  {
    "id": "67.499L64.053",
    "name": "Vorkuta",
    "lat": 67.49884,
    "lng": 64.05253,
    "countryCode": "RU",
    "population": 80039
  },
  {
    "id": "56.970L60.582",
    "name": "Verkhnyaya Pyshma",
    "lat": 56.97047,
    "lng": 60.58219,
    "countryCode": "RU",
    "population": 59061
  },
  {
    "id": "56.112L94.599",
    "name": "Zelenogorsk",
    "lat": 56.1124,
    "lng": 94.5985,
    "countryCode": "RU",
    "population": 71354
  },
  {
    "id": "57.152L65.527",
    "name": "Tyumen",
    "lat": 57.15222,
    "lng": 65.52722,
    "countryCode": "RU",
    "population": 519119
  },
  {
    "id": "54.098L61.577",
    "name": "Troitsk",
    "lat": 54.0979,
    "lng": 61.5773,
    "countryCode": "RU",
    "population": 82338
  },
  {
    "id": "56.498L84.974",
    "name": "Tomsk",
    "lat": 56.49771,
    "lng": 84.97437,
    "countryCode": "RU",
    "population": 485519
  },
  {
    "id": "58.198L68.255",
    "name": "Tobol’sk",
    "lat": 58.19807,
    "lng": 68.25457,
    "countryCode": "RU",
    "population": 113800
  },
  {
    "id": "69.487L88.397",
    "name": "Talnakh",
    "lat": 69.4865,
    "lng": 88.3972,
    "countryCode": "RU",
    "population": 59051
  },
  {
    "id": "61.250L73.417",
    "name": "Surgut",
    "lat": 61.25,
    "lng": 73.41667,
    "countryCode": "RU",
    "population": 300367
  },
  {
    "id": "56.085L63.633",
    "name": "Shadrinsk",
    "lat": 56.0852,
    "lng": 63.6335,
    "countryCode": "RU",
    "population": 79479
  },
  {
    "id": "59.603L60.579",
    "name": "Serov",
    "lat": 59.60334,
    "lng": 60.5787,
    "countryCode": "RU",
    "population": 98438
  },
  {
    "id": "51.515L81.206",
    "name": "Rubtsovsk",
    "lat": 51.51473,
    "lng": 81.20613,
    "countryCode": "RU",
    "population": 161065
  },
  {
    "id": "53.906L86.719",
    "name": "Prokop’yevsk",
    "lat": 53.9059,
    "lng": 86.719,
    "countryCode": "RU",
    "population": 219000
  },
  {
    "id": "56.442L60.188",
    "name": "Polevskoy",
    "lat": 56.44222,
    "lng": 60.18778,
    "countryCode": "RU",
    "population": 65770
  },
  {
    "id": "54.992L73.369",
    "name": "Omsk",
    "lat": 54.99244,
    "lng": 73.36859,
    "countryCode": "RU",
    "population": 1129281
  },
  {
    "id": "62.141L65.394",
    "name": "Nyagan",
    "lat": 62.14056,
    "lng": 65.39361,
    "countryCode": "RU",
    "population": 52137
  },
  {
    "id": "63.193L75.437",
    "name": "Noyabrsk",
    "lat": 63.19309,
    "lng": 75.43728,
    "countryCode": "RU",
    "population": 110000
  },
  {
    "id": "66.083L76.633",
    "name": "Novyy Urengoy",
    "lat": 66.08333,
    "lng": 76.63333,
    "countryCode": "RU",
    "population": 94212
  },
  {
    "id": "55.041L82.935",
    "name": "Novosibirsk",
    "lat": 55.0415,
    "lng": 82.9346,
    "countryCode": "RU",
    "population": 1419007
  },
  {
    "id": "53.756L87.110",
    "name": "Novokuznetsk",
    "lat": 53.7557,
    "lng": 87.1099,
    "countryCode": "RU",
    "population": 539616
  },
  {
    "id": "53.392L83.936",
    "name": "Novoaltaysk",
    "lat": 53.3917,
    "lng": 83.9363,
    "countryCode": "RU",
    "population": 61050
  },
  {
    "id": "69.353L88.203",
    "name": "Norilsk",
    "lat": 69.3535,
    "lng": 88.2027,
    "countryCode": "RU",
    "population": 140800
  },
  {
    "id": "60.934L76.553",
    "name": "Nizhnevartovsk",
    "lat": 60.9344,
    "lng": 76.5531,
    "countryCode": "RU",
    "population": 244937
  },
  {
    "id": "61.100L72.603",
    "name": "Nefteyugansk",
    "lat": 61.09979,
    "lng": 72.60349,
    "countryCode": "RU",
    "population": 112632
  },
  {
    "id": "56.010L90.401",
    "name": "Nazarovo",
    "lat": 56.0104,
    "lng": 90.4011,
    "countryCode": "RU",
    "population": 55252
  },
  {
    "id": "53.710L91.688",
    "name": "Minusinsk",
    "lat": 53.71028,
    "lng": 91.6875,
    "countryCode": "RU",
    "population": 72781
  },
  {
    "id": "55.045L60.108",
    "name": "Miass",
    "lat": 55.045,
    "lng": 60.10833,
    "countryCode": "RU",
    "population": 167500
  },
  {
    "id": "53.694L88.060",
    "name": "Mezhdurechensk",
    "lat": 53.69417,
    "lng": 88.06028,
    "countryCode": "RU",
    "population": 101026
  },
  {
    "id": "58.236L92.483",
    "name": "Lesosibirsk",
    "lat": 58.23583,
    "lng": 92.48278,
    "countryCode": "RU",
    "population": 65945
  },
  {
    "id": "54.657L86.174",
    "name": "Leninsk-Kuznetsky",
    "lat": 54.6567,
    "lng": 86.1737,
    "countryCode": "RU",
    "population": 109023
  },
  {
    "id": "51.715L94.453",
    "name": "Kyzyl",
    "lat": 51.71472,
    "lng": 94.45338,
    "countryCode": "RU",
    "population": 108240
  },
  {
    "id": "55.450L65.333",
    "name": "Kurgan",
    "lat": 55.45,
    "lng": 65.33333,
    "countryCode": "RU",
    "population": 343129
  },
  {
    "id": "56.018L92.867",
    "name": "Krasnoyarsk",
    "lat": 56.01839,
    "lng": 92.86717,
    "countryCode": "RU",
    "population": 927200
  },
  {
    "id": "59.767L60.209",
    "name": "Krasnotur’insk",
    "lat": 59.7666,
    "lng": 60.2086,
    "countryCode": "RU",
    "population": 62600
  },
  {
    "id": "55.117L61.628",
    "name": "Kopeysk",
    "lat": 55.11722,
    "lng": 61.62823,
    "countryCode": "RU",
    "population": 70780
  },
  {
    "id": "53.990L86.662",
    "name": "Kiselëvsk",
    "lat": 53.99,
    "lng": 86.6621,
    "countryCode": "RU",
    "population": 104000
  },
  {
    "id": "61.004L69.002",
    "name": "Khanty-Mansiysk",
    "lat": 61.00417,
    "lng": 69.00194,
    "countryCode": "RU",
    "population": 67800
  },
  {
    "id": "55.333L86.083",
    "name": "Kemerovo",
    "lat": 55.33333,
    "lng": 86.08333,
    "countryCode": "RU",
    "population": 477090
  },
  {
    "id": "56.202L95.718",
    "name": "Kansk",
    "lat": 56.20167,
    "lng": 95.7175,
    "countryCode": "RU",
    "population": 101502
  },
  {
    "id": "56.419L61.933",
    "name": "Kamensk-Ural’skiy",
    "lat": 56.4185,
    "lng": 61.9329,
    "countryCode": "RU",
    "population": 182500
  },
  {
    "id": "54.637L83.305",
    "name": "Iskitim",
    "lat": 54.6366,
    "lng": 83.3045,
    "countryCode": "RU",
    "population": 61827
  },
  {
    "id": "56.113L69.490",
    "name": "Ishim",
    "lat": 56.11281,
    "lng": 69.49015,
    "countryCode": "RU",
    "population": 67762
  },
  {
    "id": "51.961L85.919",
    "name": "Gorno-Altaysk",
    "lat": 51.96056,
    "lng": 85.91892,
    "countryCode": "RU",
    "population": 54917
  },
  {
    "id": "53.824L91.284",
    "name": "Chernogorsk",
    "lat": 53.82361,
    "lng": 91.28417,
    "countryCode": "RU",
    "population": 71582
  },
  {
    "id": "55.154L61.429",
    "name": "Chelyabinsk",
    "lat": 55.15402,
    "lng": 61.42915,
    "countryCode": "RU",
    "population": 1062919
  },
  {
    "id": "52.536L85.207",
    "name": "Biysk",
    "lat": 52.53639,
    "lng": 85.20722,
    "countryCode": "RU",
    "population": 215430
  },
  {
    "id": "55.600L86.200",
    "name": "Berëzovskiy",
    "lat": 55.6,
    "lng": 86.2,
    "countryCode": "RU",
    "population": 55000
  },
  {
    "id": "54.755L83.097",
    "name": "Berdsk",
    "lat": 54.7551,
    "lng": 83.0967,
    "countryCode": "RU",
    "population": 90250
  },
  {
    "id": "54.416L86.298",
    "name": "Belovo",
    "lat": 54.4165,
    "lng": 86.2976,
    "countryCode": "RU",
    "population": 75764
  },
  {
    "id": "53.361L83.764",
    "name": "Barnaul",
    "lat": 53.36056,
    "lng": 83.76361,
    "countryCode": "RU",
    "population": 599579
  },
  {
    "id": "57.010L61.458",
    "name": "Asbest",
    "lat": 57.00993,
    "lng": 61.45776,
    "countryCode": "RU",
    "population": 74583
  },
  {
    "id": "56.081L86.028",
    "name": "Anzhero-Sudzhensk",
    "lat": 56.081,
    "lng": 86.0285,
    "countryCode": "RU",
    "population": 82526
  },
  {
    "id": "56.269L90.499",
    "name": "Achinsk",
    "lat": 56.2694,
    "lng": 90.4993,
    "countryCode": "RU",
    "population": 117634
  },
  {
    "id": "53.716L91.429",
    "name": "Abakan",
    "lat": 53.71556,
    "lng": 91.42917,
    "countryCode": "RU",
    "population": 167289
  },
  {
    "id": "56.085L60.731",
    "name": "Snezhinsk",
    "lat": 56.085,
    "lng": 60.73139,
    "countryCode": "RU",
    "population": 50086
  },
  {
    "id": "55.756L60.703",
    "name": "Ozersk",
    "lat": 55.75556,
    "lng": 60.70278,
    "countryCode": "RU",
    "population": 81023
  },
  {
    "id": "56.251L93.532",
    "name": "Zheleznogorsk",
    "lat": 56.25111,
    "lng": 93.53194,
    "countryCode": "RU",
    "population": 93834
  },
  {
    "id": "57.244L60.084",
    "name": "Novoural’sk",
    "lat": 57.24389,
    "lng": 60.08389,
    "countryCode": "RU",
    "population": 93849
  },
  {
    "id": "56.601L84.886",
    "name": "Seversk",
    "lat": 56.60056,
    "lng": 84.88639,
    "countryCode": "RU",
    "population": 109844
  },
  {
    "id": "62.034L129.733",
    "name": "Yakutsk",
    "lat": 62.03389,
    "lng": 129.73306,
    "countryCode": "RU",
    "population": 235600
  },
  {
    "id": "43.106L131.874",
    "name": "Vladivostok",
    "lat": 43.10562,
    "lng": 131.87353,
    "countryCode": "RU",
    "population": 587022
  },
  {
    "id": "58.001L102.662",
    "name": "Ust’-Ilimsk",
    "lat": 58.00056,
    "lng": 102.66194,
    "countryCode": "RU",
    "population": 100271
  },
  {
    "id": "43.803L131.946",
    "name": "Ussuriysk",
    "lat": 43.80291,
    "lng": 131.94578,
    "countryCode": "RU",
    "population": 157068
  },
  {
    "id": "52.752L103.645",
    "name": "Usol’ye-Sibirskoye",
    "lat": 52.75194,
    "lng": 103.64528,
    "countryCode": "RU",
    "population": 85900
  },
  {
    "id": "51.827L107.606",
    "name": "Ulan-Ude",
    "lat": 51.82721,
    "lng": 107.60627,
    "countryCode": "RU",
    "population": 360278
  },
  {
    "id": "54.564L100.581",
    "name": "Tulun",
    "lat": 54.56358,
    "lng": 100.58143,
    "countryCode": "RU",
    "population": 51330
  },
  {
    "id": "51.375L128.141",
    "name": "Svobodnyy",
    "lat": 51.37525,
    "lng": 128.14097,
    "countryCode": "RU",
    "population": 61017
  },
  {
    "id": "56.666L124.638",
    "name": "Neryungri",
    "lat": 56.66637,
    "lng": 124.63825,
    "countryCode": "RU",
    "population": 66320
  },
  {
    "id": "42.814L132.873",
    "name": "Nakhodka",
    "lat": 42.81384,
    "lng": 132.87348,
    "countryCode": "RU",
    "population": 146920
  },
  {
    "id": "50.098L118.037",
    "name": "Krasnokamensk",
    "lat": 50.0979,
    "lng": 118.0369,
    "countryCode": "RU",
    "population": 54316
  },
  {
    "id": "50.550L137.010",
    "name": "Komsomolsk-on-Amur",
    "lat": 50.55034,
    "lng": 137.00995,
    "countryCode": "RU",
    "population": 275908
  },
  {
    "id": "48.483L135.084",
    "name": "Khabarovsk",
    "lat": 48.48271,
    "lng": 135.08379,
    "countryCode": "RU",
    "population": 579000
  },
  {
    "id": "52.298L104.296",
    "name": "Irkutsk",
    "lat": 52.29778,
    "lng": 104.29639,
    "countryCode": "RU",
    "population": 586695
  },
  {
    "id": "52.032L113.501",
    "name": "Chita",
    "lat": 52.03171,
    "lng": 113.50087,
    "countryCode": "RU",
    "population": 308500
  },
  {
    "id": "53.156L103.067",
    "name": "Cheremkhovo",
    "lat": 53.15611,
    "lng": 103.0675,
    "countryCode": "RU",
    "population": 57395
  },
  {
    "id": "50.280L127.540",
    "name": "Blagoveshchensk",
    "lat": 50.27961,
    "lng": 127.5405,
    "countryCode": "RU",
    "population": 221296
  },
  {
    "id": "48.793L132.924",
    "name": "Birobidzhan",
    "lat": 48.79284,
    "lng": 132.92386,
    "countryCode": "RU",
    "population": 76146
  },
  {
    "id": "50.916L128.477",
    "name": "Belogorsk",
    "lat": 50.91644,
    "lng": 128.47726,
    "countryCode": "RU",
    "population": 67911
  },
  {
    "id": "43.359L132.189",
    "name": "Artëm",
    "lat": 43.3595,
    "lng": 132.18887,
    "countryCode": "RU",
    "population": 102300
  },
  {
    "id": "44.153L133.278",
    "name": "Arsen’yev",
    "lat": 44.15254,
    "lng": 133.27791,
    "countryCode": "RU",
    "population": 58700
  },
  {
    "id": "52.537L103.886",
    "name": "Angarsk",
    "lat": 52.53667,
    "lng": 103.88639,
    "countryCode": "RU",
    "population": 243158
  },
  {
    "id": "56.133L101.614",
    "name": "Bratsk",
    "lat": 56.1325,
    "lng": 101.61417,
    "countryCode": "RU",
    "population": 256600
  },
  {
    "id": "48.438L135.133",
    "name": "Khabarovsk Vtoroy",
    "lat": 48.43776,
    "lng": 135.13329,
    "countryCode": "RU",
    "population": 578303
  },
  {
    "id": "46.954L142.736",
    "name": "Yuzhno-Sakhalinsk",
    "lat": 46.95407,
    "lng": 142.73603,
    "countryCode": "RU",
    "population": 176484
  },
  {
    "id": "53.044L158.651",
    "name": "Petropavlovsk-Kamchatsky",
    "lat": 53.04444,
    "lng": 158.65076,
    "countryCode": "RU",
    "population": 187282
  },
  {
    "id": "59.564L150.803",
    "name": "Magadan",
    "lat": 59.5638,
    "lng": 150.80347,
    "countryCode": "RU",
    "population": 95282
  },
  {
    "id": "55.591L37.595",
    "name": "Chertanovo Yuzhnoye",
    "lat": 55.59072,
    "lng": 37.59519,
    "countryCode": "RU",
    "population": 142000
  },
  {
    "id": "55.613L37.726",
    "name": "Orekhovo-Borisovo",
    "lat": 55.61252,
    "lng": 37.72639,
    "countryCode": "RU",
    "population": 144000
  },
  {
    "id": "62.265L74.479",
    "name": "Kogalym",
    "lat": 62.26537,
    "lng": 74.47906,
    "countryCode": "RU",
    "population": 57800
  },
  {
    "id": "57.620L63.078",
    "name": "Lesnoy",
    "lat": 57.6198,
    "lng": 63.0784,
    "countryCode": "RU",
    "population": 55100
  },
  {
    "id": "60.166L29.908",
    "name": "Kurortnyy",
    "lat": 60.16562,
    "lng": 29.908,
    "countryCode": "RU",
    "population": 70589
  },
  {
    "id": "59.986L30.303",
    "name": "Chernaya Rechka",
    "lat": 59.98594,
    "lng": 30.30338,
    "countryCode": "RU",
    "population": 56429
  },
  {
    "id": "59.966L30.312",
    "name": "Petrogradka",
    "lat": 59.96567,
    "lng": 30.31154,
    "countryCode": "RU",
    "population": 130455
  },
  {
    "id": "59.941L30.254",
    "name": "Vasyl'evsky Ostrov",
    "lat": 59.94091,
    "lng": 30.25377,
    "countryCode": "RU",
    "population": 203058
  },
  {
    "id": "60.070L30.349",
    "name": "Parnas",
    "lat": 60.06964,
    "lng": 30.3487,
    "countryCode": "RU",
    "population": 66693
  },
  {
    "id": "59.997L30.390",
    "name": "Kalininskiy",
    "lat": 59.99675,
    "lng": 30.3899,
    "countryCode": "RU",
    "population": 504641
  },
  {
    "id": "59.973L30.476",
    "name": "Krasnogvargeisky",
    "lat": 59.97305,
    "lng": 30.47607,
    "countryCode": "RU",
    "population": 337091
  },
  {
    "id": "59.908L30.285",
    "name": "Admiralteisky",
    "lat": 59.90839,
    "lng": 30.28484,
    "countryCode": "RU",
    "population": 157897
  },
  {
    "id": "60.014L30.395",
    "name": "Akademicheskoe",
    "lat": 60.01375,
    "lng": 30.39471,
    "countryCode": "RU",
    "population": 103304
  },
  {
    "id": "59.968L30.364",
    "name": "Finlyandskiy",
    "lat": 59.96824,
    "lng": 30.36415,
    "countryCode": "RU",
    "population": 72292
  },
  {
    "id": "59.931L30.361",
    "name": "Centralniy",
    "lat": 59.93111,
    "lng": 30.36072,
    "countryCode": "RU",
    "population": 214625
  },
  {
    "id": "60.003L30.331",
    "name": "Svetlanovskiy",
    "lat": 60.00276,
    "lng": 30.33051,
    "countryCode": "RU",
    "population": 85508
  },
  {
    "id": "55.880L37.558",
    "name": "Vostochnoe Degunino",
    "lat": 55.8801,
    "lng": 37.55758,
    "countryCode": "RU",
    "population": 95000
  },
  {
    "id": "63.828L20.260",
    "name": "Umeå",
    "lat": 63.82842,
    "lng": 20.25972,
    "countryCode": "SE",
    "population": 83249
  },
  {
    "id": "56.878L14.809",
    "name": "Växjö",
    "lat": 56.87767,
    "lng": 14.80906,
    "countryCode": "SE",
    "population": 65383
  },
  {
    "id": "59.616L16.553",
    "name": "Västerås",
    "lat": 59.61617,
    "lng": 16.55276,
    "countryCode": "SE",
    "population": 117746
  },
  {
    "id": "59.346L18.050",
    "name": "Vasastan",
    "lat": 59.34571,
    "lng": 18.04985,
    "countryCode": "SE",
    "population": 58458
  },
  {
    "id": "59.859L17.639",
    "name": "Uppsala",
    "lat": 59.85882,
    "lng": 17.63889,
    "countryCode": "SE",
    "population": 149245
  },
  {
    "id": "59.444L18.069",
    "name": "Täby",
    "lat": 59.4439,
    "lng": 18.06872,
    "countryCode": "SE",
    "population": 58123
  },
  {
    "id": "62.391L17.306",
    "name": "Sundsvall",
    "lat": 62.39129,
    "lng": 17.3063,
    "countryCode": "SE",
    "population": 57606
  },
  {
    "id": "59.333L18.065",
    "name": "Stockholm",
    "lat": 59.33258,
    "lng": 18.0649,
    "countryCode": "SE",
    "population": 1515017
  },
  {
    "id": "59.360L18.001",
    "name": "Solna",
    "lat": 59.36004,
    "lng": 18.00086,
    "countryCode": "SE",
    "population": 66909
  },
  {
    "id": "59.428L17.951",
    "name": "Sollentuna",
    "lat": 59.42804,
    "lng": 17.95093,
    "countryCode": "SE",
    "population": 139606
  },
  {
    "id": "59.196L17.625",
    "name": "Södertälje",
    "lat": 59.19554,
    "lng": 17.62525,
    "countryCode": "SE",
    "population": 70777
  },
  {
    "id": "59.313L18.076",
    "name": "Södermalm",
    "lat": 59.31278,
    "lng": 18.07577,
    "countryCode": "SE",
    "population": 127323
  },
  {
    "id": "59.274L15.207",
    "name": "Örebro",
    "lat": 59.27412,
    "lng": 15.2066,
    "countryCode": "SE",
    "population": 115765
  },
  {
    "id": "58.594L16.183",
    "name": "Norrköping",
    "lat": 58.59419,
    "lng": 16.1826,
    "countryCode": "SE",
    "population": 93765
  },
  {
    "id": "57.655L12.014",
    "name": "Mölndal",
    "lat": 57.6554,
    "lng": 12.01378,
    "countryCode": "SE",
    "population": 59430
  },
  {
    "id": "55.606L13.001",
    "name": "Malmö",
    "lat": 55.60587,
    "lng": 13.00073,
    "countryCode": "SE",
    "population": 301706
  },
  {
    "id": "55.706L13.193",
    "name": "Lund",
    "lat": 55.70584,
    "lng": 13.19321,
    "countryCode": "SE",
    "population": 87244
  },
  {
    "id": "58.411L15.622",
    "name": "Linköping",
    "lat": 58.41086,
    "lng": 15.62157,
    "countryCode": "SE",
    "population": 106502
  },
  {
    "id": "59.332L18.041",
    "name": "Kungsholmen",
    "lat": 59.33183,
    "lng": 18.04118,
    "countryCode": "SE",
    "population": 69363
  },
  {
    "id": "59.379L13.504",
    "name": "Karlstad",
    "lat": 59.3793,
    "lng": 13.50357,
    "countryCode": "SE",
    "population": 61492
  },
  {
    "id": "57.781L14.156",
    "name": "Jönköping",
    "lat": 57.78145,
    "lng": 14.15618,
    "countryCode": "SE",
    "population": 93797
  },
  {
    "id": "59.237L17.982",
    "name": "Huddinge",
    "lat": 59.23705,
    "lng": 17.98192,
    "countryCode": "SE",
    "population": 90182
  },
  {
    "id": "56.047L12.694",
    "name": "Helsingborg",
    "lat": 56.04673,
    "lng": 12.69437,
    "countryCode": "SE",
    "population": 104250
  },
  {
    "id": "59.168L18.145",
    "name": "Haninge",
    "lat": 59.16775,
    "lng": 18.14478,
    "countryCode": "SE",
    "population": 74968
  },
  {
    "id": "56.674L12.857",
    "name": "Halmstad",
    "lat": 56.67446,
    "lng": 12.85676,
    "countryCode": "SE",
    "population": 66124
  },
  {
    "id": "57.707L11.967",
    "name": "Göteborg",
    "lat": 57.70716,
    "lng": 11.96679,
    "countryCode": "SE",
    "population": 572799
  },
  {
    "id": "60.675L17.142",
    "name": "Gävle",
    "lat": 60.67452,
    "lng": 17.14174,
    "countryCode": "SE",
    "population": 74884
  },
  {
    "id": "59.367L16.508",
    "name": "Eskilstuna",
    "lat": 59.36661,
    "lng": 16.5077,
    "countryCode": "SE",
    "population": 67359
  },
  {
    "id": "59.340L17.940",
    "name": "Bromma",
    "lat": 59.34,
    "lng": 17.94,
    "countryCode": "SE",
    "population": 61000
  },
  {
    "id": "57.721L12.940",
    "name": "Borås",
    "lat": 57.72101,
    "lng": 12.9401,
    "countryCode": "SE",
    "population": 71700
  },
  {
    "id": "46.555L15.647",
    "name": "Maribor",
    "lat": 46.55472,
    "lng": 15.64667,
    "countryCode": "SI",
    "population": 95171
  },
  {
    "id": "46.051L14.505",
    "name": "Ljubljana",
    "lat": 46.05108,
    "lng": 14.50513,
    "countryCode": "SI",
    "population": 272220
  },
  {
    "id": "48.998L21.234",
    "name": "Prešov",
    "lat": 48.99839,
    "lng": 21.23393,
    "countryCode": "SK",
    "population": 94718
  },
  {
    "id": "49.061L20.298",
    "name": "Poprad",
    "lat": 49.06144,
    "lng": 20.29798,
    "countryCode": "SK",
    "population": 57431
  },
  {
    "id": "48.714L21.258",
    "name": "Košice",
    "lat": 48.71395,
    "lng": 21.25808,
    "countryCode": "SK",
    "population": 236563
  },
  {
    "id": "49.223L18.739",
    "name": "Žilina",
    "lat": 49.22315,
    "lng": 18.73941,
    "countryCode": "SK",
    "population": 85985
  },
  {
    "id": "48.377L17.587",
    "name": "Trnava",
    "lat": 48.37741,
    "lng": 17.58723,
    "countryCode": "SK",
    "population": 69785
  },
  {
    "id": "48.895L18.044",
    "name": "Trenčín",
    "lat": 48.89452,
    "lng": 18.04436,
    "countryCode": "SK",
    "population": 58278
  },
  {
    "id": "48.774L18.628",
    "name": "Prievidza",
    "lat": 48.77446,
    "lng": 18.6275,
    "countryCode": "SK",
    "population": 52987
  },
  {
    "id": "48.308L18.085",
    "name": "Nitra",
    "lat": 48.30763,
    "lng": 18.08453,
    "countryCode": "SK",
    "population": 86329
  },
  {
    "id": "49.067L18.924",
    "name": "Martin",
    "lat": 49.06651,
    "lng": 18.92399,
    "countryCode": "SK",
    "population": 60817
  },
  {
    "id": "48.148L17.107",
    "name": "Bratislava",
    "lat": 48.14816,
    "lng": 17.10674,
    "countryCode": "SK",
    "population": 423737
  },
  {
    "id": "48.739L19.153",
    "name": "Banská Bystrica",
    "lat": 48.73946,
    "lng": 19.15349,
    "countryCode": "SK",
    "population": 82336
  },
  {
    "id": "33.521L-86.802",
    "name": "Birmingham",
    "lat": 33.52066,
    "lng": -86.80249,
    "countryCode": "US",
    "population": 212461
  },
  {
    "id": "34.606L-86.983",
    "name": "Decatur",
    "lat": 34.60593,
    "lng": -86.98334,
    "countryCode": "US",
    "population": 55437
  },
  {
    "id": "31.223L-85.390",
    "name": "Dothan",
    "lat": 31.22323,
    "lng": -85.39049,
    "countryCode": "US",
    "population": 68567
  },
  {
    "id": "33.405L-86.811",
    "name": "Hoover",
    "lat": 33.40539,
    "lng": -86.81138,
    "countryCode": "US",
    "population": 84848
  },
  {
    "id": "34.730L-86.586",
    "name": "Huntsville",
    "lat": 34.7304,
    "lng": -86.58594,
    "countryCode": "US",
    "population": 190582
  },
  {
    "id": "30.694L-88.043",
    "name": "Mobile",
    "lat": 30.69436,
    "lng": -88.04305,
    "countryCode": "US",
    "population": 194288
  },
  {
    "id": "32.367L-86.300",
    "name": "Montgomery",
    "lat": 32.36681,
    "lng": -86.29997,
    "countryCode": "US",
    "population": 200602
  },
  {
    "id": "33.210L-87.569",
    "name": "Tuscaloosa",
    "lat": 33.20984,
    "lng": -87.56917,
    "countryCode": "US",
    "population": 98332
  },
  {
    "id": "35.089L-92.442",
    "name": "Conway",
    "lat": 35.0887,
    "lng": -92.4421,
    "countryCode": "US",
    "population": 64980
  },
  {
    "id": "36.063L-94.157",
    "name": "Fayetteville",
    "lat": 36.06258,
    "lng": -94.15743,
    "countryCode": "US",
    "population": 82830
  },
  {
    "id": "35.386L-94.399",
    "name": "Fort Smith",
    "lat": 35.38592,
    "lng": -94.39855,
    "countryCode": "US",
    "population": 88194
  },
  {
    "id": "35.842L-90.704",
    "name": "Jonesboro",
    "lat": 35.8423,
    "lng": -90.70428,
    "countryCode": "US",
    "population": 73907
  },
  {
    "id": "34.746L-92.290",
    "name": "Little Rock",
    "lat": 34.74648,
    "lng": -92.28959,
    "countryCode": "US",
    "population": 197992
  },
  {
    "id": "34.770L-92.267",
    "name": "North Little Rock",
    "lat": 34.76954,
    "lng": -92.26709,
    "countryCode": "US",
    "population": 66504
  },
  {
    "id": "36.332L-94.119",
    "name": "Rogers",
    "lat": 36.33202,
    "lng": -94.11854,
    "countryCode": "US",
    "population": 63159
  },
  {
    "id": "36.187L-94.129",
    "name": "Springdale",
    "lat": 36.18674,
    "lng": -94.12881,
    "countryCode": "US",
    "population": 77859
  },
  {
    "id": "38.895L-77.036",
    "name": "Washington, D.C.",
    "lat": 38.89511,
    "lng": -77.03637,
    "countryCode": "US",
    "population": 601723
  },
  {
    "id": "39.746L-75.547",
    "name": "Wilmington",
    "lat": 39.74595,
    "lng": -75.54659,
    "countryCode": "US",
    "population": 71948
  },
  {
    "id": "25.815L-80.224",
    "name": "Allapattah",
    "lat": 25.81454,
    "lng": -80.22394,
    "countryCode": "US",
    "population": 54289
  },
  {
    "id": "26.359L-80.083",
    "name": "Boca Raton",
    "lat": 26.35869,
    "lng": -80.0831,
    "countryCode": "US",
    "population": 93235
  },
  {
    "id": "26.340L-81.779",
    "name": "Bonita Springs",
    "lat": 26.33981,
    "lng": -81.7787,
    "countryCode": "US",
    "population": 51704
  },
  {
    "id": "26.525L-80.066",
    "name": "Boynton Beach",
    "lat": 26.52535,
    "lng": -80.06643,
    "countryCode": "US",
    "population": 73966
  },
  {
    "id": "27.499L-82.575",
    "name": "Bradenton",
    "lat": 27.49893,
    "lng": -82.57482,
    "countryCode": "US",
    "population": 54437
  },
  {
    "id": "27.938L-82.286",
    "name": "Brandon",
    "lat": 27.9378,
    "lng": -82.28592,
    "countryCode": "US",
    "population": 103483
  },
  {
    "id": "26.563L-81.950",
    "name": "Cape Coral",
    "lat": 26.56285,
    "lng": -81.94953,
    "countryCode": "US",
    "population": 175229
  },
  {
    "id": "25.941L-80.246",
    "name": "Carol City",
    "lat": 25.94065,
    "lng": -80.2456,
    "countryCode": "US",
    "population": 63031
  },
  {
    "id": "27.966L-82.800",
    "name": "Clearwater",
    "lat": 27.96585,
    "lng": -82.8001,
    "countryCode": "US",
    "population": 113003
  },
  {
    "id": "26.252L-80.179",
    "name": "Coconut Creek",
    "lat": 26.25175,
    "lng": -80.17894,
    "countryCode": "US",
    "population": 59302
  },
  {
    "id": "25.721L-80.268",
    "name": "Coral Gables",
    "lat": 25.72149,
    "lng": -80.26838,
    "countryCode": "US",
    "population": 51117
  },
  {
    "id": "26.271L-80.271",
    "name": "Coral Springs",
    "lat": 26.27119,
    "lng": -80.2706,
    "countryCode": "US",
    "population": 129485
  },
  {
    "id": "26.063L-80.233",
    "name": "Davie",
    "lat": 26.06287,
    "lng": -80.2331,
    "countryCode": "US",
    "population": 100882
  },
  {
    "id": "29.211L-81.023",
    "name": "Daytona Beach",
    "lat": 29.21081,
    "lng": -81.02283,
    "countryCode": "US",
    "population": 64736
  },
  {
    "id": "26.318L-80.100",
    "name": "Deerfield Beach",
    "lat": 26.31841,
    "lng": -80.09977,
    "countryCode": "US",
    "population": 79768
  },
  {
    "id": "26.461L-80.073",
    "name": "Delray Beach",
    "lat": 26.46146,
    "lng": -80.07282,
    "countryCode": "US",
    "population": 66255
  },
  {
    "id": "28.901L-81.264",
    "name": "Deltona",
    "lat": 28.90054,
    "lng": -81.26367,
    "countryCode": "US",
    "population": 88474
  },
  {
    "id": "25.820L-80.355",
    "name": "Doral",
    "lat": 25.81954,
    "lng": -80.35533,
    "countryCode": "US",
    "population": 56035
  },
  {
    "id": "30.429L-87.180",
    "name": "East Pensacola Heights",
    "lat": 30.42881,
    "lng": -87.17997,
    "countryCode": "US",
    "population": 54104
  },
  {
    "id": "25.762L-80.316",
    "name": "Flagami",
    "lat": 25.76232,
    "lng": -80.31616,
    "countryCode": "US",
    "population": 50834
  },
  {
    "id": "26.122L-80.143",
    "name": "Fort Lauderdale",
    "lat": 26.12231,
    "lng": -80.14338,
    "countryCode": "US",
    "population": 178590
  },
  {
    "id": "26.622L-81.841",
    "name": "Fort Myers",
    "lat": 26.62168,
    "lng": -81.84059,
    "countryCode": "US",
    "population": 74013
  },
  {
    "id": "25.773L-80.348",
    "name": "Fountainebleau",
    "lat": 25.77288,
    "lng": -80.34783,
    "countryCode": "US",
    "population": 59764
  },
  {
    "id": "29.652L-82.325",
    "name": "Gainesville",
    "lat": 29.65163,
    "lng": -82.32483,
    "countryCode": "US",
    "population": 130128
  },
  {
    "id": "25.858L-80.278",
    "name": "Hialeah",
    "lat": 25.8576,
    "lng": -80.27811,
    "countryCode": "US",
    "population": 237069
  },
  {
    "id": "26.011L-80.149",
    "name": "Hollywood",
    "lat": 26.0112,
    "lng": -80.14949,
    "countryCode": "US",
    "population": 149728
  },
  {
    "id": "25.469L-80.478",
    "name": "Homestead",
    "lat": 25.46872,
    "lng": -80.47756,
    "countryCode": "US",
    "population": 66498
  },
  {
    "id": "30.332L-81.656",
    "name": "Jacksonville",
    "lat": 30.33218,
    "lng": -81.65565,
    "countryCode": "US",
    "population": 868031
  },
  {
    "id": "26.934L-80.094",
    "name": "Jupiter",
    "lat": 26.93422,
    "lng": -80.09421,
    "countryCode": "US",
    "population": 62707
  },
  {
    "id": "25.708L-80.407",
    "name": "Kendale Lakes",
    "lat": 25.70816,
    "lng": -80.407,
    "countryCode": "US",
    "population": 56148
  },
  {
    "id": "25.679L-80.317",
    "name": "Kendall",
    "lat": 25.67927,
    "lng": -80.31727,
    "countryCode": "US",
    "population": 75371
  },
  {
    "id": "28.305L-81.417",
    "name": "Kissimmee",
    "lat": 28.30468,
    "lng": -81.41667,
    "countryCode": "US",
    "population": 69152
  },
  {
    "id": "28.039L-81.950",
    "name": "Lakeland",
    "lat": 28.03947,
    "lng": -81.9498,
    "countryCode": "US",
    "population": 104401
  },
  {
    "id": "27.910L-82.788",
    "name": "Largo",
    "lat": 27.90979,
    "lng": -82.78842,
    "countryCode": "US",
    "population": 81000
  },
  {
    "id": "26.140L-80.213",
    "name": "Lauderhill",
    "lat": 26.14036,
    "lng": -80.21338,
    "countryCode": "US",
    "population": 71579
  },
  {
    "id": "26.625L-81.625",
    "name": "Lehigh Acres",
    "lat": 26.62535,
    "lng": -81.6248,
    "countryCode": "US",
    "population": 86784
  },
  {
    "id": "26.245L-80.206",
    "name": "Margate",
    "lat": 26.24453,
    "lng": -80.20644,
    "countryCode": "US",
    "population": 57234
  },
  {
    "id": "28.084L-80.608",
    "name": "Melbourne",
    "lat": 28.08363,
    "lng": -80.60811,
    "countryCode": "US",
    "population": 80127
  },
  {
    "id": "25.774L-80.194",
    "name": "Miami",
    "lat": 25.77427,
    "lng": -80.19366,
    "countryCode": "US",
    "population": 441003
  },
  {
    "id": "25.791L-80.130",
    "name": "Miami Beach",
    "lat": 25.79065,
    "lng": -80.13005,
    "countryCode": "US",
    "population": 92312
  },
  {
    "id": "25.942L-80.246",
    "name": "Miami Gardens",
    "lat": 25.94204,
    "lng": -80.2456,
    "countryCode": "US",
    "population": 113187
  },
  {
    "id": "25.987L-80.232",
    "name": "Miramar",
    "lat": 25.98731,
    "lng": -80.23227,
    "countryCode": "US",
    "population": 137132
  },
  {
    "id": "25.890L-80.187",
    "name": "North Miami",
    "lat": 25.89009,
    "lng": -80.18671,
    "countryCode": "US",
    "population": 62435
  },
  {
    "id": "27.044L-82.236",
    "name": "North Port",
    "lat": 27.04422,
    "lng": -82.23593,
    "countryCode": "US",
    "population": 62345
  },
  {
    "id": "29.187L-82.140",
    "name": "Ocala",
    "lat": 29.1872,
    "lng": -82.14009,
    "countryCode": "US",
    "population": 58218
  },
  {
    "id": "28.538L-81.379",
    "name": "Orlando",
    "lat": 28.53834,
    "lng": -81.37924,
    "countryCode": "US",
    "population": 270934
  },
  {
    "id": "28.034L-80.589",
    "name": "Palm Bay",
    "lat": 28.03446,
    "lng": -80.58866,
    "countryCode": "US",
    "population": 107888
  },
  {
    "id": "26.823L-80.139",
    "name": "Palm Beach Gardens",
    "lat": 26.82339,
    "lng": -80.13865,
    "countryCode": "US",
    "population": 52923
  },
  {
    "id": "29.585L-81.208",
    "name": "Palm Coast",
    "lat": 29.58497,
    "lng": -81.20784,
    "countryCode": "US",
    "population": 82893
  },
  {
    "id": "28.078L-82.764",
    "name": "Palm Harbor",
    "lat": 28.07807,
    "lng": -82.76371,
    "countryCode": "US",
    "population": 57439
  },
  {
    "id": "26.003L-80.224",
    "name": "Pembroke Pines",
    "lat": 26.00315,
    "lng": -80.22394,
    "countryCode": "US",
    "population": 166611
  },
  {
    "id": "30.421L-87.217",
    "name": "Pensacola",
    "lat": 30.42131,
    "lng": -87.21691,
    "countryCode": "US",
    "population": 53193
  },
  {
    "id": "28.558L-81.453",
    "name": "Pine Hills",
    "lat": 28.55778,
    "lng": -81.4534,
    "countryCode": "US",
    "population": 60076
  },
  {
    "id": "27.843L-82.700",
    "name": "Pinellas Park",
    "lat": 27.8428,
    "lng": -82.69954,
    "countryCode": "US",
    "population": 51617
  },
  {
    "id": "26.134L-80.232",
    "name": "Plantation",
    "lat": 26.13421,
    "lng": -80.23184,
    "countryCode": "US",
    "population": 92560
  },
  {
    "id": "28.140L-81.458",
    "name": "Poinciana",
    "lat": 28.14029,
    "lng": -81.45841,
    "countryCode": "US",
    "population": 53193
  },
  {
    "id": "26.238L-80.125",
    "name": "Pompano Beach",
    "lat": 26.23786,
    "lng": -80.12477,
    "countryCode": "US",
    "population": 107762
  },
  {
    "id": "26.976L-82.091",
    "name": "Port Charlotte",
    "lat": 26.97617,
    "lng": -82.09064,
    "countryCode": "US",
    "population": 54392
  },
  {
    "id": "29.138L-80.996",
    "name": "Port Orange",
    "lat": 29.13832,
    "lng": -80.99561,
    "countryCode": "US",
    "population": 59866
  },
  {
    "id": "27.294L-80.350",
    "name": "Port Saint Lucie",
    "lat": 27.29393,
    "lng": -80.35033,
    "countryCode": "US",
    "population": 164603
  },
  {
    "id": "27.866L-82.326",
    "name": "Riverview",
    "lat": 27.86614,
    "lng": -82.32648,
    "countryCode": "US",
    "population": 71050
  },
  {
    "id": "27.771L-82.679",
    "name": "St. Petersburg",
    "lat": 27.77086,
    "lng": -82.67927,
    "countryCode": "US",
    "population": 257083
  },
  {
    "id": "28.801L-81.273",
    "name": "Sanford",
    "lat": 28.80055,
    "lng": -81.27312,
    "countryCode": "US",
    "population": 58111
  },
  {
    "id": "27.336L-82.531",
    "name": "Sarasota",
    "lat": 27.33643,
    "lng": -82.53065,
    "countryCode": "US",
    "population": 55118
  },
  {
    "id": "28.477L-82.525",
    "name": "Spring Hill",
    "lat": 28.47688,
    "lng": -82.52546,
    "countryCode": "US",
    "population": 98621
  },
  {
    "id": "26.134L-80.113",
    "name": "Sunrise",
    "lat": 26.13397,
    "lng": -80.1131,
    "countryCode": "US",
    "population": 84439
  },
  {
    "id": "30.438L-84.281",
    "name": "Tallahassee",
    "lat": 30.43826,
    "lng": -84.28073,
    "countryCode": "US",
    "population": 189907
  },
  {
    "id": "26.213L-80.250",
    "name": "Tamarac",
    "lat": 26.21286,
    "lng": -80.24977,
    "countryCode": "US",
    "population": 64681
  },
  {
    "id": "25.759L-80.398",
    "name": "Tamiami",
    "lat": 25.75871,
    "lng": -80.39839,
    "countryCode": "US",
    "population": 55271
  },
  {
    "id": "27.948L-82.458",
    "name": "Tampa",
    "lat": 27.94752,
    "lng": -82.45843,
    "countryCode": "US",
    "population": 369075
  },
  {
    "id": "25.671L-80.445",
    "name": "The Hammocks",
    "lat": 25.67149,
    "lng": -80.4445,
    "countryCode": "US",
    "population": 51003
  },
  {
    "id": "28.934L-81.960",
    "name": "The Villages",
    "lat": 28.93408,
    "lng": -81.95994,
    "countryCode": "US",
    "population": 51442
  },
  {
    "id": "28.011L-82.577",
    "name": "Town 'n' Country",
    "lat": 28.01057,
    "lng": -82.57732,
    "countryCode": "US",
    "population": 78442
  },
  {
    "id": "26.659L-80.241",
    "name": "Wellington",
    "lat": 26.65868,
    "lng": -80.24144,
    "countryCode": "US",
    "population": 62560
  },
  {
    "id": "26.715L-80.053",
    "name": "West Palm Beach",
    "lat": 26.71534,
    "lng": -80.05337,
    "countryCode": "US",
    "population": 106779
  },
  {
    "id": "26.100L-80.400",
    "name": "Weston",
    "lat": 26.10037,
    "lng": -80.39977,
    "countryCode": "US",
    "population": 69959
  },
  {
    "id": "31.579L-84.156",
    "name": "Albany",
    "lat": 31.57851,
    "lng": -84.15574,
    "countryCode": "US",
    "population": 74843
  },
  {
    "id": "34.075L-84.294",
    "name": "Alpharetta",
    "lat": 34.07538,
    "lng": -84.29409,
    "countryCode": "US",
    "population": 63693
  },
  {
    "id": "33.961L-83.378",
    "name": "Athens",
    "lat": 33.96095,
    "lng": -83.37794,
    "countryCode": "US",
    "population": 116714
  },
  {
    "id": "33.749L-84.388",
    "name": "Atlanta",
    "lat": 33.749,
    "lng": -84.38798,
    "countryCode": "US",
    "population": 463878
  },
  {
    "id": "33.858L-84.340",
    "name": "Brookhaven",
    "lat": 33.85844,
    "lng": -84.3402,
    "countryCode": "US",
    "population": 51910
  },
  {
    "id": "32.461L-84.988",
    "name": "Columbus",
    "lat": 32.46098,
    "lng": -84.98771,
    "countryCode": "US",
    "population": 200579
  },
  {
    "id": "32.841L-83.632",
    "name": "Macon",
    "lat": 32.84069,
    "lng": -83.6324,
    "countryCode": "US",
    "population": 91351
  },
  {
    "id": "33.953L-84.550",
    "name": "Marietta",
    "lat": 33.9526,
    "lng": -84.54993,
    "countryCode": "US",
    "population": 59067
  },
  {
    "id": "34.023L-84.362",
    "name": "Roswell",
    "lat": 34.02316,
    "lng": -84.36159,
    "countryCode": "US",
    "population": 94501
  },
  {
    "id": "33.924L-84.379",
    "name": "Sandy Springs",
    "lat": 33.92427,
    "lng": -84.37854,
    "countryCode": "US",
    "population": 105330
  },
  {
    "id": "32.084L-81.100",
    "name": "Savannah",
    "lat": 32.08354,
    "lng": -81.09983,
    "countryCode": "US",
    "population": 145674
  },
  {
    "id": "33.884L-84.514",
    "name": "Smyrna",
    "lat": 33.88399,
    "lng": -84.51438,
    "countryCode": "US",
    "population": 56146
  },
  {
    "id": "30.833L-83.280",
    "name": "Valdosta",
    "lat": 30.83334,
    "lng": -83.28032,
    "countryCode": "US",
    "population": 55724
  },
  {
    "id": "32.616L-83.627",
    "name": "Warner Robins",
    "lat": 32.61574,
    "lng": -83.62664,
    "countryCode": "US",
    "population": 73490
  },
  {
    "id": "39.840L-88.955",
    "name": "Decatur",
    "lat": 39.84031,
    "lng": -88.9548,
    "countryCode": "US",
    "population": 73254
  },
  {
    "id": "39.802L-89.644",
    "name": "Springfield",
    "lat": 39.80172,
    "lng": -89.64371,
    "countryCode": "US",
    "population": 116565
  },
  {
    "id": "39.165L-86.526",
    "name": "Bloomington",
    "lat": 39.16533,
    "lng": -86.52639,
    "countryCode": "US",
    "population": 84067
  },
  {
    "id": "39.978L-86.118",
    "name": "Carmel",
    "lat": 39.97837,
    "lng": -86.11804,
    "countryCode": "US",
    "population": 88713
  },
  {
    "id": "37.975L-87.556",
    "name": "Evansville",
    "lat": 37.97476,
    "lng": -87.55585,
    "countryCode": "US",
    "population": 119943
  },
  {
    "id": "39.956L-86.014",
    "name": "Fishers",
    "lat": 39.95559,
    "lng": -86.01387,
    "countryCode": "US",
    "population": 76794
  },
  {
    "id": "39.614L-86.107",
    "name": "Greenwood",
    "lat": 39.61366,
    "lng": -86.10665,
    "countryCode": "US",
    "population": 55586
  },
  {
    "id": "39.768L-86.158",
    "name": "Indianapolis",
    "lat": 39.76838,
    "lng": -86.15804,
    "countryCode": "US",
    "population": 829718
  },
  {
    "id": "39.467L-87.414",
    "name": "Terre Haute",
    "lat": 39.4667,
    "lng": -87.41391,
    "countryCode": "US",
    "population": 60825
  },
  {
    "id": "39.114L-94.627",
    "name": "Kansas City",
    "lat": 39.11417,
    "lng": -94.62746,
    "countryCode": "US",
    "population": 151306
  },
  {
    "id": "38.972L-95.235",
    "name": "Lawrence",
    "lat": 38.97167,
    "lng": -95.23525,
    "countryCode": "US",
    "population": 93917
  },
  {
    "id": "38.954L-94.734",
    "name": "Lenexa",
    "lat": 38.95362,
    "lng": -94.73357,
    "countryCode": "US",
    "population": 52490
  },
  {
    "id": "39.184L-96.572",
    "name": "Manhattan",
    "lat": 39.18361,
    "lng": -96.57167,
    "countryCode": "US",
    "population": 56308
  },
  {
    "id": "38.881L-94.819",
    "name": "Olathe",
    "lat": 38.8814,
    "lng": -94.81913,
    "countryCode": "US",
    "population": 134305
  },
  {
    "id": "38.982L-94.671",
    "name": "Overland Park",
    "lat": 38.98223,
    "lng": -94.67079,
    "countryCode": "US",
    "population": 186515
  },
  {
    "id": "39.042L-94.720",
    "name": "Shawnee",
    "lat": 39.04167,
    "lng": -94.72024,
    "countryCode": "US",
    "population": 65046
  },
  {
    "id": "39.048L-95.678",
    "name": "Topeka",
    "lat": 39.04833,
    "lng": -95.67804,
    "countryCode": "US",
    "population": 127265
  },
  {
    "id": "37.692L-97.338",
    "name": "Wichita",
    "lat": 37.69224,
    "lng": -97.33754,
    "countryCode": "US",
    "population": 389965
  },
  {
    "id": "36.990L-86.444",
    "name": "Bowling Green",
    "lat": 36.99032,
    "lng": -86.4436,
    "countryCode": "US",
    "population": 63616
  },
  {
    "id": "38.456L-82.692",
    "name": "Ironville",
    "lat": 38.45647,
    "lng": -82.69238,
    "countryCode": "US",
    "population": 288649
  },
  {
    "id": "37.989L-84.478",
    "name": "Lexington",
    "lat": 37.98869,
    "lng": -84.47772,
    "countryCode": "US",
    "population": 225366
  },
  {
    "id": "38.050L-84.459",
    "name": "Lexington-Fayette",
    "lat": 38.0498,
    "lng": -84.45855,
    "countryCode": "US",
    "population": 314488
  },
  {
    "id": "38.254L-85.759",
    "name": "Louisville",
    "lat": 38.25424,
    "lng": -85.75941,
    "countryCode": "US",
    "population": 243639
  },
  {
    "id": "38.413L-82.709",
    "name": "Meads",
    "lat": 38.41258,
    "lng": -82.70905,
    "countryCode": "US",
    "population": 288649
  },
  {
    "id": "37.774L-87.113",
    "name": "Owensboro",
    "lat": 37.77422,
    "lng": -87.11333,
    "countryCode": "US",
    "population": 59042
  },
  {
    "id": "30.451L-91.155",
    "name": "Baton Rouge",
    "lat": 30.45075,
    "lng": -91.15455,
    "countryCode": "US",
    "population": 228590
  },
  {
    "id": "32.516L-93.732",
    "name": "Bossier City",
    "lat": 32.51599,
    "lng": -93.73212,
    "countryCode": "US",
    "population": 68094
  },
  {
    "id": "29.994L-90.242",
    "name": "Kenner",
    "lat": 29.99409,
    "lng": -90.24174,
    "countryCode": "US",
    "population": 67091
  },
  {
    "id": "30.224L-92.020",
    "name": "Lafayette",
    "lat": 30.22409,
    "lng": -92.01984,
    "countryCode": "US",
    "population": 127657
  },
  {
    "id": "30.213L-93.204",
    "name": "Lake Charles",
    "lat": 30.21309,
    "lng": -93.2044,
    "countryCode": "US",
    "population": 76070
  },
  {
    "id": "29.984L-90.153",
    "name": "Metairie",
    "lat": 29.98409,
    "lng": -90.15285,
    "countryCode": "US",
    "population": 138481
  },
  {
    "id": "29.979L-90.164",
    "name": "Metairie Terrace",
    "lat": 29.97854,
    "lng": -90.16396,
    "countryCode": "US",
    "population": 142489
  },
  {
    "id": "29.955L-90.075",
    "name": "New Orleans",
    "lat": 29.95465,
    "lng": -90.07507,
    "countryCode": "US",
    "population": 389617
  },
  {
    "id": "32.525L-93.750",
    "name": "Shreveport",
    "lat": 32.52515,
    "lng": -93.75018,
    "countryCode": "US",
    "population": 197204
  },
  {
    "id": "39.290L-76.612",
    "name": "Baltimore",
    "lat": 39.29038,
    "lng": -76.61219,
    "countryCode": "US",
    "population": 621849
  },
  {
    "id": "38.981L-77.100",
    "name": "Bethesda",
    "lat": 38.98067,
    "lng": -77.10026,
    "countryCode": "US",
    "population": 60858
  },
  {
    "id": "38.943L-76.730",
    "name": "Bowie",
    "lat": 38.94278,
    "lng": -76.73028,
    "countryCode": "US",
    "population": 58025
  },
  {
    "id": "39.240L-76.839",
    "name": "Columbia",
    "lat": 39.24038,
    "lng": -76.83942,
    "countryCode": "US",
    "population": 99615
  },
  {
    "id": "39.251L-76.521",
    "name": "Dundalk",
    "lat": 39.25066,
    "lng": -76.52052,
    "countryCode": "US",
    "population": 63597
  },
  {
    "id": "39.267L-76.798",
    "name": "Ellicott City",
    "lat": 39.26733,
    "lng": -76.79831,
    "countryCode": "US",
    "population": 65834
  },
  {
    "id": "39.414L-77.411",
    "name": "Frederick",
    "lat": 39.41427,
    "lng": -77.41054,
    "countryCode": "US",
    "population": 69479
  },
  {
    "id": "39.143L-77.201",
    "name": "Gaithersburg",
    "lat": 39.14344,
    "lng": -77.20137,
    "countryCode": "US",
    "population": 67456
  },
  {
    "id": "39.173L-77.272",
    "name": "Germantown",
    "lat": 39.17316,
    "lng": -77.27165,
    "countryCode": "US",
    "population": 86395
  },
  {
    "id": "39.163L-76.625",
    "name": "Glen Burnie",
    "lat": 39.16261,
    "lng": -76.62469,
    "countryCode": "US",
    "population": 67639
  },
  {
    "id": "39.084L-77.153",
    "name": "Rockville",
    "lat": 39.084,
    "lng": -77.15276,
    "countryCode": "US",
    "population": 66980
  },
  {
    "id": "38.991L-77.026",
    "name": "Silver Spring",
    "lat": 38.99067,
    "lng": -77.02609,
    "countryCode": "US",
    "population": 71452
  },
  {
    "id": "39.401L-76.602",
    "name": "Towson",
    "lat": 39.4015,
    "lng": -76.60191,
    "countryCode": "US",
    "population": 55197
  },
  {
    "id": "38.625L-76.939",
    "name": "Waldorf",
    "lat": 38.62456,
    "lng": -76.93914,
    "countryCode": "US",
    "population": 67752
  },
  {
    "id": "39.017L-94.282",
    "name": "Blue Springs",
    "lat": 39.01695,
    "lng": -94.28161,
    "countryCode": "US",
    "population": 54148
  },
  {
    "id": "38.952L-92.334",
    "name": "Columbia",
    "lat": 38.95171,
    "lng": -92.33407,
    "countryCode": "US",
    "population": 119108
  },
  {
    "id": "39.096L-94.355",
    "name": "East Independence",
    "lat": 39.09556,
    "lng": -94.35523,
    "countryCode": "US",
    "population": 110675
  },
  {
    "id": "38.789L-90.323",
    "name": "Florissant",
    "lat": 38.78922,
    "lng": -90.32261,
    "countryCode": "US",
    "population": 52268
  },
  {
    "id": "39.091L-94.416",
    "name": "Independence",
    "lat": 39.09112,
    "lng": -94.41551,
    "countryCode": "US",
    "population": 117255
  },
  {
    "id": "37.084L-94.513",
    "name": "Joplin",
    "lat": 37.08423,
    "lng": -94.51328,
    "countryCode": "US",
    "population": 51818
  },
  {
    "id": "39.100L-94.579",
    "name": "Kansas City",
    "lat": 39.09973,
    "lng": -94.57857,
    "countryCode": "US",
    "population": 475378
  },
  {
    "id": "38.911L-94.382",
    "name": "Lee's Summit",
    "lat": 38.91084,
    "lng": -94.38217,
    "countryCode": "US",
    "population": 95094
  },
  {
    "id": "38.811L-90.700",
    "name": "O'Fallon",
    "lat": 38.81061,
    "lng": -90.69985,
    "countryCode": "US",
    "population": 85040
  },
  {
    "id": "38.784L-90.481",
    "name": "Saint Charles",
    "lat": 38.78394,
    "lng": -90.48123,
    "countryCode": "US",
    "population": 65794
  },
  {
    "id": "39.769L-94.847",
    "name": "Saint Joseph",
    "lat": 39.76861,
    "lng": -94.84663,
    "countryCode": "US",
    "population": 76780
  },
  {
    "id": "38.627L-90.198",
    "name": "St. Louis",
    "lat": 38.62727,
    "lng": -90.19789,
    "countryCode": "US",
    "population": 315685
  },
  {
    "id": "38.800L-90.627",
    "name": "Saint Peters",
    "lat": 38.80033,
    "lng": -90.62651,
    "countryCode": "US",
    "population": 52575
  },
  {
    "id": "37.215L-93.298",
    "name": "Springfield",
    "lat": 37.21533,
    "lng": -93.29824,
    "countryCode": "US",
    "population": 166810
  },
  {
    "id": "30.367L-89.093",
    "name": "Gulfport",
    "lat": 30.36742,
    "lng": -89.09282,
    "countryCode": "US",
    "population": 71856
  },
  {
    "id": "32.299L-90.185",
    "name": "Jackson",
    "lat": 32.29876,
    "lng": -90.18481,
    "countryCode": "US",
    "population": 170674
  },
  {
    "id": "34.989L-90.013",
    "name": "Southaven",
    "lat": 34.98898,
    "lng": -90.01259,
    "countryCode": "US",
    "population": 52589
  },
  {
    "id": "30.404L-89.094",
    "name": "West Gulfport",
    "lat": 30.40409,
    "lng": -89.0942,
    "countryCode": "US",
    "population": 71329
  },
  {
    "id": "35.601L-82.554",
    "name": "Asheville",
    "lat": 35.60095,
    "lng": -82.55402,
    "countryCode": "US",
    "population": 88512
  },
  {
    "id": "36.096L-79.438",
    "name": "Burlington",
    "lat": 36.09569,
    "lng": -79.4378,
    "countryCode": "US",
    "population": 52472
  },
  {
    "id": "35.792L-78.781",
    "name": "Cary",
    "lat": 35.79154,
    "lng": -78.78112,
    "countryCode": "US",
    "population": 159769
  },
  {
    "id": "35.913L-79.056",
    "name": "Chapel Hill",
    "lat": 35.9132,
    "lng": -79.05584,
    "countryCode": "US",
    "population": 59568
  },
  {
    "id": "35.227L-80.843",
    "name": "Charlotte",
    "lat": 35.22709,
    "lng": -80.84313,
    "countryCode": "US",
    "population": 827097
  },
  {
    "id": "35.409L-80.582",
    "name": "Concord",
    "lat": 35.40888,
    "lng": -80.58158,
    "countryCode": "US",
    "population": 87696
  },
  {
    "id": "35.994L-78.899",
    "name": "Durham",
    "lat": 35.99403,
    "lng": -78.89862,
    "countryCode": "US",
    "population": 257636
  },
  {
    "id": "35.053L-78.878",
    "name": "Fayetteville",
    "lat": 35.05266,
    "lng": -78.87836,
    "countryCode": "US",
    "population": 201963
  },
  {
    "id": "35.262L-81.187",
    "name": "Gastonia",
    "lat": 35.26208,
    "lng": -81.1873,
    "countryCode": "US",
    "population": 74543
  },
  {
    "id": "36.073L-79.792",
    "name": "Greensboro",
    "lat": 36.07264,
    "lng": -79.79198,
    "countryCode": "US",
    "population": 285342
  },
  {
    "id": "35.613L-77.366",
    "name": "Greenville",
    "lat": 35.61266,
    "lng": -77.36635,
    "countryCode": "US",
    "population": 90597
  },
  {
    "id": "35.956L-80.005",
    "name": "High Point",
    "lat": 35.95569,
    "lng": -80.00532,
    "countryCode": "US",
    "population": 110268
  },
  {
    "id": "35.411L-80.843",
    "name": "Huntersville",
    "lat": 35.41069,
    "lng": -80.84285,
    "countryCode": "US",
    "population": 52704
  },
  {
    "id": "34.754L-77.430",
    "name": "Jacksonville",
    "lat": 34.75405,
    "lng": -77.43024,
    "countryCode": "US",
    "population": 67357
  },
  {
    "id": "35.772L-78.639",
    "name": "Raleigh",
    "lat": 35.7721,
    "lng": -78.63861,
    "countryCode": "US",
    "population": 451066
  },
  {
    "id": "35.938L-77.791",
    "name": "Rocky Mount",
    "lat": 35.93821,
    "lng": -77.79053,
    "countryCode": "US",
    "population": 55806
  },
  {
    "id": "35.787L-78.664",
    "name": "West Raleigh",
    "lat": 35.78682,
    "lng": -78.66389,
    "countryCode": "US",
    "population": 338759
  },
  {
    "id": "34.226L-77.945",
    "name": "Wilmington",
    "lat": 34.22573,
    "lng": -77.94471,
    "countryCode": "US",
    "population": 115933
  },
  {
    "id": "36.100L-80.244",
    "name": "Winston-Salem",
    "lat": 36.09986,
    "lng": -80.24422,
    "countryCode": "US",
    "population": 241218
  },
  {
    "id": "39.926L-75.120",
    "name": "Camden",
    "lat": 39.92595,
    "lng": -75.11962,
    "countryCode": "US",
    "population": 76119
  },
  {
    "id": "39.935L-75.031",
    "name": "Cherry Hill",
    "lat": 39.93484,
    "lng": -75.03073,
    "countryCode": "US",
    "population": 70475
  },
  {
    "id": "39.776L-74.862",
    "name": "Jackson",
    "lat": 39.7765,
    "lng": -74.86238,
    "countryCode": "US",
    "population": 54856
  },
  {
    "id": "39.446L-75.029",
    "name": "South Vineland",
    "lat": 39.44595,
    "lng": -75.02879,
    "countryCode": "US",
    "population": 58122
  },
  {
    "id": "39.954L-74.198",
    "name": "Toms River",
    "lat": 39.95373,
    "lng": -74.19792,
    "countryCode": "US",
    "population": 88791
  },
  {
    "id": "39.486L-75.026",
    "name": "Vineland",
    "lat": 39.48623,
    "lng": -75.02573,
    "countryCode": "US",
    "population": 60818
  },
  {
    "id": "39.127L-84.514",
    "name": "Cincinnati",
    "lat": 39.12711,
    "lng": -84.51439,
    "countryCode": "US",
    "population": 296943
  },
  {
    "id": "39.961L-82.999",
    "name": "Columbus",
    "lat": 39.96118,
    "lng": -82.99879,
    "countryCode": "US",
    "population": 850106
  },
  {
    "id": "39.759L-84.192",
    "name": "Dayton",
    "lat": 39.75895,
    "lng": -84.19161,
    "countryCode": "US",
    "population": 140599
  },
  {
    "id": "39.400L-84.561",
    "name": "Hamilton",
    "lat": 39.3995,
    "lng": -84.56134,
    "countryCode": "US",
    "population": 62407
  },
  {
    "id": "39.690L-84.169",
    "name": "Kettering",
    "lat": 39.6895,
    "lng": -84.16883,
    "countryCode": "US",
    "population": 55525
  },
  {
    "id": "39.924L-83.809",
    "name": "Springfield",
    "lat": 39.92423,
    "lng": -83.80882,
    "countryCode": "US",
    "population": 59680
  },
  {
    "id": "36.053L-95.791",
    "name": "Broken Arrow",
    "lat": 36.0526,
    "lng": -95.79082,
    "countryCode": "US",
    "population": 106563
  },
  {
    "id": "35.653L-97.478",
    "name": "Edmond",
    "lat": 35.65283,
    "lng": -97.4781,
    "countryCode": "US",
    "population": 90092
  },
  {
    "id": "36.396L-97.878",
    "name": "Enid",
    "lat": 36.39559,
    "lng": -97.87839,
    "countryCode": "US",
    "population": 51776
  },
  {
    "id": "34.609L-98.390",
    "name": "Lawton",
    "lat": 34.60869,
    "lng": -98.39033,
    "countryCode": "US",
    "population": 96655
  },
  {
    "id": "35.450L-97.397",
    "name": "Midwest City",
    "lat": 35.44951,
    "lng": -97.3967,
    "countryCode": "US",
    "population": 57249
  },
  {
    "id": "35.340L-97.487",
    "name": "Moore",
    "lat": 35.33951,
    "lng": -97.4867,
    "countryCode": "US",
    "population": 60451
  },
  {
    "id": "35.223L-97.439",
    "name": "Norman",
    "lat": 35.22257,
    "lng": -97.43948,
    "countryCode": "US",
    "population": 120284
  },
  {
    "id": "35.468L-97.516",
    "name": "Oklahoma City",
    "lat": 35.46756,
    "lng": -97.51643,
    "countryCode": "US",
    "population": 631346
  },
  {
    "id": "36.154L-95.993",
    "name": "Tulsa",
    "lat": 36.15398,
    "lng": -95.99277,
    "countryCode": "US",
    "population": 403505
  },
  {
    "id": "39.952L-75.164",
    "name": "Philadelphia",
    "lat": 39.95233,
    "lng": -75.16379,
    "countryCode": "US",
    "population": 1567442
  },
  {
    "id": "32.777L-79.931",
    "name": "Charleston",
    "lat": 32.77657,
    "lng": -79.93092,
    "countryCode": "US",
    "population": 132609
  },
  {
    "id": "34.001L-81.035",
    "name": "Columbia",
    "lat": 34.00071,
    "lng": -81.03481,
    "countryCode": "US",
    "population": 133803
  },
  {
    "id": "34.853L-82.394",
    "name": "Greenville",
    "lat": 34.85262,
    "lng": -82.39401,
    "countryCode": "US",
    "population": 64579
  },
  {
    "id": "32.794L-79.863",
    "name": "Mount Pleasant",
    "lat": 32.79407,
    "lng": -79.86259,
    "countryCode": "US",
    "population": 81317
  },
  {
    "id": "32.855L-79.975",
    "name": "North Charleston",
    "lat": 32.85462,
    "lng": -79.97481,
    "countryCode": "US",
    "population": 108304
  },
  {
    "id": "34.925L-81.025",
    "name": "Rock Hill",
    "lat": 34.92487,
    "lng": -81.02508,
    "countryCode": "US",
    "population": 71548
  },
  {
    "id": "35.205L-89.874",
    "name": "Bartlett",
    "lat": 35.20453,
    "lng": -89.87398,
    "countryCode": "US",
    "population": 58579
  },
  {
    "id": "35.046L-85.310",
    "name": "Chattanooga",
    "lat": 35.04563,
    "lng": -85.30968,
    "countryCode": "US",
    "population": 176588
  },
  {
    "id": "36.530L-87.359",
    "name": "Clarksville",
    "lat": 36.52977,
    "lng": -87.35945,
    "countryCode": "US",
    "population": 149176
  },
  {
    "id": "35.065L-85.249",
    "name": "East Chattanooga",
    "lat": 35.06535,
    "lng": -85.24912,
    "countryCode": "US",
    "population": 154024
  },
  {
    "id": "35.925L-86.869",
    "name": "Franklin",
    "lat": 35.92506,
    "lng": -86.86889,
    "countryCode": "US",
    "population": 72639
  },
  {
    "id": "36.305L-86.620",
    "name": "Hendersonville",
    "lat": 36.30477,
    "lng": -86.62,
    "countryCode": "US",
    "population": 56018
  },
  {
    "id": "35.615L-88.814",
    "name": "Jackson",
    "lat": 35.61452,
    "lng": -88.81395,
    "countryCode": "US",
    "population": 66975
  },
  {
    "id": "36.313L-82.353",
    "name": "Johnson City",
    "lat": 36.31344,
    "lng": -82.35347,
    "countryCode": "US",
    "population": 66027
  },
  {
    "id": "36.548L-82.562",
    "name": "Kingsport",
    "lat": 36.54843,
    "lng": -82.56182,
    "countryCode": "US",
    "population": 53014
  },
  {
    "id": "35.961L-83.921",
    "name": "Knoxville",
    "lat": 35.96064,
    "lng": -83.92074,
    "countryCode": "US",
    "population": 185291
  },
  {
    "id": "35.150L-90.049",
    "name": "Memphis",
    "lat": 35.14953,
    "lng": -90.04898,
    "countryCode": "US",
    "population": 655770
  },
  {
    "id": "35.846L-86.390",
    "name": "Murfreesboro",
    "lat": 35.84562,
    "lng": -86.39027,
    "countryCode": "US",
    "population": 126118
  },
  {
    "id": "36.166L-86.784",
    "name": "Nashville",
    "lat": 36.16589,
    "lng": -86.78444,
    "countryCode": "US",
    "population": 530852
  },
  {
    "id": "35.087L-90.057",
    "name": "New South Memphis",
    "lat": 35.08676,
    "lng": -90.05676,
    "countryCode": "US",
    "population": 641608
  },
  {
    "id": "32.449L-99.733",
    "name": "Abilene",
    "lat": 32.44874,
    "lng": -99.73314,
    "countryCode": "US",
    "population": 121721
  },
  {
    "id": "33.103L-96.671",
    "name": "Allen",
    "lat": 33.10317,
    "lng": -96.67055,
    "countryCode": "US",
    "population": 98143
  },
  {
    "id": "32.736L-97.108",
    "name": "Arlington",
    "lat": 32.73569,
    "lng": -97.10807,
    "countryCode": "US",
    "population": 388125
  },
  {
    "id": "29.999L-95.177",
    "name": "Atascocita",
    "lat": 29.99883,
    "lng": -95.1766,
    "countryCode": "US",
    "population": 65844
  },
  {
    "id": "30.267L-97.743",
    "name": "Austin",
    "lat": 30.26715,
    "lng": -97.74306,
    "countryCode": "US",
    "population": 931830
  },
  {
    "id": "29.735L-94.977",
    "name": "Baytown",
    "lat": 29.7355,
    "lng": -94.97743,
    "countryCode": "US",
    "population": 76335
  },
  {
    "id": "30.086L-94.102",
    "name": "Beaumont",
    "lat": 30.08605,
    "lng": -94.10185,
    "countryCode": "US",
    "population": 118129
  },
  {
    "id": "25.902L-97.497",
    "name": "Brownsville",
    "lat": 25.90175,
    "lng": -97.49748,
    "countryCode": "US",
    "population": 183887
  },
  {
    "id": "30.674L-96.370",
    "name": "Bryan",
    "lat": 30.67436,
    "lng": -96.36996,
    "countryCode": "US",
    "population": 82118
  },
  {
    "id": "32.954L-96.890",
    "name": "Carrollton",
    "lat": 32.95373,
    "lng": -96.89028,
    "countryCode": "US",
    "population": 133168
  },
  {
    "id": "30.505L-97.820",
    "name": "Cedar Park",
    "lat": 30.5052,
    "lng": -97.82029,
    "countryCode": "US",
    "population": 65945
  },
  {
    "id": "30.628L-96.334",
    "name": "College Station",
    "lat": 30.62798,
    "lng": -96.33441,
    "countryCode": "US",
    "population": 107889
  },
  {
    "id": "30.312L-95.456",
    "name": "Conroe",
    "lat": 30.31188,
    "lng": -95.45605,
    "countryCode": "US",
    "population": 68602
  },
  {
    "id": "27.801L-97.396",
    "name": "Corpus Christi",
    "lat": 27.80058,
    "lng": -97.39638,
    "countryCode": "US",
    "population": 324074
  },
  {
    "id": "32.783L-96.807",
    "name": "Dallas",
    "lat": 32.78306,
    "lng": -96.80667,
    "countryCode": "US",
    "population": 1300092
  },
  {
    "id": "32.590L-96.857",
    "name": "DeSoto",
    "lat": 32.58986,
    "lng": -96.85695,
    "countryCode": "US",
    "population": 52486
  },
  {
    "id": "33.215L-97.133",
    "name": "Denton",
    "lat": 33.21484,
    "lng": -97.13307,
    "countryCode": "US",
    "population": 131044
  },
  {
    "id": "26.302L-98.163",
    "name": "Edinburg",
    "lat": 26.30174,
    "lng": -98.16334,
    "countryCode": "US",
    "population": 84497
  },
  {
    "id": "32.837L-97.082",
    "name": "Euless",
    "lat": 32.83707,
    "lng": -97.08195,
    "countryCode": "US",
    "population": 54219
  },
  {
    "id": "33.015L-97.097",
    "name": "Flower Mound",
    "lat": 33.01457,
    "lng": -97.09696,
    "countryCode": "US",
    "population": 71253
  },
  {
    "id": "32.725L-97.321",
    "name": "Fort Worth",
    "lat": 32.72541,
    "lng": -97.32085,
    "countryCode": "US",
    "population": 833319
  },
  {
    "id": "33.151L-96.824",
    "name": "Frisco",
    "lat": 33.15067,
    "lng": -96.82361,
    "countryCode": "US",
    "population": 154407
  },
  {
    "id": "29.301L-94.798",
    "name": "Galveston",
    "lat": 29.30135,
    "lng": -94.7977,
    "countryCode": "US",
    "population": 50180
  },
  {
    "id": "32.913L-96.639",
    "name": "Garland",
    "lat": 32.91262,
    "lng": -96.63888,
    "countryCode": "US",
    "population": 236897
  },
  {
    "id": "30.633L-97.677",
    "name": "Georgetown",
    "lat": 30.63269,
    "lng": -97.67723,
    "countryCode": "US",
    "population": 63716
  },
  {
    "id": "32.746L-96.998",
    "name": "Grand Prairie",
    "lat": 32.74596,
    "lng": -96.99778,
    "countryCode": "US",
    "population": 187809
  },
  {
    "id": "32.934L-97.078",
    "name": "Grapevine",
    "lat": 32.93429,
    "lng": -97.07807,
    "countryCode": "US",
    "population": 51404
  },
  {
    "id": "26.191L-97.696",
    "name": "Harlingen",
    "lat": 26.19063,
    "lng": -97.6961,
    "countryCode": "US",
    "population": 65774
  },
  {
    "id": "29.763L-95.363",
    "name": "Houston",
    "lat": 29.76328,
    "lng": -95.36327,
    "countryCode": "US",
    "population": 2296224
  },
  {
    "id": "41.762L-72.742",
    "name": "West Hartford",
    "lat": 41.76204,
    "lng": -72.74204,
    "countryCode": "US",
    "population": 63268
  },
  {
    "id": "41.271L-72.947",
    "name": "West Haven",
    "lat": 41.27065,
    "lng": -72.94705,
    "countryCode": "US",
    "population": 54927
  },
  {
    "id": "42.035L-93.620",
    "name": "Ames",
    "lat": 42.03471,
    "lng": -93.61994,
    "countryCode": "US",
    "population": 65060
  },
  {
    "id": "41.730L-93.606",
    "name": "Ankeny",
    "lat": 41.72971,
    "lng": -93.60577,
    "countryCode": "US",
    "population": 56764
  },
  {
    "id": "42.008L-91.644",
    "name": "Cedar Rapids",
    "lat": 42.00833,
    "lng": -91.64407,
    "countryCode": "US",
    "population": 130405
  },
  {
    "id": "41.262L-95.861",
    "name": "Council Bluffs",
    "lat": 41.26194,
    "lng": -95.86083,
    "countryCode": "US",
    "population": 62597
  },
  {
    "id": "41.524L-90.578",
    "name": "Davenport",
    "lat": 41.52364,
    "lng": -90.57764,
    "countryCode": "US",
    "population": 102582
  },
  {
    "id": "41.601L-93.609",
    "name": "Des Moines",
    "lat": 41.60054,
    "lng": -93.60911,
    "countryCode": "US",
    "population": 210330
  },
  {
    "id": "42.501L-90.665",
    "name": "Dubuque",
    "lat": 42.50056,
    "lng": -90.66457,
    "countryCode": "US",
    "population": 58799
  },
  {
    "id": "41.661L-91.530",
    "name": "Iowa City",
    "lat": 41.66113,
    "lng": -91.53017,
    "countryCode": "US",
    "population": 74220
  },
  {
    "id": "42.500L-96.400",
    "name": "Sioux City",
    "lat": 42.49999,
    "lng": -96.40031,
    "countryCode": "US",
    "population": 82821
  },
  {
    "id": "42.493L-92.343",
    "name": "Waterloo",
    "lat": 42.49276,
    "lng": -92.34296,
    "countryCode": "US",
    "population": 68460
  },
  {
    "id": "41.577L-93.711",
    "name": "West Des Moines",
    "lat": 41.57721,
    "lng": -93.71133,
    "countryCode": "US",
    "population": 64113
  },
  {
    "id": "42.088L-87.981",
    "name": "Arlington Heights",
    "lat": 42.08836,
    "lng": -87.98063,
    "countryCode": "US",
    "population": 75926
  },
  {
    "id": "41.761L-88.320",
    "name": "Aurora",
    "lat": 41.76058,
    "lng": -88.32007,
    "countryCode": "US",
    "population": 200661
  },
  {
    "id": "41.851L-87.794",
    "name": "Berwyn",
    "lat": 41.85059,
    "lng": -87.79367,
    "countryCode": "US",
    "population": 56368
  },
  {
    "id": "40.484L-88.994",
    "name": "Bloomington",
    "lat": 40.4842,
    "lng": -88.99369,
    "countryCode": "US",
    "population": 78292
  },
  {
    "id": "41.699L-88.068",
    "name": "Bolingbrook",
    "lat": 41.69864,
    "lng": -88.0684,
    "countryCode": "US",
    "population": 74306
  },
  {
    "id": "40.116L-88.243",
    "name": "Champaign",
    "lat": 40.11642,
    "lng": -88.24338,
    "countryCode": "US",
    "population": 86096
  },
  {
    "id": "41.850L-87.650",
    "name": "Chicago",
    "lat": 41.85003,
    "lng": -87.65005,
    "countryCode": "US",
    "population": 2720546
  },
  {
    "id": "41.846L-87.754",
    "name": "Cicero",
    "lat": 41.84559,
    "lng": -87.75394,
    "countryCode": "US",
    "population": 83886
  },
  {
    "id": "42.033L-87.883",
    "name": "Des Plaines",
    "lat": 42.03336,
    "lng": -87.8834,
    "countryCode": "US",
    "population": 58677
  },
  {
    "id": "42.037L-88.281",
    "name": "Elgin",
    "lat": 42.03725,
    "lng": -88.28119,
    "countryCode": "US",
    "population": 112111
  },
  {
    "id": "42.041L-87.690",
    "name": "Evanston",
    "lat": 42.04114,
    "lng": -87.69006,
    "countryCode": "US",
    "population": 75527
  },
  {
    "id": "42.043L-88.080",
    "name": "Hoffman Estates",
    "lat": 42.04281,
    "lng": -88.0798,
    "countryCode": "US",
    "population": 52138
  },
  {
    "id": "41.525L-88.083",
    "name": "Joliet",
    "lat": 41.52519,
    "lng": -88.0834,
    "countryCode": "US",
    "population": 147861
  },
  {
    "id": "42.066L-87.937",
    "name": "Mount Prospect",
    "lat": 42.06642,
    "lng": -87.93729,
    "countryCode": "US",
    "population": 54747
  },
  {
    "id": "41.786L-88.147",
    "name": "Naperville",
    "lat": 41.78586,
    "lng": -88.14729,
    "countryCode": "US",
    "population": 147100
  },
  {
    "id": "40.514L-88.991",
    "name": "Normal",
    "lat": 40.5142,
    "lng": -88.99063,
    "countryCode": "US",
    "population": 54373
  },
  {
    "id": "40.718L-89.584",
    "name": "North Peoria",
    "lat": 40.71754,
    "lng": -89.58426,
    "countryCode": "US",
    "population": 113004
  },
  {
    "id": "41.711L-87.758",
    "name": "Oak Lawn",
    "lat": 41.71087,
    "lng": -87.75811,
    "countryCode": "US",
    "population": 56781
  },
  {
    "id": "41.885L-87.784",
    "name": "Oak Park",
    "lat": 41.88503,
    "lng": -87.7845,
    "countryCode": "US",
    "population": 52287
  },
  {
    "id": "41.630L-87.854",
    "name": "Orland Park",
    "lat": 41.63031,
    "lng": -87.85394,
    "countryCode": "US",
    "population": 58619
  },
  {
    "id": "42.110L-88.034",
    "name": "Palatine",
    "lat": 42.1103,
    "lng": -88.03424,
    "countryCode": "US",
    "population": 69308
  },
  {
    "id": "40.694L-89.589",
    "name": "Peoria",
    "lat": 40.69365,
    "lng": -89.58899,
    "countryCode": "US",
    "population": 115070
  },
  {
    "id": "42.271L-89.094",
    "name": "Rockford",
    "lat": 42.27113,
    "lng": -89.094,
    "countryCode": "US",
    "population": 148278
  },
  {
    "id": "42.033L-88.083",
    "name": "Schaumburg",
    "lat": 42.03336,
    "lng": -88.08341,
    "countryCode": "US",
    "population": 74693
  },
  {
    "id": "42.033L-87.733",
    "name": "Skokie",
    "lat": 42.03336,
    "lng": -87.73339,
    "countryCode": "US",
    "population": 64821
  },
  {
    "id": "41.573L-87.784",
    "name": "Tinley Park",
    "lat": 41.57337,
    "lng": -87.78449,
    "countryCode": "US",
    "population": 57143
  },
  {
    "id": "42.364L-87.845",
    "name": "Waukegan",
    "lat": 42.36363,
    "lng": -87.84479,
    "countryCode": "US",
    "population": 88475
  },
  {
    "id": "41.866L-88.107",
    "name": "Wheaton",
    "lat": 41.86614,
    "lng": -88.10701,
    "countryCode": "US",
    "population": 53715
  },
  {
    "id": "40.105L-85.680",
    "name": "Anderson",
    "lat": 40.10532,
    "lng": -85.68025,
    "countryCode": "US",
    "population": 55305
  },
  {
    "id": "41.682L-85.977",
    "name": "Elkhart",
    "lat": 41.68199,
    "lng": -85.97667,
    "countryCode": "US",
    "population": 52348
  },
  {
    "id": "41.131L-85.129",
    "name": "Fort Wayne",
    "lat": 41.1306,
    "lng": -85.12886,
    "countryCode": "US",
    "population": 260326
  },
  {
    "id": "41.593L-87.346",
    "name": "Gary",
    "lat": 41.59337,
    "lng": -87.34643,
    "countryCode": "US",
    "population": 77156
  },
  {
    "id": "41.583L-87.500",
    "name": "Hammond",
    "lat": 41.58337,
    "lng": -87.50004,
    "countryCode": "US",
    "population": 77614
  },
  {
    "id": "40.486L-86.134",
    "name": "Kokomo",
    "lat": 40.48643,
    "lng": -86.1336,
    "countryCode": "US",
    "population": 57995
  },
  {
    "id": "40.417L-86.875",
    "name": "Lafayette",
    "lat": 40.4167,
    "lng": -86.87529,
    "countryCode": "US",
    "population": 71111
  },
  {
    "id": "40.193L-85.386",
    "name": "Muncie",
    "lat": 40.19338,
    "lng": -85.38636,
    "countryCode": "US",
    "population": 70087
  },
  {
    "id": "40.046L-86.009",
    "name": "Noblesville",
    "lat": 40.04559,
    "lng": -86.0086,
    "countryCode": "US",
    "population": 59093
  },
  {
    "id": "41.683L-86.250",
    "name": "South Bend",
    "lat": 41.68338,
    "lng": -86.25001,
    "countryCode": "US",
    "population": 101516
  },
  {
    "id": "42.358L-71.060",
    "name": "Boston",
    "lat": 42.35843,
    "lng": -71.05977,
    "countryCode": "US",
    "population": 667137
  },
  {
    "id": "42.083L-71.018",
    "name": "Brockton",
    "lat": 42.08343,
    "lng": -71.01838,
    "countryCode": "US",
    "population": 95314
  },
  {
    "id": "42.332L-71.121",
    "name": "Brookline",
    "lat": 42.33176,
    "lng": -71.12116,
    "countryCode": "US",
    "population": 58732
  },
  {
    "id": "42.375L-71.106",
    "name": "Cambridge",
    "lat": 42.3751,
    "lng": -71.10561,
    "countryCode": "US",
    "population": 110402
  },
  {
    "id": "42.149L-72.608",
    "name": "Chicopee",
    "lat": 42.1487,
    "lng": -72.60787,
    "countryCode": "US",
    "population": 56741
  },
  {
    "id": "41.701L-71.155",
    "name": "Fall River",
    "lat": 41.70149,
    "lng": -71.15505,
    "countryCode": "US",
    "population": 88777
  },
  {
    "id": "42.279L-71.416",
    "name": "Framingham",
    "lat": 42.27926,
    "lng": -71.41617,
    "countryCode": "US",
    "population": 68318
  },
  {
    "id": "42.297L-71.437",
    "name": "Framingham Center",
    "lat": 42.29732,
    "lng": -71.43701,
    "countryCode": "US",
    "population": 65413
  },
  {
    "id": "42.776L-71.077",
    "name": "Haverhill",
    "lat": 42.7762,
    "lng": -71.07728,
    "countryCode": "US",
    "population": 62765
  },
  {
    "id": "42.707L-71.163",
    "name": "Lawrence",
    "lat": 42.70704,
    "lng": -71.16311,
    "countryCode": "US",
    "population": 80231
  },
  {
    "id": "42.633L-71.316",
    "name": "Lowell",
    "lat": 42.63342,
    "lng": -71.31617,
    "countryCode": "US",
    "population": 110699
  },
  {
    "id": "42.467L-70.949",
    "name": "Lynn",
    "lat": 42.46676,
    "lng": -70.94949,
    "countryCode": "US",
    "population": 92457
  },
  {
    "id": "42.425L-71.066",
    "name": "Malden",
    "lat": 42.4251,
    "lng": -71.06616,
    "countryCode": "US",
    "population": 61068
  },
  {
    "id": "42.418L-71.106",
    "name": "Medford",
    "lat": 42.41843,
    "lng": -71.10616,
    "countryCode": "US",
    "population": 57403
  },
  {
    "id": "41.636L-70.934",
    "name": "New Bedford",
    "lat": 41.63622,
    "lng": -70.93421,
    "countryCode": "US",
    "population": 94958
  },
  {
    "id": "42.337L-71.209",
    "name": "Newton",
    "lat": 42.33704,
    "lng": -71.20922,
    "countryCode": "US",
    "population": 88817
  },
  {
    "id": "42.183L-72.600",
    "name": "North Chicopee",
    "lat": 42.18343,
    "lng": -72.59953,
    "countryCode": "US",
    "population": 55179
  },
  {
    "id": "42.528L-70.929",
    "name": "Peabody",
    "lat": 42.52787,
    "lng": -70.92866,
    "countryCode": "US",
    "population": 52504
  },
  {
    "id": "42.253L-71.002",
    "name": "Quincy",
    "lat": 42.25288,
    "lng": -71.00227,
    "countryCode": "US",
    "population": 93618
  },
  {
    "id": "42.388L-71.100",
    "name": "Somerville",
    "lat": 42.3876,
    "lng": -71.0995,
    "countryCode": "US",
    "population": 80318
  },
  {
    "id": "42.333L-71.049",
    "name": "South Boston",
    "lat": 42.33343,
    "lng": -71.04949,
    "countryCode": "US",
    "population": 571281
  },
  {
    "id": "42.510L-70.949",
    "name": "South Peabody",
    "lat": 42.50982,
    "lng": -70.94949,
    "countryCode": "US",
    "population": 50293
  },
  {
    "id": "42.101L-72.590",
    "name": "Springfield",
    "lat": 42.10148,
    "lng": -72.58981,
    "countryCode": "US",
    "population": 154341
  },
  {
    "id": "41.900L-71.090",
    "name": "Taunton",
    "lat": 41.9001,
    "lng": -71.08977,
    "countryCode": "US",
    "population": 56789
  },
  {
    "id": "42.376L-71.236",
    "name": "Waltham",
    "lat": 42.37649,
    "lng": -71.23561,
    "countryCode": "US",
    "population": 63378
  },
  {
    "id": "42.221L-70.940",
    "name": "Weymouth",
    "lat": 42.22093,
    "lng": -70.93977,
    "countryCode": "US",
    "population": 54395
  },
  {
    "id": "42.263L-71.802",
    "name": "Worcester",
    "lat": 42.26259,
    "lng": -71.80229,
    "countryCode": "US",
    "population": 184815
  },
  {
    "id": "43.661L-70.255",
    "name": "Portland",
    "lat": 43.66147,
    "lng": -70.25533,
    "countryCode": "US",
    "population": 66881
  },
  {
    "id": "42.278L-83.741",
    "name": "Ann Arbor",
    "lat": 42.27756,
    "lng": -83.74088,
    "countryCode": "US",
    "population": 117070
  },
  {
    "id": "42.317L-85.178",
    "name": "Battle Creek",
    "lat": 42.3173,
    "lng": -85.17816,
    "countryCode": "US",
    "population": 51589
  },
  {
    "id": "42.309L-83.482",
    "name": "Canton",
    "lat": 42.30865,
    "lng": -83.48216,
    "countryCode": "US",
    "population": 86825
  },
  {
    "id": "42.587L-82.920",
    "name": "Clinton Township",
    "lat": 42.58698,
    "lng": -82.91992,
    "countryCode": "US",
    "population": 99753
  },
  {
    "id": "42.322L-83.176",
    "name": "Dearborn",
    "lat": 42.32226,
    "lng": -83.17631,
    "countryCode": "US",
    "population": 95171
  },
  {
    "id": "42.337L-83.273",
    "name": "Dearborn Heights",
    "lat": 42.33698,
    "lng": -83.27326,
    "countryCode": "US",
    "population": 56145
  },
  {
    "id": "42.331L-83.046",
    "name": "Detroit",
    "lat": 42.33143,
    "lng": -83.04575,
    "countryCode": "US",
    "population": 677116
  },
  {
    "id": "42.485L-83.377",
    "name": "Farmington Hills",
    "lat": 42.48531,
    "lng": -83.37716,
    "countryCode": "US",
    "population": 81330
  },
  {
    "id": "43.013L-83.687",
    "name": "Flint",
    "lat": 43.01253,
    "lng": -83.68746,
    "countryCode": "US",
    "population": 98310
  },
  {
    "id": "42.963L-85.668",
    "name": "Grand Rapids",
    "lat": 42.96336,
    "lng": -85.66809,
    "countryCode": "US",
    "population": 195097
  },
  {
    "id": "42.292L-85.587",
    "name": "Kalamazoo",
    "lat": 42.29171,
    "lng": -85.58723,
    "countryCode": "US",
    "population": 76041
  },
  {
    "id": "42.869L-85.645",
    "name": "Kentwood",
    "lat": 42.86947,
    "lng": -85.64475,
    "countryCode": "US",
    "population": 51357
  },
  {
    "id": "42.733L-84.556",
    "name": "Lansing",
    "lat": 42.73253,
    "lng": -84.55553,
    "countryCode": "US",
    "population": 115056
  },
  {
    "id": "42.368L-83.353",
    "name": "Livonia",
    "lat": 42.36837,
    "lng": -83.35271,
    "countryCode": "US",
    "population": 94635
  },
  {
    "id": "42.481L-83.475",
    "name": "Novi",
    "lat": 42.48059,
    "lng": -83.47549,
    "countryCode": "US",
    "population": 58723
  },
  {
    "id": "42.639L-83.291",
    "name": "Pontiac",
    "lat": 42.63892,
    "lng": -83.29105,
    "countryCode": "US",
    "population": 59917
  },
  {
    "id": "42.658L-83.150",
    "name": "Rochester Hills",
    "lat": 42.65837,
    "lng": -83.14993,
    "countryCode": "US",
    "population": 73424
  },
  {
    "id": "42.489L-83.145",
    "name": "Royal Oak",
    "lat": 42.48948,
    "lng": -83.14465,
    "countryCode": "US",
    "population": 59008
  },
  {
    "id": "42.671L-83.033",
    "name": "Shelby",
    "lat": 42.67087,
    "lng": -83.03298,
    "countryCode": "US",
    "population": 74099
  },
  {
    "id": "42.473L-83.222",
    "name": "Southfield",
    "lat": 42.47337,
    "lng": -83.22187,
    "countryCode": "US",
    "population": 73156
  },
  {
    "id": "42.497L-82.889",
    "name": "Saint Clair Shores",
    "lat": 42.49698,
    "lng": -82.88881,
    "countryCode": "US",
    "population": 59715
  },
  {
    "id": "42.580L-83.030",
    "name": "Sterling Heights",
    "lat": 42.58031,
    "lng": -83.0302,
    "countryCode": "US",
    "population": 132052
  },
  {
    "id": "42.241L-83.270",
    "name": "Taylor",
    "lat": 42.24087,
    "lng": -83.26965,
    "countryCode": "US",
    "population": 61568
  },
  {
    "id": "42.606L-83.150",
    "name": "Troy",
    "lat": 42.60559,
    "lng": -83.14993,
    "countryCode": "US",
    "population": 83280
  },
  {
    "id": "42.490L-83.013",
    "name": "Warren",
    "lat": 42.49044,
    "lng": -83.01304,
    "countryCode": "US",
    "population": 134056
  },
  {
    "id": "42.693L-83.412",
    "name": "Waterford",
    "lat": 42.69303,
    "lng": -83.41181,
    "countryCode": "US",
    "population": 75737
  },
  {
    "id": "42.324L-83.400",
    "name": "Westland",
    "lat": 42.3242,
    "lng": -83.40021,
    "countryCode": "US",
    "population": 82000
  },
  {
    "id": "42.913L-85.705",
    "name": "Wyoming",
    "lat": 42.91336,
    "lng": -85.70531,
    "countryCode": "US",
    "population": 75275
  },
  {
    "id": "44.732L-93.218",
    "name": "Apple Valley",
    "lat": 44.73191,
    "lng": -93.21772,
    "countryCode": "US",
    "population": 51221
  },
  {
    "id": "45.161L-93.235",
    "name": "Blaine",
    "lat": 45.1608,
    "lng": -93.23495,
    "countryCode": "US",
    "population": 62124
  },
  {
    "id": "44.841L-93.298",
    "name": "Bloomington",
    "lat": 44.8408,
    "lng": -93.29828,
    "countryCode": "US",
    "population": 86435
  },
  {
    "id": "45.094L-93.356",
    "name": "Brooklyn Park",
    "lat": 45.09413,
    "lng": -93.35634,
    "countryCode": "US",
    "population": 79149
  },
  {
    "id": "44.768L-93.278",
    "name": "Burnsville",
    "lat": 44.76774,
    "lng": -93.27772,
    "countryCode": "US",
    "population": 61481
  },
  {
    "id": "45.120L-93.288",
    "name": "Coon Rapids",
    "lat": 45.11997,
    "lng": -93.28773,
    "countryCode": "US",
    "population": 62240
  },
  {
    "id": "46.783L-92.107",
    "name": "Duluth",
    "lat": 46.78327,
    "lng": -92.10658,
    "countryCode": "US",
    "population": 86110
  },
  {
    "id": "44.804L-93.167",
    "name": "Eagan",
    "lat": 44.80413,
    "lng": -93.16689,
    "countryCode": "US",
    "population": 66286
  },
  {
    "id": "44.855L-93.471",
    "name": "Eden Prairie",
    "lat": 44.85469,
    "lng": -93.47079,
    "countryCode": "US",
    "population": 63496
  },
  {
    "id": "44.890L-93.350",
    "name": "Edina",
    "lat": 44.88969,
    "lng": -93.34995,
    "countryCode": "US",
    "population": 50138
  },
  {
    "id": "44.650L-93.243",
    "name": "Lakeville",
    "lat": 44.64969,
    "lng": -93.24272,
    "countryCode": "US",
    "population": 60633
  },
  {
    "id": "45.072L-93.456",
    "name": "Maple Grove",
    "lat": 45.07246,
    "lng": -93.45579,
    "countryCode": "US",
    "population": 68385
  },
  {
    "id": "44.980L-93.264",
    "name": "Minneapolis",
    "lat": 44.97997,
    "lng": -93.26384,
    "countryCode": "US",
    "population": 410939
  },
  {
    "id": "44.913L-93.503",
    "name": "Minnetonka",
    "lat": 44.9133,
    "lng": -93.50329,
    "countryCode": "US",
    "population": 51669
  },
  {
    "id": "44.941L-93.442",
    "name": "Minnetonka Mills",
    "lat": 44.94107,
    "lng": -93.4419,
    "countryCode": "US",
    "population": 50117
  },
  {
    "id": "45.011L-93.456",
    "name": "Plymouth",
    "lat": 45.01052,
    "lng": -93.45551,
    "countryCode": "US",
    "population": 75907
  },
  {
    "id": "44.022L-92.470",
    "name": "Rochester",
    "lat": 44.02163,
    "lng": -92.4699,
    "countryCode": "US",
    "population": 112225
  },
  {
    "id": "45.561L-94.162",
    "name": "Saint Cloud",
    "lat": 45.5608,
    "lng": -94.16249,
    "countryCode": "US",
    "population": 65842
  },
  {
    "id": "44.944L-93.093",
    "name": "Saint Paul",
    "lat": 44.94441,
    "lng": -93.09327,
    "countryCode": "US",
    "population": 285068
  },
  {
    "id": "45.160L-93.350",
    "name": "West Coon Rapids",
    "lat": 45.15969,
    "lng": -93.34967,
    "countryCode": "US",
    "population": 62528
  },
  {
    "id": "44.924L-92.959",
    "name": "Woodbury",
    "lat": 44.92386,
    "lng": -92.95938,
    "countryCode": "US",
    "population": 67855
  },
  {
    "id": "46.877L-96.790",
    "name": "Fargo",
    "lat": 46.87719,
    "lng": -96.7898,
    "countryCode": "US",
    "population": 118523
  },
  {
    "id": "47.925L-97.033",
    "name": "Grand Forks",
    "lat": 47.92526,
    "lng": -97.03285,
    "countryCode": "US",
    "population": 57011
  },
  {
    "id": "41.137L-95.891",
    "name": "Bellevue",
    "lat": 41.13667,
    "lng": -95.89084,
    "countryCode": "US",
    "population": 55510
  },
  {
    "id": "40.925L-98.342",
    "name": "Grand Island",
    "lat": 40.92501,
    "lng": -98.34201,
    "countryCode": "US",
    "population": 51440
  },
  {
    "id": "40.800L-96.667",
    "name": "Lincoln",
    "lat": 40.8,
    "lng": -96.66696,
    "countryCode": "US",
    "population": 277348
  },
  {
    "id": "41.256L-95.940",
    "name": "Omaha",
    "lat": 41.25626,
    "lng": -95.94043,
    "countryCode": "US",
    "population": 443885
  },
  {
    "id": "42.996L-71.455",
    "name": "Manchester",
    "lat": 42.99564,
    "lng": -71.45479,
    "countryCode": "US",
    "population": 110229
  },
  {
    "id": "42.765L-71.468",
    "name": "Nashua",
    "lat": 42.76537,
    "lng": -71.46757,
    "countryCode": "US",
    "population": 87970
  },
  {
    "id": "40.669L-74.114",
    "name": "Bayonne",
    "lat": 40.66871,
    "lng": -74.11431,
    "countryCode": "US",
    "population": 66311
  },
  {
    "id": "40.858L-74.164",
    "name": "Clifton",
    "lat": 40.85843,
    "lng": -74.16376,
    "countryCode": "US",
    "population": 86334
  },
  {
    "id": "40.767L-74.205",
    "name": "East Orange",
    "lat": 40.76732,
    "lng": -74.20487,
    "countryCode": "US",
    "population": 64949
  },
  {
    "id": "40.519L-74.412",
    "name": "Edison",
    "lat": 40.51872,
    "lng": -74.4121,
    "countryCode": "US",
    "population": 102548
  },
  {
    "id": "40.664L-74.211",
    "name": "Elizabeth",
    "lat": 40.66399,
    "lng": -74.2107,
    "countryCode": "US",
    "population": 129007
  },
  {
    "id": "40.744L-74.032",
    "name": "Hoboken",
    "lat": 40.74399,
    "lng": -74.03236,
    "countryCode": "US",
    "population": 53635
  },
  {
    "id": "40.732L-74.235",
    "name": "Irvington",
    "lat": 40.73232,
    "lng": -74.23487,
    "countryCode": "US",
    "population": 61323
  },
  {
    "id": "40.728L-74.078",
    "name": "Jersey City",
    "lat": 40.72816,
    "lng": -74.07764,
    "countryCode": "US",
    "population": 264290
  },
  {
    "id": "40.098L-74.218",
    "name": "Lakewood",
    "lat": 40.09789,
    "lng": -74.21764,
    "countryCode": "US",
    "population": 53805
  },
  {
    "id": "40.486L-74.452",
    "name": "New Brunswick",
    "lat": 40.48622,
    "lng": -74.45182,
    "countryCode": "US",
    "population": 57035
  },
  {
    "id": "40.736L-74.172",
    "name": "Newark",
    "lat": 40.73566,
    "lng": -74.17237,
    "countryCode": "US",
    "population": 281944
  },
  {
    "id": "40.804L-74.012",
    "name": "North Bergen",
    "lat": 40.80427,
    "lng": -74.01208,
    "countryCode": "US",
    "population": 63484
  },
  {
    "id": "40.858L-74.426",
    "name": "Parsippany",
    "lat": 40.85788,
    "lng": -74.42599,
    "countryCode": "US",
    "population": 51144
  },
  {
    "id": "40.857L-74.128",
    "name": "Passaic",
    "lat": 40.85677,
    "lng": -74.12848,
    "countryCode": "US",
    "population": 71085
  },
  {
    "id": "40.917L-74.172",
    "name": "Paterson",
    "lat": 40.91677,
    "lng": -74.17181,
    "countryCode": "US",
    "population": 147754
  },
  {
    "id": "40.507L-74.265",
    "name": "Perth Amboy",
    "lat": 40.50677,
    "lng": -74.26542,
    "countryCode": "US",
    "population": 52682
  },
  {
    "id": "40.499L-74.399",
    "name": "Piscataway",
    "lat": 40.49927,
    "lng": -74.39904,
    "countryCode": "US",
    "population": 56044
  },
  {
    "id": "40.634L-74.407",
    "name": "Plainfield",
    "lat": 40.63371,
    "lng": -74.40737,
    "countryCode": "US",
    "population": 51217
  },
  {
    "id": "40.217L-74.743",
    "name": "Trenton",
    "lat": 40.21705,
    "lng": -74.74294,
    "countryCode": "US",
    "population": 84225
  },
  {
    "id": "40.698L-74.263",
    "name": "Union",
    "lat": 40.6976,
    "lng": -74.2632,
    "countryCode": "US",
    "population": 56771
  },
  {
    "id": "40.780L-74.024",
    "name": "Union City",
    "lat": 40.77955,
    "lng": -74.02375,
    "countryCode": "US",
    "population": 69156
  },
  {
    "id": "40.925L-74.277",
    "name": "Wayne",
    "lat": 40.92538,
    "lng": -74.27654,
    "countryCode": "US",
    "population": 57915
  },
  {
    "id": "40.788L-74.014",
    "name": "West New York",
    "lat": 40.78788,
    "lng": -74.01431,
    "countryCode": "US",
    "population": 53366
  },
  {
    "id": "42.653L-73.756",
    "name": "Albany",
    "lat": 42.65258,
    "lng": -73.75623,
    "countryCode": "US",
    "population": 98469
  },
  {
    "id": "42.978L-78.800",
    "name": "Amherst",
    "lat": 42.97839,
    "lng": -78.79976,
    "countryCode": "US",
    "population": 122366
  },
  {
    "id": "40.772L-73.930",
    "name": "Astoria",
    "lat": 40.77205,
    "lng": -73.93014,
    "countryCode": "US",
    "population": 150165
  },
  {
    "id": "40.768L-73.777",
    "name": "Bayside",
    "lat": 40.76844,
    "lng": -73.77708,
    "countryCode": "US",
    "population": 66455
  },
  {
    "id": "40.602L-73.994",
    "name": "Bensonhurst",
    "lat": 40.60177,
    "lng": -73.99403,
    "countryCode": "US",
    "population": 60000
  },
  {
    "id": "40.634L-73.997",
    "name": "Borough Park",
    "lat": 40.63399,
    "lng": -73.99681,
    "countryCode": "US",
    "population": 149248
  },
  {
    "id": "40.781L-73.246",
    "name": "Brentwood",
    "lat": 40.78121,
    "lng": -73.24623,
    "countryCode": "US",
    "population": 60664
  },
  {
    "id": "40.850L-73.866",
    "name": "The Bronx",
    "lat": 40.84985,
    "lng": -73.86641,
    "countryCode": "US",
    "population": 1385108
  },
  {
    "id": "40.650L-73.950",
    "name": "Brooklyn",
    "lat": 40.6501,
    "lng": -73.94958,
    "countryCode": "US",
    "population": 2300664
  },
  {
    "id": "40.661L-73.920",
    "name": "Brownsville",
    "lat": 40.66094,
    "lng": -73.92014,
    "countryCode": "US",
    "population": 74497
  },
  {
    "id": "42.886L-78.878",
    "name": "Buffalo",
    "lat": 42.88645,
    "lng": -78.87837,
    "countryCode": "US",
    "population": 258071
  },
  {
    "id": "40.694L-73.919",
    "name": "Bushwick",
    "lat": 40.69427,
    "lng": -73.91875,
    "countryCode": "US",
    "population": 112620
  },
  {
    "id": "40.644L-73.901",
    "name": "Canarsie",
    "lat": 40.64372,
    "lng": -73.90069,
    "countryCode": "US",
    "population": 87366
  },
  {
    "id": "42.903L-78.755",
    "name": "Cheektowaga",
    "lat": 42.90339,
    "lng": -78.75475,
    "countryCode": "US",
    "population": 75178
  },
  {
    "id": "40.578L-73.994",
    "name": "Coney Island",
    "lat": 40.57788,
    "lng": -73.99403,
    "countryCode": "US",
    "population": 60000
  },
  {
    "id": "40.747L-73.860",
    "name": "Corona",
    "lat": 40.74705,
    "lng": -73.86014,
    "countryCode": "US",
    "population": 109698
  },
  {
    "id": "40.677L-73.891",
    "name": "Cypress Hills",
    "lat": 40.67705,
    "lng": -73.89125,
    "countryCode": "US",
    "population": 54944
  },
  {
    "id": "40.654L-73.930",
    "name": "East Flatbush",
    "lat": 40.65371,
    "lng": -73.93042,
    "countryCode": "US",
    "population": 178464
  },
  {
    "id": "40.667L-73.882",
    "name": "East New York",
    "lat": 40.66677,
    "lng": -73.88236,
    "countryCode": "US",
    "population": 173198
  },
  {
    "id": "40.736L-73.878",
    "name": "Elmhurst",
    "lat": 40.73649,
    "lng": -73.87791,
    "countryCode": "US",
    "population": 113364
  },
  {
    "id": "40.652L-73.959",
    "name": "Flatbush",
    "lat": 40.65205,
    "lng": -73.95903,
    "countryCode": "US",
    "population": 93361
  },
  {
    "id": "40.621L-73.935",
    "name": "Flatlands",
    "lat": 40.62122,
    "lng": -73.93486,
    "countryCode": "US",
    "population": 63601
  },
  {
    "id": "40.859L-73.898",
    "name": "Fordham",
    "lat": 40.85927,
    "lng": -73.89847,
    "countryCode": "US",
    "population": 94678
  },
  {
    "id": "40.716L-73.850",
    "name": "Forest Hills",
    "lat": 40.71621,
    "lng": -73.85014,
    "countryCode": "US",
    "population": 67714
  },
  {
    "id": "40.598L-73.965",
    "name": "Gravesend",
    "lat": 40.5976,
    "lng": -73.96514,
    "countryCode": "US",
    "population": 112229
  },
  {
    "id": "41.033L-73.843",
    "name": "Greenburgh",
    "lat": 41.03287,
    "lng": -73.84291,
    "countryCode": "US",
    "population": 86764
  },
  {
    "id": "40.808L-73.945",
    "name": "Harlem",
    "lat": 40.80788,
    "lng": -73.94542,
    "countryCode": "US",
    "population": 181259
  },
  {
    "id": "40.706L-73.619",
    "name": "Hempstead",
    "lat": 40.70621,
    "lng": -73.61874,
    "countryCode": "US",
    "population": 55547
  },
  {
    "id": "43.213L-77.580",
    "name": "Irondequoit",
    "lat": 43.2134,
    "lng": -77.57972,
    "countryCode": "US",
    "population": 51692
  },
  {
    "id": "40.756L-73.885",
    "name": "Jackson Heights",
    "lat": 40.75566,
    "lng": -73.88541,
    "countryCode": "US",
    "population": 67067
  },
  {
    "id": "40.691L-73.806",
    "name": "Jamaica",
    "lat": 40.69149,
    "lng": -73.80569,
    "countryCode": "US",
    "population": 216866
  },
  {
    "id": "40.879L-73.905",
    "name": "Kings Bridge",
    "lat": 40.87871,
    "lng": -73.90514,
    "countryCode": "US",
    "population": 75132
  },
  {
    "id": "40.726L-73.514",
    "name": "Levittown",
    "lat": 40.72593,
    "lng": -73.51429,
    "countryCode": "US",
    "population": 51881
  },
  {
    "id": "40.783L-73.966",
    "name": "Manhattan",
    "lat": 40.78343,
    "lng": -73.96625,
    "countryCode": "US",
    "population": 1487536
  },
  {
    "id": "40.809L-73.923",
    "name": "Mott Haven",
    "lat": 40.80899,
    "lng": -73.92291,
    "countryCode": "US",
    "population": 51450
  },
  {
    "id": "40.913L-73.837",
    "name": "Mount Vernon",
    "lat": 40.9126,
    "lng": -73.83708,
    "countryCode": "US",
    "population": 68628
  },
  {
    "id": "40.911L-73.782",
    "name": "New Rochelle",
    "lat": 40.91149,
    "lng": -73.78235,
    "countryCode": "US",
    "population": 79846
  },
  {
    "id": "40.714L-74.006",
    "name": "New York City",
    "lat": 40.71427,
    "lng": -74.00597,
    "countryCode": "US",
    "population": 8175133
  },
  {
    "id": "40.677L-73.844",
    "name": "Ozone Park",
    "lat": 40.67677,
    "lng": -73.84375,
    "countryCode": "US",
    "population": 53985
  },
  {
    "id": "40.839L-73.860",
    "name": "Parkchester",
    "lat": 40.83899,
    "lng": -73.86041,
    "countryCode": "US",
    "population": 65876
  },
  {
    "id": "40.727L-73.742",
    "name": "Queens Village",
    "lat": 40.72677,
    "lng": -73.74152,
    "countryCode": "US",
    "population": 51919
  },
  {
    "id": "40.681L-73.837",
    "name": "Queens",
    "lat": 40.68149,
    "lng": -73.83652,
    "countryCode": "US",
    "population": 2272771
  },
  {
    "id": "40.700L-73.831",
    "name": "Richmond Hill",
    "lat": 40.69983,
    "lng": -73.83125,
    "countryCode": "US",
    "population": 98984
  },
  {
    "id": "43.155L-77.616",
    "name": "Rochester",
    "lat": 43.15478,
    "lng": -77.61556,
    "countryCode": "US",
    "population": 209802
  },
  {
    "id": "42.814L-73.940",
    "name": "Schenectady",
    "lat": 42.81424,
    "lng": -73.93957,
    "countryCode": "US",
    "population": 65305
  },
  {
    "id": "40.591L-73.945",
    "name": "Sheepshead Bay",
    "lat": 40.59122,
    "lng": -73.94458,
    "countryCode": "US",
    "population": 122534
  },
  {
    "id": "40.562L-74.140",
    "name": "Staten Island",
    "lat": 40.56233,
    "lng": -74.13986,
    "countryCode": "US",
    "population": 468730
  },
  {
    "id": "43.048L-76.147",
    "name": "Syracuse",
    "lat": 43.04812,
    "lng": -76.14742,
    "countryCode": "US",
    "population": 144142
  },
  {
    "id": "43.101L-75.233",
    "name": "Utica",
    "lat": 43.1009,
    "lng": -75.23266,
    "countryCode": "US",
    "population": 61100
  },
  {
    "id": "40.898L-73.852",
    "name": "Wakefield",
    "lat": 40.89788,
    "lng": -73.85236,
    "countryCode": "US",
    "population": 52201
  },
  {
    "id": "40.850L-73.935",
    "name": "Washington Heights",
    "lat": 40.8501,
    "lng": -73.93541,
    "countryCode": "US",
    "population": 152613
  },
  {
    "id": "42.683L-73.778",
    "name": "West Albany",
    "lat": 42.68313,
    "lng": -73.77845,
    "countryCode": "US",
    "population": 93794
  },
  {
    "id": "41.034L-73.763",
    "name": "White Plains",
    "lat": 41.03399,
    "lng": -73.76291,
    "countryCode": "US",
    "population": 58459
  },
  {
    "id": "40.931L-73.899",
    "name": "Yonkers",
    "lat": 40.93121,
    "lng": -73.89875,
    "countryCode": "US",
    "population": 201116
  },
  {
    "id": "41.081L-81.519",
    "name": "Akron",
    "lat": 41.08144,
    "lng": -81.51901,
    "countryCode": "US",
    "population": 197542
  },
  {
    "id": "40.799L-81.378",
    "name": "Canton",
    "lat": 40.79895,
    "lng": -81.37845,
    "countryCode": "US",
    "population": 71885
  },
  {
    "id": "41.499L-81.695",
    "name": "Cleveland",
    "lat": 41.4995,
    "lng": -81.69541,
    "countryCode": "US",
    "population": 388072
  },
  {
    "id": "41.368L-82.108",
    "name": "Elyria",
    "lat": 41.36838,
    "lng": -82.10765,
    "countryCode": "US",
    "population": 53775
  },
  {
    "id": "41.482L-81.798",
    "name": "Lakewood",
    "lat": 41.48199,
    "lng": -81.79819,
    "countryCode": "US",
    "population": 50656
  },
  {
    "id": "41.453L-82.182",
    "name": "Lorain",
    "lat": 41.45282,
    "lng": -82.18237,
    "countryCode": "US",
    "population": 63647
  },
  {
    "id": "41.405L-81.723",
    "name": "Parma",
    "lat": 41.40477,
    "lng": -81.72291,
    "countryCode": "US",
    "population": 79937
  },
  {
    "id": "41.664L-83.555",
    "name": "Toledo",
    "lat": 41.66394,
    "lng": -83.55521,
    "countryCode": "US",
    "population": 279789
  },
  {
    "id": "41.100L-80.650",
    "name": "Youngstown",
    "lat": 41.09978,
    "lng": -80.64952,
    "countryCode": "US",
    "population": 64628
  },
  {
    "id": "40.608L-75.490",
    "name": "Allentown",
    "lat": 40.60843,
    "lng": -75.49018,
    "countryCode": "US",
    "population": 120207
  },
  {
    "id": "40.626L-75.370",
    "name": "Bethlehem",
    "lat": 40.62593,
    "lng": -75.37046,
    "countryCode": "US",
    "population": 74892
  },
  {
    "id": "42.129L-80.085",
    "name": "Erie",
    "lat": 42.12922,
    "lng": -80.08506,
    "countryCode": "US",
    "population": 99475
  },
  {
    "id": "40.038L-76.306",
    "name": "Lancaster",
    "lat": 40.03788,
    "lng": -76.30551,
    "countryCode": "US",
    "population": 59339
  },
  {
    "id": "40.155L-74.829",
    "name": "Levittown",
    "lat": 40.15511,
    "lng": -74.82877,
    "countryCode": "US",
    "population": 52983
  },
  {
    "id": "40.441L-79.996",
    "name": "Pittsburgh",
    "lat": 40.44062,
    "lng": -79.99589,
    "countryCode": "US",
    "population": 304391
  },
  {
    "id": "40.336L-75.927",
    "name": "Reading",
    "lat": 40.33565,
    "lng": -75.92687,
    "countryCode": "US",
    "population": 87879
  },
  {
    "id": "41.409L-75.665",
    "name": "Scranton",
    "lat": 41.40916,
    "lng": -75.6649,
    "countryCode": "US",
    "population": 77118
  },
  {
    "id": "41.780L-71.437",
    "name": "Cranston",
    "lat": 41.77982,
    "lng": -71.43728,
    "countryCode": "US",
    "population": 81073
  },
  {
    "id": "41.879L-71.383",
    "name": "Pawtucket",
    "lat": 41.87871,
    "lng": -71.38256,
    "countryCode": "US",
    "population": 71591
  },
  {
    "id": "41.824L-71.413",
    "name": "Providence",
    "lat": 41.82399,
    "lng": -71.41283,
    "countryCode": "US",
    "population": 179207
  },
  {
    "id": "41.700L-71.416",
    "name": "Warwick",
    "lat": 41.7001,
    "lng": -71.41617,
    "countryCode": "US",
    "population": 81699
  },
  {
    "id": "43.550L-96.700",
    "name": "Sioux Falls",
    "lat": 43.54997,
    "lng": -96.70033,
    "countryCode": "US",
    "population": 171544
  },
  {
    "id": "44.262L-88.415",
    "name": "Appleton",
    "lat": 44.26193,
    "lng": -88.41538,
    "countryCode": "US",
    "population": 74139
  },
  {
    "id": "44.811L-91.498",
    "name": "Eau Claire",
    "lat": 44.81135,
    "lng": -91.49849,
    "countryCode": "US",
    "population": 67778
  },
  {
    "id": "44.519L-88.020",
    "name": "Green Bay",
    "lat": 44.51916,
    "lng": -88.01983,
    "countryCode": "US",
    "population": 105207
  },
  {
    "id": "42.683L-89.019",
    "name": "Janesville",
    "lat": 42.68279,
    "lng": -89.01872,
    "countryCode": "US",
    "population": 64123
  },
  {
    "id": "42.585L-87.821",
    "name": "Kenosha",
    "lat": 42.58474,
    "lng": -87.82119,
    "countryCode": "US",
    "population": 99858
  },
  {
    "id": "43.801L-91.240",
    "name": "La Crosse",
    "lat": 43.80136,
    "lng": -91.23958,
    "countryCode": "US",
    "population": 52306
  },
  {
    "id": "43.073L-89.401",
    "name": "Madison",
    "lat": 43.07305,
    "lng": -89.40123,
    "countryCode": "US",
    "population": 248951
  },
  {
    "id": "43.039L-87.906",
    "name": "Milwaukee",
    "lat": 43.0389,
    "lng": -87.90647,
    "countryCode": "US",
    "population": 600155
  },
  {
    "id": "43.846L-91.248",
    "name": "North La Crosse",
    "lat": 43.84635,
    "lng": -91.24819,
    "countryCode": "US",
    "population": 50470
  },
  {
    "id": "44.025L-88.543",
    "name": "Oshkosh",
    "lat": 44.02471,
    "lng": -88.54261,
    "countryCode": "US",
    "population": 66555
  },
  {
    "id": "42.726L-87.783",
    "name": "Racine",
    "lat": 42.72613,
    "lng": -87.78285,
    "countryCode": "US",
    "population": 77742
  },
  {
    "id": "43.012L-88.231",
    "name": "Waukesha",
    "lat": 43.01168,
    "lng": -88.23148,
    "countryCode": "US",
    "population": 71970
  },
  {
    "id": "43.017L-88.007",
    "name": "West Allis",
    "lat": 43.01668,
    "lng": -88.00703,
    "countryCode": "US",
    "population": 60620
  },
  {
    "id": "41.167L-73.205",
    "name": "Bridgeport",
    "lat": 41.16704,
    "lng": -73.20483,
    "countryCode": "US",
    "population": 147629
  },
  {
    "id": "41.672L-72.949",
    "name": "Bristol",
    "lat": 41.67176,
    "lng": -72.94927,
    "countryCode": "US",
    "population": 60452
  },
  {
    "id": "33.370L-112.584",
    "name": "Buckeye",
    "lat": 33.37032,
    "lng": -112.58378,
    "countryCode": "US",
    "population": 50876
  },
  {
    "id": "32.880L-111.757",
    "name": "Casa Grande",
    "lat": 32.8795,
    "lng": -111.75735,
    "countryCode": "US",
    "population": 51460
  },
  {
    "id": "32.323L-110.995",
    "name": "Casas Adobes",
    "lat": 32.32341,
    "lng": -110.9951,
    "countryCode": "US",
    "population": 66795
  },
  {
    "id": "32.298L-110.919",
    "name": "Catalina Foothills",
    "lat": 32.29785,
    "lng": -110.9187,
    "countryCode": "US",
    "population": 50796
  },
  {
    "id": "33.306L-111.841",
    "name": "Chandler",
    "lat": 33.30616,
    "lng": -111.84125,
    "countryCode": "US",
    "population": 260828
  },
  {
    "id": "35.198L-111.651",
    "name": "Flagstaff",
    "lat": 35.19807,
    "lng": -111.65127,
    "countryCode": "US",
    "population": 70320
  },
  {
    "id": "33.353L-111.789",
    "name": "Gilbert",
    "lat": 33.35283,
    "lng": -111.78903,
    "countryCode": "US",
    "population": 247542
  },
  {
    "id": "33.539L-112.186",
    "name": "Glendale",
    "lat": 33.53865,
    "lng": -112.18599,
    "countryCode": "US",
    "population": 240126
  },
  {
    "id": "33.435L-112.358",
    "name": "Goodyear",
    "lat": 33.43532,
    "lng": -112.35821,
    "countryCode": "US",
    "population": 79003
  },
  {
    "id": "34.484L-114.322",
    "name": "Lake Havasu City",
    "lat": 34.4839,
    "lng": -114.32245,
    "countryCode": "US",
    "population": 53553
  },
  {
    "id": "33.422L-111.823",
    "name": "Mesa",
    "lat": 33.42227,
    "lng": -111.82264,
    "countryCode": "US",
    "population": 471825
  },
  {
    "id": "33.581L-112.237",
    "name": "Peoria",
    "lat": 33.5806,
    "lng": -112.23738,
    "countryCode": "US",
    "population": 171237
  },
  {
    "id": "33.448L-112.074",
    "name": "Phoenix",
    "lat": 33.44838,
    "lng": -112.07404,
    "countryCode": "US",
    "population": 1563025
  },
  {
    "id": "33.509L-111.899",
    "name": "Scottsdale",
    "lat": 33.50921,
    "lng": -111.89903,
    "countryCode": "US",
    "population": 236839
  },
  {
    "id": "33.631L-112.333",
    "name": "Surprise",
    "lat": 33.63059,
    "lng": -112.33322,
    "countryCode": "US",
    "population": 128422
  },
  {
    "id": "33.415L-111.909",
    "name": "Tempe",
    "lat": 33.41477,
    "lng": -111.90931,
    "countryCode": "US",
    "population": 175826
  },
  {
    "id": "33.414L-111.943",
    "name": "Tempe Junction",
    "lat": 33.41421,
    "lng": -111.94348,
    "countryCode": "US",
    "population": 158368
  },
  {
    "id": "32.222L-110.926",
    "name": "Tucson",
    "lat": 32.22174,
    "lng": -110.92648,
    "countryCode": "US",
    "population": 531641
  },
  {
    "id": "32.725L-114.624",
    "name": "Yuma",
    "lat": 32.72532,
    "lng": -114.6244,
    "countryCode": "US",
    "population": 94139
  },
  {
    "id": "37.765L-122.242",
    "name": "Alameda",
    "lat": 37.76521,
    "lng": -122.24164,
    "countryCode": "US",
    "population": 78630
  },
  {
    "id": "34.095L-118.127",
    "name": "Alhambra",
    "lat": 34.09529,
    "lng": -118.12701,
    "countryCode": "US",
    "population": 85551
  },
  {
    "id": "33.565L-117.727",
    "name": "Aliso Viejo",
    "lat": 33.56504,
    "lng": -117.72712,
    "countryCode": "US",
    "population": 50195
  },
  {
    "id": "33.835L-117.915",
    "name": "Anaheim",
    "lat": 33.83529,
    "lng": -117.9145,
    "countryCode": "US",
    "population": 350742
  },
  {
    "id": "38.005L-121.806",
    "name": "Antioch",
    "lat": 38.00492,
    "lng": -121.80579,
    "countryCode": "US",
    "population": 110542
  },
  {
    "id": "34.501L-117.186",
    "name": "Apple Valley",
    "lat": 34.50083,
    "lng": -117.18588,
    "countryCode": "US",
    "population": 72174
  },
  {
    "id": "34.140L-118.035",
    "name": "Arcadia",
    "lat": 34.13973,
    "lng": -118.03534,
    "countryCode": "US",
    "population": 58408
  },
  {
    "id": "35.373L-119.019",
    "name": "Bakersfield",
    "lat": 35.37329,
    "lng": -119.01871,
    "countryCode": "US",
    "population": 373640
  },
  {
    "id": "34.085L-117.961",
    "name": "Baldwin Park",
    "lat": 34.08529,
    "lng": -117.9609,
    "countryCode": "US",
    "population": 77071
  },
  {
    "id": "33.882L-118.117",
    "name": "Bellflower",
    "lat": 33.88168,
    "lng": -118.11701,
    "countryCode": "US",
    "population": 78441
  },
  {
    "id": "37.872L-122.273",
    "name": "Berkeley",
    "lat": 37.87159,
    "lng": -122.27275,
    "countryCode": "US",
    "population": 120972
  },
  {
    "id": "34.034L-118.205",
    "name": "Boyle Heights",
    "lat": 34.0339,
    "lng": -118.20535,
    "countryCode": "US",
    "population": 92785
  },
  {
    "id": "37.932L-121.696",
    "name": "Brentwood",
    "lat": 37.93187,
    "lng": -121.69579,
    "countryCode": "US",
    "population": 58968
  },
  {
    "id": "33.868L-117.998",
    "name": "Buena Park",
    "lat": 33.86751,
    "lng": -117.99812,
    "countryCode": "US",
    "population": 83270
  },
  {
    "id": "34.181L-118.309",
    "name": "Burbank",
    "lat": 34.18084,
    "lng": -118.30897,
    "countryCode": "US",
    "population": 105319
  },
  {
    "id": "34.216L-119.038",
    "name": "Camarillo",
    "lat": 34.21639,
    "lng": -119.0376,
    "countryCode": "US",
    "population": 67608
  },
  {
    "id": "34.201L-118.598",
    "name": "Canoga Park",
    "lat": 34.20112,
    "lng": -118.59814,
    "countryCode": "US",
    "population": 60578
  },
  {
    "id": "33.158L-117.351",
    "name": "Carlsbad",
    "lat": 33.15809,
    "lng": -117.35059,
    "countryCode": "US",
    "population": 113453
  },
  {
    "id": "38.617L-121.328",
    "name": "Carmichael",
    "lat": 38.61713,
    "lng": -121.32828,
    "countryCode": "US",
    "population": 61762
  },
  {
    "id": "33.831L-118.282",
    "name": "Carson",
    "lat": 33.83141,
    "lng": -118.28202,
    "countryCode": "US",
    "population": 93281
  },
  {
    "id": "37.694L-122.086",
    "name": "Castro Valley",
    "lat": 37.6941,
    "lng": -122.08635,
    "countryCode": "US",
    "population": 61388
  },
  {
    "id": "33.780L-116.465",
    "name": "Cathedral City",
    "lat": 33.77974,
    "lng": -116.46529,
    "countryCode": "US",
    "population": 53826
  },
  {
    "id": "39.728L-121.837",
    "name": "Chico",
    "lat": 39.72849,
    "lng": -121.83748,
    "countryCode": "US",
    "population": 90316
  },
  {
    "id": "34.012L-117.689",
    "name": "Chino",
    "lat": 34.01223,
    "lng": -117.68894,
    "countryCode": "US",
    "population": 85595
  },
  {
    "id": "33.994L-117.759",
    "name": "Chino Hills",
    "lat": 33.9938,
    "lng": -117.75888,
    "countryCode": "US",
    "population": 78309
  },
  {
    "id": "32.640L-117.084",
    "name": "Chula Vista",
    "lat": 32.64005,
    "lng": -117.0842,
    "countryCode": "US",
    "population": 265757
  },
  {
    "id": "38.707L-121.281",
    "name": "Citrus Heights",
    "lat": 38.70712,
    "lng": -121.28106,
    "countryCode": "US",
    "population": 87056
  },
  {
    "id": "36.825L-119.703",
    "name": "Clovis",
    "lat": 36.82523,
    "lng": -119.70292,
    "countryCode": "US",
    "population": 104180
  },
  {
    "id": "34.074L-117.314",
    "name": "Colton",
    "lat": 34.0739,
    "lng": -117.31365,
    "countryCode": "US",
    "population": 54621
  },
  {
    "id": "33.896L-118.220",
    "name": "Compton",
    "lat": 33.89585,
    "lng": -118.22007,
    "countryCode": "US",
    "population": 98462
  },
  {
    "id": "37.978L-122.031",
    "name": "Concord",
    "lat": 37.97798,
    "lng": -122.03107,
    "countryCode": "US",
    "population": 128667
  },
  {
    "id": "33.875L-117.566",
    "name": "Corona",
    "lat": 33.87529,
    "lng": -117.56644,
    "countryCode": "US",
    "population": 164226
  },
  {
    "id": "33.641L-117.919",
    "name": "Costa Mesa",
    "lat": 33.64113,
    "lng": -117.91867,
    "countryCode": "US",
    "population": 113204
  },
  {
    "id": "37.323L-122.032",
    "name": "Cupertino",
    "lat": 37.323,
    "lng": -122.03218,
    "countryCode": "US",
    "population": 60572
  },
  {
    "id": "37.706L-122.462",
    "name": "Daly City",
    "lat": 37.70577,
    "lng": -122.46192,
    "countryCode": "US",
    "population": 106562
  },
  {
    "id": "38.545L-121.741",
    "name": "Davis",
    "lat": 38.54491,
    "lng": -121.74052,
    "countryCode": "US",
    "population": 67666
  },
  {
    "id": "35.769L-119.247",
    "name": "Delano",
    "lat": 35.76884,
    "lng": -119.24705,
    "countryCode": "US",
    "population": 52733
  },
  {
    "id": "34.029L-117.810",
    "name": "Diamond Bar",
    "lat": 34.02862,
    "lng": -117.81034,
    "countryCode": "US",
    "population": 56897
  },
  {
    "id": "33.940L-118.133",
    "name": "Downey",
    "lat": 33.94001,
    "lng": -118.13257,
    "countryCode": "US",
    "population": 114219
  },
  {
    "id": "37.702L-121.936",
    "name": "Dublin",
    "lat": 37.70215,
    "lng": -121.93579,
    "countryCode": "US",
    "population": 57721
  },
  {
    "id": "34.024L-118.172",
    "name": "East Los Angeles",
    "lat": 34.0239,
    "lng": -118.17202,
    "countryCode": "US",
    "population": 126496
  },
  {
    "id": "32.795L-116.963",
    "name": "El Cajon",
    "lat": 32.79477,
    "lng": -116.96253,
    "countryCode": "US",
    "population": 103679
  },
  {
    "id": "34.069L-118.028",
    "name": "El Monte",
    "lat": 34.06862,
    "lng": -118.02757,
    "countryCode": "US",
    "population": 116732
  },
  {
    "id": "38.409L-121.372",
    "name": "Elk Grove",
    "lat": 38.4088,
    "lng": -121.37162,
    "countryCode": "US",
    "population": 166913
  },
  {
    "id": "33.037L-117.292",
    "name": "Encinitas",
    "lat": 33.03699,
    "lng": -117.29198,
    "countryCode": "US",
    "population": 62930
  },
  {
    "id": "33.119L-117.086",
    "name": "Escondido",
    "lat": 33.11921,
    "lng": -117.08642,
    "countryCode": "US",
    "population": 151451
  },
  {
    "id": "38.249L-122.040",
    "name": "Fairfield",
    "lat": 38.24936,
    "lng": -122.03997,
    "countryCode": "US",
    "population": 112970
  },
  {
    "id": "38.678L-121.176",
    "name": "Folsom",
    "lat": 38.67796,
    "lng": -121.17606,
    "countryCode": "US",
    "population": 76375
  },
  {
    "id": "34.092L-117.435",
    "name": "Fontana",
    "lat": 34.09223,
    "lng": -117.43505,
    "countryCode": "US",
    "population": 207460
  },
  {
    "id": "33.709L-117.954",
    "name": "Fountain Valley",
    "lat": 33.70918,
    "lng": -117.95367,
    "countryCode": "US",
    "population": 56987
  },
  {
    "id": "37.548L-121.989",
    "name": "Fremont",
    "lat": 37.54827,
    "lng": -121.98857,
    "countryCode": "US",
    "population": 232206
  },
  {
    "id": "36.748L-119.772",
    "name": "Fresno",
    "lat": 36.74773,
    "lng": -119.77237,
    "countryCode": "US",
    "population": 520052
  },
  {
    "id": "33.870L-117.925",
    "name": "Fullerton",
    "lat": 33.87029,
    "lng": -117.92534,
    "countryCode": "US",
    "population": 140847
  },
  {
    "id": "33.774L-117.941",
    "name": "Garden Grove",
    "lat": 33.77391,
    "lng": -117.94145,
    "countryCode": "US",
    "population": 175393
  },
  {
    "id": "33.888L-118.309",
    "name": "Gardena",
    "lat": 33.88835,
    "lng": -118.30896,
    "countryCode": "US",
    "population": 60447
  },
  {
    "id": "37.006L-121.568",
    "name": "Gilroy",
    "lat": 37.00578,
    "lng": -121.56828,
    "countryCode": "US",
    "population": 53231
  },
  {
    "id": "34.143L-118.255",
    "name": "Glendale",
    "lat": 34.14251,
    "lng": -118.25508,
    "countryCode": "US",
    "population": 201020
  },
  {
    "id": "34.136L-117.865",
    "name": "Glendora",
    "lat": 34.13612,
    "lng": -117.86534,
    "countryCode": "US",
    "population": 52009
  },
  {
    "id": "33.993L-117.969",
    "name": "Hacienda Heights",
    "lat": 33.99307,
    "lng": -117.96868,
    "countryCode": "US",
    "population": 54038
  },
  {
    "id": "36.327L-119.646",
    "name": "Hanford",
    "lat": 36.32745,
    "lng": -119.64568,
    "countryCode": "US",
    "population": 55659
  },
  {
    "id": "33.916L-118.353",
    "name": "Hawthorne",
    "lat": 33.9164,
    "lng": -118.35257,
    "countryCode": "US",
    "population": 88451
  },
  {
    "id": "37.669L-122.081",
    "name": "Hayward",
    "lat": 37.66882,
    "lng": -122.0808,
    "countryCode": "US",
    "population": 158289
  },
  {
    "id": "33.748L-116.973",
    "name": "Hemet",
    "lat": 33.74761,
    "lng": -116.97307,
    "countryCode": "US",
    "population": 83861
  },
  {
    "id": "34.426L-117.301",
    "name": "Hesperia",
    "lat": 34.42639,
    "lng": -117.30088,
    "countryCode": "US",
    "population": 93295
  },
  {
    "id": "34.128L-117.209",
    "name": "Highland",
    "lat": 34.12834,
    "lng": -117.20865,
    "countryCode": "US",
    "population": 54854
  },
  {
    "id": "34.098L-118.327",
    "name": "Hollywood",
    "lat": 34.09834,
    "lng": -118.32674,
    "countryCode": "US",
    "population": 167664
  },
  {
    "id": "33.660L-117.999",
    "name": "Huntington Beach",
    "lat": 33.6603,
    "lng": -117.99923,
    "countryCode": "US",
    "population": 201899
  },
  {
    "id": "33.982L-118.225",
    "name": "Huntington Park",
    "lat": 33.98168,
    "lng": -118.22507,
    "countryCode": "US",
    "population": 59430
  },
  {
    "id": "33.721L-116.217",
    "name": "Indio",
    "lat": 33.7207,
    "lng": -116.21677,
    "countryCode": "US",
    "population": 87533
  },
  {
    "id": "33.962L-118.353",
    "name": "Inglewood",
    "lat": 33.96168,
    "lng": -118.35313,
    "countryCode": "US",
    "population": 111666
  },
  {
    "id": "37.682L-121.768",
    "name": "Irvine",
    "lat": 37.68187,
    "lng": -121.76801,
    "countryCode": "US",
    "population": 88126
  },
  {
    "id": "38.130L-121.272",
    "name": "Lodi",
    "lat": 38.1302,
    "lng": -121.27245,
    "countryCode": "US",
    "population": 64596
  },
  {
    "id": "33.767L-118.189",
    "name": "Long Beach",
    "lat": 33.76696,
    "lng": -118.18923,
    "countryCode": "US",
    "population": 474140
  },
  {
    "id": "34.052L-118.244",
    "name": "Los Angeles",
    "lat": 34.05223,
    "lng": -118.24368,
    "countryCode": "US",
    "population": 3971883
  },
  {
    "id": "33.930L-118.211",
    "name": "Lynwood",
    "lat": 33.93029,
    "lng": -118.21146,
    "countryCode": "US",
    "population": 71989
  },
  {
    "id": "36.961L-120.061",
    "name": "Madera",
    "lat": 36.96134,
    "lng": -120.06072,
    "countryCode": "US",
    "population": 64208
  },
  {
    "id": "37.797L-121.216",
    "name": "Manteca",
    "lat": 37.79743,
    "lng": -121.21605,
    "countryCode": "US",
    "population": 75448
  },
  {
    "id": "33.728L-117.146",
    "name": "Menifee",
    "lat": 33.72835,
    "lng": -117.14642,
    "countryCode": "US",
    "population": 87174
  },
  {
    "id": "37.302L-120.483",
    "name": "Merced",
    "lat": 37.30216,
    "lng": -120.48297,
    "countryCode": "US",
    "population": 82436
  },
  {
    "id": "37.428L-121.907",
    "name": "Milpitas",
    "lat": 37.42827,
    "lng": -121.90662,
    "countryCode": "US",
    "population": 77604
  },
  {
    "id": "32.916L-117.144",
    "name": "Mira Mesa",
    "lat": 32.9156,
    "lng": -117.14392,
    "countryCode": "US",
    "population": 70000
  },
  {
    "id": "33.600L-117.672",
    "name": "Mission Viejo",
    "lat": 33.60002,
    "lng": -117.672,
    "countryCode": "US",
    "population": 97156
  },
  {
    "id": "37.639L-120.997",
    "name": "Modesto",
    "lat": 37.6391,
    "lng": -120.99688,
    "countryCode": "US",
    "population": 211266
  },
  {
    "id": "34.009L-118.105",
    "name": "Montebello",
    "lat": 34.00946,
    "lng": -118.10535,
    "countryCode": "US",
    "population": 63921
  },
  {
    "id": "34.063L-118.123",
    "name": "Monterey Park",
    "lat": 34.06251,
    "lng": -118.12285,
    "countryCode": "US",
    "population": 61468
  },
  {
    "id": "33.938L-117.231",
    "name": "Moreno Valley",
    "lat": 33.93752,
    "lng": -117.23059,
    "countryCode": "US",
    "population": 204198
  },
  {
    "id": "37.386L-122.084",
    "name": "Mountain View",
    "lat": 37.38605,
    "lng": -122.08385,
    "countryCode": "US",
    "population": 80435
  },
  {
    "id": "33.554L-117.214",
    "name": "Murrieta",
    "lat": 33.55391,
    "lng": -117.21392,
    "countryCode": "US",
    "population": 109830
  },
  {
    "id": "38.297L-122.286",
    "name": "Napa",
    "lat": 38.29714,
    "lng": -122.28553,
    "countryCode": "US",
    "population": 80434
  },
  {
    "id": "32.678L-117.099",
    "name": "National City",
    "lat": 32.67811,
    "lng": -117.0992,
    "countryCode": "US",
    "population": 61060
  },
  {
    "id": "33.619L-117.929",
    "name": "Newport Beach",
    "lat": 33.61891,
    "lng": -117.92895,
    "countryCode": "US",
    "population": 87127
  },
  {
    "id": "34.161L-118.265",
    "name": "North Glendale",
    "lat": 34.16056,
    "lng": -118.26452,
    "countryCode": "US",
    "population": 203201
  },
  {
    "id": "34.172L-118.379",
    "name": "North Hollywood",
    "lat": 34.17223,
    "lng": -118.37897,
    "countryCode": "US",
    "population": 77848
  },
  {
    "id": "34.228L-118.537",
    "name": "Northridge",
    "lat": 34.22834,
    "lng": -118.53675,
    "countryCode": "US",
    "population": 68469
  },
  {
    "id": "33.902L-118.082",
    "name": "Norwalk",
    "lat": 33.90224,
    "lng": -118.08173,
    "countryCode": "US",
    "population": 107140
  },
  {
    "id": "38.107L-122.570",
    "name": "Novato",
    "lat": 38.10742,
    "lng": -122.5697,
    "countryCode": "US",
    "population": 55530
  },
  {
    "id": "37.804L-122.271",
    "name": "Oakland",
    "lat": 37.80437,
    "lng": -122.2708,
    "countryCode": "US",
    "population": 419267
  },
  {
    "id": "33.196L-117.379",
    "name": "Oceanside",
    "lat": 33.19587,
    "lng": -117.37948,
    "countryCode": "US",
    "population": 175691
  },
  {
    "id": "34.063L-117.651",
    "name": "Ontario",
    "lat": 34.06334,
    "lng": -117.65089,
    "countryCode": "US",
    "population": 171214
  },
  {
    "id": "33.788L-117.853",
    "name": "Orange",
    "lat": 33.78779,
    "lng": -117.85311,
    "countryCode": "US",
    "population": 140992
  },
  {
    "id": "34.197L-119.177",
    "name": "Oxnard",
    "lat": 34.1975,
    "lng": -119.17705,
    "countryCode": "US",
    "population": 207254
  },
  {
    "id": "34.191L-119.242",
    "name": "Oxnard Shores",
    "lat": 34.19084,
    "lng": -119.2415,
    "countryCode": "US",
    "population": 187235
  },
  {
    "id": "33.723L-116.377",
    "name": "Palm Desert",
    "lat": 33.72255,
    "lng": -116.37697,
    "countryCode": "US",
    "population": 51869
  },
  {
    "id": "34.579L-118.116",
    "name": "Palmdale",
    "lat": 34.57943,
    "lng": -118.11646,
    "countryCode": "US",
    "population": 158351
  },
  {
    "id": "37.442L-122.143",
    "name": "Palo Alto",
    "lat": 37.44188,
    "lng": -122.14302,
    "countryCode": "US",
    "population": 66853
  },
  {
    "id": "33.889L-118.160",
    "name": "Paramount",
    "lat": 33.88946,
    "lng": -118.15979,
    "countryCode": "US",
    "population": 55412
  },
  {
    "id": "34.148L-118.145",
    "name": "Pasadena",
    "lat": 34.14778,
    "lng": -118.14452,
    "countryCode": "US",
    "population": 142250
  },
  {
    "id": "33.783L-117.229",
    "name": "Perris",
    "lat": 33.78252,
    "lng": -117.22865,
    "countryCode": "US",
    "population": 74971
  },
  {
    "id": "38.232L-122.637",
    "name": "Petaluma",
    "lat": 38.23242,
    "lng": -122.63665,
    "countryCode": "US",
    "population": 60438
  },
  {
    "id": "33.983L-118.097",
    "name": "Pico Rivera",
    "lat": 33.98307,
    "lng": -118.09673,
    "countryCode": "US",
    "population": 64218
  },
  {
    "id": "38.028L-121.885",
    "name": "Pittsburg",
    "lat": 38.02798,
    "lng": -121.88468,
    "countryCode": "US",
    "population": 69424
  },
  {
    "id": "33.872L-117.870",
    "name": "Placentia",
    "lat": 33.87224,
    "lng": -117.87034,
    "countryCode": "US",
    "population": 52495
  },
  {
    "id": "37.662L-121.875",
    "name": "Pleasanton",
    "lat": 37.66243,
    "lng": -121.87468,
    "countryCode": "US",
    "population": 79510
  },
  {
    "id": "34.055L-117.752",
    "name": "Pomona",
    "lat": 34.05529,
    "lng": -117.75228,
    "countryCode": "US",
    "population": 153266
  },
  {
    "id": "36.065L-119.017",
    "name": "Porterville",
    "lat": 36.06523,
    "lng": -119.01677,
    "countryCode": "US",
    "population": 56058
  },
  {
    "id": "32.963L-117.036",
    "name": "Poway",
    "lat": 32.96282,
    "lng": -117.03586,
    "countryCode": "US",
    "population": 50157
  },
  {
    "id": "38.589L-121.303",
    "name": "Rancho Cordova",
    "lat": 38.58907,
    "lng": -121.30273,
    "countryCode": "US",
    "population": 71017
  },
  {
    "id": "34.106L-117.593",
    "name": "Rancho Cucamonga",
    "lat": 34.1064,
    "lng": -117.59311,
    "countryCode": "US",
    "population": 175236
  },
  {
    "id": "32.959L-117.115",
    "name": "Rancho Penasquitos",
    "lat": 32.95949,
    "lng": -117.11531,
    "countryCode": "US",
    "population": 60000
  },
  {
    "id": "34.056L-117.183",
    "name": "Redlands",
    "lat": 34.05557,
    "lng": -117.18254,
    "countryCode": "US",
    "population": 71035
  },
  {
    "id": "33.849L-118.388",
    "name": "Redondo Beach",
    "lat": 33.84918,
    "lng": -118.38841,
    "countryCode": "US",
    "population": 68166
  },
  {
    "id": "37.485L-122.236",
    "name": "Redwood City",
    "lat": 37.48522,
    "lng": -122.23635,
    "countryCode": "US",
    "population": 85288
  },
  {
    "id": "34.106L-117.370",
    "name": "Rialto",
    "lat": 34.1064,
    "lng": -117.37032,
    "countryCode": "US",
    "population": 103132
  },
  {
    "id": "37.936L-122.348",
    "name": "Richmond",
    "lat": 37.93576,
    "lng": -122.34775,
    "countryCode": "US",
    "population": 109708
  },
  {
    "id": "33.953L-117.396",
    "name": "Riverside",
    "lat": 33.95335,
    "lng": -117.39616,
    "countryCode": "US",
    "population": 322424
  },
  {
    "id": "38.791L-121.236",
    "name": "Rocklin",
    "lat": 38.79073,
    "lng": -121.23578,
    "countryCode": "US",
    "population": 61213
  },
  {
    "id": "34.081L-118.073",
    "name": "Rosemead",
    "lat": 34.08057,
    "lng": -118.07285,
    "countryCode": "US",
    "population": 54908
  },
  {
    "id": "38.752L-121.288",
    "name": "Roseville",
    "lat": 38.75212,
    "lng": -121.28801,
    "countryCode": "US",
    "population": 130269
  },
  {
    "id": "38.582L-121.494",
    "name": "Sacramento",
    "lat": 38.58157,
    "lng": -121.4944,
    "countryCode": "US",
    "population": 490712
  },
  {
    "id": "36.678L-121.656",
    "name": "Salinas",
    "lat": 36.67774,
    "lng": -121.6555,
    "countryCode": "US",
    "population": 157380
  },
  {
    "id": "34.108L-117.290",
    "name": "San Bernardino",
    "lat": 34.10834,
    "lng": -117.28977,
    "countryCode": "US",
    "population": 216108
  },
  {
    "id": "33.427L-117.612",
    "name": "San Clemente",
    "lat": 33.42697,
    "lng": -117.61199,
    "countryCode": "US",
    "population": 65526
  },
  {
    "id": "32.715L-117.157",
    "name": "San Diego",
    "lat": 32.71533,
    "lng": -117.15726,
    "countryCode": "US",
    "population": 1394928
  },
  {
    "id": "37.775L-122.419",
    "name": "San Francisco",
    "lat": 37.77493,
    "lng": -122.41942,
    "countryCode": "US",
    "population": 864816
  },
  {
    "id": "37.339L-121.895",
    "name": "San Jose",
    "lat": 37.33939,
    "lng": -121.89496,
    "countryCode": "US",
    "population": 1026908
  },
  {
    "id": "37.725L-122.156",
    "name": "San Leandro",
    "lat": 37.72493,
    "lng": -122.15608,
    "countryCode": "US",
    "population": 90712
  },
  {
    "id": "33.143L-117.166",
    "name": "San Marcos",
    "lat": 33.14337,
    "lng": -117.16614,
    "countryCode": "US",
    "population": 92931
  },
  {
    "id": "37.563L-122.326",
    "name": "San Mateo",
    "lat": 37.56299,
    "lng": -122.32553,
    "countryCode": "US",
    "population": 103536
  },
  {
    "id": "33.736L-118.292",
    "name": "San Pedro",
    "lat": 33.73585,
    "lng": -118.29229,
    "countryCode": "US",
    "population": 78405
  },
  {
    "id": "37.974L-122.531",
    "name": "San Rafael",
    "lat": 37.97353,
    "lng": -122.53109,
    "countryCode": "US",
    "population": 59162
  },
  {
    "id": "37.780L-121.978",
    "name": "San Ramon",
    "lat": 37.77993,
    "lng": -121.97802,
    "countryCode": "US",
    "population": 76134
  },
  {
    "id": "33.746L-117.868",
    "name": "Santa Ana",
    "lat": 33.74557,
    "lng": -117.86783,
    "countryCode": "US",
    "population": 335400
  },
  {
    "id": "34.421L-119.698",
    "name": "Santa Barbara",
    "lat": 34.42083,
    "lng": -119.69819,
    "countryCode": "US",
    "population": 91842
  },
  {
    "id": "37.354L-121.955",
    "name": "Santa Clara",
    "lat": 37.35411,
    "lng": -121.95524,
    "countryCode": "US",
    "population": 126215
  },
  {
    "id": "34.392L-118.543",
    "name": "Santa Clarita",
    "lat": 34.39166,
    "lng": -118.54259,
    "countryCode": "US",
    "population": 182371
  },
  {
    "id": "36.974L-122.031",
    "name": "Santa Cruz",
    "lat": 36.97412,
    "lng": -122.0308,
    "countryCode": "US",
    "population": 64220
  },
  {
    "id": "34.953L-120.436",
    "name": "Santa Maria",
    "lat": 34.95303,
    "lng": -120.43572,
    "countryCode": "US",
    "population": 105093
  },
  {
    "id": "34.019L-118.491",
    "name": "Santa Monica",
    "lat": 34.01945,
    "lng": -118.49119,
    "countryCode": "US",
    "population": 93220
  },
  {
    "id": "38.440L-122.714",
    "name": "Santa Rosa",
    "lat": 38.44047,
    "lng": -122.71443,
    "countryCode": "US",
    "population": 174972
  },
  {
    "id": "32.838L-116.974",
    "name": "Santee",
    "lat": 32.83838,
    "lng": -116.97392,
    "countryCode": "US",
    "population": 57787
  },
  {
    "id": "34.151L-118.449",
    "name": "Sherman Oaks",
    "lat": 34.15112,
    "lng": -118.44925,
    "countryCode": "US",
    "population": 52677
  },
  {
    "id": "34.269L-118.781",
    "name": "Simi Valley",
    "lat": 34.26945,
    "lng": -118.78148,
    "countryCode": "US",
    "population": 126788
  },
  {
    "id": "33.955L-118.212",
    "name": "South Gate",
    "lat": 33.95474,
    "lng": -118.21202,
    "countryCode": "US",
    "population": 96401
  },
  {
    "id": "37.655L-122.408",
    "name": "South San Francisco",
    "lat": 37.65466,
    "lng": -122.40775,
    "countryCode": "US",
    "population": 67271
  },
  {
    "id": "33.950L-118.039",
    "name": "South Whittier",
    "lat": 33.95015,
    "lng": -118.03917,
    "countryCode": "US",
    "population": 57156
  },
  {
    "id": "37.958L-121.291",
    "name": "Stockton",
    "lat": 37.9577,
    "lng": -121.29078,
    "countryCode": "US",
    "population": 305658
  },
  {
    "id": "37.369L-122.036",
    "name": "Sunnyvale",
    "lat": 37.36883,
    "lng": -122.03635,
    "countryCode": "US",
    "population": 151754
  },
  {
    "id": "33.494L-117.148",
    "name": "Temecula",
    "lat": 33.49364,
    "lng": -117.14836,
    "countryCode": "US",
    "population": 112011
  },
  {
    "id": "34.171L-118.838",
    "name": "Thousand Oaks",
    "lat": 34.17056,
    "lng": -118.83759,
    "countryCode": "US",
    "population": 129339
  },
  {
    "id": "33.836L-118.341",
    "name": "Torrance",
    "lat": 33.83585,
    "lng": -118.34063,
    "countryCode": "US",
    "population": 148475
  },
  {
    "id": "37.740L-121.426",
    "name": "Tracy",
    "lat": 37.73987,
    "lng": -121.42618,
    "countryCode": "US",
    "population": 87075
  },
  {
    "id": "36.208L-119.347",
    "name": "Tulare",
    "lat": 36.20773,
    "lng": -119.34734,
    "countryCode": "US",
    "population": 62315
  },
  {
    "id": "37.495L-120.847",
    "name": "Turlock",
    "lat": 37.49466,
    "lng": -120.84659,
    "countryCode": "US",
    "population": 72292
  },
  {
    "id": "33.746L-117.826",
    "name": "Tustin",
    "lat": 33.74585,
    "lng": -117.82617,
    "countryCode": "US",
    "population": 80583
  },
  {
    "id": "37.596L-122.019",
    "name": "Union City",
    "lat": 37.59577,
    "lng": -122.01913,
    "countryCode": "US",
    "population": 74494
  },
  {
    "id": "34.139L-118.353",
    "name": "Universal City",
    "lat": 34.1389,
    "lng": -118.35341,
    "countryCode": "US",
    "population": 105000
  },
  {
    "id": "37.906L-122.065",
    "name": "Upland",
    "lat": 37.90631,
    "lng": -122.06496,
    "countryCode": "US",
    "population": 68910
  },
  {
    "id": "36.910L-121.757",
    "name": "Watsonville",
    "lat": 36.91023,
    "lng": -121.75689,
    "countryCode": "US",
    "population": 53628
  },
  {
    "id": "34.069L-117.939",
    "name": "West Covina",
    "lat": 34.06862,
    "lng": -117.93895,
    "countryCode": "US",
    "population": 108484
  },
  {
    "id": "38.580L-121.530",
    "name": "West Sacramento",
    "lat": 38.58046,
    "lng": -121.53023,
    "countryCode": "US",
    "population": 52721
  },
  {
    "id": "33.759L-118.007",
    "name": "Westminster",
    "lat": 33.75918,
    "lng": -118.00673,
    "countryCode": "US",
    "population": 92114
  },
  {
    "id": "33.979L-118.033",
    "name": "Whittier",
    "lat": 33.97918,
    "lng": -118.03284,
    "countryCode": "US",
    "population": 87438
  },
  {
    "id": "38.679L-121.773",
    "name": "Woodland",
    "lat": 38.67852,
    "lng": -121.7733,
    "countryCode": "US",
    "population": 58567
  },
  {
    "id": "34.168L-118.606",
    "name": "Woodland Hills",
    "lat": 34.16834,
    "lng": -118.60592,
    "countryCode": "US",
    "population": 70000
  },
  {
    "id": "33.889L-117.813",
    "name": "Yorba Linda",
    "lat": 33.88863,
    "lng": -117.81311,
    "countryCode": "US",
    "population": 67973
  },
  {
    "id": "39.140L-121.617",
    "name": "Yuba City",
    "lat": 39.14045,
    "lng": -121.61691,
    "countryCode": "US",
    "population": 66941
  },
  {
    "id": "34.034L-117.043",
    "name": "Yucaipa",
    "lat": 34.03363,
    "lng": -117.04309,
    "countryCode": "US",
    "population": 53328
  },
  {
    "id": "39.803L-105.087",
    "name": "Arvada",
    "lat": 39.80276,
    "lng": -105.08748,
    "countryCode": "US",
    "population": 115368
  },
  {
    "id": "39.729L-104.832",
    "name": "Aurora",
    "lat": 39.72943,
    "lng": -104.83192,
    "countryCode": "US",
    "population": 359407
  },
  {
    "id": "39.921L-105.087",
    "name": "Broomfield",
    "lat": 39.92054,
    "lng": -105.08665,
    "countryCode": "US",
    "population": 65065
  },
  {
    "id": "39.372L-104.856",
    "name": "Castle Rock",
    "lat": 39.37221,
    "lng": -104.85609,
    "countryCode": "US",
    "population": 55591
  },
  {
    "id": "39.579L-104.877",
    "name": "Centennial",
    "lat": 39.57916,
    "lng": -104.87692,
    "countryCode": "US",
    "population": 109741
  },
  {
    "id": "38.834L-104.821",
    "name": "Colorado Springs",
    "lat": 38.83388,
    "lng": -104.82136,
    "countryCode": "US",
    "population": 456568
  },
  {
    "id": "39.808L-104.934",
    "name": "Commerce City",
    "lat": 39.80832,
    "lng": -104.93387,
    "countryCode": "US",
    "population": 53696
  },
  {
    "id": "39.739L-104.985",
    "name": "Denver",
    "lat": 39.73915,
    "lng": -104.9847,
    "countryCode": "US",
    "population": 682545
  },
  {
    "id": "39.064L-108.551",
    "name": "Grand Junction",
    "lat": 39.06387,
    "lng": -108.55065,
    "countryCode": "US",
    "population": 60358
  },
  {
    "id": "39.554L-104.969",
    "name": "Highlands Ranch",
    "lat": 39.55388,
    "lng": -104.96943,
    "countryCode": "US",
    "population": 96713
  },
  {
    "id": "39.705L-105.081",
    "name": "Lakewood",
    "lat": 39.70471,
    "lng": -105.08137,
    "countryCode": "US",
    "population": 152597
  },
  {
    "id": "38.254L-104.609",
    "name": "Pueblo",
    "lat": 38.25445,
    "lng": -104.60914,
    "countryCode": "US",
    "population": 109412
  },
  {
    "id": "39.868L-104.972",
    "name": "Thornton",
    "lat": 39.86804,
    "lng": -104.97192,
    "countryCode": "US",
    "population": 133451
  },
  {
    "id": "39.837L-105.037",
    "name": "Westminster",
    "lat": 39.83665,
    "lng": -105.0372,
    "countryCode": "US",
    "population": 113130
  },
  {
    "id": "35.084L-106.651",
    "name": "Albuquerque",
    "lat": 35.08449,
    "lng": -106.65114,
    "countryCode": "US",
    "population": 559121
  },
  {
    "id": "32.312L-106.778",
    "name": "Las Cruces",
    "lat": 32.31232,
    "lng": -106.77834,
    "countryCode": "US",
    "population": 101643
  },
  {
    "id": "35.260L-106.706",
    "name": "Rio Rancho",
    "lat": 35.26004,
    "lng": -106.70614,
    "countryCode": "US",
    "population": 94171
  },
  {
    "id": "35.233L-106.664",
    "name": "Rio Rancho",
    "lat": 35.23338,
    "lng": -106.66447,
    "countryCode": "US",
    "population": 87521
  },
  {
    "id": "35.687L-105.938",
    "name": "Santa Fe",
    "lat": 35.68698,
    "lng": -105.9378,
    "countryCode": "US",
    "population": 84099
  },
  {
    "id": "39.164L-119.767",
    "name": "Carson City",
    "lat": 39.1638,
    "lng": -119.7674,
    "countryCode": "US",
    "population": 54521
  },
  {
    "id": "36.025L-115.242",
    "name": "Enterprise",
    "lat": 36.02525,
    "lng": -115.24194,
    "countryCode": "US",
    "population": 108481
  },
  {
    "id": "36.040L-114.982",
    "name": "Henderson",
    "lat": 36.0397,
    "lng": -114.98194,
    "countryCode": "US",
    "population": 285667
  },
  {
    "id": "36.175L-115.137",
    "name": "Las Vegas",
    "lat": 36.17497,
    "lng": -115.13722,
    "countryCode": "US",
    "population": 623747
  },
  {
    "id": "36.199L-115.118",
    "name": "North Las Vegas",
    "lat": 36.19886,
    "lng": -115.1175,
    "countryCode": "US",
    "population": 234807
  },
  {
    "id": "36.097L-115.147",
    "name": "Paradise",
    "lat": 36.09719,
    "lng": -115.14666,
    "countryCode": "US",
    "population": 223167
  },
  {
    "id": "39.530L-119.814",
    "name": "Reno",
    "lat": 39.52963,
    "lng": -119.8138,
    "countryCode": "US",
    "population": 241445
  },
  {
    "id": "39.535L-119.753",
    "name": "Sparks",
    "lat": 39.53491,
    "lng": -119.75269,
    "countryCode": "US",
    "population": 96094
  },
  {
    "id": "36.108L-115.245",
    "name": "Spring Valley",
    "lat": 36.10803,
    "lng": -115.245,
    "countryCode": "US",
    "population": 178395
  },
  {
    "id": "36.211L-115.073",
    "name": "Sunrise Manor",
    "lat": 36.21108,
    "lng": -115.07306,
    "countryCode": "US",
    "population": 189372
  },
  {
    "id": "35.222L-101.831",
    "name": "Amarillo",
    "lat": 35.222,
    "lng": -101.8313,
    "countryCode": "US",
    "population": 198645
  },
  {
    "id": "31.759L-106.487",
    "name": "El Paso",
    "lat": 31.75872,
    "lng": -106.48693,
    "countryCode": "US",
    "population": 681124
  },
  {
    "id": "33.578L-101.855",
    "name": "Lubbock",
    "lat": 33.57786,
    "lng": -101.85517,
    "countryCode": "US",
    "population": 249042
  },
  {
    "id": "31.997L-102.078",
    "name": "Midland",
    "lat": 31.99735,
    "lng": -102.07791,
    "countryCode": "US",
    "population": 132950
  },
  {
    "id": "31.846L-102.368",
    "name": "Odessa",
    "lat": 31.84568,
    "lng": -102.36764,
    "countryCode": "US",
    "population": 118968
  },
  {
    "id": "31.464L-100.437",
    "name": "San Angelo",
    "lat": 31.46377,
    "lng": -100.43704,
    "countryCode": "US",
    "population": 100450
  },
  {
    "id": "37.104L-113.584",
    "name": "Saint George",
    "lat": 37.10415,
    "lng": -113.58412,
    "countryCode": "US",
    "population": 72897
  },
  {
    "id": "33.436L-112.350",
    "name": "Avondale",
    "lat": 33.4356,
    "lng": -112.3496,
    "countryCode": "US",
    "population": 80684
  },
  {
    "id": "40.587L-122.392",
    "name": "Redding",
    "lat": 40.58654,
    "lng": -122.39168,
    "countryCode": "US",
    "population": 91582
  },
  {
    "id": "40.015L-105.271",
    "name": "Boulder",
    "lat": 40.01499,
    "lng": -105.27055,
    "countryCode": "US",
    "population": 107349
  },
  {
    "id": "40.585L-105.084",
    "name": "Fort Collins",
    "lat": 40.58526,
    "lng": -105.08442,
    "countryCode": "US",
    "population": 161175
  },
  {
    "id": "40.423L-104.709",
    "name": "Greeley",
    "lat": 40.42331,
    "lng": -104.70913,
    "countryCode": "US",
    "population": 100883
  },
  {
    "id": "40.167L-105.102",
    "name": "Longmont",
    "lat": 40.16721,
    "lng": -105.10193,
    "countryCode": "US",
    "population": 92088
  },
  {
    "id": "40.398L-105.075",
    "name": "Loveland",
    "lat": 40.39776,
    "lng": -105.07498,
    "countryCode": "US",
    "population": 75182
  },
  {
    "id": "43.614L-116.203",
    "name": "Boise",
    "lat": 43.6135,
    "lng": -116.20345,
    "countryCode": "US",
    "population": 145987
  },
  {
    "id": "43.663L-116.687",
    "name": "Caldwell",
    "lat": 43.66294,
    "lng": -116.68736,
    "countryCode": "US",
    "population": 51686
  },
  {
    "id": "43.467L-112.034",
    "name": "Idaho Falls",
    "lat": 43.46658,
    "lng": -112.03414,
    "countryCode": "US",
    "population": 59184
  },
  {
    "id": "43.612L-116.392",
    "name": "Meridian",
    "lat": 43.61211,
    "lng": -116.39151,
    "countryCode": "US",
    "population": 90739
  },
  {
    "id": "43.541L-116.563",
    "name": "Nampa",
    "lat": 43.54072,
    "lng": -116.56346,
    "countryCode": "US",
    "population": 89839
  },
  {
    "id": "42.871L-112.446",
    "name": "Pocatello",
    "lat": 42.8713,
    "lng": -112.44553,
    "countryCode": "US",
    "population": 54441
  },
  {
    "id": "45.783L-108.501",
    "name": "Billings",
    "lat": 45.78329,
    "lng": -108.50069,
    "countryCode": "US",
    "population": 110263
  },
  {
    "id": "47.500L-111.301",
    "name": "Great Falls",
    "lat": 47.50024,
    "lng": -111.30081,
    "countryCode": "US",
    "population": 59638
  },
  {
    "id": "46.872L-113.994",
    "name": "Missoula",
    "lat": 46.87215,
    "lng": -113.994,
    "countryCode": "US",
    "population": 71022
  },
  {
    "id": "46.808L-100.784",
    "name": "Bismarck",
    "lat": 46.80833,
    "lng": -100.78374,
    "countryCode": "US",
    "population": 71167
  },
  {
    "id": "44.637L-123.106",
    "name": "Albany",
    "lat": 44.63651,
    "lng": -123.10593,
    "countryCode": "US",
    "population": 52175
  },
  {
    "id": "45.487L-122.804",
    "name": "Beaverton",
    "lat": 45.48706,
    "lng": -122.80371,
    "countryCode": "US",
    "population": 96577
  },
  {
    "id": "44.058L-121.315",
    "name": "Bend",
    "lat": 44.05817,
    "lng": -121.31531,
    "countryCode": "US",
    "population": 87014
  },
  {
    "id": "44.565L-123.262",
    "name": "Corvallis",
    "lat": 44.56457,
    "lng": -123.26204,
    "countryCode": "US",
    "population": 55780
  },
  {
    "id": "44.052L-123.087",
    "name": "Eugene",
    "lat": 44.05207,
    "lng": -123.08675,
    "countryCode": "US",
    "population": 163460
  },
  {
    "id": "45.498L-122.431",
    "name": "Gresham",
    "lat": 45.49818,
    "lng": -122.43148,
    "countryCode": "US",
    "population": 110553
  },
  {
    "id": "45.523L-122.990",
    "name": "Hillsboro",
    "lat": 45.52289,
    "lng": -122.98983,
    "countryCode": "US",
    "population": 102347
  },
  {
    "id": "42.327L-122.876",
    "name": "Medford",
    "lat": 42.32652,
    "lng": -122.87559,
    "countryCode": "US",
    "population": 79805
  },
  {
    "id": "45.523L-122.676",
    "name": "Portland",
    "lat": 45.52345,
    "lng": -122.67621,
    "countryCode": "US",
    "population": 632309
  },
  {
    "id": "44.943L-123.035",
    "name": "Salem",
    "lat": 44.9429,
    "lng": -123.0351,
    "countryCode": "US",
    "population": 164549
  },
  {
    "id": "44.046L-123.022",
    "name": "Springfield",
    "lat": 44.04624,
    "lng": -123.02203,
    "countryCode": "US",
    "population": 60870
  },
  {
    "id": "45.431L-122.771",
    "name": "Tigard",
    "lat": 45.43123,
    "lng": -122.77149,
    "countryCode": "US",
    "population": 51253
  },
  {
    "id": "44.081L-103.231",
    "name": "Rapid City",
    "lat": 44.08054,
    "lng": -103.23101,
    "countryCode": "US",
    "population": 73569
  },
  {
    "id": "41.060L-111.971",
    "name": "Layton",
    "lat": 41.06022,
    "lng": -111.97105,
    "countryCode": "US",
    "population": 74143
  },
  {
    "id": "40.392L-111.851",
    "name": "Lehi",
    "lat": 40.39162,
    "lng": -111.85077,
    "countryCode": "US",
    "population": 58486
  },
  {
    "id": "41.735L-111.834",
    "name": "Logan",
    "lat": 41.73549,
    "lng": -111.83439,
    "countryCode": "US",
    "population": 50371
  },
  {
    "id": "40.687L-111.875",
    "name": "Millcreek",
    "lat": 40.68689,
    "lng": -111.87549,
    "countryCode": "US",
    "population": 62139
  },
  {
    "id": "41.223L-111.974",
    "name": "Ogden",
    "lat": 41.223,
    "lng": -111.97383,
    "countryCode": "US",
    "population": 85444
  },
  {
    "id": "40.297L-111.695",
    "name": "Orem",
    "lat": 40.2969,
    "lng": -111.69465,
    "countryCode": "US",
    "population": 94457
  },
  {
    "id": "40.234L-111.659",
    "name": "Provo",
    "lat": 40.23384,
    "lng": -111.65853,
    "countryCode": "US",
    "population": 115264
  },
  {
    "id": "40.761L-111.891",
    "name": "Salt Lake City",
    "lat": 40.76078,
    "lng": -111.89105,
    "countryCode": "US",
    "population": 192672
  },
  {
    "id": "40.592L-111.884",
    "name": "Sandy",
    "lat": 40.59161,
    "lng": -111.8841,
    "countryCode": "US",
    "population": 87461
  },
  {
    "id": "40.581L-111.851",
    "name": "Sandy Hills",
    "lat": 40.58106,
    "lng": -111.85077,
    "countryCode": "US",
    "population": 89575
  },
  {
    "id": "40.562L-111.930",
    "name": "South Jordan",
    "lat": 40.56217,
    "lng": -111.92966,
    "countryCode": "US",
    "population": 66648
  },
  {
    "id": "40.668L-111.939",
    "name": "Taylorsville",
    "lat": 40.66772,
    "lng": -111.93883,
    "countryCode": "US",
    "population": 60514
  },
  {
    "id": "40.610L-111.939",
    "name": "West Jordan",
    "lat": 40.60967,
    "lng": -111.9391,
    "countryCode": "US",
    "population": 111946
  },
  {
    "id": "40.692L-112.001",
    "name": "West Valley City",
    "lat": 40.69161,
    "lng": -112.00105,
    "countryCode": "US",
    "population": 136208
  },
  {
    "id": "47.307L-122.228",
    "name": "Auburn",
    "lat": 47.30732,
    "lng": -122.22845,
    "countryCode": "US",
    "population": 77006
  },
  {
    "id": "47.610L-122.201",
    "name": "Bellevue",
    "lat": 47.61038,
    "lng": -122.20068,
    "countryCode": "US",
    "population": 139820
  },
  {
    "id": "48.760L-122.488",
    "name": "Bellingham",
    "lat": 48.75955,
    "lng": -122.48822,
    "countryCode": "US",
    "population": 85146
  },
  {
    "id": "47.470L-122.347",
    "name": "Burien",
    "lat": 47.47038,
    "lng": -122.34679,
    "countryCode": "US",
    "population": 50467
  },
  {
    "id": "47.979L-122.202",
    "name": "Everett",
    "lat": 47.97898,
    "lng": -122.20208,
    "countryCode": "US",
    "population": 108010
  },
  {
    "id": "47.322L-122.313",
    "name": "Federal Way",
    "lat": 47.32232,
    "lng": -122.31262,
    "countryCode": "US",
    "population": 95171
  },
  {
    "id": "46.211L-119.137",
    "name": "Kennewick",
    "lat": 46.21125,
    "lng": -119.13723,
    "countryCode": "US",
    "population": 78896
  },
  {
    "id": "47.381L-122.235",
    "name": "Kent",
    "lat": 47.38093,
    "lng": -122.23484,
    "countryCode": "US",
    "population": 126952
  },
  {
    "id": "47.681L-122.209",
    "name": "Kirkland",
    "lat": 47.68149,
    "lng": -122.20874,
    "countryCode": "US",
    "population": 87281
  },
  {
    "id": "47.172L-122.518",
    "name": "Lakewood",
    "lat": 47.17176,
    "lng": -122.51846,
    "countryCode": "US",
    "population": 59829
  },
  {
    "id": "48.052L-122.177",
    "name": "Marysville",
    "lat": 48.05176,
    "lng": -122.17708,
    "countryCode": "US",
    "population": 66773
  },
  {
    "id": "47.038L-122.901",
    "name": "Olympia",
    "lat": 47.03787,
    "lng": -122.9007,
    "countryCode": "US",
    "population": 50302
  },
  {
    "id": "46.240L-119.101",
    "name": "Pasco",
    "lat": 46.23958,
    "lng": -119.10057,
    "countryCode": "US",
    "population": 69451
  },
  {
    "id": "47.674L-122.122",
    "name": "Redmond",
    "lat": 47.67399,
    "lng": -122.12151,
    "countryCode": "US",
    "population": 60598
  },
  {
    "id": "47.483L-122.217",
    "name": "Renton",
    "lat": 47.48288,
    "lng": -122.21707,
    "countryCode": "US",
    "population": 100242
  },
  {
    "id": "46.286L-119.284",
    "name": "Richland",
    "lat": 46.28569,
    "lng": -119.28446,
    "countryCode": "US",
    "population": 54248
  },
  {
    "id": "47.642L-122.080",
    "name": "Sammamish",
    "lat": 47.64177,
    "lng": -122.0804,
    "countryCode": "US",
    "population": 52253
  },
  {
    "id": "47.606L-122.332",
    "name": "Seattle",
    "lat": 47.60621,
    "lng": -122.33207,
    "countryCode": "US",
    "population": 684451
  },
  {
    "id": "47.756L-122.342",
    "name": "Shoreline",
    "lat": 47.75565,
    "lng": -122.34152,
    "countryCode": "US",
    "population": 55439
  },
  {
    "id": "47.141L-122.270",
    "name": "South Hill",
    "lat": 47.14121,
    "lng": -122.27012,
    "countryCode": "US",
    "population": 52431
  },
  {
    "id": "47.660L-117.429",
    "name": "Spokane",
    "lat": 47.65966,
    "lng": -117.42908,
    "countryCode": "US",
    "population": 213272
  },
  {
    "id": "47.673L-117.239",
    "name": "Spokane Valley",
    "lat": 47.67323,
    "lng": -117.23937,
    "countryCode": "US",
    "population": 94919
  },
  {
    "id": "47.253L-122.444",
    "name": "Tacoma",
    "lat": 47.25288,
    "lng": -122.44429,
    "countryCode": "US",
    "population": 207948
  },
  {
    "id": "45.639L-122.661",
    "name": "Vancouver",
    "lat": 45.63873,
    "lng": -122.66149,
    "countryCode": "US",
    "population": 172860
  },
  {
    "id": "46.602L-120.506",
    "name": "Yakima",
    "lat": 46.60207,
    "lng": -120.5059,
    "countryCode": "US",
    "population": 93701
  },
  {
    "id": "42.867L-106.313",
    "name": "Casper",
    "lat": 42.86663,
    "lng": -106.31308,
    "countryCode": "US",
    "population": 60285
  },
  {
    "id": "41.140L-104.820",
    "name": "Cheyenne",
    "lat": 41.13998,
    "lng": -104.82025,
    "countryCode": "US",
    "population": 63335
  },
  {
    "id": "21.307L-157.858",
    "name": "Honolulu",
    "lat": 21.30694,
    "lng": -157.85833,
    "countryCode": "US",
    "population": 371657
  },
  {
    "id": "61.218L-149.900",
    "name": "Anchorage",
    "lat": 61.21806,
    "lng": -149.90028,
    "countryCode": "US",
    "population": 298695
  },
  {
    "id": "34.029L-84.199",
    "name": "Johns Creek",
    "lat": 34.02893,
    "lng": -84.19858,
    "countryCode": "US",
    "population": 83335
  },
  {
    "id": "28.564L-81.211",
    "name": "Alafaya",
    "lat": 28.5641,
    "lng": -81.2114,
    "countryCode": "US",
    "population": 78113
  },
  {
    "id": "41.224L-73.062",
    "name": "City of Milford (balance)",
    "lat": 41.22374,
    "lng": -73.06164,
    "countryCode": "US",
    "population": 51271
  },
  {
    "id": "42.569L-83.384",
    "name": "West Bloomfield Township",
    "lat": 42.56891,
    "lng": -83.38356,
    "countryCode": "US",
    "population": 64690
  },
  {
    "id": "38.602L-121.379",
    "name": "Arden-Arcade",
    "lat": 38.6025,
    "lng": -121.37854,
    "countryCode": "US",
    "population": 92186
  },
  {
    "id": "33.968L-118.244",
    "name": "Florence-Graham",
    "lat": 33.96772,
    "lng": -118.24438,
    "countryCode": "US",
    "population": 63387
  },
  {
    "id": "33.191L-111.528",
    "name": "San Tan Valley",
    "lat": 33.1911,
    "lng": -111.528,
    "countryCode": "US",
    "population": 81321
  },
  {
    "id": "35.337L-106.593",
    "name": "Enchanted Hills",
    "lat": 35.33676,
    "lng": -106.59296,
    "countryCode": "US",
    "population": 87521
  },
  {
    "id": "33.964L-117.564",
    "name": "Eastvale",
    "lat": 33.96358,
    "lng": -117.56418,
    "countryCode": "US",
    "population": 59039
  }
];

const b = _.filter(a, i => i.population > 200000);
console.log(JSON.stringify(_.map(b, i => ({ latLng: [i.lat, i.lng], name: i.name, country: i.countryCode })), null, 2))
