import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { Home } from "./Home/Home";
import { Edit } from "./Home/Edit";
import { store } from "./store/store";
import { Provider } from "react-redux";

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback="loading...">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/edit" element={<Edit />}></Route>
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  );
}
