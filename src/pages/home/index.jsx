import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

//styles
import './home.scss';

//components
import Pagination from '../../components/pagination';
import LinkCard from '../../components/linkCard';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { setLinks, setFilter } from '../../redux/links/actions';

//helpers
import { filters } from '../../helpers/filtersType';

const Home = () => {
    //redux
    const { links, selectedFilter } = useSelector(state => state.links);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLinks());
    }, []);

    const onChangeFilterSelect = (event) => {
        dispatch(setFilter(parseInt(event.target.value)));
    }

    return (
        <div className="home">
            <div className="home-container">
                <Link className="home-addLinkButton" to="/addLink">Submit A Link</Link>
                <div className="home-line" />
                <select className="home-sortSelectBox" onChange={onChangeFilterSelect} defaultValue={selectedFilter}>
                    <option value={filters.default}>Order by</option>
                    <option value={filters.mostVote}>Most Voted</option>
                    <option value={filters.lessVote}>Less Voted</option>
                </select>
                <Pagination
                    data={links}
                    limit={5}
                    renderData={item => (
                        <LinkCard
                            key={`linkCard-${item.id}`}
                            id={item.id}
                            link={item.link}
                            name={item.name}
                            votePoint={item.votePoint} />
                    )}
                    noDataView={() => (<span className="home-emptyState">You not add link yet</span>)}
                />
            </div>
        </div>
    );
}

export default Home;
