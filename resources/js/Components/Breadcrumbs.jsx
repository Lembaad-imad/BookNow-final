import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Breadcrumbs = ({ routeName, params }) => {
    const [breadcrumbs, setBreadcrumbs] = useState([]);

    useEffect(() => {
        const fetchBreadcrumbs = async () => {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/breadcrumbs', {
                    route_name: routeName,
                    params: params,
                });
                console.log('Breadcrumbs response:', response.data); // Debug log
                setBreadcrumbs(response.data);
            } catch (error) {
                console.error('Error fetching breadcrumbs:', error);
                if (error.response) {
                    console.error('Response data:', error.response.data);
                    console.error('Response status:', error.response.status);
                    console.error('Response headers:', error.response.headers);
                } else if (error.request) {
                    console.error('Request data:', error.request);
                } else {
                    console.error('Error message:', error.message);
                }
            }
        };

        fetchBreadcrumbs();
    }, [routeName, params]);

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {breadcrumbs.map((breadcrumb, index) => (
                    <li key={index} className="breadcrumb-item">
                        {breadcrumb.url ? (
                            <a href={breadcrumb.url}>{breadcrumb.title}</a>
                        ) : (
                            breadcrumb.title
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
