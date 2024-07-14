import React from 'react'
import { NavLink } from 'react-router-dom'
import "../assets/css/placeOrder.css";
import { Store, WashingMachine } from 'lucide-react';

type Props = {
  children: React.ReactNode;
};

function PlaceOrder({ children }: Props): JSX.Element {
  return (
    <>
      <main className='px-40 py-20'>
        <h2 className='text-6xl'>Hey Jayesh Arya</h2>

        <div className="placeOrderTabs" id="placeOrderTabs">
          <NavLink
            className="placeOrderTab placeOrderTab-store"
            to="/placeorder/explore-stores"
          >
            <Store />
            Explore stores
          </NavLink>
          <NavLink
            className="placeOrderTab placeOrderTab-basket"
            to="/placeorder/prepare-basket"
          >
            <WashingMachine />
            Prepare basket
          </NavLink>
        </div>

        <div>{children}</div>
      </main>
    </>
  );
}

export default PlaceOrder