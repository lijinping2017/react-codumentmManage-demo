import React, { Component } from "react";
import { Modal, Button,Input } from 'antd';
import "./newfoldermodal.css";

class NewFolderModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
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

    render() {
        const footer=[
            <Button key="ok" type="primary" onClick={this.handleOk}>确定</Button>,
            <Button key="cancel"onClick={this.handleCancel}>取消</Button>,
        ];
        return (
            <div>
                <Modal
                    title="新增"
                    visible={this.state.visible}
                    footer={footer}
                >       
                    <div className="newfolder">
                        <div className="folder-name">
                            <label><span>*</span>文件夹名称:</label> <Input placeholder="请输入名称"/>
                        </div>
                        <div className="folder-detail">
                            <label>描述:</label> <Input placeholder="请输入描述"/>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default NewFolderModal;
