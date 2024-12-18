// 마이페이지 개발 뱃지를 위한 각 스킬 노드
type UserSkill = {
    id: number;
    name: string;
}

// 마이페이지 유저 정보
type User = {
    id: number;
    name: string;
    category: string;
    profile: string;
    badge_cnt: number;
    roadmap_cnt: number;
    card_cnt: number;
    skill_list: UserSkill[];
}

// 라운지 미니 프로필
type MiniProfileInfo = {
    id: number;
    name: string;
    category: string;
    likes: number;
    view_cnt: number;
    badge_cnt: number;
    roadmap_cnt: number;
    card_cnt: number;
    imageURL : string;
}

// AI추천기업
type UserRecommendCompany = {
    id: number;
    title: string;
    name: string;
    category: string;
    congruence: number;
    imgUrl: string;
    openingUrl: string;
}