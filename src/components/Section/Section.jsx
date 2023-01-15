import PropTypes from 'prop-types';
import { Card, Title } from './Section.styled';

export const Section = ({title, children}) => {
    return (
        <Card>
            <Title>
                <h2>{title}</h2>
            </Title>
            {children}
        </Card>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};