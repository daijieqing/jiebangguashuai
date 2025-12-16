
import React from 'react';
import { 
  Trophy, 
  Rocket, 
  Sprout, 
  Cpu, 
  Globe, 
  Database, 
  Milestone, 
  Expand, 
  Presentation,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { OUTLOOK_DATA } from '../../constants';

const IconMap: Record<string, React.ElementType> = {
  Trophy,
  Rocket,
  Cpu,
  Globe,
  Database,
  Milestone,
  Expand,
  Presentation,
  BookOpen
};

export const OutlookView: React.FC = () => {
  const harvestItems = OUTLOOK_DATA.filter(item => item.type === 'harvest');
  const futureItems = OUTLOOK_DATA.filter(item => item.type === 'future');

  return (
    <div className="space-y-12 pb-10">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">团队收获与展望</h2>
        <p className="text-slate-500">技术沉淀总结与未来发展规划</p>
      </div>

      <div className="flex flex-col gap-12">
        {/* Harvest Section - Top Row */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-amber-100 pb-4">
             <div className="p-2.5 bg-gradient-to-br from-amber-100 to-orange-100 text-amber-600 rounded-xl shadow-sm">
               <Trophy className="w-6 h-6" />
             </div>
             <div>
               <h3 className="text-2xl font-bold text-slate-800">目前收获</h3>
               <p className="text-xs text-slate-400 mt-1">Key Achievements & Knowledge Accumulation</p>
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {harvestItems.map((item, index) => {
               const Icon = IconMap[item.icon] || Trophy;
               return (
                 <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group hover:border-amber-300 hover:shadow-md transition-all duration-300 flex flex-col h-full">
                   {/* Background Decor */}
                   <div className="absolute -right-6 -bottom-6 text-slate-50 opacity-60 transform rotate-12 group-hover:scale-110 transition-transform">
                      <Icon className="w-32 h-32" />
                   </div>
                   
                   <div className="relative z-10 flex flex-col h-full">
                      <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100 mb-4">
                           <Icon className="w-6 h-6" />
                      </div>
                      
                      <h4 className="font-bold text-lg text-slate-800 mb-3 group-hover:text-amber-700 transition-colors">{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed text-sm text-justify flex-grow">{item.description}</p>
                   </div>
                 </div>
               );
             })}
          </div>
        </div>

        {/* Outlook Section - Bottom Row */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-sky-100 pb-4">
             <div className="p-2.5 bg-gradient-to-br from-sky-100 to-blue-100 text-sky-600 rounded-xl shadow-sm">
               <Rocket className="w-6 h-6" />
             </div>
             <div>
               <h3 className="text-2xl font-bold text-slate-800">下步展望</h3>
               <p className="text-xs text-slate-400 mt-1">Strategic Planning & Expansion</p>
             </div>
          </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {futureItems.map((item, index) => {
               const Icon = IconMap[item.icon] || Rocket;
               return (
                 <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group hover:border-sky-300 hover:shadow-md transition-all duration-300 flex flex-col h-full">
                    <div className="absolute -right-6 -bottom-6 text-slate-50 opacity-60 transform rotate-12 group-hover:scale-110 transition-transform">
                      <Icon className="w-32 h-32" />
                   </div>
                   
                   <div className="relative z-10 flex flex-col h-full">
                      <div className="w-12 h-12 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100 mb-4">
                           <Icon className="w-6 h-6" />
                      </div>
                      
                      <h4 className="font-bold text-lg text-slate-800 mb-3 group-hover:text-sky-700 transition-colors">{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed text-sm text-justify flex-grow">{item.description}</p>
                   </div>
                 </div>
               );
             })}
          </div>
             
          {/* Call to Action / Final Note */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-xl mt-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <Sprout className="w-6 h-6 text-green-300" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1 flex items-center gap-2">
                  持续演进与赋能
                  <ArrowRight className="w-4 h-4 text-blue-200" />
                </h4>
                <p className="text-blue-100 text-sm opacity-90 leading-relaxed">
                  我们将持续收集一线反馈，迭代模型精度，致力于打造政务项目管理领域的行业标杆，实现技术价值与商业价值的双赢。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
