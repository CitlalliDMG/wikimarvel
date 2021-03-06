import React from "react";

const CollectionSummary = ({ collection }) => {
  return (
    <article className="collection-info">
      <p className="bold-text"> Collection name: </p>
      <p className="text">{collection.collectionName}</p>
      <p className="bold-text"> Description: </p>
      <p className="text">{collection.description}</p>
      <p className="bold-text"> Number of comics: </p>
      <p className="text">{collection.total}</p>
      <p className="bold-text"> Comics in the collection: </p>
      {collection.comics &&
        collection.comics.map(comic => {
          return (
            <p key={`${collection.collectionName} ${comic.id}`}>
              {comic.title}
            </p>
          );
        })}
      <button className="search-button margin-collection-button">Edit</button>
      <button className="search-button">Delete</button>
    </article>
  );
};

export default CollectionSummary;
