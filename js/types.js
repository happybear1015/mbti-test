const TYPES = {
  INTJ: {
    zh: {
      title: '建筑师',
      desc: 'INTJ 是独立思考的战略家，他们善于制定长期计划并坚定不移地执行。他们理性、果断，追求知识深度，享受将复杂理论系统化的过程。独立自主，对自己和他人都有很高的标准。',
      strengths: ['战略性强，善于制定长远规划','理性客观，不易受情绪干扰','独立思考，不盲从权威','学习能力强，追求知识深度','高标准严要求，追求卓越'],
      weaknesses: ['过于挑剔，对他人要求过高','不擅表达情感，显得冷漠','容易过度分析，陷入完美主义','对无效率的人或事缺乏耐心','社交场合可能显得格格不入'],
      careers: ['科学家 / 研究员','战略顾问','软件架构师 / 工程师','大学教授','金融分析师'],
      famous: ['埃隆·马斯克','马克·扎克伯格','弗里德里希·尼采','克里斯托弗·诺兰']
    },
    en: {
      title: 'Architect',
      desc: 'INTJs are independent strategists who excel at long-term planning and execution. They are rational, decisive, and seek depth of knowledge, enjoying the process of systematizing complex theories. They are self-reliant with high standards for themselves and others.',
      strengths: ['Strategic thinkers with long-term vision','Rational and objective, not easily swayed','Independent thinkers who don\'t follow crowds','Strong learners who seek knowledge depth','High standards and pursuit of excellence'],
      weaknesses: ['Overly critical of others','Struggle to express emotions, appear cold','Prone to overanalysis and perfectionism','Impatient with inefficiency','Can feel out of place in social settings'],
      careers: ['Scientist / Researcher','Strategy Consultant','Software Architect / Engineer','University Professor','Financial Analyst'],
      famous: ['Elon Musk','Mark Zuckerberg','Friedrich Nietzsche','Christopher Nolan']
    }
  },
  INTP: {
    zh: {
      title: '逻辑学家',
      desc: 'INTP 是富有创造力的逻辑学家，对理论和抽象概念有着无尽的好奇心。他们善于分析复杂问题，喜欢探索事物背后的原理和规律。灵活开放，思维跳跃，热衷于智力挑战。',
      strengths: ['强大的逻辑分析能力','创造力丰富，思维灵活','客观公正，不偏不倚','好奇心强，求知欲旺盛','善于解决复杂问题'],
      weaknesses: ['不擅实际操作和执行','对社交规则不敏感','容易分心，难以专注','过于理性的决策风格','情感表达有障碍'],
      careers: ['程序员 / 软件工程师','教授 / 学者','数据分析师','作家 / 哲学家','发明家'],
      famous: ['阿尔伯特·爱因斯坦','比尔·盖茨','勒内·笛卡尔','查尔斯·达尔文']
    },
    en: {
      title: 'Logician',
      desc: 'INTPs are creative logicians with endless curiosity about theories and abstract concepts. They excel at analyzing complex problems and exploring the principles behind things. Flexible and open-minded, they thrive on intellectual challenges.',
      strengths: ['Strong logical analysis skills','Highly creative and flexible thinking','Objective and fair-minded','Intensely curious and求知欲旺盛','Excellent problem solvers'],
      weaknesses: ['Struggle with practical execution','Insensitive to social norms','Easily distracted and unfocused','Overly rational decision-making','Difficulty expressing emotions'],
      careers: ['Programmer / Software Engineer','Professor / Academic','Data Analyst','Writer / Philosopher','Inventor'],
      famous: ['Albert Einstein','Bill Gates','René Descartes','Charles Darwin']
    }
  },
  ENTJ: {
    zh: {
      title: '指挥官',
      desc: 'ENTJ 是天生的领导者，他们果敢、自信、富有远见。他们善于组织协调，能够迅速识别问题并制定有效的解决方案。执行力极强，天生具备带领团队实现目标的能力。',
      strengths: ['天生的领导才能','果断决策，行动力强','远见卓识，战略思维','优秀的组织协调能力','自信坚定，不畏挑战'],
      weaknesses: ['强势专断，不够包容','对他人情绪不够敏感','工作狂倾向','不耐烦和急躁','难以接受批评'],
      careers: ['企业高管 / CEO','项目经理','管理咨询师','律师','创业者'],
      famous: ['史蒂夫·乔布斯','玛格丽特·撒切尔','杰克·韦尔奇','戈登·拉姆齐']
    },
    en: {
      title: 'Commander',
      desc: 'ENTJs are natural-born leaders — bold, confident, and visionary. They excel at organizing, quickly identifying problems and crafting effective solutions. With strong execution skills, they are天生 at leading teams to achieve goals.',
      strengths: ['Natural leadership ability','Decisive with strong执行力','Visionary strategic thinking','Excellent organizational skills','Confident and unafraid of challenges'],
      weaknesses: ['Overbearing and domineering','Insensitive to others\' feelings','Workaholic tendencies','Impatient and急躁','Difficulty accepting criticism'],
      careers: ['Executive / CEO','Project Manager','Management Consultant','Lawyer','Entrepreneur'],
      famous: ['Steve Jobs','Margaret Thatcher','Jack Welch','Gordon Ramsay']
    }
  },
  ENTP: {
    zh: {
      title: '辩手',
      desc: 'ENTP 是聪明机智的辩论家，他们思维敏捷，口才出众。他们享受智力上的交锋，喜欢从不同角度审视问题。充满创意和好奇心，总是渴望探索新的可能性。',
      strengths: ['思维敏捷灵活','出色的口才和辩论能力','创新思维和创意源源不断','适应能力强','善于从多角度看问题'],
      weaknesses: ['好辩好争，容易引发冲突','难以坚持完成长期任务','过于依赖灵感而非规划','容易感到无聊','不注重细节'],
      careers: ['创业家','律师','记者 / 媒体人','产品经理','市场营销专家'],
      famous: ['托马斯·爱迪生','理查德·费曼','马克·吐温','塞缪尔·L·杰克逊']
    },
    en: {
      title: 'Debater',
      desc: 'ENTPs are witty debaters with quick minds and excellent verbal skills. They enjoy intellectual sparring and examining issues from multiple angles. Creative and curious, they are always eager to explore new possibilities.',
      strengths: ['Quick and flexible thinking','Excellent debating and speaking skills','Constant creative ideas','Highly adaptable','See issues from multiple perspectives'],
      weaknesses: ['Argumentative and confrontational','Difficulty completing long-term tasks','Over-reliance on inspiration','Easily bored','Inattentive to details'],
      careers: ['Entrepreneur','Lawyer','Journalist / Media','Product Manager','Marketing Specialist'],
      famous: ['Thomas Edison','Richard Feynman','Mark Twain','Samuel L. Jackson']
    }
  },
  INFJ: {
    zh: {
      title: '提倡者',
      desc: 'INFJ 是富有洞察力和理想主义的提倡者。他们对人性有深刻的理解，真诚关心他人的福祉。拥有远见和使命感，致力于让世界变得更好。安静而有力量，能深度感知他人的情感。',
      strengths: ['深刻的洞察力和同理心','远见卓识，有使命感','善于倾听和理解他人','创意丰富，有艺术天赋','真诚且有原则'],
      weaknesses: ['过于理想主义','容易情绪耗竭','对批评过于敏感','完美主义倾向','不擅处理冲突'],
      careers: ['心理咨询师','作家 / 诗人','教师 / 教育工作者','人力资源经理','非营利组织管理者'],
      famous: ['马丁·路德·金','纳尔逊·曼德拉','甘地','卡尔·荣格']
    },
    en: {
      title: 'Advocate',
      desc: 'INFJs are insightful and idealistic advocates. They have a deep understanding of human nature and genuinely care about others\' well-being. With vision and a sense of purpose, they strive to make the world a better place.',
      strengths: ['Deep insight and empathy','Visionary with a sense of purpose','Excellent listener and understanding','Creative with artistic talent','Sincere and principled'],
      weaknesses: ['Overly idealistic','Prone to emotional burnout','Overly sensitive to criticism','Perfectionist tendencies','Uncomfortable with conflict'],
      careers: ['Counselor / Psychologist','Writer / Poet','Teacher / Educator','HR Manager','Nonprofit Director'],
      famous: ['Martin Luther King Jr.','Nelson Mandela','Mahatma Gandhi','Carl Jung']
    }
  },
  INFP: {
    zh: {
      title: '调停者',
      desc: 'INFP 是内心充满热情的理想主义者。他们有强烈的价值体系和深刻的情感世界。追求真实和意义的他们，总是通过创造和共情来探索自我。温柔而坚定，忠于内心信念。',
      strengths: ['强大的价值观和道德感','创造力丰富','真诚且有同理心','对美和意义有深刻的感知','适应力强，包容开放'],
      weaknesses: ['过于理想化的期望','决策困难','容易陷入自我怀疑','不擅处理实际事务','过度敏感'],
      careers: ['作家 / 编辑','平面设计师','心理咨询师','音乐人 / 艺术家','社会工作者'],
      famous: ['威廉·莎士比亚','J·K·罗琳','文森特·梵高','汤姆·希德勒斯顿']
    },
    en: {
      title: 'Mediator',
      desc: 'INFPs are passionate idealists with strong value systems and deep emotional worlds. Pursuing authenticity and meaning, they explore themselves through creativity and empathy. Gentle yet坚定, they stay true to their inner beliefs.',
      strengths: ['Strong values and moral compass','Highly creative','Sincere and empathetic','Deep appreciation for beauty and meaning','Adaptable and open-minded'],
      weaknesses: ['Overly idealistic expectations','Difficulty making decisions','Prone to self-doubt','Struggle with practical tasks','Overly sensitive'],
      careers: ['Writer / Editor','Graphic Designer','Counselor','Musician / Artist','Social Worker'],
      famous: ['William Shakespeare','J.K. Rowling','Vincent van Gogh','Tom Hiddleston']
    }
  },
  ENFJ: {
    zh: {
      title: '主人公',
      desc: 'ENFJ 是富有魅力的领袖型人格，他们天生善于鼓舞和启发他人。他们对周围人的情感需求非常敏感，热衷于帮助他人成长和实现潜力。热情、负责，是天生的导师和催化剂。',
      strengths: ['出色的沟通和激励能力','极强的同理心和洞察力','热情负责，有感染力','善于培养和成就他人','组织协调能力强'],
      weaknesses: ['过度关注他人而忽略自我','对冲突和负面评价过于敏感','容易过于理想化他人','难以做出艰难决定','过于承担太多责任'],
      careers: ['人力资源总监','培训与发展经理','教师 / 教授','公关经理','心理咨询师'],
      famous: ['奥普拉·温弗瑞','巴拉克·奥巴马','马丁·路德·金','泰勒·斯威夫特']
    },
    en: {
      title: 'Protagonist',
      desc: 'ENFJs are charismatic leaders who naturally inspire and uplift others. They are highly sensitive to others\' emotional needs and passionate about helping people grow and reach their potential. Warm, responsible, and天生的 mentors.',
      strengths: ['Excellent communication and inspiration','Strong empathy and insight','Warm, responsible, and infectious','Excel at developing others','Strong organizational skills'],
      weaknesses: ['Over-focus on others, neglect self','Sensitive to conflict and criticism','Tend to idealize others','Difficulty with tough decisions','Take on too much responsibility'],
      careers: ['HR Director','Training & Development Manager','Teacher / Professor','PR Manager','Counselor'],
      famous: ['Oprah Winfrey','Barack Obama','Martin Luther King Jr.','Taylor Swift']
    }
  },
  ENFP: {
    zh: {
      title: '竞选者',
      desc: 'ENFP 是充满活力的探索者，他们对世界充满热情和好奇心。他们善于发现别人身上的潜力，富有创造力和感染力。社交能力强，思维活跃，总是能看到生活中的无限可能。',
      strengths: ['热情洋溢，充满正能量','创造力丰富，思维发散','优秀的社交能力','善于发现和激励他人','适应变化能力强'],
      weaknesses: ['办事缺乏条理和规划','容易分心和半途而废','过度情绪化','决策困难','过于依赖他人认可'],
      careers: ['创意总监','记者 / 作家','营销策划','心理咨询师','演员 / 艺人'],
      famous: ['罗宾·威廉姆斯','罗伯特·唐尼','昆汀·塔伦蒂诺','艾伦·德杰尼勒斯']
    },
    en: {
      title: 'Campaigner',
      desc: 'ENFPs are energetic explorers passionate about the world and endlessly curious. They excel at seeing potential in others and are highly creative and contagious in their enthusiasm. Social and quick-witted, they see endless possibilities.',
      strengths: ['Warm and enthusiastic','Highly creative with divergent thinking','Excellent social skills','Good at discovering and inspiring others','Adaptable to change'],
      weaknesses: ['Disorganized and unplanned','Easily distracted and inconsistent','Overly emotional','Difficulty making decisions','Over-reliant on others\' approval'],
      careers: ['Creative Director','Journalist / Writer','Marketing Strategist','Counselor','Actor / Performer'],
      famous: ['Robin Williams','Robert Downey Jr.','Quentin Tarantino','Ellen DeGeneres']
    }
  },
  ISTJ: {
    zh: {
      title: '物流师',
      desc: 'ISTJ 是务实可靠的物流师，他们认真负责、注重细节、条理分明。他们恪守承诺，做事一丝不苟，是任何团队中值得信赖的中坚力量。尊重传统和规则，有极强的责任心。',
      strengths: ['可靠尽责，说到做到','注重细节和准确性','条理清晰，组织能力强','有强烈的责任感和职业道德','冷静务实，脚踏实地'],
      weaknesses: ['过于固执，不喜变化','不擅处理抽象概念','对情感表达不自在','容易批判与自己不同的人','工作至上，忽视休闲'],
      careers: ['会计师','审计师','法官 / 律师','项目经理','IT管理员'],
      famous: ['乔治·华盛顿','伊丽莎白二世女王','沃伦·巴菲特','大卫·贝克汉姆']
    },
    en: {
      title: 'Logistician',
      desc: 'ISTJs are practical and reliable logisticians. They are responsible, detail-oriented, and methodical. Keeping their promises and meticulous in their work, they are the dependable backbone of any team.',
      strengths: ['Dependable and responsible','Detail-oriented and accurate','Well-organized and methodical','Strong sense of duty and work ethic','Calm, practical, and grounded'],
      weaknesses: ['Stubborn and resistant to change','Uncomfortable with abstract concepts','Difficulty expressing emotions','Judgmental of differences','Work-centric, neglect leisure'],
      careers: ['Accountant','Auditor','Judge / Lawyer','Project Manager','IT Administrator'],
      famous: ['George Washington','Queen Elizabeth II','Warren Buffett','David Beckham']
    }
  },
  ISFJ: {
    zh: {
      title: '守卫者',
      desc: 'ISFJ 是温柔而坚定的守卫者，他们默默付出，关心他人的需求。他们注重传统和忠诚，用实际行动表达关爱。细心、耐心，总是把别人的需求放在第一位。',
      strengths: ['温柔体贴，关怀他人','可靠尽责，忠诚度高','注重细节，观察力强','耐心细致，有奉献精神','良好的实践能力'],
      weaknesses: ['过于牺牲自我','不擅拒绝他人','对变化适应较慢','容易过度忧虑','不擅表达自己的需求'],
      careers: ['护士 / 医生','教师','社会工作者','行政管理人员','家庭医生'],
      famous: ['特蕾莎修女','凯特·米德尔顿','碧昂丝','汤姆·布雷迪']
    },
    en: {
      title: 'Defender',
      desc: 'ISFJs are gentle and steadfast defenders who quietly care for others\' needs. They value tradition and loyalty, expressing care through actions. Attentive and patient, they always put others\' needs first.',
      strengths: ['Warm and caring toward others','Reliable and loyal','Detail-oriented with strong observation','Patient and dedicated','Strong practical skills'],
      weaknesses: ['Overly self-sacrificing','Difficulty saying no','Slow to adapt to change','Prone to excessive worry','Struggle to express own needs'],
      careers: ['Nurse / Doctor','Teacher','Social Worker','Administrator','Family Doctor'],
      famous: ['Mother Teresa','Kate Middleton','Beyoncé','Tom Brady']
    }
  },
  ESTJ: {
    zh: {
      title: '总经理',
      desc: 'ESTJ 是天生的管理者，他们果敢、高效、有领导力。他们信奉规则和秩序，善于组织和监督执行。务实进取，注重结果，是团队中的执行力担当。',
      strengths: ['高效的执行力和管理能力','果断自信的决策风格','组织能力强，善于规划','责任心强，说到做到','务实进取，注重效率'],
      weaknesses: ['过于强势和固执','对他人情感不够敏感','不接受非传统方式','容易专断独行','工作狂倾向'],
      careers: ['企业管理者','项目经理','公务员','军警人员','银行家'],
      famous: ['亨利·福特','山姆·沃尔顿','米歇尔·奥巴马','杰夫·贝佐斯']
    },
    en: {
      title: 'Executive',
      desc: 'ESTJs are natural managers — bold, efficient, and authoritative. They believe in rules and order, excel at organizing and supervising execution. Practical and driven, they are the执行力 backbone of any team.',
      strengths: ['Efficient execution and management','Decisive and confident','Strong organizational and planning skills','Responsible and reliable','Practical and效率-driven'],
      weaknesses: ['Overly assertive and stubborn','Insensitive to others\' feelings','Dismissive of unconventional approaches','Can be domineering','Workaholic tendencies'],
      careers: ['Business Manager','Project Manager','Civil Servant','Police / Military','Banker'],
      famous: ['Henry Ford','Sam Walton','Michelle Obama','Jeff Bezos']
    }
  },
  ESFJ: {
    zh: {
      title: '执政官',
      desc: 'ESFJ 是热情友善的执政官，他们关心他人，乐于助人。他们重视和谐与合作，善于营造温馨的团队氛围。社交能力强，责任心重，是团队中的凝聚剂。',
      strengths: ['热情友善，平易近人','社交能力强，人缘好','责任心重，可靠可信','组织策划能力出色','善于关注他人的需求'],
      weaknesses: ['过于在意他人看法','难以接受批评','过度依赖外部认可','对不同意见缺乏包容','容易过度劳累'],
      careers: ['人力资源专员','教师','护士','活动策划','客户服务经理'],
      famous: ['比尔·克林顿','珍妮弗·加纳','泰勒斯威夫特','休·杰克曼']
    },
    en: {
      title: 'Consul',
      desc: 'ESFJs are warm and friendly consuls who care about others and love to help. They value harmony and cooperation, creating a warm team atmosphere. Socially skilled and responsible, they are the glue that holds teams together.',
      strengths: ['Warm, friendly, and approachable','Strong social skills','Responsible and reliable','Excellent planning and organizing','Attentive to others\' needs'],
      weaknesses: ['Overly concerned with others\' opinions','Difficulty accepting criticism','Over-reliant on external validation','Intolerant of differing views','Prone to overexertion'],
      careers: ['HR Specialist','Teacher','Nurse','Event Planner','Customer Service Manager'],
      famous: ['Bill Clinton','Jennifer Garner','Taylor Swift','Hugh Jackman']
    }
  },
  ISTP: {
    zh: {
      title: '鉴赏家',
      desc: 'ISTP 是冷静实用的鉴赏家，他们善于动手操作，喜欢探索事物的工作原理。独立自主，灵活应变，在危机情况下能保持冷静并迅速行动。务实、好奇、不喜束缚。',
      strengths: ['强大的动手和实践能力','危机时刻冷静果断','善于分析和解决问题','独立自主，适应力强','学习新技能快'],
      weaknesses: ['不擅表达情感','容易感到无聊','对长期承诺感到困难','过于注重当下','不遵循规则和流程'],
      careers: ['工程师 / 技师','飞行员','外科医生','运动员','自由职业者'],
      famous: ['李小龙','克林特·伊斯特伍德','汤姆·克鲁斯','贝尔·格里尔斯']
    },
    en: {
      title: 'Virtuoso',
      desc: 'ISTPs are cool and practical virtuosos who excel at hands-on work and exploring how things work. Independent and adaptable, they stay calm and act quickly in crisis situations. Practical, curious, and freedom-loving.',
      strengths: ['Strong hands-on and practical skills','Calm and decisive in crises','Excellent analytical and problem-solving','Independent and adaptable','Quick to learn new skills'],
      weaknesses: ['Difficulty expressing emotions','Easily bored','Struggle with long-term commitments','Overly focused on the present','Disregard for rules and procedures'],
      careers: ['Engineer / Technician','Pilot','Surgeon','Athlete','Freelancer'],
      famous: ['Bruce Lee','Clint Eastwood','Tom Cruise','Bear Grylls']
    }
  },
  ISFP: {
    zh: {
      title: '探险家',
      desc: 'ISFP 是温柔敏感的探险家，他们通过行动和感受来探索世界。他们有着丰富的内心世界和审美感知力，珍视自由和真实。安静而迷人，用自己的节奏生活。',
      strengths: ['出色的审美和艺术感知力','温柔善良，富有同理心','灵活开放，适应力强','重视真实和本真','观察力敏锐'],
      weaknesses: ['决策困难','过于谦逊低调','对批评过度敏感','不擅长远规划','容易被他人的需求左右'],
      careers: ['设计师','音乐人 / 艺术家','摄影师','心理咨询师','户外向导'],
      famous: ['迈克尔·杰克逊','约翰尼·德普','奥黛丽·赫本','鲍勃·迪伦']
    },
    en: {
      title: 'Adventurer',
      desc: 'ISFPs are gentle and sensitive adventurers who explore the world through action and feeling. With a rich inner world and aesthetic sensibility, they value freedom and authenticity. Quietly charming, they live at their own pace.',
      strengths: ['Excellent aesthetic and artistic sense','Gentle, kind, and empathetic','Flexible, open, and adaptable','Value authenticity and genuineness','Keen observation skills'],
      weaknesses: ['Difficulty making decisions','Overly modest and low-key','Overly sensitive to criticism','Poor long-term planning','Easily swayed by others\' needs'],
      careers: ['Designer','Musician / Artist','Photographer','Counselor','Outdoor Guide'],
      famous: ['Michael Jackson','Johnny Depp','Audrey Hepburn','Bob Dylan']
    }
  },
  ESTP: {
    zh: {
      title: '企业家',
      desc: 'ESTP 是精力充沛的企业家，他们行动力强、善于交际、热衷于冒险。他们活在当下，享受刺激和挑战。敏锐的观察力和出色的应变能力使他们善于抓住机会。',
      strengths: ['行动力强，做事高效','出色的社交和说服力','随机应变能力强','勇于冒险和尝试','敏锐的商机嗅觉'],
      weaknesses: ['缺乏长远规划','容易感到无聊和焦躁','不遵守规则和约束','过于直率，不够委婉','不喜欢理论和抽象概念'],
      careers: ['创业者','销售总监','房地产经纪人','股票交易员','记者'],
      famous: ['唐纳德·特朗普','厄内斯特·海明威','麦当娜','杰克·尼科尔森']
    },
    en: {
      title: 'Entrepreneur',
      desc: 'ESTPs are energetic entrepreneurs — action-oriented, social, and adventurous. They live in the moment and thrive on excitement and挑战. With sharp observation and adaptability, they excel at seizing opportunities.',
      strengths: ['Action-oriented and efficient','Excellent social and persuasive skills','Highly adaptable and resourceful','Bold and willing to take risks','Keen business sense'],
      weaknesses: ['Lack of long-term planning','Easily bored and restless','Disregard for rules and constraints','Overly blunt and direct','Dislike theory and abstract concepts'],
      careers: ['Entrepreneur','Sales Director','Real Estate Agent','Stock Trader','Journalist'],
      famous: ['Donald Trump','Ernest Hemingway','Madonna','Jack Nicholson']
    }
  },
  ESFP: {
    zh: {
      title: '表演者',
      desc: 'ESFP 是充满魅力的表演者，他们热情开朗，是聚会中的焦点。他们善于与人互动，享受将快乐带给身边的人。活在当下，热爱生活，是真正的享乐主义者。',
      strengths: ['热情开朗，感染力强','出色的社交和沟通能力','善于活跃气氛','乐观积极','对新体验持开放态度'],
      weaknesses: ['缺乏长期规划','容易冲动行事','对批评敏感','不擅处理负面情绪','过于在意表面形象'],
      careers: ['演员 / 艺人','旅行博主','活动策划师','销售代表','主持人'],
      famous: ['玛丽莲·梦露','埃尔维斯·普雷斯利','威尔·史密斯','小罗伯特·唐尼']
    },
    en: {
      title: 'Performer',
      desc: 'ESFPs are charismatic performers — warm, outgoing, and the center of attention at any gathering. They excel at interacting with people and love bringing joy to those around them. Living in the moment, they are true hedonists.',
      strengths: ['Warm, outgoing, and infectious','Excellent social and communication skills','Great at livening up the atmosphere','Optimistic and positive','Open to new experiences'],
      weaknesses: ['Lack of long-term planning','Impulsive decision-making','Sensitive to criticism','Poor at handling negative emotions','Overly concerned with appearances'],
      careers: ['Actor / Performer','Travel Blogger','Event Planner','Sales Representative','TV Host'],
      famous: ['Marilyn Monroe','Elvis Presley','Will Smith','Robert Downey Jr.']
    }
  }
};