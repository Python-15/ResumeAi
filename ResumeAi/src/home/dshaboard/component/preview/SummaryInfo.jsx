import React from 'react'

function SummaryInfo({resumeInfo}){
    return (
        <div>
           
    <p className='text-xs'>
    <h2
          className="text-center font-bold text-sm mb-2"
          style={{
            color: resumeInfo?.themeColor,
          }}
        >
          Summery
        </h2>
        {resumeInfo?.summery}
    </p>
  
        </div>
    )

}
export default SummaryInfo;