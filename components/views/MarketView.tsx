
import React from 'react';
import { MarketSection } from '../MarketSection';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  MessageSquareQuote, 
  CircleDollarSign,
  User,
  Sparkles,
  Globe2
} from 'lucide-react';
import { PROMOTION_RECORDS, SALES_LEADS } from '../../constants';

export const MarketView: React.FC = () => {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">市场价值与落地</h2>
        <p className="text-slate-500">商业转化数据与业务赋能情况</p>
      </div>

      <MarketSection />

      {/* Changed grid-cols-2 to flex-col for top-bottom layout */}
      <div className="flex flex-col gap-8">
        
        {/* Top Section: Sales Opportunities (Table) */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col">
           <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-slate-50 to-white rounded-t-2xl">
              <div className="flex items-center gap-2">
                 <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                   <CircleDollarSign className="w-5 h-5" />
                 </div>
                 <h3 className="font-bold text-slate-800 text-lg">重点商机与线索</h3>
              </div>
              <span className="text-xs font-semibold bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-100">
                 合计: {SALES_LEADS.reduce((acc, curr) => acc + curr.amount, 0)}万
              </span>
           </div>
           
           <div className="overflow-x-auto p-2">
             <table className="w-full text-sm text-left">
               <thead className="text-xs text-slate-500 uppercase bg-slate-50/50">
                 <tr>
                   <th className="px-6 py-4 font-medium">项目名称</th>
                   <th className="px-6 py-4 font-medium text-center">类型</th>
                   <th className="px-6 py-4 font-medium">客户</th>
                   <th className="px-6 py-4 font-medium text-right">金额(万)</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                 {SALES_LEADS.map((lead, index) => (
                   <tr key={index} className="hover:bg-slate-50 transition-colors group">
                     <td className="px-6 py-4">
                       <div className="font-bold text-slate-700 text-base group-hover:text-blue-600 transition-colors">{lead.name}</div>
                       <div className="flex items-center gap-2 mt-1.5">
                          <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded flex items-center">
                            <User className="w-3 h-3 mr-1" /> {lead.owner}
                          </span>
                          {lead.isAI && (
                            <span className="text-xs text-purple-600 bg-purple-50 px-2 py-0.5 rounded flex items-center border border-purple-100">
                               <Sparkles className="w-3 h-3 mr-1" /> 大模型
                            </span>
                          )}
                       </div>
                     </td>
                     <td className="px-6 py-4 text-center">
                       <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                         lead.type === '商机' 
                           ? 'bg-blue-50 text-blue-600 border-blue-100' 
                           : 'bg-slate-50 text-slate-500 border-slate-100'
                       }`}>
                         {lead.type}
                       </span>
                     </td>
                     <td className="px-6 py-4 text-slate-600">
                        <div className="flex items-center gap-2">
                           <Building2 className="w-4 h-4 text-slate-400" />
                           {lead.client}
                        </div>
                     </td>
                     <td className="px-6 py-4 text-right font-bold text-slate-700 text-lg">
                       {lead.amount}
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </div>

        {/* Bottom Section: Promotion Records (List) */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col">
           <div className="p-6 border-b border-slate-100 flex items-center gap-2 bg-gradient-to-r from-slate-50 to-white rounded-t-2xl">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-800 text-lg">重点客户推广实录</h3>
           </div>
           
           {/* Since it's full width now, we can use a grid for the cards to make better use of space */}
           <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {PROMOTION_RECORDS.map((record, index) => {
                 const isHighPriority = record.status.includes('财评') || record.status.includes('申报') || record.status.includes('推进');
                 return (
                  <div key={index} className={`p-5 rounded-xl border transition-all hover:shadow-md flex flex-col justify-between ${isHighPriority ? 'bg-blue-50/30 border-blue-100' : 'bg-white border-slate-100'}`}>
                      <div>
                        <div className="flex justify-between items-start mb-3">
                           <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-bold text-slate-800 text-base">{record.client}</span>
                           </div>
                        </div>

                        <div className="flex items-center gap-2 mb-3 text-xs text-slate-500">
                            <span className="bg-slate-50 px-2 py-0.5 rounded border border-slate-100 flex items-center">
                               <User className="w-3 h-3 mr-1" /> {record.contact}
                            </span>
                             <span className="bg-slate-50 px-2 py-0.5 rounded border border-slate-100 flex items-center">
                               <Calendar className="w-3 h-3 mr-1" /> {record.date}
                            </span>
                        </div>
                        
                        <div className="flex items-start gap-2 mb-4 bg-slate-50/50 p-3 rounded-lg">
                           <MessageSquareQuote className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                           <p className="text-sm text-slate-600 leading-snug">
                              {record.feedback}
                           </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-slate-100/50">
                         <span className="text-xs text-slate-400 flex items-center">
                            <Globe2 className="w-3 h-3 mr-1" /> {record.method}
                         </span>
                         <span className={`text-xs font-bold px-2 py-1 rounded ${
                            isHighPriority 
                            ? 'bg-blue-100 text-blue-700' 
                            : 'bg-slate-100 text-slate-500'
                         }`}>
                            {record.status}
                         </span>
                      </div>
                  </div>
                 );
              })}
           </div>
        </div>

      </div>
    </div>
  );
};
