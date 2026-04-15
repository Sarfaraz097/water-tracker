import { Link } from 'react-router-dom';
import { Droplet, TrendingUp, Award, Clock, ArrowRight, CheckCircle, Users, Shield, Zap } from 'lucide-react';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section with Image */}
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-content">
            <h1>Track Your <span>Water Intake</span> Smartly</h1>
            <p>
              AquaTrack helps you monitor daily water consumption, set personalized goals, 
              and build healthy hydration habits. Join thousands of users who have improved 
              their health with our smart tracking system.
            </p>
            <div className="hero-buttons">
              <Link to="/dashboard" className="cta-btn">
                Start Tracking Free <ArrowRight size={18} />
              </Link>
              <a href="#features" className="cta-btn outline">Learn More</a>
            </div>
            <div className="hero-rating">
              <div className="stars">★★★★★</div>
              <span>Rated 4.9/5 by 10,000+ users</span>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500&h=500&fit=crop" 
              alt="Drinking water"
              style={{ width: '100%', borderRadius: '30px' }}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-showcase">
        <div className="stat-item">
          <div className="stat-number">50K+</div>
          <div className="stat-label">Active Users</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">10M+</div>
          <div className="stat-label">Glasses Tracked</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">98%</div>
          <div className="stat-label">User Satisfaction</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">24/7</div>
          <div className="stat-label">Smart Reminders</div>
        </div>
      </section>

      {/* About Section - Detailed */}
      <section className="about-section" id="about">
        <div className="about-grid">
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=400&fit=crop" 
              alt="Healthy lifestyle"
              style={{ width: '100%', borderRadius: '24px' }}
            />
          </div>
          <div className="about-content">
            <h2>About AquaTrack</h2>
            <p>
              Founded in 2024, AquaTrack started with a simple mission: help people 
              understand and improve their hydration habits. We believe that proper 
              hydration is the foundation of good health.
            </p>
            <p>
              Our team of health enthusiasts and tech experts created an easy-to-use 
              platform that makes water tracking fun and rewarding. With AquaTrack, 
              you're not just tracking water - you're building a healthier lifestyle.
            </p>
            <div className="about-features">
              <div><CheckCircle size={18} /> 100% Free to use</div>
              <div><CheckCircle size={18} /> No signup required</div>
              <div><CheckCircle size={18} /> Your data stays private</div>
              <div><CheckCircle size={18} /> Works offline</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How AquaTrack Works</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
              alt="Set goal"
              style={{ width: '60px', margin: '1rem auto' }}
            />
            <h3>Set Your Goal</h3>
            <p>Choose your daily water intake target based on your lifestyle and health needs.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/2987/2987408.png" 
              alt="Track water"
              style={{ width: '60px', margin: '1rem auto' }}
            />
            <h3>Track Your Intake</h3>
            <p>Log every glass with one click. Add custom amounts anytime.</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/2972/2972215.png" 
              alt="Get insights"
              style={{ width: '60px', margin: '1rem auto' }}
            />
            <h3>Get Insights</h3>
            <p>View your progress with beautiful charts and smart recommendations.</p>
          </div>
          <div className="step-card">
            <div className="step-number">4</div>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/190/190411.png" 
              alt="Stay healthy"
              style={{ width: '60px', margin: '1rem auto' }}
            />
            <h3>Stay Healthy</h3>
            <p>Build consistent habits and feel the difference in your energy levels.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h2>Why Choose AquaTrack?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <Droplet size={32} color="#4facfe" />
            <h3>Easy Tracking</h3>
            <p>Add water intake with just one click. Quick presets for 200ml, 500ml, or 1000ml. Custom amounts also supported.</p>
          </div>
          <div className="feature-card">
            <TrendingUp size={32} color="#4facfe" />
            <h3>Smart Reports</h3>
            <p>Visual charts to see your weekly and monthly hydration patterns. Track your improvement over time.</p>
          </div>
          <div className="feature-card">
            <Award size={32} color="#4facfe" />
            <h3>Achievement Badges</h3>
            <p>Earn rewards when you hit your daily goals consistently. Stay motivated with gamification.</p>
          </div>
          <div className="feature-card">
            <Clock size={32} color="#4facfe" />
            <h3>Smart Reminders</h3>
            <p>Get AI-powered suggestions based on your drinking patterns to help you reach your daily goals.</p>
          </div>
          <div className="feature-card">
            <Shield size={32} color="#4facfe" />
            <h3>Privacy First</h3>
            <p>Your data stays on your device. No servers, no tracking, complete privacy guaranteed.</p>
          </div>
          <div className="feature-card">
            <Zap size={32} color="#4facfe" />
            <h3>Lightning Fast</h3>
            <p>Built with React and Vite for the best performance. Works instantly without any lag.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p>"AquaTrack completely changed my hydration habits! I used to forget drinking water, now I easily hit my 3L goal every day."</p>
            <div className="testimonial-author">
              <strong>Rahul Sharma</strong>
              <span>Software Engineer</span>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p>"Simple, beautiful, and effective. The progress bar keeps me motivated. Best water tracker I've ever used!"</p>
            <div className="testimonial-author">
              <strong>Priya Patel</strong>
              <span>Fitness Coach</span>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★☆</div>
            <p>"Love the reports feature! Seeing my weekly progress helps me stay consistent. Highly recommended for everyone."</p>
            <div className="testimonial-author">
              <strong>Amit Kumar</strong>
              <span>College Student</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>💧 Is AquaTrack really free?</h3>
            <p>Yes! AquaTrack is completely free to use. No hidden charges, no premium plans.</p>
          </div>
          <div className="faq-item">
            <h3>💧 Do I need to create an account?</h3>
            <p>No account needed! Your data is saved locally on your device.</p>
          </div>
          <div className="faq-item">
            <h3>💧 How much water should I drink daily?</h3>
            <p>The general recommendation is 3-4 liters for men and 2-3 liters for women. You can customize your target.</p>
          </div>
          <div className="faq-item">
            <h3>💧 Does my data sync across devices?</h3>
            <p>Currently data is stored locally. Cloud sync coming soon!</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section">
        <h2>Ready to Stay Hydrated?</h2>
        <p>Join thousands of users who have improved their health with AquaTrack.</p>
        <Link to="/dashboard" className="cta-btn secondary">
          Get Started Now
        </Link>
      </section>
    </div>
  );
}

export default Home;