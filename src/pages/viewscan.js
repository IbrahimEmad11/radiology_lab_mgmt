import Navbar from "@/componenets/Navbar";

export default function ViewScan({date, patient_name, sex, age, doctor_name, type, imgs_urls, results}){

    const scan_data = {
        date:"17/6/2023",
        patient_name:"Mohamed Mosilhy",
        sex:"Male",
        age:21,
        doctor_name:"Nasser Ahmed",
        type:"X-RAY",
        imgs_urls:["https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg","https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg", "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg", "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"],
        results:"Clear both fields and costo-diaphragmatic",
    }

    return(
        <div>
            <Navbar/>
            <div className="m-10">
                <section className="mt-5 max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                    <h1 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Scan Page</h1>

                    <form>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" >Date</label>
                                <p className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{scan_data.date}</p>
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" >Patient Name</label>
                                <p className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 ">{scan_data.patient_name}</p>
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" >Sex</label>
                                <p className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 ">{scan_data.sex}</p>
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" >Age</label>
                                <p className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 ">{scan_data.age}</p>
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" >Ref.By</label>
                                <p className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 ">{scan_data.doctor_name}</p>
                            </div>

                            <div className="col-start-1 row-end-5 mb-10">
                                <label className="text-gray-700 dark:text-gray-200" >Results</label>
                                <p className="block h-full w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 ">{scan_data.results}</p>
                            </div>
                        </div>
                        <h2 className="mt-5 text-lg font-semibold text-gray-700 capitalize dark:text-white">Images</h2>
                        
                        <div className="grid grid-cols-2 gap-2 m-10">
                            {scan_data.imgs_urls.map((url) => {
                                return(
                                <div>
                                    <img className="h-auto max-w-full rounded-lg" src={url}/>
                                </div>
                                )
                            })}        
                        </div>

                        <div className="flex justify-end mt-6">
                            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-900 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Print</button>
                        </div>
                    </form>
                </section>
            </div>
        </div> 
    )
}

