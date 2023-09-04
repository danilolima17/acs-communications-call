import React, { useState } from 'react';
import { useRouter } from 'next/router';

const CallPage = () => {
  const [displayName, setDisplayName] = useState('');
  const [callOption, setCallOption] = useState('startCall');
  const [meetingLink, setMeetingLink] = useState('');

  const router = useRouter();

  const handleStartCall = () => {
    router.push('/HomeScreen');
  };

  const handleJoinMeeting = () => {
  };

  return (
    <div>
      <h1>Inicie ou Participe de uma Reunião</h1>
      
      <div>
        <label>
          Seu Nome:
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
      </div>
      
      <div>
        <label>
          Selecione uma Opção:
        </label>
        <div>
          <label>
            <input
              type="radio"
              value="startCall"
              checked={callOption === 'startCall'}
              onChange={() => setCallOption('startCall')}
            />
            Iniciar uma Chamada
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="joinMeeting"
              checked={callOption === 'joinMeeting'}
              onChange={() => setCallOption('joinMeeting')}
            />
            Participar de uma Reunião de Equipe
          </label>
        </div>
      </div>

      {callOption === 'joinMeeting' && (
        <div>
          <label>
            Entrar em uma reunião do Teams:
            <input
              type="text"
              placeholder="Enter a Teams meeting link"
              value={meetingLink}
              onChange={(e) => setMeetingLink(e.target.value)}
            />
          </label>
        </div>
      )}

      <button onClick={callOption === 'startCall' ? handleStartCall : handleJoinMeeting}>
        {callOption === 'startCall' ? 'Iniciar Chamada' : 'Participar'}
      </button>

    </div>
  );
};

export default CallPage;


