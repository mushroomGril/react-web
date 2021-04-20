import React, { Component } from 'react'
import { Dropdown, Layout, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import logo from './logo.png'
import {adminRoutes} from '../../routes'
import {withRouter} from 'react-router-dom'

const { Header, Content, Sider } = Layout;
 const routes = adminRoutes.filter(route => route.isShow)
 
export class Index extends Component {
  
    menu = (
        <Menu>
          <Menu.Item key="notic">通知中心</Menu.Item>
          <Menu.Item key="setting"> 设置 </Menu.Item>
          <Menu.Item key="logout"> 退出 </Menu.Item>
        </Menu>
      );
    render() {
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" >
                     <img src={logo} alt="logo" style={{width: '50px'}}/>
                    </div> 
                    <Dropdown overlay={this.menu}>
                     <div>
                         <span>超级管理员</span>
                         <DownOutlined />
                     </div>
                    </Dropdown>
                     
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}style={{ height: '100%', borderRight: 0 }}>
                           {routes.map(route => {
                               return (<Menu.Item key={route.path} onClick={p=>this.props.history.push(p.key)}> 
                                   {route.title}
                               </Menu.Item>)
                           })}
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '16px' }}>
                        <Content className="site-layout-background" style={{ padding: 24, margin: 0,minHeight: 280, }} >
                            {this.props.children}
                        </Content> 
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default withRouter(Index) 
