import { useState } from 'react';

function App() {
  const [situation, setSituation] = useState('');
  const [goal, setGoal] = useState('');
  const [prompt, setPrompt] = useState('');

  const handleGenerate = () => {
    const result = `
[대화 상황 설명]
${situation}

[대화 목적]
${goal}

[1on1 대화 프롬프트]
상기 상황과 대화 목적을 참고하여, 팀장으로서 1on1 미팅에서 활용할 수 있는 적절한 오프닝 질문, 대화 흐름을 위한 후속 질문, 마무리 질문을 포함한 1on1 대화 프롬프트를 작성해줘. ChatGPT가 팀장을 대신해 실제 대화를 이끌어주는 것처럼 자연스럽고 명확하게 써줘.
    `.trim();

    setPrompt(result);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2>1on1 프롬프트 생성기</h2>

      <div style={{ marginBottom: '1.5rem' }}>
        <label>상황 설명</label><br />
        <textarea
          rows={3}
          style={{ width: '100%' }}
          placeholder="예: 성과평가가 다가와서 마음이 혼란"
          value={situation}
          onChange={(e) => setSituation(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label>대화 목적</label><br />
        <textarea
          rows={3}
          style={{ width: '100%' }}
          placeholder="예: 동기부여, 정서적 지지"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
      </div>

      <button onClick={handleGenerate} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
        프롬프트 생성
      </button>

      {prompt && (
        <div style={{ marginTop: '2rem' }}>
          <h3>📝 생성된 프롬프트</h3>
          <textarea
            rows={10}
            style={{ width: '100%' }}
            value={prompt}
            readOnly
          />
        </div>
      )}
    </div>
  );
}

export default App;
