import { Button, ButtonTheme } from 'shared/ui/button/button';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../model/selectors/get_counter_value/get_counter_value';
import { counterActions } from '../model/slice/counter_slice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation('main');

    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            <h1 data-testid="value-title">
                {t('Counter Value')}
                {' '}
                =
                {' '}
                {counterValue}
            </h1>
            <Button
                onClick={increment}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                data-testid="increment-btn"
            >
                {t('Counter Increment')}
            </Button>
            <Button
                onClick={decrement}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                data-testid="decrement-btn"
            >
                {t('Counter Decrement')}
            </Button>
        </div>
    );
};
