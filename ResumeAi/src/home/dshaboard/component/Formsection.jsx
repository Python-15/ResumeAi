import React ,{useState} from 'react'
import PersonalDetail from './form/PersonalDetails'
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Home, LayoutGrid } from 'lucide-react'
import SummaryDetails from './form/SummaryDetails'

function Formsection() {
    const [activeFormIndex,setActiveFormIndex]=useState(1);
    const [enableNext,setEnableNext]=useState(true);
    const {resumeId}=useParams();
  return (
    <div>
      {/* personal details

      */}  
 
 <div className='flex gap-2'>
            {activeFormIndex>1
            &&<Button size="sm" 
            onClick={()=>setActiveFormIndex(activeFormIndex-1)}> <ArrowLeft/> </Button> }
            <Button 
            disabled={!enableNext}
            className="flex gap-2" size="sm"
            onClick={()=>setActiveFormIndex(activeFormIndex+1)}
            > Next 
            <ArrowRight/> </Button>
          </div>

        {activeFormIndex==1?  
        <PersonalDetail enabledNext={(v)=>setEnableNext(v)} />:
        activeFormIndex==2? <SummaryDetails enabledNext={(v)=>setEnableNext(v)}/>:null }

    </div>
  )
}

export default Formsection