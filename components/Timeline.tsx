import React from 'react';
import { TimelineItem } from '../types';
import { Calendar, CheckCircle2, Flag } from 'lucide-react';

interface TimelineProps {
  data: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ data }) => {
  return (
    <div className="relative border-l-4 border-blue-200 ml-6 md:ml-8 my-8 space-y-12">
      {data.map((item, index) => (
        <div key={index} className="relative pl-8 md:pl-12 group">
          {/* Node Indicator */}
          <div className="absolute -left-[14px] top-1 bg-white border-4 border-blue-500 w-6 h-6 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 border-b border-slate-100 pb-3">
              <div className="flex items-center text-blue-700 font-bold text-lg">
                <Calendar className="w-5 h-5 mr-2" />
                {item.month}
              </div>
              <div className="mt-2 sm:mt-0 text-xs font-semibold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-1 rounded">
                阶段 {index + 1}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-bold text-slate-700 mb-2 flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  详细进度计划
                </h4>
                <ul className="space-y-2">
                  {item.tasks.map((task, i) => (
                    <li key={i} className="text-slate-600 text-sm leading-relaxed">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                 <h4 className="text-sm font-bold text-slate-700 mb-2 flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                  成果及形式
                </h4>
                <ul className="space-y-2">
                  {item.deliverables.map((del, i) => (
                    <li key={i} className="flex items-start text-slate-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>

                {item.criteria && item.criteria.length > 0 && (
                   <div className="mt-4 pt-4 border-t border-slate-100 bg-red-50/50 -mx-2 p-2 rounded">
                    <h4 className="text-xs font-bold text-red-700 mb-1 flex items-center uppercase">
                      <Flag className="w-3 h-3 mr-1" />
                      验收标准 (KPI)
                    </h4>
                    <ul className="space-y-1">
                      {item.criteria.map((crit, i) => (
                        <li key={i} className="text-red-600/80 text-xs italic">
                          {crit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};