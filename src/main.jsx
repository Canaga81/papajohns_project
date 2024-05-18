import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SidebarProvider from "./contexts/SidebarContext.jsx";
import ProductsApiProvider from "./contexts/ProductsApi.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <SidebarProvider>
    
    <ProductsApiProvider>
      
      <App />
      
    </ProductsApiProvider>
    
  </SidebarProvider>
  
);