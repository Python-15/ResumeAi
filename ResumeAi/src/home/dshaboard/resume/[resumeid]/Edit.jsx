import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FormSection from '../../component/FormSection';
import PreviewSection from '../../component/PreviewSection';
import { ResumeContext } from '@/context/ResumeInfoContext';
import mockdata from '@/data/dummy';
import apiServices from '../../../../../apiServices/apiServices'
import './style.css'
  function Edit() {
  const params =  useParams();



  const [resumeInfo, setResumeInfo] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
  // Log mockdata

    // Simulate data fetching or use setTimeout to mimic asynchronous behavior
    setTimeout(() => {
      setResumeInfo(mockdata);
      setLoading(false); // Data is loaded
    }, 1000); // Simulate a 1 second delay
  }, [params]);
  
  useEffect(() => {
    
    
  }, []);

  // Show a loading message while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <ResumeContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className=" p-10 h-screen Edit_screen">
        {/* Preview Section on the left, taking up 50% of the width */}
      
          
       
        {/* Form Section on the right, taking up 50% of the width */}
        
          <FormSection />
          <PreviewSection />
        
      </div>
    </ResumeContext.Provider>
  );
}

export default Edit;
