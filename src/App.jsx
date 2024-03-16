import MainBgImgandVideo from "./components/MainBgImgandVideo";
import MainContainer from "./components/MainContainer";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <MainBgImgandVideo />
      <MainContainer />
    </Provider>
  );
};

export default App;
