'use client'
 
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
 
const page = () => {
  const params = useParams()

  useEffect(() => {
    console.log(params.type)
  }, [])
  
  return (
    <div>page</div>
  )
}

export default page