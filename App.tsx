
import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Layers, 
  TrendingUp, 
  Flag,
  Menu,
  X,
  Sparkles
} from 'lucide-react';
import { AIChat } from './components/AIChat';
import { OverviewView } from './components/views/OverviewView';
import { AchievementsView } from './components/views/AchievementsView';
import { MarketView } from './components/views/MarketView';
import { OutlookView } from './components/views/OutlookView';

type ViewType = 'overview' | 'achievements' | 'market' | 'outlook';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderView = () => {
    switch (currentView) {
      case 'overview': return <OverviewView />;
      case 'achievements': return <AchievementsView />;
      case 'market': return <MarketView />;
      case 'outlook': return <OutlookView />;
      default: return <OverviewView />;
    }
  };

  const navItems = [
    { id: 'overview', label: '概览与背景', icon: LayoutDashboard },
    { id: 'achievements', label: '核心成果', icon: Layers },
    { id: 'market', label: '市场价值', icon: TrendingUp },
    { id: 'outlook', label: '收获与展望', icon: Flag },
  ] as const;

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      {/* Top Navigation Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-slate-200 py-3 shadow-sm'
            : 'bg-white border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Title */}
            <div 
              className="flex items-center gap-3 cursor-pointer group" 
              onClick={() => setCurrentView('overview')}
            >
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2.5 rounded-xl text-white shadow-lg shadow-blue-500/30 transition-transform group-hover:scale-105">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold text-slate-900 text-lg leading-tight tracking-tight">
                  项目管理智能化体系
                </h1>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Research Report
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center bg-slate-100/60 p-1.5 rounded-full border border-slate-200/50 backdrop-blur-sm">
              {navItems.map((item) => {
                const isActive = currentView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentView(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`relative px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                      isActive
                        ? 'text-blue-700 bg-white shadow-sm ring-1 ring-slate-200'
                        : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Status Badge */}
             <div className="hidden md:block">
               <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100 text-xs font-bold shadow-sm">
                 <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                 验收阶段
               </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-white md:hidden pt-24 px-6 animate-fade-in-up">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentView(item.id);
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 border border-blue-100 shadow-sm'
                      : 'text-slate-600 hover:bg-slate-50 border border-transparent'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${isActive ? 'bg-blue-200/50' : 'bg-slate-100'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-lg">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow pt-28 pb-12 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           {/* Content Animation Wrapper */}
           <div key={currentView} className="animate-fade-in-up">
              {renderView()}
           </div>
        </div>
      </main>

      <AIChat />
    </div>
  );
};

export default App;
