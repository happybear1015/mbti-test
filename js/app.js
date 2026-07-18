const App = {
  state: {
    screen: 'welcome',
    answers: {},
    currentQ: 0,
    result: null
  },
  DIMS: ['EI','SN','TF','JP'],

  init() {
    const savedLang = localStorage.getItem('mbti_lang');
    if (savedLang && savedLang !== I18N.lang) I18N.switch(savedLang);
    const hash = window.location.hash.slice(1);
    if (hash && hash.startsWith('share=')) {
      this.showSharedResult(hash.replace('share=', ''));
    } else {
      this.showWelcome();
    }
    window.addEventListener('beforeunload', () => {
      if (this.state.screen === 'test') {
        Storage.saveProgress(this.state.answers, this.state.currentQ);
      }
    });
  },

  renderCurrentScreen() {
    switch (this.state.screen) {
      case 'welcome': this.showWelcome(); break;
      case 'test': this.renderQuestion(); break;
      case 'result': this.showResult(); break;
    }
  },

  showWelcome() {
    this.state.screen = 'welcome';
    this.state.result = null;
    const app = document.getElementById('app');
    const t = I18N.t;
    const lang = I18N.lang;
    const hCount = Storage.getHistory().length;
    const hText = hCount > 0 ? hCount + ' ' + (lang === 'zh' ? '次记录' : 'records') : (lang === 'zh' ? '暂无记录' : 'No records');
    const progress = Storage.getProgress();
    const answeredCount = progress ? Object.keys(progress.answers).length : 0;

    let btnHtml;
    if (progress) {
      btnHtml = `
        <button class="btn-primary" onclick="App.resumeTest()" style="margin-bottom:10px">${t.resume_btn}</button>
        <div style="font-size:0.8rem;color:var(--text-secondary);margin-bottom:16px">${t.resume_desc.replace('{n}', answeredCount)}</div>
        <button class="btn-secondary" onclick="App.startTest()">${t.new_test_btn}</button>
      `;
    } else {
      btnHtml = `<button class="btn-primary" onclick="App.startTest()" data-i18n="start_btn">${t.start_btn}</button>`;
    }

    app.innerHTML = `
      <div class="app-header">
        <div class="app-logo" data-i18n="site_title">${t.site_title}</div>
        <button class="lang-btn" id="langBtn" onclick="I18N.switch('${lang === 'zh' ? 'en' : 'zh'}')">${lang === 'zh' ? 'EN' : '中'}</button>
      </div>
      <div class="screen active">
        <div class="welcome">
          <span class="welcome-icon">🧠</span>
          <h1 data-i18n="welcome_title">${t.welcome_title}</h1>
          <p class="subtitle" data-i18n="welcome_sub">${t.welcome_sub}</p>
          <div class="info-cards">
            <div class="info-card">
              <div class="card-label" data-i18n="questions_count">${t.questions_count}</div>
              <div class="card-value" data-i18n="questions_desc">${t.questions_desc}</div>
            </div>
            <div class="info-card">
              <div class="card-label" data-i18n="minutes">${t.minutes}</div>
              <div class="card-value" data-i18n="minutes_desc">${t.minutes_desc}</div>
            </div>
            <div class="info-card">
              <div class="card-label" data-i18n="dims_count">${t.dims_count}</div>
              <div class="card-value" data-i18n="dims_desc">${t.dims_desc}</div>
            </div>
            <div class="info-card" onclick="App.showHistory()" style="cursor:pointer">
              <div class="card-label" data-i18n="history_title">${t.history_title}</div>
              <div class="card-value">${hText}</div>
            </div>
          </div>
          ${btnHtml}
        </div>
      </div>
    `;
    this.renderHistoryList();
  },

  startTest() {
    Storage.clearProgress();
    this.state.screen = 'test';
    this.state.answers = {};
    this.state.currentQ = 0;
    this.renderQuestion();
  },

  resumeTest() {
    const progress = Storage.getProgress();
    if (!progress) { this.showWelcome(); return; }
    this.state.screen = 'test';
    this.state.answers = progress.answers || {};
    this.state.currentQ = progress.currentQ || 0;
    this.renderQuestion();
  },

  renderQuestion() {
    if (this.state.currentQ >= QUESTIONS.length) {
      this.completeTest();
      return;
    }
    const q = QUESTIONS[this.state.currentQ];
    const index = this.state.currentQ;
    const total = QUESTIONS.length;
    const t = I18N.t;
    const lang = I18N.lang;
    const selected = this.state.answers[q.id];
    const dimLabel = lang === 'zh'
      ? { EI:'内外向', SN:'实感/直觉', TF:'理性/情感', JP:'判断/感知' }[q.dim]
      : q.dim;
    const progress = ((index + 1) / total) * 100;
    const labels = [t.option_1, t.option_2, t.option_3, t.option_4, t.option_5];

    let optionsHtml = '';
    for (let i = 1; i <= 5; i++) {
      optionsHtml += `<div class="option ${selected === i ? 'selected' : ''}" onclick="App.selectAnswer(${q.id}, ${i})"><div class="radio"></div><span>${labels[i-1]}</span></div>`;
    }

    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="app-header">
        <div class="app-logo" data-i18n="site_title">${t.site_title}</div>
        <button class="lang-btn" id="langBtn" onclick="I18N.switch('${lang === 'zh' ? 'en' : 'zh'}')">${lang === 'zh' ? 'EN' : '中'}</button>
      </div>
      <div class="screen active">
        <div class="test-header">
          <span class="test-counter">${t.question_of.replace('{n}', index + 1)}</span>
          <span class="test-counter">${Math.round(progress)}%</span>
        </div>
        <div class="progress-bar"><div class="progress-fill" style="width:${progress}%"></div></div>
        <div class="question-card">
          <span class="question-dimension">${dimLabel}</span>
          <div class="question-text">${lang === 'zh' ? q.zh : q.en}</div>
          <div class="options">${optionsHtml}</div>
        </div>
        <div class="test-nav" style="min-height:48px">
          <button class="btn-secondary" onclick="App.prevQuestion()" ${index === 0 ? 'style="visibility:hidden"' : ''}>${t.prev_btn}</button>
        </div>
      </div>
    `;
  },

  selectAnswer(qId, value) {
    this.state.answers[qId] = value;
    Storage.saveProgress(this.state.answers, this.state.currentQ);

    const opts = document.querySelectorAll('.option');
    opts.forEach(opt => opt.classList.remove('selected'));
    if (opts[value - 1]) opts[value - 1].classList.add('selected');

    this.nextQuestion();
  },

  nextQuestion() {
    const q = QUESTIONS[this.state.currentQ];
    if (!this.state.answers[q.id]) return;
    if (this.state.currentQ >= QUESTIONS.length - 1) {
      this.completeTest();
    } else {
      this.state.currentQ++;
      this.renderQuestion();
    }
  },

  prevQuestion() {
    if (this.state.currentQ > 0) {
      this.state.currentQ--;
      this.renderQuestion();
    }
  },

  completeTest() {
    Storage.clearProgress();

    const dimScores = {};
    const dimCounts = {};
    this.DIMS.forEach(d => { dimScores[d] = 0; dimCounts[d] = 0; });

    QUESTIONS.forEach(q => {
      const answer = this.state.answers[q.id];
      if (!answer) return;
      const score = q.dir === 1 ? answer : 6 - answer;
      dimScores[q.dim] += score;
      dimCounts[q.dim]++;
    });

    const scores = {};
    this.DIMS.forEach(d => {
      const avg = dimScores[d] / dimCounts[d];
      scores[d] = { pct: Math.round(((avg - 1) / 4) * 100) };
    });

    let type = '';
    if (scores.EI.pct >= 50) type += 'E'; else type += 'I';
    if (scores.SN.pct >= 50) type += 'S'; else type += 'N';
    if (scores.TF.pct >= 50) type += 'T'; else type += 'F';
    if (scores.JP.pct >= 50) type += 'J'; else type += 'P';

    this.state.screen = 'result';
    this.state.result = { type, scores, date: new Date().toISOString() };
    Storage.addRecord(this.state.result);
    this.showResult();
  },

  showResult(sharedData) {
    const result = sharedData || this.state.result;
    if (!result) return;
    const { type, scores } = result;
    const t = I18N.t;
    const lang = I18N.lang;
    const typeData = TYPES[type];
    if (!typeData) return;
    const info = typeData[lang];
    const dimOrder = [
      { key: 'EI', left: t.dim_e, right: t.dim_i },
      { key: 'SN', left: t.dim_s, right: t.dim_n },
      { key: 'TF', left: t.dim_t, right: t.dim_f },
      { key: 'JP', left: t.dim_j, right: t.dim_p },
    ];

    let dimBars = '';
    dimOrder.forEach(({ key, left, right }) => {
      const pct = scores[key] ? scores[key].pct : 50;
      dimBars += `
        <div class="dim-bar">
          <div class="dim-bar-header">
            <span class="dim-bar-label">${t['dimension_' + key.toLowerCase()]}</span>
            <span class="dim-bar-pct">${pct}%</span>
          </div>
          <div class="dim-bar-track"><div class="dim-bar-fill" style="width:${pct}%"></div></div>
          <div class="dim-labels"><span>${left}</span><span>${right}</span></div>
        </div>`;
    });

    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="app-header">
        <div class="app-logo" onclick="App.showWelcome()" style="cursor:pointer" data-i18n="site_title">${t.site_title}</div>
        <button class="lang-btn" id="langBtn" onclick="I18N.switch('${lang === 'zh' ? 'en' : 'zh'}')">${lang === 'zh' ? 'EN' : '中'}</button>
      </div>
      <div class="screen active">
        <div class="result-header">
          <p style="font-size:0.9rem;color:var(--text-secondary);margin-bottom:12px" data-i18n="result_title">${t.result_title}</p>
          <div class="result-badge"><span class="result-type">${type}</span><span class="result-title">${info.title}</span></div>
        </div>
        <div class="result-description">${info.desc}</div>
        <div class="dimension-bars">${dimBars}</div>
        <div class="detail-section">
          <h3>${t.strengths}</h3>
          <ul>${info.strengths.map(s => '<li>'+s+'</li>').join('')}</ul>
        </div>
        <div class="detail-section">
          <h3>${t.weaknesses}</h3>
          <ul>${info.weaknesses.map(s => '<li>'+s+'</li>').join('')}</ul>
        </div>
        <div class="detail-section">
          <h3>${t.careers}</h3>
          <ul>${info.careers.map(s => '<li>'+s+'</li>').join('')}</ul>
        </div>
        <div class="detail-section" style="margin-bottom:8px">
          <h3>${t.famous}</h3>
          <ul>${info.famous.map(s => '<li>'+s+'</li>').join('')}</ul>
        </div>
        <div class="result-actions">
          <button class="btn-primary btn-sm" onclick="App.shareText()" data-i18n="share_text_btn">${t.share_text_btn}</button>
          <button class="btn-primary btn-sm" onclick="App.shareImage()" data-i18n="share_img_btn">${t.share_img_btn}</button>
          <button class="btn-secondary btn-sm" onclick="App.startTest()" data-i18n="retake_btn">${t.retake_btn}</button>
        </div>
        ${this.getHistoryHtml()}
      </div>
    `;
  },

  shareText() {
    const result = this.state.result;
    if (!result) return;
    const lang = I18N.lang;
    const info = TYPES[result.type][lang];
    const url = window.location.origin + window.location.pathname + '#share=' + this.encodeResult(result);
    const text = lang === 'zh'
      ? `我的 MBTI 人格类型是 ${result.type}（${info.title}）！来测测你的类型：${url}`
      : `My MBTI personality type is ${result.type} (${info.title})! Take the test: ${url}`;
    navigator.clipboard.writeText(text).then(() => this.showToast(I18N.t.copied)).catch(() => {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      this.showToast(I18N.t.copied);
    });
  },

  shareImage() {
    if (typeof html2canvas === 'undefined') {
      this.showToast(I18N.lang === 'zh' ? '加载中，请稍候...' : 'Loading, please wait...');
      return;
    }
    const result = this.state.result;
    if (!result) return;
    const { type, scores } = result;
    const lang = I18N.lang;
    const info = TYPES[type][lang];
    const dims = [
      { l: lang === 'zh' ? 'E 外向' : 'E', r: lang === 'zh' ? 'I 内向' : 'I', p: scores.EI ? scores.EI.pct : 50 },
      { l: lang === 'zh' ? 'S 实感' : 'S', r: lang === 'zh' ? 'N 直觉' : 'N', p: scores.SN ? scores.SN.pct : 50 },
      { l: lang === 'zh' ? 'T 理性' : 'T', r: lang === 'zh' ? 'F 情感' : 'F', p: scores.TF ? scores.TF.pct : 50 },
      { l: lang === 'zh' ? 'J 判断' : 'J', r: lang === 'zh' ? 'P 感知' : 'P', p: scores.JP ? scores.JP.pct : 50 },
    ];
    const dimsHtml = dims.map(d => `
      <div style="margin-bottom:8px">
        <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:2px">
          <span style="font-weight:${d.p >= 50 ? '700' : '400'}">${d.l} ${d.p}%</span>
          <span style="font-weight:${d.p < 50 ? '700' : '400'}">${d.r} ${100-d.p}%</span>
        </div>
        <div style="height:6px;background:rgba(255,255,255,0.3);border-radius:3px;overflow:hidden">
          <div style="height:100%;width:${d.p}%;background:#fff;border-radius:3px"></div>
        </div>
      </div>
    `).join('');

    const card = document.createElement('div');
    card.className = 'share-card';
    card.innerHTML = `
      <div style="font-size:12px;opacity:0.8;margin-bottom:8px">MBTI Personality Test</div>
      <div class="s-type">${type}</div>
      <div class="s-title">${info.title}</div>
      <div style="margin:16px 0;padding:0 20px;text-align:left">${dimsHtml}</div>
      <div style="font-size:11px;opacity:0.6;margin-top:8px">${window.location.origin}</div>
    `;
    document.body.appendChild(card);

    html2canvas(card, { scale: 2, backgroundColor: null, useCORS: true }).then(canvas => {
      document.body.removeChild(card);
      const link = document.createElement('a');
      link.download = `MBTI_${type}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      this.showToast(I18N.t.image_downloaded);
    }).catch(() => {
      document.body.removeChild(card);
      this.showToast(I18N.lang === 'zh' ? '生成图片失败' : 'Failed to generate image');
    });
  },

  encodeResult(result) {
    const data = { t: result.type, s: {} };
    Object.keys(result.scores).forEach(k => { data.s[k] = result.scores[k].pct; });
    try { return btoa(encodeURIComponent(JSON.stringify(data))); } catch { return ''; }
  },

  decodeResult(hash) {
    try {
      const data = JSON.parse(decodeURIComponent(atob(hash)));
      const scores = {};
      Object.keys(data.s).forEach(k => { scores[k] = { pct: data.s[k] }; });
      return { type: data.t, scores };
    } catch { return null; }
  },

  showSharedResult(hash) {
    const data = this.decodeResult(hash);
    if (data && TYPES[data.type]) {
      this.state.screen = 'result';
      this.state.result = data;
      this.showResult(data);
    } else {
      this.showWelcome();
    }
  },

  showHistory() {
    const history = Storage.getHistory();
    if (history.length === 0) {
      this.showToast(I18N.t.history_empty);
      return;
    }
    const existing = document.querySelector('.history-section');
    if (existing) existing.remove();
    const section = this.createHistoryElement();
    const historyCard = document.querySelector('.info-card:last-child');
    if (historyCard) {
      historyCard.parentNode.insertBefore(section, historyCard.nextSibling);
    } else {
      document.getElementById('app').appendChild(section);
    }
  },

  showHistoryResult(index) {
    const history = Storage.getHistory();
    if (history[index]) {
      this.state.screen = 'result';
      this.state.result = history[index];
      this.showResult();
    }
  },

  clearHistory() {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay show';
    overlay.onclick = function(e) { if (e.target === this) document.body.removeChild(this); };
    overlay.innerHTML = `
      <div class="modal">
        <h3>${I18N.t.modal_clear_title}</h3>
        <p>${I18N.t.modal_clear_text}</p>
        <div class="modal-actions">
          <button class="btn-secondary btn-sm" onclick="this.closest('.modal-overlay').remove()">${I18N.t.modal_cancel}</button>
          <button class="btn-primary btn-sm" onclick="App.confirmClear()">${I18N.t.modal_confirm}</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);
  },

  confirmClear() {
    Storage.clearHistory();
    document.querySelector('.modal-overlay')?.remove();
    this.showWelcome();
    this.showToast(I18N.lang === 'zh' ? '已清空所有记录' : 'All records cleared');
  },

  renderHistoryList() {
    const history = Storage.getHistory();
    if (history.length === 0) return;
    const existing = document.querySelector('.history-section');
    if (existing) existing.remove();
    const section = this.createHistoryElement();
    document.getElementById('app').appendChild(section);
  },

  getHistoryHtml() {
    const history = Storage.getHistory();
    if (history.length === 0) return '';
    const t = I18N.t;
    const lang = I18N.lang;
    const items = history.map((h, i) => {
      const info = TYPES[h.type];
      const title = info ? info[lang].title : h.type;
      const date = new Date(h.date).toLocaleDateString(lang === 'zh' ? 'zh-CN' : 'en-US');
      return `<div class="history-item" onclick="App.showHistoryResult(${i})"><div><span class="h-type">${h.type}</span><span class="h-title">${title}</span></div><span class="h-date">${date}</span></div>`;
    }).join('');
    return `<div class="history-section"><h3>📋 ${t.history_title}<span style="flex:1"></span><button class="btn-secondary btn-sm" onclick="App.clearHistory()" style="font-size:0.8rem">${t.clear_history}</button></h3>${items}</div>`;
  },

  createHistoryElement() {
    const history = Storage.getHistory();
    const t = I18N.t;
    const lang = I18N.lang;
    const items = history.map((h, i) => {
      const info = TYPES[h.type];
      const title = info ? info[lang].title : h.type;
      const date = new Date(h.date).toLocaleDateString(lang === 'zh' ? 'zh-CN' : 'en-US');
      return `<div class="history-item" onclick="App.showHistoryResult(${i})"><div><span class="h-type">${h.type}</span><span class="h-title">${title}</span></div><span class="h-date">${date}</span></div>`;
    }).join('');
    const section = document.createElement('div');
    section.className = 'history-section';
    section.innerHTML = `<h3>📋 ${t.history_title}<span style="flex:1"></span><button class="btn-secondary btn-sm" onclick="App.clearHistory()" style="font-size:0.8rem">${t.clear_history}</button></h3>${items}`;
    return section;
  },

  showToast(msg) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());