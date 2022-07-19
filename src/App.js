import React, { useCallback, useEffect } from 'react'
import axios from 'axios'
import logo from './logo.svg'
import './App.css'

function App () {
  const getData = useCallback(() => {
    // 开启loading特效
    const instance = axios.create({
      baseURL: '/gtd/chl/api/general_config/select/list?config_key=os_type&type=os_type&strategy=os_type',
      timeout: 3000,
      headers: { 'Content-Type': 'application/json' }
    });

    return new Promise((resolve, reject) => {
      console.log('开始调用')
      instance.get('')
        .then((response) => {
          console.log(response)
          resolve(response);
        })
        .catch((e) => {
          reject(e)
          console.log(e)
        })
    })
  }, [])

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React123
        </a>
      </header>
    </div>
  );
}

export default App;
