import React, { useState } from 'react';
import StudentContext from './StudentContext';

function StudentProvider({children}) {
  const [studentList, setStudentList] = useState([]);
  const contextValue = {studentList, setStudentList};
  return (
    <StudentContext.Provider value={contextValue}>
      {children}
    </StudentContext.Provider>
  );
}

export default StudentProvider;