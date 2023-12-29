function extractAddr(addr){

    if (addr.substring(0, 3) in zipCodeDict) {
        return addr.substring(0, 3);
    }

    addr = addr.replace('台', '臺')
    addr = addr.replace('巿', '市')

    let regex = /[\u4E00-\u9FFF]{2}[縣市]([\u4E00-\u9FFF]{0,2}[鄉市鎮區島]|阿里山鄉|東沙群島|南沙群島|那瑪夏區|三地門鄉|太麻里鄉)/u;
    let match = addr.match(regex);

    return match && match.length > 0 ? match[0] : '';
}

zipCodeDict = {'臺北市中正區' : '100',
'臺北市大同區' : '103',
'臺北市中山區' : '104',
'臺北市松山區' : '105',
'臺北市大安區' : '106',
'臺北市萬華區' : '108',
'臺北市信義區' : '110',
'臺北市士林區' : '111',
'臺北市北投區' : '112',
'臺北市內湖區' : '114',
'臺北市南港區' : '115',
'臺北市文山區' : '116',
'基隆市仁愛區' : '200',
'基隆市信義區' : '201',
'基隆市中正區' : '202',
'基隆市中山區' : '203',
'基隆市安樂區' : '204',
'基隆市暖暖區' : '205',
'基隆市七堵區' : '206',
'新北市萬里區' : '207',
'新北市金山區' : '208',
'新北市板橋區' : '220',
'新北市汐止區' : '221',
'新北市深坑區' : '222',
'新北市石碇區' : '223',
'新北市瑞芳區' : '224',
'新北市平溪區' : '226',
'新北市雙溪區' : '227',
'新北市貢寮區' : '228',
'新北市新店區' : '231',
'新北市坪林區' : '232',
'新北市烏來區' : '233',
'新北市永和區' : '234',
'新北市中和區' : '235',
'新北市土城區' : '236',
'新北市三峽區' : '237',
'新北市樹林區' : '238',
'新北市鶯歌區' : '239',
'新北市三重區' : '241',
'新北市新莊區' : '242',
'新北市泰山區' : '243',
'新北市林口區' : '244',
'新北市蘆洲區' : '247',
'新北市五股區' : '248',
'新北市八里區' : '249',
'新北市淡水區' : '251',
'新北市三芝區' : '252',
'新北市石門區' : '253',
'連江縣南竿鄉' : '209',
'連江縣北竿鄉' : '210',
'連江縣莒光鄉' : '211',
'連江縣東引鄉' : '212',
'宜蘭縣宜蘭市' : '260',
'宜蘭縣頭城鎮' : '261',
'宜蘭縣礁溪鄉' : '262',
'宜蘭縣壯圍鄉' : '263',
'宜蘭縣員山鄉' : '264',
'宜蘭縣羅東鎮' : '265',
'宜蘭縣三星鄉' : '266',
'宜蘭縣大同鄉' : '267',
'宜蘭縣五結鄉' : '268',
'宜蘭縣冬山鄉' : '269',
'宜蘭縣蘇澳鎮' : '270',
'宜蘭縣南澳鄉' : '272',
'新竹市東區' : '300',
'新竹市北區' : '300',
'新竹市香山區' : '300',
'新竹縣竹北市' : '302',
'新竹縣湖口鄉' : '303',
'新竹縣新豐鄉' : '304',
'新竹縣新埔鎮' : '305',
'新竹縣關西鎮' : '306',
'新竹縣芎林鄉' : '307',
'新竹縣寶山鄉' : '308',
'新竹縣竹東鎮' : '310',
'新竹縣五峰鄉' : '311',
'新竹縣橫山鄉' : '312',
'新竹縣尖石鄉' : '313',
'新竹縣北埔鄉' : '314',
'新竹縣峨眉鄉' : '315',
'桃園市中壢區' : '320',
'桃園市平鎮區' : '324',
'桃園市龍潭區' : '325',
'桃園市楊梅區' : '326',
'桃園市新屋區' : '327',
'桃園市觀音區' : '328',
'桃園市桃園區' : '330',
'桃園市龜山區' : '333',
'桃園市八德區' : '334',
'桃園市大溪區' : '335',
'桃園市復興區' : '336',
'桃園市大園區' : '337',
'桃園市蘆竹區' : '338',
'苗栗縣竹南鎮' : '350',
'苗栗縣頭份市' : '351',
'苗栗縣三灣鄉' : '352',
'苗栗縣南庄鄉' : '353',
'苗栗縣獅潭鄉' : '354',
'苗栗縣後龍鎮' : '356',
'苗栗縣通霄鎮' : '357',
'苗栗縣苑裡鎮' : '358',
'苗栗縣苗栗市' : '360',
'苗栗縣造橋鄉' : '361',
'苗栗縣頭屋鄉' : '362',
'苗栗縣公館鄉' : '363',
'苗栗縣大湖鄉' : '364',
'苗栗縣泰安鄉' : '365',
'苗栗縣銅鑼鄉' : '366',
'苗栗縣三義鄉' : '367',
'苗栗縣西湖鄉' : '368',
'苗栗縣卓蘭鎮' : '369',
'臺中市中區' : '400',
'臺中市東區' : '401',
'臺中市南區' : '402',
'臺中市西區' : '403',
'臺中市北區' : '404',
'臺中市北屯區' : '406',
'臺中市西屯區' : '407',
'臺中市南屯區' : '408',
'臺中市太平區' : '411',
'臺中市大里區' : '412',
'臺中市霧峰區' : '413',
'臺中市烏日區' : '414',
'臺中市豐原區' : '420',
'臺中市后里區' : '421',
'臺中市石岡區' : '422',
'臺中市東勢區' : '423',
'臺中市和平區' : '424',
'臺中市新社區' : '426',
'臺中市潭子區' : '427',
'臺中市大雅區' : '428',
'臺中市神岡區' : '429',
'臺中市大肚區' : '432',
'臺中市沙鹿區' : '433',
'臺中市龍井區' : '434',
'臺中市梧棲區' : '435',
'臺中市清水區' : '436',
'臺中市大甲區' : '437',
'臺中市外埔區' : '438',
'臺中市大安區' : '439',
'彰化縣彰化市' : '500',
'彰化縣芬園鄉' : '502',
'彰化縣花壇鄉' : '503',
'彰化縣秀水鄉' : '504',
'彰化縣鹿港鎮' : '505',
'彰化縣福興鄉' : '506',
'彰化縣線西鄉' : '507',
'彰化縣和美鎮' : '508',
'彰化縣伸港鄉' : '509',
'彰化縣員林市' : '510',
'彰化縣社頭鄉' : '511',
'彰化縣永靖鄉' : '512',
'彰化縣埔心鄉' : '513',
'彰化縣溪湖鎮' : '514',
'彰化縣大村鄉' : '515',
'彰化縣埔鹽鄉' : '516',
'彰化縣田中鎮' : '520',
'彰化縣北斗鎮' : '521',
'彰化縣田尾鄉' : '522',
'彰化縣埤頭鄉' : '523',
'彰化縣溪州鄉' : '524',
'彰化縣竹塘鄉' : '525',
'彰化縣二林鎮' : '526',
'彰化縣大城鄉' : '527',
'彰化縣芳苑鄉' : '528',
'彰化縣二水鄉' : '530',
'南投縣南投市' : '540',
'南投縣中寮鄉' : '541',
'南投縣草屯鎮' : '542',
'南投縣國姓鄉' : '544',
'南投縣埔里鎮' : '545',
'南投縣仁愛鄉' : '546',
'南投縣名間鄉' : '551',
'南投縣集集鎮' : '552',
'南投縣水里鄉' : '553',
'南投縣魚池鄉' : '555',
'南投縣信義鄉' : '556',
'南投縣竹山鎮' : '557',
'南投縣鹿谷鄉' : '558',
'嘉義市東區' : '600',
'嘉義市西區' : '600',
'嘉義縣番路鄉' : '602',
'嘉義縣梅山鄉' : '603',
'嘉義縣竹崎鄉' : '604',
'嘉義縣阿里山鄉' : '605',
'嘉義縣中埔鄉' : '606',
'嘉義縣大埔鄉' : '607',
'嘉義縣水上鄉' : '608',
'嘉義縣鹿草鄉' : '611',
'嘉義縣太保市' : '612',
'嘉義縣朴子市' : '613',
'嘉義縣東石鄉' : '614',
'嘉義縣六腳鄉' : '615',
'嘉義縣新港鄉' : '616',
'嘉義縣民雄鄉' : '621',
'嘉義縣大林鎮' : '622',
'嘉義縣溪口鄉' : '623',
'嘉義縣義竹鄉' : '624',
'嘉義縣布袋鎮' : '625',
'雲林縣斗南鎮' : '630',
'雲林縣大埤鄉' : '631',
'雲林縣虎尾鎮' : '632',
'雲林縣土庫鎮' : '633',
'雲林縣褒忠鄉' : '634',
'雲林縣東勢鄉' : '635',
'雲林縣臺西鄉' : '636',
'雲林縣崙背鄉' : '637',
'雲林縣麥寮鄉' : '638',
'雲林縣斗六市' : '640',
'雲林縣林內鄉' : '643',
'雲林縣古坑鄉' : '646',
'雲林縣莿桐鄉' : '647',
'雲林縣西螺鎮' : '648',
'雲林縣二崙鄉' : '649',
'雲林縣北港鎮' : '651',
'雲林縣水林鄉' : '652',
'雲林縣口湖鄉' : '653',
'雲林縣四湖鄉' : '654',
'雲林縣元長鄉' : '655',
'臺南市中西區' : '700',
'臺南市東區' : '701',
'臺南市南區' : '702',
'臺南市北區' : '704',
'臺南市安平區' : '708',
'臺南市安南區' : '709',
'臺南市永康區' : '710',
'臺南市歸仁區' : '711',
'臺南市新化區' : '712',
'臺南市左鎮區' : '713',
'臺南市玉井區' : '714',
'臺南市楠西區' : '715',
'臺南市南化區' : '716',
'臺南市仁德區' : '717',
'臺南市關廟區' : '718',
'臺南市龍崎區' : '719',
'臺南市官田區' : '720',
'臺南市麻豆區' : '721',
'臺南市佳里區' : '722',
'臺南市西港區' : '723',
'臺南市七股區' : '724',
'臺南市將軍區' : '725',
'臺南市學甲區' : '726',
'臺南市北門區' : '727',
'臺南市新營區' : '730',
'臺南市後壁區' : '731',
'臺南市白河區' : '732',
'臺南市東山區' : '733',
'臺南市六甲區' : '734',
'臺南市下營區' : '735',
'臺南市柳營區' : '736',
'臺南市鹽水區' : '737',
'臺南市善化區' : '741',
'臺南市大內區' : '742',
'臺南市山上區' : '743',
'臺南市新市區' : '744',
'臺南市安定區' : '745',
'高雄市新興區' : '800',
'高雄市前金區' : '801',
'高雄市苓雅區' : '802',
'高雄市鹽埕區' : '803',
'高雄市鼓山區' : '804',
'高雄市旗津區' : '805',
'高雄市前鎮區' : '806',
'高雄市三民區' : '807',
'高雄市楠梓區' : '811',
'高雄市小港區' : '812',
'高雄市左營區' : '813',
'高雄市仁武區' : '814',
'高雄市大社區' : '815',
'高雄市東沙群島' : '817',
'高雄市南沙群島' : '819',
'高雄市岡山區' : '820',
'高雄市路竹區' : '821',
'高雄市阿蓮區' : '822',
'高雄市田寮區' : '823',
'高雄市燕巢區' : '824',
'高雄市橋頭區' : '825',
'高雄市梓官區' : '826',
'高雄市彌陀區' : '827',
'高雄市永安區' : '828',
'高雄市湖內區' : '829',
'高雄市鳳山區' : '830',
'高雄市大寮區' : '831',
'高雄市林園區' : '832',
'高雄市鳥松區' : '833',
'高雄市大樹區' : '840',
'高雄市旗山區' : '842',
'高雄市美濃區' : '843',
'高雄市六龜區' : '844',
'高雄市內門區' : '845',
'高雄市杉林區' : '846',
'高雄市甲仙區' : '847',
'高雄市桃源區' : '848',
'高雄市那瑪夏區' : '849',
'高雄市茂林區' : '851',
'高雄市茄萣區' : '852',
'澎湖縣馬公市' : '880',
'澎湖縣西嶼鄉' : '881',
'澎湖縣望安鄉' : '882',
'澎湖縣七美鄉' : '883',
'澎湖縣白沙鄉' : '884',
'澎湖縣湖西鄉' : '885',
'金門縣金沙鎮' : '890',
'金門縣金湖鎮' : '891',
'金門縣金寧鄉' : '892',
'金門縣金城鎮' : '893',
'金門縣烈嶼鄉' : '894',
'金門縣烏坵鄉' : '896',
'屏東縣屏東市' : '900',
'屏東縣三地門鄉' : '901',
'屏東縣霧臺鄉' : '902',
'屏東縣瑪家鄉' : '903',
'屏東縣九如鄉' : '904',
'屏東縣里港鄉' : '905',
'屏東縣高樹鄉' : '906',
'屏東縣鹽埔鄉' : '907',
'屏東縣長治鄉' : '908',
'屏東縣麟洛鄉' : '909',
'屏東縣竹田鄉' : '911',
'屏東縣內埔鄉' : '912',
'屏東縣萬丹鄉' : '913',
'屏東縣潮州鎮' : '920',
'屏東縣泰武鄉' : '921',
'屏東縣來義鄉' : '922',
'屏東縣萬巒鄉' : '923',
'屏東縣崁頂鄉' : '924',
'屏東縣新埤鄉' : '925',
'屏東縣南州鄉' : '926',
'屏東縣林邊鄉' : '927',
'屏東縣東港鎮' : '928',
'屏東縣琉球鄉' : '929',
'屏東縣佳冬鄉' : '931',
'屏東縣新園鄉' : '932',
'屏東縣枋寮鄉' : '940',
'屏東縣枋山鄉' : '941',
'屏東縣春日鄉' : '942',
'屏東縣獅子鄉' : '943',
'屏東縣車城鄉' : '944',
'屏東縣牡丹鄉' : '945',
'屏東縣恆春鎮' : '946',
'屏東縣滿州鄉' : '947',
'臺東縣臺東市' : '950',
'臺東縣綠島鄉' : '951',
'臺東縣蘭嶼鄉' : '952',
'臺東縣延平鄉' : '953',
'臺東縣卑南鄉' : '954',
'臺東縣鹿野鄉' : '955',
'臺東縣關山鎮' : '956',
'臺東縣海端鄉' : '957',
'臺東縣池上鄉' : '958',
'臺東縣東河鄉' : '959',
'臺東縣成功鎮' : '961',
'臺東縣長濱鄉' : '962',
'臺東縣太麻里鄉' : '963',
'臺東縣金峰鄉' : '964',
'臺東縣大武鄉' : '965',
'臺東縣達仁鄉' : '966',
'花蓮縣花蓮市' : '970',
'花蓮縣新城鄉' : '971',
'花蓮縣秀林鄉' : '972',
'花蓮縣吉安鄉' : '973',
'花蓮縣壽豐鄉' : '974',
'花蓮縣鳳林鎮' : '975',
'花蓮縣光復鄉' : '976',
'花蓮縣豐濱鄉' : '977',
'花蓮縣瑞穗鄉' : '978',
'花蓮縣萬榮鄉' : '979',
'花蓮縣玉里鎮' : '981',
'花蓮縣卓溪鄉' : '982',
'花蓮縣富里鄉' : '983',
'釣魚台' : '290',
'大同區' : '103',
'松山區' : '105',
'萬華區' : '108',
'士林區' : '111',
'北投區' : '112',
'內湖區' : '114',
'南港區' : '115',
'文山區' : '116',
'仁愛區' : '200',
'安樂區' : '204',
'暖暖區' : '205',
'七堵區' : '206',
'萬里區' : '207',
'金山區' : '208',
'板橋區' : '220',
'汐止區' : '221',
'深坑區' : '222',
'石碇區' : '223',
'瑞芳區' : '224',
'平溪區' : '226',
'雙溪區' : '227',
'貢寮區' : '228',
'新店區' : '231',
'坪林區' : '232',
'烏來區' : '233',
'永和區' : '234',
'中和區' : '235',
'土城區' : '236',
'三峽區' : '237',
'樹林區' : '238',
'鶯歌區' : '239',
'三重區' : '241',
'新莊區' : '242',
'泰山區' : '243',
'林口區' : '244',
'蘆洲區' : '247',
'五股區' : '248',
'八里區' : '249',
'淡水區' : '251',
'三芝區' : '252',
'石門區' : '253',
'南竿鄉' : '209',
'北竿鄉' : '210',
'莒光鄉' : '211',
'東引鄉' : '212',
'宜蘭市' : '260',
'頭城鎮' : '261',
'礁溪鄉' : '262',
'壯圍鄉' : '263',
'員山鄉' : '264',
'羅東鎮' : '265',
'三星鄉' : '266',
'大同鄉' : '267',
'五結鄉' : '268',
'冬山鄉' : '269',
'蘇澳鎮' : '270',
'南澳鄉' : '272',
'香山區' : '300',
'竹北市' : '302',
'湖口鄉' : '303',
'新豐鄉' : '304',
'新埔鎮' : '305',
'關西鎮' : '306',
'芎林鄉' : '307',
'寶山鄉' : '308',
'竹東鎮' : '310',
'五峰鄉' : '311',
'橫山鄉' : '312',
'尖石鄉' : '313',
'北埔鄉' : '314',
'峨眉鄉' : '315',
'中壢區' : '320',
'平鎮區' : '324',
'龍潭區' : '325',
'楊梅區' : '326',
'新屋區' : '327',
'觀音區' : '328',
'桃園區' : '330',
'龜山區' : '333',
'八德區' : '334',
'大溪區' : '335',
'復興區' : '336',
'大園區' : '337',
'蘆竹區' : '338',
'竹南鎮' : '350',
'頭份市' : '351',
'三灣鄉' : '352',
'南庄鄉' : '353',
'獅潭鄉' : '354',
'後龍鎮' : '356',
'通霄鎮' : '357',
'苑裡鎮' : '358',
'苗栗市' : '360',
'造橋鄉' : '361',
'頭屋鄉' : '362',
'公館鄉' : '363',
'大湖鄉' : '364',
'泰安鄉' : '365',
'銅鑼鄉' : '366',
'三義鄉' : '367',
'西湖鄉' : '368',
'卓蘭鎮' : '369',
'中區' : '400',
'北屯區' : '406',
'西屯區' : '407',
'南屯區' : '408',
'太平區' : '411',
'大里區' : '412',
'霧峰區' : '413',
'烏日區' : '414',
'豐原區' : '420',
'后里區' : '421',
'石岡區' : '422',
'東勢區' : '423',
'和平區' : '424',
'新社區' : '426',
'潭子區' : '427',
'大雅區' : '428',
'神岡區' : '429',
'大肚區' : '432',
'沙鹿區' : '433',
'龍井區' : '434',
'梧棲區' : '435',
'清水區' : '436',
'大甲區' : '437',
'外埔區' : '438',
'彰化市' : '500',
'芬園鄉' : '502',
'花壇鄉' : '503',
'秀水鄉' : '504',
'鹿港鎮' : '505',
'福興鄉' : '506',
'線西鄉' : '507',
'和美鎮' : '508',
'伸港鄉' : '509',
'員林市' : '510',
'社頭鄉' : '511',
'永靖鄉' : '512',
'埔心鄉' : '513',
'溪湖鎮' : '514',
'大村鄉' : '515',
'埔鹽鄉' : '516',
'田中鎮' : '520',
'北斗鎮' : '521',
'田尾鄉' : '522',
'埤頭鄉' : '523',
'溪州鄉' : '524',
'竹塘鄉' : '525',
'二林鎮' : '526',
'大城鄉' : '527',
'芳苑鄉' : '528',
'二水鄉' : '530',
'南投市' : '540',
'中寮鄉' : '541',
'草屯鎮' : '542',
'國姓鄉' : '544',
'埔里鎮' : '545',
'仁愛鄉' : '546',
'名間鄉' : '551',
'集集鎮' : '552',
'水里鄉' : '553',
'魚池鄉' : '555',
'信義鄉' : '556',
'竹山鎮' : '557',
'鹿谷鄉' : '558',
'番路鄉' : '602',
'梅山鄉' : '603',
'竹崎鄉' : '604',
'阿里山鄉' : '605',
'中埔鄉' : '606',
'大埔鄉' : '607',
'水上鄉' : '608',
'鹿草鄉' : '611',
'太保市' : '612',
'朴子市' : '613',
'東石鄉' : '614',
'六腳鄉' : '615',
'新港鄉' : '616',
'民雄鄉' : '621',
'大林鎮' : '622',
'溪口鄉' : '623',
'義竹鄉' : '624',
'布袋鎮' : '625',
'斗南鎮' : '630',
'大埤鄉' : '631',
'虎尾鎮' : '632',
'土庫鎮' : '633',
'褒忠鄉' : '634',
'東勢鄉' : '635',
'臺西鄉' : '636',
'崙背鄉' : '637',
'麥寮鄉' : '638',
'斗六市' : '640',
'林內鄉' : '643',
'古坑鄉' : '646',
'莿桐鄉' : '647',
'西螺鎮' : '648',
'二崙鄉' : '649',
'北港鎮' : '651',
'水林鄉' : '652',
'口湖鄉' : '653',
'四湖鄉' : '654',
'元長鄉' : '655',
'中西區' : '700',
'安平區' : '708',
'永康區' : '710',
'歸仁區' : '711',
'新化區' : '712',
'左鎮區' : '713',
'玉井區' : '714',
'楠西區' : '715',
'南化區' : '716',
'仁德區' : '717',
'關廟區' : '718',
'龍崎區' : '719',
'官田區' : '720',
'麻豆區' : '721',
'佳里區' : '722',
'西港區' : '723',
'七股區' : '724',
'將軍區' : '725',
'學甲區' : '726',
'北門區' : '727',
'新營區' : '730',
'後壁區' : '731',
'白河區' : '732',
'東山區' : '733',
'六甲區' : '734',
'下營區' : '735',
'柳營區' : '736',
'鹽水區' : '737',
'善化區' : '741',
'大內區' : '742',
'山上區' : '743',
'新市區' : '744',
'安定區' : '745',
'新興區' : '800',
'前金區' : '801',
'苓雅區' : '802',
'鹽埕區' : '803',
'鼓山區' : '804',
'旗津區' : '805',
'前鎮區' : '806',
'三民區' : '807',
'楠梓區' : '811',
'小港區' : '812',
'左營區' : '813',
'仁武區' : '814',
'大社區' : '815',
'東沙群島' : '817',
'南沙群島' : '819',
'岡山區' : '820',
'路竹區' : '821',
'阿蓮區' : '822',
'田寮區' : '823',
'燕巢區' : '824',
'橋頭區' : '825',
'梓官區' : '826',
'彌陀區' : '827',
'永安區' : '828',
'湖內區' : '829',
'鳳山區' : '830',
'大寮區' : '831',
'林園區' : '832',
'鳥松區' : '833',
'大樹區' : '840',
'旗山區' : '842',
'美濃區' : '843',
'六龜區' : '844',
'內門區' : '845',
'杉林區' : '846',
'甲仙區' : '847',
'桃源區' : '848',
'那瑪夏區' : '849',
'茂林區' : '851',
'茄萣區' : '852',
'馬公市' : '880',
'西嶼鄉' : '881',
'望安鄉' : '882',
'七美鄉' : '883',
'白沙鄉' : '884',
'湖西鄉' : '885',
'金沙鎮' : '890',
'金湖鎮' : '891',
'金寧鄉' : '892',
'金城鎮' : '893',
'烈嶼鄉' : '894',
'烏坵鄉' : '896',
'屏東市' : '900',
'三地門鄉' : '901',
'霧臺鄉' : '902',
'瑪家鄉' : '903',
'九如鄉' : '904',
'里港鄉' : '905',
'高樹鄉' : '906',
'鹽埔鄉' : '907',
'長治鄉' : '908',
'麟洛鄉' : '909',
'竹田鄉' : '911',
'內埔鄉' : '912',
'萬丹鄉' : '913',
'潮州鎮' : '920',
'泰武鄉' : '921',
'來義鄉' : '922',
'萬巒鄉' : '923',
'崁頂鄉' : '924',
'新埤鄉' : '925',
'南州鄉' : '926',
'林邊鄉' : '927',
'東港鎮' : '928',
'琉球鄉' : '929',
'佳冬鄉' : '931',
'新園鄉' : '932',
'枋寮鄉' : '940',
'枋山鄉' : '941',
'春日鄉' : '942',
'獅子鄉' : '943',
'車城鄉' : '944',
'牡丹鄉' : '945',
'恆春鎮' : '946',
'滿州鄉' : '947',
'臺東市' : '950',
'綠島鄉' : '951',
'蘭嶼鄉' : '952',
'延平鄉' : '953',
'卑南鄉' : '954',
'鹿野鄉' : '955',
'關山鎮' : '956',
'海端鄉' : '957',
'池上鄉' : '958',
'東河鄉' : '959',
'成功鎮' : '961',
'長濱鄉' : '962',
'太麻里鄉' : '963',
'金峰鄉' : '964',
'大武鄉' : '965',
'達仁鄉' : '966',
'花蓮市' : '970',
'新城鄉' : '971',
'秀林鄉' : '972',
'吉安鄉' : '973',
'壽豐鄉' : '974',
'鳳林鎮' : '975',
'光復鄉' : '976',
'豐濱鄉' : '977',
'瑞穗鄉' : '978',
'萬榮鄉' : '979',
'玉里鎮' : '981',
'卓溪鄉' : '982',
'富里鄉' : '983',
}