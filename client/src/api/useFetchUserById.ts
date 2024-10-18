import axios from 'axios'
import { useQuery } from 'react-query'

export default function useFetchUserById(userid:number) {
       return useQuery(['user',userid],
          async ()=>{
             const response = axios.get(`http://localhost:4040/users/${userid}`)
             return (await response).data
          }
       )
}
