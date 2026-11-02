const recipes = [
  {
    id: 1,
    title: "Mercimek Çorbası",
    image: "images/mercimek.jpg",
    ingredients: [
      "1 su bardağı kırmızı mercimek",
      "1 soğan",
      "1 havuç",
      "1 yemek kaşığı un",
      "2 yemek kaşığı sıvı yağ"
    ],
    instructions:
      "Mercimeği yıkayın. Un,Soğan ve havucu kavurun. Su ekleyip pişirin. Pişmesi tamamlanınca ocaktan aldıktan sonra blenderdan geçirin"
  },
  {
    id: 2,
    title: "Menemen", 
    image: "images/menemen.jpg",
    ingredients: [
      "3 yumurta",
      "2 domates",
      "2 biber"
    ],
    instructions:
      "Biberleri kavurun, domatesleri ekleyin. Yumurtaları kırıp karıştırın."
  },
  {
  id: 3,
  title: "Sütlaç",
  image: "images/sutlac.jpg",
  ingredients: [
    "1 litre süt",
    "1 çay bardağı pirinç",
    "Şeker"
  ],
  instructions:
    "Pirinci haşlayın, süt ve şekeri ekleyip pişirin."
},
{
  id: 4,
  title: "Aşure", 
  image: "images/asure.jpg",
  ingredients: [
    "2 su bardağı aşurelik buğday",
    "1 çay bardağı nohut",
    "1 çay bardağı kuru fasulye",
    "1 çay bardağı pirinç",
    "1 su bardağı kuru kayısı",
    "1 su bardağı kuru üzüm",
    "1 su bardağı toz şeker",
    "2 litre su"
  ],
  instructions:
    "Buğday, nohut ve fasulyeyi haşlayın. Pirinci ekleyip pişirin. Doğranmış kayısı, üzüm ve şekeri ilave ederek karıştırın. Kıvam alana kadar pişirip kaselere paylaştırın."
},
  {
  id: 5,
  title: "Waffle",
  image: "images/waffle.jpg",
  ingredients: [
    "2 adet yumurta",
    "2 su bardağı un",
    "1,5 su bardağı süt",
    "1/2 su bardağı sıvı yağ",
    "2 yemek kaşığı toz şeker",
    "1 paket kabartma tozu",
    "1 paket vanilin",
    "Bir tutam tuz",
    "Çikolata sosu",
    "Muz",
    "Çilek",
    "Kivi",
    "Fındık veya Antep fıstığı"
  ],
  instructions:
    "Yumurta ve şekeri çırpın. Süt ve sıvı yağı ekleyin. Un, kabartma tozu, vanilin ve tuzu ilave ederek pürüzsüz bir hamur hazırlayın. Waffle makinesini ısıtıp hamuru pişirin. Üzerine çikolata sosu sürün, muz, çilek ve kiviyi yerleştirin. Son olarak fındık veya Antep fıstığı serperek servis edin."
},
  {
  id: 6,
  title: "Pankek",
  image: "images/pankek.jpg",
  ingredients: [
    "1 adet yumurta",
    "1 su bardağı un",
    "0,6 su bardağı süt",
    "1 yemek kaşığı toz şeker",
    "1 paket kabartma tozu",
    "1 paket vanilin",
    "Pişirmek için sıvı yağ",
  ],
  instructions:
    "Yumurta ve şekeri çırpın. Süt ekleyin. Un, kabartma tozu, vanilin ilave ederek pürüzsüz bir hamur hazırlayın. Tavada ısıtıp hamuru pişirin. "
},
{
  id: 7,
  title: "Fırında Palamut",
  image: "images/palamut.jpg",
  ingredients: [
    "2 adet palamut",
    "2 adet kuru soğan",
    "2 adet domates",
    "1 adet limon",
    "2 adet yeşil biber",
    "3 yemek kaşığı zeytinyağı",
    "Tuz",
    "Karabiber",
    "Kekik"
  ],
  instructions:
    "Palamutları temizleyip dilimleyin. Soğanları, domatesleri ve biberleri doğrayın. Fırın tepsisine önce soğanları, ardından palamut dilimlerini yerleştirin. Üzerine domates, biber ve limon dilimlerini ekleyin. Zeytinyağı, tuz, karabiber ve kekik ilave edin. Önceden ısıtılmış 200 derece fırında yaklaşık 30-35 dakika pişirin."
},
{
  id: 8,
  title: "Cheesecake",
  image: "images/cheesecake.jpg",
  ingredients: [
    "2 paket yulaflı bisküvi",
    "100 gram tereyağı",
    "600 gram labne peyniri",
    "1 su bardağı toz şeker",
    "3 adet yumurta",
    "200 ml sıvı krema",
    "2 yemek kaşığı un",
    "1 paket vanilin",
    "1 su bardağı frambuaz",
    "3 yemek kaşığı şeker",
    "1 tatlı kaşığı nişasta"
  ],
  instructions:
    "Bisküvileri rondodan geçirip eritilmiş tereyağıyla karıştırın. Kelepçeli kalıbın tabanına bastırarak yerleştirin. Labne, şeker, krema, un ve vanilini karıştırın. Yumurtaları tek tek ekleyin. Karışımı bisküvi tabanının üzerine dökün. Önceden ısıtılmış 160 derece fırında yaklaşık 50-60 dakika pişirin. Frambuaz, şeker ve az suyla açılmış nişastayı pişirerek sos hazırlayın. Soğuyan cheesecake üzerine sosu dökün. Buzdolabında en az 4 saat dinlendirin."
},
{
  id: 9,
  title: "Yoğurt Çorbası",
  image: "images/yogurt-corbasi.jpg",
  ingredients: [
    "1 su bardağı yoğurt",
    "2 yemek kaşığı un",
    "1 adet yumurta sarısı",
    "3 yemek kaşığı pirinç",
    "5 su bardağı su",
    "1 yemek kaşığı tereyağı",
    "1 tatlı kaşığı kuru nane",
    "Tuz"
  ],
  instructions:
    "Pirinci yıkayıp suyla birlikte tencereye alın ve yumuşayana kadar haşlayın. Ayrı bir kapta yoğurt, un ve yumurta sarısını çırpın. Kaynayan pirinç suyundan birkaç kaşık alarak yoğurtlu karışımı ılıştırın. Karışımı tencereye yavaşça ekleyip sürekli karıştırın. Kısık ateşte kaynayana kadar pişirin. Tuzunu ekleyin. Küçük bir tavada tereyağını eritip naneyi kavurun ve çorbanın üzerine gezdirerek servis edin."
},

];