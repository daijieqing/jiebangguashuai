
import React, { useState } from 'react';
import { 
  Brain, 
  GitCompare, 
  BarChart, 
  Code2, 
  MonitorPlay, 
  Footprints, 
  Briefcase, 
  Coins, 
  Settings, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle,
  FileText,
  ArrowRight,
  Layers,
  Workflow,
  ExternalLink,
  ShieldCheck,
  BrainCircuit,
  Layout,
  ArrowDown,
  ArrowUp,
  FileSearch,
  RefreshCw,
  AlertOctagon,
  Database,
  Calculator,
  LineChart,
  ArrowLeftRight,
  Lightbulb,
  Network
} from 'lucide-react';
import { RESEARCH_MODULES } from '../../constants';

const IconMap = {
  Brain: Brain,
  GitCompare: GitCompare,
  BarChart: BarChart
};

// Architecture Data Mapping with Specific Color Themes per Layer
const ARCHITECTURE_LAYERS: Record<string, {
  layers: Array<{
    title: string;
    subtitle: string;
    icon: React.ElementType;
    tags: string[];
    colorTheme: string; // Using exact tailwind color key
  }>
}> = {
  'module-1': { // 智能辅助评审 (Existing)
    layers: [
      {
        title: "第三层：业务应用层 (交互终端)",
        subtitle: "人机协作界面，专家反馈闭环",
        icon: Layout,
        tags: ["用户交互", "反馈优化"],
        colorTheme: 'violet'
      },
      {
        title: "第二层：业务防腐层 (智能翻译官)",
        subtitle: "隔离变化，清洗数据，标准化API契约",
        icon: ShieldCheck,
        tags: ["数据处理", "API契约"],
        colorTheme: 'emerald'
      },
      {
        title: "第一层：智能体层 (智能大脑)",
        subtitle: "核心认知引擎，负责理解规则与逻辑",
        icon: BrainCircuit,
        tags: ["Dify编排", "Milvus知识库", "大模型接口"],
        colorTheme: 'blue'
      }
    ]
  },
  'module-2': { // 项目建设偏差分析 (New Rich Colors)
    layers: [
      {
        title: "第三层：业务应用层 (决策业务端)",
        subtitle: "面向管理者，嵌入流程，发标警报机制",
        icon: AlertOctagon,
        tags: ["发标拦截", "审计底稿"],
        colorTheme: 'rose' // Alert/Danger tone
      },
      {
        title: "第二层：语义对齐与隔离 (标准化中间件)",
        subtitle: "建立语义映射机制，封装Prompt与SQL逻辑",
        icon: ArrowLeftRight,
        tags: ["语义映射", "接口防腐"],
        colorTheme: 'violet' // Logic/Middleware tone
      },
      {
        title: "第一层：核心稽核引擎 (数字审计员)",
        subtitle: "智能体工作流编排，RAG跨文档校验",
        icon: FileSearch,
        tags: ["指标提取", "一致性校验"],
        colorTheme: 'indigo' // Deep tech/Engine tone
      }
    ]
  },
  'module-3': { // 项目绩效评价体系 (New Rich Colors)
    layers: [
      {
        title: "第三层：智能辅助分析与决策层 (价值交付端)",
        subtitle: "大模型归因分析，识别需求错位风险",
        icon: Lightbulb,
        tags: ["归因分析", "绩效诊断"],
        colorTheme: 'amber' // Value/Insight tone
      },
      {
        title: "第二层：指标计算与模型构建层 (逻辑中枢)",
        subtitle: "原子数据转复合指标，灵活配置权重",
        icon: Calculator,
        tags: ["模型计算", "权重配置"],
        colorTheme: 'teal' // Calculation/Precision tone
      },
      {
        title: "第一层：指标采集与数据融合层 (感知神经)",
        subtitle: "配置化连接器，多源数据清洗与对齐",
        icon: Network,
        tags: ["数据连接器", "清洗对齐"],
        colorTheme: 'cyan' // Data/Connectivity tone
      }
    ]
  }
};

export const AchievementsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState(RESEARCH_MODULES[0].id);
  const activeModule = RESEARCH_MODULES.find(m => m.id === activeTab) || RESEARCH_MODULES[0];
  const ActiveIcon = IconMap[activeModule.iconName];

  // Helper to render architecture layers with dynamic colors
  const renderArchitecture = (moduleId: string) => {
    const data = ARCHITECTURE_LAYERS[moduleId];
    
    // Default fallback if no custom data exists
    if (!data) return (
      <p className="text-sm text-slate-600 leading-relaxed">
        {activeModule.details.solutionOverview.architecture}
      </p>
    );

    return (
      <div className="mt-4 flex flex-col gap-2">
        {data.layers.map((layer, index) => {
          
          // Dynamic Color Mapping function to avoid complex inline conditionals
          const getColorClasses = (theme: string) => {
            switch(theme) {
              case 'violet': return {
                bg: "bg-gradient-to-r from-violet-50 to-purple-50",
                border: "border-violet-200",
                icon: "bg-violet-500",
                textTitle: "text-violet-800",
                textSub: "text-violet-600",
                tagBg: "bg-white border-violet-100",
                tagText: "text-violet-600"
              };
              case 'emerald': return {
                bg: "bg-gradient-to-r from-emerald-50 to-teal-50",
                border: "border-emerald-200",
                icon: "bg-emerald-500",
                textTitle: "text-emerald-800",
                textSub: "text-emerald-600",
                tagBg: "bg-white border-emerald-100",
                tagText: "text-emerald-600"
              };
              case 'blue': return {
                bg: "bg-gradient-to-r from-blue-50 to-indigo-50",
                border: "border-blue-200",
                icon: "bg-blue-500",
                textTitle: "text-blue-800",
                textSub: "text-blue-600",
                tagBg: "bg-white border-blue-100",
                tagText: "text-blue-500"
              };
              case 'rose': return {
                bg: "bg-gradient-to-r from-rose-50 to-red-50",
                border: "border-rose-200",
                icon: "bg-rose-500",
                textTitle: "text-rose-800",
                textSub: "text-rose-600",
                tagBg: "bg-white border-rose-100",
                tagText: "text-rose-600"
              };
              case 'indigo': return {
                bg: "bg-gradient-to-r from-indigo-50 to-blue-50",
                border: "border-indigo-200",
                icon: "bg-indigo-500",
                textTitle: "text-indigo-800",
                textSub: "text-indigo-600",
                tagBg: "bg-white border-indigo-100",
                tagText: "text-indigo-600"
              };
              case 'amber': return {
                bg: "bg-gradient-to-r from-amber-50 to-orange-50",
                border: "border-amber-200",
                icon: "bg-amber-500",
                textTitle: "text-amber-800",
                textSub: "text-amber-600",
                tagBg: "bg-white border-amber-100",
                tagText: "text-amber-600"
              };
              case 'teal': return {
                bg: "bg-gradient-to-r from-teal-50 to-emerald-50",
                border: "border-teal-200",
                icon: "bg-teal-500",
                textTitle: "text-teal-800",
                textSub: "text-teal-600",
                tagBg: "bg-white border-teal-100",
                tagText: "text-teal-600"
              };
              case 'cyan': return {
                bg: "bg-gradient-to-r from-cyan-50 to-sky-50",
                border: "border-cyan-200",
                icon: "bg-cyan-500",
                textTitle: "text-cyan-800",
                textSub: "text-cyan-600",
                tagBg: "bg-white border-cyan-100",
                tagText: "text-cyan-600"
              };
              default: return { // Fallback to blue
                bg: "bg-gradient-to-r from-slate-50 to-gray-50",
                border: "border-slate-200",
                icon: "bg-slate-500",
                textTitle: "text-slate-800",
                textSub: "text-slate-600",
                tagBg: "bg-white border-slate-100",
                tagText: "text-slate-500"
              };
            }
          };

          const colors = getColorClasses(layer.colorTheme);
          const Icon = layer.icon;

          return (
            <React.Fragment key={index}>
              <div className={`${colors.bg} border ${colors.border} rounded-lg p-3 shadow-sm relative group hover:shadow-md transition-all`}>
                <div className="flex items-center gap-3">
                  <div className={`p-2 ${colors.icon} text-white rounded-lg shadow-sm`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h6 className={`text-xs font-bold ${colors.textTitle}`}>{layer.title}</h6>
                    <p className={`text-[10px] ${colors.textSub} mt-0.5 leading-tight`}>{layer.subtitle}</p>
                  </div>
                </div>
                <div className="mt-2 flex gap-1.5 flex-wrap">
                  {layer.tags.map((tag, tIdx) => (
                    <span key={tIdx} className={`px-1.5 py-0.5 ${colors.tagBg} border ${colors.tagText} text-[10px] rounded font-mono`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Arrow Up connecting layers (Bottom-to-Top flow) */}
              {index < data.layers.length - 1 && (
                <div className="flex justify-center -my-1">
                  <ArrowUp className="w-4 h-4 text-slate-300 animate-bounce" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">核心研究成果</h2>
        <p className="text-slate-500">基于 PDF 论证报告的深度解析</p>
      </div>

      {/* Module Tabs */}
      <div className="flex overflow-x-auto pb-2 gap-4 no-scrollbar">
        {RESEARCH_MODULES.map((module) => {
          const Icon = IconMap[module.iconName];
          const isActive = activeTab === module.id;
          return (
            <button
              key={module.id}
              onClick={() => {
                setActiveTab(module.id);
              }}
              className={`flex-shrink-0 flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 min-w-[200px] ${
                isActive
                  ? 'bg-slate-800 text-white border-slate-800 shadow-lg scale-105'
                  : 'bg-white text-slate-500 border-slate-200 hover:border-blue-300 hover:bg-blue-50'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-blue-400' : ''}`} />
              <span className="font-semibold">{module.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden animate-fade-in">
        {/* Header & Problem/Solution Summary */}
        <div className={`p-8 ${activeModule.details.demoVisualColor} bg-opacity-5 border-b border-slate-100`}>
          <div className="flex items-start justify-between flex-col md:flex-row gap-6">
            <div className="flex gap-4">
              <div className={`p-3 rounded-xl bg-white shadow-sm text-slate-700 h-fit`}>
                <ActiveIcon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800">{activeModule.title}</h3>
                <div className="mt-3 space-y-3">
                   <p className="text-slate-600 text-sm leading-relaxed"><span className="font-bold text-red-500">痛点：</span>{activeModule.problem}</p>
                   <p className="text-slate-600 text-sm leading-relaxed"><span className="font-bold text-emerald-600">建设目标：</span>{activeModule.solution}</p>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
               <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 shadow-sm">
                 {activeModule.status}
               </span>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-12">
          
          {/* 1. Feasibility Analysis (4 Dimensions) */}
          <section>
            <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-100">
              <Settings className="w-5 h-5 text-slate-500" />
              <h4 className="font-bold text-slate-800 text-lg">1. 可行性分析 (Feasibility)</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Technical */}
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                <div className="flex items-center gap-2 mb-3 text-blue-700">
                  <Code2 className="w-4 h-4" />
                  <span className="font-bold text-sm">1.1 技术可行性</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed text-justify">
                  {activeModule.details.feasibility.technical}
                </p>
              </div>

              {/* Business */}
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 hover:border-indigo-200 transition-colors">
                <div className="flex items-center gap-2 mb-3 text-indigo-700">
                  <Briefcase className="w-4 h-4" />
                  <span className="font-bold text-sm">1.2 业务可行性</span>
                </div>
                 <p className="text-xs text-slate-600 leading-relaxed text-justify">
                  {activeModule.details.feasibility.business}
                </p>
              </div>

              {/* Implementation */}
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 hover:border-amber-200 transition-colors">
                <div className="flex items-center gap-2 mb-3 text-amber-700">
                  <Footprints className="w-4 h-4" />
                  <span className="font-bold text-sm">1.3 实施可行性</span>
                </div>
                 <p className="text-xs text-slate-600 leading-relaxed text-justify">
                  {activeModule.details.feasibility.implementation}
                </p>
              </div>

               {/* Economic */}
               <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 hover:border-emerald-200 transition-colors">
                <div className="flex items-center gap-2 mb-3 text-emerald-700">
                  <Coins className="w-4 h-4" />
                  <span className="font-bold text-sm">1.4 经济可行性</span>
                </div>
                 <p className="text-xs text-slate-600 leading-relaxed text-justify">
                  {activeModule.details.feasibility.economic}
                </p>
              </div>
            </div>
          </section>

          {/* 2. Solution (Architecture & Process) */}
          <section>
             <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-100">
              <Layers className="w-5 h-5 text-slate-500" />
              <h4 className="font-bold text-slate-800 text-lg">2. 解决方案 (Solution)</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Architecture Column */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 h-full">
                 <h5 className="font-bold text-slate-700 text-sm mb-3 flex items-center">
                    <Settings className="w-4 h-4 mr-2 text-blue-500" /> 
                    2.1 总体架构
                 </h5>

                 {/* Custom Visualization based on Module ID */}
                 {renderArchitecture(activeModule.id)}
              </div>

              {/* Core Flows Column */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 h-full">
                 <h5 className="font-bold text-slate-700 text-sm mb-3 flex items-center">
                    <Workflow className="w-4 h-4 mr-2 text-emerald-500" /> 
                    2.2 核心流程
                 </h5>
                 <ul className="space-y-3">
                    {activeModule.details.solutionOverview.coreFlows.map((flow, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-600">
                         <span className="flex-shrink-0 w-5 h-5 rounded-full bg-slate-100 text-slate-500 text-xs flex items-center justify-center mr-3 mt-0.5 font-bold">
                           {idx + 1}
                         </span>
                         <span>{flow}</span>
                      </li>
                    ))}
                 </ul>
              </div>
            </div>
          </section>

          {/* 2.3 Function Simulation (Demo) */}
          <section className="relative">
             <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-100">
              <MonitorPlay className="w-5 h-5 text-slate-500" />
              <h4 className="font-bold text-slate-800 text-lg">2.3 功能模拟 (Simulation)</h4>
            </div>

             {/* The High Fidelity UI Container */}
             <div 
                className={`bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden font-mono text-sm transform transition-transform duration-500 ${activeModule.details.demoContent.demoLink ? 'cursor-pointer hover:scale-[1.01] group' : ''}`}
                onClick={() => {
                   if (activeModule.details.demoContent.demoLink) {
                      window.open(activeModule.details.demoContent.demoLink, '_blank');
                   }
                }}
             >
                {/* Overlay if demoLink exists */}
                {activeModule.details.demoContent.demoLink && (
                  <div className="absolute inset-0 z-10 bg-slate-900/0 hover:bg-slate-900/5 transition-colors flex flex-col items-center justify-center group">
                     <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                         <div className="bg-blue-600/90 text-white px-6 py-3 rounded-full shadow-2xl backdrop-blur-sm flex items-center gap-2 font-bold">
                             <ExternalLink className="w-5 h-5" />
                             点击访问演示系统
                         </div>
                     </div>
                  </div>
                )}

              {/* Fake Browser Toolbar */}
              <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex items-center justify-between">
                 <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400 border border-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400 border border-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400 border border-green-500"></div>
                 </div>
                 <div className="bg-white px-3 py-1 rounded-md border border-slate-200 text-xs text-slate-400 w-1/2 text-center overflow-hidden text-ellipsis whitespace-nowrap">
                    {activeModule.details.demoContent.demoLink || 'system.internal/review/report/2025-001'}
                 </div>
                 <div className="w-4"></div>
              </div>

              {/* System Header */}
              <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                 <div>
                    <h5 className="font-bold text-slate-800 text-base flex items-center gap-2">
                       <FileText className="w-4 h-4 text-blue-500" />
                       {activeModule.details.demoContent.screenTitle}
                    </h5>
                    <p className="text-xs text-slate-400 mt-1">报告生成时间: 2025-09-15 10:30</p>
                 </div>
                 {activeModule.details.demoContent.alertCount > 0 && (
                    <div className="flex items-center gap-1.5 bg-red-50 text-red-600 px-3 py-1.5 rounded-full border border-red-100">
                       <AlertTriangle className="w-4 h-4" />
                       <span className="text-xs font-bold">{activeModule.details.demoContent.alertCount} 项风险</span>
                    </div>
                 )}
              </div>

              {/* System Body - Report Items */}
              <div className="p-6 bg-white min-h-[300px]">
                 <div className="space-y-4">
                    {activeModule.details.demoContent.items.map((item, idx) => (
                       <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-4 p-3 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors">
                          <div className="flex-shrink-0 mt-1">
                             {item.status === 'error' && <XCircle className="w-5 h-5 text-red-500" />}
                             {item.status === 'warning' && <AlertTriangle className="w-5 h-5 text-amber-500" />}
                             {item.status === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                          </div>
                          <div className="flex-grow">
                             <div className="flex justify-between items-center mb-1">
                                <span className="font-bold text-slate-700">{item.label}</span>
                                <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                                   item.status === 'error' ? 'bg-red-100 text-red-700' :
                                   item.status === 'warning' ? 'bg-amber-100 text-amber-700' :
                                   'bg-emerald-100 text-emerald-700'
                                }`}>
                                   {item.value}
                                </span>
                             </div>
                             <p className="text-slate-500 text-xs leading-relaxed">
                                {item.detail}
                             </p>
                          </div>
                       </div>
                    ))}
                 </div>

                 {/* Fake Action Buttons */}
                 <div className="mt-6 flex gap-3 pt-4 border-t border-slate-100">
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-md text-xs font-bold hover:bg-blue-700 transition-colors">
                       导出专家初审报告 (PDF)
                    </button>
                    <button className="px-4 border border-slate-300 rounded-md text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors">
                       重新比对
                    </button>
                 </div>
              </div>
            </div>
          </section>

          {/* 3. Next Steps */}
          {activeModule.details.nextSteps && activeModule.details.nextSteps.length > 0 && (
            <section className="bg-slate-50 border-t border-slate-200 p-8 rounded-2xl">
              <div className="flex items-center gap-2 mb-4">
                 <Footprints className="w-5 h-5 text-slate-600" />
                 <h4 className="font-bold text-slate-800 text-lg">3. 下一步规划 (Next Steps)</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                 {activeModule.details.nextSteps.map((step, index) => (
                   <div key={index} className="flex flex-col bg-white p-4 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden h-full">
                      <div className="absolute top-0 right-0 p-2 opacity-10">
                         <ArrowRight className="w-8 h-8" />
                      </div>
                      <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 text-xs font-bold flex items-center justify-center mb-3">
                        {index + 1}
                      </span>
                      <p className="text-sm text-slate-600 font-medium leading-relaxed">{step}</p>
                   </div>
                 ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};
