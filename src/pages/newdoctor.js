import SelectSex from "@/componenets/Selectsex";
import Sidebar from "@/componenets/Sidebar";
import Head from "next/head";
import { useForm } from "react-hook-form"
import { supabase } from "@/managers/supabase"
import {useState} from "react"
import { useRef } from "react"
import { uuid } from 'uuidv4'
import { doctorsList, genders, scanTypes } from "@/utils/dummyData";



export default function Newdoctor() {

    const { register, handleSubmit, formState: { errors }, reset,watch } = useForm()
    const [successAlertIsVisible, setSuccessAlertIsVisible] = useState(false)
    const imageInputRef = useRef();
    const [gender, setGender] = useState(genders[0])
    

    const onSubmit = async (data) => {
        data["sex"] = gender.name

       
        const { error } = await supabase
          .from("doctors")
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
    const password = useRef({});
    password.current = watch("password", "");

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

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" for="name">Name</label>
                                        <input name="name" {...register("name", { required: true })} required id="name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                    </div>

                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" for="specialization">Specialization</label>
                                        <input name="specialization" {...register("specialization", { required: true })} required id="specialization" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                    </div>

                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" for="phone">Phone</label>
                                        <input name="phone" {...register("phone", { required: true })} required id="phone" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                    </div>
                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" for="birthdate">Birthday</label>
                                        <input name="birth_date" {...register("birth_date", { required: true })} required id="birthdate" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                    </div>
                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" for="email">Email</label>
                                        <input name="email" {...register("email", { required: true })} required id="email" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                    </div>
                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" for="address">Address</label>
                                        <input name="address" {...register("address", { required: true })} required id="address" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                    </div>
                                    <div>
                                    <SelectSex currentValue={gender} handleGenderSelection={handleGenderSelection} className="text-gray-700 dark:text-gray-200" htmlFor="sex">Sex</SelectSex>
                                    </div>
                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" for="password">Password</label>
                                        <input name="password" {...register("password", { required: true })} required id="password" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                    </div>

                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Password Confirmation</label>
                                        <input name="password_confirmation" required id="passwordConfirmation" type="password" className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border ${ errors.password_confirmation ? "border-red-500" : "border-gray-200"   } rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring`}
                                            {...register("password_confirmation", {validate: (value) => value === password.current || "Passwords do not match", })} />
                                            {errors.password_confirmation && ( <p className="text-red-500">{errors.password_confirmation.message}</p> )}
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