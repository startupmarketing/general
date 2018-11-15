const PUBLIC_FILES_URL = "https://api.messengerbot.si/public/";
const URL = "https://api.messengerbot.si/";

const MAPS = {
"PH Kozolec": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.7146481418145!2d14.502745915468903!3d46.05678967911244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765329ef2f92c19%3A0xe93b35d4c04299b!2sThe+parking+garage+Kozolec!5e0!3m2!1sen!2ssi!4v1538243760617" width="100%" height="450"></iframe>,
"Tivoli I": <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2768.672023214965!2d14.4968741!3d46.0576398!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476532a1c80cdb63%3A0x1a0ebed091fad545!2zUGFya2lyacWhxI1lIFRpdm9saSBJ!5e0!3m2!1ssl!2ssi!4v1538312674101" width="100%" height="450"></iframe>,
"Kranjčeva": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.041259007793!2d14.519912415577874!3d46.07021847911271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765328d3929f64b%3A0x85a459441b9a568c!2zUGFya2lyacWhxI1lIEtyYW5qxI1ldmEgKFBPUCBUVik!5e0!3m2!1ssl!2ssi!4v1538312844461" width="100%" height="450"></iframe>,
"Mirje": <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5538.579573464778!2d14.4938958!3d46.0453178!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47652d5d5d90ba93%3A0x4e81a04ef041eab9!2zUGFya2lyacWhxI1lIE1pcmpl!5e0!3m2!1ssl!2ssi!4v1538312870616" width="100%" height="450"></iframe>,
"P+R Studenec": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.8468028622565!2d14.565275415577263!3d46.05415387911228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476532051f1baa79%3A0x7a82e3d7164ebf48!2sP%2BR+Studenec!5e0!3m2!1ssl!2ssi!4v1538312893555" width="100%" height="450"></iframe>,
"Trg MDB": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.2096692446744!2d14.493530515577074!3d46.04691597911217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47652d678e67f14d%3A0xd290823789ff25da!2zUGFya2lyacWhxI1lIE1EQg!5e0!3m2!1ssl!2ssi!4v1538312919828" width="100%" height="450"></iframe>,
"Gospodarsko raz.": <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2768.4788418059684!2d14.5066797!3d46.0614925!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765329a18337d11%3A0x69966cbb1c66ecee!2zUGFya2lyacWhxI1lIEdvc3BvZGFyc2tvIHJhenN0YXZpxaHEjWU!5e0!3m2!1ssl!2ssi!4v1538312956103" width="100%" height="450"></iframe>,
"Bežigrad": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.4280270485565!2d14.50609591557756!3d46.06250587911264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47653299e88edc2f%3A0xe8c51d0ac4e32f3f!2zUGFya2lyacWhxI1lIEJlxb5pZ3JhZA!5e0!3m2!1ssl!2ssi!4v1538312985527" width="100%" height="450"></iframe>,
"Trg preko. brigad": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.094954994384!2d14.487243615577862!3d46.06914777911281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476532b11838ed7b%3A0xccf195531f24e558!2sParkiri%C5%A1%C4%8De+trg+Prekomorskih+brigad!5e0!3m2!1ssl!2ssi!4v1538313014153" width="100%" height="450"></iframe>,
"Sanatorij Emona": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.876784793081!2d14.506433915577317!3d46.05355587911239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765329d7ef40a57%3A0x3d32ea305b85b083!2sParkiri%C5%A1%C4%8De+Sanatorij+Emona!5e0!3m2!1ssl!2ssi!4v1538313043774" width="100%" height="450"></iframe>,
"Petkovskovo  II": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.9638510115233!2d14.511716215577213!3d46.051819279112195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47652d62b471d8f5%3A0x7ddd1e99abf8c945!2zUGFya2lyacWhxI1lIFBldGtvdsWha292byBuYWJyZcW-amUgSUk!5e0!3m2!1ssl!2ssi!4v1538313072796" width="100%" height="450"></iframe>,
"P+R Dolgi most": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.727639459155!2d14.461100115576697!3d46.03658277911188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47652d34d14a24d1%3A0x271240eee0da2569!2sP%2BR+Dolgi+most!5e0!3m2!1ssl!2ssi!4v1538313106606" width="100%" height="450"></iframe>,
"Tivoli II": <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11074.788152223806!2d14.4866679!3d46.0571409!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476532a3dc48bb79%3A0x4b49b7a7fe1d1db8!2sParkiri%C5%A1%C4%8De+Tivoli+II!5e0!3m2!1ssl!2ssi!4v1538313142511" width="100%" height="450"></iframe>,
"Žale II": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.1966522528974!2d14.52654781557776!3d46.06711987911267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765328a4da39f8b%3A0xeb8fb5084402b725!2zUGFya2lyacWhxI1lIMW9YWxlIElJ!5e0!3m2!1ssl!2ssi!4v1538313196685" width="100%" height="450"></iframe>,
"Žale I": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.105586755298!2d14.526733415577773!3d46.06893577911271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765328a4ceee5e1%3A0x1120ffbe69e8c12e!2zUGFya2lyacWhxI1lIMW9YWxlIEk!5e0!3m2!1ssl!2ssi!4v1538313226089" width="100%" height="450"></iframe>,
"NUK": <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2769.2288282634327!2d14.5002478!3d46.0465338!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47652d65d2f2bb85%3A0xca6da0f296e3026e!2zUGFya2lyacWhxI1lIE5VSyBJSQ!5e0!3m2!1ssl!2ssi!4v1538313279111" width="100%" height="450"></iframe>,
"Žale III": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.6769755679557!2d14.523639217708814!3d46.06817888120477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765328c7ff8d589%3A0xaa261cb1679ce452!2sUnnamed+Road%2C+1000+Ljubljana!5e0!3m2!1ssl!2ssi!4v1538313393270" width="100%" height="450"></iframe>,
"Center Stožice": <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2767.521760695247!2d14.5215405!3d46.0805763!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476532ef9030b833%3A0x86c01f5024cb9c4c!2zUCtSIFN0b8W-aWNl!5e0!3m2!1ssl!2ssi!4v1538313440288" width="100%" height="450"></iframe>,
"Žale IV": <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2768.1559707121833!2d14.526411!3d46.0679311!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc874c06158b15d5!2zUGFya2lyacWhxI1lIMW9YWxlIElW!5e0!3m2!1ssl!2ssi!4v1538313572671" width="100%" height="450"></iframe>,
"PH Kongresni trg": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.023456263025!2d14.501298015577168!3d46.05063037911224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47652d6161e80f27%3A0x19dcddb1876a7bb6!2sParkirna+hi%C5%A1a+Kongresni+trg!5e0!3m2!1ssl!2ssi!4v1538313588388" width="100%" height="450"></iframe>,
"Linhartova": <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2768.427454356052!2d14.5070021!3d46.0625173!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47653297582fb62d%3A0xeffa66abe1cd4c1f!2sParkiri%C5%A1%C4%8De+Linhartova!5e0!3m2!1ssl!2ssi!4v1538313613579" width="100%" height="450"></iframe>,
"Gosarjeva ulica": <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5535.657191819386!2d14.5118447!3d46.0744588!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476532eb9ca9a99f%3A0xbb52f558305c931a!2sParkirna+hi%C5%A1a+FDV+-+DPL!5e0!3m2!1ssl!2ssi!4v1538313643398" width="100%" height="450"></iframe>,
"Štembalova": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2767.629813469211!2d14.51376701557817!3d46.07842207911303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476532e916db9c25%3A0x7e5a4c6b838f2408!2zUGFya2lyacWhxI1lIMWgdGVtYmFsb3ZhIHVsaWNh!5e0!3m2!1ssl!2ssi!4v1538313686593" width="100%" height="450"></iframe>,
"PH Kolezija": <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11076.048840294963!2d14.4908288!3d46.0508547!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47652d69c099ca21%3A0x2056db87ee418159!2zS29wYWxpxaHEjWUgS29sZXppamE!5e0!3m2!1ssl!2ssi!4v1538313723976" width="100%" height="450"></iframe>,
"Barje": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2770.20123376402!2d14.497623815576343!3d46.02713327911157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47652d0fcc8113dd%3A0xf2d62b5f74cadf55!2sP%2BR+Barje!5e0!3m2!1ssl!2ssi!4v1538313765335" width="100%" height="450"></iframe>,
"Gosarjeva ulica II": <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2767.811382875766!2d14.5134293!3d46.074802!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476532ec68eaf06b%3A0x3c57e6351e6049ae!2zSnXFvm5vIHBhcmtpcmnFocSNZSBQRUY!5e0!3m2!1ssl!2ssi!4v1538313789354" width="100%" height="450"></iframe>,
"GR - Abonenti": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1384.208269090404!2d14.509830058196037!3d46.06273499477815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765329a09ecc405%3A0x2bd5ffa68a33942e!2sValjhunova+ulica%2C+1000+Ljubljana!5e0!3m2!1ssl!2ssi!4v1538325308584" width="100%" height="450"></iframe>,
"Slovenčeva ulica": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2767.077244892045!2d14.505210715578512!3d46.089437679113345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476532d908792639%3A0x89d119be5eb40709!2sSloven%C4%8Deva+ulica+153+Parking!5e0!3m2!1ssl!2ssi!4v1538325378406" width="100%" height="450"></iframe>,
"Povšetova ulica": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1369.424986264044!2d14.52940836316063!3d46.05171621713804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47653278b836470d%3A0xa45f41a1934127c8!2sPov%C5%A1etova+ulica%2C+1000+Ljubljana!5e0!3m2!1ssl!2ssi!4v1538325832273" width="100%" height="450"></iframe>,
}

const PRICES = {
"PH Kozolec" :  {  
                  "Dnevna" : "Dnevna: 1,20 €/uro",
                  "Nocna" : "Nočna (19.00 do 7.00): 1,80 €/noč"
                },
"Tivoli I" :    {
                  "Dnevna" : "Dnevna (6.00 do 22.00): Prvi dve uri 0,60 €, vsaka naslednja ura 0,60 €",
                  "Nocna" : null
                },
"Kranjčeva" : {
                "Dnevna" : "Dnevna (7.00 do 19.00): Prvi dve uri: 0,60 € vsaka naslednja ura: 0,60 €",
                "Nocna" : "Nočna (19.00 do 7.00): 1,80 €/noč"
              },
"Mirje" : {
            "Dnevna" : "Dnevna (7.00 do 19.00): 0,70 €/uro",
            "Nocna" : "Nočna (19.00 do 7.00): 1,80 €/noč"
          },
"P+R Studenec" :  {
                    "Dnevna" : "Dnevna: 2,40 €/dan",
                    "Nocna" : null
                  },
"Trg MDB" : {
              "Dnevna" : "Dnevna (7.00 do 19.00): 0,70 €/uro", 
              "Nocna" : "Nočna (19.00 do 7.00): 1,80 €/noč"
            },
"Gospodarsko raz." :  {
                        "Dnevna" : "Dnevna (7.00 do 19.00): Do 1 ure - 1,00 €\nOd 1 do 3 ur - 2,00 €\r\nOd 3 do 5 ur - 2,50 €\r\nOd 5 do 8 ur - 3,00 €\r\nNad 8 ur - 3,50 €\r\n", 
                        "Nocna" : "Nočna (19.00 do 7.00): 1,50 €/noč\r\nV času sejma na GR : prvi dve uri/ 1,00 €, vsaka naslednja ura 1,00 €"
                      },
"Bežigrad" :  {
                "Dnevna" : "Dnevna (7.00 do 19.00): 0,70 €/uro",
                "Nocna" : "Nočna (19.00 do 7.00): 1,80 €/noč"
              },
"Trg preko. brigad  " : {
                          "Dnevna" : "Dnevna (7.00 do 19.00): Za prvi dve uri 0,60 €, vsaka naslednja ura 0,60 €",
                          "Nocna" : "Nočna (19.00 do 7.00): 1,80 €/noč"
                        },
"Sanatorij Emona" : {
                      "Dnevna" : "Dnevna (7.00 do 19.00): 1,20 €/uro",
                      "Nocna" : "Nočna (19.00 do 7.00): 1,80 €/noč"
                    },
"Petkovskovo  II" : {
                      "Dnevna" : "Dnevna (7.00 do 19.00): 1,20 €/uro",
                      "Nocna" : "Nočna (19.00 do 7.00): 1,80 €/noč"
                    },
"P+R Dolgi most" :  {
                      "Dnevna" : "1,20 €/dan",
                      "Nocna" : null
                    },
"Tivoli II" : {
                "Dnevna" : "Dnevna (6.00 do 22.00): Prvi dve uri 0,60 €, vsaka naslednja ura 0,60 €\r\nAvtobus dnevna(6.00 do 22.00) 4,80 €/uro\r\nParkirnina avtodom: 3,60 €/uro",
                "Nocna" : null
              },
"Žale II" : {
              "Dnevna" : "Prvi dve uri 0,60 €,\r\nVsaka naslednja ura 0,60 €",
              "Nocna" : null
            },
"Žale I" :  {
              "Dnevna" : "Prvi dve uri 0,60 €,\r\nVsaka naslednja ura 0,60 €",
              "Nocna" : null
            },
"NUK" : {
          "Dnevna" : "Dnevna (7.00 do 19.00): 1,20 €/uro\r\nNočna (19.00 do 7.00): 1,80 €/noč",
          "Nocna" : null
        },
"Žale III" :  {
                "Dnevna" : "Prvi dve uri 0,60 €,\r\nVsaka naslednja ura 0,60 €",
                "Nocna" : null
              },
"Center Stožice" :  {
                      "Dnevna" : "P+R: 1,20 €/dan\r\nOstali uporabniki:\r\nDnevna (7.00 ure do 19.00): 1,20 €/uro",
                      "Nocna" : "Nočna (19.00 ure do 7.00): 1,80 €/noč\r\nAvtobusi (7.00 do 19.00): 4,80 €/uro"
                    },
"Žale IV":  {
              "Dnevna" : "Prvi dve uri 0,60 €,\r\nVsaka naslednja ura 0,60 €",
              "Nocna" : null
            },
"PH Kongresni trg" :  {
                        "Dnevna" : "Dnevna (7.00 ure do 24.00) do 3 ure: 1,20 €/uro\r\nNad 3 ure: 2,40 €/uro",
                        "Nocna" : "Nočna (24.00 do 7.00): 1,80 €/noč\r\n"
                      },
"Linhartova" :  {
                  "Dnevna" : "Dnevna (7.00 ure do 19.00):\r\nDo 1 ure - 1,00 €\r\nOd 1 do 3 ur - 2,00 €\r\nOd 3 do 5 ur - 2,50 €\r\nOd 5 do 8 ur - 3,00 €\r\nNad 8 ur - 3,50 €",
                  "Nocna" : "Nočna (19.00 do 7.00): 1,50 €/noč\r\nV času sejma na GR : Prvi dve uri/ 1,00 €, vsaka naslednja ura 1,00 €"
                },
"Gosarjeva ulica" : {
                      "Dnevna" : "Dnevna (7.00 ure do 19.00): 0,60 €/uro",
                      "Nocna" : "Nočna (19.00 ure do 7.00): 1,80 €/noč\r\nLetna - abonenti: 180 €/leto"
                    },
"Štembalova" :  {
                  "Dnevna" : "Mesečna - abonenti: 25,00 € /mes\r\n",
                  "Nocna" : null
                },
"PH Kolezija" : {
                  "Dnevna" : "Ob nakupu karte za kopanje: 0,40 €/uro\nDnevna (8.00 do 22.00): 0,70 €/uro",
                  "Nocna" : "Nočna (22.00 do 8.00): 1,80 €/noč"
                },
"Barje" : {
            "Dnevna" : "Enotna tarifa (00.00 do 24.00): 1,20 €/dan\r\nSobota in Nedelja - brezplačno",
            "Nocna" : null
          },
"Gosarjeva ulica II" :  {
                          "Dnevna" : "Dnevna (7.00 do 19.00): Za prvi dve uri 0,60 €, vsaka naslednja ura 0,60 €",
                          "Nocna" : "Nočna (19.00 do 07.00): 1,80 €/noč\r\nLetna - abonenti: 180 €/leto"
                        },
"GR - Abonenti" : {
                    "Dnevna" : "Ni podatka",
                    "Nocna" : null
                  },
"Slovenčeva ulica" :  {
                        "Dnevna" : "Dnevna (7.00 do 19.00): Za prvi dve uri 0,60 €, vsaka naslednja ura 0,60 €",
                        "Nocna" : "Nočna (19.00 do 7.00): 1,80 €/noč"
                      },
"Povšetova ulica" : {
  "Dnevna" : "Dnevna (7.00 do 19.00): Za prvi dve uri 0,60 €, vsaka naslednja ura 0,60 €",
  "Nocna" : "Nočna (19.00 do 7.00): 1,80 €/noč"
},
"Metelkova" : {
  "Dnevna" : "Dnevna tarifa (med 07:00 in 19:00):1,20€/uro",
  "Nocna" : "Nočna tarifa od 19.00 do 07.00 ure; 1,80 €/noč"
}

};

//======================APPLICATION===================================

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue : "",
      allData: {Parkirisca : []},
      activeTab : "list",
      parking_place : null,
      chosen : false,
      isActiveList : "active",
      isActiveMap : null
    }
    this.getAllData();
    this.handleChange = this.handleChange.bind(this);
  } 

  async getAllData(){
    var data;
    await axios.get( 'https://opendata.si/promet/parkirisca/lpt/')
      .then(function (response) {
        console.log(response.data);
        data = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    await this.setState({allData: data});
    return;
  }

//================================================================================
//FIRST I CHECK FOR WHICH STATIONS CONTAINS SEARCH STRING THEN
//CALLBACK FUNCTION TO CREATE ARRAY OF FILTERED STATIONS
  checkSearch(search){

    var temp_array = [];

    //var temp_string_search = search.replace(/\š/gi,'s').replace(/\č/gi,'c').replace(/\ž/gi,'z').toLowerCase();
    if(search === ""){

      if(this.state.allData.Parkirisca.length > 0){
        for (var i=0; i<Object.keys(this.state.allData.Parkirisca).length; i++){
          temp_array.push(i);
        }
      }
    }
    else{
      for (var i=0; i<Object.keys(this.state.allData.Parkirisca).length; i++){
        var temp_string_data = this.state.allData.Parkirisca[i.toString()].Ime.replace(/\š/gi,'s').replace(/\č/gi,'c').replace(/\ž/gi,'z').toLowerCase();

        var temp_string_data_orig = this.state.allData.Parkirisca[i.toString()].Ime.toLowerCase();
        
        var words_in_string_orig = temp_string_data_orig.split(" ");
        var words_in_string = temp_string_data.split(" ");

        var correct_characters_in_words1 = [];
        for(var a = 0; a < words_in_string_orig.length; a++) {
          correct_characters_in_words1[a] = 0;
        }

        var correct_characters_in_words2 = [];
        for(var b = 0; b < words_in_string.length; b++) {
          correct_characters_in_words2[b] = 0;
        }

        var correct_characters1 = 0;
        var correct_characters2 = 0;

        //LOOP FOR CHECKING SEARCH COMPARISON TO WHOLE ADRESS

        for(var j=0; j<search.length;j++){
          //Check with š č ž
          if(search[j].toLowerCase() === temp_string_data_orig[j]){
            if(correct_characters1 === j){
              correct_characters1 += 1;
            }
          }

          //Check without č š ž
          if(search[j].toLowerCase() === temp_string_data[j]){
            if(correct_characters2 === j){
              correct_characters2 += 1;
            }
          }
        }

        //LOOP FOR COMPARISON SEARCH VALUE TO VARIOUS WORDS IN ADRESS

        for(var c=0; c<words_in_string.length; c++){
          for(var d=0; d<search.length; d++){
            if(search[d].toLowerCase() === words_in_string_orig[c][d]){
              correct_characters_in_words1[c] += 1;
            }
            if(search[d].toLowerCase() === words_in_string[c][d]){
              correct_characters_in_words2[c] += 1;
            }
          }
        }

        //Check the results of comparison

        //FIRST FOR WORDS IN ADRESS

        for(var e=0; e<correct_characters_in_words1.length; e++){      
          if(correct_characters_in_words1[e] === search.length){
            if(!temp_array.includes(i)){
              temp_array.push(i);
            }
          }
          else if(correct_characters_in_words2[e] === search.length){
            if(!temp_array.includes(i)){
              temp_array.push(i);
            }
          }

        //HERE WE CHECK COMPARISON BETWEEN WHOLE ADRESS AND SEARCH VALUE
          else if(correct_characters1 === search.length){
            if(!temp_array.includes(i)){
              temp_array.push(i);
            }
          }
          else if(correct_characters2 === search.length){
            if(!temp_array.includes(i)){
              temp_array.push(i);
            }
          }     
        }
      }
    }
    if(search === "" && this.state.allData.Parkirisca.length > 0){
      var all_parking_places = [30]
      return this.filterParkingPlaces(temp_array);
    }
    else if(temp_array.length > 0){
      return this.filterParkingPlaces(temp_array);
    }
    else{
      return <li>Ne najde parkirišč<br/></li>
    }
  }

  filterParkingPlaces(filtered_parking_places){
    var displayFilteredParkingPlaces = [];
    for (var i=0; i<filtered_parking_places.length; i++){
      if(this.state.allData.Parkirisca[filtered_parking_places[i].toString()].zasedenost){
        let temp_free;
        if(this.state.allData.Parkirisca[filtered_parking_places[i].toString()].zasedenost.P_kratkotrajniki < 0){
          temp_free = 0;
        }
        else{
          temp_free = this.state.allData.Parkirisca[filtered_parking_places[i].toString()].zasedenost.P_kratkotrajniki;
        }
        displayFilteredParkingPlaces.push(
            <ParkingPlace1
              handleBack={() => this.handleBack()}
              chosen={this.state.chosen}
              name={this.state.allData.Parkirisca[filtered_parking_places[i].toString()].Ime}
              number={filtered_parking_places[i]}
              handleClickOnParkingPlace={(number) => this.handleClickOnParkingPlace(number)}
              priceDay={PRICES[this.state.allData.Parkirisca[filtered_parking_places[i].toString()].Ime.toString()]["Dnevna"]}
              priceNight={PRICES[this.state.allData.Parkirisca[filtered_parking_places[i].toString()].Ime.toString()]["Nocna"]}
              free={temp_free}
              allSpaces={this.state.allData.Parkirisca[filtered_parking_places[i].toString()].St_mest}
              invalidi={this.state.allData.Parkirisca[filtered_parking_places[i].toString()].Invalidi_St_mest}
            />
        );
      }else{
        if(this.state.allData.Parkirisca[filtered_parking_places[i].toString()].Ime !== "Parkomati"){
          displayFilteredParkingPlaces.push(
            <ParkingPlace2
              chosen={this.state.chosen}
              handleClickOnParkingPlace={(number) => this.handleClickOnParkingPlace(number)}
              handleBack={() => this.handleBack()}
              name={this.state.allData.Parkirisca[filtered_parking_places[i].toString()].Ime}
              number={filtered_parking_places[i]}
              priceDay={PRICES[this.state.allData.Parkirisca[filtered_parking_places[i].toString()].Ime.toString()]["Dnevna"]}
              priceNight={PRICES[this.state.allData.Parkirisca[filtered_parking_places[i].toString()].Ime.toString()]["Nocna"]}
              allSpaces={this.state.allData.Parkirisca[filtered_parking_places[i].toString()].St_mest}
              invalidi={this.state.allData.Parkirisca[filtered_parking_places[i].toString()].Invalidi_St_mest}
            />
          );
        }
      }
    };
    return displayFilteredParkingPlaces;
  }

  async handleClickOnParkingPlace(number){
    await this.setState({chosen : true});
    await this.setState({parking_place_name: this.state.allData.Parkirisca[number.toString()].Ime});
    await this.setState({parking_place: this.filterParkingPlaces([number])});
  }

  handleChange(event) {
    return this.setState({searchValue: event.target.value});
  }

  handleChangeParking(){
    return this.setState({activeTab: "list"});
  }

  handleChangeMap(){
    return this.setState({activeTab: "map"});
  }

  async handleBack(){
    await this.setState({parking_place : null});
    await this.setState({chosen : false})
  }

  async changeToggleButton1(){
    if(!this.state.list){
      await this.setState({isActiveList : "active"});
      await this.setState({isActiveMap : null});
      return await this.setState({activeTab: "list"});
    }
  }

  async changeToggleButton2(){
    if(!this.state.map){
      await this.setState({isActiveMap : "active"});
      await this.setState({isActiveList : null});
      return await this.setState({activeTab: "map"});
    }
  }

//===========================================================================

  render() {
 //first page
    var toggleButtonClass1 = ["station"];
      if(this.state.isActiveList === "active") {
        toggleButtonClass1.push('active');
      }

    var toggleButtonClass2 = ["station"];
      if(this.state.isActiveMap === "active") {
        toggleButtonClass2.push('active');
      }


    if(this.state.parking_place){
      return(
        <div id="parkirisce">
          {this.state.parking_place}
          {MAPS[this.state.parking_place_name]}
        </div>);
    }
    else{ 
      if(this.state.activeTab === "list"){
        return(
          <div id="parkirisce" className="main-container">
              <div className="page__header">
                 
                  <div className="station-toggle">
                      <div className={toggleButtonClass1.join(' ')} onClick={() => this.changeToggleButton1()}>Parkirišča</div>
                      <div className={toggleButtonClass2.join(' ')} onClick={() => this.changeToggleButton2()}>Zemljevid</div>
                  </div>
                  
                  <h1 className="page__title ui-page-title">Poiščite parkirišče</h1>
                  <input value={this.state.searchValue} onChange={this.handleChange} type="text" className="ui-input ui-input__ondark" placeholder="Vpiši parkirišče..."/>
                  <div className="header__image">
                      <img src="/public/lj-parkirisca/img/i_parking.svg" height="50" alt=""/>
                  </div>
              </div>
              
              <div className="page__content">
                  <h2 className="list-title">Parkirišča</h2>
                  
                  <ul className="ui-list parking-spaces">
                      { this.checkSearch(this.state.searchValue) }
                  </ul>
              </div>
          </div>
        );
      }
      else if(this.state.activeTab === "map"){
        return(
          <div className="main-container">     
              <div className="page__header">
                 
                  <div className="station-toggle">
                      <div className={toggleButtonClass1.join(' ')} onClick={() => this.changeToggleButton1()}>Parkirišča</div>
                      <div className={toggleButtonClass2.join(' ')} onClick={() => this.changeToggleButton2()}>Zemljevid</div>
                  </div>
                  
                  <h1 className="page__title ui-page-title">Poiščite parkirišče</h1>
                  
                  <div className="header__image">
                      <img src="/public/lj-parkirisca/img/i_parking.svg" height="50" alt=""/>
                  </div><br/>
              </div>
              
              <div className="page__content">
                  <iframe src="https://www.google.com/maps/d/u/2/embed?mid=1xBpXwxQPmg20ERJvzWzU7pkInumwS9ho" width="100%" height="480"></iframe>
              </div>
          </div>
        );
      }
    }
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);



