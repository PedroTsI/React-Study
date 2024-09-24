"use client"

import { FormEvent } from "react";

const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  alert("Oi Catrina");
}

const Page = () => {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
         
        </div>
    );
}

export default Page;