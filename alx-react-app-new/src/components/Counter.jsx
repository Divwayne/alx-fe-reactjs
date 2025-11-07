import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>React Counter App</h2>
            <p style={{ fontSize: '18px' }}>Current Count: {count}</p>
            <div>
                <button 
                    onClick={() => setCount(count + 1)} 
                    style={{ margin: '5px', padding: '8px 16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}>
                    Increment
                </button>
                <button 
                    onClick={() => setCount(count - 1)} 
                    style={{ margin: '5px', padding: '8px 16px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px' }}>
                    Decrement
                </button>
                <button 
                    onClick={() => setCount(0)} 
                    style={{ margin: '5px', padding: '8px 16px', backgroundColor: '#008CBA', color: 'white', border: 'none', borderRadius: '4px' }}>
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Counter;
