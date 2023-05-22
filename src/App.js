import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "ふじ",
  image: "https://source.unsplash.com/ja/%E5%86%99%E7%9C%9F/156WiOCVLIs",
  email: "1234555@exampl.com",
  phone: "9999-99999-999",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};
export default function App() {
  return <Router />;
}
