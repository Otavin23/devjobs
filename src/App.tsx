import { ChakraBaseProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { CompanyInformation } from "./pages/companyInformation";
import { themeChakra } from "./styles/theme";

const App = () => {
  return (
    <ChakraBaseProvider theme={themeChakra}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/information/:id" element={<CompanyInformation />} />
        </Routes>
      </BrowserRouter>
    </ChakraBaseProvider>
  );
};

export default App;
