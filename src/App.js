import Ruts from "./routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

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
