import axios from "axios";
import { useMutation,useQueryClient } from "react-query";

export default function useCreateUser() {
  const queryClient = useQueryClient()
  return useMutation(
    (newUser: { id: number; name: string; email: string }) =>
      axios.post("http://localhost:4040/create-user", newUser),
    {
      onSuccess: () => {
        console.log("succesfuly posted user");
         queryClient.invalidateQueries(['users'])
      },
      onError: () => {
        console.log("erroe while posting user");
      },
    }
  );
}
