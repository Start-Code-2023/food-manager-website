import next from "next"
import Link from "next/link"

interface Props{
    text: string
    link: string
}

export default function Button({text, link}:Props){
    return <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">  <Link href={link}>{text}</Link> </button>
}