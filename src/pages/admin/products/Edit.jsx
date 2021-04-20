import React, { Component } from 'react'
import {Form,Card,Input,Button, message} from 'antd'

export class Edit extends Component {
    formRef = React.createRef();
    onFinish = (err,values) => {
        if(!err){
            console.log(values);
            //此处调用api接口
        }else{
            message.error("请输入正确的内容")
        }
    }
    priceValidate = (rules,value,callback)=>{
        if(value*1>100){
            callback("价格不能大于100");
        }else{
            callback()
        }
    }
    render() {       
        return (
            <Card title="商品编辑">
                <Form onFinish={this.onFinish} name="control-ref" ref={this.formRef}>
                    <Form.Item name="name" label="名字" rules={[{ required: true ,message:"请输入商品名字"}]}><Input placeholder="请输入商品名字"/></Form.Item>
                    <Form.Item name="price" label="价格" rules={[{required:true,message:"请输入商品价格"},{validator:this.priceValidate}]}><Input placeholder="请输入商品价格"/></Form.Item>
                    <Form.Item><Button type="primary" htmlType="submit">保存</Button></Form.Item>
                   
                </Form>
            </Card>
        )
    }
}

export default  Edit
