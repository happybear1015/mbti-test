const I18N = {
  lang: 'zh',
  t: {},
  init() {
    this.t = this.data[this.lang];
    return this;
  },
  switch(lang) {
    this.lang = lang;
    this.t = this.data[lang];
    document.querySelector('html').lang = lang === 'zh' ? 'zh-CN' : 'en';
    localStorage.setItem('mbti_lang', lang);
    App.renderCurrentScreen();
  },
  updateUI() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (this.t[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = this.t[key];
        } else {
          el.innerHTML = this.t[key];
        }
      }
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const attrs = el.dataset.i18nAttr.split(';');
      attrs.forEach(attr => {
        const [prop, key] = attr.split(':');
        if (this.t[key]) el.setAttribute(prop, this.t[key]);
      });
    });
    const langBtn = document.getElementById('langBtn');
    if (langBtn) langBtn.textContent = this.lang === 'zh' ? 'EN' : '中';
  },
  tKey(key) {
    return this.t[key] || key;
  },
  data: {
    zh: {
      site_title: 'MBTI 人格类型测试',
      welcome_title: '发现你的人格类型',
      welcome_sub: '通过72道精心设计的题目，全面分析你的性格偏好，了解真实的自己。',
      questions_count: '72 道精选题目',
      questions_desc: '覆盖4个维度，全面分析',
      minutes: '约 10-12 分钟',
      minutes_desc: '无需注册，完全免费',
      dims_count: '4 个维度',
      dims_desc: 'E/I · S/N · T/F · J/P',
      start_btn: '开始测试',
      next_btn: '下一题',
      prev_btn: '上一题',
      complete_btn: '查看结果',
      question_of: '第 {n} 题，共 72 题',
      result_title: '你的人格类型是',
      dimension_ei: '内外向',
      dimension_sn: '实感/直觉',
      dimension_tf: '理性/情感',
      dimension_jp: '判断/感知',
      dim_e: '外向 E',
      dim_i: '内向 I',
      dim_s: '实感 S',
      dim_n: '直觉 N',
      dim_t: '理性 T',
      dim_f: '情感 F',
      dim_j: '判断 J',
      dim_p: '感知 P',
      strengths: '优势',
      weaknesses: '劣势',
      careers: '适合职业',
      famous: '代表人物',
      history_title: '测试历史',
      history_empty: '暂无测试记录，开始你的第一次测试吧！',
      share_btn: '分享结果',
      share_text_btn: '复制结果',
      share_img_btn: '下载图片',
      retake_btn: '重新测试',
      copied: '已复制到剪贴板！',
      image_downloaded: '图片已生成！',
      modal_clear_title: '清空历史',
      modal_clear_text: '确定要清空所有测试记录吗？此操作不可恢复。',
      modal_cancel: '取消',
      modal_confirm: '确定',
      clear_history: '清空记录',
      option_1: '非常不同意',
      option_2: '不同意',
      option_3: '中立',
      option_4: '同意',
      option_5: '非常同意',
      loading: '加载中...',
    },
    en: {
      site_title: 'MBTI Personality Test',
      welcome_title: 'Discover Your Personality Type',
      welcome_sub: '72 carefully designed questions to analyze your personality preferences across 4 dimensions. Know your true self.',
      questions_count: '72 Questions',
      questions_desc: 'Covering all 4 dimensions',
      minutes: '10-12 min',
      minutes_desc: 'No registration, completely free',
      dims_count: '4 Dimensions',
      dims_desc: 'E/I · S/N · T/F · J/P',
      start_btn: 'Start Test',
      next_btn: 'Next',
      prev_btn: 'Previous',
      complete_btn: 'See Results',
      question_of: 'Question {n} of 72',
      result_title: 'Your Personality Type Is',
      dimension_ei: 'E/I',
      dimension_sn: 'S/N',
      dimension_tf: 'T/F',
      dimension_jp: 'J/P',
      dim_e: 'E Extraverted',
      dim_i: 'I Introverted',
      dim_s: 'S Sensing',
      dim_n: 'N Intuitive',
      dim_t: 'T Thinking',
      dim_f: 'F Feeling',
      dim_j: 'J Judging',
      dim_p: 'P Perceiving',
      strengths: 'Strengths',
      weaknesses: 'Weaknesses',
      careers: 'Career Paths',
      famous: 'Famous People',
      history_title: 'Test History',
      history_empty: 'No test records yet. Take your first test!',
      share_btn: 'Share',
      share_text_btn: 'Copy Results',
      share_img_btn: 'Download Image',
      retake_btn: 'Retake Test',
      copied: 'Copied to clipboard!',
      image_downloaded: 'Image generated!',
      modal_clear_title: 'Clear History',
      modal_clear_text: 'Are you sure you want to clear all test records? This cannot be undone.',
      modal_cancel: 'Cancel',
      modal_confirm: 'Confirm',
      clear_history: 'Clear Records',
      option_1: 'Strongly Disagree',
      option_2: 'Disagree',
      option_3: 'Neutral',
      option_4: 'Agree',
      option_5: 'Strongly Agree',
      loading: 'Loading...',
    }
  }
};
I18N.init();