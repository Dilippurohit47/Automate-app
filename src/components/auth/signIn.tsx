import { Login } from "@/app/actions/authActions/authActions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Separator } from "@/components/ui/separator";
import { redirect } from "next/navigation";
import { FormEvent } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";
interface SignUpProps {
  setChangeDialog: React.Dispatch<React.SetStateAction<string>>;
}
function SignIn({ setChangeDialog }: SignUpProps) {
  const handelSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const result = await Login(formData);
    console.log(result);
    if (result.status == "200") {
      toast.success(result.message);
      redirect("/")
    } else {
      toast.error(result?.message);
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-center font-bold">
          Welcome back to
          <span className="text-purple-500"> FormMix</span>
        </CardTitle>
        <CardDescription className="text-center font-medium">
          And start automating your tasks 🤗.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e)=>handelSubmit(e)}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input name="email" placeholder="email address " type="email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input name="password" placeholder="password " type="password" />
            </div>
          </div>
          <Button className="w-full purple-button mt-3 ">Login</Button>
        </form>
        <div className="text-[0.9rem] my-2  font-normal">
          Don't have an account ?{" "}
          <span
            className="text-blue-400 cursor-pointer hover:underline"
            onClick={() => setChangeDialog("signup")}
          >
            SignUp
          </span>
        </div>
        <Separator orientation="horizontal" className="my-4 bg-gray-400" />
        <Button className="w-full font-semibold  bg-white text-gray-500 border-2 hover:bg-gray-100 shadow-md ">
          {" "}
          <FcGoogle size={30} /> Continue with Google
        </Button>
      </CardContent>
    </Card>
  );
}

export default SignIn;
