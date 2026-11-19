/* =====================================================================
   PËRMBAJTJA E FAQES
   ---------------------------------------------------------------------
   
   ===================================================================== */

window.PESHORJA = {

  // true = shfaq shiritin "Version demonstrues" në krye të faqes.
  
  demo: false,

  /* ---------------------------------------------------------------
     1. TË DHËNAT E FAQES
     --------------------------------------------------------------- */
  faqja: {
    emri: "KalibrA",
    pershkrimi: "Platformë per modelime socio-ekonomike dhe shkencore.",
    qyteti: "Tiranë/Tirana",
    titulli: "Ndërtojmë qartësi përmes matjeve dhe modelimit.",
    titulliTheksuar: "SocioLab&Quantis",
    hyrja: "Analizojmë : Socio-ekonomi&Vendimmarrje&Shkencë.",
    email: "metrics.and.models@proton.me",
    telefoni: "",          // p.sh. "+355 69 123 4567"; bosh = nuk shfaqet
    autori: "Admin",            // emri yt; shfaqet në fund të faqes
    afatiPergjigjes: "Sa më shpejt"   // "Do t'ju përgjigjemi brenda ..."
  },

  /* ---------------------------------------------------------------
     2. LIDHJA ME GOOGLE SHEETS (shih UDHEZUES.md, hapi 4)
     
     --------------------------------------------------------------- */
  serveri: {
    url: "https://script.google.com/macros/s/AKfycbwk6xXgtfcXdcQ51DOTl6Ht-poenCwZXycHlPB2Z3IHV96TfFBWOTXKc-3OzW0mNwYu/exec"   
  },

  /* ---------------------------------------------------------------
     3. DRITARJA PRIORITARE
     lloji: "moti"   = moti sot dhe 10 ditët në vijim
     lloji: "lidhje" = vetëm një lidhje e rëndësishme (shih "lidhja")
     --------------------------------------------------------------- */
  dritarja: {
    lloji: "moti",
    titulli: "Moti sot dhe 10 ditët në vijim",
    qytetiParazgjedhur: "Tiranë",
    qytetet: [
      { emri: "Tiranë",      lat: 41.3275, lon: 19.8187 },
      { emri: "Durrës",      lat: 41.3231, lon: 19.4414 },
      { emri: "Shkodër",     lat: 42.0683, lon: 19.5126 },
      { emri: "Vlorë",       lat: 40.4667, lon: 19.4897 },
      { emri: "Korçë",       lat: 40.6186, lon: 20.7808 },
      { emri: "Elbasan",     lat: 41.1125, lon: 20.0822 },
      { emri: "Fier",        lat: 40.7239, lon: 19.5561 },
      { emri: "Berat",       lat: 40.7058, lon: 19.9522 },
      { emri: "Gjirokastër", lat: 40.0758, lon: 20.1389 },
      { emri: "Kukës",       lat: 42.0767, lon: 20.4219 },
      { emri: "Prishtinë",   lat: 42.6629, lon: 21.1655 }
    ],
    // Open-Meteo është falas vetëm për përdorim jotregtar. Kur faqja ka
    // reklama ose shet shërbime, merr një abonim te open-meteo.com dhe
    // vendos këtu adresën me prefiksin "customer-" dhe çelësin.
    apiUrl: "https://api.open-meteo.com/v1/forecast",
    apiKey: "",

    // Lidhja prioritare: shfaqet poshtë motit (ose vetëm ajo, kur lloji është "lidhje").
    lidhja: {
      titulli: "Kursi zyrtar i këmbimit sot",
      burimi: "Banka e Shqipërisë",
      pershkrimi: "Kurset ditore të lekut ndaj euros dhe monedhave të tjera.",
      url: "https://www.bankofalbania.org/"
    }
  },
/* ---------------------------------------------------------------
     3B. MODELI I DITËS (Lidhje direkte me Google Form)
     --------------------------------------------------------------- */
  modeliIDites: {
    aktiv: true,
    titulli: "Modeli i Ditës: Vlerësimi i i integruar",
    pershkrimi: "Jepni gjykimin tuaj në formularin e sotëm. Përgjigjet mblidhen direkt në Google Forms.",
    butoniTekst: "Plotëso Google Form",
    googleFormUrl: "https://forms.gle/bhA4yUcjES714Ckb9"
  },

  /* ---------------------------------------------------------------
     4. MODELET DHE GJETJET
     Çdo model ka butonin "Përgjigje për modelin". Ata me neFokus: true
     dalin edhe te "Gjetjet e fundit" (rekomandohen 3).
     id: pa hapësira dhe pa ë/ç; përdoret në lidhje: faqja#m-<id>

     grafiku.lloji:
       "shtylla"     = shtylla horizontale (me "etiketat" dhe "vlerat")
       "parashikim"  = seri kohore me parashikim dhe interval, nga një CSV
       "vije"        = seri kohore e thjeshtë, nga "etiketat"/"vlerat" ose nga CSV
     tabela: { burimi: "te-dhena/skedari.csv" } ose
             { kolonat: [...], rreshtat: [[...], [...]] }
     --------------------------------------------------------------- */
  modelet: [
    {
      id: "Kakistokracia-Sistemike",
      lloji: "MCMD",
      titulli: "Pse votojme me pak te duhurin?",
      data: "2026-10-28",
      neFokus: true,
      shembull: true,
      pelqime: 41,
      kryesorja: { vlera: "27%", etiketa: "e simulimeve e nxjerrin të parë Populizmi dhe Anti-Elitizmi" },
      permbledhja: "Paneli i ekspertëve e rendit si shfaqje te ketij fenomeni  Refuzimin i Elitave Teknokrate, dhe Dobësia si garanci besnikërie." ,
      treguesit: [
        ["Ekspertë në panel", "9"],
        ["Kritere", "4"],
        ["Raporti i konsistencës (CR)", "0,026"],
        ["Simulime (bootstrap)", "10 000"]
      ],
      grafiku: {
        lloji: "shtylla",
        titulli: "Prioriteti global i alternativave",
        etiketat: ["Populizimi dhe Anti-Elitarizimi", "Defektet dhe papershtashmerite e Sistemeve Zgjedhore ", "Justifikimi i Mangesive Personale dhe Joprofesionalizmit ", "Pragmatizmi dhe Dobësia si garanci besnikërie"],
        vlerat: [0.27, 0.23, 0.24,0.26],
        decimale: 3,
        theksuar: 0
      },
      grafiketShtese: [
        {
          lloji: "shtylla",
          titulli: "AI ne Edukim dhe Aktivitetit Akademike",
          etiketat: ["Cilësia e të nxënit", "Integriteti akademik", "Barazia në akses", "Kostoja e zbatimit"],
          vlerat: [0.361, 0.299, 0.213, 0.127],
          decimale: 3
        },
        {
          lloji: "shtylla",
          titulli: "Sa shpesh del e para secila alternativë (10 000 simulime)",
          etiketat: ["Përdorim i udhëhequr me rregulla", "Ndalim në detyra dhe provime", "Integrim i plotë në kurrikul"],
          vlerat: [65.1, 34.9, 0],
          njesia: "%",
          decimale: 1,
          theksuar: 0
        }
      ],
      tabela: { burimi: "te-dhena/ahp-ai-arsim.csv", emrat: { alternativa: "Alternativa", prioriteti_global: "Prioriteti global", prob_e_para: "Del e para" } },
      metoda: "Nëntë ekspertë (mësues, drejtues shkollash, specialistë IT dhe juristë) plotesuan matricen Saaty (1–9). ",
      skedaret: [
        { titulli: "Rezultatet dhe peshat", lloji: "CSV", url: "te-dhena/ahp-ai-arsim.csv" },
        { titulli: "Raporti i plotë", lloji: "PDF", url: "" }
      ]
    },

    {
      id: "kursi-eur-all",
      lloji: "Parashikim",
      titulli: "Kursi EUR/ALL në 30 ditët e ardhshme",
      data: "2026-11-05",
      neFokus: true,
      shembull: true,
      pelqime: 58,
      kryesorja: { vlera: "96,12", etiketa: "lekë për një euro, vlera qendrore më 7 dhjetor" },
      permbledhja: "Modeli pret që euroja të këmbehet mes 95,37 dhe 96,88 lekësh më 7 dhjetor (interval 80%), me vlerë qendrore 96,12. Kjo është një rënie e lehtë nga 96,34 lekë, vlera e 5 nëntorit.",
      treguesit: [
        ["Vlera e fundit (5 nëntor)", "96,34 lekë"],
        ["Intervali 80% më 7 dhjetor", "95,37 – 96,88"],
        ["Horizonti", "22 ditë pune"],
        ["Gabimi historik (MAPE)", "0,21%"]
      ],
      grafiku: {
        lloji: "parashikim",
        titulli: "Kursi ditor dhe parashikimi (lekë për një euro)",
        burimi: "te-dhena/kursi-eur-all.csv",
        kolonat: { data: "data", vrojtuar: "kursi", parashikim: "parashikimi", poshte: "kufiri_poshte", larte: "kufiri_larte" },
        njesia: "lekë",
        decimale: 2
      },
      tabela: { burimi: "te-dhena/kursi-eur-all.csv", emrat: { data: "Data", kursi: "Kursi i vrojtuar", parashikimi: "Parashikimi", kufiri_poshte: "Kufiri i poshtëm 80%", kufiri_larte: "Kufiri i sipërm 80%" } },
      metoda: "Seria ditore e kursit zyrtar të këmbimit (ditët e punës). Parashikimi vjen nga modeli log-periodik i kursit, ndërsa intervali 80% ndërtohet nga luhatshmëria e 120 ditëve të fundit, e zgjeruar 15% për pasigurinë e parametrave.",
      skedaret: [
        { titulli: "Seria ditore dhe parashikimi", lloji: "CSV", url: "te-dhena/kursi-eur-all.csv" },
        { titulli: "Kodi i modelit (fx_euro_all_logper.m)", lloji: "MATLAB", url: "" }
      ]
    },

    {
      id: "anketa-informimi",
      lloji: "Anketë",
      titulli: "Ku informohen qytetarët për çështjet publike?",
      data: "2026-11-03",
      neFokus: true,
      shembull: true,
      pelqime: 33,
      kryesorja: { vlera: "38%", etiketa: "informohen kryesisht nga rrjetet sociale" },
      permbledhja: "Rrjetet sociale janë burimi kryesor për 38% të pjesëmarrësve, para televizionit (27%) dhe portaleve të lajmeve (21%). Te pjesëmarrësit 18–29 vjeç, rrjetet sociale arrijnë në 61%.",
      treguesit: [
        ["Pjesëmarrës", "412"],
        ["Periudha", "27 tetor – 2 nëntor 2026"],
        ["Gabimi maksimal, nëse mostra do të ishte e rastësishme", "±4,8 pikë përqindjeje"],
        ["Mostra", "online, vetëzgjedhëse"]
      ],
      grafiku: {
        lloji: "shtylla",
        titulli: "Burimi kryesor i informimit (% e pjesëmarrësve, me intervalin 95%)",
        etiketat: ["Rrjetet sociale", "Televizioni", "Portalet e lajmeve", "Familja dhe miqtë", "Radio ose shtypi"],
        vlerat: [38.1, 26.9, 21.1, 9.0, 4.9],
        intervalet: [[33.5, 42.9], [22.9, 31.4], [17.5, 25.3], [6.6, 12.1], [3.2, 7.4]],
        njesia: "%",
        decimale: 1,
        theksuar: 0
      },
      tabela: { burimi: "te-dhena/anketa-informimi.csv", emrat: { pergjigja: "Përgjigja", numri: "Numri", perqindja: "Përqindja", ci95_poshte: "Kufiri i poshtëm 95%", ci95_larte: "Kufiri i sipërm 95%" } },
      metoda: "Anketë online e hapur, e shpërndarë në këtë faqe dhe në rrjete sociale. Intervalet 95% janë llogaritur me metodën Wilson. Mostra është vetëzgjedhëse, prandaj rezultatet përshkruajnë pjesëmarrësit dhe jo gjithë popullsinë.",
      skedaret: [
        { titulli: "Përgjigjet e përmbledhura", lloji: "CSV", url: "te-dhena/anketa-informimi.csv" }
      ]
    },

    {
      id: "votimi-tetor",
      lloji: "Votim",
      titulli: "Raundi i tetorit: çfarë duan lexuesit të trajtojmë",
      data: "2026-11-01",
      shembull: true,
      pelqime: 19,
      kryesorja: { vlera: "86", etiketa: "indeksi i temës së parë: kostoja e banimit për të rinjtë" },
      permbledhja: "Kostoja e banimit për të rinjtë doli e para me indeks 86 nga 100, larg temës së dytë (74). Kjo temë po trajtohet me një model të plotë që do të publikohet në dhjetor.",
      treguesit: [
        ["Pjesëmarrës", "168"],
        ["Vlerësime", "861"],
        ["Tema", "6"]
      ],
      grafiku: {
        lloji: "shtylla",
        titulli: "Indeksi i relevancës (0–100)",
        etiketat: ["Kostoja e banimit për të rinjtë", "Shëndeti mendor i të rinjve", "Transparenca e prokurimeve vendore", "Cilësia e ujit të pijshëm", "Trafiku dhe parkimi në Tiranë", "Siguria në kantieret e ndërtimit"],
        vlerat: [86.4, 74.0, 68.3, 63.4, 61.8, 57.0],
        decimale: 0,
        theksuar: 0
      },
      tabela: {
        kolonat: ["Tema", "Pak", "Mesatarisht", "Shumë", "Vlerësime", "Indeksi"],
        rreshtat: [
          ["Kostoja e banimit për të rinjtë", 7, 25, 124, 156, 86.4],
          ["Shëndeti mendor i të rinjve", 15, 44, 85, 144, 74.0],
          ["Transparenca e prokurimeve vendore", 21, 48, 73, 142, 68.3],
          ["Cilësia e ujit të pijshëm", 24, 57, 61, 142, 63.4],
          ["Trafiku dhe parkimi në Tiranë", 26, 61, 59, 146, 61.8],
          ["Siguria në kantieret e ndërtimit", 30, 55, 46, 131, 57.0]
        ]
      },
      metoda: "Çdo lexues vlerësoi sa e rëndësishme është secila temë: pak (1), mesatarisht (2) ose shumë (3). Indeksi është mesatarja e shkallëzuar nga 0 në 100 dhe e korrigjuar për numrin e vlerësimeve. Votimi është i hapur për këdo, prandaj tregon interesin e lexuesve dhe jo opinionin e gjithë popullsisë.",
      skedaret: []
    }
  ],

  /* ---------------------------------------------------------------
     5. VOTIMI I MUAJIT
     Për një raund të ri: ndrysho "raundi" (p.sh. "2026-12"), "emri",
     "mbyllet" dhe listën e temave. Votat e vjetra mbeten në Google Sheets.
     fara = vlerësimet fillestare [pak, mesatarisht, shumë]; përdoren vetëm
            në versionin demonstrues dhe injorohen kur lidhet serveri.
     --------------------------------------------------------------- */
  votimi: {
    raundi: "2026-11",
    emri: "Raundi i nëntorit 2026",
    mbyllet: "2026-11-30",
    pjesemarres: 176,
    temat: [
      { id: "mjeket",      titulli: "Largimi i mjekëve dhe infermierëve",   pershkrimi: "Sa personel shëndetësor po humbasim dhe çfarë e mban në vend.",              fara: [10, 34, 103] },
      { id: "ushqimet",    titulli: "Çmimet e ushqimeve bazë",               pershkrimi: "Si ndikojnë kursi i këmbimit dhe importet te shporta e familjes.",            fara: [14, 46, 88] },
      { id: "pensionet",   titulli: "Pensionet kundrejt kostos së jetesës",  pershkrimi: "A mjafton pensioni për shpenzimet bazë dhe si ka ndryshuar kjo.",            fara: [18, 49, 76] },
      { id: "e-sherbimet", titulli: "Shërbimet publike online",              pershkrimi: "Sa shpejt dhe sa mirë kryhen procedurat përmes portaleve shtetërore.",       fara: [20, 49, 72] },
      { id: "ombudsman",   titulli: "Krijimi i një ombudsmani popullor",     pershkrimi: "Një zyrë qytetare që mbledh ankesat dhe i ndjek publikisht deri në zgjidhje.", fara: [22, 50, 69] },
      { id: "ajri",        titulli: "Cilësia e ajrit në qytetet e mëdha",    pershkrimi: "Çfarë tregojnë matjet e ndotjes dhe çfarë mund të bëjnë bashkitë.",           fara: [29, 58, 52] }
    ]
  },

  /* ---------------------------------------------------------------
     6. ANKETAT DHE FORMULARËT (Google Forms ose çdo formular tjetër)
     url:   lidhja e formularit (Send → ikona e lidhjes)
     embed: lidhja për ta shfaqur brenda faqes (Send → < >, vetëm adresa
            src="..."); bosh = formulari hapet në skedë të re
     kryesor: true = shfaqet i madh si "Anketa e javës"
     rezultati: id e modelit me rezultatet, kur anketa mbyllet
     --------------------------------------------------------------- */
  formularet: [
    {
      titulli: "Sa e përdorni inteligjencën artificiale në punë ose në shkollë?",
      pershkrimi: "Pesë minuta për të kuptuar si e përdorin AI-në mësuesit, studentët dhe punonjësit në Shqipëri. Rezultatet publikohen këtu më 16 nëntor.",
      url: "",
      embed: "",
      pyetje: 8,
      minuta: 5,
      afati: "2026-11-12",
      kryesor: true,
      shembull: true
    },
    {
      titulli: "Bëhuni pjesë e panelit të ekspertëve për arsimin",
      pershkrimi: "Për mësues, drejtues shkollash dhe specialistë IT që duan të marrin pjesë në raundin e dytë të vlerësimit AHP.",
      url: "",
      pyetje: 6,
      minuta: 3,
      afati: "2026-11-20",
      shembull: true
    },
    {
      titulli: "Ku informoheni për çështjet publike?",
      pershkrimi: "Anketa e javës së kaluar.",
      url: "",
      afati: "2026-11-02",
      rezultati: "anketa-informimi",
      shembull: true
    }
  ],

  /* ---------------------------------------------------------------
     7. PËRPUNIMET E NGARKUARA (raporte, të dhëna, kod)
     Vendos skedarin në dosjen te-dhena/ dhe shkruaj url: "te-dhena/emri",
     ose ngjit një lidhje nga Google Drive.
     --------------------------------------------------------------- */
  ngarkimet: [
    { titulli: "Seria ditore e kursit EUR/ALL dhe parashikimi", lloji: "CSV", data: "2026-11-05", url: "te-dhena/kursi-eur-all.csv", shembull: true },
    { titulli: "Kodi i modelit log-periodik", lloji: "MATLAB", data: "2026-11-05", url: "", shembull: true },
    { titulli: "Anketa për informimin: përgjigjet e përmbledhura", lloji: "CSV", data: "2026-11-03", url: "te-dhena/anketa-informimi.csv", shembull: true },
    { titulli: "AI në shkolla: rezultatet e AHP", lloji: "CSV", data: "2026-10-28", url: "te-dhena/ahp-ai-arsim.csv", shembull: true },
    { titulli: "AI në shkolla: raporti i plotë", lloji: "PDF", data: "2026-10-28", url: "", shembull: true },
    { titulli: "Bilanci i parashikimeve të kursit", lloji: "CSV", data: "2026-11-01", url: "te-dhena/bilanci-parashikimeve.csv", shembull: true }
  ],

  /* ---------------------------------------------------------------
     8. BILANCI I PARASHIKIMEVE (saktësia)
     Shto një rresht në CSV sa herë del vlera reale e një parashikimi.
     --------------------------------------------------------------- */
  bilanci: {
    burimi: "te-dhena/bilanci-parashikimeve.csv",
    shembull: true
  },

  /* ---------------------------------------------------------------
     9. LLOGARITËSI AHP (mjeti që provojnë vizitorët)
     krahasimet: ["A", "B", vlera] do të thotë A është "vlera" herë më e
     rëndësishme se B, në shkallën 1–9.
     --------------------------------------------------------------- */
  llogaritesi: {
    kriteret: ["Cilësia", "Kostoja", "Koha e zbatimit", "Rreziku"],
    krahasimet: [
      ["Cilësia", "Kostoja", 2],
      ["Cilësia", "Koha e zbatimit", 5],
      ["Cilësia", "Rreziku", 3],
      ["Kostoja", "Koha e zbatimit", 3],
      ["Kostoja", "Rreziku", 2],
      ["Rreziku", "Koha e zbatimit", 2]
    ]
  },

  /* ---------------------------------------------------------------
     10. THIRRJET (aplikime dhe kërkesa për çështje të caktuara)
     lloji: shfaqet te formulari i kërkesës kur klikohet "Apliko"
     --------------------------------------------------------------- */
  thirrjet: [
    {
      titulli: "Panel ekspertësh për arsimin",
      pershkrimi: "Kërkojmë 10 mësues, drejtues shkollash dhe specialistë IT për raundin e dytë të vlerësimit AHP për AI-në në shkolla. Rreth 40 minuta online.",
      afati: "2026-11-20",
      lloji: "Aplikim: panel ekspertësh për arsimin",
      shembull: true
    },
    {
      titulli: "Analizë falas për një organizatë jofitimprurëse",
      pershkrimi: "Çdo tremujor zgjedhim një OJF ose një grup qytetar dhe i bëjmë falas një analizë të dhënash ose një vlerësim me shumë kritere.",
      afati: "2026-12-15",
      lloji: "Aplikim: analizë falas për OJF",
      shembull: true
    },
    {
      titulli: "Propozoni temën e dhjetorit",
      pershkrimi: "Cilën çështje duhet ta vendosim në votimin e muajit të ardhshëm? Shkruani pse ka rëndësi dhe kë prek.",
      afati: "2026-11-30",
      lloji: "Propozim teme",
      shembull: true
    }
  ],

  /* ---------------------------------------------------------------
     11. SHËRBIMET
     --------------------------------------------------------------- */
  sherbimet: {
    hyrja: "Konsultimi i parë, 30 minuta, është falas. Pas tij ju dërgojmë një ofertë me afat dhe çmim.",
    lista: [
      {
        titulli: "Vlerësim me shumë kritere (AHP)",
        perKe: "Bashki, biznese dhe OJF që duhet të zgjedhin mes disa alternativave.",
        cfareMerrni: "Kriteret e ndërtuara bashkë me ju, gjykimet e ekspertëve, renditjen me pasigurinë e saj dhe skedarin e llogaritjeve.",
        koha: "2–4 javë"
      },
      {
        titulli: "Parashikime ekonomike",
        perKe: "Importues, eksportues dhe kushdo që planifikon me kursin e këmbimit ose me çmime.",
        cfareMerrni: "Parashikim me interval besueshmërie, përditësim mujor dhe bilanc publik të saktësisë.",
        koha: "1–2 javë"
      },
      {
        titulli: "Anketime dhe analiza sociometrike",
        perKe: "Organizata, media dhe institucione që duan të dinë çfarë mendojnë njerëzit.",
        cfareMerrni: "Pyetësor, mostër, mbledhje online ose në terren, analizë dhe raport me gabimin statistikor.",
        koha: "3–6 javë"
      },
      {
        titulli: "Analiza për çështje juridike dhe sociale",
        perKe: "Avokatë, gazetarë dhe organizata të shoqërisë civile.",
        cfareMerrni: "Analizë sasiore e vendimeve, ankesave dhe statistikave zyrtare, me burimet e verifikueshme.",
        koha: "Sipas rastit"
      }
    ]
  },

  /* ---------------------------------------------------------------
     12. REKLAMAT DHE PARTNERËT
     lidhja: faqja e kompanisë. Bosh = butoni "Lidhu" hap formularin e
     kërkesës me emrin e kompanisë.
     --------------------------------------------------------------- */
  reklamat: [
    {
      emri: "Quintoud",
      nentitulli: "CAD parametrik në cloud · A. Simeqi",
      cfareBen: "Projektim mekanik parametrik direkt në shfletues, për pjesë dhe montime. Asistenti Text-to-CAD ndërton një model fillestar nga përshkrimi me fjalë, ndërsa inxhinieri e përpunon drejtpërdrejt.",
      pseDuhet: "Punoni nga çdo kompjuter, pa instaluar programe të rënda. Ndërtuar mbi një bërthamë gjeometrike të vetën, për inxhinierët që vijnë nga Creo ose SolidWorks.",
      lidhja: "",
      shembull: true
    },
    {
      emri: "Hapësirë për partnerin tuaj",
      nentitulli: "Kartë në faqe dhe përmendje në përmbledhjen mujore",
      cfareBen: "Prezantoni kompaninë tuaj para lexuesve që ndjekin analizat ekonomike, sociale dhe juridike.",
      pseDuhet: "Lexuesit tanë marrin vendime: drejtues biznesesh, zyrtarë, studiues dhe gazetarë.",
      lidhja: "",
      lloji: "Reklamë ose partneritet",
      oferte: true
    }
  ],

  /* ---------------------------------------------------------------
     13. REFERENCA (lidhje të dobishme sipas temës)
     --------------------------------------------------------------- */
  referencat: [
    { tema: "Ekonomi",  titulli: "Banka e Shqipërisë", pershkrimi: "Kurset zyrtare të këmbimit, politika monetare dhe statistikat financiare.", url: "https://www.bankofalbania.org/" },
    { tema: "Ekonomi",  titulli: "INSTAT", pershkrimi: "Statistikat zyrtare: çmimet, punësimi, popullsia dhe tregtia.", url: "https://www.instat.gov.al/" },
    { tema: "Ekonomi",  titulli: "Eurostat", pershkrimi: "Të dhëna të krahasueshme për vendet e Europës.", url: "https://ec.europa.eu/eurostat" },
    { tema: "Juridik",  titulli: "Qendra e Botimeve Zyrtare", pershkrimi: "Fletorja Zyrtare dhe ligjet në fuqi.", url: "https://qbz.gov.al/" },
    { tema: "Juridik",  titulli: "Avokati i Popullit", pershkrimi: "Raportet vjetore dhe rekomandimet e institucionit të ombudsmanit.", url: "https://www.avokatipopullit.gov.al/" },
    { tema: "Metoda",   titulli: "Saaty (1990), How to make a decision: The analytic hierarchy process", pershkrimi: "Artikulli bazë i metodës AHP. European Journal of Operational Research 48(1), 9–26.", url: "https://doi.org/10.1016/0377-2217(90)90057-I" },
    { tema: "Metoda",   titulli: "Sornette (2003), Critical market crashes", pershkrimi: "Përmbledhje e modeleve log-periodike për tregjet financiare. Physics Reports 378.", url: "https://arxiv.org/abs/cond-mat/0301543" },
    { tema: "Të dhëna", titulli: "Banka Botërore: Open Data", pershkrimi: "Tregues zhvillimi për Shqipërinë dhe rajonin.", url: "https://data.worldbank.org/country/albania" },
    { tema: "Të dhëna", titulli: "Open-Meteo", pershkrimi: "Parashikime moti të hapura; burimi i dritares së motit.", url: "https://open-meteo.com/" }
  ],

  /* ---------------------------------------------------------------
     14. PËRMBLEDHJA MUJORE (abonimi me email)
     --------------------------------------------------------------- */
  abonimi: {
    titulli: "Përmbledhja mujore",
    pershkrimi: "Rezultati i votimit, modelet e reja dhe bilanci i parashikimeve. Një email në muaj, pa reklama nga palë të treta."
  }
};
