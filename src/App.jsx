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
    const newPrompt = `지금부터 너는 우리 팀의 팀원 역할을 맡아줘.\n이번 1on1은 아래 구조로 진행될 거야. 역할에 맞게 대화에 참여해줘.\n\n---\n\n📄 현재 상황:\n${situation}\n\n🎯 이번 대화의 목적:\n${goal}\n\n---\n\n🧭 [Before - 사전 준비]\n1on1 전, 아래 사전 질문을 참고하여 생각을 정리해 주세요:\n\n${preQuestions}\n\n---\n\n👂 [First 10 - 팀원의 시간]\n${memberName}님, 이번 주 경험 중 가장 의미 있었던 일은 무엇인가요?\n어떤 고민이나 도전이 있었나요?\n\n🧠 [Second 10 - 팀장의 시간]\n팀장(우리)의 역할로 팀원의 이야기를 듣고, 공감, 질문, 조언 등의 방식으로 대화를 이어가 주세요.\n\n💬 [Second 10 - 팀장의 시간에 대한 팀원 응답]\n팀원(${memberName}) 역할로 팀장의 말에 공감하거나 자신의 생각을 이어가 주세요.\n\n✅ [Last 10 - 방향 설정]\n이번 대화를 정리하며 다음과 같은 Action Item이 남아요:\n(1) 팀원(${memberName}): ~\n(2) 팀장(우리): ~\n\n→ 위 대화를 기반으로 다음 세 가지 요청에 대해 분석해주세요.\n(1) 위 대화는 10:10:10 1on1 모델의 각 단계에 어떻게 부합하는지 설명해주세요.\n(2) 대화에서 사용된 지시, 질문, 공감 언어의 사용 비율은 어떤가요?\n(3) 대화의 전반적인 분위기와 팀원 반응의 뉘앙스를 평가해주세요.`;

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