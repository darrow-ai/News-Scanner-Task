import "./App.css";
import { CategorySelect } from "./components/CategorySelect";
import { QueryInput } from "./components/QueryInput";
import { NewsDisplay } from "./components/NewsDisplay";
import { FetchNewsButton } from "./components/FetchNewsButton";

function App() {
  return (
    <div className="app">
      <div className="filters">
        <QueryInput
        // value={}
        // onChange={}
        />

        <CategorySelect
        // options={}
        // selectedOptions={}
        // onChange={}
        />

        <FetchNewsButton
        // onClick={}
        />
      </div>
      <NewsDisplay />
    </div>
  );
}

export default App;
