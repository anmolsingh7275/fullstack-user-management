import Navbar from "../components/Navbar";
import NotesList from "../features/notes/NotesList";
import NoteForm from "../features/notes/NoteForm";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <NoteForm />
      <NotesList />
    </div>
  );
}

export default Dashboard;
