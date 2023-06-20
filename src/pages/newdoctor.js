import SelectSex from "@/componenets/Selectsex";
import Sidebar from "@/componenets/Sidebar";
import Head from "next/head";



export default function Newdoctor() {
    return(
        <>
            <Head>
                <title>ResonanceM | Add new doctor</title>
            </Head>
            <div className="flex">
                <Sidebar/>
                <div className="ml-72 mr-8 container mx-auto my-8">
                    <section className="ml-72 mr-8 max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Add new doctor</h2>

                            <form>
                                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" for="name">Name</label>
                                        <input id="Name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                    </div>

                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" for="specialization">Specialization</label>
                                        <input id="specialization" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                    </div>

                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" for="phone">Phone</label>
                                        <input id="phone" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                    </div>
                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" for="birthdate">Birthday</label>
                                        <input id="birthdate" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                    </div>
                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" for="email">Email</label>
                                        <input id="email" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                    </div>
                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" for="address">Address</label>
                                        <input id="address" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                    </div>
                                    {/* <div>
                                        <SelectSex className="text-gray-700 dark:text-gray-200" htmlFor="sex">Sex</SelectSex>
                                    </div> */}
                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" for="password">Password</label>
                                        <input id="password" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                    </div>

                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Password Confirmation</label>
                                        <input id="passwordConfirmation" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                    </div>
                                </div>

                                <div className="flex justify-end mt-6">
                                    <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                                </div>
                            </form>
                    </section>
                </div>
            </div>
        </> 
    )
}