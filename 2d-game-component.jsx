import React, { useState, useEffect } from 'react';

const Game2D = () => {
  const [circles, setCircles] = useState([
    { id: 1, x: 50, y: 50, radius: 20, color: 'red', dx: 3, dy: 2 },
    { id: 2, x: 200, y: 150, radius: 15, color: 'blue', dx: -2, dy: 4 },
  ]);

  useEffect(() => {
    const gameLoop = setInterval(() => {
      setCircles((prevCircles) =>
        prevCircles.map((circle) => {
          let newX = circle.x + circle.dx;
          let newY = circle.y + circle.dy;

          if (newX - circle.radius < 0 || newX + circle.radius > 500) {
            newX = circle.x - circle.dx;
            circle.dx *= -1;
          }
          if (newY - circle.radius < 0 || newY + circle.radius > 500) {
            newY = circle.y - circle.dy;
            circle.dy *= -1;
          }

          return { ...circle, x: newX, y: newY };
        })
      );
    }, 20);

    return () => clearInterval(gameLoop);
  }, []);

  return (
    <div
      style={{
        width: '500px',
        height: '500px',
        border: '1px solid black',
        position: 'relative',
      }}
    >
      {circles.map((circle) => (
        <div
          key={circle.id}
          style={{
            position: 'absolute',
            left: circle.x - circle.radius,
            top: circle.y - circle.radius,
            width: circle.radius * 2,
            height: circle.radius * 2,
            backgroundColor: circle.color,
            borderRadius: '50%',
          }}
        />
      ))}
    </div>
  );
};

export default Game2D;
