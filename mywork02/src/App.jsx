import { useState } from "react";
function VideoCard({ title, channel, views }) {
  const [likes, setLikes] = useState(0);
  const [clicks, setClicks] = useState(0);
  const handleCardClick = () => {
    setClicks(clicks + 1);
  };
  const handleLikeClick = (event) => {
    event.stopPropagation(); // 카드 클릭과 좋아요 클릭이 동시에 실행되지 않도록 막기
    setLikes(likes + 1);
  };
  return (
    <div
      onClick={handleCardClick}
      style={{
        border: "1px solid #ccc",
        borderRadius: "12px",
        padding: "16px",
        marginBottom: "12px",
        cursor: "pointer",
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
function VideoList({ videos }) {
  return (
    <div>
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          title={video.title}
          channel={video.channel}
          views={video.views}
        />
      ))}
    </div>
  );
}
function App() {
  const [filter, setFilter] = useState("전체");
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
  ];
  const filteredVideos =
    filter === "전체"
      ? videos
      : videos.filter((video) => video.category === filter);
  return (
    <div style={{ padding: "20px" }}>
      <h1> 추천 영상</h1>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setFilter("전체")}>전체</button>
        <button onClick={() => setFilter("공부")} style={{ marginLeft: "8px" }}>
          공부
        </button>
        <button onClick={() => setFilter("자바스크립트")} style={{ marginLeft: "8px" }}>
          자바스크립트
        </button>
        <button onClick={() => setFilter("취업")} style={{ marginLeft: "8px" }}>
          취업
        </button>
      </div>
      <p>현재 필터: {filter}</p>
      <VideoList videos={filteredVideos} />
    </div>
  );
}

export default App;