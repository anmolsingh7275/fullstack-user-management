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
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Signup</h2>
      <form onSubmit={handleSubmit(submit)} className="space-y-3">
        <Input placeholder="Name" {...register("name")} />
        <Input placeholder="Email" {...register("email")} />
        <Input type="password" placeholder="Password" {...register("password")} />
        <Button>Signup</Button>
      </form>
    </div>
  );
}

export default Signup;
