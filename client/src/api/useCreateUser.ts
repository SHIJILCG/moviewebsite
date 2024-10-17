import axios from "axios";
import React from "react";
import { useMutation, useQuery } from "react-query";

export default function useCreateUser() {
  return useMutation(
    (newUser: { id: number; name: string; age: number }) =>
      axios.post("http://localhost:4040/create-user", newUser),
    {
      onSuccess: () => {
        console.log("succesfuly posted user");
      },
      onError: () => {
        console.log("erroe while posting user");
      },
    }
  );
}
