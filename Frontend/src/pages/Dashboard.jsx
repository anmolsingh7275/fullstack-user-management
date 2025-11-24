import Navbar from "../components/Navbar";
import NotesList from "../features/notes/NotesList";
import NoteForm from "../features/notes/NoteForm";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navbar />
      <main className="max-w-4xl mx-auto p-6 space-y-10">
        <section>
          <NoteForm />
        </section>
        <section>
          <NotesList />
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
