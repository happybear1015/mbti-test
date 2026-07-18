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
  }
};