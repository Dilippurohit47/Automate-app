import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";
import { signUp } from "@/app/actions/authActions/authActions";
import { toast } from "sonner";
import { redirect } from "next/navigation";

interface SignUpProps {
  setChangeDialog: React.Dispatch<React.SetStateAction<string>>;
}

function SignUp({ setChangeDialog }: SignUpProps) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const result = await signUp(formData);
    if (result && result.status == "200") {
      toast.success(result.message, {
        richColors: true,
        duration: 3000,
      });
      redirect("/")
    } else {
      toast.error(result?.message, {
        richColors: true,
        duration: 1000,
      });
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-center font-bold">
          SignUp to
          <span className="text-purple-500"> FormMix </span>
        </CardTitle>
        <CardDescription className="text-center font-medium">
          And start automating your tasks 🤗.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input name="name" id="name" placeholder="name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                id="email"
                placeholder="email address"
                type="email"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                name="password"
                id="password"
                placeholder="password"
                type="password"
              />
            </div>
          </div>
          <Button type="submit" className="w-full purple-button mt-3 ">
            SignUp
          </Button>
        </form>
        <div className="text-[0.9rem] my-2  font-normal">
          Already have an account ?{" "}
          <span
            className="text-blue-400 cursor-pointer hover:underline"
            onClick={() => setChangeDialog("login")}
          >
            Login
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

export default SignUp;
