//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  // A variable for name
  const name = 'Winnie Kelley';

  // A variable for age
  const age = 34;

  // A list of hobbies using an array
  const hobbiesArray = [
    'True Crime',
    'Pokemon',
    'Building apps',
    'Puzzles',
    'Family time',
  ];

  return (
    <div>
      {/* add JSX here */}
      {/* A heading about me */}
      <h1>About {name}</h1>

      {/* A short paragraph introducing myself */}
      <p>
        I'm the engineer your company calls at 3 a.m. when it's throwing errors
        and questioning its life choices. I build fullstack apps that turns
        messy ideas into clean, accessible interfaces and APIs, and I obsess
        over the tiny UI details no one notices until they break
      </p>

      {/* Map out my hobbies or interests so they all appear on the page in a list. */}
      <h2>My Hobbies</h2>

      <ul>
        {hobbiesArray.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
