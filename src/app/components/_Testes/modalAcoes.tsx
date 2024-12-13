import { useState } from "react";
import { MdEdit, MdOutlineDelete } from "react-icons/md";
export function AcoesHamburguer({ idItem }: { idItem: number }) {
  

  const handleDelete = () => {
    console.log("Deletar item", idItem);
    // Fecha o menu após a ação
  };

  const handleEdit = () => {
    console.log("Editar item", idItem);
    // Fecha o menu após a ação
  };

  return (
    <div className="flex space-x-2">  
      
              <MdEdit  size={20}  onClick={handleEdit}/>
              
              <MdOutlineDelete size={20}  onClick={handleDelete}/>
          
          </div>
       
      
   
  );
}
