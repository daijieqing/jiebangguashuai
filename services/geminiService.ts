
import { GoogleGenAI } from "@google/genai";
import { PROJECT_TITLE, TEAM_MEMBERS, BACKGROUND_INFO, PROBLEM_DEFINITION, GOALS, TIMELINE_DATA, RESEARCH_MODULES, MARKET_METRICS } from '../constants';

// Construct a rich context string for the AI
const getProjectContext = () => {
  const teamStr = TEAM_MEMBERS.map(m => `- ${m.name} (${m.role}): ${m.description}`).join('\n');
  
  const modulesStr = RESEARCH_MODULES.map(m => 
    `Module: ${m.title}
     Problem Solved: ${m.problem}
     Solution Approach: ${m.solution}
     Current Status: ${m.status}
     
     Feasibility Analysis:
     - Technical: ${m.details.feasibility.technical}
     - Business: ${m.details.feasibility.business}
     - Economic: ${m.details.feasibility.economic}
     - Implementation: ${m.details.feasibility.implementation}
     
     Next Steps: ${m.details.nextSteps ? m.details.nextSteps.join(', ') : 'N/A'}`
  ).join('\n\n');

  const marketStr = MARKET_METRICS.map(m => `- ${m.label}: Target ${m.value} (${m.subtext})`).join('\n');

  const timelineStr = TIMELINE_DATA.map(t => 
    `- ${t.month}: Tasks: ${t.tasks.join(', ')}. Deliverables: ${t.deliverables.join(', ')}. ${t.criteria ? `Criteria: ${t.criteria.join(', ')}` : ''}`
  ).join('\n');

  const backgroundDetails = BACKGROUND_INFO.listItems 
    ? BACKGROUND_INFO.listItems.join('\n') 
    : '';

  return `
    You are an intelligent assistant dedicated to the project "${PROJECT_TITLE}".
    Your goal is to answer questions about the project based strictly on the following information.
    
    === PROJECT OVERVIEW ===
    Title: ${PROJECT_TITLE}
    
    === TEAM ===
    ${teamStr}
    
    === BACKGROUND & PAIN POINTS ===
    ${BACKGROUND_INFO.content}
    Detailed Pain Points:
    ${backgroundDetails}
    ${PROBLEM_DEFINITION.content}
    
    === CORE RESEARCH MODULES (The 3 Sub-functions) ===
    ${modulesStr}
    
    === MARKET GOALS & VALUE ===
    ${marketStr}
    
    === OVERALL GOAL ===
    ${GOALS[0].content}
    
    === TIMELINE ===
    ${timelineStr}
    
    === INSTRUCTIONS ===
    - Answer concisely and professionally.
    - If asked about the "three sub-functions" or "modules", refer to the Core Research Modules section.
    - If asked about market value or KPI, refer to the Market Goals.
    - Use Markdown for formatting.
    - If asked about feasibility, distinguish between Technical, Business, and Economic aspects.
  `;
};

export const generateProjectAnswer = async (userQuestion: string): Promise<string> => {
  try {
    // 标准写法：使用 VITE_ 前缀和 import.meta.env
const ai = new GoogleGenAI({ 
  apiKey: import.meta.env.VITE_API_KEY || '' 
});
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuestion,
      config: {
        systemInstruction: getProjectContext(),
        temperature: 0.3,
      }
    });

    return response.text || "I apologize, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I am having trouble connecting to the knowledge base right now. Please verify your API Key.";
  }
};
