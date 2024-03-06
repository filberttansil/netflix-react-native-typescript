import { Provider } from "react-redux";
import Navigator from "./navigation/Navigator";
import { store } from "./store";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Navigator />
      </PaperProvider>
    </Provider>
  );
}
