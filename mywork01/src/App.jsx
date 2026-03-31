import { useState } from "react";

function VideoCard({ title, channel, views }) {
  const [likes, setLikes] = useState(0);
  const [clicks, setClicks] = useState(0);
  const handleCardClick = () => {
    setClicks(clicks + 1);
  }
  const handleLikeClick = (event) => {
    event.stopPropagation(); //카드 클릭과 좋아요 클릭 동시에 클릭 안되게 막아놓음
    setLikes(likes + 1);
  };

  return (
    <div 
      onClick={handleCardClick}
      style={{
        padding: "16px",
        marginBottom: "12px",
        border: "1px solid #ccc",
        borderRadius: "12px",
        cursor: "pointer",
      }}>
      <h3>{title}</h3>
      <p>채널: {channel}</p>
      <p>조회수: {views}</p>
      <p>클릭 수: {clicks}</p>
      <p>좋아요 수: {likes}</p>
      <button onClick={handleLikeClick}>좋아요</button>
    </div>
  );
}

function VideoList({ videos }) {
  return (
    <div>
      {videos.map((video, index) => (
        <VideoCard
          key={index}
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
      index: "전체",
      title: "리액트 기초 강의",
      channel: "코딩채널",
      views: "10만",
    },
    {
      title: "자바스크립트 완벽 정리",
      channel: "개발자TV",
      views: "25만",
    },
    {
      title: "프론트엔드 취업 로드맵",
      channel: "코딩랩",
      views: "5만",
    },
  ];
  const filterReadVideos = [
    filter === "전체"
    ? videos
    : videos.filter((video) => video.category === filter)
  ];

  return (
    <div>
      <h1> 추천 영상</h1>
      <button onClick={() => setFilter("전체")}>전체</button>
      <button onClick={() => setFilter("공부")}>공부</button>
      <button onClick={() => setFilter("자바스크립트")}>자바스크립트</button>
      <button onClick={() => setFilter("취업")}>취업</button>
      <VideoList videos={filterReadVideos} />
    </div>
  );
}

export default App;