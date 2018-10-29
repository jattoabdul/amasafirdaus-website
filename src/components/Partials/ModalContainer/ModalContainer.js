import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { AddPostForm, UpdatePostForm, DeletePostForm } from '../FormContainer';
import './ModalContainer.scss';

const renderButton = (props) => {
    switch(props.actionName){
        case 'Add Post': return <Button color="primary" onClick={() => props.addPostAction()}>Add Post</Button>;
        case 'Update Post': return <Button color="primary" onClick={() => props.updatePost(props.post)}>Update Post</Button>;
        case 'Delete Post': return <Button color="primary" onClick={() => props.deletePost(props.post)}>Delete Post</Button>;
        default: return <Button color="primary" onClick={props.addPostAction}>Add Post</Button>;
    }
}

const renderForm = (props) => {
    switch(props.actionName){
        case 'Add Post': return <AddPostForm onChange={props.onChange} onCheckBox={props.onCheckBox} onMultiSelect={props.onMultiSelect} onHandleEditorChange={props.onHandleEditorChange} onUpload={props.onUpload} categories={props.postCategories} />;
        case 'Update Post': return <UpdatePostForm post={props.post} onChange={props.onChange} onCheckBox={props.onCheckBox} onMultiSelect={props.onMultiSelect} onHandleEditorChange={props.onHandleEditorChange} onUpload={props.onUpload} categories={props.postCategories} />;
        case 'Delete Post': return <DeletePostForm post={props.post} />;
        default: return <AddPostForm onChange={props.onChange} onCheckBox={props.onCheckBox} onMultiSelect={props.onMultiSelect} />;
    }
}

const ModalContainer = props => {
    return (
        <div className="add-guest-modal">
            <Modal isOpen={props.isModalOpen} toggle={() => props.toggle('')}>
                <ModalHeader toggle={() => props.toggle('')}>
                    {props.actionName || "Firdaus Blog Admin Form"}
                </ModalHeader>
                <ModalBody>
                    <div className="action-form-container">
                        {renderForm(props)}
                    </div>
                </ModalBody>
                <ModalFooter>
                {renderButton(props)}{' '}
                <Button color="secondary" onClick={() => props.toggle('')}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalContainer;
