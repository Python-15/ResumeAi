import { Loader2, PlusIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/clerk-react';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import apiServices from '../../../../apiServices/apiServices';

function Addresmue() {
    const [openDialog, setOpenDialog] = useState(false);
    const [userName, setUserName] = useState('');
    const [isCreating, setIsCreating] = useState(false);
    const user = useUser();
    console.log('user', user)
    const email= user.user.primaryEmailAddress.emailAddress;

    useEffect(() => {
        console.log(isCreating, 'dchcdshhdshdhdsh');
    }, [isCreating]);

    const onSave = async () => {
        setIsCreating(true);  // Set loader to active
        const data = {
            data: {
                Name: userName,
                resumeid: uuidv4(),
                userEmail:email
            }
        };
        console.log('Data sent to Strapi:', data);
        
        try {
            const resp = await apiServices.createResume(data);
            console.log(resp);
            if (resp) {
                setIsCreating(false);
                // navigation('/dashboard/resume/'+resp.data.data.documentId+"/edit");
            }
        } catch (error) {
            console.error('Error creating resume:', error);
            setIsCreating(false);
        }
    };

    const handleChange = (e) => {
        setUserName(e.target.value);
        console.log(userName);
    };

    return (
        <>
            <div
                className='p-14 py-24 border 
                items-center flex 
                justify-center bg-secondary
                rounded-lg h-[280px]
                hover:scale-105 transition-all hover:shadow-md
                cursor-pointer border-dashed'
                onClick={() => setOpenDialog(true)}
            >
                <PlusIcon />
            </div>

            <Dialog open={openDialog}>
                <DialogTrigger></DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create Your Resume</DialogTitle>
                        <Input 
                            type='text'
                            placeholder="EX: Aaditya"
                            onChange={handleChange}
                        />
                        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8 md:gap-[21rem]">
                            <Button onClick={() => setOpenDialog(false)} variant="ghost">Cancel</Button>
                            <Button disabled={!userName || isCreating} onClick={onSave}>
                                {isCreating ? <Loader2 className="animate-spin" /> : 'Start'}
                            </Button>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default Addresmue;
