import logo from "./logo.svg";
import "./App.css";
import Amplify from "aws-amplify"; // 追加
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react"; // 追加
import awsconfig from "./aws-exports"; // 追加

Amplify.configure(awsconfig); // 追加

function App() {
  return (
    <div className="App">
      <AmplifySignOut /> {/* サインアウトボタン 追加 */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withAuthenticator(App); // 修正
