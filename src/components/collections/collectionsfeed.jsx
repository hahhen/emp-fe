'use client'

import Collection from './collection';

export default function CollectionFeed({ collections }) {
    return (
        collections.map((collection) => (
            <Collection key={collection.id} collection={collection} />
        ))
    )
}