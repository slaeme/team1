import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { autobind } from 'core-decorators';

import * as pageActions from '../../../../redux/action/index';

const mapStateToProps = state => ({
    user: state.userAuthorization,
    questInfo: state.GetQuestInfo
});

const mapDispatchToProps = dispatch => ({pageActions: bindActionCreators(pageActions, dispatch)});

@connect(mapStateToProps, mapDispatchToProps)
export default class QuestionDescription extends React.Component {
    static propTypes = {
        id: React.PropTypes.number,
        description: React.PropTypes.string,
        title: React.PropTypes.string,
        user: React.PropTypes.object.isRequired,
        pageActions: React.PropTypes.object.isRequired,
        banner: React.PropTypes.string,
        author: React.PropTypes.string,
        questId: React.PropTypes.string,
        questInfo: React.PropTypes.object
    };

    @autobind
    deleteQuest() {
        this.props.pageActions.DeleteQuest(this.props.questId);
    }

    render() {
        const user = this.props.user;

        const participantButton = <Link to={`/quest/${this.props.id}/start`} className='button'>Принять участие</Link>;
        const changeQuestButton = <Link to={`/quest/edit/${this.props.id}`} className='button' data-tid='quest-edit-link'>Редактировать квест</Link>;

        const deleteQuestButton = (
            <button
                onClick={this.deleteQuest}
                className='button'
                data-tid='quest-delete-link'>
                Удалить квест
            </button>
        );

        const notAuthorized = (
            <div className='question-description__auth' data-tid='need-authorization'>
                Авторизуйтесь, чтобы принять участие в квесте
            </div>
        );

        const isAuthor = parseInt(this.props.author) === parseInt(user.id);

        const { error, questDeleted } = this.props.questInfo;

        let modal = (
            <div className='createModal'>
                <div className='createModal_message'>
                    <h2>{error && error.error ? error.error : 'Квест успешно удален'}</h2>
                    <a href='/'>Перейти на главную</a>
                </div>
            </div>
        );

        return (
            <div className='question-description'>
                {(error || questDeleted) ? modal : null}
                <div className='question-photo'>
                    <div className='question-photo_wrapper'>
                        <img src={this.props.banner} alt='Фото квеста'/>
                    </div>
                    {user.hasOwnProperty('username') ? participantButton : notAuthorized}
                    {isAuthor ? changeQuestButton : ''}
                    {isAuthor ? deleteQuestButton : ''}
                </div>
                <div className='question-info'>
                    <h2 className='question-info_title' data-tid='quest-title'>Квест {this.props.title}</h2>
                    <div className='question-info_text'>
                        <span data-tid='quest-description'>Описание: {this.props.description}</span>
                        <span data-tid='quest-author'>
                            Автор:
                            <Link className='question-info_text__link' to={`/profile/${this.props.author}`} data-tid='quest-author-link'>
                                 Автор квеста
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
