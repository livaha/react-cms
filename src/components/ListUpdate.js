import React from 'react';
import { List, Button } from 'antd';

export default class ListUpdate extends React.Component{ 
  state={    
     list:[
      {
        "seqNo": 1001,
        "appname_en": "Baidu's website",
      },
      {
        "seqNo": 1002,
        "appname_en": "Google's official website",
      },
      {
        "seqNo": 1003,
        "appname_en": "Amazon.com",
      },
      {
        "seqNo": 1004,
        "appname_en": "Sina website",
      },
      {
        "seqNo": 1005,
        "appname_en": "Tencent's official website",
      },
      {
        "seqNo": 1006,
        "appname_en": "Netease's official website",
      },
      {
        "seqNo": 1007,
        "appname_en": "China yahoo website",
      },
      {
        "seqNo": 1008,
        "appname_en": "Sohu website",
      },
      {
        "seqNo": 1009,
        "appname_en": "Facebook's official website",
      }
    ]
  }
  handleItem=(index,isReject)=>{
    let list = this.state.list;
    //list[index].option = true;
    list[index].isReject = isReject;
    this.setState({
      list
    })
  }
  render(){
    return (<div style={{padding:'0 20px'}}>
          <List
          className="demo-loadmore-list"
          itemLayout="horizontal"
          dataSource={this.state.list}
          renderItem={(item,index) => (
            <List.Item
              actions={[item.isReject===0?'已驳回':item.isReject===1?'已通过':<>
                <Button type="dashed" onClick={()=>this.handleItem(index,0)}>驳回</Button>, 
                <Button type="dashed" onClick={()=>this.handleItem(index,1)}>通过</Button></>
              ]}
            >
              <List.Item.Meta
                title={<a href="https://ant.design">{item.appname_en}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
              <div>content</div>
            </List.Item>
          )}
        />

    </div>
    );
  }
}


