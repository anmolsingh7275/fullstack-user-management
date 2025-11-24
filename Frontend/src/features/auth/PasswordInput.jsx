import Input from "../../components/ui/Input";

function PasswordInput(props) {
  return (
    <Input
      type="password"
      autoComplete="current-password"
      placeholder="Password"
      className="w-full"
      {...props}
    />
  );
}

export default PasswordInput;
