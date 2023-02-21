import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/modal/modal';
import { LoginForm } from '../login_form/login_form';
import cls from './login_modal.module.scss';

interface LoginModalProps {
    className?: string,
    isOpen: boolean,
    onClose: () => void
}

export const LoginModal = ({ className, onClose, isOpen }: LoginModalProps) => (
    <Modal
        isOpen={isOpen}
        className={classNames(cls.login_modal, {}, [className])}
        onClose={onClose}
        lazy
    >
        <LoginForm />
    </Modal>
);
