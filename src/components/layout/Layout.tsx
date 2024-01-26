import { ReactNode } from "react"
import styles from "./layout.module.css"

interface Props{
    children:ReactNode
}

const Layout = ({children}:Props) => {
  return (
    <div className="h-screen">
      <div className={[styles.img,'h-[300px]'].join(' ')} ></div>
        <div className="absolute top-[25%] left-[20%] bg-gray-800 -translate-x-[15%] w-[80%]">
          {children}
        </div>
    </div>
  )
}

export default Layout