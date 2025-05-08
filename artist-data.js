// 艺人数据，模拟从互联网下载并本地存储的数据
const artistData = {
    "DAVID GUETTA": {
        name: "DAVID GUETTA",
        bio: "David Guetta是法国著名DJ和音乐制作人，被誉为电子舞曲界的传奇人物。他以融合电子舞曲与流行音乐的才华而闻名，曾多次获得格莱美奖提名并赢得全球DJ大奖。他的热门单曲包括《Titanium》、《Without You》和《Hey Mama》等，与众多国际巨星如Sia、Nicki Minaj等合作。",
        image: "https://source.unsplash.com/random/300x300/?david-guetta",
        genre: "EDM, House, Progressive House",
        socials: {
            spotify: "https://open.spotify.com/artist/1Cs0zKBU1kc0i8ypK3B9ai",
            instagram: "https://www.instagram.com/davidguetta/",
            facebook: "https://www.facebook.com/DavidGuetta/"
        }
    },
    "TIESTO": {
        name: "TIESTO",
        bio: "Tiësto是荷兰DJ和音乐制作人，被广泛认为是电子舞曲领域最具影响力的人物之一。他以精彩的现场表演和创新的音乐制作而闻名，曾获得格莱美奖。他的音乐风格从早期的纯粹Trance逐渐发展到包含House、Electro和Pop元素的多元化风格。",
        image: "https://source.unsplash.com/random/300x300/?tiesto",
        genre: "EDM, Trance, Progressive House",
        socials: {
            spotify: "https://open.spotify.com/artist/2o5jDhtHVPhrJdv3cEQ99Z",
            instagram: "https://www.instagram.com/tiesto/",
            facebook: "https://www.facebook.com/tiesto/"
        }
    },
    "MARTIN GARRIX": {
        name: "MARTIN GARRIX",
        bio: "Martin Garrix是荷兰DJ和音乐制作人，年轻时就已成为电子舞曲界的重要人物。他凭借单曲《Animals》一举成名，随后创作了许多热门作品如《Scared to Be Lonely》和《In the Name of Love》。他曾多次被DJ Mag评为世界第一DJ，并创立了自己的唱片公司STMPD RCRDS。",
        image: "https://source.unsplash.com/random/300x300/?martin-garrix",
        genre: "EDM, Progressive House, Future Bass",
        socials: {
            spotify: "https://open.spotify.com/artist/60d24wfXkVzDSfLS6hyCjZ",
            instagram: "https://www.instagram.com/martingarrix/",
            facebook: "https://www.facebook.com/martingarrix/"
        }
    },
    "ARMIN VAN BUUREN": {
        name: "ARMIN VAN BUUREN",
        bio: "Armin van Buuren是荷兰DJ和音乐制作人，被誉为Trance音乐的旗手。他是著名电台节目《A State of Trance》的主持人，该节目拥有数百万听众。他曾五次被DJ Mag评为世界第一DJ，创作了如《This Is What It Feels Like》和《Blah Blah Blah》等热门单曲。",
        image: "https://source.unsplash.com/random/300x300/?armin-van-buuren",
        genre: "Trance, Progressive Trance, EDM",
        socials: {
            spotify: "https://open.spotify.com/artist/0SfsnGyD8FpIN4U4WCkBZ5",
            instagram: "https://www.instagram.com/arminvanbuuren/",
            facebook: "https://www.facebook.com/arminvanbuuren/"
        }
    },
    "STEVE AOKI": {
        name: "STEVE AOKI",
        bio: "Steve Aoki是美国DJ、音乐制作人和唱片公司创始人。他以高能量的现场表演而闻名，特别是他标志性的"蛋糕脸"表演。作为Dim Mak唱片公司的创始人，他发掘了许多有才华的艺术家，并与BTS、Linkin Park等多元化艺术家合作。",
        image: "https://source.unsplash.com/random/300x300/?steve-aoki",
        genre: "EDM, Electro House, Big Room",
        socials: {
            spotify: "https://open.spotify.com/artist/16oZKvXb6WkQlVAjwo2Wbg",
            instagram: "https://www.instagram.com/steveaoki/",
            facebook: "https://www.facebook.com/steveaoki/"
        }
    },
    "MARSHMELLO": {
        name: "MARSHMELLO",
        bio: "Marshmello是美国电子音乐制作人和DJ，以其标志性的白色桶状头盔和保持身份神秘而闻名。他的音乐融合了EDM、Trap和Future Bass等元素，创作了如《Alone》、《Happier》和《Silence》等热门单曲，并与多位顶级艺术家合作。",
        image: "https://source.unsplash.com/random/300x300/?marshmello",
        genre: "EDM, Future Bass, Trap",
        socials: {
            spotify: "https://open.spotify.com/artist/64KEffDW9EtZ1y2vBYgq8T",
            instagram: "https://www.instagram.com/marshmellomusic/",
            facebook: "https://www.facebook.com/marshmellomusic/"
        }
    },
    "ZEDD": {
        name: "ZEDD",
        bio: "Zedd（本名Anton Zaslavski）是俄罗斯裔德国DJ和音乐制作人，以其复杂的音乐构造和精细的制作而闻名。他曾获得格莱美奖，创作了如《Clarity》、《Stay》和《The Middle》等热门单曲。他的音乐风格融合了电子舞曲与流行音乐元素。",
        image: "https://source.unsplash.com/random/300x300/?zedd",
        genre: "EDM, Electro House, Progressive House",
        socials: {
            spotify: "https://open.spotify.com/artist/2qxJFvFYMEDqd7ui6kSAcq",
            instagram: "https://www.instagram.com/zedd/",
            facebook: "https://www.facebook.com/Zedd/"
        }
    },
    "ILLENIUM": {
        name: "ILLENIUM",
        bio: "Illenium（本名Nicholas D. Miller）是美国DJ和电子音乐制作人，以其情感丰富的音乐风格而受到赞誉。他的音乐融合了Future Bass、Trap和Melodic Dubstep等元素，创作了如《Feel Good》、《Takeaway》和《Good Things Fall Apart》等作品。",
        image: "https://source.unsplash.com/random/300x300/?illenium",
        genre: "Future Bass, Melodic Dubstep, EDM",
        socials: {
            spotify: "https://open.spotify.com/artist/45eNHdiiabvmbp4erw26rg",
            instagram: "https://www.instagram.com/illenium/",
            facebook: "https://www.facebook.com/ILLENIUM/"
        }
    },
    "DEADMAU5": {
        name: "DEADMAU5",
        bio: "Deadmau5（本名Joel Thomas Zimmerman）是加拿大电子音乐制作人和DJ，以其标志性的"老鼠头"头盔和前卫的制作技术而闻名。他是Progressive House和Techno领域的创新者，创作了如《Ghosts 'n' Stuff》和《Strobe》等经典作品。",
        image: "https://source.unsplash.com/random/300x300/?deadmau5",
        genre: "Progressive House, Techno, Electro House",
        socials: {
            spotify: "https://open.spotify.com/artist/2CIMQHirSU0MQqyYHq0eOx",
            instagram: "https://www.instagram.com/deadmau5/",
            facebook: "https://www.facebook.com/deadmau5/"
        }
    },
    "FISHER": {
        name: "FISHER",
        bio: "Fisher（本名Paul Nicholas Fisher）是澳大利亚DJ和音乐制作人，前职业冲浪运动员转型为电子音乐艺术家。他以充满感染力的Tech House和House音乐而闻名，创作了如《Losing It》和《You Little Beauty》等热门单曲。",
        image: "https://source.unsplash.com/random/300x300/?fisher-dj",
        genre: "Tech House, House",
        socials: {
            spotify: "https://open.spotify.com/artist/7vk5e3vY1uw9plTHJAMwjN",
            instagram: "https://www.instagram.com/followthefishtv/",
            facebook: "https://www.facebook.com/followthefish/"
        }
    },
    "ALESSO": {
        name: "ALESSO",
        bio: "Alesso（本名Alessandro Lindblad）是瑞典DJ和电子音乐制作人，是Progressive House和商业EDM领域的重要人物。他创作了如《Heroes》、《Under Control》和《If I Lose Myself》等热门作品，并与Calvin Harris、OneRepublic等艺术家合作。",
        image: "https://source.unsplash.com/random/300x300/?alesso",
        genre: "Progressive House, EDM",
        socials: {
            spotify: "https://open.spotify.com/artist/4AVFqumd2ogHFlRbKIjp1t",
            instagram: "https://www.instagram.com/alesso/",
            facebook: "https://www.facebook.com/AlessoOfficial/"
        }
    },
    "CHARLOTTE DE WITTE": {
        name: "CHARLOTTE DE WITTE",
        bio: "Charlotte de Witte是比利时DJ和音乐制作人，是当代Techno场景的领军人物之一。她以原始、黑暗且充满力量的Techno风格而闻名，在全球各大音乐节和俱乐部演出。她还拥有自己的唱片公司KNTXT。",
        image: "https://source.unsplash.com/random/300x300/?charlotte-de-witte",
        genre: "Techno, Hard Techno",
        socials: {
            spotify: "https://open.spotify.com/artist/2gblb7qXo63XuxTKUDwlNn",
            instagram: "https://www.instagram.com/charlottedewittemusic/",
            facebook: "https://www.facebook.com/charlottedewittemusic/"
        }
    },
    "PEGGY GOU": {
        name: "PEGGY GOU",
        bio: "Peggy Gou是韩国DJ、音乐制作人和时尚设计师，以其独特的House和Techno混合风格而闻名。她是第一位在柏林著名俱乐部Berghain演出的韩国DJ，发行了如《It Makes You Forget》和《Starry Night》等受欢迎的单曲。",
        image: "https://source.unsplash.com/random/300x300/?peggy-gou",
        genre: "House, Techno, Electro",
        socials: {
            spotify: "https://open.spotify.com/artist/3HVdAiMNjYrFEtNhgI3OKQ",
            instagram: "https://www.instagram.com/peggygou_/",
            facebook: "https://www.facebook.com/peggygouu/"
        }
    },
    "ABOVE & BEYOND": {
        name: "ABOVE & BEYOND",
        bio: "Above & Beyond是英国电子音乐组合，由Jono Grant、Tony McGuinness和Paavo Siljamäki组成。他们是Trance音乐的代表人物，创立了著名的Anjunabeats和Anjunadeep唱片公司。他们的作品如《Sun & Moon》和《Thing Called Love》在电子乐迷中广受喜爱。",
        image: "https://source.unsplash.com/random/300x300/?above-and-beyond",
        genre: "Trance, Progressive Trance",
        socials: {
            spotify: "https://open.spotify.com/artist/10gzBoINW3cLJfZUka8Zoe",
            instagram: "https://www.instagram.com/aboveandbeyond/",
            facebook: "https://www.facebook.com/aboveandbeyond/"
        }
    },
    "DJ SNAKE": {
        name: "DJ SNAKE",
        bio: "DJ Snake（本名William Sami Étienne Grigahcine）是法国DJ和音乐制作人，以其融合EDM、Trap和Hip-Hop的风格而闻名。他创作了如《Turn Down for What》、《Lean On》和《Taki Taki》等国际热门单曲，与众多知名艺术家合作。",
        image: "https://source.unsplash.com/random/300x300/?dj-snake",
        genre: "EDM, Trap, Moombahton",
        socials: {
            spotify: "https://open.spotify.com/artist/540vIaP2JwjQb9dm3aArA4",
            instagram: "https://www.instagram.com/djsnake/",
            facebook: "https://www.facebook.com/djsnake.fr/"
        }
    },
    "SEVEN LIONS": {
        name: "SEVEN LIONS",
        bio: "Seven Lions（本名Jeff Montalvo）是美国DJ和音乐制作人，以其融合Dubstep、Trance和Melodic Bass的独特风格而著称。他创作了如《Strangers》、《Rush Over Me》和《Island》等作品，拥有自己的唱片公司Ophelia Records。",
        image: "https://source.unsplash.com/random/300x300/?seven-lions",
        genre: "Melodic Dubstep, Trance, Future Bass",
        socials: {
            spotify: "https://open.spotify.com/artist/6fcTRFpz0yH79qSKfof7lp",
            instagram: "https://www.instagram.com/sevenlionsmusic/",
            facebook: "https://www.facebook.com/SevenLions/"
        }
    },
    "CARL COX": {
        name: "CARL COX",
        bio: "Carl Cox是英国DJ和制作人，被视为Techno和House音乐的传奇人物。他以精湛的混音技巧和感染力极强的现场表演而闻名，曾连续15年在伊比沙岛Space俱乐部驻场演出。他创立了自己的唱片公司Intec Digital，并在全球各大音乐节上担任主打DJ。",
        image: "https://source.unsplash.com/random/300x300/?carl-cox",
        genre: "Techno, House, Tech House",
        socials: {
            spotify: "https://open.spotify.com/artist/3XMvdvavJXbula7wDRZ2rw",
            instagram: "https://www.instagram.com/carlcoxofficial/",
            facebook: "https://www.facebook.com/carlcox247/"
        }
    },
    "ADAM BEYER": {
        name: "ADAM BEYER",
        bio: "Adam Beyer是瑞典DJ和制作人，Drumcode唱片公司的创始人。他是现代Techno场景中最具影响力的人物之一，以其精准、强劲的打击乐风格而著称。他通过Drumcode电台节目和世界各地的演出推广高质量的Techno音乐。",
        image: "https://source.unsplash.com/random/300x300/?adam-beyer",
        genre: "Techno, Tech House",
        socials: {
            spotify: "https://open.spotify.com/artist/3AuI1nCGvaOcvX3hmwvah0",
            instagram: "https://www.instagram.com/realadambeyer/",
            facebook: "https://www.facebook.com/realadambeyer/"
        }
    },
    "BORIS BREJCHA": {
        name: "BORIS BREJCHA",
        bio: "Boris Brejcha是德国DJ和制作人，自创了"High-Tech Minimal"音乐风格。他以佩戴小丑面具演出和独特的音乐风格而闻名，融合了Minimal Techno、深邃的低音和复杂的旋律。他通过自己的唱片公司Fckng Serious发行音乐作品。",
        image: "https://source.unsplash.com/random/300x300/?boris-brejcha",
        genre: "High-Tech Minimal, Techno, Minimal",
        socials: {
            spotify: "https://open.spotify.com/artist/6caPJFLv1wesmM7gwK1ACy",
            instagram: "https://www.instagram.com/borisbrejcha/",
            facebook: "https://www.facebook.com/BorisBrejcha.Official/"
        }
    },
    "AMELIE LENS": {
        name: "AMELIE LENS",
        bio: "Amelie Lens是比利时DJ和制作人，以其强劲而高能的Techno表演而闻名。她在短时间内迅速崛起，成为全球Techno场景中的重要人物。她创立了自己的唱片公司和派对品牌EXHALE，并通过其制作和现场表演推动着Techno音乐的发展。",
        image: "https://source.unsplash.com/random/300x300/?amelie-lens",
        genre: "Techno, Hard Techno",
        socials: {
            spotify: "https://open.spotify.com/artist/5yBYfSyCwZJnGgqOQbWZNx",
            instagram: "https://www.instagram.com/amelie_lens/",
            facebook: "https://www.facebook.com/AmelieLensMusic/"
        }
    },
    "EXCISION": {
        name: "EXCISION",
        bio: "Excision（本名Jeff Abel）是加拿大DJ和制作人，是重低音电子音乐的先驱之一。他以极具震撼力的低音和高能舞台表演而闻名，创立了自己的音乐节Lost Lands和Bass Canyon，以及唱片公司Subsidia。他的现场表演常配以令人惊叹的视觉效果。",
        image: "https://source.unsplash.com/random/300x300/?excision",
        genre: "Dubstep, Bass Music, Riddim",
        socials: {
            spotify: "https://open.spotify.com/artist/5FKchcZpQOkqFvXBj1eCvb",
            instagram: "https://www.instagram.com/excision/",
            facebook: "https://www.facebook.com/Excision/"
        }
    },
    "SUBTRONICS": {
        name: "SUBTRONICS",
        bio: "Subtronics（本名Jesse Kardon）是美国DJ和制作人，以其创新的Dubstep和Riddim风格而闻名。他创造了"Cyclops Army"粉丝群体，并因其精湛的制作技巧和充满实验性的低音音乐而受到赞誉。他创立了自己的唱片公司Cyclops Recordings。",
        image: "https://source.unsplash.com/random/300x300/?subtronics",
        genre: "Dubstep, Riddim, Bass Music",
        socials: {
            spotify: "https://open.spotify.com/artist/0Pb95wuVoBLOyP8G04gjtS",
            instagram: "https://www.instagram.com/subtronics/",
            facebook: "https://www.facebook.com/Subtronicsofficial/"
        }
    },
    "PORTER ROBINSON": {
        name: "PORTER ROBINSON",
        bio: "Porter Robinson是美国DJ、制作人和多乐器演奏者，以其创新的电子音乐风格而闻名。从早期的Complextro和EDM风格，到后来更具情感和个人色彩的作品，如专辑《Worlds》和《Nurture》，他不断推动着电子音乐的艺术边界。他还以Virtual Self为别名创作更偏向Trance和Hardcore的音乐。",
        image: "https://source.unsplash.com/random/300x300/?porter-robinson",
        genre: "Electronic, Future Bass, Synth-pop",
        socials: {
            spotify: "https://open.spotify.com/artist/3dz0NnIZhtKKeXZxLOxCam",
            instagram: "https://www.instagram.com/porterrobinson/",
            facebook: "https://www.facebook.com/porterrobinsonmusic/"
        }
    },
    "SKRILLEX": {
        name: "SKRILLEX",
        bio: "Skrillex（本名Sonny John Moore）是美国DJ和制作人，电子舞曲界的标志性人物之一。他因开创性的Dubstep作品而闻名，多次获得格莱美奖。他的音乐风格多样，包括Dubstep、Trap、House等，与众多顶级艺术家合作，如Diplo（合作组合Jack Ü）和Boys Noize（合作组合Dog Blood）。",
        image: "https://source.unsplash.com/random/300x300/?skrillex",
        genre: "Dubstep, Bass Music, EDM",
        socials: {
            spotify: "https://open.spotify.com/artist/5he5w2lnU9x7JFhnwcekXX",
            instagram: "https://www.instagram.com/skrillex/",
            facebook: "https://www.facebook.com/skrillex/"
        }
    },
    "DIPLO": {
        name: "DIPLO",
        bio: "Diplo（本名Thomas Wesley Pentz）是美国DJ、制作人和唱片公司创始人。他是电子音乐领域最多产和最具影响力的人物之一，作为Major Lazer和Jack Ü的成员，以及LSD（与Sia和Labrinth合作）的一部分，创作了众多全球热门单曲。他还创立了著名的Mad Decent唱片公司。",
        image: "https://source.unsplash.com/random/300x300/?diplo",
        genre: "EDM, Moombahton, Trap, Dancehall",
        socials: {
            spotify: "https://open.spotify.com/artist/5fMUXHkw8R8eOP2RNVYEZX",
            instagram: "https://www.instagram.com/diplo/",
            facebook: "https://www.facebook.com/diplo/"
        }
    },
    "DISCLOSURE": {
        name: "DISCLOSURE",
        bio: "Disclosure是由兄弟Guy和Howard Lawrence组成的英国电子音乐二人组。他们因融合House音乐与流行元素的作品而闻名，专辑《Settle》和《Caracal》获得了国际性的成功。他们与Sam Smith、Lorde和The Weeknd等知名艺术家合作，创作了如《Latch》、《White Noise》和《Omen》等热门单曲。",
        image: "https://source.unsplash.com/random/300x300/?disclosure",
        genre: "House, UK Garage, Electronic",
        socials: {
            spotify: "https://open.spotify.com/artist/6nS5roXSAGhTGr34W6n7Et",
            instagram: "https://www.instagram.com/disclosure/",
            facebook: "https://www.facebook.com/disclosuremusic/"
        }
    },
    "RUFUS DU SOL": {
        name: "RUFUS DU SOL",
        bio: "RÜFÜS DU SOL是澳大利亚的电子舞曲三人组，由Tyrone Lindqvist、Jon George和James Hunt组成。他们创作的音乐融合了现场乐器演奏和电子制作元素，形成了独特的情绪化电子音乐风格。他们的专辑如《Bloom》和《Solace》获得了国际认可，多次入围格莱美奖。",
        image: "https://source.unsplash.com/random/300x300/?rufus-du-sol",
        genre: "Alternative Dance, Indie Electronic, House",
        socials: {
            spotify: "https://open.spotify.com/artist/5Pb27ujIyYb33zBqVysBkj",
            instagram: "https://www.instagram.com/rufusdusol/",
            facebook: "https://www.facebook.com/rufusdusol/"
        }
    }
};

// 如果艺人不在预定义列表中，使用此函数生成默认数据
function getDefaultArtistData(name) {
    return {
        name: name,
        bio: `${name} 是一位电子音乐艺术家，活跃于EDC等国际电子音乐节。更多详细信息即将更新。`,
        image: `https://source.unsplash.com/random/300x300/?dj&sig=${encodeURIComponent(name)}`,
        genre: "Electronic",
        socials: {
            spotify: "#",
            instagram: "#",
            facebook: "#"
        }
    };
} 