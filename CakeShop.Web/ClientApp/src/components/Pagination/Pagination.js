import React, { Component, Fragment } from 'react';

export default class Pagination extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countProducts: this.props.productsCount,
            skip: 0,
            take: 8,
            currentPage: 1,
        }
    }

    render() {
        const pages = [];

        for (let i = 1; i <= 3; i++) {
            pages.push(i);
        }

        return (
            <nav aria-label="Page navigation example mt-md-3">
                <ul className="pagination">
                    {this.state.currentPage > 1 ? (
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </a>
                        </li>
                    ) : (
                            <Fragment></Fragment>
                        )}
                    {pages.map(page => {
                        const pageNumber = `/products/${page}`;
                       return ( <li className="page-item">
                           <a class="page-link" href={pageNumber}>{page}</a>
                        </li>)
                    })}

                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}