import React, { useState } from 'react';

function App() {
  const [showFilter, setShowFilter] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [filter, setFilter] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  return (
    <div>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <button onClick={toggleFilter}>Open Filter</button>
        <br />
        {showFilter && (
          <div
            style={{
              position: 'absolute',
              top: '50px',
              left: '0',
            }}
          >
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <button onClick={toggleCalendar}>Select Duration</button>
              <br />
              {showCalendar && (
                <div
                  style={{
                    position: 'absolute',
                    top: '50px',
                    left: '0',
                  }}
                >
                  <input
                    type="date"
                    value={startDate}
                    onChange={handleStartDateChange}
                  />
                  <span> to </span>
                  <input
                    type="date"
                    value={endDate}
                    onChange={handleEndDateChange}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
