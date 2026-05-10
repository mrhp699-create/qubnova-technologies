import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/common/Navbar.jsx';
import Footer from './components/common/Footer.jsx';
import ScrollToTop from './components/common/ScrollToTop.jsx';
import WhatsAppButton from './components/common/WhatsAppButton.jsx';
import ChatbotWidget from './components/common/ChatbotWidget.jsx';
import SiteBackdrop from './components/common/SiteBackdrop.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Projects from './pages/Projects.jsx';
import ProjectDetails from './pages/ProjectDetails.jsx';
import AIDemoLab from './pages/AIDemoLab.jsx';
import DesignPortfolio from './pages/DesignPortfolio.jsx';
import Pricing from './pages/Pricing.jsx';
import QubnovaLabs from './pages/QubnovaLabs.jsx';
import Blog from './pages/Blog.jsx';
import BlogDetails from './pages/BlogDetails.jsx';
import Contact from './pages/Contact.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import RequireAdminAuth from './components/admin/RequireAdminAuth.jsx';

export default function App() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen overflow-hidden bg-aurora-snow text-aurora-ink transition-colors dark:bg-aurora-midnight dark:text-white">
      <SiteBackdrop />
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="/ai-demo-lab" element={<AIDemoLab />} />
            <Route path="/design-portfolio" element={<DesignPortfolio />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/qubnova-labs" element={<QubnovaLabs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin/dashboard"
              element={
                <RequireAdminAuth>
                  <AdminDashboard />
                </RequireAdminAuth>
              }
            />
            <Route path="*" element={<Home />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <WhatsAppButton />
      <ChatbotWidget />
    </div>
  );
}
