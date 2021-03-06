import styled from 'styled-components';

export const Activator = styled.div`
    margin-left: 10px;
    margin-right: 5px;

    i {
        /* display: none; */
        width: 15px;
        border-radius: 50%;
        height: 15px;
        padding: 6px 4px 4px 6px;
        font-size: 12px;
        color: rgb(128, 128, 128);
    }

    &:hover {
        cursor: pointer;
        i {
            color: rgb(202, 202, 202);
            background-color: rgb(104, 104, 104);
        }
    }
`;

export const Content = styled.ul`
    ${props => {
        if (props.side === 'left') {
            return 'right:35px;  top: 5px;';
        } else if (props.side === 'below') {
            return 'top: 40px; left: 5px;';
        } else if (props.side === 'above') {
            return 'bottom: 35px; right: -17px;';
        }
    }}
    position: absolute;
    width: ${props => (props.width ? props.width : 'max-content')};
    border-radius: 5px;
    list-style-type: none;
    margin: 0;
    z-index: 50;
    background-color: rgba(15, 15, 15, 0.925);
`;

export const Element = styled.li`
    cursor: pointer;
    line-height: 30px;
    color: #dadada;
    margin: 0;
    padding: 0 8px;
    height: 30px;
    box-sizing: border-box;
    &:hover {
        background-color: #5e5e5e;
    }

    form {
        padding: 0;
        background-color: transparent;
    }

    input {
        width: 100%;
        height: 28px;
        color: #dadada;
        outline: none;
        border: none;
        background: transparent;
        font-size: 15px;
        padding-left: 5px;
        ::placeholder {
            color: #bababa;
            opacity: 1;
        }
    }
`;

export const Divider = styled.hr`
    border: 0.5px solid #777;
    margin: 2.5px 0;
`;

export const ToggleWrapper = styled.div`
    z-index: 200;
    position: relative;
`;
