import React, { useState } from 'react';
import { Button, Typography, Card, CardContent, CardMedia, CircularProgress } from '@mui/material';

import { FaUser } from 'react-icons/fa';

const apiKey = "AIzaSyBj2RHZLddhpoZtxLNnvCwUWeUWDEw-tck";
type Celebrity = {
  name: string;
  iconUrl: string;
  job: string;
  age: number;
  isAlive: boolean; // New property
};
const url = "https://images.dog.ceo/breeds/corgi-cardigan/n02113186_1016.jpg";
const celebrities: Celebrity[] = [
  { name: 'Marie Leclerc', iconUrl: url, job: 'Film Director', age: 40, isAlive: true },
  { name: 'Étienne Dubois', iconUrl: url, job: 'Singer', age: 32, isAlive: true },
  { name: 'Isabelle Martin', iconUrl: url, job: 'Professional Chef', age: 45, isAlive: true },
  { name: 'Alexandre Dupont', iconUrl: url, job: 'Fashion Designer', age: 38, isAlive: true },
  { name: 'Sophie Lambert', iconUrl: url, job: 'Journalist', age: 36, isAlive: true },
  { name: 'Pierre Moreau', iconUrl: url, job: 'Professional Athlete', age: 28, isAlive: true },
  // Add more celebrities as needed
];

const GamePage: React.FC = () => {
  const [currentCelebrity, setCurrentCelebrity] = useState<Celebrity | null>(null);
  const [timer, setTimer] = useState<number | null>(null);

  const getRandomCelebrity = () => {
    const randomIndex = Math.floor(Math.random() * celebrities.length);
    return celebrities[randomIndex];
  };

  const handleShowCelebrity = () => {
    const newCelebrity = getRandomCelebrity();
    setCurrentCelebrity(newCelebrity);
    setTimer(5);

    const countdown = setInterval(() => {
      setTimer((prevTimer) => (prevTimer !== null ? prevTimer - 1 : null));
    }, 1000);

    setTimeout(() => {
      setCurrentCelebrity(null);
      setTimer(null);
      clearInterval(countdown);
    }, 5000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom>
        Celebrity Guessing Game
      </Typography>
      <Button variant="contained" color="primary" onClick={handleShowCelebrity} style={{ marginTop: '20px' }}>
        Show Celebrity
      </Button>
      {currentCelebrity && (
        <Card style={{ marginTop: '20px', width: '200px', position: 'relative', textAlign: 'center' }}>
          <CardMedia
            component="img"
            alt={currentCelebrity.name}
            height="140"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            image={currentCelebrity.iconUrl}
          />
          <CardContent style={{ textAlign: 'center' }}>
            <Typography variant="subtitle1" style={{ marginBottom: '8px', fontWeight: 'bold' }}>
              {currentCelebrity.name}
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="subtitle2">
                {currentCelebrity.job}, Age: {currentCelebrity.age}, 
                {currentCelebrity.isAlive ? ' Alive' : ' Deceased'}
                {timer !== null && ` (${timer}s left)`}
              </Typography>
            </div>
          </CardContent>
        </Card>
      )}
      {timer !== null && (
        <div style={{ marginTop: '20px' }}>
          <CircularProgress value={(timer / 5) * 100} size={40} />
        </div>
      )}
    </div>
  );
};

export default GamePage;
