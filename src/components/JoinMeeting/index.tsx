import React, { useState } from 'react';

type JoinMeetingHandler = (meetingLink: string) => void;

interface JoinMeetingProps {
  onJoinMeeting: JoinMeetingHandler;
}

const JoinMeeting: React.FC<JoinMeetingProps> = ({ onJoinMeeting }) => {
  const [meetingLink, setMeetingLink] = useState('');

  const handleJoinMeeting = () => {
    onJoinMeeting(meetingLink);
  };

  return (
    <div>
      <h2>Participar de uma Reunião de Equipe</h2>
      
      <div>
        <label>
          Link da Reunião:
          <input
            type="text"
            value={meetingLink}
            onChange={(e) => setMeetingLink(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Entrar em uma reunião do Teams:
          <input
            type="text"
            placeholder="Enter a Teams meeting link"
            onChange={(e) => setMeetingLink(e.target.value)}
          />
        </label>
      </div>

      <button onClick={handleJoinMeeting}>Participar</button>
    </div>
  );
};

export default JoinMeeting;
