import Sidebar from "@/componenets/Sidebar";
import SelectSex from "src/componenets/SelectSex";
import DoctorMenu from "src/componenets/DoctorMenu";
import ScanType from "@/componenets/Scantype";

const handleSubmit = (e) => {
    e.preventDefault();
}

export default function Newscan (){
    return (
        <div className="flex">
            <Sidebar />
            <div className="ml-72 mr-8 container mx-auto my-8">
                <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                    <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Subject Data</h1>
                    <form>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="subjectName">Subject name</label>
                                <input required id="subjectName" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Email Address</label>
                                <input id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                            </div>

                            <div>
                                <label htmlFor="Birthday" className="block text-sm text-gray-700 dark:text-gray-300">Birthday</label>
                                <input type="date" placeholder="John Doe" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="address">Address</label>
                                <input id="address" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                            </div>
                            <div>
                                <SelectSex className="text-gray-700 dark:text-gray-200" htmlFor="sex">Sex</SelectSex>
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="phone">Phone</label>
                                <input id="phone" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                            </div>
                        </div>
                    </form>
                    <div className="mt-6 border-t border-gray-300">
                        <h1 className="mt-6 text-xl font-semibold text-gray-700 capitalize dark:text-white">Scan Data</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="Birthday" className="block text-sm text-gray-700 dark:text-gray-300">Date</label>
                                    <input type="date" placeholder="John Doe" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                </div>

                                <div>
                                    <DoctorMenu className="text-gray-700 dark:text-gray-200" htmlFor="doneBy">Done by</DoctorMenu>
                                </div>


                                <div>
                                    <ScanType className="text-gray-700 dark:text-gray-200" htmlFor="scanType">Scan type</ScanType>
                                </div>
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="conclusion">Conclusion</label>
                                    <input id="conclusion" type="textarea" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="image" className=" text-gray-700 dark:text-gray-300">Scan</label>
                                <input type="file" className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300" />
                            </div>
                            <div className="flex justify-end mt-6">
                                <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-900 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    )
}