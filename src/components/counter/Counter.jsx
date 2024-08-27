import { useEffect, useState } from "react"




export default function Counter(){

const [loadData, setLoadData] = useState([]);

const [currentIndex, setCurrentIndex] = useState(0);

async function GetData(){
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    setLoadData(data);
}


useEffect(() => {
   GetData();
    
}, [])


const handleNextProduct= ()=>{
    setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex+1;


        return nextIndex >= loadData.length ? 0 : nextIndex;
    })
    
}

const currentProduct = loadData.length > 0 && loadData[currentIndex] ? loadData[currentIndex] : null;

    return (


        

        <div className="flex items-center justify-center  m-10 flex-col">
           <div className="flex justify-center items-center flex-col ">
            <p className="flex justify-center bg-red-400 text-xl font-bold items-center m-auto">
                {
                loadData.length > 0 ? loadData[currentIndex].title  : "Loading..."
                
                }                
                </p>
                <div className="m-10 p-9 flex items-center justify-center object-contain w-60 h-60">
                {currentProduct && (
                        <img src={currentProduct.image}  />
                    )}
                </div>
             
           </div>

            <button onClick={handleNextProduct} className=" font-bold m-10 border-black   border-2 rounded-lg p-5 bg-gray-800 text-white">Next Product</button>
        </div>
    )
}