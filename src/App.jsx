import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [preQuestions, setPreQuestions] = useState('');
  const [situation, setSituation] = useState('');
  const [goal, setGoal] = useState('');
  const [prompt, setPrompt] = useState('');

  const handleGenerate = () => {
    const newPrompt = `
[1on1 시뮬레이션 프롬프트 생성]

팀원 이름: ${name}
사전 질문 항목:
${preQuestions}

상황 설명: ${situation}
대화 목적: ${goal}

→ 위 내용을 기반으로, 1on1 코칭형 질문 3개를 생성해주세요.
    `;
    setPrompt(newPrompt);
  };

  return (
    <div className="container">
      <h1>1on1 시뮬레이션 프롬프트 생성기</h1>

      <label>팀원 이름</label>
      <input
        type="text"
        placeholder="예: 민수"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>사전 질문 항목</label>
      <textarea
        rows={3}
        placeholder={`예:\n- 이번 1on1에서 이야기하고 싶은 주제는?\n- 최근 가장 어려웠던 일은?\n- 더 도움 받고 싶은 점은?`}
        value={preQuestions}
        onChange={(e) => setPreQuestions(e.target.value)}
      />

      <label>상황 설명</label>
      <textarea
        rows={2}
        placeholder="예: 성과평가가 다가와서 마음이 혼란"
        value={situation}
        onChange={(e) => setSituation(e.target.value)}
      />

      <label>대화 목적</label>
      <textarea
        rows={2}
        placeholder="예: 동기부여, 정서적 지지"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />

      <button onClick={handleGenerate}>프롬프트 생성</button>

      {prompt && (
        <>
          <label>생성된 프롬프트</label>
          <textarea rows={10} readOnly value={prompt} />
        </>
      )}
    </div>
  );
}

export default App;
