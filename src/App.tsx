import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './hooks/useLanguage';
import { Layout } from './components/common/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Mission } from './pages/Mission';
import { AreasOfExpertise } from './pages/AreasOfExpertise';
import { Services } from './pages/Services';
import { Team } from './pages/Team';
import { Partners } from './pages/Partners';
import { Contact } from './pages/Contact';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/expertise" element={<AreasOfExpertise />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
}

export default App;