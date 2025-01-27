import ClientButton from "../components/clientButton";
import { Typography } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

export const metadata = {
    title: 'Contact',
    description: 'Send me a message.',
}

export default function Contact() {
  return (
    <div className="grid grid-rows gap-8 justify-items-center mb-12">

    <form
        noValidate
        autoComplete="off"
        className="grid grid-cols-2 gap-8 w-full"
    >
        <div className="flex flex-col gap-6">
        <FormControl fullWidth>
            <OutlinedInput
            className="border border-gray-500"
            placeholder="Fullname"
            />
        </FormControl>
        <FormControl fullWidth>
            <OutlinedInput
            className="border border-gray-500"
            placeholder="Email"
            />
        </FormControl>
        <FormControl fullWidth>
            <OutlinedInput
            className="border border-gray-500"
            placeholder="Subject"
            />
        </FormControl>
        </div>

        <div>
        <FormControl fullWidth>
            <OutlinedInput
            className="border border-gray-500 w-full"
            placeholder="Message"
            multiline
            rows={8}
            />
        </FormControl>
        </div>
    </form>
    
    <ClientButton>
        SEND MESSAGE
    </ClientButton>


    </div>
  );
}