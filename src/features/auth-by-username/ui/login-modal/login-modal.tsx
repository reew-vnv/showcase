import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/modal/modal';
import { Loader } from 'shared/ui/loader/loader';
import { LoginFormLazy } from '../login-form/login-form.lazy';

interface LoginModalProps {
    className?: string,
    isOpen: boolean,
    onClose: () => void
}

export const LoginModal = ({ className, onClose, isOpen }: LoginModalProps) => (
    <Modal
        isOpen={isOpen}
        className={classNames('', {}, [className])}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<Loader />}>
            <LoginFormLazy onSuccess={onClose} />
        </Suspense>
    </Modal>
);
