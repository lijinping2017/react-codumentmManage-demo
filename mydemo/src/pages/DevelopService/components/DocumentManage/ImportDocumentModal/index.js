import React, { Component } from "react";
import { Modal, Button,Input, Icon, Tooltip, Table } from 'antd';
import "./importdocumentmodal.css";

class ImportDocumentModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            data: [
                {
                  key: '1',
                  name: "react.txt",
                  number: '',
                  classes: '一级',
                  version: '苹果',
                  describe: '的防静电服',
                  modal: '一级',
                  filetype: '苹果',
                  parse: '的防静电服',
                  progress: '7%'
                }
            ]
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        this.setState({
          visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    uploadFile = () => {
        this.refs.upload.click();
    }

    changeInput = (e) => {
        const  text = e.target.value;
        const data = [
          {
            key: '1',
            name: text,
            number: text,
            classes: '一级',
            version: '苹果',
            describe: '的防静电服',
            modal: '一级',
            filetype: '苹果',
            parse: '的防静电服',
            progress: '7%'
          }
        ];
        this.setState({
            data: data
        })
    }

    render() {
        const footer=[
            <Button key="upload" onClick={this.handleOk}>全部上传</Button>,
            <Button key="delete" onClick={this.handleOk}>全部清除</Button>,
            <Button key="cancel" onClick={this.handleCancel}>取消</Button>,
        ];

        const icon = <Icon type="upload" />;

        const columns = [
          {
            title: '名称',
            width: '20%',
            dataIndex: 'name',
            render: text => (
                <Tooltip title={text}>
                    <Input onChange={this.changeInput}/>
                </Tooltip>
            )
          },
          {
            title: '编码',
            width: '15%',
            dataIndex: 'number',
            render: text => (
                <Tooltip title={text}>
                    <Input onChange={this.changeInput}/>
                </Tooltip>
            )
          },
          {
            title: '类别',
            width: '9%',
            dataIndex: 'classes'
          },
          {
            title: '版本',
            width:'8%',
            dataIndex: 'version'
          },
          {
            title: '描述',
            width: '13%',
            dataIndex: 'describe'
          },
          {
            title: '解析模型',
            width: '8%',
            dataIndex: 'modal'
          },
          {
            title: '文件类型',
            width: '8%',
            dataIndex: 'filetype'
          },
          {
            title: '优先解析',
            width: '8%',
            dataIndex: 'parse'
          },
          {
            title: '进度',
            width: '10%',
            dataIndex: 'progress'
          },
        ];

        
        return (
            <div>
                <Modal className="modal"
                    title="导入文档"
                    visible={this.state.visible}
                    footer={footer}
                >       
                    <div className="import-document">
                        <div className="upload-file">
                            <input ref="upload"
                                type="file"
                            />
                            <Button onClick={this.uploadFile}>
                                <Icon type="upload" /> 选择文件
                            </Button>
                        </div>
                        <div className="import-document-detail">
                            <Table columns={columns} bordered dataSource={this.state.data} />
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default ImportDocumentModal;
