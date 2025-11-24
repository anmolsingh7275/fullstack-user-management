import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

function Login() {
  const { register, handleSubmit } = useForm();
  const { login } = useContext(AuthContext);

  function submit(data) {
    login(data);
  }

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit(submit)} className="space-y-3">
        <Input placeholder="Email" {...register("email")} />
        <Input type="password" placeholder="Password" {...register("password")} />
        <Button>Login</Button>
      </form>
    </div>
  );
}

export default Login;
