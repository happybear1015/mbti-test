const Storage = {
  getHistory() {
    try {
      return JSON.parse(localStorage.getItem('mbti_history')) || [];
    } catch { return []; }
  },
  saveHistory(history) {
    localStorage.setItem('mbti_history', JSON.stringify(history));
  },
  addRecord(result) {
    const history = this.getHistory();
    history.unshift({
      type: result.type,
      scores: result.scores,
      date: new Date().toISOString(),
      id: Date.now().toString(36)
    });
    if (history.length > 10) history.pop();
    this.saveHistory(history);
    return history;
  },
  clearHistory() {
    localStorage.removeItem('mbti_history');
  },
  getProgress() {
    try {
      const d = JSON.parse(localStorage.getItem('mbti_progress'));
      if (d && d.answers && typeof d.currentQ === 'number') return d;
      return null;
    } catch { return null; }
  },
  saveProgress(answers, currentQ) {
    localStorage.setItem('mbti_progress', JSON.stringify({ answers, currentQ }));
  },
  clearProgress() {
    localStorage.removeItem('mbti_progress');
  }
};