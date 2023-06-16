import Navbar from "@/componenets/Navbar";
import Link from "next/link"

const scans = [
  {
    patient_name: "Amir",
    age: 14,
    type: "resonance",
    scan_id: 1,
  },
  {
    patient_name: "mona",
    age: 19,
    type: "x-ray",
    scan_id: 2,
  },
  {
    patient_name: "omar",
    age: 21,
    type: "ct",
    scan_id: 3,
  },
  {
    patient_name: "mahmoud",
    age: 21,
    type: "mri",
    scan_id: 4,
  },
  // {
  //   patient_name: "mazen",
  //   age: 29,
  //   type: 'M',
  //   scan_id: 5
  // },
];

export default function Scanlist() {
  return (
    <div>
      <Navbar />
      {/* adding search bar */}
      <div className="p-10">
        <label
          for="username"
          className="block text-lg text-gray-900 dark:text-gray-300"
        >
          patient name
        </label>
        <div className="flex ">
          <input
            type="text"
            placeholder="Enter Patient Name"
            className="block  mt-2 mr-5 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300 h-12"
          />
          <button class="px-6 py-2 mt-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 h-12">
            search
          </button>
        </div>
      </div>
      {/* end of search bar */}

      {/* start of scan table */}
      <div className="block mt-2 mr-5 w-full pl-10 pr-10">
        <div className="sm:flex sm:items-center sm:justify-between">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white">
            Recent Scans
          </h2>
          <div className="flex items-center mt-4 gap-x-3">
            <Link href="/NewScan" className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3098_154395)">
                  <path
                    d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832"
                    stroke="currentColor"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
              <span>New Scan</span>
            </Link>
          </div>
        </div>
        <table className="mt-6 bg-white dark:bg-gray-800 min-w-full border divide-y dark:border-gray-700">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Patient Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Age
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Scan
              </th>
            </tr>
          </thead>
          <tbody>
            {scans.map((scan) => (
              <tr key={scan.scan_id}>
                <td className="px-4 py-3 text-sm font-normal text-gray-900 whitespace-nowrap">
                  {scan.patient_name}
                </td>
                <td className="px-4 py-3 text-sm font-normal text-gray-900 whitespace-nowrap">
                  {scan.age}
                </td>
                <td className="px-4 py-3 text-sm font-normal text-gray-900 whitespace-nowrap">
                  {scan.type}
                </td>
                <td className="px-4 py-3 text-sm font-normal text-gray-900 whitespace-nowrap">
                  {/* Add actions for each row */}
                  <Link
                    href={`/ViewScan`}
                    className="text-blue-500 hover:text-blue-600"
                  >
                    View Scan
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* end of scan table */}
    </div>
  );
}
