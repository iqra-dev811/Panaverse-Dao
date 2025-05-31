import { FC } from 'react'

 const Button: FC<{text:string}> = ({text}) => {
  return (
    <button className='bg-teal-700 text-white px-6 py-3 rounded-full hover:shadow-lg text-lg font-medium 
    hover:scale-105 duration-300'>{text}</button>
  )
}
export default Button