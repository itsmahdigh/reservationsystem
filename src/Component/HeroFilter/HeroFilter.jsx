import React, { useState, useEffect } from 'react';
import './HeroFilter.css'
const ListItems = () => {
        const [selectedList, setSelectedList] = useState('general');
        const [generalList, setGeneralList] = useState([
                { id: '1', persianText: 'آرایشگاه فرید', },
                { id: '2', persianText: 'آرایشگاه احسان', },
                { id: '3', persianText: 'آرایشگاه فرید', },
                { id: '4', persianText: 'آرایشگاه احسان', },
                { id: '5', persianText: 'آرایشگاه فرید', },
                { id: '6', persianText: 'آرایشگاه احسان', },
                { id: '7', persianText: 'آرایشگاه فرید', },
                { id: '8', persianText: 'آرایشگاه احسان', },
        ]);
        const [citiesList, setCitiesList] = useState([
                { cityName: 'تهران', persianName: 'تهران' },
                { cityName: 'مشهد', persianName: 'مشهد' },
                { cityName: 'اصفهان', persianName: 'اصفهان' },
        ]);
        const [nearme, setNearMe] = useState([
                { id: '1', persianName: 'میانه خیابان امام' },

        ]);
        useEffect(() => {

                setCitiesList([
                        { cityName: 'Tehran', persianName: 'تهران' },
                        { cityName: 'Mashhad', persianName: 'مشهد' },
                        { cityName: 'Isfahan', persianName: 'اصفهان' },
                ]);
        }, []);

        const handleListClick = (listType) => {
                setSelectedList(listType);
        };

        const renderList = () => {
                if (selectedList === 'general') {
                        return (
                                <ul className="list-items">
                                        {generalList.map((item) => (
                                                <li key={item.id}>
                                                        <span>{item.persianText}</span>
                                                </li>
                                        ))}
                                </ul>
                        );
                } else if (selectedList === 'cities') {
                        return (
                                <ul className="list-items">
                                        {citiesList.map((city) => (
                                                <li key={city.cityName}>
                                                        <span>{city.persianName}</span>
                                                </li>
                                        ))}
                                </ul>
                        );
                }
                else if (selectedList === 'nearme') {
                        return (
                                <ul className="list-items">
                                        {nearme.map((near) => (
                                                <li key={near.id}>
                                                        <span>{near.persianName}</span>
                                                </li>
                                        ))}
                                </ul>
                        );
                }

                else {
                        return <div>No list selected</div>;
                }
        };

        return (
                <div className='items' dir='rtl'>
                        <div className="list-options">
                                <div>
                                        <button onClick={() => handleListClick('general')}>
                                                لیست کلی آرایشگاه ها
                                        </button>
                                </div>
                                <div>
                                        <button onClick={() => handleListClick('cities')}>براساس شهر</button>
                                </div>
                                <div>
                                        <button onClick={() => handleListClick('nearme')}>نزدیک من</button>
                                </div>

                        </div>
                        <hr />
                        {renderList()}
                </div>
        );
};

export default ListItems;