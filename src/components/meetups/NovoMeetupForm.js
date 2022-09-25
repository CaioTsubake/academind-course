import Card from '../ui/Card';
import classes from './NovoMeetupForm.module.css'

function NovoMeetupForm(){
    return <Card>
        <form className={classes.form}>
            <div className={classes.control}>
                <label htmlFor='title'>Título do Meetup</label>
                <input type="text" id='title' required></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Imagem</label>
                <input type="url" id='image' required></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Endereço</label>
                <input type="text" id='address' ></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Descrição</label>
                <textarea  id='description' required rows='5'></textarea>
            </div>
            <div className={classes.actions}>
                <button>Adicionar Meetup</button>
            </div>
        </form>
    </Card>
}

export default NovoMeetupForm;