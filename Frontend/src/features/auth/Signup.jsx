import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

function Signup() {
  const { register, handleSubmit } = useForm();
  const { registerUser } = useContext(AuthContext);

  function submit(data) {
    registerUser(data);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 tracking-tight text-center">
          Create an account
        </h2>
        <form onSubmit={handleSubmit(submit)} className="space-y-5">
          <Input
            placeholder="Name"
            autoComplete="name"
            className="w-full"
            {...register("name")}
          />
          <Input
            placeholder="Email"
            type="email"
            autoComplete="email"
            className="w-full"
            {...register("email")}
          />
          <Input
            type="password"
            placeholder="Password"
            autoComplete="new-password"
            className="w-full"
            {...register("password")}
          />
          <Button className="w-full">Sign up</Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
