import { useForm } from "react-hook-form";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { createNote } from "../../services/noteService";

function NoteForm() {
  const { register, handleSubmit, reset } = useForm();

  function submit(data) {
    createNote(data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(submit)} className="space-y-3 p-4">
      <Input placeholder="Title" {...register("title")} />
      <Input placeholder="Content" {...register("content")} />
      <Button>Add Note</Button>
    </form>
  );
}

export default NoteForm;
