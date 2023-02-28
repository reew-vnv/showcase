import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/button/button';

// Testing Component
export const BugButton = () => {
    const [error, setError] = useState(false);
    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        <Button onClick={onThrow}>
            throw error
        </Button>
    );
};
