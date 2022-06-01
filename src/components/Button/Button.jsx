/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { variables } from '../../config/variables';
import PropTypes from 'prop-types';

const EmotionButton = styled.button`
    background-color: ${variables.colors.blue80};
    color: ${(props) =>
        props.secondary
            ? variables.textColors.colorTextSecondary
            : variables.textColors.colorTextPrimary};
    padding: ${variables.padding.default} ${variables.padding.lg};
    font-size: ${variables.font.fontSize.default};
    outline: none;
    border: none;
    cursor: pointer;

    ${(props) => {
        return (
            props.disabled &&
            css`
                :disabled {
                    opacity: 0.4;
                    pointer-events: none;
                }
            `
        );
    }}

    ${(props) => {
        return (
            props.rounded &&
            css`
                border-radius: ${props.rounded + 'px'};
            `
        );
    }}

    ${(props) => {
        return (
            props.type === 'primary' &&
            css`
                background: ${variables.backgroundColors
                    .backgroundColorPrimary};
                color: ${variables.textColors.colorTextPrimary};
            `
        );
    }}

    ${(props) => {
        return (
            props.type === 'secondary' &&
            css`
                background: ${variables.backgroundColors
                    .backgroundColorSecondary};
                color: ${variables.textColors.colorTextSecondary};
            `
        );
    }}
`;

const Button = ({ ...props }) => {
    return (
        <EmotionButton
            {...props}
            style={{ ...props }}
            onClick={(e) => props.onClick(e)}
        >
            {props.label}
        </EmotionButton>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.any,
};

export default Button;
