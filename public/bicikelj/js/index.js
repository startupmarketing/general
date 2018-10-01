const PUBLIC_FILES_URL = "https://api.messengerbot.si/public/";
const URL = "https://api.messengerbot.si/";

const MAPS = {
"PREŠERNOV TRG-PETKOVŠKOVO NABREŽJE": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.9848776784347!2d14.504582715577222!3d46.05139987911234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x57162798f5573a9e!2sBicike(lj)!5e0!3m2!1ssl!2ssi!4v1538329135254" width="100%" height="450"></iframe>,
"POGAČARJEV TRG-TRŽNICA": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.0032169820993!2d14.505073515577221!3d46.051034079112235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5374f3e0487200a4!2sBicike(lj)!5e0!3m2!1ssl!2ssi!4v1538329161210" width="100%" height="450"></iframe>,
"KONGRESNI TRG-ŠUBIČEVA ULICA": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.0303798001983!2d14.501901115577128!3d46.05049227911223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x846fdca146382921!2sBicike(lj)!5e0!3m2!1ssl!2ssi!4v1538329199871" width="100%" height="450"></iframe>,
"CANKARJEVA UL.-NAMA": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.92644984963!2d14.500553615577285!3d46.05256527911233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x849ea77c6517aec0!2sBicike(lj)!5e0!3m2!1ssl!2ssi!4v1538329293051" width="100%" height="450"></iframe>,
"BREG": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.2157852393234!2d14.503077915577029!3d46.046793979112174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe83873a297a3a232!2sBicike(lj)!5e0!3m2!1ssl!2ssi!4v1538329322461" width="100%" height="450"></iframe>,
"GRUDNOVO NABREŽJE-KARLOVŠKA C.": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.2709188603967!2d14.503990415577015!3d46.04569417911214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa3b86960df16d76e!2sBicike(lj)!5e0!3m2!1ssl!2ssi!4v1538330469958" width="100%" height="450"></iframe>,
"MIKLOŠIČEV PARK": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.8435339110906!2d14.504894815577298!3d46.05421907911235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5669d0f1500f4b7c!2sBicike(lj)!5e0!3m2!1ssl!2ssi!4v1538330499637" width="100%" height="450"></iframe>,
"BAVARSKI DVOR": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d346.08905771607147!2d14.50547089278107!3d46.056833285713225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x375f979db2d24e24!2sBicike(lj)!5e0!3m2!1ssl!2ssi!4v1538331130485" width="100%" height="450"></iframe>,
"TRG OF-KOLODVORSKA UL.": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.68783342551!2d14.508068715577433!3d46.057324479112424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x930a81bae369be9e!2sBicike(lj)!5e0!3m2!1ssl!2ssi!4v1538331181886" width="100%" height="450"></iframe>,
"MASARYKOVA DDC": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.673047122182!2d14.512488915577444!3d46.05761937911244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa0dd08115ae5346d!2sBicike(lj)!5e0!3m2!1ssl!2ssi!4v1538331208076" width="100%" height="450"></iframe>,
"VILHARJEVA CESTA": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.551173901858!2d14.510831315577517!3d46.06004997911251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8081f0d9652f573b!2sBicike(lj)!5e0!3m2!1ssl!2ssi!4v1538331431154" width="100%" height="450"></iframe>,
"PARK NAVJE-ŽELEZNA CESTA": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.3685502962235!2d14.511066115577641!3d46.06369197911268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa98d92811a27fdd6!2sBicike(lj)!5e0!3m2!1ssl!2ssi!4v1538331490135" width="100%" height="450"></iframe>,
"TRG MDB": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.177680382844!2d14.493521315577109!3d46.04755407911222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa3957aed82dfd9cc!2sBicike(lj)!5e0!3m2!1ssl!2ssi!4v1538331560494" width="100%" height="450"></iframe>,
"PARKIRIŠČE NUK 2-FF": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.23816365699!2d14.499188115577013!3d46.046347579112144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb04c40703a0bcdea!2sPostaja+BicikeLJ+%C5%A1t.+0!5e0!3m2!1ssl!2ssi!4v1538331619107" width="100%" height="450"></iframe>,
"AMBROŽEV TRG": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.0718605252428!2d14.514383815577169!3d46.04966487911222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3caf27e49dd3f1e3!2sBicike(lj)!5e0!3m2!1ssl!2ssi!4v1538331731028" width="100%" height="450"></iframe>,
"GH ŠENTPETER-NJEGOŠEVA C.": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.9245647384328!2d14.517062915577274!3d46.052602879112236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb06ba6e2aa9144a5!2sBicike(lj)!5e0!3m2!1ssl!2ssi!4v1538331792535" width="100%" height="450"></iframe>,
"ILIRSKA ULICA": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.8957364265525!2d14.51140671557728!3d46.053177879112305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x67109a490f89aa85!2sBicike(lj)!5e0!3m2!1ssl!2ssi!4v1538331823960" width="100%" height="450"></iframe>,
"TRŽAŠKA C.-ILIRIJA": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.3259010735305!2d14.484654015576968!3d46.04459737911209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc29eb63701a03853!2sBicike(lj)!5e0!3m2!1ssl!2ssi!4v1538331856032" width="100%" height="450"></iframe>,
"TIVOLI": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.5724491754077!2d14.49593761557754!3d46.059625679112486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x41a567ef6747d581!2sBicike(lj)!5e0!3m2!1ssl!2ssi!4v1538331892620" width="100%" height="450"></iframe>,
"STARA CERKEV": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.3834835304797!2d14.49245841557763!3d46.06339417911256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8bbbd63d7c72c07a!2sBicike(lj)!5e0!3m2!1ssl!2ssi!4v1538332301890" width="100%" height="450"></iframe>,
"KINO ŠIŠKA": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.088290064566!2d14.487435015577796!3d46.06928067911277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3f67372ade1c7495!2sBicikeLJ(Kino+%C5%A0i%C5%A1ka)!5e0!3m2!1sen!2ssi!4v1538332922311" width="100%" height="450"></iframe>,
"ŠPICA": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.551519041466!2d14.509842015576897!3d46.04009647911203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb9054691144fc330!2sBicike(lj)!5e0!3m2!1sen!2ssi!4v1538332960511" width="100%" height="450"></iframe>,
"BARJANSKA C.-CENTER STAREJŠIH TRNOVO": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.5140951810586!2d14.497318015576878!3d46.04084307911194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf5a857d1ecedce34!2sBicike(lj)!5e0!3m2!1sen!2ssi!4v1538333019253" width="100%" height="450"></iframe>,
"ZALOŠKA C.-GRABLOVIČEVA C.": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.835090775246!2d14.527561315577275!3d46.054387479112265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x25da65243249511!2sBicikelj!5e0!3m2!1sen!2ssi!4v1538333044777" width="100%" height="450"></iframe>,
"TRŽNICA MOSTE": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.763989998981!2d14.532061315577302!3d46.05580557911242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDAzJzIwLjkiTiAxNMKwMzInMDMuMyJF!5e0!3m2!1sen!2ssi!4v1538333072584" width="100%" height="450"></iframe>,
"ROŽNA DOLINA-ŠKRABČEVA UL.": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.986381726181!2d14.49044731557719!3d46.051369879112244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x191e6d7ce796c48!2sBicike(lj)!5e0!3m2!1sen!2ssi!4v1538333123687" width="100%" height="450"></iframe>,
"DUNAJSKA C.-PS PETROL": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.298401204813!2d14.506955915577675!3d46.0650908791126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaf0ea251dfc701a5!2sBicike(lj)!5e0!3m2!1sen!2ssi!4v1538333490113" width="100%" height="450"></iframe>,
"PLEČNIKOV STADION": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.081369354187!2d14.508335115577786!3d46.06941867911273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x840090cc5414a7ef!2sBicike(lj)!5e0!3m2!1sen!2ssi!4v1538333558989" width="100%" height="450"></iframe>,
"DUNAJSKA C.-PS MERCATOR": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2767.850143202429!2d14.508973015577983!3d46.074029179112976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd0640634568ac295!2sBicike(lj)!5e0!3m2!1sen!2ssi!4v1538333692345" width="100%" height="450"></iframe>,
"VOJKOVA C.-BOŽIČEVA C.": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2767.7484391454973!2d14.517621815577995!3d46.07605697911288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb78e154cd24c1b1c!2sBicike(lj)!5e0!3m2!1sen!2ssi!4v1538333715442" width="100%" height="450"></iframe>,
"ŠPORTNI CENTER STOŽICE": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2767.4266878353387!2d14.518148315578282!3d46.0824716791131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc88f2b2b241eb097!2sBicike(lj)!5e0!3m2!1sen!2ssi!4v1538333736643" width="100%" height="450"></iframe>,
"KOPRSKA ULICA": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.884378220969!2d14.480294115576616!3d46.03345557911184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4f0a76c22984bfbd!2sBicike(lj)!5e0!3m2!1sen!2ssi!4v1538333783132" width="100%" height="450"></iframe>,
"MERCATOR CENTER ŠIŠKA": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2767.195676821477!2d14.473163415578403!3d46.08707687911332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6ba2a10d3176f174!2sBicike(lj)!5e0!3m2!1sen!2ssi!4v1538333823768" width="100%" height="450"></iframe>,
"CITYPARK": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.109784284428!2d14.544086315577783!3d46.068852079112744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdd573fac3656754c!2sBicike(lj)!5e0!3m2!1sen!2ssi!4v1538334067670" width="100%" height="450"></iframe>,
"BTC CITY/DVORANA A": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.2922181369227!2d14.541904615577666!3d46.06521417911256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf513e760d35fe40e!2sBicike(lj)!5e0!3m2!1sen!2ssi!4v1538334096532" width="100%" height="450"></iframe>,
"BTC CITY ATLANTIS": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.404333770721!2d14.545837715577617!3d46.06297837911252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb262c33389a25edc!2sBicike(lj)!5e0!3m2!1sen!2ssi!4v1538334121021" width="100%" height="450"></iframe>,
"TRNOVO": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.6660884694434!2d14.497826315576718!3d46.0378107791119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3511475a003b2061!2sBicike(lj)!5e0!3m2!1sen!2ssi!4v1538334155136" width="100%" height="450"></iframe>,
"P+R BARJE": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2770.1875374493616!2d14.497331415576419!3d46.02740657911167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xae65b3f7fe3a9ca9!2sBicikelj+Barje!5e0!3m2!1sen!2ssi!4v1538334183474" width="100%" height="450"></iframe>,
"P + R DOLGI MOST": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.7057158241696!2d14.463089615576717!3d46.03702017911191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x96055ad109267f4d!2sBicike(lj)!5e0!3m2!1sen!2ssi!4v1538334218740" width="100%" height="450"></iframe>,
"BONIFACIJA": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.5537095207396!2d14.471260915576806!3d46.04005277911196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8a4eacf679abad85!2sBicike(lj)!5e0!3m2!1sen!2ssi!4v1538334250769" width="100%" height="450"></iframe>,
"ANTONOV TRG": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.471277216679!2d14.474817715576894!3d46.04169727911206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2e25e065955280c5!2sBicike(lj)!5e0!3m2!1sen!2ssi!4v1538334288538" width="100%" height="450"></iframe>,
"BRATOVŠEVA PLOŠČAD": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2767.0862799569722!2d14.511476915578475!3d46.08925757911319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x498605b45953fdd4!2sBicike(lj)!5e0!3m2!1sen!2ssi!4v1538334350869" width="100%" height="450"></iframe>,
"BS4-STOŽICE": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2767.209286560526!2d14.511873515578435!3d46.08680557911329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x52d25beff4bedf8f!2sBicike(lj)!5e0!3m2!1sen!2ssi!4v1538334503268" width="100%" height="450"></iframe>,
"SAVSKO NASELJE 2-LINHARTOVA CESTA": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.3235194728845!2d14.515860715577693!3d46.064589979112554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x39a143b24ced765b!2sBicike(lj)!5e0!3m2!1sen!2ssi!4v1538334560750" width="100%" height="450"></iframe>,
"SAVSKO NASELJE 1-ŠMARTINSKA CESTA": <iframe src="https://www.google.com/maps/place/Bicike(lj)/@46.063206,14.5222098,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xfed5bd8af7c99e0e!8m2!3d46.063206!4d14.5243985" width="100%" height="450"></iframe>,
"SITULA": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.563394899336!2d14.519967442838873!3d46.059806251982806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xac47a26908b91835!2sBicike(lj)!5e0!3m2!1sen!2ssi!4v1538334629644" width="100%" height="450"></iframe>,
"ŠTEPANJSKO NASELJE 1-JAKČEVA ULICA": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.9037030957484!2d14.542969515577225!3d46.0530189791124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbdd7112614bf5db8!2sBicike(lj)!5e0!3m2!1sen!2ssi!4v1538334667411" width="100%" height="450"></iframe>,
"HOFER-KAJUHOVA": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.732031450003!2d14.538578615577402!3d46.05644297911244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1e58d247f536c2fe!2sBicike(lj)!5e0!3m2!1sen!2ssi!4v1538334696770" width="100%" height="450"></iframe>,
"BRODARJEV TRG": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.835617218499!2d14.551066415577337!3d46.05437697911231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2ea6d2f94230e421!2sBicike(lj)!5e0!3m2!1sen!2ssi!4v1538334813892" width="100%" height="450"></iframe>,
"PREGLOV TRG": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.8268431521005!2d14.556742915577374!3d46.05455197911245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xad787a16841ead26!2sBicike(lj)!5e0!3m2!1sen!2ssi!4v1538334844293" width="100%" height="450"></iframe>,
"LIDL-LITIJSKA CESTA": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.1580186678175!2d14.545077315577066!3d46.04794627911214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x88ce0f61d65103ee!2sBicike(lj)!5e0!3m2!1sen!2ssi!4v1538334865525" width="100%" height="450"></iframe>,
"ŽIVALSKI VRT": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.9311175001585!2d14.469950215577295!3d46.05247217911236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDAzJzA4LjkiTiAxNMKwMjgnMTkuNyJF!5e0!3m2!1sen!2ssi!4v1538334901828" width="100%" height="450"></iframe>,
"CESTA NA ROŽNIK": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.891981205052!2d14.483986215577263!3d46.05325277911228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x81fb0a134f987f82!2sBicike(lj)!5e0!3m2!1sen!2ssi!4v1538334933710" width="100%" height="450"></iframe>,
"ŠMARTINSKI PARK": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.2963401836005!2d14.527768315577688!3d46.06513197911273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x419e479b4f0d1e91!2sBicike(lj)!5e0!3m2!1sen!2ssi!4v1538334961295" width="100%" height="450"></iframe>,
"POLJANSKA-POTOČNIKOVA": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.1054597900243!2d14.520657515577136!3d46.048994679112155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xae77e53be3299a5f!2sBicike(lj)!5e0!3m2!1sen!2ssi!4v1538334983227" width="100%" height="450"></iframe>,
"SREDNJA FRIZERSKA ŠOLA": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2767.5268980754595!2d14.489276015578168!3d46.08047387911317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x58a8822e125916a6!2sBicike(lj)!5e0!3m2!1sen!2ssi!4v1538335008766" width="100%" height="450"></iframe>,
"POVŠETOVA-GRABLOVIČEVA": <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.958521625304!2d14.528190815577206!3d46.05192557911232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4de613045811c4b1!2sBicike(lj)!5e0!3m2!1sen!2ssi!4v1538335028846" width="100%" height="450"></iframe>,
}


//======================APPLICATION===================================

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue : "",
      allData: {markers : []},
      activeTab : "list",
      station : null,
      chosen : false,
      isActiveList: "active",
      isActiveMap: null,
      stationName: null
    }
    this.getAllData();
    this.handleChange = this.handleChange.bind(this);
  } 

  async getAllData(){
    var data;
    await axios.get( 'https://opendata.si/promet/bicikelj/list/.json')
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

    for (var i=1; i<Object.keys(this.state.allData.markers).length; i++){
      
      var temp_string_data = this.state.allData.markers[i.toString()].fullAddress.replace(/\š/gi,'s').replace(/\č/gi,'c').replace(/\ž/gi,'z').toLowerCase();
      var temp_string_data_orig = this.state.allData.markers[i.toString()].fullAddress.toLowerCase();

      var words_in_string_orig = temp_string_data_orig.split(" ");
      for(var h=0; h<words_in_string_orig.length; h++){
          if(words_in_string_orig[h].includes("-")){
            let temp_array = words_in_string_orig[h].split("-");
            words_in_string_orig[h] = temp_array[0];
            words_in_string_orig.push(temp_array[1]);
          }
      }

      var words_in_string = temp_string_data.split(" ");
      for(var t=0; t<words_in_string.length; t++){
          if(words_in_string[t].includes("-")){
            let temp_array = words_in_string[t].split("-");
            words_in_string[t] = temp_array[0];
            words_in_string.push(temp_array[1]);
          }
      }


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
      
      for(var j=0; j<search.length;j++){
        //Check first with š č ž
        if(search[j].toLowerCase() === temp_string_data_orig[j]){
          if(correct_characters1 === j){
            correct_characters1 += 1;
          }
        }

        //Check second without č š ž
        if(search[j].toLowerCase() === temp_string_data[j]){
          if(correct_characters2 === j){
            correct_characters2 += 1;
          }
        }    
      }

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

    if(temp_array.length > 0){
      return this.filterStations(temp_array);
    }else{
      return <li>Ne najde parkirišč<br/></li>
    }
  }

  filterStations(filtered_stations){
    var displayFilteredStations = [];
    for (var i=0; i<filtered_stations.length; i++){

      displayFilteredStations.push(
        <Station
          number={filtered_stations[i]}
          name={this.state.allData.markers[filtered_stations[i].toString()].fullAddress}
          free={this.state.allData.markers[filtered_stations[i].toString()].station.available}
          allSpaces={this.state.allData.markers[filtered_stations[i].toString()].station.total}
          chosen={this.state.chosen}
          handleClickOnStation={(number) => this.handleClickOnStation(number)}
          handleBack={() => this.handleBack()}
        />
      );

    };
    return displayFilteredStations;
  }

  async handleClickOnStation(number){
    console.log(number);
    await this.setState({chosen : true});
    await this.setState({stationName: this.state.allData.markers[number.toString()].fullAddress})
    await this.setState({station: this.filterStations([number])});
  }

  handleChange(event) {
    return this.setState({searchValue: event.target.value});
  }

  handleChangeStations(){
    return this.setState({activeTab: "list"});
  }

  handleChangeMap(){
    return this.setState({activeTab: "map"});
  }

  async handleBack(){
    await this.setState({station : null});
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

//=================================================================================

  render() { 
    var toggleButtonClass1 = ["station"];
      if(this.state.isActiveList === "active") {
        toggleButtonClass1.push('active');
      }

    var toggleButtonClass2 = ["station"];
      if(this.state.isActiveMap === "active") {
        toggleButtonClass2.push('active');
      }
 //first page 
    if(this.state.station){
      return(
        <div>
          {this.state.station}
          {MAPS[this.state.stationName]}
          
        </div>);
    }
    else{ 
      if(this.state.activeTab === "list"){
        return(
          <div className="main-container">

              <div className="page__header">
                 
                  <div className="station-toggle">
                      <div className={toggleButtonClass1.join(' ')} onClick={() => this.changeToggleButton1()}>Postajališča</div>
                      <div className={toggleButtonClass2.join(' ')} onClick={() => this.changeToggleButton2()}>Zemljevid</div>
                  </div>
                  
                  <h1 className="page__title ui-page-title">Poiščite postajališče</h1>
                  <input type="text" className="ui-input ui-input__ondark" placeholder="Vpiši postajališče..." value={this.state.searchValue} onChange={this.handleChange}/>
                  <div className="header__image">
                      <img src="/public/bicikelj/img/i_bicikelj.png" height="50" alt=""/>
                  </div>
              </div>
              
              <div className="page__content">
                  <h2 className="list-title">Postajališča</h2>
                  
                  <ul className="ui-list bicycle-stations">
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
                      <div className={toggleButtonClass1.join(' ')} onClick={() => this.changeToggleButton1()}>Postajališča</div>
                      <div className={toggleButtonClass2.join(' ')} onClick={() => this.changeToggleButton2()}>Zemljevid</div>
                  </div>
                  
                  <h1 className="page__title ui-page-title">Poiščite postajališče</h1>
                  <div className="header__image">
                      <img src="/public/bicikelj/img/i_bicikelj.png" height="50" alt=""/>
                  </div><br/>
              </div>
              
              <div className="page__content">
                  <iframe src="https://www.google.com/maps/d/u/2/embed?mid=1TmqWyqRmBvupyjM25gKkJKmc9FY5Kdkj&ll=46.06126496219192%2C14.51133310991213&z=13" width="100%" height="480"></iframe>
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



