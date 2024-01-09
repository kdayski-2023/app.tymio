import styled from 'styled-components';
import { COLORS } from '../../../models/colors';

export const Icon = styled.svg`
	stroke: ${COLORS.PURPLE_GRAY2};
	path {
		fill: ${COLORS.PURPLE_GRAY2};
	}

	&:hover {
		stroke: ${COLORS.PURPLE_BRIGHT};
		path {
			fill: ${COLORS.PURPLE_BRIGHT};
		}
	}

	&:disabled {
		stroke: ${COLORS.PURPLE_GRAY2};
		path {
			fill: ${COLORS.PURPLE_GRAY2};
		}
	}

	&:focus {
		stroke: ${COLORS.PURPLE_BRIGHT};
		path {
			fill: ${COLORS.PURPLE_BRIGHT};
		}
	}
`;
