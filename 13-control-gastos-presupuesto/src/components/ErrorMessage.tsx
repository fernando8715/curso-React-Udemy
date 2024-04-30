import { PropsWithChildren } from "react"


export const ErrorMessage = ({children}: PropsWithChildren ) => {
  return (
    <p className='bg-red-500 text-white text-center text-xl py-2 mt-3 rounded-lg'>{children}</p>
  )
}
