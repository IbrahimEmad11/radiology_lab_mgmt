import { useForm } from "react-hook-form"
import Head from "next/head"
import Sidebar from "@/componenets/Sidebar"
import SelectSex from "src/componenets/SelectSex"
import DoctorMenu from "src/componenets/DoctorMenu"
import ScanType from "@/componenets/Scantype"
import { supabase } from "@/managers/supabase"
import {useState} from "react"
import { useRef } from "react"
import { uuid } from 'uuidv4'
import { genders, scanTypes } from "@/utils/dummyData";

const handleSubmit = (e) => {
    e.preventDefault();
}

export const getServerSideProps = async ({ query }) => {
    const {data, error} = await supabase
      .from("doctors")
      .select()

    return {
        props: {
            doctorsList: data ?? []
        }
    }
}

export default function Newscan ({ doctorsList }){

    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const [successAlertIsVisible, setSuccessAlertIsVisible] = useState(false)
    const imageInputRef = useRef();
    const [gender, setGender] = useState(genders[0])
    const [doctor, setDoctor] = useState(doctorsList[0])
    const [scanType, setScanType] = useState(scanTypes[0])

    const onSubmit = async (data) => {
        data["subject_sex"] = gender.name
        data["scan_type"] = scanType.name
        data["scan_doctor"] = doctor.id

        const files = Array.from(imageInputRef.current?.files);

        if (files.length === 0) {
            alert("Please select at least one scan image.");
            return;
        }

        const fileTypes = ["image/jpeg", "image/png", "image/jpg"];
        for (const file of files) {
            if (!fileTypes.includes(file.type)) {
            alert("Please select an image file of the following types [jpg,jpeg,png].");
            return;
            }
        }
      
        const maxSize = 5 * 1024 * 1024; // 5 MB
        for (const file of files) {
            if (file.size > maxSize) {
              alert("Please select an image that is less than 5 MB.");
              return;
            }
          }

        const filesUrls = []
        for (const file of files) {
            const url = `public/${uuid()}/${file.name}`
            filesUrls.push(url)
            const { data, error } = await supabase
              .storage
              .from('images')
              .upload(url, file, {
                  cacheControl: '3600',
                  upsert: false
              })
            console.log(error)
        }

        data["images"] = filesUrls
      
        const { error } = await supabase
          .from("scans")
          .insert(data);
        
        setSuccessAlertIsVisible(true);
        reset();
        setTimeout(() => {
          setSuccessAlertIsVisible(false);
        }, 3000);
      };


    const handleGenderSelection = (givenGender) => {
        setGender(givenGender)
        console.log(givenGender)
    }
    const handleDoctorSelection = (givenDoctor) => {
        setDoctor(givenDoctor)
        console.log(givenDoctor)
    }
    const handleScanTypeSelection = (givenScanType) => {
        setScanType(givenScanType)
        console.log(givenScanType)
    }


    return (
        <>
            <Head>
                <title>ResonanceM | Add new scan</title>
            </Head>
            <div className="flex">
                <Sidebar />
                <div className="ml-72 mr-8 container mx-auto my-8">
                    <section className="max-w-4xl px-6 mx-auto bg-white rounded-md dark:bg-gray-800">
                        <h2 className="mb-5 text-2xl font-semibold text-gray-800 dark:text-white">Add new scan</h2>
                        <h3 className="text-lg font-medium text-gray-700 capitalize dark:text-white">Subject Data</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="subjectName">Subject name</label>
                                    <input name="subject_name" {...register("subject_name", { required: true })} required id="subjectName" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                </div>

                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Email Address</label>
                                    <input name="subject_email" {...register("subject_email", { required: true })} id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                </div>

                                <div>
                                    <label htmlFor="Birthday" className="block text-sm text-gray-700 dark:text-gray-300">Birthday</label>
                                    <input name="subject_birth_date" {...register("subject_birth_date", { required: true })} type="date" placeholder="John Doe" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="address">Address</label>
                                    <input name="subject_address" {...register("subject_address", { required: true })} id="address" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                </div>
                                <div>
                                    <SelectSex currentValue={gender} handleGenderSelection={handleGenderSelection} className="text-gray-700 dark:text-gray-200" htmlFor="sex">Sex</SelectSex>
                                </div>
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="phone">Phone</label>
                                    <input name="subject_phone" {...register("subject_phone", { required: true })} id="phone" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                </div>
                            </div>
                            <hr className="my-6 border-gray-200 dark:border-gray-600"/>
                            <div className="mt-6 border-gray-300">
                                <h3 className="text-lg font-medium text-gray-700 capitalize dark:text-white">Scan Data</h3>
                                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="scan_date" className="block text-sm text-gray-700 dark:text-gray-300">Date</label>
                                        <input name="scan_date" {...register("scan_date", { required: true })} type="date" placeholder="John Doe" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>

                                    <div>
                                        <DoctorMenu doctorsList={doctorsList} currentValue={doctor} handleDoctorSelection={handleDoctorSelection} className="text-gray-700 dark:text-gray-200" htmlFor="scan_doctor">Doctor</DoctorMenu>
                                    </div>

                                    <div>
                                        <ScanType currentValue={scanType} handleScanTypeSelection={handleScanTypeSelection} className="text-gray-700 dark:text-gray-200" htmlFor="scan_type">Scan Type</ScanType>
                                    </div>

                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" htmlFor="scan_part">Scan Part</label>
                                        <input name="scan_part" {...register("scan_part", { required: true })} id="scan_part" type="textarea" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                    </div>

                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" htmlFor="conclusion">Conclusion</label>
                                        <input name="conclusion" {...register("conclusion", { required: true })} id="conclusion" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <label htmlFor="image"  className="mt-6 text-gray-700 dark:text-gray-300">Scan Images</label>
                                    <input type="file" ref={imageInputRef} multiple className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300"  />
                                </div>
                                { successAlertIsVisible ? <div className="w-full my-6 text-white bg-emerald-500">
                                    <div className="container flex items-center justify-between px-6 py-4 mx-auto">
                                        <div className="flex">
                                            <svg viewBox="0 0 40 40" className="w-6 h-6 fill-current">
                                                <path
                                                  d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z">
                                                </path>
                                            </svg>

                                            <p className="mx-3">The new scan was added.</p>
                                        </div>

                                        <button
                                          className="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none"
                                          onClick={() => setSuccessAlertIsVisible(false)}
                                        >
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2"
                                                      strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div> : null }
                                <div className="flex justify-end mt-6">
                                    <input type="submit" value="Confirm" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-900 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" />
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </>
    )
}