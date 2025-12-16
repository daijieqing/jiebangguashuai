import React from 'react';
import { TrendingUp, Award, Target, Briefcase } from 'lucide-react';
import { MARKET_METRICS } from '../constants';

export const MarketSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-emerald-400" />
              市场落地与价值
            </h2>
            <p className="text-indigo-200 mt-2 max-w-xl">
              课题成果将直接转化为公司的市场竞争力，通过实际的落单项目和储备商机，验证智能化体系的商业价值。
            </p>
          </div>
          <div className="hidden md:block">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-sm backdrop-blur-sm border border-white/20">
              <Briefcase className="w-4 h-4 mr-2 text-blue-300" />
              政务领域市场推广
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MARKET_METRICS.map((metric, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-indigo-200 text-sm font-medium">{metric.label}</span>
                {metric.trend === 'up' && <TrendingUp className="w-4 h-4 text-emerald-400" />}
                {metric.trend === 'stable' && <Target className="w-4 h-4 text-blue-400" />}
              </div>
              <div className="text-4xl font-bold mb-2 tracking-tight text-white">
                {metric.value}
              </div>
              <div className="h-1 w-full bg-white/10 rounded-full mb-3 overflow-hidden">
                 <div className="h-full bg-gradient-to-r from-blue-400 to-emerald-400 w-2/3 rounded-full opacity-80"></div>
              </div>
              <p className="text-xs text-indigo-300">
                {metric.subtext}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
            <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
                <h4 className="font-bold text-white text-sm mb-1">价值愿景</h4>
                <p className="text-sm text-indigo-200">
                    该课题研究成果将作为公司在政务智能化应用的展示窗口，巩固和扩大在政务领域的专业口碑和影响力，实现“技术+业务+市场”的闭环赋能。
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};