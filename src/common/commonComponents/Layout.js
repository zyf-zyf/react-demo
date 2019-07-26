import React from 'react'
import { Layout, Icon } from 'antd';
import Menu from './Menu'
const { Header, Footer, Sider, Content } = Layout;

export default class NewLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            collapsed: false
        }
        this.handleClick= this.handleClick.bind(this)
    }
    handleClick() {
 
        this.setState({
            collapsed: !this.state.collapsed
        })
           
    }
    render() {
        return (
            <Layout className={'newLayout'}>
                <Sider collapsed={this.state.collapsed}>
                    <Menu></Menu>
                </Sider>
                <Layout>
                    <Header>
                        <Icon type={this.state.collapsed ? "menu-fold" : "menu-unfold"} onClick={this.handleClick} style={{color: 'red'}}/>
                    </Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        )  
    }
}