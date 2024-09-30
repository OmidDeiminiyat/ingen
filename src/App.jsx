import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layouts } from "./layouts/MainLayouts";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NoPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
    <QueryClientProvider client={queryClient}>
       <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layouts />}>
                <Route path='/' element={<Home />} />
                <Route path='/Login' element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
       </BrowserRouter >
      </QueryClientProvider >
    </>
  )
}

export default App
