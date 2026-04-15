import { useState, useEffect } from 'react';
import { Droplet, Plus, Trash2, TrendingUp, AlertCircle } from 'lucide-react';

function Dashboard() {
  const [waterIntake, setWaterIntake] = useState(0);
  const [target, setTarget] = useState(3000);
  const [history, setHistory] = useState([]);
  const [customAmount, setCustomAmount] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  // Load data from localStorage on startup
  useEffect(() => {
    const savedHistory = localStorage.getItem('waterHistory');
    const savedTarget = localStorage.getItem('waterTarget');
    const savedIntake = localStorage.getItem('waterIntake');
    
    if (savedHistory) setHistory(JSON.parse(savedHistory));
    if (savedTarget) setTarget(parseInt(savedTarget));
    if (savedIntake) setWaterIntake(parseInt(savedIntake));
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('waterHistory', JSON.stringify(history));
    localStorage.setItem('waterTarget', target);
    localStorage.setItem('waterIntake', waterIntake);
  }, [history, target, waterIntake]);

  // Check if target reached
  useEffect(() => {
    if (waterIntake >= target && target > 0 && waterIntake > 0) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  }, [waterIntake, target]);

  // Add water
  const addWater = (amount) => {
    const newTotal = waterIntake + amount;
    setWaterIntake(newTotal);
    
    const newEntry = {
      id: Date.now(),
      amount: amount,
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString()
    };
    setHistory([newEntry, ...history]);
  };

  // Delete entry
  const deleteEntry = (id) => {
    const entry = history.find(h => h.id === id);
    if (entry) {
      setWaterIntake(waterIntake - entry.amount);
      setHistory(history.filter(h => h.id !== id));
    }
  };

  // Reset today
  const resetToday = () => {
    setWaterIntake(0);
    setHistory([]);
  };

  // Calculate progress percentage
  const progressPercent = Math.min((waterIntake / target) * 100, 100);

  return (
    <div className="dashboard-page">
      {/* Alert when goal reached */}
      {showAlert && (
        <div className="alert">
          <AlertCircle size={20} />
          <span>🎉 Congratulations! You've reached your daily water goal! 🎉</span>
        </div>
      )}

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <Droplet size={24} color="#4facfe" />
          <h3>Today's Intake</h3>
          <div className="stat-value">{waterIntake} <span>ml</span></div>
        </div>
        <div className="stat-card">
          <TrendingUp size={24} color="#4facfe" />
          <h3>Daily Target</h3>
          <div className="stat-value">{target} <span>ml</span></div>
        </div>
        <div className="stat-card">
          <h3>Remaining</h3>
          <div className="stat-value">{Math.max(target - waterIntake, 0)} <span>ml</span></div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="progress-section">
        <div className="progress-label">
          <span>Progress</span>
          <span>{Math.round(progressPercent)}%</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
        </div>
      </div>

      {/* Quick Add Buttons */}
      <div className="quick-add">
        <h3>Quick Add</h3>
        <div className="button-group">
          <button onClick={() => addWater(200)} className="btn-water">🥤 200ml</button>
          <button onClick={() => addWater(500)} className="btn-water">🍾 500ml</button>
          <button onClick={() => addWater(1000)} className="btn-water">🧴 1000ml</button>
        </div>
        
        <div className="custom-add">
          <input 
            type="number" 
            placeholder="Enter custom amount (ml)"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
          />
          <button 
            onClick={() => {
              if (customAmount > 0) {
                addWater(parseInt(customAmount));
                setCustomAmount('');
              }
            }} 
            className="btn-custom"
          >
            <Plus size={18} /> Add
          </button>
        </div>
      </div>

      {/* Target Settings */}
      <div className="target-section">
        <h3>🎯 Set Daily Target</h3>
        <div className="target-controls">
          <button onClick={() => setTarget(Math.max(500, target - 500))}>-500ml</button>
          <span>{target} ml</span>
          <button onClick={() => setTarget(target + 500)}>+500ml</button>
        </div>
      </div>

      {/* Reset Button */}
      <button onClick={resetToday} className="btn-reset">Reset Today</button>

      {/* History Section */}
      <div className="history-section">
        <h3>📋 Today's History</h3>
        {history.length === 0 ? (
          <p className="empty-history">No entries yet. Start adding water! 💧</p>
        ) : (
          <div className="history-list">
            {history.map(entry => (
              <div key={entry.id} className="history-item">
                <div className="history-info">
                  <span className="history-time">{entry.time}</span>
                  <span className="history-amount">+{entry.amount} ml</span>
                </div>
                <button onClick={() => deleteEntry(entry.id)} className="delete-btn">
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Tip of the Day */}
      <div className="tip-card">
        <p>💡 <strong>Tip:</strong> Drink a glass of water every hour to stay on track!</p>
      </div>
    </div>
  );
}

export default Dashboard;