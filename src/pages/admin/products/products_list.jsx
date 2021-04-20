import React, { Component } from 'react'
import { Card, Table, Button ,Popconfirm} from 'antd'


export class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columns: [{
                title: '序号',
                key: 'id',
                width: 80,
                align: 'center',
                render:(txt,record,index)=>index+1
            }, {
                title: '名字',
                dataIndex: 'name'
            }, {
                title: '价格',
                dataIndex: 'price'
            },{
                title: '操作',
                render:(txt,record,index)=>{
                    return(<div>
                        <Button  type="primary"size="small">修改</Button>
                        <Popconfirm title="确定删除此项吗？" 
                        onCancel={()=>console.log('用户取消删除')} onConfirm={()=>console.log('用户确认删除')}>
                        <Button style={{margin:"0 1rem"}} type="danger" size="small">删除</Button>
                        </Popconfirm>
                        
                    </div>)
                }
            }],
            dataSource: [{
                id:1,
                name:'小米手机',
                price:3200
            },{
                id:2,
                name:'苹果手机',
                price:6200
            }]
        }
    }

    render() {
        return (
            <Card title="列表" extra={<Button type='primary' size="small" onClick={()=> this.props.history.push('/admin/products/edit')}>添加</Button>}>
                <Table rowKey="id" columns={this.state.columns} bordered  dataSource={this.state.dataSource}></Table>
            </Card>
        )
    }
}

export default List
