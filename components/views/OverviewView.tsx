
import React from 'react';
import { BookOpen, Users, Target, CalendarDays, CheckCircle2 } from 'lucide-react';
import { BACKGROUND_INFO, TEAM_MEMBERS, GOALS, TIMELINE_DATA } from '../../constants';
import { Timeline } from '../Timeline';

export const OverviewView: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">项目概览</h2>
        <p className="text-slate-500">研究背景、团队架构与整体推进计划</p>
      </div>

      {/* Background & Goals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">{BACKGROUND_INFO.title}</h3>
          </div>
          <div className="text-slate-600 text-sm leading-relaxed text-justify space-y-4 flex-grow">
            <p>{BACKGROUND_INFO.content}</p>
            {BACKGROUND_INFO.listItems && (
              <ul className="space-y-3 mt-2">
                {BACKGROUND_INFO.listItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 bg-slate-50 p-2 rounded border border-slate-100">
                    <span className="min-w-[6px] h-[6px] rounded-full bg-indigo-400 mt-1.5 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 bg-rose-100 text-rose-600 rounded-lg">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">{GOALS[0].title}</h3>
          </div>
          <div className="text-slate-600 leading-relaxed text-justify text-sm flex-grow">
            <p>{GOALS[0].content}</p>
            {GOALS[0].listItems && (
              <ul className="space-y-3 mt-4">
                {GOALS[0].listItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Team */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-slate-800">核心团队</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <div 
              key={index} 
              className={`group p-5 rounded-xl border transition-all duration-300 hover:shadow-lg ${
                member.role.includes("负责人") 
                  ? "bg-gradient-to-br from-blue-50 to-white border-blue-200 relative overflow-hidden" 
                  : "bg-white border-slate-100"
              }`}
            >
              {member.role.includes("负责人") && (
                 <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] px-2 py-1 rounded-bl-lg font-medium">
                   Leader
                 </div>
              )}
              <div className="flex items-center gap-4 mb-3">
                <div className="flex-shrink-0 relative w-14 h-14">
                  {/* Default Text Avatar - Hidden on hover only if image exists */}
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold transition-opacity duration-300 ${
                    member.role.includes("负责人") ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-500"
                  } ${member.imageUrl ? 'group-hover:opacity-0' : ''}`}>
                    {member.name.charAt(0)}
                  </div>
                  
                  {/* Hover Image Avatar - Shown on hover */}
                  {member.imageUrl && (
                    <img 
                      src={member.imageUrl} 
                      alt={member.name} 
                      className="absolute inset-0 w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                    />
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{member.name}</h4>
                  <p className="text-xs text-blue-600 font-medium">{member.role}</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
            <CalendarDays className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-slate-800">实施计划路线图</h3>
        </div>
        <Timeline data={TIMELINE_DATA} />
      </div>
    </div>
  );
};
