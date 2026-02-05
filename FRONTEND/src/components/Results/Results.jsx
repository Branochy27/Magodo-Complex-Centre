import React, { useState } from 'react';
import { Trophy, Award, TrendingUp } from 'lucide-react';
import { schoolInfo } from '../../data/schoolData';
import './Results.css';

const Results = () => {
  const [activeTab, setActiveTab] = useState('kcpe');

  return (
    <div className="results-container">
      <header>
        <h2>Academic Excellence</h2>
        <p>Tracking our students' outstanding performance in national examinations</p>
      </header>

      {/* Tabs */}
      <div className="results-tabs">
        <button
          className={`results-tab ${activeTab === 'kcpe' ? 'active' : ''}`}
          onClick={() => setActiveTab('kcpe')}
        >
          KCPE Results
        </button>

        <button
          className={`results-tab ${activeTab === 'kjsea' ? 'active' : ''}`}
          onClick={() => setActiveTab('kjsea')}
        >
          KPSEA Results
        </button>
      </div>

      {/* Results Content */}
      <section className="results-content">
        {schoolInfo.results[activeTab].length === 0 ? (
          <div className="coming-soon">
            <h3>Results Coming Soon</h3>
            <p>
              {activeTab === 'kcpe'
                ? 'KCPE examination results will be published here once available.'
                : 'KPSEA examination results will be published here once available.'}
            </p>
            <p>We are committed to academic excellence and transparency. Our results will be shared as soon as released by KNEC.</p>
          </div>
        ) : (
          <div className="results-list">
            {schoolInfo.results[activeTab].map((result, index) => (
              <article key={index} className="result-item">
                {/* Replace with actual fields from result */}
                <h4>{result.title || `Result ${index + 1}`}</h4>
                <p>{result.summary || 'Details go here.'}</p>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Achievement Highlights */}
      <aside className="highlights">
        <h3>Our Commitment to Excellence</h3>
        <ul>
          <li><Trophy /> Quality Teaching — Experienced and dedicated teachers</li>
          <li><Award /> CBC Curriculum — Following modern educational standards</li>
          <li><TrendingUp /> Holistic Development — Nurturing academic and personal growth</li>
        </ul>
      </aside>
    </div>
  );
};

export default Results;
