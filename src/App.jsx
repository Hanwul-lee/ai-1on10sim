import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [memberName, setMemberName] = useState('');
  const [preQuestions, setPreQuestions] = useState(`- 이번 1on1에서 이야기하고 싶은 주제는?
- 최근 가장 어려웠던 일은?
- 더 도움 받고 싶은 점은?`);
  const [situation, setSituation] = useState('');
  const [goal, setGoal] = useState('');
  const [prompt, setPrompt] = useState('');
  const promptRef = useRef(null);

  const handleGenerate = () => {
    const newPrompt = `지금부터 너는 우리 팀의 팀원 역할을 맡아줘.
이번 1on1은 아래 구조로 진행될 거야. 역할에 맞게 대화에 참여해줘.

---

📄 현재 상황:
${situation}

🎯 이번 대화의 목적:
${goal}

---

🧭 [Before - 사전 준비]
1on1 전, 아래 사전 질문을 참고하여 생각을 정리해 주세요:

${preQuestions}

---

👂 [First 10 - 팀원의 시간]
${memberName}님, 이번 주 경험 중 가장 의미 있었던 일은 무엇인가요?
어떤 고민이나 도전이 있었나요?

🧠 [Second 10 - 팀장의 시간]
그 경험을 통해 내가 느낀 점은…
앞으로 이런 방향으로 도전해보는 건 어떨까요?

✅ [Last 10 - 방향 설정]
오늘 대화를 정리하면 다음과 같은 Action Item이 남아요:
(1) 팀원: ~
(2) 팀장: ~

이제부터 팀장으로서 위 프롬프트 내용을 기반으로 팀원 역할의 GPT와 대화를 시작하세요.
대화 종료 후, GPT에게 다음 내용을 요청하세요:
- 이번 대화에서 사용된 1on1 대화 모델의 적합성 분석 (예: CCC, AIM, 10:10:10)
- 팀장의 언어 유형 분석 (지시, 질문, 공감 언어 비율)
- 리더십적 관점에서 피드백 요약`;

    setPrompt(newPrompt);
  };

  useEffect(() => {
    if (prompt && promptRef.current) {
      promptRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [prompt]);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt).then(() => {
      alert('프롬프트가 복사되었습니다.');
    });
  };

  return (
    <div className="container">
      <h1>1on1 시뮬레이션 프롬프트 생성기</h1>

      <label>팀원 이름</label>
      <input type="text" value={memberName} onChange={(e) => setMemberName(e.target.value)} placeholder="예: 민수" />

      <label>사전 질문 항목</label>
      <textarea value={preQuestions} onChange={(e) => setPreQuestions(e.target.value)} />

      <label>상황 설명</label>
      <textarea value={situation} onChange={(e) => setSituation(e.target.value)} placeholder="예: 성과평가가 다가와서 마음이 혼란" />

      <label>대화 목적</label>
      <textarea value={goal} onChange={(e) => setGoal(e.target.value)} placeholder="예: 동기부여, 정서적 지지" />

      <button onClick={handleGenerate}>프롬프트 생성</button>

      {prompt && (
        <div className="output" ref={promptRef}>
          <h2>생성된 프롬프트</h2>
          <textarea value={prompt} readOnly rows={20} />
          <button onClick={handleCopy}>복사하기</button>
        </div>
      )}
    </div>
  );
}

export default App;