import React from 'react';
import { DOTS, usePagination } from './hooks/usePagination';
import { PaginationContainer, PaginationItem } from './styled';
import { isMobile } from '../../lib/lib';
import ArrowIcon from '../Icons/ArrowIcon/ArrowIcon';

const Pagination = (props) => {
	const {
		onPageChange,
		totalCount,
		siblingCount = isMobile() ? 0 : 1,
		currentPage,
		pageSize,
	} = props;

	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize,
	});

	const onNext = () => {
		onPageChange(currentPage + 1);
	};

	const onPrevious = () => {
		onPageChange(currentPage - 1);
	};

	const lastPage = paginationRange[paginationRange.length - 1];

	return (
		<>
			{currentPage === 0 || paginationRange.length < 2 ? null : (
				<PaginationContainer>
					<PaginationItem
						className={currentPage === 1 ? 'disabled' : ''}
						onClick={onPrevious}>
						<div className="arrow left">
							<ArrowIcon />
						</div>
					</PaginationItem>

					{paginationRange.map((pageNumber, idx) => {
						if (pageNumber === DOTS) {
							return (
								<PaginationItem key={idx} className="dots">
									&#8230;
								</PaginationItem>
							);
						}

						return (
							<PaginationItem
								key={idx}
								className={pageNumber === currentPage ? 'selected' : ''}
								onClick={() => onPageChange(pageNumber)}>
								{pageNumber}
							</PaginationItem>
						);
					})}

					<PaginationItem
						className={currentPage === lastPage ? 'disabled' : ''}
						onClick={onNext}>
						<div className="arrow right">
							<ArrowIcon />
						</div>
					</PaginationItem>
				</PaginationContainer>
			)}
		</>
	);
};

export default Pagination;
