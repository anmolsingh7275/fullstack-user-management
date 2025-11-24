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
    <form onSubmit={handleSubmit(submit)} className="space-y-5 p-6 max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <Input
        placeholder="Title"
        {...register("title")}
        className="w-full"
      />
      <textarea
        placeholder="Content"
        {...register("content")}
        className="w-full resize-y min-h-24 p-3 rounded-md border border-gray-300 dark:border-gray-700
                   bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Button className="w-full">Add Note</Button>
    </form>
  );
}

export default NoteForm;
