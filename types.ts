
export interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageUrl?: string; // Optional image URL for team member photo
}

export interface TimelineItem {
  month: string;
  tasks: string[];
  deliverables: string[];
  criteria?: string[]; // Optional acceptance criteria
}

export interface ProjectSection {
  id: string;
  title: string;
  content?: string;
  listItems?: string[];
}

// Detailed feasibility analysis
export interface FeasibilityDetail {
  technical: string;    // 2.1 技术可行性
  business: string;     // 2.2 业务可行性
  economic: string;     // 2.4 经济可行性
  implementation: string; // 2.3 实施可行性
}

// Solution Overview structure
export interface SolutionDetail {
  architecture: string; // 3.1.1 总体架构
  coreFlows: string[];  // 3.1.2 核心流程
}

// Rich demo content
export interface DemoContent {
  screenTitle: string;
  alertCount: number;
  demoLink?: string; // Changed from videoUrl to demoLink
  items: {
    label: string;
    value: string;
    status: 'normal' | 'warning' | 'error' | 'success';
    detail?: string;
  }[];
}

export interface AchievementDetail {
  feasibility: FeasibilityDetail; 
  solutionOverview: SolutionDetail; // Added this field
  techStack: string[];
  demoContent: DemoContent; 
  demoVisualColor: string; 
  nextSteps?: string[];
}

export interface ResearchModule {
  id: string;
  title: string;
  iconName: 'Brain' | 'GitCompare' | 'BarChart';
  problem: string;
  solution: string; // Short summary
  status: string;
  details: AchievementDetail;
}

export interface MarketMetric {
  label: string;
  value: string;
  subtext: string;
  trend: 'up' | 'stable';
}

export interface OutlookItem {
  title: string;
  description: string;
  type: 'harvest' | 'future';
  icon: 'Trophy' | 'Rocket' | 'Cpu' | 'Globe' | 'Database' | 'Milestone' | 'Expand' | 'Presentation' | 'BookOpen';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

// New Types for Detailed Market Data
export interface PromotionRecord {
  client: string;
  contact: string; // 联系人 (e.g., 王科长)
  method: string;  // 推广方式 (e.g., 现场汇报)
  date: string;    // 汇报时间
  feedback: string;
  status: string;  // 备注/状态 (e.g., 项目初设中)
}

export interface SalesLead {
  name: string;    // 线索或商机名称
  isAI: boolean;   // 是否涉及大模型
  type: '商机' | '线索';
  owner: string;   // 负责人
  department: string; // 部门名称
  client: string;  // 客户
  amount: number;  // 金额 (万元)
}