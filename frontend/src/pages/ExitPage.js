import React from 'react';
import { useNavigate } from 'react-router-dom';

function ExitPage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Thank You!</h2>
      <p>You have successfully logged out.</p>
      <button onClick={() => navigate('/')}>Go to Home Page</button>
    </div>
  );
}

export default ExitPage;
