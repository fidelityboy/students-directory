import React, { useState } from 'react';

// Header component
function Header() {
  return (
    <header style={{ backgroundColor: '#282c34', padding: '20px', color: 'white', textAlign: 'center' }}>
      <h1>Student Profile Directory</h1>
    </header>
  );
}

// ProfileCard component
function ProfileCard({ student, toggleStatus }) {
  const { id, name, track, bio, skillLevel, isActive } = student;

  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '15px',
        margin: '10px',
        width: '250px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
      }}
    >
      <h2 style={{ color: '#333' }}>{name}</h2>
      <p><strong>Track:</strong> {track}</p>
      <p><strong>Bio:</strong> {bio}</p>
      <p><strong>Skill Level:</strong> {skillLevel}</p>
      {/* Conditional rendering for status */}
      {isActive ? (
        <p style={{ color: 'green' }}>Active</p>
      ) : (
        <p style={{ color: 'red' }}>Inactive</p>
      )}
      {/* Button to toggle status */}
      <button
        onClick={() => toggleStatus(id)}
        style={{
          padding: '8px 12px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        {isActive ? 'Deactivate' : 'Activate'}
      </button>
    </div>
  );
}

// ProfileList component
function ProfileList({ students, toggleStatus }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {students.map((student) => (
        <ProfileCard key={student.id} student={student} toggleStatus={toggleStatus} />
      ))}
    </div>
  );
}

// Footer component
function Footer({ total }) {
  return (
    <footer style={{ textAlign: 'center', padding: '15px', backgroundColor: '#f8f9fa', marginTop: '20px' }}>
      <p>Total Students: {total}</p>
    </footer>
  );
}

// Main App component
function App() {
  // State: array of students
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Amina',
      track: 'Frontend Development',
      bio: 'Learning React and building interfaces',
      skillLevel: 'Beginner',
      isActive: true,
    },
    {
      id: 2,
      name: 'Kofi',
      track: 'Backend Development',
      bio: 'Working with APIs and databases',
      skillLevel: 'Intermediate',
      isActive: false,
    },
    {
      id: 3,
      name: 'Ama',
      track: 'Design',
      bio: 'Creative designer',
      skillLevel: 'Advanced',
      isActive: true,
    },
    {
      id: 4,
      name: 'Kojo',
      track: 'DevOps',
      bio: 'Server management',
      skillLevel: 'Intermediate',
      isActive: false,
    },
    {
      id: 5,
      name: 'Esi',
      track: 'Data Science',
      bio: 'Loves data analysis',
      skillLevel: 'Beginner',
      isActive: true,
    },
    {
      id: 6,
      name: 'Kwame',
      track: 'Mobile',
      bio: 'React Native enthusiast',
      skillLevel: 'Advanced',
      isActive: false,
    },
  ]);

  // Function to toggle the active status of a student
  const toggleStatus = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, isActive: !student.isActive } : student
      )
    );
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#e9ecef', minHeight: '100vh' }}>
      <Header />
      <ProfileList students={students} toggleStatus={toggleStatus} />
      <Footer total={students.length} />
    </div>
  );
}

export default App;