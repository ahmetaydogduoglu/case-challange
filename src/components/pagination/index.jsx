import classNames from 'classnames';
import React, { useEffect, useState } from 'react'

//styles 
import './pagination.scss';

const Pagination = ({ data, limit, renderData, noDataView }) => {
    //states
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState([]);

    useEffect(() => {
        const halfPage = data.length % limit > 0 ? 1 : 0;
        const totalPageCount = Math.floor(data.length / limit) + halfPage;

        setTotalPage(Array.from({ length: totalPageCount }, (_, i) => i + 1));
    }, [data]);

    useEffect(() => {
        if (getData().length === 0 && currentPage > 1) {
            setCurrentPage(p => p - 1);
        }
    }, [totalPage]);

    const setCurrentPageFromPagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const getData = () => {
        const startIndex = currentPage * limit - limit;
        const endIndex = startIndex + limit;

        return data.slice(startIndex, endIndex);
    }

    const goNextPage = () => {
        setCurrentPage(p => p + 1);
    }

    const goPrevPage = () => {
        setCurrentPage(p => p - 1);
    }

    return (
        <div className="pagination" test-id="pagination">
            {
                data.length > 0 ? getData().map((item, index) => renderData(item, index)) : noDataView()
            }
            {
                data.length > 0 && <div className="pagination-paginationButtons">
                    {
                        currentPage !== 1 && <span
                            className="pagination-prev"
                            onClick={goPrevPage}>PREV</span>
                    }
                    {
                        totalPage.map(item => (
                            <span
                                onClick={() => setCurrentPageFromPagination(item)}
                                className={classNames('pagination-button', { 'pagination-button-isActive': item === currentPage })}
                                key={`paginationButton-${item}`}>
                                {item}
                            </span>
                        ))
                    }
                    {
                        currentPage !== totalPage.length && <span
                            className="pagination-next"
                            onClick={goNextPage}>NEXT</span>
                    }
                </div>
            }
        </div>
    )
}

export default Pagination;
