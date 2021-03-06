import { combineReducers } from 'redux';
import GetQuests from './allquests';
import GetQuestInfo from './questinfo';
import GetUserInfo from './users';
import GetAuthorizationInfo from './auth';
import userAuthorization from './userAuthorization';
import { GetComments } from './comments';

export default combineReducers({
    GetQuests,
    GetUserInfo,
    GetQuestInfo,
    GetAuthorizationInfo,
    GetComments,
    userAuthorization
});
