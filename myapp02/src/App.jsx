import { useState } from "react";

function GreetingCard({ name, message }) {
  const [likes, setLikes] = useState(0);
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "16px",
      marginBottom: "12px"
    }}>
      <h3>{name}님께</h3>
      <p>{message}</p>
      <p>좋아요 수 : {likes}</p>
      <button onClick = {() => setLikes(likes + 1)}>좋아요</button>
    </div>
  );
}

function SelectButton({ text, color }) {
  const[selected, setSelcted] = useState(false);
  return (
    <button onClick={() => setSelcted(!selected)}
      style={{
        backgroundColor: selected ? color : "#ddd",
        color: selected ? "white" : "black",
        padding: "10px 16px",
        marginRight: "8px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
    {selected ? `${text} 선택됨` : text}
    </button>
  );
}


function App(){
  return(
    <div>
      <h1>5주차  수업(state)</h1>
      <div>
        <GreetingCard name="민지" message="생일 축하해" />
        <GreetingCard name="철수" message="시험 화이팅" />
        <GreetingCard name="영희" message="오늘도 좋은 하루" />
      </div>
      <hr />

      <SelectButton text="로그인" color="blue" />
      <SelectButton text="회원가입" color="red" />
      <SelectButton text="확인" color="green" />
      <hr />

    </div>
  )
}

export default App;