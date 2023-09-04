import React from 'react';
import { Container, ContainerBox } from "./style"

import { useRouter } from 'next/router';

const HomeScreen = () => {
  const router = useRouter();
  
  const handleStartCall = () => {
  router.push('/call');
};

  return (
    <Container>
      <h2>Bem-vindo à tela inicial</h2>
      <h5>Start a call</h5>

      <ContainerBox>
        <label>Camera
          <select>
            <option value="Web Camera">Web Camera</option>
            <option value="Outra Camera">Outra Camera</option>
          </select>
        </label>
        <br></br>
        <label>Sound
          <select>
            <option value="Microfone">Microfone</option>
            <option value="Auscutadores">Auscutadores</option>
          </select>
        </label>
      </ContainerBox>

      <button onClick={handleStartCall}>Start Call</button>
    </Container>
  );
};

export default HomeScreen;
