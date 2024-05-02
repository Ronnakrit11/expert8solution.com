import { styles } from "@/app/styles/style";
import { useUpdatePasswordMutation } from "@/redux/features/user/userApi";
import React, { FC, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Button, Checkbox, Label, TextInput, Card } from "flowbite-react";

type Props = {};

const ChangePassword: FC<Props> = (props) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [updatePassword, { isSuccess, error }] = useUpdatePasswordMutation();

  const passwordChangeHandler = async (e: any) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      await updatePassword({ oldPassword, newPassword });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Password changed successfully");
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
    }
  }, [isSuccess, error]);

  return (
    <div className="bg-white dark:bg-darkbg mx-2 px-2 py-10 rounded-xl shadow-md">
      <div className="w-full pl-7 px-2 800px:px-5 800px:pl-0">
        <h1 className="block text-[25px] 800px:text-[30px] font-Poppins text-center font-[500] text-black dark:text-[#fff] pb-2">
          Change Password
        </h1>
        <div className="w-full">
          <form
            aria-required
            onSubmit={passwordChangeHandler}
            className="flex flex-col items-center"
          >
            <div className=" w-[100%] 800px:w-[60%] mt-5">
              <div className="mb-2 block">
                <Label htmlFor="password" value="Enter your old password" />
              </div>
              <TextInput
                type="password"
                id="password"
                required
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>
            <div className=" w-[100%] 800px:w-[60%] mt-2">
              <div className="mb-2 block">
                <Label htmlFor="newpassword" value="Enter your new password" />
              </div>
              <TextInput
                type="password"
                id="newpassword"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className=" w-[100%] 800px:w-[60%] mt-2">
              <div className="mb-2 block">
                <Label htmlFor="confirmpassword" value="Enter your confirm password" />
              </div>
              <TextInput
                type="password"
                id="confirmpassword"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <Button type="submit" className="mt-4">Change Password</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
