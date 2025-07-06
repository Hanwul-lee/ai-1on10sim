import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [questions, setQuestions] = useState('');
  const [situation, setSituation] = useState('');
  const [goal, setGoal] = useState('');
  const [generatedPrompt, setGeneratedPrompt] = useState('');

  const handleGenerate = () => {
    const prompt = `
지금부터 너는 우리 팀의 팀원 역할을 맡아줘.
이번 1on1은 아래 구조로 진행될 거야. 역할에 맞게 대화에 참여해줘.

---

📄 현재 상황:
${situation}

🎯 이번 대화의 목적:
${goal}

---

🧭 [Before - 사전 준비]
1on1 전, 아래 사전 질문을 참고하여 생각을 정리해 주세요:

${questions}

---

👂 [First 10 - 팀원의 시간]
${name}님, 이번 주 경험 중 가장 의미 있었던 일은 무엇인가요?
어떤 고민이나 도전이 있었나요?

🧠 [Second 10 - 팀장의 시간]
그 경험을 통해 내가 느낀 점은…
앞으로 이런 방향으로 도전해보는 건 어떨까요?

✅ [Last 10 - 방향 설정]
오늘 대화를 정리하면 다음과 같은 Action Item이 남아요:
(1) 팀원: ~
(2) 팀장: ~
`;
    setGeneratedPrompt(prompt);
  };

  return (
    <div className="container">
      <h2>1on1 시뮬레이션 프롬프트 생성기</h2>

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
          rows={3}
          placeholder={`예:\n- 이번 1on1에서 이야기하고 싶은 주제는?\n- 최근 가장 어려웠던 일은?\n- 더 도움 받고 싶은 점은?`}
          value={questions}
          onChange={(e) => setQuestions(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>상황 설명</label>
        <textarea
          rows={3}
          placeholder="예: 성과평가가 다가와서 마음이 혼란"
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

      {generatedPrompt && (
        <div className="form-group">
          <label>생성된 프롬프트</label>
          <textarea rows={20} value={generatedPrompt} readOnly />
        </div>
      )}
    </div>
  );
}

export default App;
