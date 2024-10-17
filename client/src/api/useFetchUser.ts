import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

export default function useFetchUser() {
  return useQuery(["user"], async () => {
    const response = axios.get("http://localhost:4040/users");
    return (await response).data;
  });
}
