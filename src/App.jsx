import ContactForm from "./components/ContactForm";
import CrudApi from "./components/CrudApi";
import CrudApp from "./components/CrudApp";
import Modals from "./components/Modals";
import SelectsAnidados from "./components/SelectsAnidados";

function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <hr />
      <Modals />

      <hr />
      <ContactForm />
      <hr />
      <SelectsAnidados />
      <hr />
      <CrudApi></CrudApi>
      <hr />
      <CrudApp></CrudApp>
      <hr />
    </>
  );
}

export default App;
