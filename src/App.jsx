import CardScroller from "./components/CardScroller/CardScroller";
import CategoryCard from "./components/CategoryCard/CategoryCard";


function App() {
  return (
    <div className="App content-center relative">
      <h1 className="text-9xl font-primary w-screen text-center mt-3">Chose category!</h1>
      {/* <CategoryCard categoryType="category1" /> */}
      <CardScroller>
          <CategoryCard categoryType="category1" />
          <CategoryCard categoryType="category2" />
          <CategoryCard categoryType="category3" />
          <CategoryCard categoryType="category4" />
          <CategoryCard categoryType="category5" />
      </CardScroller>

      
    </div>
  );
}

export default App;
