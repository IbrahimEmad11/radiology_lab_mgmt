import Sidebar from "@/componenets/Sidebar";

export default function Admins() {
    return(
        <div className="flex">
            <Sidebar currentLinkId={2} />
            <div className="ml-72 mr-8 container mx-auto my-8 grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <button className="block w-full px-4 py-2 mt-2 text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Add User</button>
                </div>
                <div>
                    <button className="block w-full px-4 py-2 mt-2 text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Delete User</button>
                </div>
                <div>
                    <button className="block w-full px-4 py-2 mt-2 text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Import Data</button>
                </div>
                <div>
                    <button className="block w-full px-4 py-2 mt-2 text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Export Data</button>
                </div>
            </div>

        </div>
    )
}