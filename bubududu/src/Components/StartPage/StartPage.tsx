import React, { useState } from 'react';
import { FaGamepad, FaUser } from 'react-icons/fa';

type StartPageProps = {
  onStartGame: (name1: string, icon1: string, name2: string, icon2: string) => void;
};

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '100px',
};

const headingStyle: React.CSSProperties = {
  fontSize: '36px',
  color: '#4CAF50',
  marginBottom: '20px',
};

const iconStyle: React.CSSProperties = {
  width: '50px', // Adjust the size as needed
  height: '50px', // Adjust the size as needed
  margin: '5px',
  cursor: 'pointer',
};

const inputStyle: React.CSSProperties = {
  fontSize: '18px',
  padding: '12px',
  marginBottom: '10px',
  width: '300px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const buttonStyle: React.CSSProperties = {
  fontSize: '20px',
  padding: '12px 20px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const images = {
  char_01: 'char_01.png',
  char_02: 'char_02.png',
  // Add more images as needed
};

function StartPage({ onStartGame }: StartPageProps) {
  const [player1, setPlayer1] = useState<string>('');
  const [icon1, setIcon1] = useState<string>('char_01.png');
  const [player2, setPlayer2] = useState<string>('');
  const [icon2, setIcon2] = useState<string>('char_02.png');

  const handleIconClick = (icon: string, setIcon: React.Dispatch<React.SetStateAction<string>>) => {
    setIcon(icon);
  };

  const handleStartGameClick = () => {
    onStartGame(player1, icon1, player2, icon2);
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>
        <FaGamepad style={iconStyle} /> Game On!
      </h1>
      <label>
        {icon1 && <img src={process.env.PUBLIC_URL + '/' + icon1} alt="Player 1" style={iconStyle} />}
        Player 1:
        <input
          type="text"
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
          style={inputStyle}
        />
        <div style={{ marginTop: '10px' }}>
          Choose Icon:
          {Object.entries(images).map(([key, value]) => (
            <img
              key={key}
              src={process.env.PUBLIC_URL + '/' + value}
              alt={`Icon ${key}`}
              style={{
                ...iconStyle,
                border: icon1 === value ? '2px solid green' : 'none',
              }}
              onClick={() => handleIconClick(value, setIcon1)}
            />
          ))}
        </div>
      </label>
      <br />
      <label>
        {icon2 && <img src={process.env.PUBLIC_URL + '/' + icon2} alt="Player 2" style={iconStyle} />}
        Player 2:
        <input
          type="text"
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
          style={inputStyle}
        />
        <div style={{ marginTop: '10px' }}>
          Choose Icon:
          {Object.entries(images).map(([key, value]) => (
            <img
              key={key}
              src={process.env.PUBLIC_URL + '/' + value}
              alt={`Icon ${key}`}
              style={{
                ...iconStyle,
                border: icon2 === value ? '2px solid green' : 'none',
              }}
              onClick={() => handleIconClick(value, setIcon2)}
            />
          ))}
        </div>
      </label>
      <br />
      <button onClick={handleStartGameClick} style={buttonStyle}>
        Start Game
      </button>
    </div>
  );
}

export default StartPage;
