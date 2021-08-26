import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

//styles
import './addLink.scss';

//components
import Input from '../../components/input';
import Button from '../../components/button';

//redux
import { useDispatch } from 'react-redux';
import { addLink } from '../../redux/links/actions';
import { showToast } from '../../redux/layout/actions';

const AddkLink = () => {
    //states
    const [linkName, setLinkName] = useState('');
    const [linkURL, setLinkURL] = useState('');

    //redux
    const dispatch = useDispatch();

    //history
    const history = useHistory();

    const onSubmitForm = (event) => {
        event.preventDefault();

        if (linkName.trim().length > 0 && linkURL.trim().length > 0) {
            dispatch(addLink({ name: linkName, link: linkURL }));
            dispatch(showToast({ text: `${linkName} added.`, type: 'success' }));

            setLinkName('');
            setLinkURL('');

            history.goBack();

            return;
        }

        dispatch(showToast({ text: 'you should fill inputs', type: 'danger' }));
    }

    return (
        <div className="addLink">
            <div className="addLink-container">
                <span
                    className="addLink-goBack"
                    onClick={history.goBack}>
                    {'<- '}Return to List
                </span>
                <h2>Add New Link</h2>
                <form onSubmit={onSubmitForm}>
                    <Input
                        label="Link Name:"
                        value={linkName}
                        onChange={e => setLinkName(e.target.value)} />
                    <Input
                        label="Link URL:"
                        value={linkURL}
                        onChange={e => setLinkURL(e.target.value)} />
                    <Button size="large" type="submit">ADD</Button>
                </form>
            </div>
        </div>
    );
}

export default AddkLink
