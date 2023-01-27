import { Button } from '@nextui-org/react';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateContactNav from '../components/createcontact/CreateContactNav';
import StepContact from '../components/createcontact/StepContact';
import StepNumbers from '../components/createcontact/StepNumbers';
import StepPageSetup from '../components/createcontact/StepPageSetup';
import StepSocial from '../components/createcontact/StepSocial';
import { ContactObj } from '../models/models';


type Props = {}
export type StepErrMsg = {
    step: 1 | 2 | 3 | 4 | null;
    msg: string;
}
export type Step = 1 | 2 | 3 | 4;
export type StepProps = {
    contact: ContactObj;
    setContact: React.Dispatch<React.SetStateAction<ContactObj>>;
    errMsg: StepErrMsg | null;
    setErrMsg: React.Dispatch<React.SetStateAction<StepErrMsg | null>>;
    step: Step;
    setStep: React.Dispatch<React.SetStateAction<Step>>;
}


const CreateContact = (props: Props) => {
    const navigate = useNavigate();

    const [step, setStep] = useState<Step>(1);

    const [contact, setContact] = useState<ContactObj>({
        contact: {
            pageName: '',
            firstName: '',
            middleName: '',
            lastName: '',
            jobTitle: '',
            description: '',
            email: '',
        },
        socials: [
            {
                url: '',
                platform: '',
            }
        ],
        contactNumbers: [
            {
                type: '',
                number: '',
            }
        ],
    });

    useEffect(() => console.log(contact), [contact])
    const [errMsg, setErrMsg] = useState<StepErrMsg | null>(null);

    const ref = useRef<HTMLDivElement>(null);

    const [scrollPercentage, setScrollPercentage] = useState<number>(0)
    const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        if (ref && ref.current) {
            let height = ref.current.clientHeight;
            let scrollHeight = ref.current.scrollHeight - height;
            let scrollTop = ref.current.scrollTop;
            let percent = Math.floor(scrollTop / scrollHeight * 100);
            setScrollPercentage(percent)
            // setScrollPercentage(ref.current.scrollTop / ref.current.offsetHeight * 100)
        }
    }
    useEffect(() => console.log(scrollPercentage), [scrollPercentage])

    return (
        <div className='h-screen md:overflow-hidden'>
            <CreateContactNav
                step={step}
                setStep={setStep}
                scrollPercentage={scrollPercentage}
            />
            <div
                ref={ref}
                onScroll={handleScroll}
                className='md:h-[calc(100vh-96px)] overflow-auto relative'
            >
                <div
                    style={{ height: `${scrollPercentage}%` }}
                    className="fixed top-[192px] md:top-[96px] left-0 w-1 bg-black/50 dark:bg-white/50"
                />
                <StepContact
                    contact={contact}
                    setContact={setContact}
                    errMsg={errMsg}
                    setErrMsg={setErrMsg}
                    step={step}
                    setStep={setStep}
                />
                <StepSocial
                    contact={contact}
                    setContact={setContact}
                    errMsg={errMsg}
                    setErrMsg={setErrMsg}
                    step={step}
                    setStep={setStep}
                />
                <StepNumbers
                    contact={contact}
                    setContact={setContact}
                    errMsg={errMsg}
                    setErrMsg={setErrMsg}
                    step={step}
                    setStep={setStep}
                />
                <StepPageSetup
                    contact={contact}
                    setContact={setContact}
                    errMsg={errMsg}
                    setErrMsg={setErrMsg}
                    step={step}
                    setStep={setStep}
                />
            </div>
        </div>
    )
}

export default CreateContact