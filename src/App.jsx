import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [memberName, setMemberName] = useState('');
  const [memberTrait, setMemberTrait] = useState('');
  const [preQuestions, setPreQuestions] = useState(`- 이번 1on1에서 이야기하고 싶은 주제는?
- 최근 가장 어려웠던 일은?
- 더 도움 받고 싶은 점은?`);
  const [situation, setSituation] = useState('');
  const [goal, setGoal] = useState('');
  const [prompt, setPrompt] = useState('');
  const promptRef = useRef(null);

  const handleGenerate = () => {
    const newPrompt = `지금부터 너는 우리 팀의 **팀원 역할(${memberName})**을 맡아줘.  
나는 팀장(우리) 역할로 대화를 이끌 거야.  
이번 1on1은 아래 구조로 진행될 거야. 너는 팀원 입장에서 진솔하게 응답해줘.  
마지막에는 아래 분석 요청에 따라 결과를 정리해줘.

---

📄 현재 상황:  
${situation}

🎯 이번 대화의 목적:  
${goal}

---

🧭 [Before - 사전 준비]  
팀원(${memberName})은 아래와 같은 특징을 가지고 있어요:  
${memberTrait}  

1on1 전, 아래 사전 질문을 참고하여 생각을 정리해 주세요:  
${preQuestions}

→ 우선, 위 질문에 대해 팀원(${memberName})의 입장에서 먼저 답변해주세요.

---

👂 [First 10 - 팀원의 시간]  
내가 아래 질문을 할 테니, 팀원(${memberName})으로서 진솔하게 답해주세요.  
> ${memberName}님, 이번 주 경험 중 가장 의미 있었던 일은 무엇인가요?  
> 어떤 고민이나 도전이 있었나요?

🧠 [Second 10 - 팀장의 시간]  
내가 팀장(우리)으로서 너의 이야기에 공감하거나 조언을 해줄 거야.  
너는 팀원(${memberName})의 입장에서 응답해줘.

🗨️ [Second 10 - 팀장의 말에 대한 팀원 응답]  
내가 이야기한 내용을 듣고 너는 팀원으로서 감정/생각/의견을 말해줘.

✅ [Last 10 - 방향 설정]  
내가 대화를 정리하고 대화를 이어갈 수 있도록 마무리 멘트를 할 테니, 그에 맞게 응답해줘.
(1) 팀원(${memberName}): ~  
(2) 팀장(우리): ~

---

🧾 대화 종료 후 아래 분석을 너가 직접 작성해줘:  
(1) 이번 대화는 10:10:10 1on1 모델의 각 단계에 어떻게 부합하는지 설명해주세요.  
(2) 대화에서 사용된 지시, 질문, 공감 언어의 사용 비율은 어떤가요?  
(3) 대화의 전반적인 분위기와 팀원 반응의 뉘앙스를 평가해주세요.`;

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

      <label>팀원의 특징</label>
      <textarea value={memberTrait} onChange={(e) => setMemberTrait(e.target.value)} placeholder="예: 입사 10년차 책임, 요즘 커리어에 대한 고민이 많음, 책임감이 강하고 꼼꼼함" />

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
