import Ruts from "./routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Navigates from "./routes/Navigates";
import Home from "./pages/Home";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <Ruts />
        </div>
      </Router>
      {/* {<ReactQueryDevtools initialIsOpen={false} />} */}
    </QueryClientProvider>
  );
}

export default App;
