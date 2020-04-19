import React, { useState } from 'react';

import {
  EuiButtonEmpty,
  EuiContextMenuItem,
  EuiContextMenuPanel,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPagination,
  EuiPopover,
} from '@elastic/eui';
import  { Component } from 'react'

export default (props) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const {rowPerPage,pageCount}=props;
  let rowCount=rowPerPage;
  const PAGE_COUNT = pageCount;
  //console.log(pageCount)
 //console.log(rowPerPage)
  const onButtonClick = () => setIsPopoverOpen(isPopoverOpen => !isPopoverOpen);
  const closePop = (pageSize) => {
      setIsPopoverOpen(false);
      props.pageSizeCallback(pageSize)

    };

  const goToPage = pageNumber =>{
    setActivePage(pageNumber);
    props.goToPage(pageNumber);
  } 

  const button = (
    <EuiButtonEmpty
      size="s"
      color="text"

  iconType="arrowDown"
  iconSide="right"
  onClick={onButtonClick}>
  Rows per page:{rowCount}
</EuiButtonEmpty>
  );

  const items = [
    <EuiContextMenuItem
      key="3 rows"
      icon="empty"
      onClick={() => {
        rowCount=3;
        //console.log(rowCount)
        closePop(3);

      }}>
      3 rows
    </EuiContextMenuItem>,
    <EuiContextMenuItem
      key="4 rows"
      icon="empty"
      onClick={() => {
        closePop(4);

      }}>
      4 rows
    </EuiContextMenuItem>,
    <EuiContextMenuItem
      key="8 rows"
      icon="check"
      onClick={() => {
        closePop(8);

      }}>
      8 rows
    </EuiContextMenuItem>,
    <EuiContextMenuItem
      key="10 rows"
      icon="empty"
      onClick={() => {
        closePop(10);

      }}>
      10 rows
    </EuiContextMenuItem>,
  ];

  return (
    <EuiFlexGroup justifyContent="spaceBetween" alignItems="center">
      <EuiFlexItem grow={false}>
        <EuiPopover
          button={button}
          isOpen={isPopoverOpen}
          closePop={closePop}
          panelPaddingSize="none">
          <EuiContextMenuPanel items={items} />
        </EuiPopover>
      </EuiFlexItem>

  <EuiFlexItem grow={false}>
    <EuiPagination
      pageCount={PAGE_COUNT}
      activePage={activePage}
      onPageClick={goToPage}
    />
  </EuiFlexItem>
</EuiFlexGroup>
  );
};

