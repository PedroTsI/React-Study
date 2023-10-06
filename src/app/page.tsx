"use client"

import {CustomButton} from "@/components/CustomButton";

const Page = () => {

  const handleButton1 = () => alert("clicou no 1 botao")
  const handleButton2 = () => alert("clicou no 2 botao")
  const handleButton3 = () => alert("clicou no 3 botao")

  return (
  <div className="w-screen h-screen flex justify-center items-center">
    <CustomButton label="Clique Aqui" onClick={handleButton1}/>
    <CustomButton label="Clique Aqui 2" onClick={handleButton2}/>
    <CustomButton label="Clique Aqui 3" onClick={handleButton3}/>
  </div>
  );
}

export default Page;