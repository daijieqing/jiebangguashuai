
import { TeamMember, TimelineItem, ProjectSection, ResearchModule, MarketMetric, OutlookItem, PromotionRecord, SalesLead } from './types';

export const PROJECT_TITLE = "项目管理智能化体系 - 智能辅助评审可行性论证";

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "马良",
    role: "课题负责人",
    description: "统筹课题整体推进，协调各方资源，把控课题质量与方向，确保形成完整、可落地的项目管理智能化体系解决方案。"
  },
  {
    name: "戴洁清",
    role: "课题组成员",
    description: "整理业务痛点，进行课题有关规划设计和业务可行性落地，输出相关业务解决方案。",
    // Please replace this URL with the actual path to the uploaded photo if needed.
    // Using a professional placeholder for now to demonstrate layout.
  },
  {
    name: "解鹏",
    role: "课题组成员",
    description: "进行课题的技术可行性研究，保障方案的技术落地，配合输出技术部分的方案。"
  }
];

export const BACKGROUND_INFO: ProjectSection = {
  id: "background",
  title: "1. 课题背景与痛点分析",
  content: "随着信息技术飞速发展，政务信息化项目数量和规模不断攀升，传统项目管理模式愈发难以适应当前复杂多变的需求。本课题针对当前项目管理中的三大核心环节痛点进行深入研究：",
  listItems: [
    "评审环节痛点：过度依赖专家经验，评审标准难以统一；信息不对称导致专家难以全面了解项目细节，造成评审效率低、质量参差不齐。",
    "建设一致性痛点：项目申报内容、招标采购内容与实际建设内容常出现不一致，导致“规划与建设”两张皮，纠正成本高昂，且面临审计合规风险。",
    "绩效评估痛点：传统评估多采用定性分析，缺乏精准的定量指标和科学的分析模型，数据采集滞后，难以真实反映项目的实际价值与最终效益。"
  ]
};

export const PROBLEM_DEFINITION: ProjectSection = {
  id: "goal",
  title: "1.2 课题建设目标",
  content: "本课题旨在构建AI辅助评审系统，通过智能化手段自动识别项目申报材料中的关键风险点，为评审专家提供精准的风险提示和辅助决策支持，实现评审工作的标准化、规范化和高效化。"
};

export const RESEARCH_MODULES: ResearchModule[] = [
  {
    id: "module-1",
    title: "智能辅助评审",
    iconName: "Brain",
    problem: "过度依赖专家经验，评审标准难以统一；信息不对称导致专家难以全面了解项目细节，造成评审效率低、质量参差不齐。",
    solution: "构建AI辅助评审系统，自动识别风险点，提供精准提示和辅助决策，实现评审标准化、规范化，确保合规性与一致性。",
    status: "可行性论证完成",
    details: {
      feasibility: {
        technical: "利用 Dify 框架进行低代码工作流编排，可大幅降低开发成本并加速迭代。核心能力依托 DeepSeek/通义千问 等高性能大模型，结合 Milvus 向量数据库构建 RAG（检索增强生成） 架构，有效解决模型幻觉，确保评审依据溯源精准。",
        business: "系统定位为“辅助决策工具”，不替代专家判断。聚焦合规性硬指标筛查，与专家关注重点高度一致，能显著减少重复劳动，专家使用意愿高。",
        implementation: "采用“模块化分步推进”策略。依托现有政务云环境，无需额外硬件。轻量级实施，预计3-5个月完成从数据准备到功能验证的全流程部署。",
        economic: "主要投入在AI模型开发与接口对接，硬件成本低。建成后大幅缩短评审周期，节省专家工时，实现“小投入、大产出”的经济效果，符合“节俭高效”原则。"
      },
      solutionOverview: {
        architecture: "采用“智能体层-业务防腐层-应用层”三层解耦架构。智能体层作为“大脑”负责推理；防腐层作为“翻译官”清洗数据并隔离技术变更；应用层作为“交互窗口”提供人机协作界面。",
        coreFlows: [
          "数据准备流程：自动接入历史项目库、负面清单库、统建清单库，完成标准化处理。",
          "智能比对流程：AI系统对申报材料进行自动解析，与各类清单库进行多维度比对，识别潜在风险点。",
          "风险提示流程：系统自动标记风险点，生成结构化的风险提示报告，突出显示需专家重点关注的内容。",
          "专家辅助流程：专家在评审过程中可随时调取AI提供的风险分析结果，快速定位问题，提高评审效率和准确性。"
        ]
      },
      techStack: ["LLM (DeepSeek)", "NLP (Apache Tika)", "Microservices", "Data Mining"],
      demoContent: {
        screenTitle: "AI 智能辅助评审报告 - 2025市政务云二期",
        
        // TODO: 在此处替换为您实际的演示系统链接 (Module 1: 辅助评审)
        demoLink: "https://test.sdyypm.icu/", 
        
        alertCount: 4,
        items: [
          { label: "负面清单比对", value: "风险 (高)", status: "error", detail: "检测到“楼堂馆所”相关非信息化建设内容，违反负面清单规定。" },
          { label: "统建清单核查", value: "重复建设", status: "warning", detail: "“统一身份认证”模块属于省统建范围，建议纳入统一建设，无需单独申报。" },
          { label: "历史项目查重", value: "相似度 82%", status: "warning", detail: "与2023年“智慧社区”项目技术方案高度雷同，未说明复用原因。" },
          { label: "信创合规检查", value: "通过", status: "success", detail: "服务器与数据库选型符合最新信创目录要求。" }
        ]
      },
      demoVisualColor: "bg-blue-600",
      nextSteps: [
        "数据基础建设：优先完成负面清单库、统建清单库、历史项目库的构建与标准化处理。",
        "智能比对模型开发：基于DeepSeek大模型能力，开发合规性检查模型，完成关键功能的原型设计。",
        "系统接口对接：完成与项目管理系统、采购平台等系统的数据接口开发，确保申报材料和数据库的自动对接。",
        "试点应用与优化：选取3-5个典型政务信息化项目进行实际应用验证，收集专家反馈，持续优化系统功能和比对规则。"
      ]
    }
  },
  {
    id: "module-2",
    title: "项目建设偏差分析",
    iconName: "GitCompare",
    problem: "项目申报、招标与实际建设内容“三张皮”。规划内容与实际建设出现偏差，导致纠正成本高昂，甚至面临审计风险。",
    solution: "构建智能化偏差分析能力，自动化比对“申报-批复-招标”三类文档。在招标前预警实质性偏离，确保全过程一致性，避免资源浪费。",
    status: "业务规划阶段",
    details: {
      feasibility: {
        technical: "利用 OCR与文档解析技术 将非结构化文档（PDF/Word）转化为机器可读数据。核心采用 RAG（检索增强生成） 结合 Text2SQL 技术，既能进行语义层面的条款比对，又能将关键参数（如金额、数量）转化为结构化数据进行精准校验。配合提示词工程，指导AI模拟审计专家的逻辑，逐条核对“申报-批复-招标”的实质性内容，有效识别隐蔽偏差，将纠错前置，大幅降低审计风险。",
        business: "直击“投不对标、建不对版”的管理痛点。功能嵌入项目审批与招标流程，作为现有管理手段的技术补充。用户单位付费意愿高，具备推广应用的现实条件。",
        implementation: "采用模块化设计，复用现有政务云资源。核心通过API调用，无需大规模硬件投入。文档采集对接现有项目管理系统，实施周期短，对业务流程影响小。",
        economic: "基于开源模型接口，无需昂贵商业授权。软硬件投入低，研发周期短。能有效规避审计风险和资金浪费，实现“低成本投入、高价值产出”的经济效益。"
      },
      solutionOverview: {
        architecture: "构建“核心稽核引擎 - 语义对齐与隔离 - 业务应用层”的三层架构。核心引擎编排智能体工作流，通过RAG跨文档校验；语义层建立映射机制，封装Prompt逻辑；应用层嵌入流程，提供发标拦截与审计底稿。",
        coreFlows: [
          "多源文档接入：自动采集申报方案、批复文件、招标文件，进行格式标准化与OCR处理。",
          "关键要素抽取：利用NLP提取功能模块、技术指标（如并发数）、交付物清单、时间节点及责任主体。",
          "智能比对检测：结合语义分析与规则引擎，自动比对“申报vs批复”及“批复vs招标”，识别功能增删或指标篡改。",
          "预警与闭环：生成差异分析报告，分级预警（高/中/低风险），支持一键派发整改任务，形成管理闭环。"
        ]
      },
      techStack: ["LLM (DeepSeek)", "NLP (Entity Extraction)", "Rule Engine", "OCR"],
      demoContent: {
        screenTitle: "一致性核查报告 - 智慧城市大脑一期",
        
        // TODO: 在此处替换为您实际的演示系统链接 (Module 2: 偏差分析)
       // demoLink: "https://www.google.com",
        
        alertCount: 3,
        items: [
          { label: "功能模块比对", value: "缺失", status: "error", detail: "批复文件包含“电子证照管理”模块，但招标文件未包含此内容。" },
          { label: "技术指标核查", value: "降级", status: "warning", detail: "批复要求“并发用户数≥1000”，招标参数仅为“≥500”，存在实质性偏离。" },
          { label: "交付物一致性", value: "不符", status: "warning", detail: "申报方案承诺提供“详细设计说明书”，招标要求仅为“概要设计文档”。" },
          { label: "时间节点检查", value: "一致", status: "success", detail: "系统上线时间节点符合批复要求。" }
        ]
      },
      demoVisualColor: "bg-purple-600",
      nextSteps: [
        "智能体搭建：基于“扣子空间”平台构建偏差分析智能体，完成核心逻辑框架。",
        "数据测试与调优：利用脱敏后的历史项目数据进行模型测试，提升比对准确率。",
        "标准化接口开发：生成比对分析API，确保与政务云环境安全兼容。",
        "平台整合与交互：将功能集成至政务项目管理平台，开发可视化预警与整改闭环功能。"
      ]
    }
  },
  {
    id: "module-3",
    title: "项目绩效评价体系",
    iconName: "BarChart",
    problem: "传统评估多采用定性分析，缺乏精准的定量指标和科学的分析模型，数据采集滞后，难以真实反映项目的实际价值与最终效益。",
    solution: "构建“投入-过程-产出-影响”四维动态指标库，打通多源数据自动采集，利用大模型生成深度报告，实现从“事后评估”向“过程优化”转变。",
    status: "业务规划阶段",
    details: {
      feasibility: {
        technical: "依托成熟的数据集成与API网关技术，能够无侵入地打通多源异构系统，实现全链路数据的自动化采集与清洗。核心构建动态指标计算引擎，支撑复杂模型运算。应用层利用大模型的数据分析能力，基于结构化数据生成动态图表，结合历史基线进行趋势预测与归因分析，一键生成包含深度评估报告，确保评价的科学性与时效性。",
        business: "与现有管理流程高度契合，自动采集显著减少人工负担。动态指标库满足“一项目一指标”的精细化管理趋势。系统定位为辅助决策工具，不替代人工判断，符合管理实际。",
        implementation: "利用现有政务信息化基础设施，无需大规模重构。采用“试点先行、逐步推广”策略，选取3-5个典型项目验证。界面简洁直观，实施难度低，培训成本可控。",
        economic: "主要投入在应用开发，硬件成本低。自动化分析功能将大幅提升效率，减少因评估不准确导致的决策失误和资源浪费，实现“小投入、大产出”，符合节俭高效原则。"
      },
      solutionOverview: {
        architecture: "构建“指标采集与数据融合 - 指标计算与模型构建 - 智能辅助分析与决策”纵向数据价值链架构。数据层接入多源数据解决孤岛；计算层灵活配置权重与模型；决策层利用AI深度归因分析。",
        coreFlows: [
          "数据采集与整合：自动对接大数据平台及业务系统，进行清洗、标准化和逻辑校验。",
          "指标计算与评估：基于“投入-过程-产出-影响”动态指标库，自动计算绩效值并生成初步结果。",
          "深度分析与预警：进行多维度关联分析（如投入vs产出）和趋势预测，自动识别异常并触发预警。",
          "智能报告与决策：利用大模型智能体生成包含关键发现、问题诊断和改进建议的专业分析报告。"
        ]
      },
      techStack: ["LLM Agent (DeepSeek)", "API Gateway", "Data Analysis", "Dynamic Indicator Lib"],
      demoContent: {
        screenTitle: "智能绩效诊断报告 - 一网通办二期",
        
        // TODO: 在此处替换为您实际的演示系统链接 (Module 3: 绩效评价)
        demoLink: "https://jxpj.sdyypm.icu/",
        
        alertCount: 2,
        items: [
          { label: "投入产出维度", value: "正常", status: "success", detail: "预算执行率 85%，资源利用率达标，投入产出比 1:4.2。" },
          { label: "过程质量维度", value: "风险", status: "warning", detail: "进度符合率偏差 -5%，系统分析显示需求变更频繁是主要原因。" },
          { label: "社会影响维度", value: "优秀", status: "success", detail: "用户满意度 92分，跨部门业务协同效率提升 30%。" },
          { label: "智能改进建议", value: "需关注", status: "warning", detail: "建议优化需求变更流程，并关注后续模块的资源预留。" }
        ]
      },
      demoVisualColor: "bg-emerald-600",
      nextSteps: [
        "智能体研究：基于DeepSeek搭建智能分析报告生成逻辑框架，实现结构化报告自动转换。",
        "功能开发与接口对接：完成与项目管理系统、政务服务平台等外部数据的接口开发与测试。",
        "试点测试与调优：选取3-5个典型政务信息化项目进行部署验证，持续优化分析模型。"
      ]
    }
  }
];

// Updated Market Metrics based on real data (260+200+300+100 = 860万)
export const MARKET_METRICS: MarketMetric[] = [
  {
    label: "预计落地与储备总额",
    value: "860万",
    subtext: "包含已确认的商机及高意向线索总额",
    trend: 'up'
  },
  {
    label: "高意向客户覆盖",
    value: "9家",
    subtext: "山东省局、黑龙江省中心、银川市局等",
    trend: 'up'
  },
  {
    label: "重点跟进线索",
    value: "4个",
    subtext: "包含省局四期、济南二期等大项目",
    trend: 'stable'
  }
];

export const PROMOTION_RECORDS: PromotionRecord[] = [
  {
    client: "山东省大数据局",
    contact: "马主任",
    method: "现场汇报",
    date: "经常",
    feedback: "客户本次对智能化很重视，本次四期升级列了11个模型服务。",
    status: "正在财评"
  },
  {
    client: "黑龙江省政务大数据中心",
    contact: "沙处长",
    method: "现场汇报",
    date: "2025年8月",
    feedback: "客户对项目查重、智能问答等智能化功能非常感兴趣，正在推进中。",
    status: "推进中"
  },
  {
    client: "银川市数据局",
    contact: "王科长",
    method: "现场汇报",
    date: "2025年4月",
    feedback: "客户对项目查重、智能问答等智能化功能感兴趣。",
    status: "初步意向"
  },
  {
    client: "济南市大数据局",
    contact: "彭处长",
    method: "现场汇报",
    date: "经常",
    feedback: "客户对模型场景感兴趣，已经给申报了26年项目。",
    status: "项目申报中"
  },
  {
    client: "内蒙乌海大数据局",
    contact: "中间人",
    method: "线上汇报",
    date: "2025年10月",
    feedback: "客户对方案智能审核、智能查重、智能问答等智能化功能很感兴趣，目前项目处于初设中。",
    status: "项目初设中"
  },
  {
    client: "潍坊市大数据局",
    contact: "朱科长",
    method: "现场汇报",
    date: "2025年10月",
    feedback: "客户对模型场景感兴趣，咱们的升级项目未验收，客户想法是等项目验收后，产品有成熟的模型能力后，进行26年项目追加。",
    status: "待追加"
  },
  {
    client: "滨州市大数据局",
    contact: "李科长",
    method: "现场汇报",
    date: "2025年11月",
    feedback: "省审计厅明年要对滨州进行审计，明年不会安排大项目，大模型能力要等等。",
    status: "暂缓"
  },
  {
    client: "滨州市财政局",
    contact: "周主任",
    method: "现场汇报",
    date: "2025年11月",
    feedback: "客户对我们的一些模型能力有兴趣，等省四期完成模型能力打造后，可以进行演示汇报。",
    status: "待演示"
  },
  {
    client: "菏泽市大数据局",
    contact: "张科长",
    method: "现场汇报",
    date: "2025年6月",
    feedback: "客户侧对大模型有意向，但今年没有相关资金，等局长安排。",
    status: "待定"
  }
];

export const SALES_LEADS: SalesLead[] = [
  {
    name: "省大数据局政务信息化项目管理系统四期",
    isAI: true,
    type: "商机",
    owner: "李波",
    department: "省直大区",
    client: "山东省大数据中心",
    amount: 260
  },
  {
    name: "济南市IDrS二期建设项目",
    isAI: true,
    type: "线索",
    owner: "曾凡阳",
    department: "鲁东大区",
    client: "济南市大数据局",
    amount: 200
  },
  {
    name: "黑龙江省政务信息化建设项目管理系统",
    isAI: true,
    type: "线索",
    owner: "焦学敏",
    department: "营销省外",
    client: "黑龙江省政务大数据中心",
    amount: 300
  },
  {
    name: "银川市数据局项目管理系统",
    isAI: true,
    type: "线索",
    owner: "侯海战",
    department: "营销省外",
    client: "中国联合网络通信有限公司银川市分公司",
    amount: 100
  }
];

export const OUTLOOK_DATA: OutlookItem[] = [
  {
    title: "AI智能化应用深度探索",
    description: "实现了对DeepSeek等垂直大模型的深度研究，攻克了公文解析、RAG检索增强等技术难题，完成了从理论到技术原型的实质性突破。",
    type: "harvest",
    icon: "Cpu"
  },
  {
    title: "驱动多场景落地探索",
    description: "不拘泥于课题既定范围，在与客户深度沟通中主动挖掘业务痛点，拓展了“项目过程风险识别”、“功能点智能拆分”等更多高价值落地场景，持续验证智能化技术的泛化潜力。",
    type: "harvest",
    icon: "Globe"
  },
  {
    title: "标准化知识资产沉淀",
    description: "形成了标准化的智能化应用宣传材料、技术白皮书及实施方法论，构建了可复制的知识库，实现了知识资产的高效输出与传播。",
    type: "harvest",
    icon: "BookOpen"
  },
  {
    title: "试点先行，抛砖引玉",
    description: "以当前的辅助评审、一致性分析等功能为切入点，在省级及重点地市进行深度试点，打磨出经得起实战检验的标杆案例。",
    type: "future",
    icon: "Milestone"
  },
  {
    title: "场景矩阵全面扩展",
    description: "并不止步于此，计划将智能化能力扩展至“立项决策辅助、监理文档自动核查、资金风险审计”等更多高频场景，构建全链条智能防护网。",
    type: "future",
    icon: "Expand"
  },
  {
    title: "从“概念汇报”走向“实战演示”",
    description: "转变推广策略，从单纯的方案汇报向“实机功能演示”进阶。通过高频次的现场交互演示，直观展示模型能力，加速市场认知与商机转化。",
    type: "future",
    icon: "Presentation"
  }
];

export const GOALS: ProjectSection[] = [
  {
    id: "overall-goal",
    title: "总体目标",
    content: "本课题旨在通过深度调研与技术论证，构建一套完整、可落地的项目管理智能化体系解决方案。同时输出相关痛点调研、可行性论证及解决方案报告，并致力于达成以下建设目标与业绩指标：",
    listItems: [
        "体系构建：形成一套完整、可落地的项目管理智能化体系解决方案。",
        "成果输出：输出相关痛点调研分析材料、可行性论证和解决方案等报告。",
        "业绩指标 (达成其一)：① 支撑400万落单项目； ② 储备1000万以上市场机会，完成至少3个有效线索的支撑； ③ 课题成果获省级奖项或入选国家标杆案例集（表彰）。"
    ]
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    month: "2025年6月底",
    tasks: ["进行业务痛点的调研和分析"],
    deliverables: ["业务痛点分析调研报告"]
  },
  {
    month: "7月底",
    tasks: ["结合前期市场调研情况，进行AI辅助评审和项目建设偏差分析的业务和技术可行性论证"],
    deliverables: ["AI辅助评审初版方案", "建设偏差分析初版方案"]
  },
  {
    month: "8月底",
    tasks: ["结合前期市场调研情况，进行项目绩效生态体系的业务和技术可行性论证"],
    deliverables: ["项目绩效生态体系初版方案"]
  },
  {
    month: "9月底",
    tasks: ["进行市场推广，并根据市场反馈情况进行方案优化"],
    deliverables: ["智能化体系解决方案终版", "智能辅助评审可行性论证报告"]
  },
  {
    month: "10月底",
    tasks: ["对省内进行市场推广，挖掘潜在项目线索"],
    deliverables: ["市场推广反馈表", "项目线索清单"],
  },
  {
    month: "11月底",
    tasks: ["对省内外进行市场推广，完成最终成果验收"],
    deliverables: ["课题研究资料集汇总文档", "落地项目或商机线索确认"],
    criteria: [
      "【达成以下任一指标即可】",
      "1. 至少完成400万落单项目；",
      "2. 或储备1000万以上市场机会，完成至少3个有效线索的支撑；",
      "3. 达到国内先进水平，课题成果获省级奖项或入选国家标杆案例集。"
    ]
  }
];
