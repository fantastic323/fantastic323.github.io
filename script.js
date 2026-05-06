const hotel = "The Sebel Quay West Suites Sydney";

const days = [
  {
    date: "5月23日",
    weekday: "周六",
    title: "抵达悉尼，住进海港边",
    area: "Circular Quay / The Rocks",
    image: "https://images.unsplash.com/photo-1523428096881-5bd79d043006?auto=format&fit=crop&w=1500&q=82",
    tags: ["低强度", "补给日", "步行优先"],
    plan: [
      ["下午", "机场到酒店", "建议直接打车或预约带婴儿座椅的接送，车程通常约 25-35 分钟；到店后先让宝宝补觉。"],
      ["16:30", "The Rocks 轻散步", "沿 George St 到 Circular Quay，看歌剧院和海港大桥，不安排室内景点，给宝宝适应时差。"],
      ["18:00", "早晚餐", "Pancakes on the Rocks 或 The Rocks 周边简餐；如果宝宝状态一般，外带回酒店。"],
    ],
    hotel: "入住公寓式套房，提前邮件确认 cot、浴缸/婴儿澡盆、微波炉和 late arrival。",
    transport: "机场接送最省心；若行李少，可 T8 火车到 Circular Quay 后步行。",
    food: "晚餐选酒店步行 10 分钟内，第一天不追求打卡。",
    baby: "到酒店先做补给：尿布、湿巾、牛奶/辅食、瓶装水。Coles/Woolworths 市区店可作为备选。",
    backup: "如果航班晚点，取消散步，保留晚餐和洗澡睡觉。",
  },
  {
    date: "5月24日",
    weekday: "周日",
    title: "Darling Harbour 水族馆和亲子餐厅",
    area: "Darling Harbour",
    image: "https://images.unsplash.com/photo-1567165308011-35edfe935b81?auto=format&fit=crop&w=1500&q=82",
    tags: ["室内", "婴儿车友好", "儿童菜单"],
    plan: [
      ["09:30", "SEA LIFE Sydney Aquarium", "早点入场避开中午人流，宝宝看鱼通常接受度高；Penguin Expedition 对身高和年龄有限制，宝宝可跳过。"],
      ["12:00", "Blackbird Cafe 午餐", "Darling Harbour 水边，官网标注儿童菜单和 high chairs，适合慢慢吃。"],
      ["14:00", "酒店午睡", "午睡后可去 Tumbalong Park 或 Darling Quarter 短玩 30-45 分钟。"],
      ["17:30", "Fratelli Fresh", "披萨、意面、儿童菜单友好，离 Darling Harbour 景点近。"],
    ],
    hotel: `${hotel}，晚上回程建议打车或轻轨到 Circular Quay 后步行。`,
    transport: "去程可打车 10 分钟；回程从 Convention/Chinatown 轻轨到 Circular Quay 一带再步行。",
    food: "午餐 Blackbird，晚餐 Fratelli Fresh；周日部分餐厅有 surcharge，预订时确认。",
    baby: "SEA LIFE 是雨天首选，但馆内高峰期推车会慢，建议用轻便伞车或背带。",
    backup: "下雨不影响；宝宝疲劳就只做水族馆，取消下午公园。",
  },
  {
    date: "5月25日",
    weekday: "周一",
    title: "皇家植物园、歌剧院和海港午餐",
    area: "Royal Botanic Garden / Opera House",
    image: "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?auto=format&fit=crop&w=1500&q=82",
    tags: ["户外", "免费景点", "推车友好"],
    plan: [
      ["09:30", "Royal Botanic Garden", "5 月开放至 17:30，挑 Mrs Macquarie's Chair 方向慢走，随时找草坪休息。"],
      ["11:30", "Opera House 外观", "不强行参加室内 tour，宝宝醒着就拍照；困了直接去午餐。"],
      ["12:15", "Circular Quay 午餐", "选 MCA Cafe、Opera Kitchen 或 Quay Quarter 简餐，重点是近、快、有洗手间。"],
      ["15:30", "Barangaroo Reserve", "午睡后可短距离海边步道，日落前回酒店。"],
    ],
    hotel: `${hotel}，这一天几乎都在酒店步行/短打车范围内。`,
    transport: "全日步行即可；如果宝宝困，Circular Quay 到酒店 5 分钟车程。",
    food: "午餐选 Circular Quay，晚餐 Muum Maam Barangaroo，点米饭、烤鸡串、Pad Thai 等温和菜。",
    baby: "植物园风大，带薄外套和毯子；草坪休息比硬撑行程更重要。",
    backup: "雨天改 Australian Museum 或 MCA，保留晚餐。",
  },
  {
    date: "5月26日",
    weekday: "周二",
    title: "坐轮渡去 Taronga Zoo",
    area: "Mosman",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1500&q=82",
    tags: ["动物园", "轮渡", "亲子设施"],
    plan: [
      ["09:15", "Circular Quay 乘轮渡", "到 Taronga Zoo Wharf 后换接驳/巴士上坡；带宝宝不建议从码头硬推上山。"],
      ["10:00", "Taronga Zoo", "冬季 9:30-16:30，园内有 parent rooms、公共洗手间、咖啡点，按宝宝状态走 2-3 个区即可。"],
      ["12:30", "园内午餐", "在园内 cafe 简单吃，别为了餐厅横跨园区。"],
      ["14:00", "回酒店午睡", "下午不再安排大景点，保留晚上轻松散步。"],
    ],
    hotel: `${hotel}，Circular Quay 轮渡码头离酒店近，是这天的核心优势。`,
    transport: "轮渡 + 园区接驳；若下雨或宝宝睡着，回程直接打车。",
    food: "午餐园内解决；晚餐回 The Rocks 或酒店附近，选有空间放推车的餐厅。",
    baby: "动物园坡多，轻便推车加背带组合最稳；提前下载园区地图找 parent room。",
    backup: "大雨改 SEA LIFE + WILD LIFE Sydney Zoo，减少户外暴露。",
  },
  {
    date: "5月27日",
    weekday: "周三",
    title: "Manly 轮渡、海滩和 Shelly Beach",
    area: "Manly",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1500&q=82",
    tags: ["海边", "平路", "可缩短"],
    plan: [
      ["09:30", "Manly Ferry", "从 Circular Quay 出发，普通轮渡风景好；天气差时查实时服务再出门。"],
      ["10:15", "Manly Corso 到海滩", "路线平坦，推车友好；宝宝可看海、踩沙，不安排下水。"],
      ["11:30", "Shelly Beach 方向短走", "只走到宝宝舒服的位置，海边风大时提前折返。"],
      ["12:30", "Manly 午餐", "The Boathouse Shelly Beach 或 Manly Wharf 周边，选择户外但避风的位置。"],
    ],
    hotel: `${hotel}，回到 Circular Quay 后先午睡，不叠加夜间活动。`,
    transport: "F1 Manly Ferry 或 Manly Fast Ferry；推车可 roll-on/roll-off，但高峰时段留出排队时间。",
    food: "午餐 Manly，晚餐回酒店附近外带或简餐。",
    baby: "海边带防风外套、防晒和替换袜；沙子进鞋后宝宝很容易烦。",
    backup: "大风浪或下雨改 Australian National Maritime Museum。",
  },
  {
    date: "5月28日",
    weekday: "周四",
    title: "Maritime Museum 和中国花园",
    area: "Darling Harbour / Chinatown",
    image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=1500&q=82",
    tags: ["雨天友好", "短步行", "午睡稳"],
    plan: [
      ["10:00", "Australian National Maritime Museum", "开放 10:00-16:00，室内外结合；带宝宝重点看展厅，船只参观按体力决定。"],
      ["12:00", "One Dining 午餐", "中国花园内的现代中餐，午餐 11:00-15:00，适合安排在花园前后。"],
      ["13:15", "Chinese Garden of Friendship", "下层道路更适合推车，园内有 baby change；11:30 有锦鲤喂食，可根据宝宝状态调整顺序。"],
      ["15:00", "酒店休息", "晚上可去 Barangaroo 轻松吃饭。"],
    ],
    hotel: `${hotel}，全天活动集中在 Darling Harbour，进退方便。`,
    transport: "打车最省力；也可轻轨到 Chinatown/Convention。",
    food: "午餐 One Dining，晚餐 Barangaroo House 周边或 Muum Maam 备选。",
    baby: "中国花园上层有台阶和石路，推车只走下层，不必追求全园打卡。",
    backup: "如果宝宝不爱博物馆，只做花园 + 午餐。",
  },
  {
    date: "5月29日",
    weekday: "周五",
    title: "Bondi 轻海景日，不走完整海岸线",
    area: "Bondi",
    image: "https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?auto=format&fit=crop&w=1500&q=82",
    tags: ["海景", "半日", "打车友好"],
    plan: [
      ["09:30", "打车到 Bondi Beach", "带宝宝不建议公交换乘；到海边先找避风咖啡店和洗手间。"],
      ["10:15", "Bondi Pavilion 周边", "看海、短走、拍照；只走一小段 Bondi to Coogee 起点即可。"],
      ["11:45", "早午餐", "Bills Bondi 或海滩边简餐，提前订儿童椅。"],
      ["13:15", "回酒店", "把下午留给午睡和洗衣。"],
    ],
    hotel: `${hotel}，下午回酒店整理衣物，为周末活动留体力。`,
    transport: "往返打车；如遇堵车，回程可先到 Bondi Junction 再火车回 CBD。",
    food: "午餐 Bondi，晚餐 Fratelli Fresh 或酒店附近外带。",
    baby: "海边风和紫外线都强，即使 5 月底也要防晒、帽子、薄外套。",
    backup: "雨天改 Powerhouse / Australian Museum / SEA LIFE。",
  },
  {
    date: "5月30日",
    weekday: "周六",
    title: "The Grounds of Alexandria 和酒店泳池",
    area: "Alexandria",
    image: "https://images.unsplash.com/photo-1533777324565-a040eb52fac1?auto=format&fit=crop&w=1500&q=82",
    tags: ["餐厅目的地", "拍照", "慢半日"],
    plan: [
      ["09:30", "The Grounds of Alexandria", "适合早去避开排队，庭院、花艺、咖啡和早午餐对大人友好，宝宝可看环境。"],
      ["12:00", "早午餐后回程", "不在 Alexandria 继续加景点，保留午睡。"],
      ["15:30", "酒店泳池/室内休息", "如果宝宝精神好，安排短泳池或 Circular Quay 冰淇淋散步。"],
      ["17:30", "The Rocks 晚餐", "周六餐厅忙，订 17:30 早场最适合带宝宝。"],
    ],
    hotel: `${hotel}，下午利用泳池和洗衣，减少连续出门疲劳。`,
    transport: "往返打车最简单；带推车避开火车站换乘。",
    food: "The Grounds 早午餐，晚餐 The Rocks/Circular Quay。",
    baby: "周末人多，尽量预约早时段；宝宝困了就外带咖啡点心离开。",
    backup: "如果预约不到，改 QVB + Town Hall 周边室内逛吃。",
  },
  {
    date: "5月31日",
    weekday: "周日",
    title: "留白日：补喜欢的景点或重返海港",
    area: "CBD flexible",
    image: "https://images.unsplash.com/photo-1549180030-48bf079fb38a?auto=format&fit=crop&w=1500&q=82",
    tags: ["弹性", "采购", "不赶路"],
    plan: [
      ["上午", "二选一轻活动", "天气好去 Barangaroo Reserve / Observatory Hill；下雨去 Australian Museum 或 QVB。"],
      ["12:00", "午餐", "选离当日活动最近的餐厅，不跨区觅食。"],
      ["15:00", "购物和打包", "补买伴手礼、宝宝用品，晚上整理行李。"],
      ["17:30", "告别晚餐", "订 Muum Maam Barangaroo 或 Fratelli Fresh，选最顺路的一家。"],
    ],
    hotel: `${hotel}，最后一晚重点是洗衣、打包、确认机场交通。`,
    transport: "全天短途步行/打车；把交通不确定性降到最低。",
    food: "告别晚餐选已验证好推车和宝宝状态的餐厅，不冒险排队。",
    baby: "给宝宝一个低刺激日，通常比多打卡一个景点更值。",
    backup: "任何天气都可执行，必要时全天酒店附近活动。",
  },
  {
    date: "6月1日",
    weekday: "周一",
    title: "退房返程，保留从容窗口",
    area: "Sydney Airport",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1500&q=82",
    tags: ["返程", "不安排景点", "机场日"],
    plan: [
      ["早上", "酒店早餐和收尾", "不要安排景点；检查奶瓶、证件、药品、充电器、宝宝安抚物。"],
      ["退房前", "短散步", "如果航班晚，可在 Circular Quay / The Rocks 走 30 分钟。"],
      ["航班前 3 小时", "出发去机场", "国际航班建议更从容，带宝宝安检和托运都需要额外时间。"],
    ],
    hotel: "退房前询问 late checkout 或行李寄存；宝宝午睡时间卡航班的话，宁愿提前到机场。",
    transport: "预约接送最稳；火车备选但机场站有站台/行李动线压力。",
    food: "酒店附近早餐，机场再补一餐轻食。",
    baby: "把尿布、奶、换洗衣分成机上包和托运行李两份，避免临场翻箱。",
    backup: "航班延误时回 Circular Quay 室内咖啡店等，不再进收费景点。",
  },
];

const sources = [
  ["Transport NSW Opal / contactless", "https://transportnsw.info/tickets-fares/opal"],
  ["Taronga Zoo visitor information", "https://www.taronga.org.au/sydney-zoo/plan/visitor-information/"],
  ["SEA LIFE Sydney opening hours", "https://www.visitsealife.com/sydney/plan-your-day/before-you-visit/opening-hours/"],
  ["Royal Botanic Garden Sydney", "https://www.botanicgardens.org.au/royal-botanic-garden-sydney/plan-your-visit"],
  ["Circular Quay to Manly Ferry", "https://www.sydney.com/destinations/sydney/sydney-city/city-centre/transport/circular-quay-manly-ferry"],
  ["The Sebel Quay West Suites", "https://www.thesebelquaywestsydney.com.au/"],
  ["Novotel Sydney Darling Square", "https://www.darlingharbour.com/stay/novotel-sydney-darling-square"],
  ["Blackbird Cafe kids menu", "https://blackbirdcafe.com.au/menu/kids-menu/"],
  ["Fratelli Fresh Darling Harbour", "https://www.darlingharbour.com/eat-drink/fratelli-fresh"],
  ["Muum Maam Barangaroo menu", "https://muummaam.com.au/menu"],
  ["Chinese Garden of Friendship", "https://www.darlingharbour.com/precincts/chinese-garden"],
  ["Australian National Maritime Museum", "https://www.sea.museum/visit/visit"],
];

const mapStops = [
  { day: 0, id: "airport", name: "悉尼机场", type: "airport", lat: -33.9399, lng: 151.1753, note: "5月23日抵达，6月1日返程" },
  { day: 0, id: "hotel", name: hotel, type: "hotel", lat: -33.8618, lng: 151.2073, note: "全程住宿基地" },
  { day: 0, id: "circular-quay", name: "Circular Quay", type: "transport", lat: -33.8611, lng: 151.2126, note: "海港散步和多日轮渡起点" },
  { day: 0, id: "pancakes-rocks", name: "Pancakes on the Rocks", type: "food", lat: -33.8584, lng: 151.2089, note: "第一天早晚餐备选" },
  { day: 1, id: "hotel", name: hotel, type: "hotel", lat: -33.8618, lng: 151.2073, note: "出发" },
  { day: 1, id: "sea-life", name: "SEA LIFE Sydney Aquarium", type: "sight", lat: -33.8696, lng: 151.2020, note: "5月24日上午主景点" },
  { day: 1, id: "blackbird", name: "Blackbird Cafe", type: "food", lat: -33.8721, lng: 151.2007, note: "午餐" },
  { day: 1, id: "tumbalong", name: "Tumbalong Park", type: "sight", lat: -33.8753, lng: 151.2011, note: "午睡后短玩备选" },
  { day: 1, id: "fratelli", name: "Fratelli Fresh Darling Harbour", type: "food", lat: -33.8737, lng: 151.1994, note: "晚餐" },
  { day: 2, id: "hotel", name: hotel, type: "hotel", lat: -33.8618, lng: 151.2073, note: "出发" },
  { day: 2, id: "royal-botanic", name: "Royal Botanic Garden Sydney", type: "sight", lat: -33.8642, lng: 151.2166, note: "5月25日上午散步" },
  { day: 2, id: "opera-house", name: "Sydney Opera House", type: "sight", lat: -33.8568, lng: 151.2153, note: "外观拍照" },
  { day: 2, id: "mca-cafe", name: "MCA Cafe / Circular Quay 午餐区", type: "food", lat: -33.8599, lng: 151.2090, note: "午餐备选" },
  { day: 2, id: "barangaroo", name: "Barangaroo Reserve", type: "sight", lat: -33.8570, lng: 151.2017, note: "午睡后短步道" },
  { day: 2, id: "muum-maam", name: "Muum Maam Barangaroo", type: "food", lat: -33.8641, lng: 151.2026, note: "晚餐备选" },
  { day: 3, id: "hotel", name: hotel, type: "hotel", lat: -33.8618, lng: 151.2073, note: "出发" },
  { day: 3, id: "circular-quay-wharf", name: "Circular Quay Wharf", type: "transport", lat: -33.8611, lng: 151.2126, note: "轮渡上车点" },
  { day: 3, id: "taronga-wharf", name: "Taronga Zoo Wharf", type: "transport", lat: -33.8427, lng: 151.2432, note: "轮渡下车点" },
  { day: 3, id: "taronga-zoo", name: "Taronga Zoo", type: "sight", lat: -33.8430, lng: 151.2413, note: "5月26日主景点" },
  { day: 4, id: "hotel", name: hotel, type: "hotel", lat: -33.8618, lng: 151.2073, note: "出发" },
  { day: 4, id: "circular-quay-wharf", name: "Circular Quay Wharf", type: "transport", lat: -33.8611, lng: 151.2126, note: "Manly 轮渡上车点" },
  { day: 4, id: "manly-wharf", name: "Manly Wharf", type: "transport", lat: -33.8008, lng: 151.2846, note: "轮渡下车点" },
  { day: 4, id: "manly-beach", name: "Manly Beach", type: "sight", lat: -33.7969, lng: 151.2888, note: "海滩短玩" },
  { day: 4, id: "shelly-beach", name: "Shelly Beach", type: "sight", lat: -33.8006, lng: 151.2988, note: "短步道终点" },
  { day: 4, id: "boathouse-shelly", name: "The Boathouse Shelly Beach", type: "food", lat: -33.8008, lng: 151.2993, note: "午餐备选" },
  { day: 5, id: "hotel", name: hotel, type: "hotel", lat: -33.8618, lng: 151.2073, note: "出发" },
  { day: 5, id: "maritime", name: "Australian National Maritime Museum", type: "sight", lat: -33.8699, lng: 151.1987, note: "5月28日上午主景点" },
  { day: 5, id: "one-dining", name: "One Dining", type: "food", lat: -33.8760, lng: 151.2024, note: "中国花园内午餐" },
  { day: 5, id: "chinese-garden", name: "Chinese Garden of Friendship", type: "sight", lat: -33.8763, lng: 151.2021, note: "午餐后短逛" },
  { day: 6, id: "hotel", name: hotel, type: "hotel", lat: -33.8618, lng: 151.2073, note: "出发" },
  { day: 6, id: "bondi-beach", name: "Bondi Beach 下车点", type: "transport", lat: -33.8915, lng: 151.2767, note: "打车下车和海边起点" },
  { day: 6, id: "bondi-pavilion", name: "Bondi Pavilion", type: "sight", lat: -33.8907, lng: 151.2748, note: "5月29日轻海景" },
  { day: 6, id: "bills-bondi", name: "Bills Bondi", type: "food", lat: -33.8897, lng: 151.2742, note: "早午餐备选" },
  { day: 7, id: "hotel", name: hotel, type: "hotel", lat: -33.8618, lng: 151.2073, note: "出发" },
  { day: 7, id: "grounds", name: "The Grounds of Alexandria", type: "food", lat: -33.9109, lng: 151.1940, note: "5月30日早午餐目的地" },
  { day: 7, id: "the-rocks-dinner", name: "The Rocks 晚餐区", type: "food", lat: -33.8587, lng: 151.2089, note: "晚餐早场" },
  { day: 8, id: "hotel", name: hotel, type: "hotel", lat: -33.8618, lng: 151.2073, note: "出发" },
  { day: 8, id: "observatory-hill", name: "Observatory Hill", type: "sight", lat: -33.8591, lng: 151.2044, note: "好天气轻活动" },
  { day: 8, id: "australian-museum", name: "Australian Museum", type: "sight", lat: -33.8744, lng: 151.2131, note: "雨天备选" },
  { day: 8, id: "qvb", name: "QVB", type: "sight", lat: -33.8718, lng: 151.2067, note: "购物和雨天备选" },
  { day: 8, id: "muum-maam", name: "Muum Maam Barangaroo", type: "food", lat: -33.8641, lng: 151.2026, note: "告别晚餐备选" },
  { day: 9, id: "hotel", name: hotel, type: "hotel", lat: -33.8618, lng: 151.2073, note: "退房出发" },
  { day: 9, id: "airport", name: "悉尼机场", type: "airport", lat: -33.9399, lng: 151.1753, note: "返程" },
];

const tabs = document.querySelector("#dayTabs");
const detail = document.querySelector("#dayDetail");
const sourceList = document.querySelector("#sources");
const openMapButton = document.querySelector("#openMap");
const closeMapButton = document.querySelector("#closeMap");
const mapOverlay = document.querySelector("#mapOverlay");
const mapControls = document.querySelector("#mapControls");
const mapList = document.querySelector("#mapList");
const mapCanvas = document.querySelector("#tripMap");
let tripMap;
let markerLayer;
let routeLayer;
let activeMapDay = "all";

function renderTabs(activeIndex = 0) {
  tabs.innerHTML = days
    .map(
      (day, index) => `
        <button class="day-tab ${index === activeIndex ? "active" : ""}" type="button" data-index="${index}">
          <strong>${day.date} · ${day.weekday}</strong>
          <span>${day.area}</span>
        </button>
      `,
    )
    .join("");
}

function renderDay(index = 0) {
  const day = days[index];
  detail.innerHTML = `
    <div class="day-visual" style="--image: url('${day.image}')">
      <h3>${day.title}</h3>
    </div>
    <div class="day-body">
      <div class="tag-row">
        ${day.tags.map((tag) => `<span class="pill">${tag}</span>`).join("")}
      </div>
      <div class="timeline">
        ${day.plan
          .map(
            ([time, heading, copy]) => `
              <section class="time-block">
                <div class="time">${time}</div>
                <div>
                  <h4>${heading}</h4>
                  <p>${copy}</p>
                </div>
              </section>
            `,
          )
          .join("")}
      </div>
      <ul class="tip-list">
        <li><strong>酒店：</strong>${day.hotel}</li>
        <li><strong>交通：</strong>${day.transport}</li>
        <li><strong>餐厅：</strong>${day.food}</li>
        <li><strong>宝宝：</strong>${day.baby}</li>
        <li><strong>备选：</strong>${day.backup}</li>
      </ul>
    </div>
  `;
}

function renderSources() {
  sourceList.innerHTML = sources
    .map(([label, href]) => `<a href="${href}" target="_blank" rel="noreferrer">${label}</a>`)
    .join("");
}

function getVisibleStops() {
  if (activeMapDay !== "all") {
    return mapStops.filter((stop) => stop.day === Number(activeMapDay));
  }

  const seen = new Map();
  mapStops.forEach((stop) => {
    if (!seen.has(stop.id)) {
      seen.set(stop.id, stop);
    }
  });
  return [...seen.values()];
}

function getStopTypeLabel(type) {
  return {
    airport: "机场",
    hotel: "酒店",
    transport: "上下车点",
    sight: "景点",
    food: "餐厅",
  }[type];
}

function renderMapControls() {
  const controls = [
    `<button class="map-filter active" type="button" data-map-day="all">全部地点</button>`,
    ...days.map(
      (day, index) =>
        `<button class="map-filter" type="button" data-map-day="${index}">${day.date}</button>`,
    ),
  ];
  mapControls.innerHTML = controls.join("");
}

function renderMapList(stops) {
  mapList.innerHTML = `
    <h3>${activeMapDay === "all" ? "全程重要地点顺序" : `${days[activeMapDay].date} 地点顺序`}</h3>
    <div class="map-route">
      ${stops
        .map(
          (stop, index) => `
            <section class="map-stop">
              <span class="stop-number">${index + 1}</span>
              <div>
                <strong>${stop.name}</strong>
                <span>${getStopTypeLabel(stop.type)} · ${stop.note}</span>
              </div>
            </section>
          `,
        )
        .join("")}
    </div>
  `;
}

function createNumberedIcon(stop, number) {
  return L.divIcon({
    className: `marker-${stop.type}`,
    html: `<span class="marker-number">${number}</span>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
    popupAnchor: [0, -18],
  });
}

function renderFallbackMap(stops) {
  mapCanvas.innerHTML = `
    <div class="map-fallback">
      <strong>地图暂时没有加载</strong>
      <span>右侧仍按顺序列出了酒店、景点、餐厅、上下车点和机场。</span>
    </div>
  `;
  renderMapList(stops);
}

function renderTripMap() {
  const stops = getVisibleStops();
  renderMapList(stops);

  if (!window.L) {
    renderFallbackMap(stops);
    return;
  }

  if (!tripMap) {
    tripMap = L.map("tripMap", {
      zoomControl: true,
      scrollWheelZoom: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(tripMap);
  }

  if (markerLayer) markerLayer.remove();
  if (routeLayer) routeLayer.remove();

  markerLayer = L.layerGroup().addTo(tripMap);
  const latLngs = stops.map((stop) => [stop.lat, stop.lng]);

  stops.forEach((stop, index) => {
    L.marker([stop.lat, stop.lng], { icon: createNumberedIcon(stop, index + 1) })
      .bindPopup(`<strong>${index + 1}. ${stop.name}</strong><br>${getStopTypeLabel(stop.type)} · ${stop.note}`)
      .addTo(markerLayer);
  });

  if (latLngs.length > 1) {
    routeLayer = L.polyline(latLngs, {
      color: "#006d77",
      weight: 3,
      opacity: 0.72,
      dashArray: activeMapDay === "all" ? "8 8" : "",
    }).addTo(tripMap);
  }

  const bounds = L.latLngBounds(latLngs);
  tripMap.invalidateSize();
  tripMap.fitBounds(bounds, { padding: [38, 38], maxZoom: activeMapDay === "all" ? 12 : 15 });
}

function openMap() {
  mapOverlay.classList.add("open");
  mapOverlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("map-open");
  setTimeout(renderTripMap, 80);
}

function closeMap() {
  mapOverlay.classList.remove("open");
  mapOverlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("map-open");
}

tabs.addEventListener("click", (event) => {
  const button = event.target.closest(".day-tab");
  if (!button) return;
  const index = Number(button.dataset.index);
  renderTabs(index);
  renderDay(index);
});

openMapButton.addEventListener("click", openMap);
closeMapButton.addEventListener("click", closeMap);

mapOverlay.addEventListener("click", (event) => {
  if (event.target === mapOverlay) {
    closeMap();
  }
});

mapControls.addEventListener("click", (event) => {
  const button = event.target.closest(".map-filter");
  if (!button) return;
  activeMapDay = button.dataset.mapDay;
  mapControls.querySelectorAll(".map-filter").forEach((item) => {
    item.classList.toggle("active", item === button);
  });
  renderTripMap();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mapOverlay.classList.contains("open")) {
    closeMap();
  }
});

renderTabs();
renderDay();
renderSources();
renderMapControls();
