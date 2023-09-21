import { GeoForm } from "@/components/GeoForm";
import { Person } from "@/components/Person";
import { Card } from "@/components/Card";
import { Square } from "@/components/Square";

const Page = () => {
  return (
  <div>
    <h1 className="font-bold text-2xl">Olá Mundo</h1>
    <h3>Algum outro texto</h3>
    
    <Card phrase="Alguma frase TOP" author="Coach de milhões"/>
  </div>
  );
}

export default Page;