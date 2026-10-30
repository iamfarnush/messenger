"use client";

import { AtSign, KeyRound } from "lucide-react";
import Field from '@/components/ui/field/Field'
import { Button } from "@/components/ui/button/Button";

interface IAuth {
  type?: "Login" | "Register";
}

const Auth = ({ type }: IAuth) => {
  return (
    <div className="flex min-h-screen w-screen">
      <form className="m-auto block w-96 border border-[#363636] p-[1.25rem] rounded-xl">
        <h1 className="text-center mb-7">{type}</h1>

        <Field placeholder='Enter email' type='email' Icon={AtSign} error={{message: 'Не верный email', type: 'min'}}/>
        <Field placeholder='Enter password' type='email' Icon={KeyRound} error={{message: 'Не верный пароль', type: 'min'}}/>

        <div className="text-center mt-7"><Button>{type}</Button></div>
      </form>
    </div>
  );
};

export default Auth;
