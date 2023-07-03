export { userReducer, userActions } from './model/slice/user-slice';
export { User, UserScheme, UserRole } from './model/types/user';
export { getUserAuthData } from './model/selectors/get-user-auth-data/get-user-auth-data';
export { getUserInited } from './model/selectors/get-user-inited/get-user-inited';

export { isUserAdmin, isUserManager, getUserRoles } from './model/selectors/role-selectors';
