import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {IndicatorProps} from '../../interface/indicator.interface';
import {IndicatorWrapper} from '../style/style';

const Indicator = ({direction, id, onclick}:IndicatorProps) => (
    <IndicatorWrapper dir={direction} id={id} onClick={onclick}>
        {direction === "next" ? <FontAwesomeIcon icon="caret-right" size="lg" /> : <FontAwesomeIcon icon="caret-left" size="lg" />}
    </IndicatorWrapper>
)

export default Indicator;