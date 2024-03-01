import { Provider } from "react-redux";
import Navigator from "./navigation/Navigator";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
