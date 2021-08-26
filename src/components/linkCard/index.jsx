import React from 'react'

//style
import './linkCard.scss';

//components
import Button from '../button';

//redux 
import { useDispatch } from "react-redux";
import { decreaseVote, deleteLink, increaseVote } from '../../redux/links/actions';
import { showModal, showToast } from '../../redux/layout/actions';

const LinkCard = ({ id, name, link, votePoint }) => {
    //redux
    const dispatch = useDispatch();

    const increase = () => {
        dispatch(increaseVote(id));
    }

    const decrease = () => {
        dispatch(decreaseVote(id));
    }

    const onDelete = () => {
        dispatch(showModal({
            description: 'Do you want to remove:',
            title: 'RemoveLink',
            linkName: name,
            confirmButton: () => {
                dispatch(deleteLink(id));
                dispatch(showToast({ text: `${name} Deleted.`, type: 'success' }));
            }
        }));

    }

    return (
        <div className="linkCard">
            <div className="linkCard-voteBox">
                <strong className="linkCard-voteScoreText">{votePoint}</strong>
                <span className="linkCard-voteText">POINTS</span>
            </div>
            <div className="linkCard-linkBox">
                <div className="linkCard-linkContent">
                    <strong className="linkCard-linkName">{name}</strong>
                    <span className="linkCard-linkText">({link})</span>
                </div>
                <div className="linkCard-voteButtons">
                    <Button onClick={increase}>Up Vote</Button>
                    <Button onClick={decrease}>Down Vote</Button>
                </div>
            </div>
            <div className="linkCard-delete" onClick={onDelete}>X</div>
        </div>
    );
}

export default LinkCard;
