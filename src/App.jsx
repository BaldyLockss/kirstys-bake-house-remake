import "./App.css";
import Footer from "./components/footer/footer";
import Form from "./components/form/form";
import Header from "./components/header/header";
import Landing from "./pages/landing/landing";

function App() {
  return (
    <>
      <Header />
      <main>
        <Landing />
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default App;
