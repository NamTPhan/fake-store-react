import React from "react";
import "./IndeterminateProgressBar.scss";

interface IndeterminateProgressBarProps {
  isLoading?: boolean;
}

export const IndeterminateProgressBar = ({
  isLoading,
}: IndeterminateProgressBarProps) => {
  if (isLoading) {
    return (
      <div className='indeterminate-progress-bar'>
        <div className='indeterminate-progress-bar__progress' />
      </div>
    );
  }
  return <div />;
};
