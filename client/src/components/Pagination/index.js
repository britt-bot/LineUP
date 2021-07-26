import React from "react";
import { Pagination } from "react-bootstrap";

const Pages = (props) => {
  const { items } = props;
  let currentPage = 0;
  let cardsPerPage = 6;
  // console.log(items);

  const itemsComponent = items.map((item, i) => {
    return (
      <Pagination.Item key={i} active={i === currentPage}>
        {i + 1}
      </Pagination.Item>
    );
  });

  return (
    <div>
      <Pagination size="sm">{itemsComponent}</Pagination>
    </div>
  );
};

export default Pages;
