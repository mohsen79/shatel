import { Modal } from '@mui/material'
import React from 'react'
import styles from './Comments.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { commentSchema } from '@/app/schema/commentSchema';
import { z } from 'zod';
import { useForm } from 'react-hook-form';

interface Props {
    modalStatus: boolean,
    handleModal: () => void
}
type IssueForm = z.infer<typeof commentSchema>;

const NewComment = ({ modalStatus, handleModal }: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<IssueForm>({
        resolver: zodResolver(commentSchema)
    });

    const sendComment = async (data: object) => {
        try {
            await fetch('api/comment', {
                method: 'POST',
                body: JSON.stringify(data)
            });

            handleModal();
        } catch (err) {
            console.log(err);
        }


    }
    return (
        <Modal
            className={styles.newComment}
            open={modalStatus}
            onClose={handleModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <form className={styles.commentForm}
                onSubmit={handleSubmit((data) => sendComment(data))}>
                <div>
                    <Input placeholder='Add new comment' error={register('content')} />
                    <p className={styles.errorMsg}>{errors.content?.message}</p>
                </div>
                <div className={styles.commentButtons}>
                    <Button text="cancel" bgColor='red' onClick={handleModal} />
                    <Button text="comment" bgColor='rgb(88, 88, 228)' onClick={sendComment} />
                </div>
            </form>
        </Modal>
    )
}

export default NewComment