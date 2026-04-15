import { useState, useEffect } from 'react';
import { Calendar, TrendingUp, Award, Droplet, BarChart3, Activity } from 'lucide-react';

function Reports() {
  const [weeklyData, setWeeklyData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);
  const [totalIntake, setTotalIntake] = useState(0);
  const [avgIntake, setAvgIntake] = useState(0);
  const [bestDay, setBestDay] = useState({ day: '', intake: 0 });
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    // Load data from localStorage
    const savedHistory = localStorage.getItem('waterHistory');
    const savedTarget = localStorage.getItem('waterTarget');
    const target = savedTarget ? parseInt(savedTarget) : 3000;
    
    if (savedHistory) {
      const history = JSON.parse(savedHistory);
      
      // Calculate weekly data (last 7 days)
      const last7Days = [];
      for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dayStr = date.toLocaleDateString();
        const dayIntake = history
          .filter(h => new Date(h.id).toLocaleDateString() === dayStr)
          .reduce((sum, h) => sum + h.amount, 0);
        
        last7Days.push({
          day: date.toLocaleDateString('en-US', { weekday: 'short' }),
          fullDate: dayStr,
          intake: dayIntake,
          percentage: Math.min((dayIntake / target) * 100, 100)
        });
      }
      setWeeklyData(last7Days);
      
      // Calculate monthly data (last 30 days)
      const last30Days = [];
      for (let i = 29; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dayIntake = history
          .filter(h => new Date(h.id).toLocaleDateString() === date.toLocaleDateString())
          .reduce((sum, h) => sum + h.amount, 0);
        
        if (i % 5 === 0 || i === 0) { // Show every 5th day for cleaner display
          last30Days.push({
            day: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
            intake: dayIntake
          });
        }
      }
      setMonthlyData(last30Days);
      
      // Calculate total intake for last 7 days
      const total = last7Days.reduce((sum, d) => sum + d.intake, 0);
      setTotalIntake(total);
      setAvgIntake(Math.round(total / 7));
      
      // Find best day
      const best = last7Days.reduce((best, d) => d.intake > best.intake ? d : best, last7Days[0]);
      setBestDay({ day: best.day, intake: best.intake });
      
      // Calculate streak (consecutive days meeting target)
      let currentStreak = 0;
      for (let i = 0; i < last7Days.length; i++) {
        if (last7Days[i].intake >= target) {
          currentStreak++;
        } else {
          break;
        }
      }
      setStreak(currentStreak);
    } else {
      // Demo data if no history
      const demoData = [
        { day: 'Mon', intake: 2200, percentage: 73 },
        { day: 'Tue', intake: 1800, percentage: 60 },
        { day: 'Wed', intake: 2500, percentage: 83 },
        { day: 'Thu', intake: 2100, percentage: 70 },
        { day: 'Fri', intake: 1900, percentage: 63 },
        { day: 'Sat', intake: 2800, percentage: 93 },
        { day: 'Sun', intake: 2300, percentage: 77 }
      ];
      setWeeklyData(demoData);
      setMonthlyData([
        { day: 'Mar 1', intake: 2200 }, { day: 'Mar 5', intake: 2400 },
        { day: 'Mar 10', intake: 2100 }, { day: 'Mar 15', intake: 2600 },
        { day: 'Mar 20', intake: 2300 }, { day: 'Mar 25', intake: 2500 },
        { day: 'Mar 30', intake: 2700 }
      ]);
      setTotalIntake(17600);
      setAvgIntake(2514);
      setBestDay({ day: 'Sat', intake: 2800 });
      setStreak(2);
    }
  }, []);

  const getMotivationMessage = () => {
    if (streak >= 7) return "🔥 Incredible! 7+ day streak! You're a hydration champion!";
    if (streak >= 3) return "💪 Great consistency! Keep the streak going!";
    if (avgIntake >= 2500) return "🎯 Excellent! You're hitting your targets regularly!";
    if (avgIntake >= 2000) return "👍 Good progress! Try to increase by 500ml daily!";
    return "💧 Start small! Aim for 2 glasses every morning!";
  };

  return (
    <div className="reports-page">
      <h1>Hydration Analytics</h1>
      <p className="reports-subtitle">Track your progress and stay motivated</p>

      {/* Stats Cards */}
      <div className="reports-stats">
        <div className="reports-stat-card">
          <TrendingUp size={28} color="#4facfe" />
          <div className="reports-stat-value">{totalIntake} <span>ml</span></div>
          <div className="reports-stat-label">Weekly Total</div>
        </div>
        <div className="reports-stat-card">
          <Activity size={28} color="#4facfe" />
          <div className="reports-stat-value">{avgIntake} <span>ml</span></div>
          <div className="reports-stat-label">Daily Average</div>
        </div>
        <div className="reports-stat-card">
          <Award size={28} color="#4facfe" />
          <div className="reports-stat-value">{bestDay.day}</div>
          <div className="reports-stat-label">Best Day ({bestDay.intake} ml)</div>
        </div>
        <div className="reports-stat-card">
          <Calendar size={28} color="#4facfe" />
          <div className="reports-stat-value">{streak}</div>
          <div className="reports-stat-label">Day Streak 🔥</div>
        </div>
      </div>

      {/* Motivation Card */}
      <div className="motivation-card">
        <Droplet size={24} color="#4facfe" />
        <p>{getMotivationMessage()}</p>
      </div>

      {/* Weekly Chart */}
      <div className="chart-card">
        <h3>📊 Weekly Overview</h3>
        <div className="bar-chart">
          {weeklyData.map((data, idx) => (
            <div key={idx} className="bar-item">
              <div className="bar-label">{data.day}</div>
              <div className="bar-wrapper">
                <div 
                  className="bar-fill" 
                  style={{ 
                    height: `${Math.min(data.percentage, 100)}%`,
                    backgroundColor: data.intake >= 3000 ? '#10b981' : '#4facfe'
                  }}
                ></div>
              </div>
              <div className="bar-value">{data.intake}ml</div>
              {data.intake >= 3000 && <div className="bar-badge">🎯 Goal!</div>}
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Trend */}
      <div className="chart-card">
        <h3>📈 Monthly Trend (Last 30 Days)</h3>
        <div className="line-chart">
          {monthlyData.map((data, idx) => (
            <div key={idx} className="line-item">
              <div className="line-label">{data.day}</div>
              <div className="line-bar-wrapper">
                <div 
                  className="line-bar" 
                  style={{ width: `${(data.intake / 4000) * 100}%` }}
                >
                  <span className="line-value">{data.intake}ml</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Insights */}
      <div className="insights-card">
        <h3>💡 Health Insights</h3>
        <div className="insights-grid">
          <div className="insight-item">
            <span className="insight-icon">💧</span>
            <div>
              <strong>Hydration Score</strong>
              <p>{Math.round((avgIntake / 3000) * 100)}% of daily target</p>
            </div>
          </div>
          <div className="insight-item">
            <span className="insight-icon">⏰</span>
            <div>
              <strong>Best Time to Drink</strong>
              <p>Morning (8-10 AM) & Afternoon (2-4 PM)</p>
            </div>
          </div>
          <div className="insight-item">
            <span className="insight-icon">🎯</span>
            <div>
              <strong>Recommendation</strong>
              <p>{avgIntake < 2500 ? 'Drink 2 more glasses daily' : 'Keep up the great work!'}</p>
            </div>
          </div>
          <div className="insight-item">
            <span className="insight-icon">🏆</span>
            <div>
              <strong>Next Milestone</strong>
              <p>{streak === 0 ? 'Start your 3-day streak!' : `${3 - streak} days to bronze medal`}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="tips-card">
        <h3>💪 Tips to Improve Hydration</h3>
        <div className="tips-list">
          <div className="tip-item">
            <span>1️⃣</span>
            <p>Keep a water bottle on your desk at all times</p>
          </div>
          <div className="tip-item">
            <span>2️⃣</span>
            <p>Drink one glass before every meal</p>
          </div>
          <div className="tip-item">
            <span>3️⃣</span>
            <p>Set hourly reminders on your phone</p>
          </div>
          <div className="tip-item">
            <span>4️⃣</span>
            <p>Add lemon or mint for better taste</p>
          </div>
          <div className="tip-item">
            <span>5️⃣</span>
            <p>Track consistently to build a habit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;