// src/data.js

// 1. 프로필, 소개, 학력, 스킬 데이터 (변경 없음)
export const profileData = {
    name: "김영준 (Kim Young Jun)",
    profileImage: "images/My_Character.png",
    bio: "IoT/ICT 제품 개발자에서 XR 콘텐츠 개발자로 나아가는 김영준입니다. 하드웨어부터 소프트웨어까지 아우르는 시스템 설계 경험과 QA 역량을 바탕으로 몰입감 높은 디지털 콘텐츠를 만듭니다.",
    email: "kyj931221@gmail.com",
    phone: "010-4055-0463",
    // ⭐️ 1. 버튼 관리
    buttons: [
        {
            text: "Portfolio",
            link: "https://drive.google.com/uc?export=download&id=1dtLPOE06Ej-7wHqHRkqJTZmlffHW-jjf", // ⭐️ 1. 포트폴리오 링크 (직접 다운로드)
            isPrimary: false // ⭐️ false: 회색 버튼, true: 파란색 버튼
        },
        {
            text: "Resume",
            link: "https://drive.google.com/uc?export=download&id=179iUjeqGvS35N5o8y0CIB9I-p1hJ1ZJz", // ⭐️ 2. 이력서 링크 (직접 다운로드)
            isPrimary: false
        },
        {
            text: "GitHub",
            link: "https://github.com/kyj931221", // ⭐️ 3. Contact 링크 (기존 contactLink)
            isPrimary: true
        },
        {
            text: "Blog",
            link: "https://blog.naver.com/opa1003", // ⭐️ 3. Contact 링크 (기존 contactLink)
            isPrimary: true
        }
    ],
    skills: [
        "Unity", "C#", "AR/VR", "IoT", "QA",
    ],
    info: [
        // --- 왼쪽 컬럼에 표시될 항목 ---
        {label: "학력", value: "[누리마루학원] 게임그래픽 디자이너 3D모델링 (2025.10 ~ 2026.07)"},
        {label: "학력", value: "[한국폴리텍대학] 증강현실시스템과 (2024.03 ~ 2024.10)"},
        {label: "학력", value: "[중부대학교] 정보통신공학과 (2012.03 ~ 2018.02)"},

        // --- 오른쪽 컬럼에 표시될 항목 ---
        {label: "수상 내역", value: "한국폴리텍대학 하이테크과정 우수 (2024.12)"},
        {label: "자격증", value: "3D프린터운용 기능사 (2019.12)"},
    ]
};

// 2. 회사 경력 데이터 (변경 없음)
export const careerHistory = [
    {
        title: "사원 / QA 엔지니어",
        company: "(주)엠스텍 | 2025.03 ~ 2025.05",
        description: "[삼성 웰스토리 플러스] 서비스 고도화 QA 담당. 모바일 앱(AOS/IOS) 및 내부 상담사 시스템(Back-Office), 사용자 시스템(Front-Office)의 기능, 호환성, 데이터 정합성 검증 및 TC 설계/수행."
    },
    {
        title: "대리 / 연구원",
        company: "글로벌스마트솔루션(주) 기업 부설 연구소 | 2019.08 ~ 2022.07",
        description: "IoT/ICT 제품 기획 및 개발, 국가 R&D 과제 수행. 스마트팜, 화재 감지기, 스마트 양육 시스템 등 다수의 프로젝트에서 시스템 설계, H/W 개발, 기술 보고서 작성."
    }
];

// ⭐️ 3. 포트폴리오 프로젝트 데이터 (필터 구조 전체 변경)
export const portfolioItems = [
    // --- 경력 (Career) 프로젝트 ---
    {
        id: "p1",
        l1_type: "career", // 대분류: 경력
        l2_company: "(주)엠스텍", // 중분류: 회사명
        imgSrc: "images/placeholder-qa.png",
        imgAlt: "삼성 웰스토리 플러스 QA",
        title: "삼성 웰스토리 플러스 QA",
        description: "(주)엠스텍 - 모바일 앱(AOS/IOS) 및 백오피스, 프론트오피스 시스템의 기능, 호환성, 데이터 정합성 검증 및 TC 설계.",
        link: "#",
        buttons: [],
        related: {title: "(주)엠스텍", icon: "group_work"}
    },
    {
        id: "p2",
        l1_type: "career",
        l2_company: "글로벌스마트솔루션(주)",
        imgSrc: "images/placeholder-iot.png",
        imgAlt: "IoT 메시 네트워크 제어 시스템",
        title: "IoT 메시 네트워크 제어 시스템",
        description: "(글로벌스마트솔루션) 스마트팜/건조기 응용. Mesh Network 기반 무선 제어 시스템 개발 및 상용화, MQTT 프로토콜 통신 개발.",
        link: "#",
        buttons: [
            {
                text: "영상",
                url: "https://youtu.be/DpaIf-U44s8?si=Y2o02E_zlQLwD90V"
            },
        ],
        related: {title: "글로벌스마트솔루션(주)", icon: "group_work"}
    },
    {
        id: "p3",
        l1_type: "career",
        l2_company: "글로벌스마트솔루션(주)",
        imgSrc: "images/placeholder-iot-fire.png",
        imgAlt: "주방용 화재 감지 제품 개발",
        title: "주방용 화재 감지 제품 개발",
        description: "(글로벌스마트솔루션) 카메라와 복합 센서 기반 감지기 개발. PCB 회로, 3D 모델링, 시제품 제작, 성능 테스트, 기술 보고서 작성.",
        link: "#",
        buttons: [],
        related: {title: "글로벌스마트솔루션(주)", icon: "group_work"}
    },
    {
        id: "p4",
        l1_type: "career",
        l2_company: "글로벌스마트솔루션(주)",
        imgSrc: "images/placeholder-iot-laver.png",
        imgAlt: "ICT 융합형 스마트 물김 양육 시스템",
        title: "ICT 융합형 스마트 물김 양육 시스템",
        description: "(국가 과제) 책임 연구원. 시스템 전체 설계(로직, 3D 모델링), 컨트롤러 H/W 설계 및 제작, 현장 테스트 및 최종 보고서 작성.",
        link: "#",
        buttons: [],
        related: {title: "글로벌스마트솔루션(주)", icon: "group_work"}
    },

    // --- 개인 (Personal) 프로젝트 ---
    {
        id: "p5",
        l1_type: "personal", // 대분류: 개인
        l2_category: "planning", // 중분류: 기획
        l3_subcategory: null, // 소분류: 없음
        imgSrc: "images/placeholder-web.png",
        imgAlt: "개인 포트폴리오 웹사이트",
        title: "개인 포트폴리오 웹사이트 (SPA)",
        description: "SPA 구조로 기획 및 제작. 컴포넌트 기반 모듈화 설계 적용 (HTML, CSS, JS, jQuery). GitHub Pages 배포.",
        link: "#",
        buttons: [],
        related: {title: "개인 프로젝트", icon: "person"}
    },
    {
        id: "p6",
        l1_type: "personal",
        l2_category: "content", // 중분류: 콘텐츠
        l3_subcategory: "game", // 소분류: 게임
        imgSrc: "images/placeholder-game-ninja.png",
        imgAlt: "그때 갑자기 닌자가 나타났다!",
        title: "그때 갑자기 닌자가 나타났다!",
        description: "3D 아케이드 게임 (개인 프로젝트). 기획, 개발, 테스터, 구글 플레이 배포.",
        link: "#",
        buttons: [
            {
                text: "데모 영상",
                url: "https://youtu.be/Glp0o2QQ7OE?si=L3iWIIV43KOWNUl-"
            },
            {
                text: "GitHub",
                url: "https://github.com/kyj931221/01.Then-a-ninja-suddenly-appeared"
            },
        ],
        related: {title: "개인 프로젝트", icon: "person"}
    },
    {
        id: "p7",
        l1_type: "personal",
        l2_category: "content",
        l3_subcategory: "game",
        imgSrc: "images/placeholder-game-moon.png",
        imgAlt: "달로향하자!",
        title: "달로향하자! : For All Of Us",
        description: "플랫포머 게임 (개인 프로젝트). 기획, 개발, 테스터, 운영.",
        link: "#",
        buttons: [
            {
                text: "데모 영상",
                url: "https://youtu.be/9kRKZsyv2NQ?si=b2ngfARms_dkj-sr"
            },
            {
                text: "GitHub",
                url: "https://github.com/kyj931221/02.for-all-of-us"
            },
        ],
        related: {title: "개인 프로젝트", icon: "person"}
    },
    {
        id: "p8",
        l1_type: "personal",
        l2_category: "content",
        l3_subcategory: "ar-vr", // 소분류: AR-VR
        imgSrc: "images/placeholder-ar-earth.png",
        imgAlt: "AR 지구를지켜라",
        title: "AR 지구를지켜라: Protect The Earth",
        description: "AR 슈팅 게임 (개인 프로젝트). 기획, 개발, 테스터, 운영.",
        link: "#",
        buttons: [
            {
                text: "데모 영상",
                url: "https://youtu.be/q4wvyRo7qEI?si=0EMzPgX_5wnzkjfe"
            },
            {
                text: "GitHub",
                url: "#"
            },
        ],
        related: {title: "개인 프로젝트", icon: "person"}
    },
    {
        id: "p9",
        l1_type: "personal",
        l2_category: "content",
        l3_subcategory: "ar-vr",
        imgSrc: "images/placeholder-ar-checklist.png",
        imgAlt: "RE.MIND: AR Check List",
        title: "RE.MIND: AR Check List",
        description: "AR 체크리스트 앱 (개인 프로젝트). 기획, 개발, 테스터, 운영.",
        link: "#",
        buttons: [
            {
                text: "데모 영상",
                url: "https://youtu.be/rV8lyufHbgM?si=MOCgsY3eGx8Iy3Oi"
            },
            {
                text: "GitHub",
                url: "#"
            },
        ],
        related: {title: "개인 프로젝트", icon: "person"}
    },
    {
        id: "p10",
        l1_type: "personal",
        l2_category: "content",
        l3_subcategory: "ar-vr",
        imgSrc: "images/placeholder-ar-traffic.png",
        imgAlt: "어린이 교통안전",
        title: "함께해요, 어린이 교통안전 (Team)",
        description: "AR 교육 콘텐츠 (팀 프로젝트). 기획, 개발, 테스터, 운영.",
        link: "#",
        buttons: [
            {
                text: "데모 영상",
                url: "https://youtu.be/4vkbCIt_f50?si=A_j-WFBtKJ_AbRI5"
            },
            {
                text: "GitHub",
                url: "#"
            },
        ],
        related: {title: "팀 프로젝트", icon: "group"}
    },
    {
        id: "p11",
        l1_type: "personal",
        l2_category: "content",
        l3_subcategory: "ar-vr",
        imgSrc: "images/placeholder-vr-fairytale.png",
        imgAlt: "VR 명작동화 탐험대",
        title: "VR 명작동화 탐험대 (Team)",
        description: "VR 교육 콘텐츠 (팀 프로젝트). 기획, 개발, 테스터, 운영.",
        link: "#",
        buttons: [
            {
                text: "데모 영상",
                url: "https://youtu.be/9f-Qh_hm4RQ?si=mhcN2z34br4LUc0J"
            },
            {
                text: "GitHub",
                url: "#"
            },
        ],
        related: {title: "팀 프로젝트", icon: "group"}
    },
    {
        id: "p12",
        l1_type: "personal",
        l2_category: "content",
        l3_subcategory: "ar-vr",
        imgSrc: "images/placeholder-ar-catchyou.png",
        imgAlt: "Catch You Catch Me",
        title: "Catch You Catch Me",
        description: "위치 정보/미디어 AR 콘텐츠 (개인 프로젝트). 기획, 개발, 테스터, 운영.",
        link: "#",
        buttons: [
            {
                text: "데모 영상",
                url: "https://youtube.com/shorts/q-FsHx9qLf8?si=95U8bwFo54JwWubx"
            },
            {
                text: "GitHub",
                url: "#"
            },
        ],
        related: {title: "개인 프로젝트", icon: "person"}
    },
    {
        id: "p13",
        l1_type: "personal",
        l2_category: "content",
        l3_subcategory: "game",
        imgSrc: "images/placeholder-game-unscene.png",
        imgAlt: "The UnScene: Fear Unseen",
        title: "The UnScene: Fear Unseen",
        description: "3인칭 TPS 공포 게임 (개인 프로젝트). 기획, 개발, 테스터, 운영.",
        link: "#",
        buttons: [
            {
                text: "데모 영상",
                url: "https://youtu.be/KLLUYLJmKxU?si=Sg7xsBF_2s219Xm2"
            },
            {
                text: "GitHub",
                url: "#"
            },
        ],
        related: {title: "개인 프로젝트", icon: "person"}
    },
    {
        id: "p14",
        l1_type: "personal",
        l2_category: "content",
        l3_subcategory: "game",
        imgSrc: "images/placeholder-game-kimchi.png",
        imgAlt: "김치-런",
        title: "유니티6 챌린지 : 김치-런",
        description: "생존 게임 (개인 프로젝트). 기획, 개발, 테스터, 운영.",
        link: "https://play.unity.com/en/games/3825e42d-cbc9-4a44-bce6-f6e832feb8ab/webgl-builds",
        buttons: [
            {
                text: "데모 영상",
                url: "https://youtube.com/watch?v=..."
            },
            {
                text: "GitHub",
                url: "#"
            },
        ],
        related: {title: "개인 프로젝트", icon: "person"}
    },
    {
        id: "p15",
        l1_type: "device", // 대분류: 디바이스
        l2_company: null, // 디바이스는 회사/카테고리 분류가 없음
        l2_category: null,
        l3_subcategory: null,
        imgSrc: "images/placeholder-device.png", // ⭐️ public/images/ 에 이미지 추가 필요
        imgAlt: "샘플 디바이스",
        title: "샘플 디바이스 프로젝트",
        description: "이곳에 디바이스 프로젝트 설명을 입력하세요. (예: 아두이노 기반 IoT 기기)",
        link: "#",
        buttons: [],
        related: {title: "디바이스 제작", icon: "memory"} // ⭐️ 아이콘 예시
    }
];