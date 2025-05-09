
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Placements from "./pages/Placements";
import Degree from "./pages/Degree";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Admission from "./pages/Admission";
import FAQ from "./pages/FAQ";
import Fees from "./pages/Fees";
import News from "./pages/News";
import HireFromUs from "./pages/HireFromUs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/degree" element={<Degree />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/news" element={<News />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/hirefromus" element={<HireFromUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
