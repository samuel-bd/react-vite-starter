/** @jsxImportSource @emotion/react */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';
import Button from '../Button/Button';

export const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div
            css={{
                display: 'flex',
                gap: '30px',
                alignItems: 'center',
            }}
        >
            <Button
                aria-label="Increment Value"
                label="Increment"
                rounded="8"
                type="primary"
                onClick={() => dispatch(increment())}
            />
            <span>{count}</span>
            <Button
                aria-label="Decrement Value"
                label="Decrement"
                rounded="8"
                type="secondary"
                onClick={() => dispatch(decrement())}
            />
        </div>
    );
};
