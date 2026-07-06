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
      {/* Map out my hobbies or interests so they all appear on the page in a list. */}
    </div>
  );
}
