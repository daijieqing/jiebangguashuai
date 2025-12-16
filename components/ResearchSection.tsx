import React from 'react';
import { Brain, GitCompare, BarChart, ArrowRight, Lightbulb } from 'lucide-react';
import { RESEARCH_MODULES } from '../constants';

const IconMap = {
  Brain: Brain,
  GitCompare: GitCompare,
  BarChart: BarChart
};

export const ResearchSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {RESEARCH_MODULES.map((module, index) => {
        const Icon = IconMap[module.iconName];
        return (
          <div 
            key={module.id} 
            className="group relative bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col h-full"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="mb-6 flex justify-between items-start">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Icon className="w-8 h-8" />
              </div>
              <span className="text-4xl font-bold text-slate-100 group-hover:text-slate-50 transition-colors">
                0{index + 1}
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors">
              {module.title}
            </h3>

            <div className="flex-1 space-y-4">
              <div className="bg-red-50/50 p-3 rounded-lg border border-red-50">
                <h4 className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-1">痛点</h4>
                <p className="text-sm text-slate-600 leading-snug">{module.problem}</p>
              </div>

              <div className="bg-emerald-50/50 p-3 rounded-lg border border-emerald-50">
                <h4 className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-1 flex items-center">
                   <Lightbulb className="w-3 h-3 mr-1" /> 解决方案
                </h4>
                <p className="text-sm text-slate-600 leading-snug">{module.solution}</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded">
                {module.status}
              </span>
              <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        );
      })}
    </div>
  );
};