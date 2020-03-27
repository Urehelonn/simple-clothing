import React from 'react';
import './preview-collection.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

const PreviewCollection = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items
                .map(({ id, ...itemsProps }) => (
                    <CollectionItem key={id}{...itemsProps}/>
                ))}
        </div>
    </div>
);

export default PreviewCollection;
