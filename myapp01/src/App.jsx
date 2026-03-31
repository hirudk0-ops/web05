import { useState } from "react";

function App() {
  const [ count, setCount] = useState(0);
  
  const [ name, setName ] = useState("");
  
  const [isOpen, setIsOpen] = useState(false);
  
  const [fruits, setFruits] = useState(["사과", "바나나"]);
  
  const addFruit = () => {
    setFruits([...fruits, "포도", "딸기"]);
  };

  const [user, setUser] = useState({
    name: "민지",
    age: 20,
  });

  const changeAge = () => {
    setUser({
      ...user,
      age: 21,
    });
  };

  return (
    <div>
      <p>현재 숫자: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <hr />
      
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>입력한 이름 : {name}</p>
      <hr />

      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "닫기" : "열기"}
      </button>

      {isOpen ? <p>내용이 보입니다.</p> : null}
      <hr />

      <button onClick={addFruit}>과일 추가</button>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <hr />

      <p>이름: {user.name}</p>
      <p>나이: {user.age}</p>
      <button onClick={changeAge}>나이 변경</button>
      <hr />
      
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <button onClick={() => setCount(count - 1)}>감소</button>
      <button onClick={() => setCount(0)}>초기화</button>

    </div>
  );

 
}


export default App;
