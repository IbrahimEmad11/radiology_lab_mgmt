import Navbar from "@/componenets/Navbar";

const scans = [
  {
    p_name: "Amir",
    age: 14
  },
  {
    p_name: "Mohamed",
    age: 16
  },
]

export default function App() {
  return (
    <div>
      <Navbar />
      {
        scans.map(scan => {
          return (
            <div>
              <h1>{scan.p_name}</h1>
              <p>{scan.age}</p>
            </div>
          )
        })
      }
      <p>this is the home page</p>
    </div>
  )
}