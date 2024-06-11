import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ContextProvider} from "./utils/ContextProvider.jsx";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {BrowserRouter} from "react-router-dom";
import "./index.css";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<ContextProvider>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<App/>
			</BrowserRouter>
		</QueryClientProvider>
	</ContextProvider>
);
