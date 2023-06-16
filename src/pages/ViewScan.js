import Navbar from "@/componenets/Navbar";
import Example from "./image";

export default function viewScan({date,pat_name, sex, age, doc_name, images, results, type}) {
    const scan_date = {
        date :'16/6/2023' ,
        pat_name : 'Mohamed Mosilhy' ,
        sex : 'Male',
        age : 21,
        doc_name : 'Mohamed Ahmed' ,
        images : null,
        type: 'X-RAY EXAMINATION OF THE CHEST REVEALED' ,
        results : ['Clear both lung fields and costo -diaphragmatic recesses ', 'No radiographic evidence of hilar or mediastinal lymph node enlargement', 'Cardiothoracic ratio is within normal']
    }
    
        return(
        <div>
            <Navbar/>
            <div className="rounded-full border-2 border-slate-300 flex items-center justify-center shadow-md p-5 m-5">
                <h1 className="text-3xl  font-bold text-gray-800 dark:text-white flex items-center justify-center">Scan Page</h1>
                <button className="px-6 py-2 font-medium ml-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    Print
                </button>
            </div>
           
            

            <div className="flex flex-1 space-x-40">

                <div className="shadow-md p-2 h-6/12 w-6/12">
                    <h1 className="underline text-2xl font-bold text-gray-800 dark:text-white flex items-center justify-center mt-5">Info:</h1>
                    <p className="text-2xl font-medium text-gray-800 dark:text-white ml-5 mt-5">Date: {scan_date.date}</p>
                    <p className="text-2xl font-medium text-gray-800 dark:text-white ml-5 mt-5">Patient Name: {scan_date.pat_name}</p>
                    <p className="text-2xl font-medium text-gray-800 dark:text-white ml-5 mt-5">Sex: {scan_date.sex}</p>
                    <p className="text-2xl font-medium text-gray-800 dark:text-white ml-5 mt-5">Age: {scan_date.age}</p>
                    <p className="text-2xl font-medium text-gray-800 dark:text-white ml-5 mt-5">Ref.By: {scan_date.doc_name}</p>
                </div>

                <div className="shadow-md h-6/12 w-6/12 p-3">
                    <div>
                        <h1 className="underline text-2xl font-bold text-gray-800 dark:text-white flex items-center justify-center mt-5">Type:</h1>
                        <p className="text-2xl font-medium text-gray-800 dark:text-white ml-5 mt-5 flex items-center justify-center">{scan_date.type}</p>
                    </div>
                    
                    <div>
                        <h1 className="underline text-2xl font-bold text-gray-800 dark:text-white flex items-center justify-center mt-5">Findings:</h1>
                        <ul className="list-outside list-disc">
                        {scan_date.results.map(res =>      
                            <li className="text-2xl font-medium text-gray-800 dark:text-white ml-5 mt-5 ">{res}</li>
                        )}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center flex-col">
                    <h1 className="underline text-2xl font-bold text-gray-800 dark:text-white m-5">Images:</h1>
                    <div className="h-7/12 w-7/12 m-5">
                        <Example></Example> 
                    </div>
                    
            </div>   
        </div>
    )
}