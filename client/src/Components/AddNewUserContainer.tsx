import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import useCreateUser from "../api/useCreateUser";
import getRandomNumbers from "../common/getRandomNumbers";
type AddNewUserContainerPropsType = {
  isNewUser: boolean;
  setisNewUser: React.Dispatch<React.SetStateAction<boolean>>;
};
const initialValue = {
  name: "",
  email: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Name can only contain letters")
    .required("required"),
  email: Yup.string().email("Invalid email address").required("required"),
});

export const AddNewUserContainer = ({
  isNewUser,
  setisNewUser,
}: AddNewUserContainerPropsType) => {
  const { mutate } = useCreateUser();
  const onsubmit = (value: { name: string; email: string }) => {
    mutate({ ...value, id: getRandomNumbers() });
    setisNewUser(false);
  };
  return (
    <div
      className={` p-[40px] h-[613px] flex flex-col justify-around items-center max-w-[650px] border-2 text-white text-[20px] border-white rounded-md z-10 relative`}
    >
      <img
        src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-image-gray-blank-silhouette-vector-illustration-305504015.jpg"
        alt=""
        className="rounded-full w-[150px]"
      />
      <button
        className=" absolute left-10 top-10 bg-[#838383] px-[30px] py-[10px] rounded-2xl active:scale-95"
        onClick={() => setisNewUser(false)}
      >
        ⇦
      </button>
      <Formik
        initialValues={initialValue}
        onSubmit={onsubmit}
        validationSchema={validationSchema}
      >
        <Form className="flex flex-col  w-[100%] py-[40px]">
          <div className="flex flex-col text-left p-[20px]">
            <div className="w-[100%] flex items-center gap-10">
              <label htmlFor="name" className="w-30% font-bold text-[21px]">
                Name:
              </label>
              <Field
                id="name"
                type="text"
                name="name"
                placeholder="Enter Name..."
                className="w-[80%] h-[50px] bg-transparent border-2  border-white rounded-md text-white placeholder:text-white flex-1"
              />
            </div>
            <ErrorMessage name="name" />
          </div>
          <div className="flex flex-col text-left p-[20px]">
            <div className="w-[100%] flex items-center gap-10 justify-between">
              <label htmlFor="email" className="w-30% font-bold text-[21px]">
                Email:
              </label>
              <Field
                id="email"
                name="email"
                placeholder="Enter Email..."
                className="w-[80%] h-[50px] bg-transparent border-2  border-white rounded-md text-white placeholder:text-white flex-1 max-w-[424px]"
              />
            </div>
            <ErrorMessage name="email" />
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#838383] px-[30px] py-[10px] rounded-3xl active:scale-95"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
