import Link from "next/link"
import Head from "next/head"
import { useState } from "react"
import Sidebar from "@/componenets/Sidebar"
import { supabase } from "@/managers/supabase"
import { useRouter } from "next/router"
import { PieChart, Pie, Legend, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line } from "recharts"

const chartData1 = [
  { name: 'Male', value: 400 },
  { name: 'Female', value: 300 },
];

const chartData2 = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const chartData3 = [
  {
    name: 'Page A',
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    pv: 4300,
    amt: 2100,
  },
];

const COLORS = ['#0088FE', '#FF8042']

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const getServerSideProps = async ({ query }) => {

  let scansData;
  let statusIndex = 0
  const requiredScanStatus = query.completed


  if (requiredScanStatus && (requiredScanStatus === "true" || requiredScanStatus === "false")) {
    const isCompleted =  requiredScanStatus === "true"

    statusIndex = isCompleted ? 1 : 2

    const { data, error } = await supabase
      .from("scans")
      .select()
      .eq("scan_completed", isCompleted)
    scansData = data
  } else {
    const { data, error } = await supabase
      .from("scans")
      .select()
    scansData = data
  }

  return {
    props: {
      scansData: scansData ?? [],
      statusIndex,
    }
  }
}

const numScansPerPage = 5

export default function Scanlist({ scansData, statusIndex }) {

  const router = useRouter()


  return (
    <>
      <Head>
        <title>ResonanceM | Scans List</title>
      </Head>
      <div className="flex">
        <Sidebar currentLinkId={0} />
        <section className="ml-72 mr-8 container mx-auto my-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-x-3">
                <h2 className="text-lg font-medium text-gray-800 dark:text-white">Dashboard</h2>

                  {/*<span*/}
                  {/*  className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">{`${scansData.length} Scans`}</span>*/}
                </div>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">Get an overview of everything happening in your lab.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 py-8">
              <div className="col-span-2 px-8 pt-8 pb-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <h3 className="font-medium leading-6 text-gray-800 dark:text-white" id="modal-title">
                  Male vs Female Subjects
                </h3>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  See and compare how many male and female subjects have been scanned by your lab
                </p>
                <div className="mx-auto w-full h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={800} height={800}>
                      <Pie
                        data={chartData1}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {chartData1.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend verticalAlign="bottom" wrapperStyle={{ lineHeight: '10px' }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="col-span-4 px-8 pt-8 pb-2 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <h3 className="font-medium leading-6 text-gray-800 dark:text-white" id="modal-title">
                  Scan Types Distribution
                </h3>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Figure out how many scans were made for each scan type.
                </p>
                <div className="mx-auto w-full h-80 p-2 pt-8">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      width={300}
                      height={300}
                      data={chartData2}
                      margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 5,
                      }}
                      barSize={40}
                    >
                      <XAxis dataKey="name" scale="point" padding={{ left: 30, right: 10 }} />
                      <YAxis />
                      <Tooltip />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Bar dataKey="pv" fill="#0088FE" background={{ fill: '#eee' }} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="col-span-3 px-8 pt-8 pb-2 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <h3 className="font-medium leading-6 text-gray-800 dark:text-white" id="modal-title">
                  Scan Types Distribution
                </h3>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Figure out how many scans were made for each scan type.
                </p>
                <div className="mx-auto w-full h-80 p-2 pt-8">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      width={300}
                      height={300}
                      data={chartData2}
                      margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 5,
                      }}
                      barSize={40}
                    >
                      <XAxis dataKey="name" scale="point" padding={{ left: 30, right: 10 }} />
                      <YAxis />
                      <Tooltip />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Bar dataKey="pv" fill="#FF8042" background={{ fill: '#eee' }} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="col-span-3 px-8 pt-8 pb-2 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <h3 className="font-medium leading-6 text-gray-800 dark:text-white" id="modal-title">
                  Male vs Female Subjects
                </h3>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  See and compare how many male and female subjects have been scanned by your lab
                </p>
                <div className="mx-auto w-full h-80 pt-8">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      width={500}
                      height={300}
                      data={chartData3}
                      margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="pv" stroke="#0088FE" strokeWidth={2} activeDot={{ r: 7 }} />
                      {/*<Line type="monotone" dataKey="uv" stroke="#82ca9d" />*/}
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>


              {/*after charts*/}
            </div>
        </section>
      </div>
    </>
  );
}


