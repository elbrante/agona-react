import React from 'react';

interface Props {
    state: boolean
}


export const PromoList = ({state}: Props) => {
    return (
        <div>
            {state ? <span>Промокоды(тест)</span> : null}

        </div>
    );
};

