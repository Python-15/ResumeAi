import { PlusIcon } from 'lucide-react'
import {  useState } from 'react' 
import {
    Dialog,
    DialogContent,

    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import {Input} from '@/components/ui/input'
function Addresmue() {

const [openDialog,setOpenDialog]=useState(false);
const [userName, setUserName] = useState('');
// useEffect(() => {
//    console.log('jdjdjdj',openDialog)
//   },[openDialog]);

const handelChnage=(e)=>{
   setUserName(e.target.value)
   console.log(userName);
}
  return (
  <>
  
        <div className='p-14 py-24 border 
        items-center flex 
        justify-center bg-secondary
        rounded-lg h-[280px]
        hover:scale-105 transition-all hover:shadow-md
        cursor-pointer border-dashed'
        onClick={()=>setOpenDialog(true)}
        >
        <PlusIcon/>
        </div>
          

  <Dialog open={openDialog}>
  <DialogTrigger></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create Your Resume</DialogTitle>
      <Input 
            type ='text'
            placeholder="EX: Aaditya"
            onChange={handelChnage}
            />
        <div  className="
          flex flex-col gap-4
          sm:flex-row sm:gap-8 
          md:gap-[21rem]
        " style={{ gap: '21rem' }}>
          
        <Button onClick={()=>setOpenDialog(false)} variant="ghost">Cancel</Button>
        <Button>Start</Button>
        </div>
       
      
    </DialogHeader>
  </DialogContent>
  
</Dialog>
  </>
   


        
 
  )
}

export default Addresmue