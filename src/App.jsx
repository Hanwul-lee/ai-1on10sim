import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [situation, setSituation] = useState("");
  const [goal, setGoal] = useState("");
  const [preQuestions, setPreQuestions] = useState("");
  const [prompt, setPrompt] = useState("");

  const handleGenerate = () => {
    const finalPrompt = `
지금부터 너는 우리 팀의 팀원 역할을 맡아줘.
이번 1on1은 아래 구조로 진행될 거야. 역할에 맞게 대화에 참여해줘.

[1on1의 10:10:10 구조]
- ‘Before’ 사전준비_ 시간 및 장소 확정, 팀원에게 사전 질문 사항 전달
- ‘First 10’ 팀원의 시간_ 아젠다에 대한 팀원 생각 들어보기
- ‘Second 10’ 팀장의 시간_ 아젠다 중심의 변화 아이디어와 실행 방안 발견
- ‘Last 10’ 방향설정의 시간_ 오늘 주요 논의 사항 확인, Action item 도출

팀원 이름: ${name}
상황 설명: ${situation}
대화 목적: ${goal}
사전 질문 항목: ${preQuestions}
    `;
    setPrompt(finalPrompt.trim());
  };

  return (
    <div className="container">
      <h1>1on1 시뮬레이션 프롬프트 생성기</h1>

      <div className="form-group">
        <label>팀원 이름</label>
        <input
          type="text"
          placeholder="예: 민수"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>사전 질문 항목</label>
        <textarea
          rows={4}
          placeholder={`예:\n- 이번 1on1에서 이야기하고 싶은 주제는?\n- 최근 가장 어려웠던 일은?\n- 더 도움 받고 싶은 점은?`}
          value={preQuestions}
          onChange={(e) => setPreQuestions(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>상황 설명</label>
        <textarea
          rows={3}
          placeholder="예: 퇴사가 다가와서 마음이 혼란"
          value={situation}
          onChange={(e) => setSituation(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>대화 목적</label>
        <textarea
          rows={3}
          placeholder="예: 동기부여, 정서적 지지"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
      </div>

      <button onClick={handleGenerate}>프롬프트 생성</button>

      {prompt && (
        <div className="output">
          <h2>📋 생성된 프롬프트</h2>
          <pre>{prompt}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
