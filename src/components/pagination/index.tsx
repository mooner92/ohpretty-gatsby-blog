import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  margin: 42px 0;
  align-items: center;
  justify-content: space-between;
`;

const PaginationItem = styled(Link)`
  padding: 10px 16px;
  margin: 0;
  color: #343a40;
  font-size: 0.95rem;
  text-decoration: none;
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 2px;
  transition: background-color 0.3s ease;

  :hover {
    background-color: #e9ecef;
  }
`;

type PageDataProps = {
  cur: number;
  max: number;
  categoryQuery: string;
};

const Pagination: React.FC<PageDataProps> = ({ cur, max, categoryQuery }) => {
  const path = categoryQuery ? categoryQuery.toLowerCase() : null;
  const rst = [];

  if (cur !== 1)
    rst.push(
      <PaginationItem
        key={`back`}
        to={
          path === null
            ? cur - 1 == 1
              ? `/post/`
              : `/post/${cur - 1}/`
            : cur - 1 == 1
            ? `/category/${path}/`
            : `/category/${path}/${cur - 1}/`
        }
      >
        &larr;&nbsp;&nbsp;Newer Posts
      </PaginationItem>,
    );
  else rst.push(<div key={`empty`}></div>);
  if (cur != max)
    rst.push(
      <PaginationItem key={`foward`} to={path === null ? `/post/${cur + 1}/` : `/category/${path}/${cur + 1}/`}>
        Older Posts&nbsp;&nbsp;&rarr;
      </PaginationItem>,
    );
  return <PaginationContainer>{rst}</PaginationContainer>;
};

export default Pagination;
