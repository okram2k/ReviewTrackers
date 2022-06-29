import ListView from "./Pages/ListView";
import Header from "./Pages/Header";
import ReviewView from "./Pages/ReviewView";
import { selectDetails } from "./features/details/detailsSlice";
import { useAppSelector } from "./app/hooks";

function App() {
  const { showDetails } = useAppSelector(selectDetails);

  return (
    <div className="App">
      <Header />
      {!showDetails && <ListView />}
      {showDetails && <ReviewView />}
    </div>
  );
}

export default App;
