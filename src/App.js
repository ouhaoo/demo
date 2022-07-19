import React, { useCallback, useEffect } from 'react'
import { Breadcrumb, Layout, Menu, Button } from 'antd'
import useThrottle from 'hooks/useThrottle' // 别名生效
import axios from 'axios'

import './App.less'

const { Header, Content, Footer } = Layout

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
    getData() // 代理生效
    // eslint-disable-next-line
  }, [])

  return <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(15).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      />
    </Header>
    <Content
      style={{
        padding: '0 50px',
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        <Button type="primary">233</Button>
      </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
}

export default App
