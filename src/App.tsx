
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Team from "./pages/Team";
import FAQ from "./pages/FAQ";
import PracticeAreas from "./pages/PracticeAreas";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import DivorceLawyer from "./pages/practices/DivorceLawyer";
import DomesticViolence from "./pages/practices/DomesticViolence";
import Matrimonial from "./pages/practices/Matrimonial";
import FamilyDisputes from "./pages/practices/FamilyDisputes";
import CriminalLaw from "./pages/practices/CriminalLaw";
import PropertyLitigation from "./pages/practices/PropertyLitigation";
import MoneyRecovery from "./pages/practices/MoneyRecovery";
import CourtMarriage from "./pages/practices/CourtMarriage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />
            <Route path="/practice/divorce" element={<DivorceLawyer />} />
            <Route path="/practice/domestic-violence" element={<DomesticViolence />} />
            <Route path="/practice/matrimonial" element={<Matrimonial />} />
            <Route path="/practice/family-disputes" element={<FamilyDisputes />} />
            <Route path="/practice/criminal" element={<CriminalLaw />} />
            <Route path="/practice/property" element={<PropertyLitigation />} />
            <Route path="/practice/money-recovery" element={<MoneyRecovery />} />
            <Route path="/practice/court-marriage" element={<CourtMarriage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
