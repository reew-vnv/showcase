import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/portal/portal';
import cls from './modal.module.scss';

const ANIMATION_DELAY = 300;

interface ModalProps {
    className?: string,
    children?: ReactNode,
    isOpen?: boolean,
    onClose: () => void,
    lazy?: boolean
}

export const Modal = (props: ModalProps) => {
    const {
        className, children, isOpen, onClose, lazy,
    } = props;

    const [isMounted, setIsMounted] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    const onContentClick = (e: React.MouseEvent) => e.stopPropagation();

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.is_closing]: isClosing,
    };

    if (lazy && !isMounted) return null;
    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};