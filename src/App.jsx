import Header from "./Header";
import StudentCard from "./StudentCard";
import Footer from "./Footer";

function App() {
  return (
<div>
<Header />

<StudentCard name="Aditya Chatterjee" age={20} course="React" />

<Footer />
</div>
  );
}

export default App;
