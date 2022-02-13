import s from './DialogsList.module.css';
import DialogItem from "./DialogItem/DialogItem";

const DialogsList = (props) => {
    return (
        <div className={s.dialogsList}>
            { props.dialogs.map(dialog => <DialogItem setCurrentDialogId={props.setCurrentDialogId} id={dialog.id} key={dialog.id} userName={dialog.userName} photo={dialog.photos.small}/>) }
        </div>
    );
}

export default DialogsList;
