import React, { Component } from 'react'
import { Form, Input, Button, Checkbox, Card, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.css'
import { setToken } from '../utils/auth'

import { getCode, checkCode,phoneCode } from '../api/account'
export class Login extends Component {

    formRef = React.createRef();
    state = {
        btnText: '获取验证码',
        seconds: 60, //称数初始化
        liked: true, //获取验证码文案
    }
    
    componentWillUnmount(){
        this.setState = () => {
            return;
        };
    }
    onFinish = (values) => {
        // checkCode({ "userCode": values.code, "email": values.email }).then(res => {
        //     if (res.data.status === 200) {
        //         message.success('登录成功')
        //         setToken(res.data.token)
        //         this.props.history.push("/admin")
        //     } else {
        //         message.error(res.data.msg)
        //     }
        // })

        checkCode({ "code": values.code,"username":values.username, "email": values.email }).then(res => {
            console.log(res)
            if (res.data.status === 200) {
                message.success('登录成功')
                setToken(res.data.token)
                this.props.history.push("/admin")
            } else {
                message.error(res.data.msg)
            }
        })
    };
    getEmailCode =()=>{
        let email = this.formRef.current.getFieldValue('email');
        console.log(email)
        getCode({ "email": email }).then(res => {
            if (res.data.status === 4006) {
                return message.error(res.data.msg)
            }
            console.log(res)
            //倒计时
            let siv = setInterval(() => {
                this.setState({ liked: false, seconds: this.state.seconds - 1 })
                if (this.state.seconds === 0) { 
                    this.setState({
                        liked: true,
                        seconds: 60
                    })
                     clearInterval(siv);
                   
                }
            }, 1000);

        }).catch(err => {

        })
    }
     getPhoneCode = () => {

        let username = this.formRef.current.getFieldValue('username');
        console.log(username)
        phoneCode({ "username": username }).then(res => {
            if (res.data.status === 4006) {
                return message.error(res.data.msg)
            }            
            //倒计时
            let siv = setInterval(() => {
                this.setState({ liked: false, seconds: this.state.seconds - 1 })
                if (this.state.seconds === 0) { 
                    this.setState({
                        liked: true,
                        seconds: 60
                    })
                     clearInterval(siv);                   
                }
            }, 1000);

        }).catch(err => {

        })
    }

    render() {
        return (
            <Card title="QF Admin SYS" bordered="true" className="login-form">
                <Form ref={this.formRef} initialValues={{ remember: true, }} onFinish={this.onFinish} name="normal_login"  >
                    
                    <Form.Item name="username" rules={[{ required: true, message: '请输入手机号码!', }, { pattern: /^1[3|4|5|7|8][0-9]\d{8}$/, message: '请输入正确的手机号码', }]}>
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="手机号码" />
                    </Form.Item>
                    <Form.Item name="email" rules={[{ required: true, message: '请输入邮箱地址!' }, { pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: '请输入正确的邮箱地址', }]}>
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="邮箱地址" />
                    </Form.Item>
                    {/* <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }, { min: 6, message: '密码不能小于6位' }]} >
                        <Input type="password" placeholder="密码" prefix={<LockOutlined className="site-form-item-icon" />} />
                    </Form.Item> */}
                    <Form.Item name="code" rules={[{ required: true, message: '请输入验证码!', }]} >
                        <div style={{ display: 'flex', alignContent: 'space-around' }}>
                            <Input type="text" placeholder="验证码" prefix={<LockOutlined className="site-form-item-icon" />} />
                            <Button onClick={this.getPhoneCode} disabled={!this.state.liked} style={{ marginLeft: '10px' }}>
                                {
                                    this.state.liked
                                        ?
                                        <span>{this.state.btnText}</span>
                                        :
                                        <span>{this.state.seconds + ' s 后重新发送'}</span>
                                }
                            </Button>
                        </div>
                    </Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button"> 登录 </Button>
                    </Form.Item>
                </Form>
            </Card>
        )
    }
}

export default Login
