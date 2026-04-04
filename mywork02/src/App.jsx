import { useState } from "react";

function VideoCard({ title, channel, views }) {
  const [likes, setLikes] = useState(0); // 좋아요 state
  const [clicks, setClicks] = useState(0); // 클릭 state
  const handleCardClick = () => { // 카드 클릭 횟수 증가
    setClicks(clicks + 1);
  };
  const handleLikeClick = (event) => { // 좋아요 버튼 클릭 시 좋아요 숫자 올리기
    event.stopPropagation(); // 카드 클릭과 좋아요 클릭이 동시에 실행되지 않도록 막기
    setLikes(likes + 1);
  };
  return (
    <div // div 안에 모든 범위 클릭 가능
      onClick={handleCardClick} 
      style={{ // div 스타일 설정
        border: "1px solid #ccc", // 테두리 두께 1px, 실선, 색상은 #ccc
        borderRadius: "12px", // 모서리를 둥글게
        padding: "16px", // 내부 여백은 16px
        marginBottom: "12px", // 아래쪽 바깥 여백 12px
        cursor: "pointer", // 마우스 올리면 손가락 모양으로 변경
      }} 
    >
      <h3>{title}</h3>
      <p>채널: {channel}</p>
      <p>조회수: {views}</p>
      <p>클릭 수: {clicks}</p> 
      <p>좋아요 수: {likes}</p>
      <button onClick={handleLikeClick}> 좋아요</button> 
    </div>
  );
}

function VideoList({ videos }) { // videos 배열을 받아서 카드 목록으로 변환(props)
  return (
    <div>
      {videos.map((video) => (
        <VideoCard
          key={video.id} // videos에서 id 부분 가져오기
          title={video.title} // videos에서 title 부분 가져오기
          channel={video.channel} // videos에서 channel 부분 가져오기 
          views={video.views} // videos에서 views 부분 가져오기
        />
      ))}
    </div>
  );
}

function App() {
  const [filter, setFilter] = useState("전체");
  {/*}  
    filter: 현재 선택된 카테고리 상태
    setFilter: filter 값을 변경하는 함수
    초기값: "전체"  
  */}
  const videos = [
    {
      id: 1,
      title: "리액트 기초 강의",
      channel: "코딩채널",
      views: "10만",
      category: "공부",
    },
    {
      id: 2,
      title: "자바스크립트 완벽 정리",
      channel: "개발자TV",
      views: "25만",
      category: "자바스크립트",
    },
    {
      id: 3,
      title: "프론트엔드 취업 로드맵",
      channel: "코딩랩",
      views: "5만",
      category: "취업",
    },
    {
      id: 4,
      title: "React props 쉽게 이해하기",
      channel: "리액트쌤",
      views: "8만",
      category: "공부",
    },
  ]; // 데이터 목록

  const filteredVideos = 
    filter === "전체" // 현재 선택 된 카테고리가 :전체" 인지 확인
      ? videos // 조건이 참이면 원본 배열 그대로 사용
      : videos.filter((video) => video.category === filter); // 조건이 거짓이면 필터링 시작
  return (
    <div style={{ padding: "20px" }}>
      <h1> 추천 영상</h1>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setFilter("전체")}>전체</button>
        {/* 클릭 시 전체 카테고리 보여주기 */}
        <button onClick={() => setFilter("공부")} style={{ marginLeft: "8px" }}>
          공부
        </button>
        {/* 클릭 시 공부 카테고리 보여주기 */}
        <button onClick={() => setFilter("자바스크립트")} style={{ marginLeft: "8px" }}>
          자바스크립트
        </button>
        {/* 클릭 시 자바스크립트 카테고리 보여주기 */}
        <button onClick={() => setFilter("취업")} style={{ marginLeft: "8px" }}>
          취업
        </button>
        {/* 클릭 시 취업 카테고리 보여주기 */}
      </div>
      <p>현재 필터: {filter}</p>
      <VideoList videos={filteredVideos} />
      {/* 현재 적용중인 필터 알려주는 코딩 */}
    </div>
  );
}

export default App;
