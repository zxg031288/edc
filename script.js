// 全局变量
let scheduleData = [];
let currentView = 'timeline';
let selectedDay = '2025-05-17';
let timeFilter = { from: '10:00', to: '21:30' };
let stageFilter = 'all';
let searchTerm = '';

// DOM 元素
const timelineContainer = document.getElementById('timeline-container');
const stageContainer = document.getElementById('stage-container');
const artistSearch = document.getElementById('artist-search');
const searchBtn = document.getElementById('search-btn');
const stageFilterEl = document.getElementById('stage-filter');
const timeFromEl = document.getElementById('time-from');
const timeToEl = document.getElementById('time-to');
const modal = document.getElementById('artist-modal');
const closeModal = document.querySelector('.close');
const navTabs = document.querySelectorAll('.nav-tabs a');
const viewBtns = document.querySelectorAll('.view-options button');

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    loadScheduleData();
    addEventListeners();
});

// 加载演出时间表数据
function loadScheduleData() {
    const scheduleCSV = `DJ Name,Stage,China Start Time,China End Time,China Date,China Day of Week,Duration (minutes)
SAAVEDRA,kineticFIELD,10:00,11:00,2025-05-17,星期六,60
BENNİ,kineticFIELD,11:00,12:00,2025-05-17,星期六,60
CELEBRATION CEREMONY,kineticFIELD,12:00,12:10,2025-05-17,星期六,10
ACRAZE,kineticFIELD,12:10,13:10,2025-05-17,星期六,60
ERIC PRYDZ,kineticFIELD,13:15,14:30,2025-05-17,星期六,75
ILLENIUM,kineticFIELD,14:35,15:50,2025-05-17,星期六,75
ALESSO B2B ISLANDER,kineticFIELD,15:55,17:10,2025-05-17,星期六,75
ZEDD,kineticFIELD,17:15,18:30,2025-05-17,星期六,75
KASKADE AND DEADMAU5 PRESENT Kx5,kineticFIELD,18:30,19:30,2025-05-17,星期六,60
MEDUZA,kineticFIELD,19:30,20:30,2025-05-17,星期六,60
CLOSING CEREMONY,kineticFIELD,20:30,20:43,2025-05-17,星期六,13
CHYLORDAM,cosmicMEADOW,10:00,11:00,2025-05-17,星期六,60
BRUITALISMUS 3000,cosmicMEADOW,11:00,12:00,2025-05-17,星期六,60
DEORRO,cosmicMEADOW,12:00,13:00,2025-05-17,星期六,60
METROPOLIS,cosmicMEADOW,13:00,14:00,2025-05-17,星期六,60
SARA LANDRY,cosmicMEADOW,14:00,15:15,2025-05-17,星期六,75
KAAZE B2B TAZZO,cosmicMEADOW,15:15,16:30,2025-05-17,星期六,75
SHERMANOLOGY,cosmicMEADOW,16:30,17:30,2025-05-17,星期六,60
ARMİN VAN BUUREN B2B TECHNOPOLIS,cosmicMEADOW,17:30,18:30,2025-05-17,星期六,60
GOOD TIMES AHEAD,cosmicMEADOW,18:30,19:30,2025-05-17,星期六,60
GOODBOYS,cosmicMEADOW,19:30,20:30,2025-05-17,星期六,60
CORREN FOOT,circuitGROUNDS,10:00,11:00,2025-05-17,星期六,60
MAU P,circuitGROUNDS,11:00,12:00,2025-05-17,星期六,60
JOHN SUMMIT,circuitGROUNDS,12:00,13:00,2025-05-17,星期六,60
SIDEPIECE,circuitGROUNDS,13:00,14:00,2025-05-17,星期六,60
CHARLOTTE DE WITTE,circuitGROUNDS,14:00,15:15,2025-05-17,星期六,75
TCHAMI x MALAA: NO REDEMPTION,circuitGROUNDS,15:15,16:30,2025-05-17,星期六,75
DOM DOLLA,circuitGROUNDS,16:30,17:45,2025-05-17,星期六,75
VINTAGE CULTURE B2B X POPOF,circuitGROUNDS,17:45,19:00,2025-05-17,星期六,75
CHRIS LAKE,circuitGROUNDS,19:00,20:15,2025-05-17,星期六,75
MADDIX,neonGARDEN,10:00,11:00,2025-05-17,星期六,60
REINIER ZONNEVELD,neonGARDEN,11:00,12:30,2025-05-17,星期六,90
CARL COX,neonGARDEN,12:30,14:00,2025-05-17,星期六,90
PEGGY GOU,neonGARDEN,14:00,15:30,2025-05-17,星期六,90
ADAM BEYER,neonGARDEN,15:30,17:00,2025-05-17,星期六,90
BORIS BREJCHA,neonGARDEN,17:00,18:30,2025-05-17,星期六,90
AMELIE LENS,neonGARDEN,18:30,20:00,2025-05-17,星期六,90
ZOMBOY,bassPOD,10:00,11:00,2025-05-17,星期六,60
PEEKABOO,bassPOD,11:00,12:00,2025-05-17,星期六,60
EXCISION,bassPOD,12:00,13:30,2025-05-17,星期六,90
SUBTRONICS,bassPOD,13:30,14:30,2025-05-17,星期六,60
LIQUID STRANGER,bassPOD,14:30,15:30,2025-05-17,星期六,60
SVDDEN DEATH,bassPOD,15:30,16:30,2025-05-17,星期六,60
WOOLI,bassPOD,16:30,17:30,2025-05-17,星期六,60
SULLIVAN KING,bassPOD,17:30,18:30,2025-05-17,星期六,60
KAYZO,bassPOD,18:30,20:00,2025-05-17,星期六,90
DARREN STYLES,wasteLAND,10:00,11:00,2025-05-17,星期六,60
ATMOZFEARS,wasteLAND,11:00,12:00,2025-05-17,星期六,60
WARFACE,wasteLAND,12:00,13:00,2025-05-17,星期六,60
ANGERFIST,wasteLAND,13:00,14:30,2025-05-17,星期六,90
BRENNAN HEART,wasteLAND,14:30,15:30,2025-05-17,星期六,60
TNT,wasteLAND,15:30,16:30,2025-05-17,星期六,60
RADICAL REDEMPTION,wasteLAND,16:30,17:30,2025-05-17,星期六,60
HEADHUNTERZ,wasteLAND,17:30,18:30,2025-05-17,星期六,60
DA TWEEKAZ,wasteLAND,18:30,20:00,2025-05-17,星期六,90
ANDREW BAYER,quantumVALLEY,10:00,11:00,2025-05-17,星期六,60
JASON ROSS,quantumVALLEY,11:00,12:00,2025-05-17,星期六,60
ILAN BLUESTONE,quantumVALLEY,12:00,13:00,2025-05-17,星期六,60
COSMIC GATE,quantumVALLEY,13:00,14:00,2025-05-17,星期六,60
ANDREW RAYEL,quantumVALLEY,14:00,15:00,2025-05-17,星期六,60
PAUL VAN DYK,quantumVALLEY,15:00,16:30,2025-05-17,星期六,90
FERRY CORSTEN,quantumVALLEY,16:30,18:00,2025-05-17,星期六,90
ABOVE & BEYOND,quantumVALLEY,18:00,20:00,2025-05-17,星期六,120
WADE,stereoBLOOM,10:00,11:00,2025-05-17,星期六,60
BORN DIRTY,stereoBLOOM,11:00,12:00,2025-05-17,星期六,60
LEE FOSS,stereoBLOOM,12:00,13:00,2025-05-17,星期六,60
KYLE WATSON,stereoBLOOM,13:00,14:00,2025-05-17,星期六,60
GREEN VELVET,stereoBLOOM,14:00,15:30,2025-05-17,星期六,90
SOLARDO,stereoBLOOM,15:30,17:00,2025-05-17,星期六,90
EATS EVERYTHING,stereoBLOOM,17:00,18:30,2025-05-17,星期六,90
PATRICK TOPPING,stereoBLOOM,18:30,20:00,2025-05-17,星期六,90
DAVID GUETTA,kineticFIELD,10:00,11:00,2025-05-18,星期日,60
DOMBRESKY,kineticFIELD,11:00,12:00,2025-05-18,星期日,60
ARMİN VAN BUUREN,kineticFIELD,12:00,13:10,2025-05-18,星期日,70
FISHER,kineticFIELD,13:15,14:30,2025-05-18,星期日,75
DJ SNAKE,kineticFIELD,14:35,15:50,2025-05-18,星期日,75
TİËSTO,kineticFIELD,15:55,17:10,2025-05-18,星期日,75
STEVE AOKI,kineticFIELD,17:15,18:30,2025-05-18,星期日,75
JOHN SUMMIT,kineticFIELD,18:30,19:30,2025-05-18,星期日,60
ALOK,kineticFIELD,19:30,20:30,2025-05-18,星期日,60
CLOSING CEREMONY,kineticFIELD,20:30,20:43,2025-05-18,星期日,13
RÜFÜS DU SOL,cosmicMEADOW,10:00,11:00,2025-05-18,星期日,60
LANE 8,cosmicMEADOW,11:00,12:00,2025-05-18,星期日,60
KASKADE,cosmicMEADOW,12:00,13:15,2025-05-18,星期日,75
DEADMAU5,cosmicMEADOW,13:15,14:30,2025-05-18,星期日,75
MARTIN GARRIX,cosmicMEADOW,14:30,15:45,2025-05-18,星期日,75
ZEDD,cosmicMEADOW,15:45,17:00,2025-05-18,星期日,75
ABOVE & BEYOND,cosmicMEADOW,17:00,18:30,2025-05-18,星期日,90
SEVEN LIONS,cosmicMEADOW,18:30,20:00,2025-05-18,星期日,90
BORIS BREJCHA,circuitGROUNDS,10:00,11:00,2025-05-18,星期日,60
REZZ,circuitGROUNDS,11:00,12:15,2025-05-18,星期日,75
NORA EN PURE,circuitGROUNDS,12:15,13:15,2025-05-18,星期日,60
GRYFFIN,circuitGROUNDS,13:15,14:15,2025-05-18,星期日,60
SAN HOLO,circuitGROUNDS,14:15,15:15,2025-05-18,星期日,60
PORTER ROBINSON,circuitGROUNDS,15:15,16:30,2025-05-18,星期日,75
SKRILLEX,circuitGROUNDS,16:30,18:00,2025-05-18,星期日,90
DIPLO,circuitGROUNDS,18:00,19:30,2025-05-18,星期日,90
MIKE POSNER,kineticFIELD,10:00,11:00,2025-05-19,星期一,60
NORA EN PURE,kineticFIELD,11:00,12:00,2025-05-19,星期一,60
ASTREL B2B MORTEN,kineticFIELD,12:00,13:00,2025-05-19,星期一,60
JAMES HYPE,kineticFIELD,13:00,14:00,2025-05-19,星期一,60
ALOK B2B THIS IS,kineticFIELD,14:00,15:00,2025-05-19,星期一,60
MARTIN GARRIX,kineticFIELD,15:00,16:15,2025-05-19,星期一,75
MARSHMELLO B2B INFORMATION,kineticFIELD,16:15,17:30,2025-05-19,星期一,75
DAVID GUETTA,kineticFIELD,17:30,18:45,2025-05-19,星期一,75
MARLON HOFFSTADT TECHNOPOOL,kineticFIELD,18:45,19:45,2025-05-19,星期一,60
TIESTO - IN SEARCH OF SUNRISE,kineticFIELD,19:45,20:45,2025-05-19,星期一,60
CLOSING CEREMONY,kineticFIELD,20:45,21:00,2025-05-19,星期一,15
THE CHAINSMOKERS,cosmicMEADOW,10:00,11:15,2025-05-19,星期一,75
KYGO,cosmicMEADOW,11:15,12:30,2025-05-19,星期一,75
ILLENIUM,cosmicMEADOW,12:30,13:45,2025-05-19,星期一,75
EXCISION,cosmicMEADOW,13:45,15:00,2025-05-19,星期一,75
DON DIABLO,cosmicMEADOW,15:00,16:15,2025-05-19,星期一,75
YELLOW CLAW,cosmicMEADOW,16:15,17:30,2025-05-19,星期一,75
VINI VICI,cosmicMEADOW,17:30,18:45,2025-05-19,星期一,75
VIRTUAL SELF,cosmicMEADOW,18:45,20:00,2025-05-19,星期一,75
FJAAK,bionicJUNGLE,10:00,11:30,2025-05-19,星期一,90
BICEP,bionicJUNGLE,11:30,13:00,2025-05-19,星期一,90
FOUR TET,bionicJUNGLE,13:00,14:30,2025-05-19,星期一,90
JAMIE XX,bionicJUNGLE,14:30,16:00,2025-05-19,星期一,90
BONOBO,bionicJUNGLE,16:00,17:30,2025-05-19,星期一,90
JON HOPKINS,bionicJUNGLE,17:30,19:00,2025-05-19,星期一,90
STEPHAN BODZIN,bionicJUNGLE,19:00,20:30,2025-05-19,星期一,90
MONOLINK,forestHOUSE,10:00,11:30,2025-05-19,星期一,90
ELDERBROOK,forestHOUSE,11:30,13:00,2025-05-19,星期一,90
DISCLOSURE,forestHOUSE,13:00,14:30,2025-05-19,星期一,90
HONEY DIJON,forestHOUSE,14:30,16:00,2025-05-19,星期一,90
KAYTRANADA,forestHOUSE,16:00,17:30,2025-05-19,星期一,90
THE BLESSED MADONNA,forestHOUSE,17:30,19:00,2025-05-19,星期一,90
CAMELPHAT,forestHOUSE,19:00,20:30,2025-05-19,星期一,90
MARKUS SCHULZ,ubuntu,12:00,14:00,2025-05-19,星期一,120
GARETH EMERY,ubuntu,14:00,16:00,2025-05-19,星期一,120
ATB,ubuntu,16:00,18:00,2025-05-19,星期一,120
PAUL OAKENFOLD,ubuntu,18:00,20:00,2025-05-19,星期一,120
DJ MINX,beatboxARTCAR,14:00,15:30,2025-05-19,星期一,90
ERIS DREW,beatboxARTCAR,15:30,17:00,2025-05-19,星期一,90
OCTO OCTA,beatboxARTCAR,17:00,18:30,2025-05-19,星期一,90
DJ BORING,beatboxARTCAR,18:30,20:00,2025-05-19,星期一,90
NINA KRAVIZ,metaPHOENIX,16:00,17:30,2025-05-19,星期一,90
MARCEL DETTMANN,metaPHOENIX,17:30,19:00,2025-05-19,星期一,90
DARIA KOLOSOVA,metaPHOENIX,19:00,20:30,2025-05-19,星期一,90
ANETHA,yeeDCI,16:00,17:30,2025-05-19,星期一,90
I HATE MODELS,yeeDCI,17:30,19:00,2025-05-19,星期一,90
999999999,yeeDCI,19:00,20:30,2025-05-19,星期一,90
KERRI CHANDLER,blacklightBAR,16:00,17:30,2025-05-19,星期一,90
MORA DEEP,blacklightBAR,17:30,19:00,2025-05-19,星期一,90
DERRICK CARTER,blacklightBAR,19:00,20:30,2025-05-19,星期一,90`;

    // 解析CSV数据
    const lines = scheduleCSV.trim().split('\n');
    const headers = lines[0].split(',');
    
    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',');
        const event = {};
        
        for (let j = 0; j < headers.length; j++) {
            event[headers[j]] = values[j];
        }
        
        scheduleData.push(event);
    }
    
    // 初始加载演出数据
    renderSchedule();
}

// 添加事件监听器
function addEventListeners() {
    // 日期切换
    navTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            navTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            selectedDay = tab.getAttribute('data-day');
            renderSchedule();
        });
    });
    
    // 视图切换
    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            viewBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentView = btn.id === 'timeline-view' ? 'timeline' : 'stage';
            renderSchedule();
        });
    });
    
    // 搜索
    searchBtn.addEventListener('click', () => {
        searchTerm = artistSearch.value.trim().toUpperCase();
        renderSchedule();
    });
    
    // 回车搜索
    artistSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchTerm = artistSearch.value.trim().toUpperCase();
            renderSchedule();
        }
    });
    
    // 舞台筛选
    stageFilterEl.addEventListener('change', () => {
        stageFilter = stageFilterEl.value;
        renderSchedule();
    });
    
    // 时间筛选
    timeFromEl.addEventListener('change', () => {
        timeFilter.from = timeFromEl.value;
        renderSchedule();
    });
    
    timeToEl.addEventListener('change', () => {
        timeFilter.to = timeToEl.value;
        renderSchedule();
    });
    
    // 关闭模态框
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // 点击模态框外部关闭
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// 渲染演出时间表
function renderSchedule() {
    if (currentView === 'timeline') {
        renderTimelineView();
    } else {
        renderStageView();
    }
}

// 渲染时间轴视图
function renderTimelineView() {
    timelineContainer.innerHTML = '';
    stageContainer.style.display = 'none';
    timelineContainer.style.display = 'block';
    
    // 筛选数据
    const filteredData = filterScheduleData();
    
    // 按时间段分组
    const timeGroups = groupByTimeBlock(filteredData);
    
    // 创建时间线
    const timeline = document.createElement('div');
    timeline.className = 'timeline';
    
    // 为每个时间段创建时间线区块
    for (const [time, events] of Object.entries(timeGroups)) {
        const timeHeader = document.createElement('div');
        timeHeader.className = 'timeline-header';
        
        const timeMarker = document.createElement('div');
        timeMarker.className = 'time-marker';
        
        const timeTitle = document.createElement('h2');
        timeTitle.textContent = time;
        
        timeHeader.appendChild(timeMarker);
        timeHeader.appendChild(timeTitle);
        timeline.appendChild(timeHeader);
        
        // 添加每个时间段的演出
        events.forEach(event => {
            const eventCard = createEventCard(event);
            timeline.appendChild(eventCard);
        });
    }
    
    timelineContainer.appendChild(timeline);
}

// 渲染舞台视图
function renderStageView() {
    stageContainer.innerHTML = '';
    timelineContainer.style.display = 'none';
    stageContainer.style.display = 'block';
    
    // 筛选数据
    const filteredData = filterScheduleData();
    
    // 按舞台分组
    const stageGroups = groupByStage(filteredData);
    
    // 创建舞台布局
    const stageLayout = document.createElement('div');
    stageLayout.className = 'stage-layout';
    
    // 为每个舞台创建一个列
    for (const [stageName, events] of Object.entries(stageGroups)) {
        const stageColumn = document.createElement('div');
        stageColumn.className = 'stage-column';
        
        const stageHeader = document.createElement('div');
        stageHeader.className = 'stage-header';
        
        const stageTitle = document.createElement('h3');
        stageTitle.textContent = stageName;
        
        stageHeader.appendChild(stageTitle);
        stageColumn.appendChild(stageHeader);
        
        const stageEvents = document.createElement('div');
        stageEvents.className = 'stage-events';
        
        // 添加每个舞台的演出
        events.forEach(event => {
            const stageEvent = createStageEvent(event);
            stageEvents.appendChild(stageEvent);
        });
        
        stageColumn.appendChild(stageEvents);
        stageLayout.appendChild(stageColumn);
    }
    
    stageContainer.appendChild(stageLayout);
}

// 创建事件卡片
function createEventCard(event) {
    const eventCard = document.createElement('div');
    eventCard.className = 'event-card';
    eventCard.setAttribute('data-artist', event['DJ Name']);
    
    const eventTime = document.createElement('div');
    eventTime.className = 'event-time';
    eventTime.textContent = `${event['China Start Time']} - ${event['China End Time']}`;
    
    const eventDetails = document.createElement('div');
    eventDetails.className = 'event-details';
    
    const eventTitle = document.createElement('div');
    eventTitle.className = 'event-title';
    eventTitle.textContent = event['DJ Name'];
    
    const eventLocation = document.createElement('div');
    eventLocation.className = 'event-location';
    
    const stageName = document.createElement('span');
    stageName.textContent = event['Stage'];
    
    const stageTag = document.createElement('span');
    stageTag.className = 'stage-tag';
    stageTag.textContent = `${event['Duration (minutes)']}分钟`;
    
    eventLocation.appendChild(stageName);
    eventLocation.appendChild(stageTag);
    
    eventDetails.appendChild(eventTitle);
    eventDetails.appendChild(eventLocation);
    
    eventCard.appendChild(eventTime);
    eventCard.appendChild(eventDetails);
    
    // 添加点击事件
    eventCard.addEventListener('click', () => {
        showArtistModal(event['DJ Name'], event);
    });
    
    return eventCard;
}

// 创建舞台事件
function createStageEvent(event) {
    const stageEvent = document.createElement('div');
    stageEvent.className = 'stage-event';
    stageEvent.setAttribute('data-artist', event['DJ Name']);
    
    const eventTime = document.createElement('div');
    eventTime.className = 'stage-event-time';
    eventTime.textContent = `${event['China Start Time']} - ${event['China End Time']} (${event['Duration (minutes)']}分钟)`;
    
    const eventArtist = document.createElement('div');
    eventArtist.className = 'stage-event-artist';
    eventArtist.textContent = event['DJ Name'];
    
    stageEvent.appendChild(eventTime);
    stageEvent.appendChild(eventArtist);
    
    // 添加点击事件
    stageEvent.addEventListener('click', () => {
        showArtistModal(event['DJ Name'], event);
    });
    
    return stageEvent;
}

// 显示艺人信息模态框
function showArtistModal(artistName, performance) {
    // 获取艺人数据（从artist-data.js导入）
    const artist = window.artistData && window.artistData[artistName] ? 
        window.artistData[artistName] : 
        (typeof getDefaultArtistData === 'function' ? 
            getDefaultArtistData(artistName) : 
            {
                name: artistName,
                bio: "暂无艺人信息",
                image: "https://source.unsplash.com/random/300x300/?music",
                genre: "Electronic",
                socials: { spotify: "#", instagram: "#", facebook: "#" }
            }
        );
    
    // 设置模态框内容
    document.querySelector('.artist-name').textContent = artist.name;
    document.querySelector('.artist-bio').textContent = artist.bio;
    document.querySelector('.artist-image').src = artist.image;
    document.querySelector('.artist-image').alt = artist.name;
    
    document.querySelector('.performance-time').textContent = `时间: ${performance['China Start Time']} - ${performance['China End Time']} (${performance['China Date']} ${performance['China Day of Week']})`;
    document.querySelector('.performance-stage').textContent = `舞台: ${performance['Stage']}`;
    
    document.querySelector('.social-link.spotify').href = artist.socials.spotify;
    document.querySelector('.social-link.instagram').href = artist.socials.instagram;
    document.querySelector('.social-link.facebook').href = artist.socials.facebook;
    
    // 显示流派（如果有）
    const performanceInfo = document.querySelector('.performance-info');
    const genreElement = document.querySelector('.artist-genre');
    
    if (artist.genre && !genreElement) {
        const genreP = document.createElement('p');
        genreP.className = 'artist-genre';
        genreP.textContent = `流派: ${artist.genre}`;
        performanceInfo.appendChild(genreP);
    } else if (artist.genre && genreElement) {
        genreElement.textContent = `流派: ${artist.genre}`;
    }
    
    // 显示模态框
    modal.style.display = 'block';
}

// 筛选时间表数据
function filterScheduleData() {
    return scheduleData.filter(event => {
        // 日期筛选
        const dateMatch = event['China Date'] === selectedDay;
        
        // 舞台筛选
        const stageMatch = stageFilter === 'all' || event['Stage'] === stageFilter;
        
        // 时间筛选
        const startTime = event['China Start Time'];
        const timeMatch = startTime >= timeFilter.from && startTime <= timeFilter.to;
        
        // 搜索筛选
        const searchMatch = searchTerm === '' || event['DJ Name'].toUpperCase().includes(searchTerm);
        
        return dateMatch && stageMatch && timeMatch && searchMatch;
    });
}

// 按时间段分组
function groupByTimeBlock(events) {
    const timeGroups = {};
    const timeBlocks = ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00'];
    
    // 初始化时间组
    timeBlocks.forEach(time => {
        timeGroups[time] = [];
    });
    
    // 将事件分配到合适的时间段
    events.forEach(event => {
        const startTime = event['China Start Time'];
        
        // 找到合适的时间段
        let assignedBlock = timeBlocks[0];
        for (let i = 1; i < timeBlocks.length; i++) {
            if (startTime >= timeBlocks[i - 1] && startTime < timeBlocks[i]) {
                assignedBlock = timeBlocks[i - 1];
                break;
            } else if (i === timeBlocks.length - 1 && startTime >= timeBlocks[i]) {
                assignedBlock = timeBlocks[i];
            }
        }
        
        timeGroups[assignedBlock].push(event);
    });
    
    // 移除空时间段
    Object.keys(timeGroups).forEach(key => {
        if (timeGroups[key].length === 0) {
            delete timeGroups[key];
        }
    });
    
    return timeGroups;
}

// 按舞台分组
function groupByStage(events) {
    const stageGroups = {};
    
    events.forEach(event => {
        const stageName = event['Stage'];
        
        if (!stageGroups[stageName]) {
            stageGroups[stageName] = [];
        }
        
        stageGroups[stageName].push(event);
    });
    
    // 对每个舞台的事件按开始时间排序
    Object.keys(stageGroups).forEach(stageName => {
        stageGroups[stageName].sort((a, b) => {
            return a['China Start Time'].localeCompare(b['China Start Time']);
        });
    });
    
    return stageGroups;
} 