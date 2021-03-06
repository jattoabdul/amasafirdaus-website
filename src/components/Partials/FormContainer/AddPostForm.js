import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Editor } from '@tinymce/tinymce-react';
import './Forms.scss';
import imageUpload from '../../../utils/imageUpload';

const AddPostForm = (props) => {
    return (
        <div className="form-container">
            <Form className="add-post-form">
                <FormGroup>
                    <Label for="addTitle" hidden>Add Post Title</Label>
                    <Input type="text" name="title" id="addTitle"  placeholder="Article Title" value={props.title}
                    onChange={props.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="addDesc" hidden>Add Post Desc</Label>
                    <Input type="text" name="desc" id="addDesc"  placeholder="Article Description" value={props.desc}
                    onChange={props.onChange} />
                </FormGroup>
                <FormGroup>
                    <Editor
                        initialValue="<p>This is the initial content of the editor</p>"
                        apiKey='flqnfkejnjq8qr7rr6jyeu7i12np8i8h7esr1md5026ahshl'
                        init={{
                            plugins: 'link image code lists preview anchor imagetools media table paste contextmenu fullscreen',
                            toolbar: 'insertfile undo redo | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | code link image',
                            images_upload_url: 'https://res.cloudinary.com/irshaadtechnologies/image/upload',
                            images_upload_handler: function (blobInfo, success, failure) {
                                imageUpload(blobInfo).then((response) => {
                                    const { body } = response;
                                    const fileUrl = body.secure_url;
                              
                                    if (fileUrl) {
                                        success(`${fileUrl}`);
                                    } else {
                                        success('https://res.cloudinary.com/irshaadtechnologies/image/upload/v1464099384/sample.jpg');
                                    }
                                  });
                            },
                            mobile: {
                                theme: 'mobile',
                                plugins: [ 'autosave', 'lists', 'autolink' ]
                              }
                        }}
                        onChange={props.onHandleEditorChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="thumbnailUrl">Article Headline Image</Label>
                    <Input type="file" name="thumbnailUrl" id="thumbnailUrl" value={props.thumbnailUrl} onChange={props.onUpload} accept="image/*" />
                </FormGroup>
                <FormGroup>
                    <Label for="categories">Post Categories <br />
                    <sub>Hold ctrl/cmd to select multiple categories</sub>
                    </Label>
                    <Input type="select" name="categories" id="categories"     onChange={props.onMultiSelect} multiple>
                        {props.categories && props.categories.map((category, key) =>
                        <option value={`${category.id}`} key={key}>{category.name}</option>)}
                    </Input>
                </FormGroup>
                <br />
                <FormGroup check>
                    <Label for="published" check>
                        <Input type="checkbox" name="published" id="published" value={props.published} onChange={props.onCheckBox} />{' '}
                        Status
                    </Label>
                </FormGroup>
            </Form>
        </div>
    );
}

export default AddPostForm;
