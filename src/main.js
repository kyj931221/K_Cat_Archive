// src/main.js

import './style.css'
import Alpine from 'alpinejs'

// 1. 데이터 파일 불러오기
import { profileData, careerHistory, portfolioItems } from './data.js'

// 2. '경력' 필터용 회사 이름 목록 자동 추출
const companyNames = [...new Set(
    portfolioItems
        .filter(item => item.l1_type === 'career')
        .map(item => item.l2_company)
)];


// 3. Alpine 컴포넌트(데이터 저장소) 정의
Alpine.data('portfolioApp', () => ({
    // --- 원본 데이터 ---
    profile: profileData,
    career: careerHistory,
    items: portfolioItems,
    companies: companyNames,

    // ⭐️ 4. 필터 상태 변수 (l1_filter에 'device' 추가)
    l1_filter: 'all', // 'all', 'personal', 'career', 'device'
    l2_filter: 'all',
    l3_filter: 'all',

    // ⭐️ 5. 필터 상태 변경 함수 (로직 수정)
    setL1Filter(filter) {
        this.l1_filter = filter;
        this.l2_filter = 'all'; // L1 변경 시 L2, L3 초기화
        this.l3_filter = 'all';
    },
    setL2Filter(filter) {
        this.l2_filter = filter;
        this.l3_filter = 'all'; // L2 변경 시 L3 초기화
    },
    setL3Filter(filter) {
        this.l3_filter = filter;
    },

    // ⭐️ 6. 새 다단계 필터 로직 (수정)
    get filteredItems() {
        let filtered = this.items;

        // --- L1 필터 (대분류) ---
        if (this.l1_filter === 'personal') {
            filtered = filtered.filter(item => item.l1_type === 'personal');
        } else if (this.l1_filter === 'career') {
            filtered = filtered.filter(item => item.l1_type === 'career');
        } else if (this.l1_filter === 'device') { // ⭐️ '디바이스' 필터 추가
            filtered = filtered.filter(item => item.l1_type === 'device');
        }
        // 'all'이면 모든 항목 통과

        // --- L2 필터 (중분류) ---
        if (this.l2_filter !== 'all') {
            if (this.l1_filter === 'personal') {
                filtered = filtered.filter(item => item.l2_category === this.l2_filter);
            } else if (this.l1_filter === 'career') {
                filtered = filtered.filter(item => item.l2_company === this.l2_filter);
            }
            // 'device'는 L2 필터가 없음
        }

        // --- L3 필터 (소분류) ---
        if (this.l3_filter !== 'all') {
            if (this.l1_filter === 'personal') {
                if (this.l2_filter === 'content' || this.l2_filter === 'design') {
                    filtered = filtered.filter(item => item.l3_subcategory === this.l3_filter);
                }
            }
            // 'device'는 L3 필터가 없음
        }

        return filtered;
    }
}));

// 7. Alpine 시작
window.Alpine = Alpine
Alpine.start()