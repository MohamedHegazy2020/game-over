import React from 'react'
import load from './loading.module.css'
export default function Loading() {
  return (
    <>
      <div className={load.loading}>
        {" "}
        <div class={load.ldsRoller}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}


