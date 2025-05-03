'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Page = () => {
const router=useRouter();
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Button onClick={()=>{
        router.push('/login')
      }}>Login</Button>
    </div>
  );
};

export default Page;
